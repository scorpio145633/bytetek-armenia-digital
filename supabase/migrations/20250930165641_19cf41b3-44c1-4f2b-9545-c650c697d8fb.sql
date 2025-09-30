-- Security Fix 1: Secure Admin Bootstrap System
-- Create function to auto-assign admin role to first admin email
CREATE OR REPLACE FUNCTION public.assign_first_admin()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  first_admin_email text;
  admin_count int;
BEGIN
  -- Get the first admin email from app settings (you'll set this via Supabase dashboard)
  -- For now, we'll check if there are any admins at all
  SELECT COUNT(*) INTO admin_count FROM public.user_roles WHERE role = 'admin';
  
  -- If no admins exist and this is a new user, make them admin
  -- This ensures the first user becomes admin automatically
  IF admin_count = 0 THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
    
    RAISE LOG 'First admin assigned to user: %', NEW.email;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to run on new user creation
DROP TRIGGER IF EXISTS on_auth_user_created_assign_admin ON auth.users;
CREATE TRIGGER on_auth_user_created_assign_admin
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.assign_first_admin();

-- Security Fix 2: Harden Rate Limits Table
-- Create secure function for rate limit checking
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  _ip_address text,
  _endpoint text,
  _max_attempts int DEFAULT 5,
  _window_minutes int DEFAULT 60
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_attempts int;
  window_start_time timestamp with time zone;
BEGIN
  -- Calculate window start time
  window_start_time := now() - ((_window_minutes || ' minutes')::interval);
  
  -- Get current attempt count within window
  SELECT COALESCE(SUM(attempt_count), 0)
  INTO current_attempts
  FROM public.rate_limits
  WHERE ip_address = _ip_address
    AND endpoint = _endpoint
    AND window_start > window_start_time;
  
  -- Check if rate limit exceeded
  IF current_attempts >= _max_attempts THEN
    RAISE LOG 'Rate limit exceeded for IP: % on endpoint: %', _ip_address, _endpoint;
    RETURN false;
  END IF;
  
  -- Record this attempt
  INSERT INTO public.rate_limits (ip_address, endpoint, attempt_count, window_start)
  VALUES (_ip_address, _endpoint, 1, now())
  ON CONFLICT (ip_address, endpoint, window_start)
  DO UPDATE SET attempt_count = rate_limits.attempt_count + 1;
  
  RETURN true;
END;
$$;

-- Remove public INSERT access to rate_limits table
DROP POLICY IF EXISTS "Only service role can access rate limits" ON public.rate_limits;

-- Create more restrictive policy - only the check_rate_limit function can modify
CREATE POLICY "Rate limits managed by function only"
ON public.rate_limits
FOR ALL
USING (false)
WITH CHECK (false);

-- Grant execute permission on the function to authenticated and anon users
GRANT EXECUTE ON FUNCTION public.check_rate_limit TO authenticated, anon;