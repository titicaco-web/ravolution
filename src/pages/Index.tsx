import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import MarketOpportunity from "@/components/MarketOpportunity";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import FinancialOverview from "@/components/FinancialOverview";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <MarketOpportunity />
      <StrategicPartnerships />
      <FinancialOverview />
      <ContactSection />
    </div>
  );
};

export default Index;
