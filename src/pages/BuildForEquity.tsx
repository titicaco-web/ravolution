import { Helmet } from "react-helmet-async";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Send, Layers, Rocket, Shield } from "lucide-react";

const BuildForEquity = () => {
  const { t } = useLanguage();
  const lp = useLangPath();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ravolution.se/en/build-for-equity#webpage",
    name: "Build-for-Equity Model | How It Works | Ravolution",
    description: "Learn how Ravolution's build-for-equity model works. We invest senior product, engineering, IP and patent strategy in exchange for equity—structured for pre-seed to seed startups.",
    url: "https://ravolution.se/en/build-for-equity",
    isPartOf: { "@id": "https://ravolution.se/#organization" },
  };

  const phases = [
    { title: "Discovery & Fit Assessment", desc: "We evaluate the problem, market, team and technical complexity. If there's strategic fit, we define scope, architecture and equity structure before anything is built.", icon: Layers },
    { title: "Product Definition & Architecture", desc: "Roadmap, user flows, data models, integrations and compliance requirements are documented. IP opportunities are identified and framed early.", icon: Rocket },
    { title: "End-to-End Build", desc: "One senior team handles UX/UI, frontend, backend, integrations, QA and launch. Milestone-based checkpoints ensure alignment throughout.", icon: CheckCircle },
    { title: "IP Protection & Patent Strategy", desc: "IP audit, assignment setup, prior-art research, claim direction, drafting coordination and filing support. Defensibility is built in, not added later.", icon: Shield },
  ];

  const principles = [
    "Equity structures are defined before work begins—no ambiguity.",
    "Scope, deliverables and decision-making rights are documented upfront.",
    "IP assignment and code ownership are handled contractually from day one.",
    "We act as a co-builder, not a vendor. Strategic alignment matters.",
    "The model can be equity-only, cash-plus-equity or milestone-based vesting.",
    "We invest in the company's long-term defensibility, not just shipping code.",
  ];

  return (
    <>
      <Helmet>
        <title>Build-for-Equity Model | How It Works | Ravolution</title>
        <meta name="description" content="Learn how Ravolution's build-for-equity model works. We invest senior product, engineering, IP and patent strategy in exchange for equity—structured for pre-seed to seed startups building complex platforms." />
        <link rel="canonical" href="https://ravolution.se/en/build-for-equity" />
        <meta property="og:title" content="Build-for-Equity Model | How It Works | Ravolution" />
        <meta property="og:description" content="Understand the build-for-equity model: how a Swedish venture studio invests execution capacity for equity in complex startups." />
        <meta property="og:url" content="https://ravolution.se/en/build-for-equity" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/build-for-equity" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/build-for-equity" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/build-for-equity" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en/build-for-equity" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

              <EditorialShell>
{/* Hero */}
        <section className="relative text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(210, 62%, 16%) 0%, hsl(210, 62%, 9%) 100%)' }}>
          <div className="absolute inset-0 opacity-[0.08] z-[1] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              How Build‑for‑Equity Works
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8">
              Ravolution invests senior product strategy, software engineering, UX/UI, platform architecture, IP protection and patent strategy in exchange for equity. This page explains the model, the process and the principles behind it.
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
          {/* What is build-for-equity */}
          <section className="section-padding">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  What Is Build-for-Equity?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p>
                    Build-for-equity is a model where a venture studio invests its execution capacity—product strategy, engineering, design, QA, IP structuring and patent strategy—in exchange for equity in the startup. Instead of paying for development, the founder exchanges shares for a full-stack build team.
                  </p>
                  <p>
                    At Ravolution, this means you work with one senior team that handles everything from discovery and architecture to launch, IP protection and patent filing support. We don't just write code—we help define what to build, how to protect it and how to structure the company for long-term defensibility.
                  </p>
                  <p>
                    The model is best suited for pre-seed to seed founders building complex platforms where architecture, compliance, data models and protectable methods matter from day one.
                  </p>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          {/* How the process works */}
          <section className="section-padding pt-0">
            <div className="max-w-5xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
                  The Process — From First Contact to Launch
                </h2>
              </ScrollAnimateWrapper>
              <div className="grid md:grid-cols-2 gap-6">
                {phases.map((phase, i) => (
                  <ScrollAnimateWrapper key={i} delay={i * 0.1}>
                    <div className="card-elevated p-8 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{i + 1}</div>
                        <phase.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-foreground mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{phase.desc}</p>
                    </div>
                  </ScrollAnimateWrapper>
                ))}
              </div>
            </div>
          </section>

          {/* Principles */}
          <section className="section-padding pt-0">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimateWrapper>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  Core Principles
                </h2>
                <div className="space-y-4">
                  {principles.map((p, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">{p}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimateWrapper>
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
                    <a href={lp("/patent-strategy-for-startups")} className="text-accent hover:text-accent-light underline font-medium">Patent Strategy for Startups</a>
                    <a href={lp("/technical-cofounder-alternative")} className="text-accent hover:text-accent-light underline font-medium">Technical Co-Founder Alternative</a>
                    <a href={lp("/services")} className="text-accent hover:text-accent-light underline font-medium">Platform Development Services</a>
                    <a href={lp("/#patents")} className="text-accent hover:text-accent-light underline font-medium">Patent Portfolio</a>
                    <a href={lp("/#products")} className="text-accent hover:text-accent-light underline font-medium">Portfolio of Platforms</a>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </section>

          </div>

          </EditorialShell>
      </div>
    </>
  );
};

export default BuildForEquity;
