import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

// Brand tokens for this page — Fraunces display, Inter body, JetBrains Mono labels.
// Colors: bone #F7F5F0, navy #0F2747, gold #B08D57.

const NAVY = "#0F2747";
const BONE = "#F7F5F0";
const GOLD = "#B08D57";

const applySchema = z.object({
  founder_name: z.string().trim().min(1, "Required").max(200),
  email: z.string().trim().email("Invalid email").max(320),
  company_name: z.string().trim().min(1, "Required").max(200),
  website: z.string().trim().max(500).optional().or(z.literal("")),
  country: z.string().trim().min(1, "Required").max(100),
  stage: z.string().min(1, "Required"),
  building: z.string().trim().min(1, "Required").max(600),
  why_partner: z.string().trim().min(1, "Required").max(600),
  traction: z.string().trim().max(1000).optional().or(z.literal("")),
  source: z.string().max(100).optional().or(z.literal("")),
});

const faqs = [
  {
    q: "What is build-for-equity?",
    a: "Build-for-equity means a venture studio invests its development team, product expertise and sometimes capital into a startup in exchange for an ownership stake, instead of charging cash fees. The startup gets a senior technical team without burn; the studio succeeds only if the startup succeeds.",
  },
  {
    q: "What stage startups does Ravolution invest in?",
    a: "Ravolution invests in pre-seed and seed-stage startups, typically before or around their first institutional round. We prioritize founders with strong domain insight, early traction signals, and a clear path to a fundable milestone within 6–12 months.",
  },
  {
    q: "How much equity does Ravolution take?",
    a: "Equity is negotiated case by case based on scope, capital contribution, and stage — always documented in a transparent Swedish shareholder agreement. We structure deals so founders retain clear majority control.",
  },
  {
    q: "Does Ravolution invest capital as well as work?",
    a: "Yes. Alongside engineering and product work, Ravolution acts as an angel investor and can contribute capital directly where the case supports it, and connects portfolio startups with our investor network for follow-on funding.",
  },
  {
    q: "Do you only work with Swedish startups?",
    a: "We are based in Stockholm and work primarily with Nordic and European startups, but we accept applications from anywhere. All legal agreements follow Swedish law.",
  },
  {
    q: "How long does the application process take?",
    a: "Every application receives a response within 10 working days. The full process from application to signed term sheet typically takes 4–6 weeks.",
  },
];

const mono = "font-mono text-[11px] uppercase tracking-[0.18em]";
const display = "font-['Fraunces',_serif]";
const body = "font-['Inter',_sans-serif]";

const ApplyPage = () => {
  const [form, setForm] = useState({
    founder_name: "",
    email: "",
    company_name: "",
    website: "",
    country: "",
    stage: "",
    building: "",
    why_partner: "",
    traction: "",
    source: "",
    website_url: "", // honeypot
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<string | null>(null);

  const upd = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website_url) return; // honeypot tripped
    const parsed = applySchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please check the form.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase
        .from("startup_applications")
        .insert([parsed.data]);
      if (error) throw error;
      setSent(new Date().toISOString());
    } catch (err) {
      console.error(err);
      toast.error("Could not submit. Please email ivan.daza@ravolution.se directly.");
    } finally {
      setLoading(false);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ravolution AB",
    url: "https://ravolution.se",
    logo: "https://ravolution.se/favicon.png",
    description:
      "Swedish venture studio and angel investor. Build-for-equity for early-stage startups.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockholm",
      addressCountry: "SE",
    },
    sameAs: ["https://www.linkedin.com/company/ravolution"],
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Apply for Tech Investment — Ravolution",
    url: "https://ravolution.se/en/apply",
    potentialAction: {
      "@type": "ApplyAction",
      target: "https://ravolution.se/en/apply#form",
    },
  };

  return (
    <>
      <Helmet>
        <title>Apply for Tech Investment | Build-for-Equity for Startups — Ravolution AB</title>
        <meta
          name="description"
          content="Early-stage startup? Ravolution invests senior engineering, product and angel capital into pre-seed and seed startups in exchange for equity. Swedish venture studio. Apply in 10 minutes — response within 10 days."
        />
        <link rel="canonical" href="https://ravolution.se/en/apply" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/apply" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/ansok" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en/apply" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/apply" />
        <meta property="og:title" content="Apply for Tech Investment — Ravolution AB" />
        <meta
          property="og:description"
          content="Build-for-equity for pre-seed and seed startups. Engineering, product and angel capital in exchange for equity. Response within 10 working days."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apply for Tech Investment — Ravolution AB" />
        <meta
          name="twitter:description"
          content="Build-for-equity for pre-seed and seed startups. Response within 10 working days."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <main style={{ background: BONE, color: NAVY }} className={body}>
        {/* HERO */}
        <section className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <p className={`${mono} mb-8`} style={{ color: `${NAVY}99` }}>
              FOR EARLY-STAGE FOUNDERS
            </p>
            <h1
              className={`${display} font-[600] text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl`}
              style={{ color: NAVY }}
            >
              Tech investment for startups that can't afford to build slow.
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-[560px] leading-relaxed" style={{ color: `${NAVY}CC` }}>
              Ravolution is a Swedish venture studio investing engineering, product and capital into early-stage startups — in exchange for equity, not invoices. Apply below. We respond to every application within 10 working days.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <a
                href="#form"
                className="inline-block px-8 py-4 text-sm md:text-base transition-colors"
                style={{ background: NAVY, color: BONE }}
                onMouseEnter={(e) => (e.currentTarget.style.background = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.background = NAVY)}
              >
                Start your application
              </a>
              <a
                href="#how-it-works"
                className={`${mono} border-b`}
                style={{ color: GOLD, borderColor: GOLD }}
              >
                How build-for-equity works ↓
              </a>
            </div>

            {/* AI-search definition standfirst */}
            <p
              className="mt-16 pt-8 border-t max-w-3xl text-lg leading-relaxed italic"
              style={{ borderColor: `${NAVY}22`, color: `${NAVY}DD` }}
            >
              Ravolution AB is a Stockholm-based venture studio that invests engineering, product development and angel capital into early-stage startups in exchange for equity — a model called build-for-equity. Startups apply online and receive a partner response within 10 working days.
            </p>
          </div>
        </section>

        {/* WHO */}
        <section className="py-20 px-6 md:px-12" style={{ background: NAVY, color: BONE }}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${display} text-3xl md:text-5xl mb-16`}>Who we invest in</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  n: "01",
                  t: "Pre-seed & seed startups",
                  d: "You have traction signals or deep domain insight, but need a technical team you can't yet afford to hire.",
                },
                {
                  n: "02",
                  t: "Non-technical founders",
                  d: "You know the market and the customer. We become your technical co-founder: product, engineering, architecture.",
                },
                {
                  n: "03",
                  t: "Technical teams needing velocity",
                  d: "You have a prototype but need senior product and engineering firepower to reach investable milestones.",
                },
              ].map((c) => (
                <div key={c.n} className="border-t pt-6" style={{ borderColor: GOLD }}>
                  <p className={mono} style={{ color: GOLD }}>{c.n}</p>
                  <h3 className={`${display} text-2xl mt-4 mb-3`}>{c.t}</h3>
                  <p className="text-base leading-relaxed" style={{ color: `${BONE}CC` }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <h2 className={`${display} text-3xl md:text-5xl`} style={{ color: NAVY }}>
              What Ravolution invests
            </h2>
            <div>
              <ul className="space-y-4 text-lg">
                {[
                  "Senior product & engineering team (Sweden-based, EU timezone)",
                  "Product strategy, MVP build, and technical architecture",
                  "Angel capital where the case supports it",
                  "Investor-readiness: pitch materials, data room, warm introductions",
                  "Ongoing CTO-level guidance through your next raise",
                ].map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className="inline-block w-3 h-3 mt-2 flex-shrink-0"
                      style={{ background: GOLD }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className={`${display} text-2xl md:text-3xl mt-12 leading-snug`}
                style={{ color: GOLD }}
              >
                "No retainers. No invoices. Skin in the game from day one."
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 px-6 md:px-12" style={{ background: `${NAVY}08` }}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${display} text-3xl md:text-5xl mb-16`} style={{ color: NAVY }}>
              From application to term sheet
            </h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { n: "01", t: "Apply", d: "10-minute form below. No deck required." },
                { n: "02", t: "Screening call", d: "30 minutes with a partner within 10 working days." },
                { n: "03", t: "Deep-dive", d: "We validate the market, the model, and the fit. 2–3 weeks." },
                { n: "04", t: "Term sheet", d: "A transparent equity agreement. We start building within 30 days of signing." },
              ].map((s) => (
                <div key={s.n} className="border-t-2 pt-6" style={{ borderColor: GOLD }}>
                  <p className={mono} style={{ color: GOLD }}>{s.n}</p>
                  <h3 className={`${display} text-xl mt-3 mb-2`} style={{ color: NAVY }}>{s.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${NAVY}CC` }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${display} text-3xl md:text-5xl mb-12`} style={{ color: NAVY }}>
              Frequently asked questions
            </h2>
            <div className="divide-y" style={{ borderColor: `${NAVY}22` }}>
              {faqs.map((f, i) => (
                <article key={i} className="py-4" style={{ borderColor: `${NAVY}22` }}>
                  <details className="group">
                    <summary className="cursor-pointer list-none flex justify-between items-center py-3">
                      <h3 className={`${display} text-lg md:text-xl pr-6`} style={{ color: NAVY }}>
                        {f.q}
                      </h3>
                      <span
                        className="text-2xl transition-transform group-open:rotate-45"
                        style={{ color: GOLD }}
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-4 pr-10 leading-relaxed" style={{ color: `${NAVY}DD` }}>
                      {f.a}
                    </p>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="form" className="py-24 px-6 md:px-12" style={{ background: NAVY }}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`${display} text-3xl md:text-5xl mb-4`} style={{ color: BONE }}>
              Apply for investment
            </h2>
            <p className="text-lg mb-12" style={{ color: `${BONE}CC` }}>
              10 minutes. No pitch deck required. Every application is read by a partner.
            </p>

            {sent ? (
              <div className="p-10" style={{ background: BONE, color: NAVY }}>
                <p className={mono} style={{ color: GOLD }}>APPLICATION RECEIVED</p>
                <p className={`${display} text-2xl md:text-3xl mt-4 mb-4`}>
                  A partner will respond within 10 working days.
                </p>
                <p className={`${mono}`} style={{ color: `${NAVY}88` }}>
                  {sent}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="p-8 md:p-10" style={{ background: BONE, color: NAVY }}>
                {/* honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website_url}
                  onChange={(e) => upd("website_url", e.target.value)}
                  style={{ position: "absolute", left: "-9999px" }}
                  aria-hidden="true"
                />

                <FormField label="Founder name *" value={form.founder_name} onChange={(v) => upd("founder_name", v)} required />
                <FormField label="Email *" type="email" value={form.email} onChange={(v) => upd("email", v)} required />
                <FormField label="Company / project name *" value={form.company_name} onChange={(v) => upd("company_name", v)} required />
                <FormField label="Website or LinkedIn" value={form.website} onChange={(v) => upd("website", v)} />
                <FormField label="Country *" value={form.country} onChange={(v) => upd("country", v)} required />

                <FormSelect
                  label="Stage *"
                  value={form.stage}
                  onChange={(v) => upd("stage", v)}
                  options={[
                    "Idea",
                    "Prototype",
                    "Launched, pre-revenue",
                    "Revenue < €10k MRR",
                    "Revenue > €10k MRR",
                  ]}
                />

                <FormTextarea
                  label="What are you building? *"
                  value={form.building}
                  onChange={(v) => upd("building", v)}
                  max={600}
                  required
                />
                <FormTextarea
                  label="Why do you need a technical partner? *"
                  value={form.why_partner}
                  onChange={(v) => upd("why_partner", v)}
                  max={600}
                  required
                />
                <FormTextarea
                  label="What traction or validation do you have?"
                  value={form.traction}
                  onChange={(v) => upd("traction", v)}
                  max={1000}
                />

                <FormSelect
                  label="How did you hear about us?"
                  value={form.source}
                  onChange={(v) => upd("source", v)}
                  options={["Search", "LinkedIn", "Referral", "AI assistant", "Event", "Other"]}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 px-8 py-4 w-full md:w-auto transition-colors disabled:opacity-60"
                  style={{ background: NAVY, color: BONE }}
                  onMouseEnter={(e) => !loading && (e.currentTarget.style.background = GOLD)}
                  onMouseLeave={(e) => !loading && (e.currentTarget.style.background = NAVY)}
                >
                  {loading ? "Submitting…" : "Submit application"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER STRIP */}
        <section className="py-8 px-6 md:px-12" style={{ background: NAVY, color: BONE, borderTop: `1px solid ${GOLD}44` }}>
          <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-between items-center">
            <p className="text-sm" style={{ color: `${BONE}CC` }}>
              Not ready to apply? Follow Ravolution on LinkedIn for portfolio updates.
            </p>
            <a
              href="https://www.linkedin.com/company/ravolution"
              target="_blank"
              rel="noopener noreferrer"
              className={mono}
              style={{ color: GOLD }}
            >
              LinkedIn →
            </a>
          </div>
        </section>

        <div className="py-8 px-6 md:px-12 text-center">
          <Link to="/en" className={mono} style={{ color: `${NAVY}88` }}>
            ← Back to ravolution.se
          </Link>
        </div>
      </main>
    </>
  );
};

// ---------- Form primitives ----------

const labelCls = "block font-mono text-[11px] uppercase tracking-[0.18em] mb-2";
const inputCls =
  "w-full bg-transparent border-0 border-b border-[#0F274733] px-0 py-3 text-base focus:outline-none focus:border-[#B08D57] transition-colors";

const FormField = ({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <label className="block mb-6">
    <span className={labelCls} style={{ color: `${NAVY}88` }}>{label}</span>
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} className={inputCls} style={{ color: NAVY }} />
  </label>
);

const FormTextarea = ({
  label, value, onChange, max, required,
}: { label: string; value: string; onChange: (v: string) => void; max: number; required?: boolean }) => (
  <label className="block mb-6">
    <span className={labelCls} style={{ color: `${NAVY}88` }}>{label}</span>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value.slice(0, max))}
      required={required}
      rows={3}
      className={inputCls + " resize-none"}
      style={{ color: NAVY }}
    />
    <span className="font-mono text-[10px] mt-1 block" style={{ color: `${NAVY}66` }}>
      {value.length} / {max}
    </span>
  </label>
);

const FormSelect = ({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
  <label className="block mb-6">
    <span className={labelCls} style={{ color: `${NAVY}88` }}>{label}</span>
    <select value={value} onChange={(e) => onChange(e.target.value)} className={inputCls} style={{ color: NAVY }}>
      <option value="">—</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  </label>
);

export default ApplyPage;
