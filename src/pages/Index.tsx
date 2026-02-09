import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import PatentPortfolios from "@/components/PatentPortfolios";
import FeaturedProducts from "@/components/FeaturedProducts";
import MarketplaceConcepts from "@/components/MarketplaceConcepts";
import WhyRavolution from "@/components/WhyRavolution";
import Services from "@/components/Services";
import InvestorTeaser from "@/components/InvestorTeaser";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ravolution AB | Swedish Venture Studio & IP Innovation Company</title>
        <meta name="description" content="27 patents, 343 claims. Swedish venture studio building deep tech unicorns in language learning (24x faster), voice security, AI trade infrastructure & K1-K9 education. Founded by Ivan Daza, inventor of high-value patents foundational to billion-dollar markets." />
        <meta name="keywords" content="venture studio, deep tech, patent portfolio, Swedish innovation, language learning AI, voice biometrics, education technology, 24x faster learning, K1-K9 education, global trade AI, strategic IP, Ivan Daza, unicorn startups, billion-dollar markets" />
        <link rel="canonical" href="https://ravolution.se/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ravolution AB | Swedish Venture Studio & IP Innovation Company" />
        <meta property="og:description" content="27 patents, 343 claims. Building deep tech unicorns in language learning, voice security, AI trade & education. Founded by Ivan Daza, inventor of high-value patents foundational to billion-dollar markets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ravolution AB | Swedish Venture Studio & IP Innovation Company" />
        <meta name="twitter:description" content="27 patents, 343 claims. Building deep tech unicorns in language learning, voice security, AI trade & education. Founded by Ivan Daza, inventor of high-value patents foundational to billion-dollar markets." />
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
