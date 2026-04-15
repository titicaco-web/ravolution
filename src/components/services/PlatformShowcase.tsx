import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const platforms = [
  {
    tag: "Recruitment SaaS",
    tagColor: "bg-primary/20 text-primary",
    title: "iApply™ — Transparent Recruiting Platform",
    description: "Patent-protected multi-role recruitment platform with AI-powered matching, autonomous references, and real-time recruiter transparency.",
    stat: "Patent-protected · $924B TAM",
    link: "https://iapply.se",
  },
  {
    tag: "EdTech",
    tagColor: "bg-purple-500/20 text-purple-400",
    title: "Rosetta Livingstone™ — Language Learning Revolution",
    description: "Multimodal language acquisition across 34 languages with real-time vocational calibration. 34× faster than traditional methods.",
    stat: "34 languages · €585B TAM",
    link: "#",
  },
  {
    tag: "Trade & B2B",
    tagColor: "bg-accent/20 text-accent",
    title: "xPortMatch™ — Export-Import Intelligence",
    description: "AI-powered B2B trade matching across 150+ countries targeting 180,500 Nordic SMEs with automated compliance workflows.",
    stat: "150+ countries · 180K+ SME targets",
    link: "https://xportmatch.com",
  },
  {
    tag: "Education",
    tagColor: "bg-blue-500/20 text-blue-400",
    title: "CommunicaringSchool™ — UN-Aligned Global Education",
    description: "9 patented technologies enabling cross-national student benchmarking, curriculum equivalency, and rights-based learning.",
    stat: "9 patents · 116 claims",
    link: "https://communicaringschool.com",
  },
  {
    tag: "Sustainability",
    tagColor: "bg-green-500/20 text-green-400",
    title: "Carbon Trading Platform",
    description: "Digital marketplace for verified carbon credits with Gold Standard and Verra compliance baked into every transaction.",
    stat: "Compliance-first architecture",
    link: "https://carbonx.se",
  },
  {
    tag: "Fashion Tech",
    tagColor: "bg-pink-500/20 text-pink-400",
    title: "AI Video Virtual Try-On",
    description: "Temporal fabric physics simulation with multi-body-type personalization and predictive sizing. Reduces returns 15–50%.",
    stat: "15–50% return reduction",
    link: "#",
  },
];

const PlatformShowcase = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Platforms We've Built</h2>
          <p className="text-muted-foreground text-lg">Real products. Live users. Defensible IP.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((p, i) => (
            <PlatformCard key={p.title} platform={p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformCard = ({ platform, delay }: { platform: typeof platforms[0]; delay: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${platform.tagColor}`}>
        {platform.tag}
      </span>
      <h3 className="text-lg font-bold text-foreground mb-2">{platform.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{platform.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-primary">{platform.stat}</span>
        {platform.link !== "#" && (
          <a
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            View Platform <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PlatformShowcase;
