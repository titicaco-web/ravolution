import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT = "ivan.daza@ravolution.se";

const escapeHtml = (s: unknown) =>
  String(s ?? "")
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
    const {
      firstName, lastName, email, phone, city, linkedin,
      company, orgNumber, industries, primaryPlatform,
      pastDeal, network, startDate, source, consent, language,
    } = body ?? {};

    if (!firstName || !lastName || !email || !phone || !city || !linkedin || !pastDeal || !startDate || !consent) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (String(email).length > 320 || String(pastDeal).length > 5000) {
      return new Response(JSON.stringify({ error: "Input too long." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured." }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const lang = language === "sv" ? "sv" : "en";
    const industriesList = Array.isArray(industries) ? industries.map(escapeHtml).join(", ") : escapeHtml(industries);

    const internalHtml = `
<h2 style="font-family:Arial,sans-serif;color:#0F2747;">New Sales Partner Application</h2>
<p style="color:#666;font-size:13px;font-family:Arial,sans-serif;">Submitted via ravolution.se — language: ${escapeHtml(lang)}</p>
<table style="border-collapse:collapse;width:100%;max-width:680px;font-family:Arial,sans-serif;font-size:14px;">
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Name</td><td style="padding:6px 12px;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Email</td><td style="padding:6px 12px;">${escapeHtml(email)}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Phone</td><td style="padding:6px 12px;">${escapeHtml(phone)}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">City</td><td style="padding:6px 12px;">${escapeHtml(city)}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">LinkedIn</td><td style="padding:6px 12px;"><a href="${escapeHtml(linkedin)}">${escapeHtml(linkedin)}</a></td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Company</td><td style="padding:6px 12px;">${escapeHtml(company) || "—"}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Org no / SSN</td><td style="padding:6px 12px;">${escapeHtml(orgNumber) || "—"}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Industries</td><td style="padding:6px 12px;">${industriesList || "—"}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Primary platform</td><td style="padding:6px 12px;">${escapeHtml(primaryPlatform)}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Start date</td><td style="padding:6px 12px;">${escapeHtml(startDate)}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;background:#f7f5f0;">Source</td><td style="padding:6px 12px;">${escapeHtml(source) || "—"}</td></tr>
</table>
<h3 style="font-family:Arial,sans-serif;color:#0F2747;margin-top:24px;">Past deal</h3>
<div style="padding:12px;background:#f7f5f0;border-left:3px solid #B08D57;font-family:Arial,sans-serif;font-size:14px;">${escapeHtml(pastDeal).replace(/\n/g, "<br/>")}</div>
${network ? `<h3 style="font-family:Arial,sans-serif;color:#0F2747;margin-top:24px;">Network</h3><div style="padding:12px;background:#f7f5f0;border-left:3px solid #B08D57;font-family:Arial,sans-serif;font-size:14px;">${escapeHtml(network).replace(/\n/g, "<br/>")}</div>` : ""}
`;

    const confirmHtml = lang === "sv" ? `
<div style="font-family:Arial,sans-serif;color:#0F2747;max-width:600px;">
<h2 style="color:#0F2747;">Hej ${escapeHtml(firstName)},</h2>
<p>Tack för din ansökan som säljpartner hos Ravolution AB.</p>
<p>Vi läser varje ansökan personligen och hör av oss inom fem arbetsdagar.</p>
<p>Under tiden — gå gärna igenom vår demoinstans på <a href="https://businesssweden.ravolution.se">businesssweden.ravolution.se</a> och fundera på vilka kunder i ditt nätverk som skulle få mest värde.</p>
<p style="margin-top:24px;">Vänliga hälsningar,<br/><strong>Ivan Daza</strong><br/>Founder &amp; CEO, Ravolution AB</p>
</div>` : `
<div style="font-family:Arial,sans-serif;color:#0F2747;max-width:600px;">
<h2 style="color:#0F2747;">Hi ${escapeHtml(firstName)},</h2>
<p>Thank you for applying to become a sales partner at Ravolution AB.</p>
<p>We read every application personally and will get back to you within five business days.</p>
<p>In the meantime, take a look at our live demo at <a href="https://businesssweden.ravolution.se">businesssweden.ravolution.se</a> and start thinking about which clients in your network would benefit most.</p>
<p style="margin-top:24px;">Best regards,<br/><strong>Ivan Daza</strong><br/>Founder &amp; CEO, Ravolution AB</p>
</div>`;

    // Internal notification to Ivan
    const internalRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Ravolution Sales Partner <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `New Sales Partner Application — ${firstName} ${lastName} (${primaryPlatform})`,
        html: internalHtml,
      }),
    });
    if (!internalRes.ok) {
      console.error("Internal email failed:", await internalRes.text());
    }

    // Confirmation to applicant (with hidden BCC to Ivan as requested)
    const confirmRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Ravolution AB <onboarding@resend.dev>",
        to: [email],
        bcc: [RECIPIENT],
        subject: lang === "sv"
          ? "Tack för din ansökan — Ravolution säljpartner"
          : "Thank you for your application — Ravolution Sales Partner",
        html: confirmHtml,
      }),
    });
    if (!confirmRes.ok) {
      console.error("Confirmation email failed:", await confirmRes.text());
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
