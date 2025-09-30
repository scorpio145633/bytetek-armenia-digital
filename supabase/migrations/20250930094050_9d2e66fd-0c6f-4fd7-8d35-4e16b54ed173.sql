-- Remove the overly permissive SELECT policy that exposes PII
DROP POLICY IF EXISTS "Only authenticated users can view messages" ON public.contact_messages;

-- Add audit fields for security monitoring
ALTER TABLE public.contact_messages
ADD COLUMN IF NOT EXISTS ip_address TEXT,
ADD COLUMN IF NOT EXISTS user_agent TEXT;

-- Create index for monitoring and rate limiting
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages(email);

-- Add comment explaining the security model
COMMENT ON TABLE public.contact_messages IS 'Contact form submissions - write-only for public, no SELECT access to protect PII';