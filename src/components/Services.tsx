import { Monitor, Palette, Brain, Shield, Settings, Workflow, ArrowRight, CheckCircle2, Zap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Monitor,
      title: t("services.platformDev"),
      outcome: t("services.platformDevOutcome"),
      deliverables: [t("services.platformDevD1"), t("services.platformDevD2"), t("services.platformDevD3")],
      idealFor: t("services.platformDevIdeal"),
      slug: "platform-development",
    },
    {
      icon: Palette,
      title: t("services.productDesign"),
      outcome: t("services.productDesignOutcome"),
      deliverables: [t("services.productDesignD1"), t("services.productDesignD2"), t("services.productDesignD3")],
      idealFor: t("services.productDesignIdeal"),
      slug: "product-design",
    },
    {
      icon: Brain,
      title: t("services.aiSystems"),
      outcome: t("services.aiSystemsOutcome"),
      deliverables: [t("services.aiSystemsD1"), t("services.aiSystemsD2"), t("services.aiSystemsD3")],
      idealFor: t("services.aiSystemsIdeal"),
      slug: "ai-systems",
    },
    {
      icon: Shield,
      title: t("services.ipPatent"),
      outcome: t("services.ipPatentOutcome"),
      deliverables: [t("services.ipPatentD1"), t("services.ipPatentD2"), t("services.ipPatentD3")],
      idealFor: t("services.ipPatentIdeal"),
      slug: "patent-ip",
    },
    {
      icon: Settings,
      title: t("services.maintenance"),
      outcome: t("services.maintenanceOutcome"),
      deliverables: [t("services.maintenanceD1"), t("services.maintenanceD2"), t("services.maintenanceD3")],
      idealFor: t("services.maintenanceIdeal"),
      slug: "ongoing-operations",
    },
  ];

  const processSteps = [
    { icon: Target, label: t("services.step1"), description: t("services.step1Desc") },
    { icon: Zap, label: t("services.step2"), description: t("services.step2Desc") },
    { icon: Users, label: t("services.step3"), description: t("services.step3Desc") },
    { icon: Workflow, label: t("services.step4"), description: t("services.step4Desc") },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("services.title")} <span className="text-gradient-gold">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-feature group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>
              <p className="text-foreground font-medium mb-4 leading-relaxed">{service.outcome}</p>
              <ul className="space-y-2 mb-4 flex-grow">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic mb-5 border-t border-border pt-4">
                <span className="font-semibold text-foreground/70 not-italic">{t("services.idealFor")}</span> {service.idealFor}
              </p>
              <Link
                to={`/services#${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                {t("services.learnMore")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* How We Work */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            {t("services.howWeWork")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                  <step.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold text-gold-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{step.label}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
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
                {t("services.ctaBadge")}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t("services.ctaTitle")}</h3>
              <p className="text-white/70 mb-8 leading-relaxed max-w-xl mx-auto">{t("services.ctaDescription")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://meetings-eu1.hubspot.com/daza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t("services.ctaBook")}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  {t("services.ctaExplore")}
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
