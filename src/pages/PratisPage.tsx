import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";
import { Heart, MoveRight, ShieldCheck, BookOpen, BellRing, PhoneCall, Lock } from "lucide-react";

const PAGE_URL = "https://ravolution.se/en/pratis";

const pillars = [
  { icon: Heart, t: "Warm but grounded", d: "No engagement traps, no manufactured dependency. The goal is a good conversation, not screen time." },
  { icon: ShieldCheck, t: "Honest", d: "If asked, Pratis says plainly that it is an AI. The face, when enabled, is always clearly an AI." },
  { icon: Lock, t: "Private by design", d: "Health, religion, politics and orientation are never stored. GDPR-strict from the first line of code." },
  { icon: BellRing, t: "A soft alarm", d: "If someone calls for help, Pratis can reach a relative — or, in the worst case, emergency services." },
  { icon: BookOpen, t: "A life book", d: "An optional keepsake of a life, recorded and kept in the person's own words." },
  { icon: PhoneCall, t: "Strengthens real contact", d: "It nudges people to call their daughter, take the walk, and stay connected to the people in their lives." },
];

const stats = [
  { n: "1 in 4", t: "Older adults isolated", d: "The WHO estimates roughly one in four older adults are socially isolated, raising the risk of depression, dementia and early mortality." },
  { n: "+26–32%", t: "Higher dementia risk", d: "Social isolation and loneliness independently raise dementia risk — a modifiable factor named by the 2024 Lancet Commission." },
  { n: "~28M", t: "Europeans aged 80+", d: "Around 650,000 in Sweden alone today, growing fast. A large, non-cyclical and expanding market." },
];

const tiers = [
  { t: "Lätt", p: "325 kr/mo", d: "1–2 hours of conversation per week." },
  { t: "Daglig", p: "2,190 kr/mo", d: "1–2 hours of conversation per day." },
  { t: "Fri", p: "4,790 kr/mo", d: "Up to 100 hours of conversation per month." },
];

const investorPoints = [
  "Software-first and Swedish — no expensive hardware, unlike the category leaders.",
  "Family-paid consumer product today; a public-healthcare reimbursement track tomorrow.",
  "Defensible white space: a warm, honest, GDPR-strict companion with a life book and a soft alarm.",
  "Proven category demand internationally, with a clear local-fit advantage.",
];

const interests = [
  "Request the information memorandum",
  "Strategic investment",
  "Pilot partnership",
  "Healthcare / municipality collaboration",
  "Request more information",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  role: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(320),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  country: z.string().trim().max(120).optional().or(z.literal("")),
  interest: z.string().min(1, "Select an area of interest"),
  message: z.string().trim().min(1, "A short message is required").max(4000),
});

const inputClass =
  "w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors";

const PratisPage = () => {
  const lp = useLangPath();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    country: "",
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
      const { error } = await supabase.functions.invoke("send-pratis-inquiry", { body: parsed.data });
      if (error) throw error;
      toast.success("Thank you — your enquiry has been sent. We will be in touch.");
      setForm({ name: "", company: "", role: "", email: "", phone: "", country: "", interest: interests[0], message: "" });
    } catch {
      toast.error("Could not send the enquiry. Please email ivan.daza@ravolution.se directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Pratis | Swedish AI Companion for Older Adults — Ravolution AB</title>
        <meta
          name="description"
          content="Pratis is a calm, Swedish-speaking AI companion for lonely older adults — a voice that remembers you and is simply there to talk. A Ravolution venture co-owned with Susanne Örtegren, currently seeking investors."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="Pratis — A calm, Swedish-speaking AI companion for older adults" />
        <meta
          property="og:description"
          content="Companionship, not care. A Ravolution venture co-owned with Susanne Örtegren, currently seeking investors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="Pratis, AI companion, AI-kompis, äldre, loneliness, social isolation, Swedish AI, Ravolution AB, Susanne Örtegren, elderly companionship, social prescribing, venture investment"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": `${PAGE_URL}#product`,
              name: "Pratis",
              url: PAGE_URL,
              inLanguage: "en",
              category: "AI companion for older adults",
              description:
                "A calm, Swedish-speaking AI companion for lonely older adults. Companionship, not care — Pratis is not a medical device and makes no treatment claims.",
              brand: { "@type": "Organization", name: "Pratis" },
              offers: tiers.map((t) => ({
                "@type": "Offer",
                name: t.t,
                price: t.p.replace(/[^0-9]/g, ""),
                priceCurrency: "SEK",
                description: t.d,
              })),
            },
            {
              "@type": "Organization",
              "@id": `${PAGE_URL}#venture`,
              name: "Pratis",
              url: PAGE_URL,
              description: "A Ravolution venture co-owned with Susanne Örtegren, seeking investment.",
              parentOrganization: { "@id": "https://ravolution.se/#organization" },
              founder: [
                { "@type": "Person", name: "Susanne Örtegren" },
                { "@type": "Person", name: "Ivan Daza" },
              ],
            },
            {
              "@type": "Organization",
              "@id": "https://ravolution.se/#organization",
              name: "Ravolution AB",
              url: "https://ravolution.se/",
              email: "ivan.daza@ravolution.se",
              subOrganization: { "@id": `${PAGE_URL}#venture` },
            },
          ],
        })}</script>
        <noscript>{`Pratis is a calm, Swedish-speaking AI companion for lonely older adults — a voice that remembers you and is simply there to talk. A Ravolution AB venture, co-owned with Susanne Örtegren, currently seeking investors. Companionship, not care: Pratis is not a medical device and makes no treatment claims. Subscription tiers: Lätt 325 kr/mo, Daglig 2,190 kr/mo, Fri 4,790 kr/mo. Payers: families today, public healthcare tomorrow. Investor contact: ivan.daza@ravolution.se`}</noscript>
      </Helmet>

      <EditorialShell>
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-12 min-h-[70vh] flex flex-col justify-end overflow-hidden">
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
                ← Portfolio
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="edit-label text-white/40 block mt-8">06 — Flagship</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-4">Pratis</h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="edit-label text-white/70 mt-4">AI Companion · Swedish-Speaking · Seeking Investors</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="edit-body text-white/70 mt-8 max-w-[60ch]">
                A calm, Swedish-speaking AI companion for lonely older adults — a voice that remembers you and is simply there
                to talk.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="edit-body text-white/60 mt-4 max-w-[60ch]">
                A Ravolution venture, co-owned with <strong className="text-white/90">Susanne Örtegren</strong>. Currently
                seeking investors.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-4">
                <a href="#investors" className="edit-btn inline-flex items-center gap-3">
                  <span>For investors</span>
                  <MoveRight className="w-4 h-4" />
                </a>
                <a
                  href="#venture"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                >
                  How it works
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Venture */}
        <section id="venture" className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — The venture" title="Companionship, not care." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-7">
                <p className="edit-body text-white/70">
                  Pratis is a warm, patient voice — and, if the user wishes, a realistic face that is always clearly an AI.
                  After a relative sets it up, it is one tap away. It greets the person by name, remembers the stories they
                  choose to keep, and is there for a conversation about the day, life, or the news.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Crucially, Pratis is built to <strong className="text-white/90">strengthen real human contact, not replace
                  it</strong>. It gently nudges people to call their daughter, to take the walk, to stay connected to the people
                  in their lives.
                </p>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.1}>
                <div className="bg-[hsl(var(--surface))] border border-white/10 p-8">
                  <Heart className="w-8 h-8 text-[hsl(var(--accent-edit))] mb-4" />
                  <span className="edit-label text-white/40 block">Positioning</span>
                  <span className="edit-label text-[hsl(var(--accent-edit))] block mt-2">COMPANIONSHIP, NOT CARE</span>
                  <p className="text-white/70 text-sm mt-4 leading-relaxed">
                    Pratis is not a medical device and makes no treatment claims.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-12">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.t} delay={i * 0.04}>
                    <div className="bg-[hsl(var(--surface))] p-8 h-full">
                      <Icon className="w-6 h-6 text-[hsl(var(--accent-edit))] mb-4" />
                      <h3 className="text-lg font-display font-bold text-white">{p.t}</h3>
                      <p className="text-white/65 text-sm leading-relaxed mt-3">{p.d}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — Why now" title="A demographic certainty meets a health need." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {stats.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.05}>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <span className="block font-display text-4xl text-[hsl(var(--accent-edit))] leading-none">{s.n}</span>
                    <h3 className="text-base font-display font-bold text-white mt-4">{s.t}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-3">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-white/40 text-xs mt-8 max-w-3xl leading-relaxed">
                Sources: WHO; The Lancet (2024); Holt-Lunstad et al. (PLoS Medicine, 2010); Eurostat; SCB. Pratis is
                companionship, not a medical device, and makes no treatment claims.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Model */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Model" title="How Pratis makes money." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-12">
                Subscription tiers billed per conversation time, with a hard cap so costs never run away. Two payer tracks:
                families today, and — with outcome data — public healthcare tomorrow.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {tiers.map((t, i) => (
                <Reveal key={t.t} delay={i * 0.05}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <span className="edit-label text-white/40 block">{t.t}</span>
                    <span className="block font-display text-2xl text-[hsl(var(--accent-edit))] mt-3">{t.p}</span>
                    <p className="text-white/65 text-sm leading-relaxed mt-3">{t.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="edit-body text-white/70 mt-10 max-w-3xl">
                The primary buyer is often an adult child paying for a parent — companionship for the parent, peace of mind for
                the family. A second, potentially larger payer is public healthcare, where loneliness is increasingly treated as
                a fundable health priority (social prescribing).
              </p>
            </Reveal>
          </div>
        </section>

        {/* Ownership */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="04 — Ownership" title="Team & ownership." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-7">
                <p className="edit-body text-white/70">
                  Pratis is a Ravolution venture, co-owned with <strong className="text-white/90">Susanne Örtegren</strong>.
                  Ravolution leads technology, platform and technical strategy; Susanne leads the idea, business strategy and
                  capital raising.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Ravolution AB is a Stockholm venture studio that builds and holds equity across multiple ventures.
                </p>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.1}>
                <div className="border border-white/10 divide-y divide-white/10">
                  <div className="p-6 bg-[hsl(var(--bg))]">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block">Susanne Örtegren</span>
                    <p className="text-white/65 text-sm mt-2">Co-owner · idea, strategy, capital</p>
                  </div>
                  <div className="p-6 bg-[hsl(var(--bg))]">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block">Ravolution AB</span>
                    <p className="text-white/65 text-sm mt-2">Co-owner · technology &amp; platform</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Investors + contact */}
        <section id="investors" className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — For investors" title="We are raising to bring Pratis to its Swedish pilot." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-7">
                <ul className="space-y-4">
                  {investorPoints.map((p) => (
                    <li key={p} className="flex gap-4 text-white/70 text-sm leading-relaxed">
                      <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-[hsl(var(--accent-edit))]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.1}>
                <div className="bg-[hsl(var(--surface))] border border-white/10 p-8">
                  <span className="edit-label text-white/40 block">Use of funds</span>
                  <span className="block font-display text-xl text-white mt-2">
                    Pilot · voice stack · compliance · go-to-market
                  </span>
                  <span className="edit-label text-white/40 block mt-8">The ask</span>
                  <span className="block font-display text-xl text-[hsl(var(--accent-edit))] mt-2">
                    Amount &amp; terms — on request
                  </span>
                  <a href="#contact" className="edit-btn inline-flex items-center gap-3 mt-8">
                    <span>Request the memorandum</span>
                    <MoveRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <p className="text-white/40 text-xs mt-12 max-w-[70ch] leading-relaxed">
                This page is a summary and contains forward-looking estimates, not an offer of securities or investment advice.
                Market and financial figures are estimates that require independent validation. A detailed information
                memorandum is available on request.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <Reveal>
                  <span className="edit-label text-[hsl(var(--accent-edit))]">Get in touch</span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="edit-h2 text-white mt-6">Request the Pratis memorandum.</h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="edit-body text-white/60 mt-6">
                    Tell us about your interest and we will respond directly. All enquiries are reviewed by the Ravolution team
                    together with Susanne Örtegren.
                  </p>
                </Reveal>
                <Reveal delay={0.25}>
                  <div className="mt-8 space-y-2">
                    <a href="mailto:ivan.daza@ravolution.se" className="edit-label text-white/60 edit-link block">
                      ivan.daza@ravolution.se
                    </a>
                    <a href="mailto:susanne@pratis.se" className="edit-label text-white/60 edit-link block">
                      susanne@pratis.se
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-7">
                <Reveal delay={0.1}>
                  <form onSubmit={submit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Name *</label>
                        <input required type="text" value={form.name} onChange={set("name")} className={inputClass} placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Email *</label>
                        <input required type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder="you@company.com" />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Company</label>
                        <input type="text" value={form.company} onChange={set("company")} className={inputClass} placeholder="Company or organisation" />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Role</label>
                        <input type="text" value={form.role} onChange={set("role")} className={inputClass} placeholder="Your role" />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Phone</label>
                        <input type="tel" value={form.phone} onChange={set("phone")} className={inputClass} placeholder="+46 00 000 00 00" />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Country</label>
                        <input type="text" value={form.country} onChange={set("country")} className={inputClass} placeholder="Country" />
                      </div>
                    </div>
                    <div>
                      <label className="edit-label text-white/50 block mb-2">Area of interest *</label>
                      <select value={form.interest} onChange={set("interest")} className={`${inputClass} appearance-none`}>
                        {interests.map((i) => (
                          <option key={i} value={i} className="bg-[hsl(var(--bg))] text-white">
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="edit-label text-white/50 block mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        className={inputClass}
                        placeholder="Tell us about your interest in Pratis."
                      />
                    </div>
                    <button type="submit" disabled={sending} className="edit-btn inline-flex items-center gap-3 disabled:opacity-50">
                      {sending ? "Sending..." : "Send enquiry"}
                      <MoveRight className="w-4 h-4" />
                    </button>
                  </form>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default PratisPage;
