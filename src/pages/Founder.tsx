import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Globe, 
  Lightbulb, 
  Users, 
  Award, 
  TrendingUp, 
  Heart, 
  BookOpen,
  Mountain,
  ExternalLink,
  Linkedin,
  Mail,
  ArrowRight
} from "lucide-react";
import ivanPhoto from "@/assets/ivan-daza.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ravolution.se/#ivan-daza",
  "name": "Ivan Daza",
  "jobTitle": "Super Inventor & Founder",
  "description": "Super Inventor transforming education and language learning through patented technologies. Creator of methodologies that accelerate immigrant language acquisition 24x faster and democratize quality K1-K9 education globally.",
  "url": "https://ravolution.se/founder",
  "image": "https://ravolution.se/ivan-daza.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/ivandaza/",
    "https://patents.google.com/?inventor=Ivan+Daza"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Ravolution AB",
    "url": "https://ravolution.se"
  },
  "knowsAbout": [
    "Education Technology",
    "Language Learning Innovation",
    "Voice Biometrics",
    "Artificial Intelligence",
    "Patent Strategy",
    "Immigrant Integration",
    "IP Portfolio Development"
  ],
  "award": [
    "One of 200 entrepreneurs recognized by National Museum of Economy for shaping Sweden's business landscape",
    "Gasell Company 2012 by Dagens Industri"
  ],
  "owns": [
    {
      "@type": "Patent",
      "name": "AI Language Learning Partner Technology",
      "description": "Revolutionary methodology accelerating language acquisition 24x faster than conventional approaches, enabling rapid labor market integration for immigrants."
    },
    {
      "@type": "Patent",
      "name": "Scalable K1-K9 Education Platform",
      "description": "Technology democratizing quality education across rural communities through scalable curricula that establish baseline educational parity globally."
    },
    {
      "@type": "Patent",
      "name": "Voice-Based Authentication System",
      "description": "Foundational patent for voice biometrics authentication, addressing the global cybersecurity identity market."
    }
  ]
};

const Founder = () => {
  const { t } = useLanguage();

  const expertiseAreas = [
    { icon: FileText, title: t("founder.expertise1") as string, description: t("founder.expertise1Desc") as string },
    { icon: Globe, title: t("founder.expertise2") as string, description: t("founder.expertise2Desc") as string },
    { icon: Lightbulb, title: t("founder.expertise3") as string, description: t("founder.expertise3Desc") as string },
    { icon: Users, title: t("founder.expertise4") as string, description: t("founder.expertise4Desc") as string },
  ];

  const achievements = [
    { icon: TrendingUp, title: t("founder.achievement1Title") as string, year: t("founder.achievement1Year") as string, description: t("founder.achievement1Desc") as string },
    { icon: Award, title: t("founder.achievement2Title") as string, year: t("founder.achievement2Year") as string, description: t("founder.achievement2Desc") as string },
    { icon: Heart, title: t("founder.achievement3Title") as string, year: t("founder.achievement3Year") as string, description: t("founder.achievement3Desc") as string },
    { icon: BookOpen, title: t("founder.achievement4Title") as string, year: t("founder.achievement4Year") as string, description: t("founder.achievement4Desc") as string },
    { icon: Award, title: t("founder.achievement5Title") as string, year: t("founder.achievement5Year") as string, description: t("founder.achievement5Desc") as string },
    { icon: Users, title: t("founder.achievement6Title") as string, year: t("founder.achievement6Year") as string, description: t("founder.achievement6Desc") as string },
  ];

  const portfolio = [
    { name: "Rosetta Livingstone™", description: t("founder.portfolio1Desc") as string, status: t("founder.patentPortfolio") as string },
    { name: "VoiceProtector", description: t("founder.portfolio2Desc") as string, status: t("founder.activeProduct") as string },
    { name: "xPortMatch", description: t("founder.portfolio3Desc") as string, status: t("founder.activeProduct") as string },
    { name: "CommunicaringSchool", description: t("founder.portfolio4Desc") as string, status: t("founder.inDevelopment") as string },
  ];

  const adventures = [
    "Mount Everest Base Camp",
    "Kilimanjaro Summit",
    "Huayna Potosi",
    "1000 km Ride of Hope",
    "4x Camino de Santiago (40 km daily)"
  ];

  return (
    <>
      <Helmet>
        <title>Ivan Daza | Super Inventor & Founder | Education & Language Learning Pioneer | Ravolution</title>
        <meta name="description" content="Ivan Daza is a Super Inventor transforming global education and language learning. His patented methodology accelerates immigrant language acquisition 24x faster while democratizing K1-K9 education worldwide." />
        <meta name="keywords" content="Ivan Daza, super inventor, education technology, language learning, immigrant integration, EdTech patents, Swedish entrepreneur, K1-K9 education, voice biometrics" />
        <link rel="canonical" href="https://ravolution.se/founder" />
        <meta property="og:title" content="Ivan Daza | Super Inventor | Education & Language Learning Pioneer" />
        <meta property="og:description" content="Super Inventor transforming education globally. Patented methodology accelerates language acquisition 24x faster and democratizes quality K1-K9 education across rural communities." />
        <meta property="og:url" content="https://ravolution.se/founder" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:title" content="Ivan Daza | Super Inventor | Education & Language Learning Pioneer" />
        <meta name="twitter:description" content="Super Inventor transforming education globally. Patented methodology accelerates language acquisition 24x faster and democratizes quality K1-K9 education." />
        <script type="application/ld+json">
          {JSON.stringify(founderSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-gold text-gold">
                {t("founder.badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                {t("founder.name")}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                {t("founder.role")}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t("founder.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="/#patents">
                    {t("founder.ctaPatents")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com/in/ivandaza" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    {t("founder.ctaLinkedIn")}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] max-w-xs mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <img 
                  src={ivanPhoto} 
                  alt="Ivan Daza - Founder and CEO of Ravolution" 
                  className="w-full h-full rounded-xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            {t("founder.aboutTitle")}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t("founder.aboutP1") as string }} />
            <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t("founder.aboutP2") as string }} />
            <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t("founder.aboutP3") as string }} />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
            {t("founder.expertiseTitle")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
            {t("founder.trackRecordTitle")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t("founder.trackRecordSubtitle")}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <achievement.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                        <Badge variant="secondary" className="text-xs">{achievement.year}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Mountain className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              {t("founder.visionTitle")}
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("founder.visionDescription")}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {adventures.map((adventure, index) => (
                <Badge key={index} variant="outline" className="bg-background">
                  {adventure}
                </Badge>
              ))}
            </div>
            
            <blockquote className="border-l-4 border-gold pl-6 italic text-foreground text-lg">
              {t("founder.visionQuote")}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Current Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
            {t("founder.portfolioTitle")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t("founder.portfolioSubtitle")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((product, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge 
                    variant={product.status === (t("founder.activeProduct") as string) ? "default" : "secondary"} 
                    className="mb-4"
                  >
                    {product.status}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            {t("founder.ctaTitle")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("founder.ctaDescription")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/#patents">
                <FileText className="mr-2 h-5 w-5" />
                {t("founder.ctaViewPatents")}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/#products">
                <ExternalLink className="mr-2 h-5 w-5" />
                {t("founder.ctaExploreProducts")}
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:ivan.daza@ravolution.se">
                <Mail className="mr-2 h-5 w-5" />
                {t("founder.ctaContactIvan")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12 text-center">
            {t("founder.faqTitle")}
          </h2>
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">{t("founder.faq1Q")}</h3>
              <p className="text-muted-foreground">{t("founder.faq1A")}</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">{t("founder.faq2Q")}</h3>
              <p className="text-muted-foreground">{t("founder.faq2A")}</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">{t("founder.faq3Q")}</h3>
              <p className="text-muted-foreground">{t("founder.faq3A")}</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">{t("founder.faq4Q")}</h3>
              <p className="text-muted-foreground">{t("founder.faq4A")}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Founder;
