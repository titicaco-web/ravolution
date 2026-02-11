import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformBuilder from "@/components/PlatformBuilder";
import { ArrowRight, CheckCircle2, Target, Zap, Users, Workflow, Rocket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
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

        {/* How We Work */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">How we work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Target, label: "Discovery", desc: "Map challenge, define scope & success criteria." },
                { icon: Zap, label: "Architecture", desc: "Design scalable system architecture & data model." },
                { icon: Users, label: "Build", desc: "Rapid development with milestone-based delivery." },
                { icon: Rocket, label: "Launch", desc: "Go live, gather feedback, measure impact." },
                { icon: Workflow, label: "Iterate", desc: "Continuous improvement with dedicated support." },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative">
                    <step.icon className="w-5 h-5 text-primary" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-gold-foreground text-xs font-bold flex items-center justify-center">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{step.label}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Builder */}
        <section className="py-20 px-6 bg-background">
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

        {/* Proof + Portfolio */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            {/* 3 bullets */}
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

            {/* Portfolio tiles */}
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

        {/* Bottom CTA */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something defensible</h2>
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
