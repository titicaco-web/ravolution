import { Monitor, Palette, Brain, Shield, Settings, Workflow, ArrowRight, CheckCircle2, Zap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Platform Development",
    outcome: "A production-ready platform that fits your workflows—not a template.",
    deliverables: ["Custom CRM, portals & marketplaces", "Workflow automation & process tools", "API integrations & data pipelines"],
    idealFor: "Enterprises needing complex operational platforms.",
    slug: "platform-development",
  },
  {
    icon: Palette,
    title: "Product + Design",
    outcome: "Ship faster with a product users actually love.",
    deliverables: ["UX research & interface design", "Rapid prototyping & validation", "Production-ready front-end delivery"],
    idealFor: "Teams launching new digital products or redesigning existing ones.",
    slug: "product-design",
  },
  {
    icon: Brain,
    title: "AI-Enabled Systems",
    outcome: "Measurable efficiency gains from AI—not buzzwords.",
    deliverables: ["Decision support & qualification flows", "Content operations & summarization", "Structured data extraction & analysis"],
    idealFor: "Operations-heavy organizations looking to automate intelligently.",
    slug: "ai-systems",
  },
  {
    icon: Shield,
    title: "IP & Patent Strategy",
    outcome: "Your innovation becomes legally defensible and commercially valuable.",
    deliverables: ["Patent landscape analysis", "Application drafting & filing support", "Monetization & licensing strategy"],
    idealFor: "Founders and CTOs with novel methods or systems worth protecting.",
    slug: "patent-ip",
  },
  {
    icon: Settings,
    title: "Maintenance: Ongoing Platform Evolution & Support",
    outcome: "Your platform keeps delivering—month after month.",
    deliverables: ["Performance monitoring & optimization", "Feature iteration & roadmap execution", "Scalability planning & infrastructure"],
    idealFor: "Companies with live platforms that need continuous evolution.",
    slug: "ongoing-operations",
  },
];

const processSteps = [
  { icon: Target, label: "Discovery Sprint", description: "Map your challenge, define scope & success criteria." },
  { icon: Zap, label: "Build MVP / Module", description: "Rapid development of your first working solution." },
  { icon: Users, label: "Launch & Validate", description: "Go live, gather feedback, measure impact." },
  { icon: Workflow, label: "Iterate & Support", description: "Continuous improvement with dedicated support." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-header">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tech Development & <span className="text-gradient-gold">IP Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We build tailored platforms that operationalize growth—combined with patent & IP support to make the innovation defensible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-feature group relative overflow-hidden flex flex-col"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>

              {/* Outcome */}
              <p className="text-foreground font-medium mb-4 leading-relaxed">
                {service.outcome}
              </p>

              {/* Deliverables */}
              <ul className="space-y-2 mb-4 flex-grow">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <p className="text-xs text-muted-foreground italic mb-5 border-t border-border pt-4">
                <span className="font-semibold text-foreground/70 not-italic">Ideal for:</span> {service.idealFor}
              </p>

              {/* CTA */}
              <Link
                to={`/services#${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* How We Work Strip */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            How We Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center p-6">
                {/* Step number */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                  <step.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{step.label}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {/* Connector line (hidden on last) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary rounded-2xl p-10 text-primary-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-3">
                Let's Talk
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something Defensible?
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">
                Book a 30-minute discovery call to explore how we can turn your challenge into a scalable, patent-protected platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://meetings-eu1.hubspot.com/daza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
