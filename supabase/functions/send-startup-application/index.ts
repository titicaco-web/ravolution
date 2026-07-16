import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT = "ivan.daza@ravolution.se";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const b = await req.json();
    const {
      founder_name, email, company_name, website, country, stage,
      building, why_partner, traction, source,
    } = b;

    if (!founder_name || !email || !company_name) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured." }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const row = (k: string, v?: string) =>
      v ? `<tr><td style="padding:6px 12px;font-weight:bold;">${k}</td><td style="padding:6px 12px;">${v}</td></tr>` : "";

    const html = `
<h2>New Startup Application — ${founder_name}${company_name ? ` (${company_name})` : ""}</h2>
<table style="border-collapse:collapse;width:100%;max-width:640px;">
  ${row("Founder", founder_name)}
  ${row("Email", email)}
  ${row("Company", company_name)}
  ${row("Website", website)}
  ${row("Country", country)}
  ${row("Stage", stage)}
  ${row("Source", source)}
</table>
<h3>What they're building</h3><p>${(building || "").replace(/\n/g, "<br>")}</p>
<h3>Why they need a technical partner</h3><p>${(why_partner || "").replace(/\n/g, "<br>")}</p>
${traction ? `<h3>Traction / validation</h3><p>${traction.replace(/\n/g, "<br>")}</p>` : ""}
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Ravolution Apply <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `Application from ${founder_name}${company_name ? ` — ${company_name}` : ""} (${stage || "stage n/a"})`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ error: "Failed to send email." }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
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
