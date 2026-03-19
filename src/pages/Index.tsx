import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import PatentPortfolios from "@/components/PatentPortfolios";
import FeaturedProducts from "@/components/FeaturedProducts";
import MarketplaceConcepts from "@/components/MarketplaceConcepts";
import WhyRavolution from "@/components/WhyRavolution";
import Services from "@/components/Services";
import AngelInvestorTeaser from "@/components/AngelInvestorTeaser";
import InvestorTeaser from "@/components/InvestorTeaser";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ravolution AB | Swedish Venture Studio & Angel Investor | Build‑for‑Equity for Startups</title>
        <meta name="description" content="27 patents, 343 claims. Swedish venture studio building deep tech unicorns in language learning (24x faster), voice security, AI trade infrastructure & K1-K9 education. Founded by Ivan Daza, inventor of high-value patents foundational to billion-dollar markets." />
        <meta name="keywords" content="venture studio, deep tech, patent portfolio, Swedish innovation, language learning AI, voice biometrics, education technology, 24x faster learning, K1-K9 education, global trade AI, strategic IP, Ivan Daza, unicorn startups, billion-dollar markets" />
        <link rel="canonical" href="https://ravolution.se/" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en" />
        <meta name="google-site-verification" content="fZ5wqD3QL629AjpMRpzKfj4z6mrxJXjraVGIHx1HjwU" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ravolution AB | Swedish Venture Studio & IP Innovation Company" />
        <meta property="og:description" content="27 patents, 343 claims. Building deep tech unicorns in language learning, voice security, AI trade & education. Founded by Ivan Daza, inventor of high-value patents foundational to billion-dollar markets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ravolution AB | Swedish Venture Studio & IP Innovation Company" />
        <meta name="twitter:description" content="27 patents, 343 claims. Building deep tech unicorns in language learning, voice security, AI trade & education. Founded by Ivan Daza, inventor of high-value patents foundational to billion-dollar markets." />

        {/* Organization structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://ravolution.se/#organization",
          "name": "Ravolution AB",
          "legalName": "Ravolution AB",
          "url": "https://ravolution.se/",
          "logo": "https://ravolution.se/favicon.png",
          "description": "Swedish venture studio and IP innovation company. 27 patents, 343 claims. Building defensible platforms in language learning, voice security, AI trade infrastructure and K1-K9 education.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "ivan.daza@ravolution.se",
            "contactType": "business inquiries"
          },
          "sameAs": []
        })}</script>
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <div className="bg-dot-pattern">
          <ScrollAnimateWrapper>
            <ValueProposition />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <PatentPortfolios />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <FeaturedProducts />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <MarketplaceConcepts />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <WhyRavolution />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <Services />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <AngelInvestorTeaser />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <InvestorTeaser />
          </ScrollAnimateWrapper>
          <ScrollAnimateWrapper delay={0.1}>
            <FooterCTA />
          </ScrollAnimateWrapper>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
