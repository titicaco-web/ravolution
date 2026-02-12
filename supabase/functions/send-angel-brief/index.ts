import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT = "titicaco@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, company, industry, stage, timeline, description, deckUrl } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const html = `
<h2>New Angel Investor Brief from ${name}</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${name}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
  ${company ? `<tr><td style="padding:6px 12px;font-weight:bold;">Company</td><td style="padding:6px 12px;">${company}</td></tr>` : ""}
  ${industry ? `<tr><td style="padding:6px 12px;font-weight:bold;">Industry</td><td style="padding:6px 12px;">${industry}</td></tr>` : ""}
  ${stage ? `<tr><td style="padding:6px 12px;font-weight:bold;">Stage</td><td style="padding:6px 12px;">${stage}</td></tr>` : ""}
  ${timeline ? `<tr><td style="padding:6px 12px;font-weight:bold;">Timeline</td><td style="padding:6px 12px;">${timeline}</td></tr>` : ""}
  ${deckUrl ? `<tr><td style="padding:6px 12px;font-weight:bold;">Deck/Link</td><td style="padding:6px 12px;"><a href="${deckUrl}">${deckUrl}</a></td></tr>` : ""}
</table>
${description ? `<h3>What they're building</h3><p>${description}</p>` : ""}
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ravolution Angel Brief <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `Angel Brief from ${name}${company ? ` (${company})` : ""} – ${stage || "Unknown stage"}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to send email." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
