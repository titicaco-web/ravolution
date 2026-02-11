import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT = "titicaco@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, budget, launch, idea, components } =
      await req.json();

    if (!name || !email || !components || components.length === 0) {
      return new Response(
        JSON.stringify({ error: "Name, email and at least one component are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const count = components.length;
    const complexity =
      count <= 6 ? "Small (4–8 weeks)" : count <= 14 ? "Medium (8–16 weeks)" : "Large (16–28 weeks)";

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const html = `
<h2>New Platform Spec from ${name}</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${name}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
  ${company ? `<tr><td style="padding:6px 12px;font-weight:bold;">Company</td><td style="padding:6px 12px;">${company}</td></tr>` : ""}
  ${budget ? `<tr><td style="padding:6px 12px;font-weight:bold;">Budget</td><td style="padding:6px 12px;">${budget}</td></tr>` : ""}
  ${launch ? `<tr><td style="padding:6px 12px;font-weight:bold;">Desired launch</td><td style="padding:6px 12px;">${launch}</td></tr>` : ""}
  <tr><td style="padding:6px 12px;font-weight:bold;">Components (${count})</td><td style="padding:6px 12px;">${complexity}</td></tr>
</table>
<h3>Selected Components</h3>
<ul>${components.map((c: string) => `<li>${c}</li>`).join("")}</ul>
${idea ? `<h3>Idea Description</h3><p>${idea}</p>` : ""}
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Ravolution Platform Builder <onboarding@resend.dev>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `Platform Spec from ${name} – ${complexity}`,
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
