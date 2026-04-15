import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Briefcase,
  CheckCircle2,
  Layers,
  Monitor,
  Palette,
  Settings,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import CredentialCounter from "@/components/services/CredentialCounter";
import PlatformShowcase from "@/components/services/PlatformShowcase";
import MiniCaseStudies from "@/components/services/MiniCaseStudies";
import HowWeWorkTimeline from "@/components/services/HowWeWorkTimeline";
import TechStackStrip from "@/components/services/TechStackStrip";
import FounderBlock from "@/components/services/FounderBlock";
import ExpandedFAQ from "@/components/services/ExpandedFAQ";

const ServicesPage = () => {
  const { t } = useLanguage();
  const lp = useLangPath();
  const briefHref = lp("/brief");

  const engagementModels = [
    {
      icon: Briefcase,
      title: t("servicesPage.fixedScopeTitle"),
      description: t("servicesPage.fixedScopeDesc"),
      duration: t("servicesPage.fixedScopeDuration"),
    },
    {
      icon: Layers,
      title: t("servicesPage.buildPhaseTitle"),
      description: t("servicesPage.buildPhaseDesc"),
      duration: t("servicesPage.buildPhaseDuration"),
    },
    {
      icon: Settings,
      title: t("servicesPage.retainerTitle"),
      description: t("servicesPage.retainerDesc"),
      duration: t("servicesPage.retainerDuration"),
    },
  ];

  const services = [
    {
      icon: Monitor,
      title: t("servicesPage.service1Title"),
      tagline: t("servicesPage.service1Tagline"),
      description: t("servicesPage.service1Desc"),
      whoFor: t("servicesPage.service1WhoFor"),
      deliverables: [
        t("servicesPage.service1D1"),
        t("servicesPage.service1D2"),
        t("servicesPage.service1D3"),
        t("servicesPage.service1D4"),
        t("servicesPage.service1D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service1UC1Problem"),
          approach: t("servicesPage.service1UC1Approach"),
          outcome: t("servicesPage.service1UC1Outcome"),
        },
        {
          problem: t("servicesPage.service1UC2Problem"),
          approach: t("servicesPage.service1UC2Approach"),
          outcome: t("servicesPage.service1UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service1FAQ1Q"), a: t("servicesPage.service1FAQ1A") },
        { q: t("servicesPage.service1FAQ2Q"), a: t("servicesPage.service1FAQ2A") },
        { q: t("servicesPage.service1FAQ3Q"), a: t("servicesPage.service1FAQ3A") },
        { q: t("servicesPage.service1FAQ4Q"), a: t("servicesPage.service1FAQ4A") },
      ],
    },
    {
      icon: Palette,
      title: t("servicesPage.service2Title"),
      tagline: t("servicesPage.service2Tagline"),
      description: t("servicesPage.service2Desc"),
      whoFor: t("servicesPage.service2WhoFor"),
      deliverables: [
        t("servicesPage.service2D1"),
        t("servicesPage.service2D2"),
        t("servicesPage.service2D3"),
        t("servicesPage.service2D4"),
        t("servicesPage.service2D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service2UC1Problem"),
          approach: t("servicesPage.service2UC1Approach"),
          outcome: t("servicesPage.service2UC1Outcome"),
        },
        {
          problem: t("servicesPage.service2UC2Problem"),
          approach: t("servicesPage.service2UC2Approach"),
          outcome: t("servicesPage.service2UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service2FAQ1Q"), a: t("servicesPage.service2FAQ1A") },
        { q: t("servicesPage.service2FAQ2Q"), a: t("servicesPage.service2FAQ2A") },
        { q: t("servicesPage.service2FAQ3Q"), a: t("servicesPage.service2FAQ3A") },
      ],
    },
    {
      icon: Brain,
      title: t("servicesPage.service3Title"),
      tagline: t("servicesPage.service3Tagline"),
      description: t("servicesPage.service3Desc"),
      whoFor: t("servicesPage.service3WhoFor"),
      deliverables: [
        t("servicesPage.service3D1"),
        t("servicesPage.service3D2"),
        t("servicesPage.service3D3"),
        t("servicesPage.service3D4"),
        t("servicesPage.service3D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service3UC1Problem"),
          approach: t("servicesPage.service3UC1Approach"),
          outcome: t("servicesPage.service3UC1Outcome"),
        },
        {
          problem: t("servicesPage.service3UC2Problem"),
          approach: t("servicesPage.service3UC2Approach"),
          outcome: t("servicesPage.service3UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service3FAQ1Q"), a: t("servicesPage.service3FAQ1A") },
        { q: t("servicesPage.service3FAQ2Q"), a: t("servicesPage.service3FAQ2A") },
        { q: t("servicesPage.service3FAQ3Q"), a: t("servicesPage.service3FAQ3A") },
      ],
    },
    {
      icon: ShieldCheck,
      title: t("servicesPage.service4Title"),
      tagline: t("servicesPage.service4Tagline"),
      description: t("servicesPage.service4Desc"),
      whoFor: t("servicesPage.service4WhoFor"),
      deliverables: [
        t("servicesPage.service4D1"),
        t("servicesPage.service4D2"),
        t("servicesPage.service4D3"),
        t("servicesPage.service4D4"),
        t("servicesPage.service4D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service4UC1Problem"),
          approach: t("servicesPage.service4UC1Approach"),
          outcome: t("servicesPage.service4UC1Outcome"),
        },
        {
          problem: t("servicesPage.service4UC2Problem"),
          approach: t("servicesPage.service4UC2Approach"),
          outcome: t("servicesPage.service4UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service4FAQ1Q"), a: t("servicesPage.service4FAQ1A") },
        { q: t("servicesPage.service4FAQ2Q"), a: t("servicesPage.service4FAQ2A") },
        { q: t("servicesPage.service4FAQ3Q"), a: t("servicesPage.service4FAQ3A") },
      ],
    },
    {
      icon: Settings,
      title: t("servicesPage.service5Title"),
      tagline: t("servicesPage.service5Tagline"),
      description: t("servicesPage.service5Desc"),
      whoFor: t("servicesPage.service5WhoFor"),
      deliverables: [
        t("servicesPage.service5D1"),
        t("servicesPage.service5D2"),
        t("servicesPage.service5D3"),
        t("servicesPage.service5D4"),
        t("servicesPage.service5D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service5UC1Problem"),
          approach: t("servicesPage.service5UC1Approach"),
          outcome: t("servicesPage.service5UC1Outcome"),
        },
        {
          problem: t("servicesPage.service5UC2Problem"),
          approach: t("servicesPage.service5UC2Approach"),
          outcome: t("servicesPage.service5UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service5FAQ1Q"), a: t("servicesPage.service5FAQ1A") },
        { q: t("servicesPage.service5FAQ2Q"), a: t("servicesPage.service5FAQ2A") },
        { q: t("servicesPage.service5FAQ3Q"), a: t("servicesPage.service5FAQ3A") },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("servicesPage.services")} | Ravolution AB</title>
        <meta name="description" content={t("servicesPage.heroSubtitle")} />
        <link rel="canonical" href={`https://ravolution.se${lp("/services")}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ✅ Hero — untouched */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground overflow-hidden">
          {/* White Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">
              {t("intake.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("intake.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              {t("intake.heroSubtitle")}
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
              <Link to={briefHref}>
                {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            {/* Trust bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-primary-foreground/70 text-sm">
              {[
                { icon: Zap, label: t("intake.trust1") },
                { icon: ShieldCheck, label: t("intake.trust2") },
                { icon: Workflow, label: t("intake.trust3") },
                { icon: Target, label: t("intake.trust4") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-accent-light" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🆕 Section 1 — Credential Counter */}
        <CredentialCounter />

        {/* 🆕 Section 2 — Platform Showcase */}
        <PlatformShowcase />

        {/* 🆕 Section 3 — Mini Case Studies */}
        <MiniCaseStudies />

        {/* ✅ Engagement Models — untouched */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              {t("servicesPage.engagementModels")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model) => (
                <div key={model.title} className="card-elevated text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <model.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{model.title}</h3>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <span className="inline-flex items-center rounded-full bg-accent/15 text-foreground px-3 py-1 text-sm font-medium">
                    {model.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Service detail sections — untouched */}
        {services.map((service, index) => (
          <section
            key={service.title}
            className={`py-20 px-6 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 max-w-4xl">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{service.title}</h2>
                <p className="text-lg text-primary font-medium mb-4">{service.tagline}</p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{service.description}</p>
              </div>

              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                <div className="space-y-6">
                  <div className="card-elevated">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t("servicesPage.whatsIncluded")}</h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-elevated">
                    <h3 className="text-xl font-bold text-foreground mb-3">{t("servicesPage.whoFor")}</h3>
                    <p className="text-muted-foreground">{service.whoFor}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="card-elevated">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t("servicesPage.useCases")}</h3>
                    <div className="space-y-4">
                      {service.useCases.map((item, caseIndex) => (
                        <div key={`${service.title}-${caseIndex}`} className="rounded-2xl border border-border bg-background p-5">
                          <p className="text-sm text-foreground mb-2"><span className="font-semibold">{t("servicesPage.problem")}</span> {item.problem}</p>
                          <p className="text-sm text-foreground mb-2"><span className="font-semibold">{t("servicesPage.approach")}</span> {item.approach}</p>
                          <p className="text-sm text-foreground"><span className="font-semibold">{t("servicesPage.outcome")}</span> {item.outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-elevated">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t("servicesPage.faq")}</h3>
                    <div className="space-y-3">
                      {service.faqs.map((faq) => (
                        <details key={faq.q} className="group rounded-2xl border border-border bg-background px-5 py-4">
                          <summary className="cursor-pointer list-none font-semibold text-foreground flex items-center justify-between gap-3">
                            <span>{faq.q}</span>
                            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                          </summary>
                          <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {(index === 1 || index === 3) && (
                <div className="mt-10 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to={briefHref}>
                      {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* 🆕 Section 4 — How We Work Timeline */}
        <HowWeWorkTimeline />

        {/* 🆕 Section 5 — Tech Stack Strip */}
        <TechStackStrip />

        {/* 🆕 Section 6 — Founder Authority */}
        <FounderBlock />

        {/* ✅ Submit Brief CTA — untouched */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("intake.submitBrief")}</h2>
              <p className="text-muted-foreground mb-6">{t("intake.briefSubtitle")}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to={briefHref}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 🆕 Section 7 — Expanded FAQ */}
        <ExpandedFAQ />

        {/* ✅ Footer CTA — untouched */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("servicesPage.bottomCtaTitle")}</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">{t("servicesPage.bottomCtaDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                <Link to={briefHref}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                  {t("servicesPage.bottomCtaBook")}
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
