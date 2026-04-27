import { Helmet } from "react-helmet-async";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Shield, FileText, Search, Globe, Scale, CheckCircle } from "lucide-react";

const PatentStrategyForStartups = () => {
  const lp = useLangPath();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ravolution.se/en/patent-strategy-for-startups#webpage",
    name: "Patent Strategy for Startups | IP Protection from Day One | Ravolution",
    description: "How Ravolution helps startups build defensible IP from day one. Prior-art research, claim direction, filing support and long-term patent strategy as part of the build-for-equity model.",
    url: "https://ravolution.se/en/patent-strategy-for-startups",
    isPartOf: { "@id": "https://ravolution.se/#organization" },
  };

  const services = [
    { icon: Search, title: "Prior-Art Research & Landscape Analysis", desc: "We research existing patents and publications to understand the competitive IP landscape before framing your invention. This reduces filing risk and strengthens claims." },
    { icon: FileText, title: "Claim Direction & Drafting Coordination", desc: "We help position the invention, define claim scope and coordinate with patent attorneys to ensure filings protect the right methods—not just features." },
    { icon: Globe, title: "Multi-Jurisdiction Filing Support", desc: "We support PCT, EPO and USPTO filings. International protection is planned from the start so you don't lose priority deadlines." },
    { icon: Shield, title: "IP Audit & Freedom-to-Operate", desc: "Before building, we audit existing IP exposure and assess freedom-to-operate. This prevents costly conflicts and strengthens your negotiation position." },
    { icon: Scale, title: "IP Assignment & Documentation", desc: "Ownership, assignment and licensing structures are documented contractually. Founders know exactly what they own and what is protected." },
  ];

  const whyMatters = [
    "Patents protect foundational methods, not just features—competitors can't replicate your core approach.",
    "Defensible IP increases company valuation and strengthens investor conversations.",
    "Early patent strategy prevents prior-art conflicts that become expensive later.",
    "Licensing revenue creates income independent of direct product sales.",
    "IP-protected platforms are harder to commoditize, creating durable competitive moats.",
  ];

  return (
    <>
      <Helmet>
        <title>Patent Strategy for Startups | IP Protection from Day One | Ravolution</title>
        <meta name="description" content="How Ravolution helps startups build defensible IP from day one. Prior-art research, claim direction, filing support and long-term patent strategy integrated into product development." />
        <link rel="canonical" href="https://ravolution.se/en/patent-strategy-for-startups" />
        <meta property="og:title" content="Patent Strategy for Startups | Ravolution" />
        <meta property="og:description" content="Build defensible IP from day one. Prior-art research, claim direction and filing support as part of a venture studio build-for-equity model." />
        <meta property="og:url" content="https://ravolution.se/en/patent-strategy-for-startups" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/patent-strategy-for-startups" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/patent-strategy-for-startups" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/patent-strategy-for-startups" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en/patent-strategy-for-startups" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

              <EditorialShell>
<section className="relative text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(210, 62%, 16%) 0%, hsl(210, 62%, 9%) 100%)' }}>
          <div className="absolute inset-0 opacity-[0.08] z-[1] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Patent Strategy for Startups
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
              Most startups think about patents too late—or not at all. Ravolution integrates IP protection and patent strategy into the product development process from day one, as part of our build-for-equity model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                <a href={lp("/angel-investor#brief-form")}>
                  <Send className="mr-2 w-5 h-5" />
                  Send Your Brief
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white" asChild>
                <a href={lp("/#patents")}>
                  <ArrowRight className="mr-2 w-5 h-5" />
                  View Patent Portfolio
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-dot-pattern">
          <section className="section-padding">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Why Patent Strategy Matters for Startups
                </h2>
                <div className="space-y-4">
                  {whyMatters.map((point, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          <section className="section-padding pt-0">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Ravolution's Track Record
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    Ravolution currently holds <strong className="text-foreground">27 patents with 343 claims</strong> across four strategic verticals: language learning, K1–K9 education, transparent recruitment and voice security. These patents protect foundational methods—not surface-level features—creating durable competitive moats.
                  </p>
                  <p>
                    This same methodology is applied to every build-for-equity engagement. When we invest in a startup, patent strategy is part of the product process, not an afterthought.
                  </p>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
                  What We Provide
                </h2>
              </ScrollAnimateWrapper>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((s, i) => (
                  <ScrollAnimateWrapper key={i} delay={i * 0.08}>
                    <div className="card-elevated p-8 h-full">
                      <s.icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-lg font-display font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </ScrollAnimateWrapper>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding pt-0">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="card-elevated p-8 bg-gradient-to-br from-card to-secondary">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">Related Pages</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <a href={lp("/angel-investor")} className="text-accent hover:text-accent-light underline font-medium">Angel Investor & Build-for-Equity</a>
                    <a href={lp("/build-for-equity")} className="text-accent hover:text-accent-light underline font-medium">How Build-for-Equity Works</a>
                    <a href={lp("/technical-cofounder-alternative")} className="text-accent hover:text-accent-light underline font-medium">Technical Co-Founder Alternative</a>
                    <a href={lp("/services")} className="text-accent hover:text-accent-light underline font-medium">Platform Development Services</a>
                    <a href={lp("/#patents")} className="text-accent hover:text-accent-light underline font-medium">Patent Portfolio</a>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          </div>

          </EditorialShell>
    </>
  );
};

export default PatentStrategyForStartups;
