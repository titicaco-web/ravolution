import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT = "ivan.daza@ravolution.se";

const escapeHtml = (s: string) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, company, role, email, phone, interest, message } = body ?? {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email and message are required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (
      String(name).length > 200 ||
      String(email).length > 320 ||
      String(message).length > 4000 ||
      (phone && String(phone).length > 60)
    ) {
      return new Response(JSON.stringify({ error: "Input too long." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(JSON.stringify({ error: "Email service not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : "";
    const safeRole = role ? escapeHtml(role) : "";
    const safePhone = phone ? escapeHtml(phone) : "";
    const safeInterest = interest ? escapeHtml(interest) : "Request more information";
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const html = `
<h2>Hundelser.se — New Acquisition Enquiry</h2>
<table style="border-collapse:collapse;width:100%;max-width:640px;">
  <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${safeName}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${safeEmail}</td></tr>
  ${safePhone ? `<tr><td style="padding:6px 12px;font-weight:bold;">Telephone</td><td style="padding:6px 12px;">${safePhone}</td></tr>` : ""}
  ${safeCompany ? `<tr><td style="padding:6px 12px;font-weight:bold;">Company</td><td style="padding:6px 12px;">${safeCompany}</td></tr>` : ""}
  ${safeRole ? `<tr><td style="padding:6px 12px;font-weight:bold;">Role</td><td style="padding:6px 12px;">${safeRole}</td></tr>` : ""}
  <tr><td style="padding:6px 12px;font-weight:bold;">Area of interest</td><td style="padding:6px 12px;">${safeInterest}</td></tr>
</table>
<h3 style="margin-top:20px;">Message</h3>
<div style="padding:12px;background:#f7f5f0;border-left:3px solid #B08D57;">${safeMessage}</div>
<p style="color:#999;font-size:12px;margin-top:24px;">Sent via ravolution.se/en/hundelser</p>
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ravolution <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `Hundelser.se — ${safeInterest} — from ${safeName}${safeCompany ? ` (${safeCompany})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ error: "Failed to send email." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
