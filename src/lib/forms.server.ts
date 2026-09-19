// Server-only email rendering + delivery for every public form on the site.
// Replaces the previous Supabase Edge Functions (send-*-inquiry etc.).
const RESEND_ENDPOINT = "https://api.resend.com/emails";

export const IVAN = "ivan.daza@ravolution.se";

export type FormFields = Record<string, unknown>;

export const escapeHtml = (value: unknown): string =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const str = (value: unknown): string =>
  value === null || value === undefined ? "" : String(value);

const labelize = (key: string): string =>
  key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());

const multiline = (value: string): string =>
  escapeHtml(value).replace(/\n/g, "<br/>");

const HIDDEN_KEYS = new Set(["consent", "language", "lang"]);
const LONG_TEXT_KEYS = new Set([
  "building",
  "why_partner",
  "traction",
  "blocker",
  "message",
  "description",
  "idea",
  "notes",
  "pastDeal",
  "network",
  "brief",
  "details",
]);

function renderValue(value: unknown): string {
  if (Array.isArray(value)) {
    if (value.length === 0) return "";
    if (value.every((v) => typeof v !== "object" || v === null)) {
      return value.map((v) => escapeHtml(v)).join(", ");
    }
    return `<ul style="margin:0;padding-left:18px;">${value
      .map((v) => `<li>${renderValue(v)}</li>`)
      .join("")}</ul>`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).filter(
      ([, v]) => str(v) !== "" && !(Array.isArray(v) && v.length === 0),
    );
    if (entries.length === 0) return "";
    return `<ul style="margin:0;padding-left:18px;">${entries
      .map(([k, v]) => `<li><strong>${escapeHtml(labelize(k))}:</strong> ${renderValue(v)}</li>`)
      .join("")}</ul>`;
  }
  return multiline(str(value));
}

/** Brand-styled generic email body built from the submitted fields. */
export function renderFormEmail(title: string, fields: FormFields): string {
  const entries = Object.entries(fields).filter(
    ([key, value]) =>
      !HIDDEN_KEYS.has(key) &&
      str(value).trim() !== "" &&
      !(Array.isArray(value) && value.length === 0),
  );

  const isLong = ([key, value]: [string, unknown]) =>
    LONG_TEXT_KEYS.has(key) ||
    (typeof value === "string" && (value.length > 160 || value.includes("\n")));

  const tableRows = entries
    .filter((e) => !isLong(e))
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:bold;background:#F7F5F0;">${escapeHtml(
          labelize(key),
        )}</td><td style="padding:6px 12px;">${renderValue(value)}</td></tr>`,
    )
    .join("");

  const sections = entries
    .filter(isLong)
    .map(
      ([key, value]) =>
        `<h3 style="color:#0F2747;margin-top:24px;">${escapeHtml(labelize(key))}</h3>` +
        `<div style="padding:12px;background:#F7F5F0;border-left:3px solid #B08D57;">${renderValue(
          value,
        )}</div>`,
    )
    .join("");

  return `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#081426;max-width:680px;">
<h2 style="color:#0F2747;">${escapeHtml(title)}</h2>
<table style="border-collapse:collapse;width:100%;">${tableRows}</table>
${sections}
<p style="margin-top:28px;color:#9AA6B4;font-size:12px;">Submitted via ravolution.se</p>
</div>`;
}

type ResendPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
  bcc?: string[];
};

export async function sendResendEmail(payload: ResendPayload): Promise<void> {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) throw new Error("Email service not configured.");

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error:", detail);
    throw new Error("Failed to send email.");
  }
}

export type FormConfig = {
  /** Heading of the internal notification email. */
  title: (f: FormFields) => string;
  subject: (f: FormFields) => string;
  from: string;
  to: (f: FormFields) => string[];
  required?: string[];
  /** Optional confirmation email sent to the person who submitted. */
  confirmation?: (f: FormFields) => {
    subject: string;
    html: string;
    from: string;
    to?: string[];
    bcc?: string[];
  } | null;
};

const s = (f: FormFields, key: string) => str(f[key]).trim();
const suffix = (f: FormFields, key: string) => (s(f, key) ? ` (${s(f, key)})` : "");

const inquiry = (product: string): FormConfig => ({
  title: (f) => `${product} — inquiry from ${s(f, "name") || "unknown"}`,
  subject: (f) =>
    `${product} — ${s(f, "interest") || "inquiry"} — from ${s(f, "name") || "unknown"}${suffix(f, "company")}`,
  from: "Ravolution <onboarding@resend.dev>",
  to: () => [IVAN],
  required: ["name", "email"],
});

export const FORM_CONFIG: Record<string, FormConfig> = {
  "send-startup-application": {
    title: (f) => `New Startup Application — ${s(f, "founder_name")}${suffix(f, "company_name")}`,
    subject: (f) =>
      `Application from ${s(f, "founder_name")}${s(f, "company_name") ? ` — ${s(f, "company_name")}` : ""} (${s(f, "stage") || "stage n/a"})`,
    from: "Ravolution Apply <onboarding@resend.dev>",
    to: () => [IVAN],
    required: ["founder_name", "email", "company_name"],
  },
  "send-angel-brief": {
    title: (f) => `Angel Brief from ${s(f, "name")}${suffix(f, "company")}`,
    subject: (f) =>
      `Angel Brief from ${s(f, "name")}${suffix(f, "company")} – ${s(f, "stage") || "Unknown stage"}`,
    from: "Ravolution Angel Brief <onboarding@resend.dev>",
    to: () => ["titicaco@gmail.com"],
    required: ["name", "email"],
  },
  "send-platform-spec": {
    title: (f) => `New Platform Spec from ${s(f, "name")}`,
    subject: (f) => `Platform Spec from ${s(f, "name")} – ${s(f, "complexity")}`,
    from: "Ravolution Platform Builder <onboarding@resend.dev>",
    to: () => ["titicaco@gmail.com"],
    required: ["name", "email"],
  },
  "send-investor-inquiry": {
    title: (f) => `Investor relations request — ${s(f, "project") || "Ravolution"}`,
    subject: (f) =>
      `${s(f, "project") || "Ravolution"} — Investor relations request from ${s(f, "name")}`,
    from: "Ravolution <onboarding@resend.dev>",
    to: () => [IVAN],
    required: ["name", "email"],
  },
  "send-metadata-lead": {
    title: (f) => `Metadata Machine lead${s(f, "name") ? ` — ${s(f, "name")}` : ""}`,
    subject: (f) => `Metadata Machine lead${s(f, "name") ? ` — ${s(f, "name")}` : ""}`,
    from: "Metadata Machine <onboarding@resend.dev>",
    to: () => [IVAN],
  },
  "send-pratis-inquiry": {
    ...inquiry("Pratis"),
    to: () => [IVAN, "susanne@pratis.se"],
  },
  "send-xportmatch-inquiry": inquiry("XportMatch.com"),
  "send-alarmsole-inquiry": inquiry("AlarmSole"),
  "send-partysta-inquiry": inquiry("Partysta.com"),
  "send-pikpcash-inquiry": inquiry("PikpCash®"),
  "send-hundelser-inquiry": inquiry("Hundelser.se"),
  "send-beredskapad-inquiry": inquiry("Beredskapad.se"),
  "send-sales-partner-application": {
    title: () => "New Sales Partner Application",
    subject: (f) =>
      `New Sales Partner Application — ${s(f, "firstName")} ${s(f, "lastName")} (${s(f, "primaryPlatform")})`,
    from: "Ravolution Sales Partner <onboarding@resend.dev>",
    to: () => [IVAN],
    required: [
      "firstName",
      "lastName",
      "email",
      "phone",
      "city",
      "linkedin",
      "pastDeal",
      "startDate",
      "consent",
    ],
    confirmation: (f) => {
      const email = s(f, "email");
      if (!email) return null;
      const sv = s(f, "language") === "sv";
      const first = escapeHtml(s(f, "firstName"));
      const html = sv
        ? `<div style="font-family:Arial,sans-serif;color:#0F2747;max-width:600px;">
<h2 style="color:#0F2747;">Hej ${first},</h2>
<p>Tack för din ansökan som säljpartner hos Ravolution AB.</p>
<p>Vi läser varje ansökan personligen och hör av oss inom fem arbetsdagar.</p>
<p>Under tiden — gå gärna igenom vår demoinstans på <a href="https://businesssweden.ravolution.se">businesssweden.ravolution.se</a> och fundera på vilka kunder i ditt nätverk som skulle få mest värde.</p>
<p style="margin-top:24px;">Vänliga hälsningar,<br/><strong>Ivan Daza</strong><br/>Founder &amp; CEO, Ravolution AB</p>
</div>`
        : `<div style="font-family:Arial,sans-serif;color:#0F2747;max-width:600px;">
<h2 style="color:#0F2747;">Hi ${first},</h2>
<p>Thank you for applying to become a sales partner at Ravolution AB.</p>
<p>We read every application personally and will get back to you within five business days.</p>
<p>In the meantime, take a look at our live demo at <a href="https://businesssweden.ravolution.se">businesssweden.ravolution.se</a> and start thinking about which clients in your network would benefit most.</p>
<p style="margin-top:24px;">Best regards,<br/><strong>Ivan Daza</strong><br/>Founder &amp; CEO, Ravolution AB</p>
</div>`;
      return {
        subject: sv
          ? "Tack för din ansökan — Ravolution säljpartner"
          : "Thank you for your application — Ravolution Sales Partner",
        from: "Ravolution AB <onboarding@resend.dev>",
        to: [email],
        bcc: [IVAN],
        html,
      };
    },
  },
};

/**
 * Until a sending domain is verified, the email provider only accepts the
 * account owner's inbox as a recipient. Everything is routed there (with the
 * intended recipients noted in the body) so no submission is ever lost.
 * Once `FORM_SENDER_ADDRESS` is set to an address on a verified domain, mail
 * goes straight to the real recipients.
 */
const OWNER_INBOX = "titicaco@gmail.com";

function delivery(intended: string[], from: string) {
  const sender = process.env["FORM_SENDER_ADDRESS"];
  if (sender) return { to: intended, from: `Ravolution AB <${sender}>`, note: "" };
  return {
    to: [OWNER_INBOX],
    from,
    note: `<p style="margin:0 0 16px;padding:10px;background:#0F2747;color:#F7F5F0;font-family:Arial,sans-serif;font-size:13px;">Intended recipient(s): ${intended
      .map((r) => escapeHtml(r))
      .join(", ")} — verify a sending domain to deliver there directly.</p>`,
  };
}

export async function deliverForm(form: string, fields: FormFields): Promise<void> {
  const config = FORM_CONFIG[form];
  if (!config) throw new Error("Unknown form.");

  for (const key of config.required ?? []) {
    if (str(fields[key]).trim() === "") throw new Error("Missing required fields.");
  }

  const replyTo = s(fields, "email");
  const route = delivery(config.to(fields), config.from);
  await sendResendEmail({
    from: route.from,
    to: route.to,
    subject: config.subject(fields),
    html: route.note + renderFormEmail(config.title(fields), fields),
    ...(replyTo ? { reply_to: replyTo } : {}),
  });

  const confirm = config.confirmation?.(fields);
  if (confirm) {
    const confirmRoute = delivery([s(fields, "email")], confirm.from);
    try {
      await sendResendEmail({
        from: confirmRoute.from,
        to: [s(fields, "email")],
        subject: confirm.subject,
        html: confirm.html,
        ...(confirm.bcc ? { bcc: confirm.bcc } : {}),
      });
    } catch (err) {
      console.error("Confirmation email failed:", err);
    }
  }
}
