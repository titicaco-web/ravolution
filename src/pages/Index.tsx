import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import PatentPortfolios from "@/components/PatentPortfolios";
import FeaturedProducts from "@/components/FeaturedProducts";
import MarketplaceConcepts from "@/components/MarketplaceConcepts";
import WhyRavolution from "@/components/WhyRavolution";
import InvestorTeaser from "@/components/InvestorTeaser";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ravolution AB | Solving Civilization-Scale Challenges with Patented Deep Tech</title>
        <meta name="description" content="From accelerating language learning by 24x to democratizing K1-K9 education. We build and protect the technologies that level the playing field for the global economy." />
        <meta name="keywords" content="deep tech, patent portfolio, language learning, education technology, 24x faster learning, K1-K9 education, voice biometrics, AI language learning, global trade infrastructure, strategic IP" />
        <link rel="canonical" href="https://ravolution.se/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ravolution AB | Solving Civilization-Scale Challenges with Patented Deep Tech" />
        <meta property="og:description" content="From accelerating language learning by 24x to democratizing K1-K9 education. We build and protect the technologies that level the playing field for the global economy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ravolution AB | Solving Civilization-Scale Challenges with Patented Deep Tech" />
        <meta name="twitter:description" content="From accelerating language learning by 24x to democratizing K1-K9 education. We build and protect the technologies that level the playing field for the global economy." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
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
          <InvestorTeaser />
        </ScrollAnimateWrapper>
        <ScrollAnimateWrapper delay={0.1}>
          <FooterCTA />
        </ScrollAnimateWrapper>
        <Footer />
      </div>
    </>
  );
};

export default Index;
