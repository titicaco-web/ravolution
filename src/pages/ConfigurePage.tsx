import { Helmet } from "react-helmet-async";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import PlatformBuilder from "@/components/PlatformBuilder";

const ConfigurePage = () => {
  return (
    <>
      <Helmet>
        <title>Configure Your Platform | Ravolution AB</title>
        <meta name="description" content="Pick the components you need and get an instant scope estimate. Submit your spec or jump straight to a discovery call." />
      </Helmet>
      <EditorialShell>
        <section className="relative pt-40 md:pt-48 pb-20 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground overflow-hidden">
          <HeroVideoBackground />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-6">Platform Builder</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Configure Your Platform</h1>
            <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Pick the components you need and get an instant scope estimate. Submit your spec or jump straight to a discovery call.
            </p>
          </div>
        </section>
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <PlatformBuilder />
          </div>
        </section>
        </EditorialShell>
    </>
  );
};

export default ConfigurePage;
