import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, TrendingUp, Shield, Layers, Users, Calendar, Target, AlertTriangle, Rocket, DollarSign, Briefcase, FlaskConical, CheckCircle, XCircle } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftContactForm from "@/components/gyrocraft/GyrocraftContactForm";

const GyrocraftInvestors = () => {
  const investmentThesis = [
    {
      icon: FlaskConical,
      title: "Early-Stage Deep Tech",
      description: "Ground-floor opportunity in exploratory electromagnetic research with potential aerospace applications",
    },
    {
      icon: Shield,
      title: "Patent Protection",
      description: "5-10 core patents filed with global protection strategy across key aerospace markets",
    },
    {
      icon: Layers,
      title: "Milestone-Based",
      description: "Stage-gated funding tied to technical validation milestones - capital deployed as progress demonstrated",
    },
    {
      icon: Target,
      title: "Multiple Applications",
      description: "If validated, potential applications in satellite control, stabilization, and industrial systems",
    },
    {
      icon: Users,
      title: "Seeking Advisors",
      description: "Building advisory board with physics PhD and aerospace engineering expertise",
    },
  ];

  const useOfProceeds = [
    { label: "Prototype Development & Testing", amount: "$1.5M", percentage: 50 },
    { label: "University Partnership for Validation", amount: "$1.0M", percentage: 33 },
    { label: "Team Expansion (2-3 engineers)", amount: "$0.3M", percentage: 10 },
    { label: "Patent Expansion & Legal", amount: "$0.2M", percentage: 7 },
  ];

  const timeline = [
    { quarter: "Q1-Q2 2026", milestone: "Benchtop Prototype" },
    { quarter: "Q3-Q4 2026", milestone: "Initial Testing Complete" },
    { quarter: "Q1 2027", milestone: "Third-Party Verification" },
    { quarter: "Q2 2027", milestone: "Publish Results" },
    { quarter: "2028+", milestone: "Commercial Path (if validated)" },
  ];

  const risks = [
    { 
      risk: "Technical Risk", 
      probability: "30%",
      description: "Core technology may not produce measurable effects under rigorous testing conditions",
      mitigation: "University partnership for independent validation; milestone-gated funding"
    },
    { 
      risk: "Market Risk", 
      probability: "20%",
      description: "Even if technology works, adoption timelines in aerospace are 5-10+ years",
      mitigation: "Multiple application pathways; pivot options to proven physics applications"
    },
    { 
      risk: "Team Risk", 
      probability: "15%",
      description: "Current team lacks physics PhD and aerospace propulsion expertise",
      mitigation: "Actively recruiting advisory board with relevant backgrounds"
    },
    { 
      risk: "Competition Risk", 
      probability: "10%",
      description: "Similar patents exist (e.g., Airborne Motorworks US 11,760,496 B2)",
      mitigation: "Freedom-to-operate analysis underway; differentiation strategy in development"
    },
  ];

  const potentialMarkets = [
    { market: "Satellite Attitude Control", tam: "$2.3B by 2030", share: "If validated: 1-5%", revenue: "$23-115M/year" },
    { market: "Precision Stabilization", tam: "$1.5B by 2030", share: "If validated: 2-8%", revenue: "$30-120M/year" },
    { market: "Industrial Controls", tam: "$3.2B by 2030", share: "Component licensing", revenue: "$10-50M/year" },
  ];

  return (
    <>
      <Helmet>
        <title>Invest in Gyrocraft | $3M Seed Round - Early-Stage Aerospace Research</title>
        <meta name="description" content="Seed investment opportunity in Gyrocraft electromagnetic control research. $3M raise at $15-25M valuation. 18-24 months to validation milestone." />
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
            <FlaskConical className="w-4 h-4" />
            <span className="text-sm font-semibold">Seed Investment Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gyrocraft-text mb-6">
            Early-Stage <span className="text-gyrocraft-teal">Deep Tech</span> Research
          </h1>
          <p className="text-xl text-gyrocraft-text/70 mb-4 max-w-2xl mx-auto">
            Investigating electromagnetic gyroscopic effects with potential aerospace applications.
            Seeking validation through rigorous independent testing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
            <div className="bg-gyrocraft-blue/20 rounded-xl px-6 py-3">
              <p className="text-gyrocraft-text/60 text-sm">Raising</p>
              <p className="text-2xl font-bold text-gyrocraft-teal">$3M Seed</p>
            </div>
            <div className="bg-gyrocraft-blue/20 rounded-xl px-6 py-3">
              <p className="text-gyrocraft-text/60 text-sm">Valuation</p>
              <p className="text-2xl font-bold text-gyrocraft-text">$15-25M</p>
            </div>
            <div className="bg-gyrocraft-blue/20 rounded-xl px-6 py-3">
              <p className="text-gyrocraft-text/60 text-sm">To Validation</p>
              <p className="text-2xl font-bold text-gyrocraft-text">18-24 months</p>
            </div>
          </div>
          <Button size="lg" className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold px-8">
            <Download className="mr-2 w-5 h-5" />
            Request Technical Specifications
          </Button>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Investment Thesis
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

      {/* Potential Market Opportunity */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Potential Market Opportunity
            </h2>
            <p className="text-gyrocraft-text/60 max-w-2xl mx-auto">
              All projections contingent on successful prototype validation. Conservative estimates assume technology works as hypothesized.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gyrocraft-text/20">
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium text-left">Market</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium text-left">TAM</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium text-left">Target Share</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium text-left">Potential Revenue</th>
                </tr>
              </thead>
              <tbody>
                {potentialMarkets.map((item) => (
                  <tr key={item.market} className="border-b border-gyrocraft-text/10">
                    <td className="py-4 px-4 text-gyrocraft-text font-medium">{item.market}</td>
                    <td className="py-4 px-4 text-gyrocraft-text/70">{item.tam}</td>
                    <td className="py-4 px-4 text-gyrocraft-text/70">{item.share}</td>
                    <td className="py-4 px-4 text-gyrocraft-teal font-semibold">{item.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gyrocraft-text/40 text-sm mt-4 italic">
            * All projections assume successful technology validation. Actual results may differ significantly.
          </p>
        </div>
      </section>

      {/* Use of Proceeds */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Use of Proceeds: <span className="text-gyrocraft-teal">$3M Seed Round</span>
            </h2>
            <p className="text-gyrocraft-text/60">Milestone-based deployment with clear technical objectives</p>
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

      {/* Timeline */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            18-24 Month Validation Roadmap
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {timeline.map((item, index) => (
              <div key={item.quarter} className="flex items-center">
                <div className="bg-gyrocraft-blue/10 rounded-xl p-6 border border-gyrocraft-teal/20 text-center min-w-[160px]">
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

      {/* Risk Factors - CRITICAL SECTION */}
      <section className="py-20 bg-gyrocraft-orange/5 border-y border-gyrocraft-orange/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gyrocraft-orange/20 text-gyrocraft-orange rounded-full px-4 py-2 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-semibold">Important Risk Disclosure</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Risk Factors
            </h2>
            <p className="text-gyrocraft-text/60 max-w-2xl mx-auto">
              This is a high-risk, early-stage research investment. The core technology is unvalidated and may not produce expected results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((item) => (
              <div key={item.risk} className="bg-gyrocraft-dark rounded-2xl p-6 border border-gyrocraft-orange/20">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-gyrocraft-orange" />
                  <span className="text-gyrocraft-text font-semibold text-lg">{item.risk}</span>
                  <span className="ml-auto bg-gyrocraft-orange/20 text-gyrocraft-orange px-3 py-1 rounded-full text-sm font-bold">
                    {item.probability} probability
                  </span>
                </div>
                <p className="text-gyrocraft-text/70 mb-4">{item.description}</p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <p className="text-gyrocraft-text/60 text-sm">
                    <span className="text-gyrocraft-teal font-medium">Mitigation:</span> {item.mitigation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gyrocraft-dark rounded-2xl border border-gyrocraft-orange/30">
            <h3 className="text-xl font-semibold text-gyrocraft-text mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-gyrocraft-orange" />
              What If Technology Doesn't Validate?
            </h3>
            <ul className="space-y-2 text-gyrocraft-text/70">
              <li className="flex items-start gap-2">
                <span className="text-gyrocraft-orange">•</span>
                <span><strong>Pivot Option:</strong> Underlying innovations (high-speed EM control, Halbach arrays, predictive algorithms) have value in proven physics applications like precision attitude control and stabilization systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gyrocraft-orange">•</span>
                <span><strong>Component Licensing:</strong> Power electronics and control algorithms licensable to industrial motor and magnetic bearing markets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gyrocraft-orange">•</span>
                <span><strong>Bear Case Value:</strong> Patent portfolio and technical documentation retain $1-5M value for acquisition or licensing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-12">Leadership & Team Gaps</h2>
          <div className="bg-gyrocraft-blue/10 rounded-2xl p-8 border border-gyrocraft-blue/20 mb-8">
            <div className="w-24 h-24 bg-gyrocraft-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-gyrocraft-teal" />
            </div>
            <h3 className="text-2xl font-bold text-gyrocraft-text mb-2">Ivan Daza, P.Eng., MBA</h3>
            <p className="text-gyrocraft-teal font-medium mb-4">Founder & CEO | Patent Inventor</p>
            <p className="text-gyrocraft-text/60 max-w-xl mx-auto">
              Product management executive with 15+ years in technology commercialization across automotive, telecommunications, and aerospace sectors.
            </p>
          </div>
          
          <div className="bg-gyrocraft-orange/10 rounded-xl p-6 border border-gyrocraft-orange/20">
            <h4 className="text-lg font-semibold text-gyrocraft-text mb-4">Currently Recruiting (Priority Hires)</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gyrocraft-dark rounded-lg p-4">
                <p className="text-gyrocraft-text font-medium">Physics Advisor</p>
                <p className="text-gyrocraft-text/50 text-sm">PhD in electromagnetism or gyroscopic dynamics</p>
              </div>
              <div className="bg-gyrocraft-dark rounded-lg p-4">
                <p className="text-gyrocraft-text font-medium">Aerospace Engineer</p>
                <p className="text-gyrocraft-text/50 text-sm">Propulsion or attitude control background</p>
              </div>
              <div className="bg-gyrocraft-dark rounded-lg p-4">
                <p className="text-gyrocraft-text font-medium">Industry Veteran</p>
                <p className="text-gyrocraft-text/50 text-sm">Satellite/aerospace customer relationships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gyrocraft-blue to-gyrocraft-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
            Interested in Early-Stage Deep Tech?
          </h2>
          <p className="text-gyrocraft-text/60 mb-8">
            Schedule a call with CEO Ivan Daza to discuss the research and investment opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold px-8">
              <Download className="mr-2 w-5 h-5" />
              Request Technical Specifications
            </Button>
            <Button size="lg" variant="outline" className="border-gyrocraft-text/30 text-gyrocraft-text hover:bg-gyrocraft-text/10 font-semibold px-8" asChild>
              <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Discussion
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