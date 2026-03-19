import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Send, Calendar, CheckCircle, Briefcase, GraduationCap,
  Languages, Globe, Shield, Zap, FileText, Target, Rocket,
  Lock, ArrowRight, Wrench, Scale, ExternalLink
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

  const portfolioCards = [
    { icon: Briefcase, name: "iApply™", desc: t("angel.portfolio.iapply") },
    { icon: GraduationCap, name: "CommunicaringSchool™", desc: t("angel.portfolio.communicaring") },
    { icon: Languages, name: "Rosetta Livingstone™", desc: t("angel.portfolio.rosetta") },
    { icon: Globe, name: "xPortMatch™", desc: t("angel.portfolio.xportmatch") },
  ];

  const deliverables = [
    { icon: Target, key: "discovery" },
    { icon: Wrench, key: "build" },
    { icon: Shield, key: "ip" },
    { icon: FileText, key: "patent" },
  ];

  const faqKeys = ["whatIsIt", "whatPlatforms", "boardSeats", "equityRange", "codeOwnership", "internationalPatents", "mvpTimeline", "onlySweden"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Angel Investor & Build-for-Equity Partner",
    description: "Swedish venture studio that acts as an angel investor via build-for-equity: end-to-end platform development, IP protection, and patent strategy in exchange for shares.",
    serviceType: ["Angel investment", "Build-for-equity", "Platform development", "IP & patent support"],
    areaServed: { "@type": "Place", name: "Global" },
    provider: {
      "@type": "Organization",
      name: "Ravolution AB",
      url: "https://ravolution.se",
      description: "Swedish Venture Studio & IP Innovation Company",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqKeys.map((key) => ({
      "@type": "Question",
      name: t(`angel.faq.${key}.q`),
      acceptedAnswer: { "@type": "Answer", text: t(`angel.faq.${key}.a`) },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Angel Investor &amp; Build-for-Equity Partner | Ravolution</title>
        <meta name="description" content="Angel investor and build-for-equity partner for complex platforms. We build, protect IP, and support patents in return for shares. Swedish venture studio." />
        <meta name="keywords" content="angel investor, build for equity, platform development, IP protection, patent strategy, Swedish venture studio, tech startup, equity for build" />
        <link rel="canonical" href="https://ravolution.se/en/angel-investor" />
        <meta property="og:title" content="Angel Investor & Build-for-Equity Partner | Ravolution" />
        <meta property="og:description" content="Angel investor and build-for-equity partner for complex platforms. We build, protect IP, and support patents in return for shares." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/angel-investor" />
        <meta property="og:image" content="https://ravolution.se/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Angel Investor & Build-for-Equity Partner | Ravolution" />
        <meta name="twitter:description" content="Angel investor and build-for-equity partner for complex platforms. We build, protect IP, and support patents in return for shares." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen angel-theme">
        <Navbar />

        {/* Hero */}
        <section className="relative text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(210, 62%, 16%) 0%, hsl(210, 62%, 9%) 100%)' }}>
          <div
            className="absolute inset-0 opacity-[0.12] z-[1] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Rocket className="w-4 h-4" />
              {t("angel.heroBadge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up">
              Angel Investor &amp; Build‑for‑Equity
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-4 animate-fade-in-up">
              {t("angel.heroSubhead")}
            </p>
            {/* SEO summary paragraph */}
            <p className="text-base text-primary-foreground/60 max-w-3xl leading-relaxed mb-8 animate-fade-in-up">
              Ravolution is a <strong>Swedish venture studio &amp; IP innovation company</strong> that acts as an <strong>angel investor via build‑for‑equity</strong>. We build complex tech platforms end‑to‑end, protect your IP, and support patent strategy—in return for equity. Proven across platforms like Rosetta Livingstone, iApply, CommunicaringSchool, and xPortMatch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground" asChild>
                <a href="#brief-form">
                  <Send className="mr-2 w-5 h-5" />
                  {t("angel.ctaBrief")}
                </a>
              </Button>
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground border-0" asChild>
                <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-5 h-5" />
                  {t("angel.ctaMeeting")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-dot-pattern">
          {/* Who it's for */}
          <section className="section-padding">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  {t("angel.whoTitle")}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {["preSeed", "complex", "speed"].map((key, i) => (
                    <div key={key} className="card-elevated p-6">
                      <ArrowRight className="w-5 h-5 text-accent mb-3" />
                      <p className="text-muted-foreground">{t(`angel.who.${key}`)}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* What you get */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
                  {t("angel.deliverablesTitle")}
                </h2>
              </ScrollAnimateWrapper>
              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((d, i) => (
                  <ScrollAnimateWrapper key={d.key} delay={i * 0.1}>
                    <div className="card-elevated p-8 h-full">
                      <d.icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-lg font-display font-bold text-foreground mb-2">
                        {t(`angel.deliverable.${d.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(`angel.deliverable.${d.key}.desc`)}
                      </p>
                    </div>
                  </ScrollAnimateWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* How the deal works */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="card-elevated p-8 md:p-10 bg-gradient-to-br from-card to-secondary">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    {t("angel.dealTitle")}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {["equity", "milestones", "hybrid", "scope"].map((key) => (
                      <div key={key}>
                        <Scale className="w-5 h-5 text-gold mb-2" />
                        <h4 className="font-semibold text-foreground mb-1">{t(`angel.deal.${key}.title`)}</h4>
                        <p className="text-muted-foreground text-sm">{t(`angel.deal.${key}.desc`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Portfolio alignment */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {t("angel.portfolioTitle")}
                </h2>
                <p className="text-muted-foreground text-lg mb-4">{t("angel.portfolioSubhead")}</p>
                <p className="text-muted-foreground mb-10">
                  See our full <a href={lp("/services")} className="text-accent hover:text-accent-light underline font-medium">platform development services</a> or explore our <a href={lp("/#products")} className="text-accent hover:text-accent-light underline font-medium">portfolio of platforms</a>.
                </p>
              </ScrollAnimateWrapper>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioCards.map((card, i) => (
                  <ScrollAnimateWrapper key={card.name} delay={i * 0.1}>
                    <div className="card-elevated p-6 text-center h-full">
                      <card.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                      <h3 className="font-display font-bold text-foreground mb-2">{card.name}</h3>
                      <p className="text-muted-foreground text-sm">{card.desc}</p>
                    </div>
                  </ScrollAnimateWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  {t("angel.faqTitle")}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqKeys.map((key) => (
                    <AccordionItem key={key} value={key} className="card-elevated border-none px-6">
                      <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                        {t(`angel.faq.${key}.q`)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {t(`angel.faq.${key}.a`)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Brief Form */}
          <section id="brief-form" className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      {t("angel.formHeadline")}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                      {t("angel.formSubhead")}
                    </p>
                    <p className="text-muted-foreground text-sm mb-8">
                      Founders and teams who want an angel investor that also builds and protects IP can send us a brief here.
                    </p>
                    <div className="flex flex-col gap-4">
                      <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground w-fit" asChild>
                        <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                          <Calendar className="mr-2 w-5 h-5" />
                          {t("angel.ctaMeeting")}
                        </a>
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        {t("angel.orEmail")}{" "}
                        <a href="mailto:ivan.daza@ravolution.se" className="text-accent hover:text-accent-light transition-colors">
                          ivan.daza@ravolution.se
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="card-elevated p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-2">{t("angel.thankYou")}</h3>
                        <p className="text-muted-foreground mb-4">{t("angel.thankYouMsg")}</p>
                        <Button variant="outline" asChild>
                          <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                            <Calendar className="mr-2 w-4 h-4" />
                            {t("angel.ctaMeeting")}
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{t("angel.ctaBrief")}</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Input placeholder={t("angel.form.name")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-secondary border-border" />
                          <Input type="email" placeholder={t("angel.form.email")} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-secondary border-border" />
                        </div>
                        <Input placeholder={t("angel.form.company")} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-secondary border-border" />
                        <Select value={formData.industry} onValueChange={(v) => setFormData({ ...formData, industry: v })}>
                          <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder={t("angel.form.industry")} /></SelectTrigger>
                          <SelectContent>
                            {["healthtech", "fintech", "edtech", "ecommerce", "saas", "marketplace", "logistics", "other"].map((v) => (
                              <SelectItem key={v} value={v}>{t(`angel.form.ind.${v}`)}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select value={formData.stage} onValueChange={(v) => setFormData({ ...formData, stage: v })}>
                          <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder={t("angel.form.stage")} /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="idea">{t("angel.form.stageIdea")}</SelectItem>
                            <SelectItem value="mvp">{t("angel.form.stageMvp")}</SelectItem>
                            <SelectItem value="revenue">{t("angel.form.stageRevenue")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={formData.timeline} onValueChange={(v) => setFormData({ ...formData, timeline: v })}>
                          <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder={t("angel.form.timeline")} /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-4weeks">{t("angel.form.tl1")}</SelectItem>
                            <SelectItem value="1-3months">{t("angel.form.tl2")}</SelectItem>
                            <SelectItem value="3-6months">{t("angel.form.tl3")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <Textarea placeholder={t("angel.form.description")} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="bg-secondary border-border min-h-[100px]" />
                        <Input placeholder={t("angel.form.deckUrl")} value={formData.deckUrl} onChange={(e) => setFormData({ ...formData, deckUrl: e.target.value })} className="bg-secondary border-border" />
                        <div className="flex items-start gap-3">
                          <Checkbox id="angel-consent" checked={consent} onCheckedChange={(c) => setConsent(c === true)} />
                          <label htmlFor="angel-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                            {t("angel.form.consent")}
                          </label>
                        </div>
                        <Button type="submit" className="w-full bg-accent hover:bg-accent-light text-accent-foreground" disabled={!consent || isSubmitting}>
                          <Send className="mr-2 w-4 h-4" />
                          {isSubmitting ? t("angel.form.sending") : t("angel.ctaBrief")}
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default AngelInvestor;
