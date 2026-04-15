import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformBuilder from "@/components/PlatformBuilder";
import { ArrowRight, CheckCircle2, Target, Zap, Users, Workflow, Rocket, ExternalLink, Monitor, Palette, Brain, Shield, Settings, Clock, Layers, Lock, BarChart3, Globe, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";

const serviceIcons = [Monitor, Palette, Brain, Shield, Settings];
const serviceSlugs = ["platform-development", "product-design", "ai-systems", "patent-ip", "ongoing-operations"];

const globalFaqs = [
  {
    q: "How fast can you start?",
    a: "We can kick off a discovery sprint within 48 hours of signing. Most projects have a concrete proposal within 3–5 business days.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We audit, stabilize, and then iterate. We've taken over codebases from agencies, freelancers, and in-house teams.",
  },
  {
    q: "Do you do discovery workshops?",
    a: "Every engagement starts with a structured discovery sprint—stakeholder interviews, technical audit, user journey mapping, and scope definition.",
  },
  {
    q: "Do you deliver fixed price or time & materials?",
    a: "Both. Fixed-scope sprints for well-defined modules, time & materials for ongoing development. We recommend the model that fits your risk profile.",
  },
  {
    q: "Do you build with no-code + custom code?",
    a: "We use low-code tools where they accelerate delivery (admin panels, dashboards) but build custom where it matters—core logic, integrations, and anything that needs to scale.",
  },
  {
    q: "What tech stack do you use?",
    a: "React, TypeScript, Node.js, Python, and cloud-native infrastructure. We select the best stack for each project based on requirements, not dogma.",
  },
  {
    q: "Do you handle design, QA, and DevOps?",
    a: "Yes—end-to-end. Product strategy, UX/UI design, development, QA, CI/CD, monitoring, and post-launch support. No handoffs to third parties.",
  },
  {
    q: "What industries do you serve?",
    a: "Education, recruitment, international trade, SaaS, and marketplace verticals. We've built 10+ platforms across these sectors.",
  },
];

const ServicesPage = () => {
  const { t } = useLanguage();
  const lp = useLangPath();
  const sp = (key: string) => t(`servicesPage.${key}`);

  const serviceDetails = [1, 2, 3, 4, 5].map((n) => ({
    slug: serviceSlugs[n - 1],
    icon: serviceIcons[n - 1],
    title: sp(`service${n}Title`) as string,
    tagline: sp(`service${n}Tagline`) as string,
    description: sp(`service${n}Desc`) as string,
    whoFor: sp(`service${n}WhoFor`) as string,
    deliverables: [1, 2, 3, 4, 5].map((d) => sp(`service${n}D${d}`) as string),
    useCases: [1, 2].map((u) => ({
      problem: sp(`service${n}UC${u}Problem`) as string,
      approach: sp(`service${n}UC${u}Approach`) as string,
      outcome: sp(`service${n}UC${u}Outcome`) as string,
    })),
    faq: (() => {
      const faqs = [];
      for (let f = 1; f <= 4; f++) {
        const q = sp(`service${n}FAQ${f}Q`);
        const a = sp(`service${n}FAQ${f}A`);
        if (q && typeof q === 'string' && q !== `servicesPage.service${n}FAQ${f}Q`) {
          faqs.push({ q: q as string, a: a as string });
        }
      }
      return faqs;
    })(),
  }));

  const processSteps = [
    { icon: Target, label: sp("step1") as string, description: sp("step1Desc") as string },
    { icon: Zap, label: sp("step2") as string, description: sp("step2Desc") as string },
    { icon: Users, label: sp("step3") as string, description: sp("step3Desc") as string },
    { icon: Workflow, label: sp("step4") as string, description: sp("step4Desc") as string },
  ];

  const engagementModels = [
    { title: sp("fixedScopeTitle") as string, description: sp("fixedScopeDesc") as string, duration: sp("fixedScopeDuration") as string },
    { title: sp("buildPhaseTitle") as string, description: sp("buildPhaseDesc") as string, duration: sp("buildPhaseDuration") as string },
    { title: sp("retainerTitle") as string, description: sp("retainerDesc") as string, duration: sp("retainerDuration") as string },
  ];

  // JSON-LD structured data
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ravolution AB",
    url: "https://ravolution.se",
    logo: "https://ravolution.se/og-image.png",
    description: "Swedish venture studio and IP innovation company building industry-grade platforms.",
    foundingDate: "2006",
    founder: { "@type": "Person", name: "Ivan Daza" },
    sameAs: ["https://www.linkedin.com/company/ravolution"],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "End-to-End Platform Development",
    provider: { "@type": "Organization", name: "Ravolution AB", url: "https://ravolution.se" },
    description: "Discovery to launch in weeks. We build complex, industry-grade platforms fast—architecture, design, dev, AI, integrations, and scaling.",
    areaServed: "Worldwide",
    serviceType: "Platform Development",
    offers: {
      "@type": "Offer",
      description: "Fixed-scope sprints from 4 weeks, build phases 3–9 months, or monthly retainers.",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: globalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>End-to-End Platform Development Partner | Ravolution</title>
        <meta name="description" content="Discovery to launch in weeks. We build complex, industry-grade platforms fast—architecture, design, dev, AI, integrations, and scaling." />
        <link rel="canonical" href="https://ravolution.se/services" />
        <meta property="og:title" content="End-to-End Platform Development Partner | Ravolution" />
        <meta property="og:description" content="Discovery to launch in weeks. We build complex, industry-grade platforms fast—architecture, design, dev, AI, integrations, and scaling." />
        <meta property="og:url" content="https://ravolution.se/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ravolution.se/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="End-to-End Platform Development Partner | Ravolution" />
        <meta name="twitter:description" content="Discovery to launch in weeks. We build complex, industry-grade platforms fast—architecture, design, dev, AI, integrations, and scaling." />
        <meta name="twitter:image" content="https://ravolution.se/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLdOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdService)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">Venture Studio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              End-to-End Platform Development—<span className="text-gradient-gold">Fast.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              We understand complex needs by listening first—then we architect, build, and launch in short notice with venture‑studio execution.
            </p>

            {/* 3-bullet value prop */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10 text-white/90">
              {[
                { icon: Target, label: "Listen deeply" },
                { icon: Zap, label: "Architect quickly" },
                { icon: Rocket, label: "Ship reliably" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium">
                  <item.icon className="w-5 h-5 text-accent-light" />
                  <span>{item.label}</span>
                  {i < 2 && <ArrowRight className="w-4 h-4 text-white/40 hidden sm:block ml-2" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-white" asChild>
                <a href="#builder">
                  Configure my platform <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                  Book discovery call
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Facts (AI / LLM scannable block) */}
        <section className="py-12 px-6 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6">Services at a glance</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              {[
                { dt: "What we are", dd: "Venture studio + end-to-end delivery partner." },
                { dt: "What we build", dd: "Complex web platforms—dashboards, marketplaces, LMS, CRM, AI features." },
                { dt: "How fast", dd: "Discovery in 48 h, proposal in 3–5 days, MVP in 4–8 weeks." },
                { dt: "Who it's for", dd: "Founders, SMEs, innovation teams, and enterprises." },
                { dt: "What's included", dd: "Product, UX, architecture, backend, frontend, integrations, QA, launch." },
                { dt: "IP advantage", dd: "27 patents, 343 claims—we build platforms that are defensible." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <dt className="font-semibold text-foreground">{item.dt}</dt>
                  <dd className="text-muted-foreground">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Proof + Portfolio */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Venture-studio build discipline", desc: "Proven delivery methodology from building 10+ platforms across education, trade, recruitment, and SaaS." },
                { title: "Defensible IP mindset", desc: "27 patents, 343 claims—we know how to build platforms that are legally protected and commercially powerful." },
                { title: "End-to-end delivery", desc: "From discovery to launch to ongoing evolution. No handoffs, no gaps." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-foreground text-center mb-6">Examples from our portfolio</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "iApply™", desc: "Transparent recruiting platform", url: "https://iapply.se" },
                { name: "CommunicaringSchool", desc: "UN-aligned global education", url: "https://communicaringschool.com" },
                { name: "Rosetta Livingstone™", desc: "AI language learning (34x faster)", url: "https://rosettalivingstone.com" },
                { name: "xPortMatch", desc: "B2B export-import connector", url: "https://xportmatch.com" },
                { name: "NewsToast", desc: "Curated news digest platform", url: "https://newstoast.com" },
                { name: "CarbonX", desc: "Carbon offset marketplace", url: "https://carbonx.se" },
                { name: "Autos Zofri", desc: "Vehicle marketplace & exports", url: "https://autos-zofri.com" },
                { name: "Titicaco", desc: "Latin American e-commerce", url: "https://titicaco.com" },
              ].map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated group hover:border-primary/30 transition-all text-center p-4"
                >
                  <h4 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{project.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{project.desc}</p>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors mx-auto" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Fast */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">What makes us fast</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Layers, title: "Reusable modules", desc: "Battle-tested auth, dashboards, payments, and CRM components from 10+ platform builds." },
                { icon: Brain, title: "Senior architecture first", desc: "Principal engineers scope and architect before any code is written—no rework." },
                { icon: Gauge, title: "Weekly releases", desc: "CI/CD pipelines with automated testing. You see progress every week, not every quarter." },
                { icon: Target, title: "Tight scope control", desc: "Discovery sprints define what matters. We cut scope creep, not corners." },
              ].map((item, i) => (
                <div key={i} className="card-elevated text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complexity We Handle */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Complexity we handle</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Roles & permissions (RBAC)",
                "Multi-tenant architecture",
                "Payment integrations",
                "Third-party API integrations",
                "GDPR & compliance",
                "Audit logs & traceability",
                "Real-time dashboards",
                "Multi-language (i18n)",
                "AI/ML pipelines",
                "SSO & 2FA",
                "File storage & CDN",
                "Workflow automation",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work (original 4-step) */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{sp("howWeWork")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                    <step.icon className="w-6 h-6 text-primary" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold text-gold-foreground text-xs font-bold flex items-center justify-center">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.label}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto space-y-24">
            {serviceDetails.map((service, index) => (
              <article key={index} id={service.slug} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-accent font-medium">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">{service.description}</p>

                <p className="text-sm text-foreground/70 mb-8">
                  <span className="font-semibold">{sp("whoFor")}</span> {service.whoFor}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="card-elevated">
                    <h3 className="font-bold text-foreground mb-4">{sp("whatsIncluded")}</h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-foreground mb-2">{sp("useCases")}</h3>
                    {service.useCases.map((uc, i) => (
                      <div key={i} className="card-elevated !p-4">
                        <p className="text-sm font-medium text-foreground mb-1">{sp("problem")} <span className="font-normal text-muted-foreground">{uc.problem}</span></p>
                        <p className="text-sm font-medium text-foreground mb-1">{sp("approach")} <span className="font-normal text-muted-foreground">{uc.approach}</span></p>
                        <p className="text-sm font-medium text-accent">{sp("outcome")} {uc.outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <details className="group">
                  <summary className="cursor-pointer font-bold text-foreground flex items-center gap-2 mb-4 select-none">
                    <span>{sp("faq")}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="space-y-4 pl-2 border-l-2 border-accent/30">
                    {service.faq.map((item, i) => (
                      <div key={i}>
                        <p className="font-medium text-foreground text-sm">{item.q}</p>
                        <p className="text-sm text-muted-foreground">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </details>

                <div className="mt-6 flex flex-wrap gap-3">
                  {serviceDetails
                    .filter((_, i) => i !== index)
                    .slice(0, 2)
                    .map((related) => (
                      <a
                        key={related.slug}
                        href={`#${related.slug}`}
                        className="text-sm text-primary hover:text-accent transition-colors underline underline-offset-2"
                      >
                        {sp("seeAlso")} {related.title.split(" for")[0].split(" –")[0]}
                      </a>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{sp("engagementModels")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model, index) => (
                <div key={index} className="card-elevated text-center">
                  <h3 className="font-bold text-foreground text-lg mb-2">{model.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent">{model.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global FAQ */}
        <section id="faq" className="py-16 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {globalFaqs.map((faq, i) => (
                <details key={i} className="group card-elevated !p-0 overflow-hidden">
                  <summary className="cursor-pointer font-semibold text-foreground text-sm flex items-center justify-between px-5 py-4 select-none hover:bg-secondary/50 transition-colors">
                    <span>{faq.q}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Builder */}
        <section id="builder" className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Configure your platform</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pick the components you need and get an instant scope estimate. Submit your spec or jump straight to a discovery call.
              </p>
            </div>
            <PlatformBuilder />
          </div>
        </section>

        {/* Bottom CTA */}
        {/* Angel Investor Cross-Link */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="card-elevated p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">Looking for an angel investor who builds?</h3>
                <p className="text-muted-foreground">We can invest by building your platform end‑to‑end and protecting your IP—in return for equity.</p>
              </div>
              <a href={lp("/angel-investor")} className="btn-accent whitespace-nowrap inline-flex items-center gap-2">
                Angel Investor &amp; Build‑for‑Equity <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{sp("bottomCtaTitle")}</h2>
            <p className="text-white/70 mb-8 text-lg">
              {sp("bottomCtaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ivan.daza@ravolution.se"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
              >
                {sp("bottomCtaBook")} <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#builder"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Configure my platform <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
