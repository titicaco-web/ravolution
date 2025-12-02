import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, Gift, Music, CheckCircle, ExternalLink } from "lucide-react";

const verticals = [
  {
    id: "communicaring-school",
    icon: GraduationCap,
    title: "CommunicaringSchool™",
    badge: "FLAGSHIP",
    badgeColor: "bg-primary",
    description: "UN-compliant global education platform enabling cross-national student benchmarking and curriculum equivalency.",
    highlights: [
      "9 Patents | 116 Claims",
      "54 UNCRC Articles Compliance",
      "Global Position Index (GEPI)",
      "20+ Curricula Support",
      "Real-time Global Comparison",
      "Child Rights Verification System"
    ],
    marketSize: "$850B Global EdTech",
    targetAudience: "Governments, UN Agencies, International Schools",
    link: "https://communicaringschool.com/patents",
    linkText: "View Patent Portfolio",
    featured: true,
  },
  {
    id: "voice-protector",
    icon: Shield,
    title: "VoiceProtector™",
    badge: "SECURITY",
    badgeColor: "bg-destructive",
    description: "Biometric voice authentication and anti-deepfake verification for secure transactions and identity protection.",
    highlights: [
      "Voice Biometrics Authentication",
      "Deepfake Detection",
      "Real-time Verification",
      "Multi-language Support",
      "Financial Services Grade",
      "Government Ready"
    ],
    marketSize: "$27B Voice Security",
    targetAudience: "Banks, Governments, Insurance, Healthcare",
    link: "#",
    linkText: "Patent Portfolio (Coming Soon)",
    featured: false,
  },
  {
    id: "givin",
    icon: Gift,
    title: "Givin™",
    badge: "GIFTING",
    badgeColor: "bg-accent",
    description: "LinkedIn-integrated digital gifting platform connecting professionals with curated experiences and social impact.",
    highlights: [
      "LinkedIn Integration",
      "Curated Gift Experiences",
      "Social Impact Tracking",
      "Corporate Gifting",
      "B2B2C Platform",
      "ESG Compliance"
    ],
    marketSize: "$175B Corporate Gifting",
    targetAudience: "Corporations, Marketing Teams, LinkedIn Users",
    link: "#",
    linkText: "Patent Portfolio (Coming Soon)",
    featured: false,
  },
  {
    id: "rhythmdna",
    icon: Music,
    title: "RythmDNA™",
    badge: "MUSIC",
    badgeColor: "bg-gold",
    description: "Spotify music fan engagement platform with proprietary recommendation and discovery algorithms.",
    highlights: [
      "AI Music Discovery",
      "Fan Engagement",
      "Artist Connection",
      "Playlist Generation",
      "Spotify Integration",
      "Streaming Analytics"
    ],
    marketSize: "$16B Music Tech",
    targetAudience: "Artists, Spotify, Music Platforms, Fans",
    link: "#",
    linkText: "Patent Portfolio (Coming Soon)",
    featured: false,
  },
];

const Verticals = () => {
  return (
    <>
      <Helmet>
        <title>Ravolution AB Patent Verticals | Global Innovation Platform</title>
        <meta name="description" content="Explore Ravolution's strategic patent verticals: CommunicaringSchool (EdTech), VoiceProtector (Security), Givin (Gifting), RythmDNA (Music). License-first innovation model." />
        <meta name="keywords" content="patents, education technology, voice security, digital gifting, music discovery, patent licensing, Ravolution" />
        <meta property="og:title" content="Ravolution AB - Patent Innovation Platform" />
        <meta property="og:description" content="4 Patent Verticals | 20+ Patents | $2.3T+ Market Addressable" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Header */}
        <header className="gradient-hero text-primary-foreground pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ravolution™ Patent Verticals
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Strategic innovation across high-value markets. Each vertical is patent-protected, scalable, and built for enterprise partnerships.
            </p>
          </div>
        </header>

        {/* Verticals Grid */}
        <section className="section-padding bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {verticals.map((vertical) => {
                const IconComponent = vertical.icon;
                return (
                  <div
                    key={vertical.id}
                    className={`rounded-2xl p-8 transition-all duration-300 ${
                      vertical.featured
                        ? "lg:col-span-2 gradient-hero text-primary-foreground shadow-elevated"
                        : "bg-card border border-border shadow-card hover:shadow-elevated"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${vertical.featured ? "bg-white/20" : "bg-primary/10"}`}>
                        <IconComponent className={`w-8 h-8 ${vertical.featured ? "text-white" : "text-primary"}`} />
                      </div>
                      <div>
                        <h2 className={`text-2xl font-display font-bold mb-2 ${vertical.featured ? "text-white" : "text-foreground"}`}>
                          {vertical.title}
                        </h2>
                        <span className={`${vertical.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                          {vertical.badge}
                        </span>
                      </div>
                    </div>

                    <p className={`mb-6 ${vertical.featured ? "text-white/90" : "text-muted-foreground"}`}>
                      {vertical.description}
                    </p>

                    <div className={`grid sm:grid-cols-2 gap-4 p-4 rounded-xl mb-6 ${vertical.featured ? "bg-white/10" : "bg-muted"}`}>
                      <div className="text-center">
                        <p className={`text-sm font-medium mb-1 ${vertical.featured ? "text-white/70" : "text-muted-foreground"}`}>
                          Market Size
                        </p>
                        <p className={`text-lg font-bold ${vertical.featured ? "text-white" : "text-foreground"}`}>
                          {vertical.marketSize}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className={`text-sm font-medium mb-1 ${vertical.featured ? "text-white/70" : "text-muted-foreground"}`}>
                          Target Audience
                        </p>
                        <p className={`text-sm font-semibold ${vertical.featured ? "text-white" : "text-foreground"}`}>
                          {vertical.targetAudience}
                        </p>
                      </div>
                    </div>

                    <h4 className={`text-sm font-semibold mb-3 ${vertical.featured ? "text-white/80" : "text-muted-foreground"}`}>
                      Key Features & Patents
                    </h4>
                    <ul className={`grid sm:grid-cols-2 gap-2 mb-6`}>
                      {vertical.highlights.map((highlight) => (
                        <li key={highlight} className={`flex items-center gap-2 text-sm ${vertical.featured ? "text-white/90" : "text-muted-foreground"}`}>
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 ${vertical.featured ? "text-accent-light" : "text-accent"}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={vertical.featured ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary-light"}
                      asChild
                    >
                      <a href={vertical.link} target={vertical.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {vertical.linkText}
                        {vertical.link.startsWith("http") && <ExternalLink className="w-4 h-4 ml-2" />}
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="gradient-hero text-primary-foreground section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to License or Partner?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Connect with Ravolution AB to explore licensing opportunities, strategic partnerships, or pilot programs across any patent vertical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="mailto:partnerships@ravolution.se?subject=Patent%20Vertical%20Partnership">
                  Explore Partnership
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="https://communicaringschool.com/patents" target="_blank" rel="noopener noreferrer">
                  View CommunicaringSchool Patents
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

export default Verticals;
