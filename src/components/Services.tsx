import { Monitor, Palette, Brain, Shield, Settings, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Platform Development",
    description: "Tailored CRM, partner portals, marketplaces, trade platforms, process tools, and automation aligned with your business logic.",
    highlights: ["Custom CRM & portals", "Marketplace architecture", "Process automation"],
  },
  {
    icon: Palette,
    title: "Product + Design",
    description: "From concept to production-ready solution with strong usability and real-world implementation focus.",
    highlights: ["UX/UI design", "Rapid prototyping", "Production-ready delivery"],
  },
  {
    icon: Brain,
    title: "AI-Enabled Systems",
    description: "AI where it creates measurable value—qualification flows, summarization, structured decision support, and content operations.",
    highlights: ["Decision support", "Content operations", "Qualification flows"],
  },
  {
    icon: Shield,
    title: "IP & Patent Strategy",
    description: "Support with patent strategy and patent applications to protect key methods and systems—making your innovation defensible.",
    highlights: ["Patent applications", "IP strategy", "Defensible innovation"],
  },
  {
    icon: Settings,
    title: "Ongoing Operations & Evolution",
    description: "Continuous management, optimization, and development so your platform keeps delivering over time.",
    highlights: ["Platform management", "Performance optimization", "Feature evolution"],
  },
];

const outcomes = [
  "Specialized platforms that fit your processes—not generic templates.",
  "Clear, scalable workflows and data structures that make complex operations measurable.",
  "Structured digital workflows to support cross-border trade and partner-driven go-to-market.",
  "An IP plan that connects product differentiation with defensibility and long-term advantage.",
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We turn complex organizational and market challenges into clear processes, practical tools, and scalable digital platforms—combined with IP and patent support to protect what you build.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-feature group relative overflow-hidden ${
                index >= 3 ? "lg:col-span-1 md:col-span-1" : ""
              }`}
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Outcomes + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Outcomes */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              What You Get
            </h3>
            <ul className="space-y-5">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-gold">{index + 1}</span>
                  </div>
                  <p className="text-foreground/85 leading-relaxed">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-10 text-primary-foreground overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-3">
                  Let's Talk
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Build Something Defensible?
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Book a 30-minute consultation to explore how we can turn your challenge into a scalable, patent-protected platform.
                </p>
                <a
                  href="https://meetings-eu1.hubspot.com/daza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
