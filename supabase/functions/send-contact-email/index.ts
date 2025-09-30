import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Sending contact email:", data);

    // Send email to business
    const emailResponse = await resend.emails.send({
      from: "ByteTech Contact <onboarding@resend.dev>",
      to: ["business@bytetech.am"],
      subject: `New Contact Request: ${data.subject}`,
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
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></div>
              </div>
              
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}
              
              ${data.company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}
              
              ${data.service ? `
              <div class="field">
                <div class="label">Service Requested</div>
                <div class="value" style="border-left-color: #8b5cf6;">${data.service}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${data.subject}</div>
              </div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${data.message}</div>
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

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
