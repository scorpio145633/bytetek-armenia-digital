-- Fix rate_limits RLS policy to be service-role only (critical security fix)
-- Drop the existing public policy
DROP POLICY IF EXISTS "Service role can manage rate limits" ON public.rate_limits;

-- Create a more restrictive policy that only allows service role access
CREATE POLICY "Only service role can access rate limits"
ON public.rate_limits
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;