import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/i18n/LanguageContext";

const PlatformShowcase = () => {
  const { t } = useLanguage();

  const platforms = [
    {
      tag: t("platformShowcase.tag1"),
      tagColor: "bg-primary/20 text-primary",
      title: t("platformShowcase.title1"),
      description: t("platformShowcase.desc1"),
      stat: t("platformShowcase.stat1"),
      link: "https://iapply.se",
    },
    {
      tag: t("platformShowcase.tag2"),
      tagColor: "bg-purple-500/20 text-purple-400",
      title: t("platformShowcase.title2"),
      description: t("platformShowcase.desc2"),
      stat: t("platformShowcase.stat2"),
      link: "#",
    },
    {
      tag: t("platformShowcase.tag3"),
      tagColor: "bg-accent/20 text-accent",
      title: t("platformShowcase.title3"),
      description: t("platformShowcase.desc3"),
      stat: t("platformShowcase.stat3"),
      link: "https://xportmatch.com",
    },
    {
      tag: t("platformShowcase.tag4"),
      tagColor: "bg-blue-500/20 text-blue-400",
      title: t("platformShowcase.title4"),
      description: t("platformShowcase.desc4"),
      stat: t("platformShowcase.stat4"),
      link: "https://communicaringschool.com",
    },
    {
      tag: t("platformShowcase.tag5"),
      tagColor: "bg-green-500/20 text-green-400",
      title: t("platformShowcase.title5"),
      description: t("platformShowcase.desc5"),
      stat: t("platformShowcase.stat5"),
      link: "https://carbonx.se",
    },
    {
      tag: t("platformShowcase.tag6"),
      tagColor: "bg-pink-500/20 text-pink-400",
      title: t("platformShowcase.title6"),
      description: t("platformShowcase.desc6"),
      stat: t("platformShowcase.stat6"),
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t("platformShowcase.heading")}</h2>
          <p className="text-muted-foreground text-lg">{t("platformShowcase.subheading")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((p, i) => (
            <PlatformCard key={p.title} platform={p} delay={i * 0.1} viewLabel={t("platformShowcase.viewPlatform")} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformCard = ({ platform, delay, viewLabel }: { platform: { tag: string; tagColor: string; title: string; description: string; stat: string; link: string }; delay: number; viewLabel: string }) => {
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
            {viewLabel} <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PlatformShowcase;
