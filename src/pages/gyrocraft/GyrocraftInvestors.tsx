import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, Shield, Layers, Users, Calendar, Target, AlertTriangle, Rocket, DollarSign, Briefcase } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftContactForm from "@/components/gyrocraft/GyrocraftContactForm";

const GyrocraftInvestors = () => {
  const investmentThesis = [
    {
      icon: TrendingUp,
      title: "Massive TAM",
      description: "$284B cumulative market over 10 years across satellites, military, and AAM sectors",
    },
    {
      icon: Shield,
      title: "Patent Moat",
      description: "5-10 core patents, 20+ derivative patents, global protection across key markets",
    },
    {
      icon: Layers,
      title: "Asset-Light Model",
      description: "Licensing, not manufacturing = high margins with minimal capital requirements",
    },
    {
      icon: Target,
      title: "Multiple Exit Paths",
      description: "IPO @ $50-100B OR strategic acquisition $20-50B from aerospace giants",
    },
    {
      icon: Users,
      title: "Proven Management",
      description: "Expert advisors from SpaceX, Relativity Space, and aerospace industry veterans",
    },
  ];

  const useOfProceeds = [
    { label: "Prototype Validation & Flight Testing", amount: "$15M", percentage: 30 },
    { label: "Team Hiring (VP Eng, VP Sales, VP BD)", amount: "$20M", percentage: 40 },
    { label: "Patent Expansion (20-50 additional patents)", amount: "$10M", percentage: 20 },
    { label: "Legal & Working Capital", amount: "$5M", percentage: 10 },
  ];

  const timeline = [
    { quarter: "Q1 2026", milestone: "Prototype Demo" },
    { quarter: "Q2 2026", milestone: "Series A Deployment" },
    { quarter: "Q3 2026", milestone: "First LOI Signed" },
    { quarter: "Q1 2027", milestone: "First Licensing Deal ($100M+)" },
    { quarter: "2030", milestone: "Series A IRR: 50-100x" },
  ];

  const risks = [
    { risk: "Technical Risk", percentage: 30, mitigation: "Prototype validation by Q3 2026" },
    { risk: "Market Risk", percentage: 20, mitigation: "Multiple sectors (not just AAM)" },
    { risk: "Regulatory Risk", percentage: 15, mitigation: "Government partnerships early" },
  ];

  const comparables = [
    { company: "SpaceX", valuation: "$220B", description: "Reusable rockets" },
    { company: "Relativity Space", valuation: "$4.2B", description: "3D-printed rockets" },
    { company: "Archer Aviation", valuation: "$3.2B", description: "eVTOL" },
    { company: "Boom Supersonic", valuation: "$3.5B", description: "Hypersonic" },
  ];

  return (
    <>
      <Helmet>
        <title>Invest in Gyrocraft | $50M Series A - Revolutionary Aerospace Technology</title>
        <meta name="description" content="Join the $50M Series A for Gyrocraft - disrupting aerospace propulsion with a patent worth $2-5 Billion. Target IRR: 50-100x by 2030." />
      </Helmet>

      <GyrocraftNavbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gyrocraft-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gyrocraft-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gyrocraft-blue/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gyrocraft-orange/20 text-gyrocraft-orange rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-semibold">Series A Investment Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gyrocraft-text mb-6">
            Disrupting Aerospace <span className="text-gyrocraft-teal">Propulsion</span>
          </h1>
          <p className="text-2xl text-gyrocraft-text/70 mb-4">
            Gyrocraft: The Patent Worth <span className="text-gyrocraft-teal font-bold">$2.5 Billion</span>
          </p>
          <p className="text-xl text-gyrocraft-text/50 mb-8 max-w-2xl mx-auto">
            A breakthrough technology that generates thrust without propellant. 
            $284B addressable market across satellites, military drones, and flying cars.
          </p>
          <Button size="lg" className="bg-gyrocraft-orange hover:bg-gyrocraft-orange/90 text-gyrocraft-dark font-semibold px-8">
            <Download className="mr-2 w-5 h-5" />
            Download Full Investor Deck
          </Button>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            The Investment Thesis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentThesis.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="bg-gyrocraft-dark border border-gyrocraft-text/10 rounded-2xl p-6 hover:border-gyrocraft-teal/30 transition-all">
                  <div className="w-12 h-12 bg-gyrocraft-teal/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-gyrocraft-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gyrocraft-text mb-2">{item.title}</h3>
                  <p className="text-gyrocraft-text/60">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Opportunity Tabs */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Market Opportunity
          </h2>
          <Tabs defaultValue="satellite" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gyrocraft-blue/20 p-1 rounded-xl">
              <TabsTrigger value="satellite" className="data-[state=active]:bg-gyrocraft-teal data-[state=active]:text-gyrocraft-dark rounded-lg">Satellite</TabsTrigger>
              <TabsTrigger value="military" className="data-[state=active]:bg-gyrocraft-teal data-[state=active]:text-gyrocraft-dark rounded-lg">Military</TabsTrigger>
              <TabsTrigger value="aam" className="data-[state=active]:bg-gyrocraft-teal data-[state=active]:text-gyrocraft-dark rounded-lg">AAM/eVTOL</TabsTrigger>
            </TabsList>
            <TabsContent value="satellite" className="mt-8">
              <div className="bg-gyrocraft-blue/10 rounded-2xl p-8 border border-gyrocraft-blue/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gyrocraft-text mb-4">Satellite Propulsion</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gyrocraft-text/10 pb-2">
                        <span className="text-gyrocraft-text/60">Market Size 2030</span>
                        <span className="text-gyrocraft-teal font-bold text-xl">$23.2B/year</span>
                      </div>
                      <div className="flex justify-between border-b border-gyrocraft-text/10 pb-2">
                        <span className="text-gyrocraft-text/60">Gyrocraft Share (15%)</span>
                        <span className="text-gyrocraft-text font-semibold">$3.5B/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gyrocraft-text/60">Market Size 2035</span>
                        <span className="text-gyrocraft-text font-semibold">$44.0B/year</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gyrocraft-text mb-3">Why Gyrocraft Wins</h4>
                    <p className="text-gyrocraft-text/70">
                      Current satellites waste 30% of mass as propellant. Gyrocraft eliminates propellant entirely, 
                      <span className="text-gyrocraft-teal font-medium"> doubling effective satellite lifetime</span> and 
                      enabling permanent orbital capability without fuel depletion.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="military" className="mt-8">
              <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gyrocraft-text mb-4">Military Drones</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gyrocraft-text/10 pb-2">
                        <span className="text-gyrocraft-text/60">Market Size 2030</span>
                        <span className="text-red-400 font-bold text-xl">$11.3B/year</span>
                      </div>
                      <div className="flex justify-between border-b border-gyrocraft-text/10 pb-2">
                        <span className="text-gyrocraft-text/60">Gyrocraft Share (20%)</span>
                        <span className="text-gyrocraft-text font-semibold">$2.3B/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gyrocraft-text/60">Market Size 2035</span>
                        <span className="text-gyrocraft-text font-semibold">$18.2B/year</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gyrocraft-text mb-3">Why Gyrocraft Wins</h4>
                    <p className="text-gyrocraft-text/70">
                      Silent flight with <span className="text-red-400 font-medium">no exhaust signature</span> - perfect for covert operations. 
                      48-72 hour endurance without refueling (current limit: 24 hours). 
                      Ideal for HALE (High-Altitude Long-Endurance) platforms.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="aam" className="mt-8">
              <div className="bg-green-500/10 rounded-2xl p-8 border border-green-500/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gyrocraft-text mb-4">Advanced Air Mobility</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-gyrocraft-text/10 pb-2">
                        <span className="text-gyrocraft-text/60">Market Size 2030</span>
                        <span className="text-gyrocraft-text font-semibold">$6B/year (nascent)</span>
                      </div>
                      <div className="flex justify-between border-b border-gyrocraft-text/10 pb-2">
                        <span className="text-gyrocraft-text/60">Market Size 2035</span>
                        <span className="text-green-400 font-bold text-xl">$137B/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gyrocraft-text/60">Gyrocraft Share (25%)</span>
                        <span className="text-gyrocraft-text font-semibold">$34B/year by 2035</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gyrocraft-text mb-3">Why Gyrocraft Wins</h4>
                    <p className="text-gyrocraft-text/70">
                      Electric motors in eVTOLs need battery recharges every 15 min. Gyrocraft requires no fuel, no battery degradation - 
                      <span className="text-green-400 font-medium"> potentially unlimited endurance</span>. 
                      Solves the "50-mile radius" problem of current eVTOLs. Flying cars with unlimited range.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Licensing = <span className="text-gyrocraft-teal">100% Gross Margin</span>
            </h2>
            <p className="text-gyrocraft-text/60">Three revenue streams creating exceptional returns</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gyrocraft-dark rounded-2xl p-8 border border-gyrocraft-teal/20 text-center">
              <DollarSign className="w-12 h-12 text-gyrocraft-teal mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gyrocraft-text mb-2">$300M+</h3>
              <p className="text-gyrocraft-text/60">Upfront Licensing Fees</p>
              <p className="text-sm text-gyrocraft-text/40 mt-2">From satellite operators</p>
            </div>
            <div className="bg-gyrocraft-dark rounded-2xl p-8 border border-gyrocraft-orange/20 text-center">
              <Briefcase className="w-12 h-12 text-gyrocraft-orange mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gyrocraft-text mb-2">$1-2B</h3>
              <p className="text-gyrocraft-text/60">Development Contracts</p>
              <p className="text-sm text-gyrocraft-text/40 mt-2">Military programs</p>
            </div>
            <div className="bg-gyrocraft-dark rounded-2xl p-8 border border-green-500/20 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gyrocraft-text mb-2">$500M-2B/yr</h3>
              <p className="text-gyrocraft-text/60">Running Royalties</p>
              <p className="text-sm text-gyrocraft-text/40 mt-2">Ongoing revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation & Comparables */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-8">Valuation & Returns</h2>
              <div className="space-y-6">
                <div className="bg-gyrocraft-blue/10 rounded-xl p-6 border border-gyrocraft-blue/20">
                  <p className="text-gyrocraft-text/60 mb-2">Current Valuation (Series A Entry)</p>
                  <p className="text-4xl font-bold text-gyrocraft-teal">$25B</p>
                </div>
                <div className="bg-gyrocraft-orange/10 rounded-xl p-6 border border-gyrocraft-orange/20">
                  <p className="text-gyrocraft-text/60 mb-2">Standalone Patent Value</p>
                  <p className="text-4xl font-bold text-gyrocraft-orange">$2-5B</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gyrocraft-text mb-6">Comparable Companies</h3>
              <div className="space-y-4">
                {comparables.map((comp) => (
                  <div key={comp.company} className="flex items-center justify-between bg-gyrocraft-blue/5 rounded-lg p-4">
                    <div>
                      <p className="text-gyrocraft-text font-medium">{comp.company}</p>
                      <p className="text-sm text-gyrocraft-text/50">{comp.description}</p>
                    </div>
                    <span className="text-gyrocraft-teal font-bold">{comp.valuation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            18-Month Roadmap
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {timeline.map((item, index) => (
              <div key={item.quarter} className="flex items-center">
                <div className="bg-gyrocraft-dark rounded-xl p-6 border border-gyrocraft-teal/20 text-center min-w-[160px]">
                  <p className="text-gyrocraft-teal font-bold mb-1">{item.quarter}</p>
                  <p className="text-gyrocraft-text text-sm">{item.milestone}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-8 h-0.5 bg-gyrocraft-teal/30 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series A Ask */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              We're Raising <span className="text-gyrocraft-teal">$50M Series A</span>
            </h2>
            <p className="text-gyrocraft-text/60">Use of proceeds breakdown</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {useOfProceeds.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-gyrocraft-text">{item.label}</span>
                  <span className="text-gyrocraft-teal font-bold">{item.amount}</span>
                </div>
                <div className="h-3 bg-gyrocraft-blue/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gyrocraft-teal to-gyrocraft-blue rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Risk Mitigation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((item) => (
              <div key={item.risk} className="bg-gyrocraft-dark rounded-2xl p-6 border border-gyrocraft-text/10">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-gyrocraft-orange" />
                  <span className="text-gyrocraft-text font-semibold">{item.risk}</span>
                  <span className="ml-auto text-gyrocraft-orange font-bold">{item.percentage}%</span>
                </div>
                <p className="text-gyrocraft-text/60 text-sm">
                  <span className="text-gyrocraft-teal font-medium">Mitigation:</span> {item.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-12">Leadership</h2>
          <div className="bg-gyrocraft-blue/10 rounded-2xl p-8 border border-gyrocraft-blue/20">
            <div className="w-24 h-24 bg-gyrocraft-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-gyrocraft-teal" />
            </div>
            <h3 className="text-2xl font-bold text-gyrocraft-text mb-2">Ivan Daza</h3>
            <p className="text-gyrocraft-teal font-medium mb-4">Founder & CEO | Patent Inventor</p>
            <p className="text-gyrocraft-text/60 max-w-xl mx-auto">
              20+ years aerospace engineering experience. Leading the development of revolutionary 
              propulsion technology that will reshape the aerospace industry.
            </p>
            <div className="mt-6 p-4 bg-gyrocraft-dark/50 rounded-xl">
              <p className="text-gyrocraft-text/50 text-sm italic">
                "Advisory board being assembled with leaders from SpaceX, Relativity Space, and industry veterans"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gyrocraft-blue to-gyrocraft-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
            Join Us at the Forefront of Aerospace Innovation
          </h2>
          <p className="text-gyrocraft-text/60 mb-8">
            Schedule a call with CEO Ivan Daza to discuss investment opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gyrocraft-orange hover:bg-gyrocraft-orange/90 text-gyrocraft-dark font-semibold px-8">
              <Download className="mr-2 w-5 h-5" />
              Download Full Investor Deck
            </Button>
            <Button size="lg" variant="outline" className="border-gyrocraft-text/30 text-gyrocraft-text hover:bg-gyrocraft-text/10 font-semibold px-8" asChild>
              <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Investor Call
              </a>
            </Button>
          </div>
          <GyrocraftContactForm defaultInterest="investing" />
        </div>
      </section>

      <GyrocraftFooter />
    </>
  );
};

export default GyrocraftInvestors;
