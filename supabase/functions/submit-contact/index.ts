import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { corsHeaders } from '../_shared/cors.ts';

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

function validateInput(data: ContactFormData): { valid: boolean; error?: string } {
  // Check honeypot (should be empty)
  if (data.honeypot && data.honeypot.trim() !== '') {
    console.log('Honeypot triggered:', data.email);
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

async function checkRateLimit(ip: string): Promise<{ allowed: boolean; retryAfter?: number }> {
  const endpoint = 'submit-contact';
  const windowSize = 60 * 60; // 1 hour in seconds
  const maxAttempts = 5;
  
  const windowStart = new Date(Date.now() - windowSize * 1000);

  // Check existing rate limit
  const { data: existing, error: selectError } = await supabase
    .from('rate_limits')
    .select('*')
    .eq('ip_address', ip)
    .eq('endpoint', endpoint)
    .gte('window_start', windowStart.toISOString())
    .order('window_start', { ascending: false })
    .limit(1);

  if (selectError) {
    console.error('Rate limit check error:', selectError);
    return { allowed: true }; // Fail open to avoid blocking legitimate users
  }

  if (existing && existing.length > 0) {
    const record = existing[0];
    
    if (record.attempt_count >= maxAttempts) {
      const windowEnd = new Date(new Date(record.window_start).getTime() + windowSize * 1000);
      const retryAfter = Math.ceil((windowEnd.getTime() - Date.now()) / 1000);
      
      console.log(`Rate limit exceeded for IP ${ip}: ${record.attempt_count} attempts`);
      return { allowed: false, retryAfter };
    }

    // Increment attempt count
    await supabase
      .from('rate_limits')
      .update({ attempt_count: record.attempt_count + 1 })
      .eq('id', record.id);

    return { allowed: true };
  }

  // Create new rate limit record
  await supabase
    .from('rate_limits')
    .insert({
      ip_address: ip,
      endpoint,
      attempt_count: 1,
      window_start: new Date().toISOString(),
    });

  return { allowed: true };
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get IP address
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';

    console.log('Contact form submission from IP:', ip);

    // Check rate limit
    const rateLimitCheck = await checkRateLimit(ip);
    if (!rateLimitCheck.allowed) {
      return new Response(
        JSON.stringify({ 
          error: 'Too many submissions. Please try again later.',
          retryAfter: rateLimitCheck.retryAfter 
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

    console.log('Contact message submitted successfully from:', data.email);

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
