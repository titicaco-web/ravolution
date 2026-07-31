import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const SITE = "https://beredskapad.se/";

const steps = [
  { n: "01", t: "Learn", d: "Accessible educational content introduces users to crisis preparedness, common disruptions and practical ways to reduce vulnerability." },
  { n: "02", t: "Assess", d: "Self-assessment tools and structured questions help users evaluate their current level of preparedness." },
  { n: "03", t: "Prepare", d: "Personalised recommendations, practical checklists and step-by-step actions help users improve their preparedness over time." },
  { n: "04", t: "Maintain", d: "Recurring reviews and updated guidance can help preparedness remain an ongoing process rather than a one-time activity." },
];

const challenges = [
  "Which risks are most relevant to them",
  "How prepared they currently are",
  "Which measures should be prioritised",
  "How preparedness can be maintained over time",
  "Where to find understandable and practical guidance",
];

const components = [
  "Digital preparedness education",
  "Household and organisational checklists",
  "Readiness self-assessments",
  "Personalised action plans",
  "Progress tracking",
  "Preparedness guides and articles",
  "Company and employee training",
  "Downloadable preparedness material",
  "Supplier and product recommendations",
  "Organisation-specific preparedness portals",
  "Certificates or completed-course documentation",
  "Multilingual content",
  "Municipal, employer or insurance partnerships",
];

const audiences = [
  { t: "Individuals and households", d: "Practical support for preparing for disruptions such as power outages, communication failures, water interruptions and supply shortages." },
  { t: "Companies and employers", d: "Tools and educational material that can support continuity planning, employee awareness and organisational preparedness." },
  { t: "Municipalities and public organisations", d: "A potential digital channel for distributing locally adapted preparedness information and educational initiatives." },
  { t: "Schools and educational providers", d: "Age-appropriate preparedness education that can be integrated into courses, workshops or public-awareness programmes." },
  { t: "Insurance, security and preparedness companies", d: "A digital platform that can complement existing products, advisory services and customer relationships." },
];

const models = [
  "Consumer subscriptions",
  "Company and organisational licences",
  "White-label preparedness portals",
  "Employee training packages",
  "Sponsored educational content",
  "Partnerships with insurers and security providers",
  "Municipal or regional licensing",
  "Preparedness-product marketplace",
  "Qualified lead generation",
  "Certification and course fees",
];

const buyers = [
  "Insurance companies",
  "Security and preparedness providers",
  "Education and EdTech companies",
  "Publishers and media groups",
  "Municipal and public-sector service providers",
  "Management and continuity consultancies",
  "E-commerce companies specialising in preparedness",
  "Civil-society and membership organisations",
  "Investors or entrepreneurs seeking a ready-developed platform concept",
];

const interests = [
  "Full acquisition",
  "Strategic partnership",
  "Licensing",
  "Investment",
  "Request more information",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  role: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(320),
  interest: z.string().min(1, "Select an area of interest"),
  message: z.string().trim().min(1, "A short message is required").max(4000),
});

const inputClass =
  "w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors";

const BeredskapadPage = () => {
  const lp = useLangPath();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    interest: interests[0],
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check the form.");
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-beredskapad-inquiry", {
        body: parsed.data,
      });
      if (error) throw error;
      toast.success("Thank you — your enquiry has been sent. We will be in touch.");
      setForm({ name: "", company: "", role: "", email: "", interest: interests[0], message: "" });
    } catch {
      toast.error("Could not send the enquiry. Please email ivan.daza@ravolution.se directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Beredskapad.se – Digital Crisis Preparedness Platform for Acquisition</title>
        <meta
          name="description"
          content="Beredskapad is a Swedish digital platform concept for crisis preparedness, combining education, assessments, checklists and practical guidance. The project is available for acquisition."
        />
        <link rel="canonical" href="https://ravolution.se/en/beredskapad" />
        <meta property="og:title" content="Beredskapad.se – Digital Crisis Preparedness Platform for Acquisition" />
        <meta
          property="og:description"
          content="A Swedish digital crisis preparedness platform concept — education, assessments and practical guidance. Available for acquisition."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/beredskapad" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="crisis preparedness, resilience, beredskap, EdTech, Sweden, platform for acquisition, continuity planning"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              name: "Beredskapad.se",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              url: SITE,
              inLanguage: "sv",
              description:
                "A Swedish-language digital platform concept for crisis preparedness, combining education, checklists, readiness assessments and practical guidance for individuals, companies and organisations. Available for acquisition.",
              creativeWorkStatus: "Available for acquisition",
              publisher: { "@type": "Organization", name: "Ravolution AB", url: "https://ravolution.se/" },
            },
            {
              "@type": "Brand",
              name: "Beredskapad",
              url: SITE,
              description: "Swedish digital crisis preparedness brand and platform concept.",
            },
            {
              "@type": "WebSite",
              name: "Beredskapad.se",
              url: SITE,
              inLanguage: "sv",
              about: "Crisis preparedness education, readiness assessments and practical guidance.",
            },
          ],
        })}</script>
      </Helmet>

      <EditorialShell>
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-12 min-h-[55vh] flex flex-col justify-end overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          <div className="edit-container relative z-10">
            <Reveal>
              <Link to={lp("/portfolio")} className="edit-label text-white/50 edit-link">
                ← Strategic Ventures &amp; Acquisition Opportunities
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="edit-label text-[hsl(var(--accent-edit))] block mt-8">
                Beredskapad.se — Available for acquisition
              </span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-white mt-6">
                Making crisis preparedness easier to understand and act on
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/70 mt-8 max-w-3xl">
                Beredskapad is a digital platform designed to make crisis preparedness more accessible,
                structured and practical. It brings together educational content, checklists, preparedness
                assessments and actionable guidance for individuals, households, companies and organisations.
                Instead of presenting preparedness as an abstract or overwhelming subject, Beredskapad helps
                users understand where they stand, what they may be missing and which actions they can take next.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Crisis Preparedness", "Resilience", "EdTech", "B2B / B2C", "Sweden", "Available for Acquisition"].map((tag) => (
                  <span key={tag} className="edit-label text-white/60 border border-white/20 px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Challenge */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — The Challenge" title="Many people know they should prepare. Few know where to begin." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Information about crisis preparedness is often distributed across government websites,
                  individual organisations, PDFs, courses and commercial suppliers. This can make it difficult
                  for households and organisations to understand where they stand.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Beredskapad is designed to turn fragmented information into a clearer and more actionable
                  user journey.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <ul className="space-y-3">
                  {challenges.map((c) => (
                    <li key={c} className="flex gap-3 text-white/70 text-sm leading-relaxed border-b border-white/10 pb-3">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Concept */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — The Concept" title="Learn. Assess. Prepare." />
            <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.06}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block">{s.n}</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-4">{s.t}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mt-4">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Platform Components" title="Current and expandable components." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                The following are current or expandable platform components. Not every component is
                necessarily fully operational today.
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
              {components.map((c) => (
                <li key={c} className="text-white/70 text-sm leading-relaxed flex gap-2 border-b border-white/10 pb-3">
                  <span className="text-[hsl(var(--accent-edit))]">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Target groups */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04 — Target Groups" title="One platform. Several preparedness needs." />
            <div className="border-t border-white/10">
              {audiences.map((a, i) => (
                <Reveal key={a.t} delay={i * 0.05}>
                  <div className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 border-b border-white/10">
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="md:col-span-4 text-lg md:text-xl font-display font-bold text-white">{a.t}</h3>
                    <p className="md:col-span-7 edit-body text-white/65">{a.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial potential */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — Commercial Potential" title="From public information to measurable preparedness." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                Beredskapad can be developed through several complementary business models. These are potential
                commercialisation paths rather than existing revenue streams.
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
              {models.map((m) => (
                <li key={m} className="text-white/70 text-sm leading-relaxed flex gap-2 border-b border-white/10 pb-3">
                  <span className="text-[hsl(var(--accent-edit))]">—</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Acquisition */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="06 — Acquisition Opportunity" title="Beredskapad is available for acquisition." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  The project offers a buyer the opportunity to acquire and further develop a recognisable
                  Swedish domain and a structured digital concept within crisis preparedness, public education
                  and organisational resilience.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  The exact acquisition scope — including the domain, brand, platform, design, content and other
                  associated assets — is subject to agreement.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">The opportunity may be relevant for</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {buyers.map((b) => (
                    <li key={b} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA + form */}
        <section id="acquire" className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="07 — Contact" title="Acquire and develop Beredskapad.se" />
            <div className="grid md:grid-cols-12 gap-12">
              <Reveal className="md:col-span-5">
                <p className="edit-body text-white/70">
                  Beredskapad is available to a strategic buyer, operator or investor with the resources and
                  sector experience to develop the concept further.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#acquire"
                    className="inline-flex items-center px-6 py-3 bg-[hsl(var(--accent-edit))] text-[#0F2747] edit-label font-semibold hover:opacity-90 transition-opacity"
                  >
                    Request Acquisition Information
                  </a>
                  <a
                    href={SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                  >
                    Visit Beredskapad.se ↗
                  </a>
                </div>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6 max-w-md">
                  Acquisition materials and further platform information are available upon request. Commercial
                  terms and the exact scope of included assets are discussed directly with Ravolution AB.
                </p>
                <a
                  href="mailto:ivan.daza@ravolution.se"
                  className="edit-label text-white edit-link mt-8 inline-block"
                >
                  ivan.daza@ravolution.se
                </a>
              </Reveal>

              <Reveal className="md:col-span-7" delay={0.1}>
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="b-name" className="edit-label text-white/50 block mb-2">Name *</label>
                      <input id="b-name" className={inputClass} value={form.name} onChange={set("name")} maxLength={200} required />
                    </div>
                    <div>
                      <label htmlFor="b-company" className="edit-label text-white/50 block mb-2">Company</label>
                      <input id="b-company" className={inputClass} value={form.company} onChange={set("company")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="b-role" className="edit-label text-white/50 block mb-2">Role</label>
                      <input id="b-role" className={inputClass} value={form.role} onChange={set("role")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="b-email" className="edit-label text-white/50 block mb-2">Email *</label>
                      <input id="b-email" type="email" className={inputClass} value={form.email} onChange={set("email")} maxLength={320} required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="b-interest" className="edit-label text-white/50 block mb-2">Area of interest</label>
                    <select id="b-interest" className={`${inputClass} appearance-none`} value={form.interest} onChange={set("interest")}>
                      {interests.map((i) => (
                        <option key={i} value={i} className="bg-[#0F2747] text-white">{i}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="b-message" className="edit-label text-white/50 block mb-2">Message *</label>
                    <textarea id="b-message" rows={5} className={inputClass} value={form.message} onChange={set("message")} maxLength={4000} required />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-8 py-4 bg-[hsl(var(--accent-edit))] text-[#0F2747] font-semibold tracking-tight hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {sending ? "Sending…" : "Send enquiry"}
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default BeredskapadPage;
