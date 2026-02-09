import { Shield, BarChart3, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyRavolution = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("whyRavolution.patentFirst"),
      description: t("whyRavolution.patentFirstDesc"),
      color: "gold",
    },
    {
      icon: BarChart3,
      title: t("whyRavolution.scalable"),
      description: t("whyRavolution.scalableDesc"),
      color: "accent",
    },
    {
      icon: Globe,
      title: t("whyRavolution.globalImpact"),
      description: t("whyRavolution.globalImpactDesc"),
      color: "primary",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("whyRavolution.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("whyRavolution.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = {
              gold: "bg-gold/10 text-gold",
              accent: "bg-accent/10 text-accent",
              primary: "bg-primary/10 text-primary",
            };

            return (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colorClasses[feature.color as keyof typeof colorClasses]} mb-6 transition-transform group-hover:scale-110`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRavolution;
