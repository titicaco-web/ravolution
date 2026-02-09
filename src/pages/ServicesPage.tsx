import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Monitor, Palette, Brain, Shield, Settings, ArrowRight, CheckCircle2, Target, Zap, Users, Workflow } from "lucide-react";

const serviceDetails = [
  {
    slug: "platform-development",
    icon: Monitor,
    title: "Platform Development for Complex Workflows",
    tagline: "Custom CRM, partner portals, marketplaces, and process tools built around your business logic.",
    description: "We design and build tailored digital platforms that replace fragmented tools and manual processes with unified, scalable systems. Whether you need a partner portal, trade marketplace, or internal operations platform—we architect it to fit your workflows, not the other way around.",
    whoFor: "Enterprises, scale-ups, and organizations with complex multi-stakeholder workflows that off-the-shelf tools can't handle.",
    deliverables: ["Custom CRM & partner portals", "Marketplace architecture & development", "Workflow automation & process tools", "API integrations & data pipelines", "Role-based access & permission systems"],
    useCases: [
      { problem: "Scattered spreadsheets and siloed tools for partner management.", approach: "Unified partner portal with real-time dashboards.", outcome: "50% reduction in coordination overhead." },
      { problem: "Manual cross-border trade documentation.", approach: "Automated trade platform with compliance workflows.", outcome: "3x faster order processing." },
    ],
    faq: [
      { q: "How long does a typical platform build take?", a: "Discovery sprint takes 2-3 weeks. MVP delivery in 8-12 weeks depending on complexity." },
      { q: "Do you build on specific frameworks?", a: "We select the best stack for each project—React, Node.js, Python, cloud-native—based on requirements." },
      { q: "Can you integrate with our existing systems?", a: "Yes. API-first architecture means we connect to ERPs, CRMs, and legacy systems." },
      { q: "Do you handle hosting and infrastructure?", a: "Yes, we can manage the full stack including CI/CD, monitoring, and scaling." },
    ],
  },
  {
    slug: "product-design",
    icon: Palette,
    title: "Product + UX Design That Ships",
    tagline: "From concept to production-ready product—with strong usability and real-world focus.",
    description: "We combine product strategy, UX research, and visual design into a streamlined process. The result: products that solve real problems, look polished, and launch on time. No design-for-design's-sake—every pixel serves a purpose.",
    whoFor: "Teams launching new digital products, redesigning legacy tools, or validating new ideas quickly.",
    deliverables: ["UX research & user journey mapping", "Interface design & design systems", "Interactive prototyping & validation", "Production-ready front-end implementation", "Usability testing & iteration"],
    useCases: [
      { problem: "Low adoption of an internal tool due to poor UX.", approach: "User research, redesigned interface, and phased rollout.", outcome: "85% increase in daily active users." },
      { problem: "Need to validate a new B2B SaaS concept.", approach: "Design sprint with clickable prototype in 2 weeks.", outcome: "Secured pilot customers before writing production code." },
    ],
    faq: [
      { q: "Do you only do design, or also development?", a: "Both. We deliver production-ready front-ends, not just mockups." },
      { q: "What tools do you use?", a: "Figma for design, React/TypeScript for implementation, and real-user testing." },
      { q: "Can you work with our existing design system?", a: "Absolutely. We extend and improve existing systems or build new ones." },
    ],
  },
  {
    slug: "ai-systems",
    icon: Brain,
    title: "AI-Enabled Systems for Operations",
    tagline: "AI where it creates measurable value—qualification, summarization, and decision support.",
    description: "We implement AI systems that automate repetitive decisions, extract structured data, and generate actionable insights. No science experiments—every AI integration is tied to a measurable business outcome and validated before scale.",
    whoFor: "Operations-heavy organizations looking to reduce manual work and improve decision speed.",
    deliverables: ["Decision support & scoring systems", "Document summarization & extraction", "Qualification flows & lead routing", "Content generation pipelines", "Custom model fine-tuning & prompt engineering"],
    useCases: [
      { problem: "Analysts spending 20+ hours/week on report summarization.", approach: "AI pipeline for automated extraction and summary generation.", outcome: "90% time reduction, analysts focus on insights." },
      { problem: "Inconsistent lead qualification across sales teams.", approach: "AI-driven scoring model integrated into CRM.", outcome: "35% improvement in conversion rate." },
    ],
    faq: [
      { q: "Do you build custom models or use existing ones?", a: "We use the best tool for the job—fine-tuned models, LLMs, or traditional ML depending on the use case." },
      { q: "How do you ensure AI accuracy?", a: "Rigorous testing with your real data, human-in-the-loop validation, and ongoing monitoring." },
      { q: "What about data privacy?", a: "We design systems with privacy-first architecture and can deploy on-premise if required." },
    ],
  },
  {
    slug: "patent-ip",
    icon: Shield,
    title: "IP & Patent Strategy for Defensible Innovation",
    tagline: "Protect your methods and systems—turn innovation into lasting competitive advantage.",
    description: "We help founders and technical leaders identify patentable inventions within their products, develop filing strategies, and build IP portfolios that create real business value. With 27 patents and 343 claims of our own, we understand what makes IP commercially powerful.",
    whoFor: "Founders, CTOs, and innovation teams with novel methods or systems worth protecting.",
    deliverables: ["Patent landscape & freedom-to-operate analysis", "Invention disclosure & claim drafting", "Filing strategy & prosecution support", "IP monetization & licensing frameworks", "Portfolio management & valuation"],
    useCases: [
      { problem: "SaaS company with a unique algorithm but no IP protection.", approach: "Patent landscape analysis, 3 provisional filings in 6 weeks.", outcome: "Defensible IP portfolio that increased valuation 40%." },
      { problem: "Enterprise needing to license technology to partners.", approach: "Licensing framework, rate card, and standard agreements.", outcome: "New revenue stream from existing IP." },
    ],
    faq: [
      { q: "Do you handle patent prosecution?", a: "We support the full process and work with specialized patent attorneys for formal prosecution." },
      { q: "Is it worth patenting software methods?", a: "Yes—when claims are drafted correctly, software patents provide strong competitive moats." },
      { q: "How much does a patent portfolio cost?", a: "Varies widely. We help prioritize filings to maximize value per dollar spent." },
    ],
  },
  {
    slug: "ongoing-operations",
    icon: Settings,
    title: "Ongoing Platform Evolution & Support",
    tagline: "Continuous management, optimization, and development so your platform keeps delivering.",
    description: "Launch is just the beginning. We provide ongoing technical operations, performance monitoring, feature iteration, and strategic roadmap execution. Your platform evolves with your business—without the overhead of building an in-house team.",
    whoFor: "Companies with live platforms that need continuous improvement without hiring a full engineering team.",
    deliverables: ["24/7 monitoring & incident response", "Performance optimization & scaling", "Feature development & roadmap execution", "Security updates & compliance", "Analytics & growth experimentation"],
    useCases: [
      { problem: "Platform performance degrading as user base grows.", approach: "Infrastructure audit, caching strategy, and database optimization.", outcome: "Response times reduced by 70%, supporting 10x traffic." },
      { problem: "Feature requests piling up with no development capacity.", approach: "Dedicated sprint team delivering bi-weekly releases.", outcome: "Cleared 6-month backlog in 3 months." },
    ],
    faq: [
      { q: "What's the minimum engagement?", a: "We offer monthly retainers starting from a few days per month." },
      { q: "Can you take over a platform built by another team?", a: "Yes. We audit, stabilize, and then iterate." },
      { q: "Do you provide SLAs?", a: "Yes—response time and uptime SLAs are part of every retainer agreement." },
    ],
  },
];

const engagementModels = [
  { title: "Fixed-Scope Sprint", description: "Defined deliverables, timeline, and budget. Ideal for MVPs, prototypes, and well-scoped modules.", duration: "4–12 weeks" },
  { title: "Build Phase", description: "Full platform development with milestones and iterative delivery. For complex, multi-module projects.", duration: "3–9 months" },
  { title: "Retainer / Ongoing", description: "Continuous development, support, and platform evolution. Scales up or down as needed.", duration: "Monthly" },
];

const processSteps = [
  { icon: Target, label: "Discovery Sprint", description: "Map your challenge, define scope & success criteria." },
  { icon: Zap, label: "Build MVP / Module", description: "Rapid development of your first working solution." },
  { icon: Users, label: "Launch & Validate", description: "Go live, gather feedback, measure impact." },
  { icon: Workflow, label: "Iterate & Support", description: "Continuous improvement with dedicated support." },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | Ravolution AB – Tech Development & IP Innovation</title>
        <meta name="description" content="Custom platform development, AI-enabled systems, product design, patent strategy, and ongoing operations. Ravolution AB builds defensible digital platforms for enterprises and scale-ups." />
        <link rel="canonical" href="https://ravolution.se/services" />
        <meta property="og:title" content="Services | Ravolution AB – Tech Development & IP Innovation" />
        <meta property="og:description" content="Custom platform development, AI systems, product design, patent strategy, and ongoing operations. We build defensible platforms." />
        <meta property="og:url" content="https://ravolution.se/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ravolution AB",
          url: "https://ravolution.se",
          description: "Swedish Venture Studio & IP Innovation Company. 27 patents, 343 claims. Building defensible platforms.",
          areaServed: "Global",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Tech Development & IP Innovation Services",
            itemListElement: serviceDetails.map((s, i) => ({
              "@type": "Service",
              position: i + 1,
              name: s.title,
              description: s.tagline,
              provider: { "@type": "Organization", name: "Ravolution AB" },
              areaServed: "Global",
              url: `https://ravolution.se/services#${s.slug}`,
            })),
          },
        })}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tech Development & <span className="text-gradient-gold">IP Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              We build tailored platforms that operationalize growth—combined with patent & IP support to make the innovation defensible. From discovery to ongoing evolution.
            </p>
            <a
              href="https://meetings-eu1.hubspot.com/daza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">How We Work</h2>
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
        <section className="py-20 px-6 bg-background">
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
                  <span className="font-semibold">Who it's for:</span> {service.whoFor}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Deliverables */}
                  <div className="card-elevated">
                    <h3 className="font-bold text-foreground mb-4">What's Included</h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-foreground mb-2">Use Cases</h3>
                    {service.useCases.map((uc, i) => (
                      <div key={i} className="card-elevated !p-4">
                        <p className="text-sm font-medium text-foreground mb-1">Problem: <span className="font-normal text-muted-foreground">{uc.problem}</span></p>
                        <p className="text-sm font-medium text-foreground mb-1">Approach: <span className="font-normal text-muted-foreground">{uc.approach}</span></p>
                        <p className="text-sm font-medium text-accent">Outcome: {uc.outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <details className="group">
                  <summary className="cursor-pointer font-bold text-foreground flex items-center gap-2 mb-4 select-none">
                    <span>Frequently Asked Questions</span>
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

                {/* Internal links */}
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
                        See also: {related.title.split(" for")[0].split(" –")[0]}
                      </a>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Engagement Models</h2>
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

        {/* Bottom CTA */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Defensible</h2>
            <p className="text-white/70 mb-8 text-lg">
              30-minute discovery call. No obligations. Just a conversation about what you're building and how we can help.
            </p>
            <a
              href="https://meetings-eu1.hubspot.com/daza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Discovery Call <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
