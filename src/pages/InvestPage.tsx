import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import InvestorRelationsContact from "@/components/InvestorRelationsContact";
import InvestorTrustSection from "@/components/InvestorTrustSection";
import InvestorLegalDisclaimer from "@/components/InvestorLegalDisclaimer";
import InvestorPortfolioMarquee from "@/components/InvestorPortfolioMarquee";

/* ──────────────────────────────────────────────────────────────────
   Editorial primitives
   ────────────────────────────────────────────────────────────────── */

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="block text-[11px] md:text-xs uppercase tracking-[0.25em] text-accent font-mono">
    {children}
  </span>
);

const SectionLabel = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-12 md:mb-20 flex items-baseline gap-6 border-t border-white/10 pt-6">
    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-mono shrink-0">
      {number}
    </span>
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase leading-[0.95] tracking-[-0.02em]">
      {title}
    </h2>
  </div>
);

const EditorialInput = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="block group">
    <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 font-mono mb-2">
      {label}
    </span>
    <input
      {...props}
      className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
    />
  </label>
);

const EditorialTextarea = ({
  label,
  ...props
}: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <label className="block">
    <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 font-mono mb-2">
      {label}
    </span>
    <textarea
      {...props}
      className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none"
    />
  </label>
);

const EditorialSelect = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <label className="block">
    <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 font-mono mb-2">
      {label}
    </span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
    >
      <option value="" className="bg-[#0a0e14] text-white/40">—</option>
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-[#0a0e14] text-white">
          {o.label}
        </option>
      ))}
    </select>
  </label>
);

/* ──────────────────────────────────────────────────────────────────
   Page
   ────────────────────────────────────────────────────────────────── */

const InvestPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", email: "", investorType: "", ticketRange: "", message: ""
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Stockholm",
        }) + " CET"
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setIsSubmitted(true);
  };

  const roadmapItems = ["ipFilings", "productization", "pilots", "team"];
  const faqKeys = ["whatBuild", "defensibility", "studioModel", "patentsInSoftware", "investorNext"];
  const pillarKeys = ["execution", "ip", "ai"];
  const oppKeys = ["opp1", "opp2", "opp3", "opp4"];

  return (
    <>
      <Helmet>
        <title>{t("invest.metaTitle")}</title>
        <meta name="description" content={t("invest.metaDesc")} />
        <link rel="canonical" href="https://ravolution.se/en/invest" />
        <meta property="og:title" content={t("invest.metaTitle")} />
        <meta property="og:description" content={t("invest.metaDesc")} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0e14] text-white selection:bg-accent selection:text-black">
        <Navbar />

        {/* ──────────────── 00 — HERO ──────────────── */}
        <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 overflow-hidden">
          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* top metadata bar */}
          <div className="relative z-10 flex flex-wrap justify-between items-start gap-4 text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-mono">
            <span>Ravolution Capital — Västerås, SWE</span>
            <span>59.6099° N · 16.5448° E</span>
            <span className="hidden md:inline">{time}</span>
          </div>

          {/* headline */}
          <div className="relative z-10 max-w-[1600px] mx-auto w-full">
            <Eyebrow>{t("invest.heroBadge")}</Eyebrow>
            <h1
              className="mt-6 font-display font-black text-white uppercase leading-[0.88] tracking-[-0.035em] animate-fade-in-up"
              style={{ fontSize: "clamp(3.5rem, 11vw, 8.5rem)" }}
            >
              {t("invest.heroH1")}
              <span className="text-accent">_</span>
            </h1>
            <p className="mt-10 max-w-3xl text-base md:text-lg text-white/70 leading-relaxed">
              {t("invest.heroSubhead")}
            </p>
          </div>

          {/* bottom indicator */}
          <div className="relative z-10 flex justify-between items-end text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/40 font-mono">
            <span>↓ Scroll · 04 sections</span>
            <a href="#apply" className="hover:text-accent transition-colors border-b border-white/20 hover:border-accent pb-1">
              Apply →
            </a>
          </div>
        </section>

        {/* ──────────────── Marquee ──────────────── */}
        <div className="border-y border-white/10">
          <InvestorPortfolioMarquee />
        </div>

        {/* ──────────────── 01 — THE THESIS ──────────────── */}
        <section className="px-6 md:px-12 py-32 md:py-48">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="01 — The Thesis" title={t("invest.opportunityTitle")} />

            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <Eyebrow>Why now</Eyebrow>
              </div>
              <ol className="md:col-span-8 space-y-10">
                {oppKeys.map((key, i) => (
                  <li key={key} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start border-t border-white/10 pt-6">
                    <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-accent font-mono pt-1">
                      0{i + 1}
                    </span>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-snug font-display">
                      {t(`invest.${key}`)}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ──────────────── 02 — HOW WE INVEST ──────────────── */}
        <section className="px-6 md:px-12 py-32 md:py-48 border-t border-white/10">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="02 — How We Invest" title={t("invest.diffTitle")} />

            <div className="grid md:grid-cols-3 gap-px bg-white/10">
              {pillarKeys.map((key, i) => (
                <div key={key} className="bg-[#0a0e14] p-8 md:p-12">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-accent font-mono">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight leading-tight">
                    {t(`invest.pillar.${key}.title`)}
                  </h3>
                  <p className="mt-6 text-white/60 leading-relaxed">
                    {t(`invest.pillar.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Focus block — oversized stats */}
            <div className="mt-24 md:mt-32 grid md:grid-cols-3 gap-12 md:gap-16 border-t border-white/10 pt-16">
              {[
                { label: t("invest.focusTypes"), desc: t("invest.focusTypesDesc") },
                { label: t("invest.focusValue"), desc: t("invest.focusValueDesc") },
                { label: t("invest.focusStage"), desc: t("invest.focusStageDesc") },
              ].map((item, i) => (
                <div key={i}>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40 font-mono mb-4">
                    0{i + 1} / 03
                  </span>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight mb-4">
                    {item.label}
                  </h4>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────── 03 — TRUST / IR / PROOF ──────────────── */}
        <section className="border-t border-white/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-12">
            <SectionLabel number="03 — Trust & Proof" title={t("invest.proofTitle")} />
          </div>

          <InvestorTrustSection />
          <InvestorRelationsContact />

          {/* Roadmap */}
          <div className="px-6 md:px-12 py-32 md:py-40 border-t border-white/10">
            <div className="max-w-[1600px] mx-auto">
              <Eyebrow>Use of funds</Eyebrow>
              <h3 className="mt-6 mb-16 text-3xl md:text-5xl font-display font-black text-white uppercase tracking-[-0.02em] leading-[0.95]">
                {t("invest.roadmapTitle")}
              </h3>

              <div className="grid md:grid-cols-2 gap-px bg-white/10">
                {roadmapItems.map((key, i) => (
                  <div key={key} className="bg-[#0a0e14] p-8 md:p-10 flex gap-6">
                    <span className="text-5xl md:text-6xl font-display font-black text-accent leading-none">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-tight mb-2">
                        {t(`invest.roadmap.${key}.title`)}
                      </h4>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {t(`invest.roadmap.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proof block */}
          <div className="px-6 md:px-12 py-24 border-t border-white/10">
            <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-4">
                <Eyebrow>Founder & delivery</Eyebrow>
              </div>
              <div className="md:col-span-8 space-y-6">
                <p className="text-xl md:text-2xl text-white/90 leading-snug font-display">
                  {t("invest.proofFounder")}
                </p>
                <p className="text-white/60 leading-relaxed">{t("invest.proofDelivery")}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono border-l-2 border-accent pl-4 mt-8">
                  {t("invest.proofNDA")}
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="px-6 md:px-12 py-32 md:py-40 border-t border-white/10">
            <div className="max-w-[1600px] mx-auto">
              <Eyebrow>FAQ</Eyebrow>
              <h3 className="mt-6 mb-16 text-3xl md:text-5xl font-display font-black text-white uppercase tracking-[-0.02em] leading-[0.95]">
                {t("invest.faqTitle")}
              </h3>

              <Accordion type="single" collapsible className="space-y-0">
                {faqKeys.map((key, i) => (
                  <AccordionItem
                    key={key}
                    value={key}
                    className="border-0 border-t border-white/10 last:border-b"
                  >
                    <AccordionTrigger className="hover:no-underline py-6 text-left text-lg md:text-2xl font-display font-bold text-white uppercase tracking-tight gap-6">
                      <span className="flex items-baseline gap-6">
                        <span className="text-[11px] uppercase tracking-[0.25em] text-accent font-mono shrink-0">
                          0{i + 1}
                        </span>
                        <span>{t(`invest.faq.${key}.q`)}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/60 leading-relaxed text-base md:text-lg pl-0 md:pl-16 pb-6">
                      {t(`invest.faq.${key}.a`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ──────────────── 04 — APPLY ──────────────── */}
        <section id="apply" className="border-t border-white/10 px-6 md:px-12 py-32 md:py-48">
          <div className="max-w-[1600px] mx-auto">
            <SectionLabel number="04 — Apply" title={t("invest.formHeadline")} />

            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-5">
                <p className="text-xl md:text-2xl text-white/80 leading-snug font-display mb-12">
                  {t("invest.formSubhead")}
                </p>

                <div className="space-y-6 border-t border-white/10 pt-8">
                  <div>
                    <Eyebrow>Direct</Eyebrow>
                    <a
                      href="mailto:ivan.daza@ravolution.se"
                      className="block mt-3 text-2xl md:text-3xl font-display font-bold text-white hover:text-accent transition-colors break-all leading-tight"
                    >
                      ivan.daza<span className="text-accent">@</span>ravolution.se
                    </a>
                  </div>
                  <div>
                    <Eyebrow>HQ</Eyebrow>
                    <p className="mt-3 text-lg text-white/80 font-display">
                      Västerås — Stockholm, SWE
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                {isSubmitted ? (
                  <div className="border border-white/10 p-12 text-center">
                    <CheckCircle className="w-10 h-10 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight mb-3">
                      {t("invest.thankYou")}
                    </h3>
                    <p className="text-white/60">{t("invest.thankYouMsg")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <EditorialInput
                        label="01 / Name"
                        placeholder={t("invest.form.name")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <EditorialInput
                        label="02 / Email"
                        type="email"
                        placeholder={t("invest.form.email")}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <EditorialSelect
                        label="03 / Investor type"
                        value={formData.investorType}
                        onChange={(v) => setFormData({ ...formData, investorType: v })}
                        options={[
                          { value: "angel", label: t("invest.form.typeAngel") },
                          { value: "family-office", label: t("invest.form.typeFamily") },
                          { value: "fund", label: t("invest.form.typeFund") },
                          { value: "strategic", label: t("invest.form.typeStrategic") },
                        ]}
                      />
                      <EditorialSelect
                        label="04 / Ticket"
                        value={formData.ticketRange}
                        onChange={(v) => setFormData({ ...formData, ticketRange: v })}
                        options={[
                          { value: "25-100k", label: "€25K – €100K" },
                          { value: "100-500k", label: "€100K – €500K" },
                          { value: "500k-1m", label: "€500K – €1M" },
                          { value: "1m+", label: "€1M+" },
                        ]}
                      />
                    </div>
                    <EditorialTextarea
                      label="05 / Message"
                      placeholder={t("invest.form.message")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                    />

                    <div className="flex items-start gap-3 pt-4">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked === true)}
                        className="mt-0.5 rounded-none border-white/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <label htmlFor="consent" className="text-[11px] uppercase tracking-[0.15em] text-white/50 leading-relaxed cursor-pointer font-mono">
                        {t("invest.form.consent")}
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!consent}
                      className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-accent text-black px-10 py-5 text-sm uppercase tracking-[0.25em] font-bold font-mono hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      {t("invest.ctaDeck")}
                    </button>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono pt-2">
                      {t("invest.form.confidentiality")}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Legal */}
        <div className="border-t border-white/10">
          <InvestorLegalDisclaimer />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default InvestPage;
