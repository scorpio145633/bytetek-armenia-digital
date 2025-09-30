-- Add optional fields to contact_messages table for enhanced contact form
ALTER TABLE public.contact_messages
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS company TEXT,
ADD COLUMN IF NOT EXISTS subject TEXT,
ADD COLUMN IF NOT EXISTS service TEXT;

-- Add comment explaining the new fields
COMMENT ON COLUMN public.contact_messages.phone IS 'Optional phone number from contact form';
COMMENT ON COLUMN public.contact_messages.company IS 'Optional company name from contact form';
COMMENT ON COLUMN public.contact_messages.subject IS 'Optional subject line from contact form';
COMMENT ON COLUMN public.contact_messages.service IS 'Optional service interest from contact form';