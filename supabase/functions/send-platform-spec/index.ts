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
    const body = await req.json();
    const { name, email, company, budget, launch, idea, components, industries, addons, notSure } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Count total selections
    let totalCount = 0;
    if (industries && Array.isArray(industries)) {
      for (const ind of industries) {
        totalCount += (ind.functions || []).length;
      }
    }
    if (addons && Array.isArray(addons)) {
      totalCount += addons.length;
    }
    // Legacy fallback
    if (totalCount === 0 && components && Array.isArray(components)) {
      totalCount = components.length;
    }

    if (totalCount === 0 && !notSure) {
      return new Response(
        JSON.stringify({ error: "At least one function must be selected, or mark 'Not sure'." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const complexity =
      totalCount <= 8 ? "Small (4–8 weeks)" : totalCount <= 20 ? "Medium (8–16 weeks)" : "Large (16–28 weeks)";

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build industry sections HTML
    let industriesHtml = "";
    if (industries && Array.isArray(industries) && industries.length > 0) {
      industriesHtml = industries.map((ind: { industry: string; functions: string[] }) => `
        <h3 style="margin:16px 0 8px;">${ind.industry}</h3>
        <ul>${(ind.functions || []).map((f: string) => `<li>${f}</li>`).join("")}</ul>
      `).join("");
    }

    // Legacy fallback
    let legacyHtml = "";
    if (!industriesHtml && components && Array.isArray(components) && components.length > 0) {
      legacyHtml = `<h3>Selected Components</h3><ul>${components.map((c: string) => `<li>${c}</li>`).join("")}</ul>`;
    }

    const addonsHtml = addons && Array.isArray(addons) && addons.length > 0
      ? `<h3 style="margin:16px 0 8px;">Cross-Industry Add-Ons</h3><ul>${addons.map((a: string) => `<li>${a}</li>`).join("")}</ul>`
      : "";

    const html = `
<h2>New Platform Spec from ${name}</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${name}</td></tr>
  <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
  ${company ? `<tr><td style="padding:6px 12px;font-weight:bold;">Company</td><td style="padding:6px 12px;">${company}</td></tr>` : ""}
  ${budget ? `<tr><td style="padding:6px 12px;font-weight:bold;">Budget</td><td style="padding:6px 12px;">${budget}</td></tr>` : ""}
  ${launch ? `<tr><td style="padding:6px 12px;font-weight:bold;">Desired launch</td><td style="padding:6px 12px;">${launch}</td></tr>` : ""}
  <tr><td style="padding:6px 12px;font-weight:bold;">Total functions (${totalCount})</td><td style="padding:6px 12px;">${complexity}</td></tr>
  ${notSure ? `<tr><td style="padding:6px 12px;font-weight:bold;">Note</td><td style="padding:6px 12px;">User marked "Not sure — needs guidance"</td></tr>` : ""}
</table>
${industriesHtml}${legacyHtml}${addonsHtml}
${idea ? `<h3>Notes</h3><p>${idea}</p>` : ""}
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
