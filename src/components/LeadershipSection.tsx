import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin } from "lucide-react";
import ivanPhoto from "@/assets/ivan-daza.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const LeadershipSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            {t("founder.leadershipTitle")}
          </h2>
          <p className="text-muted-foreground">{t("founder.leadershipSubtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Ivan */}
          <Card className="bg-card border-border hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-primary/20 bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={ivanPhoto}
                      alt="Ivan Daza"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-2 border-gold text-gold">
                    {t("founder.badge")}
                  </Badge>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                    {t("founder.name")}
                  </h3>
                  <p className="text-primary font-medium mb-2">{t("founder.ivanCardTitle")}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full mb-3">
                    <MapPin className="w-3 h-3" />
                    {t("founder.ivanCardLocation")}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t("founder.ivanCardBio")}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href="https://www.linkedin.com/in/ivandaza/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="mailto:ivan.daza@ravolution.se">
                        <Mail className="w-4 h-4 mr-1" />
                        ivan.daza@ravolution.se
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
