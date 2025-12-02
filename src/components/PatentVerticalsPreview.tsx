import { GraduationCap, Shield, Gift, Music, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const verticals = [
  {
    id: "communicaring-school",
    icon: GraduationCap,
    title: "CommunicaringSchool™",
    badge: "FLAGSHIP VERTICAL",
    description: "UN-compliant global education platform with 9 patented technologies enabling cross-national student benchmarking, curriculum equivalency, and rights-based learning.",
    features: [
      "9 Patents | 116 Claims",
      "54 UNCRC Articles Compliance",
      "Global Position Index (GEPI)",
      "20+ Curricula Support"
    ],
    link: "https://communicaringschool.com/patents",
    featured: true,
  },
  {
    id: "voice-protector",
    icon: Shield,
    title: "VoiceProtector™",
    description: "Biometric voice authentication and anti-deepfake verification for financial services, government, and enterprise security.",
    comingSoon: true,
  },
  {
    id: "givin",
    icon: Gift,
    title: "Givin™",
    description: "LinkedIn-integrated digital gifting platform connecting professionals with curated gift experiences and social impact.",
    comingSoon: true,
  },
  {
    id: "rhythmdna",
    icon: Music,
    title: "RythmDNA™",
    description: "Spotify music fan engagement and artist discovery platform with proprietary recommendation algorithms.",
    comingSoon: true,
  },
];

const PatentVerticalsPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary to-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold">Strategic Innovation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Patent Verticals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ravolution AB develops high-value patents protecting innovative solutions across strategic market verticals. Each vertical is patent-protected and built for licensing partnerships with governments, enterprises, and UN agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical) => {
            const IconComponent = vertical.icon;
            
            if (vertical.featured) {
              return (
                <div
                  key={vertical.id}
                  className="lg:col-span-2 lg:row-span-2 gradient-hero text-primary-foreground rounded-2xl p-8 shadow-elevated flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-white/20">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {vertical.title}
                      </h3>
                      <span className="bg-gold text-gold-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {vertical.badge}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-white/90 mb-6 flex-grow">
                    {vertical.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {vertical.features?.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/90">
                        <CheckCircle className="w-4 h-4 text-accent-light flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="bg-white text-primary hover:bg-white/90 w-fit" asChild>
                    <a href={vertical.link} target="_blank" rel="noopener noreferrer">
                      Explore Patents <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              );
            }

            return (
              <div
                key={vertical.id}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 flex flex-col"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {vertical.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {vertical.description}
                </p>
                {vertical.comingSoon && (
                  <p className="text-sm italic text-muted-foreground/70">
                    Coming Soon: Patent Portfolio
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-light" asChild>
            <Link to="/verticals">
              View All Patent Verticals
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatentVerticalsPreview;
