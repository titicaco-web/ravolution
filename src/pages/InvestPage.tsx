import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowRight, Shield, Zap, Brain, Globe, GraduationCap, Languages, Briefcase,
  TrendingUp, Target, Users, Send, CheckCircle, Calendar, FileText,
  ChevronDown, ChevronUp, Rocket, Lock
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InvestPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "", email: "", investorType: "", ticketRange: "", message: ""
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setIsSubmitted(true);
  };

  const portfolioCards = [
    { icon: Briefcase, key: "recruiting" },
    { icon: GraduationCap, key: "education" },
    { icon: Languages, key: "language" },
    { icon: Globe, key: "trade" },
  ];

  const pillars = [
    { icon: Rocket, key: "execution" },
    { icon: Shield, key: "ip" },
    { icon: Brain, key: "ai" },
  ];

  const roadmapItems = ["ipFilings", "productization", "pilots", "team"];

  const faqKeys = ["whatBuild", "defensibility", "studioModel", "patentsInSoftware", "investorNext"];

  return (
    <>
      <Helmet>
        <title>{t("invest.metaTitle")}</title>
        <meta name="description" content={t("invest.metaDesc")} />
        <link rel="canonical" href="https://ravolution.se/en/invest" />
        <meta property="og:title" content={t("invest.metaTitle")} />
        <meta property="og:description" content={t("invest.metaDesc")} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ravolution AB",
            "description": t("invest.metaDesc"),
            "url": "https://ravolution.se",
            "founder": {
              "@type": "Person",
              "name": "Ivan Daza",
              "jobTitle": "Founder & CEO"
            },
            "sameAs": [
              "https://www.linkedin.com/company/ravolution"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="relative gradient-hero text-primary-foreground pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(210, 100%, 20%) 0%, hsl(210, 100%, 12%) 100%)' }}>
          {/* White Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.12] z-[1] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <TrendingUp className="w-4 h-4" />
              {t("invest.heroBadge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in-up">
              {t("invest.heroH1")}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-8 animate-fade-in-up">
              {t("invest.heroSubhead")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in-up">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground" asChild>
                <a href="#investor-form">
                  <FileText className="mr-2 w-5 h-5" />
                  {t("invest.ctaDeck")}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-5 h-5" />
                  {t("invest.ctaCall")}
                </a>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/60 flex items-center gap-2 animate-fade-in">
              <Lock className="w-4 h-4" />
              {t("invest.trustLine")}
            </p>
          </div>
        </section>

        <div className="bg-dot-pattern">

          {/* The Opportunity */}
          <section className="section-padding">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  {t("invest.opportunityTitle")}
                </h2>
                <ul className="space-y-4">
                  {["opp1", "opp2", "opp3", "opp4"].map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-muted-foreground text-lg">{t(`invest.${key}`)}</p>
                    </li>
                  ))}
                </ul>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Portfolio */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
                  {t("invest.portfolioTitle")}
                </h2>
              </ScrollAnimateWrapper>
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioCards.map((card, i) => (
                  <ScrollAnimateWrapper key={card.key} delay={i * 0.1}>
                    <div className="card-elevated p-8 h-full">
                      <card.icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">
                        {t(`invest.portfolio.${card.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`invest.portfolio.${card.key}.desc`)}
                      </p>
                    </div>
                  </ScrollAnimateWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* Differentiation */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
                  {t("invest.diffTitle")}
                </h2>
              </ScrollAnimateWrapper>
              <div className="grid md:grid-cols-3 gap-6">
                {pillars.map((p, i) => (
                  <ScrollAnimateWrapper key={p.key} delay={i * 0.1}>
                    <div className="card-elevated p-8 h-full">
                      <p.icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-lg font-display font-bold text-foreground mb-3">
                        {t(`invest.pillar.${p.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {t(`invest.pillar.${p.key}.desc`)}
                      </p>
                    </div>
                  </ScrollAnimateWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* Investment Focus */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="card-elevated p-8 md:p-10 bg-gradient-to-br from-card to-secondary">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    {t("invest.focusTitle")}
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("invest.focusTypes")}</h4>
                      <p className="text-muted-foreground text-sm">{t("invest.focusTypesDesc")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("invest.focusValue")}</h4>
                      <p className="text-muted-foreground text-sm">{t("invest.focusValueDesc")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("invest.focusStage")}</h4>
                      <p className="text-muted-foreground text-sm">{t("invest.focusStageDesc")}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Use of Funds */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  {t("invest.roadmapTitle")}
                </h2>
                <div className="space-y-4">
                  {roadmapItems.map((key, i) => (
                    <div key={key} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-accent">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{t(`invest.roadmap.${key}.title`)}</h4>
                        <p className="text-muted-foreground text-sm">{t(`invest.roadmap.${key}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Proof & Credibility */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="card-elevated p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    {t("invest.proofTitle")}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    {t("invest.proofFounder")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("invest.proofDelivery")}
                  </p>
                  <p className="text-sm text-muted-foreground italic mt-4 border-l-2 border-accent/30 pl-4">
                    {t("invest.proofNDA")}
                  </p>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  {t("invest.faqTitle")}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqKeys.map((key) => (
                    <AccordionItem key={key} value={key} className="card-elevated border-none px-6">
                      <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
                        {t(`invest.faq.${key}.q`)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {t(`invest.faq.${key}.a`)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* CTA + Form */}
          <section id="investor-form" className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      {t("invest.formHeadline")}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {t("invest.formSubhead")}
                    </p>
                    <div className="flex flex-col gap-4">
                      <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground w-fit" asChild>
                        <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                          <Calendar className="mr-2 w-5 h-5" />
                          {t("invest.ctaCall")}
                        </a>
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        {t("invest.orEmail")}{" "}
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
                        <h3 className="text-xl font-display font-bold text-foreground mb-2">{t("invest.thankYou")}</h3>
                        <p className="text-muted-foreground mb-4">{t("invest.thankYouMsg")}</p>
                        <Button variant="outline" asChild>
                          <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                            <Calendar className="mr-2 w-4 h-4" />
                            {t("invest.ctaCall")}
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <h3 className="text-lg font-display font-bold text-foreground mb-2">{t("invest.ctaDeck")}</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Input
                            placeholder={t("invest.form.name")}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="bg-secondary border-border"
                          />
                          <Input
                            type="email"
                            placeholder={t("invest.form.email")}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="bg-secondary border-border"
                          />
                        </div>
                        <Select value={formData.investorType} onValueChange={(v) => setFormData({ ...formData, investorType: v })}>
                          <SelectTrigger className="bg-secondary border-border">
                            <SelectValue placeholder={t("invest.form.type")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="angel">{t("invest.form.typeAngel")}</SelectItem>
                            <SelectItem value="family-office">{t("invest.form.typeFamily")}</SelectItem>
                            <SelectItem value="fund">{t("invest.form.typeFund")}</SelectItem>
                            <SelectItem value="strategic">{t("invest.form.typeStrategic")}</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={formData.ticketRange} onValueChange={(v) => setFormData({ ...formData, ticketRange: v })}>
                          <SelectTrigger className="bg-secondary border-border">
                            <SelectValue placeholder={t("invest.form.ticket")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25-100k">€25K – €100K</SelectItem>
                            <SelectItem value="100-500k">€100K – €500K</SelectItem>
                            <SelectItem value="500k-1m">€500K – €1M</SelectItem>
                            <SelectItem value="1m+">€1M+</SelectItem>
                          </SelectContent>
                        </Select>
                        <Textarea
                          placeholder={t("invest.form.message")}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={3}
                          className="bg-secondary border-border resize-none"
                        />
                        <div className="flex items-start gap-2">
                          <Checkbox
                            id="consent"
                            checked={consent}
                            onCheckedChange={(checked) => setConsent(checked === true)}
                          />
                          <label htmlFor="consent" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                            {t("invest.form.consent")}
                          </label>
                        </div>
                        <Button type="submit" className="w-full bg-accent hover:bg-accent-light text-accent-foreground" disabled={!consent}>
                          <Send className="mr-2 w-4 h-4" />
                          {t("invest.ctaDeck")}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          {t("invest.form.confidentiality")}
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="max-w-5xl mx-auto px-6 pb-8">
            <p className="text-xs text-muted-foreground/60 text-center">
              {t("invest.disclaimer")}
            </p>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default InvestPage;
