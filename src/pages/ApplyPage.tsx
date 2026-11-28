import { Helmet } from "@/lib/helmet-compat";
import { useState } from "react";
import { submitForm } from "@/lib/submit-form";
import { supabase } from "@/integrations/supabase/client";
import { Link, useLocation } from "@/lib/router-compat";
import { toast } from "sonner";
import { z } from "zod";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
import TheCreatorApplySection from "@/components/apply/TheCreatorApplySection";
import { applyCopy } from "@/components/apply/apply-copy";
import type { ApplyLanguage, FormOption } from "@/components/apply/apply-copy";

// Brand tokens — IBM Plex Sans display, Inter body, JetBrains Mono labels.
// Colors: bone #F7F5F0, navy #0F2747, gold #B08D57 (70/20/10 ratio).

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
  sector: z.string().max(100).optional().or(z.literal("")),
  blocker: z.string().trim().max(1000).optional().or(z.literal("")),
});

const mono = "font-mono text-[11px] uppercase tracking-[0.18em]";
const display = "font-['IBM_Plex_Sans',_sans-serif] font-[600] tracking-[-0.01em]";
const body = "font-['Inter',_sans-serif]";

const ApplyPage = () => {
  const location = useLocation();
  const pathLanguage = location.pathname.split("/")[1];
  const lang: ApplyLanguage = pathLanguage === "sv" || pathLanguage === "es" ? pathLanguage : "en";
  const c = applyCopy[lang];
  const canonicalUrl = `https://ravolution.se/${lang}/apply`;
  const homePath = `/${lang}`;

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
    sector: "",
    blocker: "",
    website_url: "", // honeypot
  });
  const [lookingFor, setLookingFor] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<string | null>(null);

  const upd = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleLooking = (v: string) =>
    setLookingFor((l) => (l.includes(v) ? l.filter((x) => x !== v) : [...l, v]));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website_url) return; // honeypot tripped
    const parsed = applySchema.safeParse(form);
    if (!parsed.success) {
      toast.error(c.validationError);
      return;
    }
    setLoading(true);
    try {
      const payload = {
        founder_name: parsed.data.founder_name,
        email: parsed.data.email,
        company_name: parsed.data.company_name,
        country: parsed.data.country,
        stage: parsed.data.stage,
        building: parsed.data.building,
        why_partner: parsed.data.why_partner,
        website: parsed.data.website || null,
        traction: parsed.data.traction || null,
        source: parsed.data.source || null,
        sector: parsed.data.sector || null,
        blocker: parsed.data.blocker || null,
        looking_for: lookingFor.length ? lookingFor.join(", ") : null,
      };
      const { error } = await supabase
        .from("startup_applications")
        .insert(payload);
      if (error) throw error;
      // Notify Ivan by email (non-blocking on failure)
      const { error: fnErr } = await submitForm("send-startup-application", payload);
      if (fnErr) console.error("Notification email failed:", fnErr);
      setSent(new Date().toISOString());
    } catch (err) {
      console.error(err);
      toast.error(c.submitError);
    } finally {
      setLoading(false);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
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
    description: c.orgDescription,
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
    name: c.meta.ogTitle,
    url: canonicalUrl,
    potentialAction: {
      "@type": "ApplyAction",
      target: `${canonicalUrl}#form`,
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      <EditorialShell>
      <main style={{ background: BONE, color: NAVY }} className={body}>

        {/* HERO */}
        <section className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link
                to={homePath}
                className={`${mono} inline-flex items-center gap-2 transition-colors`}
                style={{ color: `${NAVY}99` }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${NAVY}99`)}
              >
                {c.back}
              </Link>
            </div>
            <p className={`${mono} mb-8`} style={{ color: `${NAVY}99` }}>
              {c.eyebrow}
            </p>
            <h1
              className={`${display} font-[600] text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl`}
              style={{ color: NAVY }}
            >
              {c.headline}
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-[560px] leading-relaxed" style={{ color: `${NAVY}CC` }}>
              {c.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <a
                href="#form"
                className="inline-block px-8 py-4 text-sm md:text-base transition-colors"
                style={{ background: NAVY, color: BONE }}
                onMouseEnter={(e) => (e.currentTarget.style.background = GOLD)}
                onMouseLeave={(e) => (e.currentTarget.style.background = NAVY)}
              >
                {c.primaryCta}
              </a>
              <a
                href="#how-it-works"
                className={`${mono} border-b`}
                style={{ color: GOLD, borderColor: GOLD }}
              >
                {c.howCta}
              </a>
              <a
                href="#thecreator"
                className={`${mono} border-b`}
                style={{ color: GOLD, borderColor: GOLD }}
              >
                {c.creatorCta}
              </a>
            </div>

            {/* AI-search definition standfirst */}
            <p
              className="mt-16 pt-8 border-t max-w-3xl text-lg leading-relaxed italic"
              style={{ borderColor: `${NAVY}22`, color: `${NAVY}DD` }}
            >
              {c.aiSummary}
            </p>
          </div>
        </section>

        {/* WHO */}
        <section className="py-20 px-6 md:px-12" style={{ background: NAVY, color: BONE }}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${display} text-3xl md:text-5xl mb-16`}>{c.whoTitle}</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {c.whoCards.map((card) => (
                <div key={card.n} className="border-t pt-6" style={{ borderColor: GOLD }}>
                  <p className={mono} style={{ color: GOLD }}>{card.n}</p>
                  <h3 className={`${display} text-2xl mt-4 mb-3`}>{card.t}</h3>
                  <p className="text-base leading-relaxed" style={{ color: `${BONE}CC` }}>{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <h2 className={`${display} text-3xl md:text-5xl`} style={{ color: NAVY }}>
              {c.investsTitle}
            </h2>
            <div>
              <ul className="space-y-4 text-lg">
                {c.investsItems.map((item) => (
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
                {c.investsQuote}
              </p>
            </div>
          </div>
        </section>

        {/* THECREATOR PLATFORM */}
        <TheCreatorApplySection lang={lang} readMoreHref={`/${lang}/thecreator`} />

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-24 px-6 md:px-12" style={{ background: `${NAVY}08` }}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`${display} text-3xl md:text-5xl mb-16`} style={{ color: NAVY }}>
              {c.howTitle}
            </h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {c.howSteps.map((step) => (
                <div key={step.n} className="border-t-2 pt-6" style={{ borderColor: GOLD }}>
                  <p className={mono} style={{ color: GOLD }}>{step.n}</p>
                  <h3 className={`${display} text-xl mt-3 mb-2`} style={{ color: NAVY }}>{step.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${NAVY}CC` }}>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${display} text-3xl md:text-5xl mb-12`} style={{ color: NAVY }}>
              {c.faqTitle}
            </h2>
            <div className="divide-y" style={{ borderColor: `${NAVY}22` }}>
              {c.faqs.map((f) => (
                <article key={f.q} className="py-4" style={{ borderColor: `${NAVY}22` }}>
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
              {c.formTitle}
            </h2>
            <p className="text-lg mb-10" style={{ color: `${BONE}CC` }}>
              {c.formIntro}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {c.formSteps.map((step) => (
                <div key={step.n} className="border-t pt-4" style={{ borderColor: GOLD }}>
                  <p className={mono} style={{ color: GOLD }}>{step.n}</p>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: `${BONE}CC` }}>{step.d}</p>
                </div>
              ))}
            </div>

            {sent ? (
              <div className="p-10" style={{ background: BONE, color: NAVY }}>
                <p className={mono} style={{ color: GOLD }}>{c.receivedLabel}</p>
                <p className={`${display} text-2xl md:text-3xl mt-4 mb-4`}>
                  {c.receivedTitle}
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

                <FormField label={c.labels.founderName} value={form.founder_name} onChange={(v) => upd("founder_name", v)} required />
                <FormField label={c.labels.email} type="email" value={form.email} onChange={(v) => upd("email", v)} required />
                <FormField label={c.labels.companyName} value={form.company_name} onChange={(v) => upd("company_name", v)} required />
                <FormField label={c.labels.website} value={form.website} onChange={(v) => upd("website", v)} />
                <FormField label={c.labels.country} value={form.country} onChange={(v) => upd("country", v)} required />

                <FormSelect
                  label={c.labels.stage}
                  value={form.stage}
                  onChange={(v) => upd("stage", v)}
                  options={c.stageOptions}
                />

                <FormTextarea
                  label={c.labels.building}
                  value={form.building}
                  onChange={(v) => upd("building", v)}
                  max={600}
                  required
                />
                <FormTextarea
                  label={c.labels.whyPartner}
                  value={form.why_partner}
                  onChange={(v) => upd("why_partner", v)}
                  max={600}
                  required
                />
                <FormTextarea
                  label={c.labels.traction}
                  value={form.traction}
                  onChange={(v) => upd("traction", v)}
                  max={1000}
                />

                <FormSelect
                  label={c.labels.sector}
                  value={form.sector}
                  onChange={(v) => upd("sector", v)}
                  options={c.sectorOptions}
                />

                <fieldset className="block mb-6">
                  <legend className={labelCls} style={{ color: `${NAVY}88` }}>
                    {c.labels.lookingFor}
                  </legend>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {c.lookingForOptions.map((option) => {
                      const on = lookingFor.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleLooking(option.value)}
                          className="px-4 py-2 text-sm border transition-colors"
                          style={{
                            borderColor: on ? GOLD : `${NAVY}33`,
                            background: on ? GOLD : "transparent",
                            color: on ? BONE : NAVY,
                          }}
                          aria-pressed={on}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <FormTextarea
                  label={c.labels.blocker}
                  value={form.blocker}
                  onChange={(v) => upd("blocker", v)}
                  max={1000}
                />

                <FormSelect
                  label={c.labels.source}
                  value={form.source}
                  onChange={(v) => upd("source", v)}
                  options={c.sourceOptions}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 px-8 py-4 w-full md:w-auto transition-colors disabled:opacity-60"
                  style={{ background: NAVY, color: BONE }}
                  onMouseEnter={(e) => !loading && (e.currentTarget.style.background = GOLD)}
                  onMouseLeave={(e) => !loading && (e.currentTarget.style.background = NAVY)}
                >
                  {loading ? c.submitting : c.submit}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER STRIP */}
        <section className="py-8 px-6 md:px-12" style={{ background: NAVY, color: BONE, borderTop: `1px solid ${GOLD}44` }}>
          <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-between items-center">
            <p className="text-sm" style={{ color: `${BONE}CC` }}>
              {c.footerText}
            </p>
            <a
              href="https://www.linkedin.com/company/ravolution"
              target="_blank"
              rel="noopener noreferrer"
              className={mono}
              style={{ color: GOLD }}
            >
              {c.linkedin}
            </a>
          </div>
        </section>

        <div className="py-8 px-6 md:px-12 text-center">
          <Link to={homePath} className={mono} style={{ color: `${NAVY}88` }}>
            {c.backHome}
          </Link>
        </div>
      </main>
      </EditorialShell>
    </>
  );
};

// ---------- Form primitives ----------

const labelCls = "block font-mono text-[11px] uppercase tracking-[0.18em] mb-2";
const inputCls =
  "w-full bg-transparent border-0 border-b border-[#0F274733] px-0 py-3 text-base focus:outline-hidden focus:border-[#B08D57] transition-colors";

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
}: { label: string; value: string; onChange: (v: string) => void; options: readonly FormOption[] }) => (
  <label className="block mb-6">
    <span className={labelCls} style={{ color: `${NAVY}88` }}>{label}</span>
    <select value={value} onChange={(e) => onChange(e.target.value)} className={inputCls} style={{ color: NAVY }}>
      <option value="">—</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </label>
);

export default ApplyPage;
