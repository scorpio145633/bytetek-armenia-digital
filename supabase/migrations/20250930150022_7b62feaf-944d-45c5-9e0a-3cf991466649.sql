-- Fix 1: Drop and recreate the recursive RLS policy on user_roles
DROP POLICY IF EXISTS "Only admins can manage roles" ON public.user_roles;

CREATE POLICY "Only admins can manage roles"
ON public.user_roles
FOR ALL
USING (public.is_admin(auth.uid()));

-- Fix 2: Add service role policy for rate_limits table
CREATE POLICY "Service role can manage rate limits"
ON public.rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Fix 3: Update update_updated_at_column function with proper security
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Fix 4: Update cleanup_old_rate_limits function with proper security
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  DELETE FROM public.rate_limits
  WHERE window_start < now() - interval '24 hours';
END;
$$;