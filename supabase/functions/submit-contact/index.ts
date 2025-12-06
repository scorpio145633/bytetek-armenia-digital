import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { Resend } from "https://esm.sh/resend@2.0.0";
import { getCorsHeaders } from '../_shared/cors.ts';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Validation schema (mirrors frontend zod schema)
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  service?: string;
  message: string;
  honeypot?: string; // Spam trap
}

// HTML entity encoding to prevent XSS in email templates
const escapeHtml = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

function validateInput(data: ContactFormData): { valid: boolean; error?: string } {
  // Check honeypot (should be empty)
  if (data.honeypot && data.honeypot.trim() !== '') {
    console.log('Honeypot triggered');
    return { valid: false, error: 'Invalid submission' };
  }

  // Basic validation (frontend already validated, this is a safety check)
  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 100) {
    return { valid: false, error: 'Invalid name' };
  }

  if (!data.email || data.email.trim().length > 255 || !data.email.includes('@')) {
    return { valid: false, error: 'Invalid email' };
  }

  if (!data.message || data.message.trim().length < 10 || data.message.trim().length > 2000) {
    return { valid: false, error: 'Invalid message' };
  }

  // Check for spam keywords
  const spamKeywords = ['viagra', 'cialis', 'casino', 'lottery', 'crypto mining', 'click here now'];
  const lowerMessage = data.message.toLowerCase();
  const lowerName = data.name.toLowerCase();
  
  for (const keyword of spamKeywords) {
    if (lowerMessage.includes(keyword) || lowerName.includes(keyword)) {
      console.log('Spam keyword detected:', keyword);
      return { valid: false, error: 'Invalid submission' };
    }
  }

  return { valid: true };
}

// Send email notification with sanitized content
async function sendNotificationEmail(data: ContactFormData): Promise<void> {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.log("RESEND_API_KEY not configured, skipping email notification");
    return;
  }

  const resend = new Resend(resendApiKey);
  
  // Escape all user input to prevent HTML injection in emails
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || '');
  const safeCompany = escapeHtml(data.company || '');
  const safeSubject = escapeHtml(data.subject || '');
  const safeService = escapeHtml(data.service || '');
  const safeMessage = escapeHtml(data.message);

  try {
    await resend.emails.send({
      from: "ByteTech Contact <onboarding@resend.dev>",
      to: ["business@bytetech.am"],
      subject: `New Contact Request from ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #3b82f6; border-radius: 4px; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Request</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">ByteTech Contact Form</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${safeName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${safeEmail}" style="color: #3b82f6; text-decoration: none;">${safeEmail}</a></div>
              </div>
              
              ${safePhone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${safePhone}</div>
              </div>
              ` : ''}
              
              ${safeCompany ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${safeCompany}</div>
              </div>
              ` : ''}
              
              ${safeSubject ? `
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${safeSubject}</div>
              </div>
              ` : ''}
              
              ${safeService ? `
              <div class="field">
                <div class="label">Service Requested</div>
                <div class="value" style="border-left-color: #8b5cf6;">${safeService}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${safeMessage}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the ByteTech contact form</p>
              <p>Received at ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });
    console.log("Email notification sent successfully");
  } catch (error) {
    console.error("Failed to send email notification:", error);
    // Don't throw - email failure shouldn't fail the form submission
  }
}

Deno.serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get IP address
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';

    console.log('Contact form submission received');

    // Check rate limit using secure database function
    const { data: rateLimitPassed, error: rateLimitError } = await supabase
      .rpc('check_rate_limit', {
        _ip_address: ip,
        _endpoint: 'submit-contact',
        _max_attempts: 5,
        _window_minutes: 60
      });

    if (rateLimitError || !rateLimitPassed) {
      console.error('Rate limit check failed or exceeded');
      return new Response(
        JSON.stringify({ 
          error: 'Too many submissions. Please try again later.',
          code: 'RATE_LIMIT_EXCEEDED'
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse request body
    const data: ContactFormData = await req.json();

    // Validate input
    const validation = validateInput(data);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get user agent
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // Insert contact message
    const { error: insertError } = await supabase
      .from('contact_messages')
      .insert({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone?.trim() || null,
        company: data.company?.trim() || null,
        subject: data.subject?.trim() || null,
        service: data.service?.trim() || null,
        message: data.message.trim(),
        ip_address: ip,
        user_agent: userAgent,
        status: 'new',
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to submit message. Please try again.' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Contact message submitted successfully');

    // Send email notification (non-blocking - don't fail if email fails)
    await sendNotificationEmail(data);

    return new Response(
      JSON.stringify({ success: true, message: 'Message submitted successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in submit-contact function:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred. Please try again.' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
