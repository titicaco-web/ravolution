import { useState } from "react";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Send, Calendar, CheckCircle, Briefcase, GraduationCap,
  Languages, Globe, Shield, FileText, Target, Rocket,
  Wrench, Scale, XCircle, Building, UserCheck
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AngelInvestor = () => {
  const { t } = useLanguage();
  const lp = useLangPath();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", industry: "", stage: "",
    timeline: "", description: "", deckUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !formData.name || !formData.email) return;
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-angel-brief", {
        body: formData,
      });
      if (error) throw error;
      setIsSubmitted(true);
    } catch (err) {
      toast({ title: "Error", description: "Failed to send brief. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqKeys = ["whatIsIt", "diffAgency", "bestFit", "onlySweden", "whatProvide", "codeOwnership", "ipOwnership", "patents", "mvpTimeline", "cashEquity"];

  const caseKeys = ["iapply", "communicaring", "rosetta", "xportmatch"];
  const caseIcons = [Briefcase, GraduationCap, Languages, Globe];

  const deliverables = [
    { icon: Target, key: "discovery" },
    { icon: Wrench, key: "build" },
    { icon: Shield, key: "ip" },
    { icon: FileText, key: "patent" },
  ];

  const equityKeys = ["equityOnly", "hybrid", "milestone", "scope"];

  const diffKeys = ["devShop", "vc", "cofounder"];
  const diffIcons = [Building, Scale, UserCheck];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ravolution.se/#organization",
        name: "Ravolution AB",
        url: "https://ravolution.se/",
        logo: "https://ravolution.se/favicon.png",
        description: "Swedish venture studio and IP innovation company offering build-for-equity, platform development, IP protection and patent strategy.",
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": "https://ravolution.se/en/angel-investor#service",
        serviceType: "Build-for-equity venture studio and angel investor support",
        name: "Angel Investor & Build-for-Equity",
        provider: { "@id": "https://ravolution.se/#organization" },
        areaServed: "International",
        audience: {
          "@type": "Audience",
          audienceType: "Pre-seed to seed founders and startups building complex platforms",
        },
        url: "https://ravolution.se/en/angel-investor",
        description: "Ravolution invests senior product, engineering, IP protection and patent strategy in exchange for equity.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ravolution.se/en/angel-investor#faq",
        mainEntity: faqKeys.map((key) => ({
          "@type": "Question",
          name: t(`angel.faq.${key}.q`),
          acceptedAnswer: { "@type": "Answer", text: t(`angel.faq.${key}.a`) },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{t("angel.metaTitle")}</title>
        <meta name="description" content={t("angel.metaDesc")} />
        <meta name="keywords" content="build-for-equity investor, venture studio for equity, technical co-founder alternative, startup product development for equity, angel investor Sweden startup, IP strategy for startups, patent strategy startups, build-for-equity angel investor" />
        <link rel="canonical" href="https://ravolution.se/en/angel-investor" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/angel-investor" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/angel-investor" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/angel-investor" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en/angel-investor" />
        <meta property="og:title" content={t("angel.ogTitle")} />
        <meta property="og:description" content={t("angel.ogDesc")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/angel-investor" />
        <meta property="og:image" content="https://ravolution.se/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("angel.ogTitle")} />
        <meta name="twitter:description" content={t("angel.ogDesc")} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <EditorialShell>
        {/* ─── HERO ─── */}
        <section className="edit-section relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="edit-container relative">
            <Reveal>
              <div className="edit-label text-[hsl(var(--accent-edit))] mb-8 flex items-center gap-3">
                <Rocket className="w-4 h-4" />
                {t("angel.heroBadge")}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white max-w-[12ch] mb-10">
                {t("angel.heroH1")}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/70 max-w-2xl mb-6">
                {t("angel.heroSubhead")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="edit-label text-white/40 mb-12">
                {t("angel.trustStrip")}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <a href="#brief-form" className="edit-btn">
                  <Send className="w-4 h-4" />
                  {t("angel.ctaBrief")}
                </a>
                <a href={lp("/brief")} className="edit-btn">
                  <FileText className="w-4 h-4" />
                  Submit deck on Brief page ↗
                </a>
                <a href="mailto:ivan.daza@ravolution.se" className="edit-btn">
                  <Calendar className="w-4 h-4" />
                  {t("angel.ctaMeeting")}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── PORTFOLIO MARQUEE ─── */}
        <InvestorPortfolioMarquee />

        {/* ─── 01 INTRO ─── */}
        <section className="edit-section">
          <div className="edit-container">
            <SectionLabel number="01" title={t("angel.introTitle")} />
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-2 hidden md:block" />
              <div className="md:col-span-9 space-y-6">
                <Reveal><p className="edit-body text-white/80">{t("angel.introText1")}</p></Reveal>
                <Reveal delay={0.1}><p className="edit-body text-white/70">{t("angel.introText2")}</p></Reveal>
                <Reveal delay={0.2}><p className="edit-body text-white/70">{t("angel.introText3")}</p></Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 02 WHO / NOT FOR ─── */}
        <section className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="02" title={t("angel.whoTitle")} />
            <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="bg-[hsl(var(--bg))] p-8 md:p-12">
                <div className="edit-label text-[hsl(var(--accent-edit))] mb-6">— Best fit</div>
                <div className="space-y-4">
                  {["preSeed", "complex", "speed"].map((key, i) => (
                    <Reveal key={key} delay={i * 0.08}>
                      <div className="flex gap-4 items-start border-t border-white/10 pt-4">
                        <CheckCircle className="w-5 h-5 text-[hsl(var(--accent-edit))] mt-1 shrink-0" />
                        <p className="edit-body text-white/80">{t(`angel.who.${key}`)}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div className="bg-[hsl(var(--surface))] p-8 md:p-12">
                <div className="edit-label text-white/40 mb-6">— {t("angel.notForTitle")}</div>
                <div className="space-y-4">
                  {["simple", "noSkin", "justCode"].map((key, i) => (
                    <Reveal key={key} delay={i * 0.08}>
                      <div className="flex gap-4 items-start border-t border-white/10 pt-4">
                        <XCircle className="w-5 h-5 text-white/40 mt-1 shrink-0" />
                        <p className="edit-body text-white/60">{t(`angel.notFor.${key}`)}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 03 HOW WE DIFFER ─── */}
        <section className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="03" title={t("angel.diffTitle")} />
            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {diffKeys.map((key, i) => {
                const Icon = diffIcons[i];
                return (
                  <Reveal key={key} delay={i * 0.1}>
                    <div className="bg-[hsl(var(--bg))] p-8 md:p-10 h-full">
                      <Icon className="w-8 h-8 text-[hsl(var(--accent-edit))] mb-6" />
                      <div className="edit-label text-white/40 mb-3">0{i + 1}</div>
                      <h3 className="font-display font-bold text-white text-xl mb-3 uppercase tracking-tight">
                        {t(`angel.diff.${key}.title`)}
                      </h3>
                      <p className="edit-body text-white/70">
                        {t(`angel.diff.${key}.desc`)}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 04 EQUITY MODELS ─── */}
        <section className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="04" title={t("angel.equityTitle")} />
            <Reveal>
              <p className="edit-body text-white/70 max-w-3xl mb-12">{t("angel.equityIntro")}</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {equityKeys.map((key, i) => (
                <Reveal key={key} delay={i * 0.08}>
                  <div className="bg-[hsl(var(--surface))] p-8 md:p-10 h-full">
                    <Scale className="w-6 h-6 text-[hsl(var(--accent-edit))] mb-4" />
                    <div className="edit-label text-white/40 mb-2">Model · 0{i + 1}</div>
                    <h4 className="font-display font-bold text-white text-lg mb-3 uppercase">
                      {t(`angel.equity.${key}.title`)}
                    </h4>
                    <p className="edit-body text-white/70">{t(`angel.equity.${key}.desc`)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 05 IP & OWNERSHIP ─── */}
        <section className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="05" title={t("angel.ipTitle")} />
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-2 hidden md:block" />
              <div className="md:col-span-9 space-y-6">
                <Reveal><p className="edit-body text-white/80">{t("angel.ipText1")}</p></Reveal>
                <Reveal delay={0.1}><p className="edit-body text-white/70">{t("angel.ipText2")}</p></Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 06 DELIVERABLES ─── */}
        <section className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="06" title={t("angel.deliverablesTitle")} />
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {deliverables.map((d, i) => (
                <Reveal key={d.key} delay={i * 0.08}>
                  <div className="bg-[hsl(var(--bg))] p-8 md:p-12 h-full">
                    <div className="flex items-start gap-6">
                      <d.icon className="w-9 h-9 text-[hsl(var(--accent-edit))] shrink-0" />
                      <div>
                        <div className="edit-label text-white/40 mb-2">0{i + 1}</div>
                        <h3 className="font-display font-bold text-white text-xl mb-3 uppercase tracking-tight">
                          {t(`angel.deliverable.${d.key}.title`)}
                        </h3>
                        <p className="edit-body text-white/70">
                          {t(`angel.deliverable.${d.key}.desc`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 07 CASE PROOF ─── */}
        <section className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="07" title={t("angel.caseTitle")} />
            <Reveal>
              <p className="edit-body text-white/60 mb-10">
                <a href={lp("/services")} className="edit-link text-white hover:text-[hsl(var(--accent-edit))]">{t("angel.seeServices")}</a>
                <span className="text-white/30 mx-3">·</span>
                <a href={lp("/portfolio")} className="edit-link text-white hover:text-[hsl(var(--accent-edit))]">{t("angel.seePortfolio")}</a>
                <span className="text-white/30 mx-3">·</span>
                <a href={lp("/#patents")} className="edit-link text-white hover:text-[hsl(var(--accent-edit))]">{t("angel.seePatents")}</a>
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {caseKeys.map((key, i) => {
                const Icon = caseIcons[i];
                return (
                  <Reveal key={key} delay={i * 0.08}>
                    <div className="bg-[hsl(var(--surface))] p-8 h-full">
                      <Icon className="w-7 h-7 text-[hsl(var(--accent-edit))] mb-5" />
                      <div className="edit-label text-[hsl(var(--accent-edit))] mb-2">{t(`angel.cases.${key}.type`)}</div>
                      <h3 className="font-display font-bold text-white mb-2 uppercase tracking-tight">{t(`angel.cases.${key}.name`)}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{t(`angel.cases.${key}.detail`)}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── 08 FAQ ─── */}
        <section className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="08" title={t("angel.faqTitle")} />
            <Reveal>
              <Accordion type="single" collapsible className="border-t border-white/10">
                {faqKeys.map((key) => (
                  <AccordionItem key={key} value={key} className="border-b border-white/10">
                    <AccordionTrigger className="text-white font-display font-bold uppercase tracking-tight text-base md:text-lg text-left hover:no-underline hover:text-[hsl(var(--accent-edit))] py-6 [&>svg]:text-[hsl(var(--accent-edit))]">
                      {t(`angel.faq.${key}.q`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed text-base pb-6 max-w-3xl">
                      {t(`angel.faq.${key}.a`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* ─── 08·5 SUBMIT-ON-BRIEF CTA BAND ─── */}
        <section className="edit-section pt-0 pb-0">
          <div className="edit-container">
            <Reveal>
              <div className="grid md:grid-cols-12 gap-px bg-white/10 border border-white/10">
                <div className="bg-[hsl(var(--surface))] p-8 md:p-12 md:col-span-8">
                  <div className="edit-label text-[hsl(var(--accent-edit))] mb-4">
                    — Already have a deck?
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl md:text-3xl uppercase tracking-tight leading-tight mb-3">
                    Send your pitch deck or write your brief
                  </h3>
                  <p className="edit-body text-white/70 max-w-2xl">
                    Use the dedicated brief page to upload your deck (PDF) or describe
                    your idea in detail. Reviewed personally by Ivan within 48 hours.
                  </p>
                </div>
                <div className="bg-[hsl(var(--bg))] p-8 md:p-12 md:col-span-4 flex flex-col justify-center gap-3">
                  <a href={lp("/brief")} className="edit-btn justify-center">
                    <FileText className="w-4 h-4" />
                    Submit on Brief page ↗
                  </a>
                  <a href="#brief-form" className="edit-btn justify-center">
                    <Send className="w-4 h-4" />
                    Quick form below
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── 09 BRIEF FORM ─── */}
        <section id="brief-form" className="edit-section pt-0">
          <div className="edit-container">
            <SectionLabel number="09" title={t("angel.formHeadline")} />
            <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
              <div className="bg-[hsl(var(--bg))] p-8 md:p-12 lg:col-span-5">
                <Reveal>
                  <p className="edit-body text-white/80 mb-6">
                    {t("angel.formSubhead")}
                  </p>
                  <p className="text-white/55 text-sm mb-10 leading-relaxed">
                    {t("angel.formSupportText")}
                  </p>
                  <a href="mailto:ivan.daza@ravolution.se" className="edit-btn mb-6">
                    <Calendar className="w-4 h-4" />
                    {t("angel.ctaMeeting")}
                  </a>
                  <div className="border-t border-white/10 pt-6 mt-2">
                    <div className="edit-label text-white/40 mb-3">— Prefer to upload a deck?</div>
                    <a href={lp("/brief")} className="edit-link text-[hsl(var(--accent-edit))] inline-flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Submit on the Brief page ↗
                    </a>
                  </div>
                  <p className="text-sm text-white/55 mt-6">
                    {t("angel.orEmail")}{" "}
                    <a href="mailto:ivan.daza@ravolution.se" className="edit-link text-white">
                      ivan.daza@ravolution.se
                    </a>
                  </p>
                </Reveal>
              </div>

              <div className="bg-[hsl(var(--surface))] p-8 md:p-12 lg:col-span-7">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 border border-[hsl(var(--accent-edit))] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-7 h-7 text-[hsl(var(--accent-edit))]" />
                    </div>
                    <h3 className="font-display font-bold text-white text-xl uppercase mb-3">{t("angel.thankYou")}</h3>
                    <p className="text-white/70 mb-8 max-w-md mx-auto">{t("angel.thankYouMsg")}</p>
                    <a href="mailto:ivan.daza@ravolution.se" className="edit-btn">
                      <Calendar className="w-4 h-4" />
                      {t("angel.ctaMeeting")}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="edit-label text-[hsl(var(--accent-edit))] mb-4">— {t("angel.ctaBrief")}</div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder={t("angel.form.name")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white placeholder:text-white/40 focus-visible:ring-[hsl(var(--accent-edit))] h-12" />
                      <Input type="email" placeholder={t("angel.form.email")} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white placeholder:text-white/40 focus-visible:ring-[hsl(var(--accent-edit))] h-12" />
                    </div>
                    <Input placeholder={t("angel.form.company")} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white placeholder:text-white/40 focus-visible:ring-[hsl(var(--accent-edit))] h-12" />
                    <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
                      <SelectTrigger className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white h-12"><SelectValue placeholder={t("angel.form.industry")} /></SelectTrigger>
                      <SelectContent>
                        {["healthtech", "fintech", "edtech", "ecommerce", "saas", "marketplace", "logistics", "other"].map((v) => (
                          <SelectItem key={v} value={v}>{t(`angel.form.ind.${v}`)}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={formData.stage} onValueChange={(v) => setFormData({ ...formData, stage: v })}>
                      <SelectTrigger className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white h-12"><SelectValue placeholder={t("angel.form.stage")} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">{t("angel.form.stageIdea")}</SelectItem>
                        <SelectItem value="mvp">{t("angel.form.stageMvp")}</SelectItem>
                        <SelectItem value="revenue">{t("angel.form.stageRevenue")}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={formData.timeline} onValueChange={(v) => setFormData({ ...formData, timeline: v })}>
                      <SelectTrigger className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white h-12"><SelectValue placeholder={t("angel.form.timeline")} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-4weeks">{t("angel.form.tl1")}</SelectItem>
                        <SelectItem value="1-3months">{t("angel.form.tl2")}</SelectItem>
                        <SelectItem value="3-6months">{t("angel.form.tl3")}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder={t("angel.form.description")} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white placeholder:text-white/40 focus-visible:ring-[hsl(var(--accent-edit))] min-h-[120px]" />
                    <Input placeholder={t("angel.form.deckUrl")} value={formData.deckUrl} onChange={(e) => setFormData({ ...formData, deckUrl: e.target.value })} className="bg-[hsl(var(--bg))] border-white/15 rounded-none text-white placeholder:text-white/40 focus-visible:ring-[hsl(var(--accent-edit))] h-12" />
                    <div className="flex items-start gap-3 pt-2">
                      <Checkbox id="angel-consent" checked={consent} onCheckedChange={(c) => setConsent(c === true)} className="border-white/30 rounded-none data-[state=checked]:bg-[hsl(var(--accent-edit))] data-[state=checked]:border-[hsl(var(--accent-edit))] data-[state=checked]:text-black mt-1" />
                      <label htmlFor="angel-consent" className="text-sm text-white/65 leading-relaxed cursor-pointer">
                        {t("angel.form.consent")}
                      </label>
                    </div>
                    <button type="submit" disabled={!consent || isSubmitting} className="edit-btn w-full justify-center mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                      <Send className="w-4 h-4" />
                      {isSubmitting ? t("angel.form.sending") : t("angel.ctaBrief")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default AngelInvestor;
