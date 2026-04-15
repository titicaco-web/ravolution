import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Monitor, Palette, Brain, Shield, Settings, Workflow,
  ArrowRight, CheckCircle2, Zap, Target, Users,
  MessageCircle, Briefcase, Clock, Handshake, DollarSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const { t } = useLanguage();
  const lp = useLangPath();

  const services = [
    {
      icon: Monitor,
      title: t("services.platformDev"),
      outcome: t("services.platformDevOutcome"),
      deliverables: [t("services.platformDevD1"), t("services.platformDevD2"), t("services.platformDevD3")],
      idealFor: t("services.platformDevIdeal"),
    },
    {
      icon: Palette,
      title: t("services.productDesign"),
      outcome: t("services.productDesignOutcome"),
      deliverables: [t("services.productDesignD1"), t("services.productDesignD2"), t("services.productDesignD3")],
      idealFor: t("services.productDesignIdeal"),
    },
    {
      icon: Brain,
      title: t("services.aiSystems"),
      outcome: t("services.aiSystemsOutcome"),
      deliverables: [t("services.aiSystemsD1"), t("services.aiSystemsD2"), t("services.aiSystemsD3")],
      idealFor: t("services.aiSystemsIdeal"),
    },
    {
      icon: Shield,
      title: t("services.ipPatent"),
      outcome: t("services.ipPatentOutcome"),
      deliverables: [t("services.ipPatentD1"), t("services.ipPatentD2"), t("services.ipPatentD3")],
      idealFor: t("services.ipPatentIdeal"),
    },
    {
      icon: Settings,
      title: t("services.maintenance"),
      outcome: t("services.maintenanceOutcome"),
      deliverables: [t("services.maintenanceD1"), t("services.maintenanceD2"), t("services.maintenanceD3")],
      idealFor: t("services.maintenanceIdeal"),
    },
  ];

  const processSteps = [
    { icon: Target, label: t("services.step1"), description: t("services.step1Desc") },
    { icon: Zap, label: t("services.step2"), description: t("services.step2Desc") },
    { icon: Users, label: t("services.step3"), description: t("services.step3Desc") },
    { icon: Workflow, label: t("services.step4"), description: t("services.step4Desc") },
  ];

  const engagementModels = [
    {
      icon: Briefcase,
      title: t("services.projectBased"),
      price: t("services.projectBasedPrice"),
      description: t("services.projectBasedDesc"),
      duration: t("services.projectBasedDuration"),
    },
    {
      icon: Handshake,
      title: t("services.equityPartnership"),
      price: t("services.equityPartnershipPrice"),
      description: t("services.equityPartnershipDesc"),
      duration: t("services.equityPartnershipDuration"),
    },
    {
      icon: Clock,
      title: t("services.retainer"),
      price: t("services.retainerPrice"),
      description: t("services.retainerDesc"),
      duration: t("services.retainerDuration"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("services.title")} | Ravolution AB</title>
        <meta name="description" content={t("services.subtitle")} />
        <link rel="canonical" href="https://ravolution.se/services" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">
              {t("services.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("services.title")} <span className="text-gradient-gold">{t("services.titleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              {t("services.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                <Link to={lp("/brief")}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to={lp("/configure")}>
                  {t("intake.configurePlatform")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-xs text-muted-foreground italic border-t border-border pt-4">
                    <span className="font-semibold text-foreground/70 not-italic">{t("services.idealFor")}</span> {service.idealFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="py-12 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("services.ctaTitle")}</h2>
            <p className="text-white/70 mb-6">{t("services.ctaDescription")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                <Link to={lp("/brief")}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                  {t("services.ctaBook")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              {t("services.howWeWork")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

            {/* CTA after How We Work */}
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to={lp("/brief")}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              {t("services.engagementModels")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {engagementModels.map((model, index) => (
                <div key={index} className="card-elevated text-center p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <model.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{model.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{model.price}</p>
                  <p className="text-sm text-muted-foreground mb-3">{model.description}</p>
                  <span className="text-xs text-muted-foreground italic">{model.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.ctaTitle")}</h2>
            <p className="text-white/70 mb-8 text-lg">{t("services.ctaDescription")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                <Link to={lp("/brief")}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to={lp("/configure")}>
                  {t("intake.configurePlatform")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                  {t("services.ctaBook")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
