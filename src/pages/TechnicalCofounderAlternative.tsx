import { Helmet } from "react-helmet-async";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";
import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Users, Building, UserCheck, CheckCircle, XCircle } from "lucide-react";

const TechnicalCofounderAlternative = () => {
  const lp = useLangPath();
  const { language } = useLanguage();
  const canonicalUrl = `https://ravolution.se/${language}/technical-cofounder-alternative`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: "Technical Co-Founder Alternative | Venture Studio Team for Equity | Ravolution",
    description: "Why a venture studio team can be a better alternative to a technical co-founder. Ravolution invests product, engineering and IP strategy for equity—structured, accountable and scalable.",
    url: canonicalUrl,
    inLanguage: language,
    isPartOf: { "@id": "https://ravolution.se/#organization" },
  };

  const comparison = [
    { aspect: "Team size", cofounder: "One person", ravolution: "Full venture studio team: product, design, engineering, QA, IP" },
    { aspect: "Accountability", cofounder: "Personal relationship", ravolution: "Contractual milestones with defined deliverables" },
    { aspect: "IP strategy", cofounder: "Usually absent", ravolution: "Integrated from day one: prior-art, claims, filing support" },
    { aspect: "Scalability", cofounder: "Limited by one person's bandwidth", ravolution: "Team scales with project complexity" },
    { aspect: "Risk if person leaves", cofounder: "Company-threatening", ravolution: "Team continuity is built in" },
    { aspect: "Equity structure", cofounder: "Often 50/50 by default", ravolution: "Defined by scope, complexity and stage—typically 5–25%" },
  ];

  const idealFor = [
    "You have domain expertise and a validated problem but need a technical partner to build the platform.",
    "You've struggled to find a CTO or technical co-founder who shares your commitment.",
    "You want to move fast without spending 6–12 months searching for the right person.",
    "You need more than code—you need product thinking, architecture, IP and patent strategy.",
    "You want structured accountability with milestones, not a loose co-founder arrangement.",
  ];

  const notFor = [
    "You need someone to run the technical side of the company long-term as an employee.",
    "You want a 50/50 co-founder relationship with shared CEO-level decision-making.",
    "Your project is a simple app or website that doesn't need strategic architecture.",
  ];

  return (
    <>
      <Helmet>
        <title>Technical Co-Founder Alternative | Venture Studio Team for Equity | Ravolution</title>
        <meta name="description" content="Why a venture studio team can be a better alternative to a technical co-founder. Ravolution invests product, engineering and IP strategy for equity—structured, accountable and scalable." />
        <link rel="canonical" href="https://ravolution.se/en/technical-cofounder-alternative" />
        <meta property="og:title" content="Technical Co-Founder Alternative | Ravolution" />
        <meta property="og:description" content="Get a full venture studio team instead of searching for a technical co-founder. Product, engineering, IP and patent strategy—for equity." />
        <meta property="og:url" content="https://ravolution.se/en/technical-cofounder-alternative" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/technical-cofounder-alternative" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/technical-cofounder-alternative" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/technical-cofounder-alternative" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en/technical-cofounder-alternative" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

              <EditorialShell>
<section className="relative text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(210, 62%, 16%) 0%, hsl(210, 62%, 9%) 100%)' }}>
          <div className="absolute inset-0 opacity-[0.08] z-[1] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Technical Co‑Founder Alternative
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
              Finding the right technical co-founder can take months—and the wrong one can cost years. Ravolution offers a structured alternative: a full venture studio team that invests product, engineering, IP and patent strategy for equity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                <a href={lp("/angel-investor#brief-form")}>
                  <Send className="mr-2 w-5 h-5" />
                  Send Your Brief
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white" asChild>
                <a href={lp("/angel-investor")}>
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Angel Investor Page
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-dot-pattern">
          {/* The problem */}
          <section className="section-padding">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  The Co-Founder Search Problem
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    Most non-technical founders spend 6–12 months searching for a technical co-founder. Many never find the right person. The ones who do often face misaligned expectations around equity, commitment, scope and decision-making.
                  </p>
                  <p>
                    A single co-founder also creates a key-person dependency. If they leave, the company's technical foundation is at risk. And most co-founders—no matter how talented—don't bring IP strategy, patent experience or structured product methodology.
                  </p>
                  <p>
                    Ravolution's build-for-equity model solves this by providing a full team with structured accountability, milestone-based equity and integrated IP protection—without the search, the risk or the ambiguity.
                  </p>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Comparison table */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  Side-by-Side Comparison
                </h2>
                <div className="card-elevated overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 font-display font-bold text-foreground">Aspect</th>
                          <th className="text-left p-4 font-display font-bold text-muted-foreground">Technical Co-Founder</th>
                          <th className="text-left p-4 font-display font-bold text-accent">Ravolution Venture Studio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparison.map((row, i) => (
                          <tr key={i} className="border-b border-border/50 last:border-0">
                            <td className="p-4 font-medium text-foreground">{row.aspect}</td>
                            <td className="p-4 text-muted-foreground">{row.cofounder}</td>
                            <td className="p-4 text-foreground">{row.ravolution}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* Ideal for / Not for */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10">
                <ScrollAnimateWrapper>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    This Model Is Ideal When…
                  </h2>
                  <div className="space-y-4">
                    {idealFor.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <p className="text-muted-foreground text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </ScrollAnimateWrapper>

                <ScrollAnimateWrapper delay={0.1}>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    This Model Is Not For…
                  </h2>
                  <div className="space-y-4">
                    {notFor.map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <XCircle className="w-5 h-5 text-muted-foreground/50 mt-0.5 shrink-0" />
                        <p className="text-muted-foreground text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </ScrollAnimateWrapper>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="section-padding pt-0">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimateWrapper>
                <div className="card-elevated p-8 bg-gradient-to-br from-card to-secondary">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">Related Pages</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <a href={lp("/angel-investor")} className="text-accent hover:text-accent-light underline font-medium">Angel Investor & Build-for-Equity</a>
                    <a href={lp("/build-for-equity")} className="text-accent hover:text-accent-light underline font-medium">How Build-for-Equity Works</a>
                    <a href={lp("/patent-strategy-for-startups")} className="text-accent hover:text-accent-light underline font-medium">Patent Strategy for Startups</a>
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

export default TechnicalCofounderAlternative;
