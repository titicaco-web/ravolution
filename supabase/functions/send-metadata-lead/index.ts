import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT = "ivan.daza@ravolution.se";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim().slice(0, 120);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const whatsapp = String(body.whatsapp ?? "").trim().slice(0, 40);
    const link = String(body.link ?? "").trim().slice(0, 500);
    const description = String(body.description ?? "").trim().slice(0, 2000);

    if (!email && !whatsapp) {
      return new Response(
        JSON.stringify({ error: "Provide either an email or a WhatsApp number." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (!description && !link) {
      return new Response(
        JSON.stringify({ error: "Tell us what you need help with (link or description)." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

    const html = `
<h2>New lead from the Metadata Machine</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:system-ui,sans-serif;">
  ${name ? `<tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${esc(name)}</td></tr>` : ""}
  ${email ? `<tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>` : ""}
  ${whatsapp ? `<tr><td style="padding:6px 12px;font-weight:bold;">WhatsApp</td><td style="padding:6px 12px;">${esc(whatsapp)}</td></tr>` : ""}
  ${link ? `<tr><td style="padding:6px 12px;font-weight:bold;">Link</td><td style="padding:6px 12px;"><a href="${esc(link)}">${esc(link)}</a></td></tr>` : ""}
</table>
${description ? `<h3>What they want help with</h3><p style="white-space:pre-wrap;font-family:system-ui,sans-serif;">${esc(description)}</p>` : ""}
<p style="color:#888;font-size:12px;margin-top:24px;">Sent from ravolution.se/metadatamachine</p>
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Metadata Machine <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email || undefined,
        subject: `Metadata Machine lead${name ? ` — ${name}` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to send email." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
