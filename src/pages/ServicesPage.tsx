import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformBuilder from "@/components/PlatformBuilder";
import { ArrowRight, CheckCircle2, Target, Zap, Users, Workflow, Rocket, ExternalLink, Monitor, Palette, Brain, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons = [Monitor, Palette, Brain, Shield, Settings];
const serviceSlugs = ["platform-development", "product-design", "ai-systems", "patent-ip", "ongoing-operations"];

const ServicesPage = () => {
  const { t } = useLanguage();
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

  return (
    <>
      <Helmet>
        <title>Develop | Ravolution AB – Configure Your Platform</title>
        <meta name="description" content="Build an industry-grade platform fast. Select components, get a scope estimate in 60 seconds, or book a discovery call with Ravolution's venture studio." />
        <link rel="canonical" href="https://ravolution.se/services" />
        <meta property="og:title" content="Develop | Ravolution AB – Configure Your Platform" />
        <meta property="og:description" content="Select the components you need for your platform. Get a scope in 60 seconds, or book a discovery call." />
        <meta property="og:url" content="https://ravolution.se/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">Venture Studio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build an industry-grade platform—<span className="text-gradient-gold">fast.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Select the components you need. Get a scope in 60 seconds, or book a discovery call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-white" asChild>
                <a href="#builder">
                  Configure my platform <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                  Book discovery call
                </a>
              </Button>
            </div>
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
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{sp("bottomCtaTitle")}</h2>
            <p className="text-white/70 mb-8 text-lg">
              {sp("bottomCtaDesc")}
            </p>
            <a
              href="https://meetings-eu1.hubspot.com/daza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98]"
            >
              {sp("bottomCtaBook")} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
