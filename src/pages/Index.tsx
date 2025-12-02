import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import PatentVerticalsPreview from "@/components/PatentVerticalsPreview";
import PatentPortfolios from "@/components/PatentPortfolios";
import FeaturedProducts from "@/components/FeaturedProducts";
import MarketplaceConcepts from "@/components/MarketplaceConcepts";
import WhyRavolution from "@/components/WhyRavolution";
import InvestorTeaser from "@/components/InvestorTeaser";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <PatentVerticalsPreview />
      <PatentPortfolios />
      <FeaturedProducts />
      <MarketplaceConcepts />
      <WhyRavolution />
      <InvestorTeaser />
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
