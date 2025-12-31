import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Database, BarChart3, Shield, Building2, Rocket, Plane, Settings, CheckCircle, TrendingUp, Tag } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftNDAForm from "@/components/gyrocraft/GyrocraftNDAForm";

const GyrocraftAcquisition = () => {
  const included = [
    {
      icon: FileText,
      title: "Patent Portfolio",
      description: "5-10 core patents filed, global protection strategy, all derivatives and continuations",
    },
    {
      icon: Database,
      title: "Technical Documentation",
      description: "5,000+ pages: specs, CAD files, simulation models, control algorithms",
    },
    {
      icon: BarChart3,
      title: "Research Data",
      description: "Development history, test protocols, preliminary measurements, partnership pipeline",
    },
    {
      icon: Shield,
      title: "Clean IP",
      description: "No encumbrances, freedom-to-operate analysis available, filed globally",
    },
  ];

  const valuationScenarios = [
    { 
      scenario: "Bear Case", 
      value: "$5-15M",
      description: "Technology doesn't validate as propulsion, but component innovations have licensing value",
      probability: "30%"
    },
    { 
      scenario: "Base Case", 
      value: "$25-50M",
      description: "Partial validation enables attitude control/stabilization applications",
      probability: "50%"
    },
    { 
      scenario: "Bull Case", 
      value: "$100-250M",
      description: "Full validation opens multiple aerospace markets",
      probability: "20%"
    },
  ];

  const dealTerms = [
    { term: "Current Asking Price", value: "$25-50M (negotiable)" },
    { term: "Structure Options", value: "Cash, equity, earnout combinations" },
    { term: "Earnout Potential", value: "+$25-100M contingent on validation milestones" },
    { term: "Consulting", value: "Founder + key personnel available (negotiable)" },
    { term: "Exclusivity Period", value: "60 days for qualified buyers" },
    { term: "Due Diligence Access", value: "Full technical access after NDA" },
  ];

  const whyAcquireNow = [
    {
      title: "Pre-Validation Discount",
      description: "Acquire at research-stage pricing before validation could significantly increase value",
    },
    {
      title: "Block Competitors",
      description: "Prevent competitors from licensing or acquiring the technology",
    },
    {
      title: "Control the Narrative",
      description: "Own the validation process and commercial pathway",
    },
    {
      title: "Pivot Options",
      description: "Even if primary concept limited, underlying innovations have proven-physics applications",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Acquire Gyrocraft | Strategic Patent Acquisition Opportunity</title>
        <meta name="description" content="Strategic acquisition opportunity for aerospace companies. Complete Gyrocraft patent portfolio available. Pre-validation stage pricing with significant upside potential." />
      </Helmet>

      <GyrocraftNavbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gyrocraft-orange/20 text-gyrocraft-orange rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-semibold">Strategic Acquisition Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gyrocraft-text mb-4">
            Acquire <span className="text-gyrocraft-teal">Gyrocraft</span> Patent Portfolio
          </h1>
          <p className="text-xl text-gyrocraft-text/70 max-w-3xl mx-auto">
            Pre-validation stage acquisition opportunity for strategic acquirers. 
            Own the research, control the validation, capture the upside.
          </p>
        </div>
      </section>

      {/* Current Status Notice */}
      <section className="py-6 bg-gyrocraft-teal/10 border-y border-gyrocraft-teal/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <Tag className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
            <p className="text-gyrocraft-text">
              <span className="font-semibold text-gyrocraft-teal">Available for Acquisition:</span> 5 patents filed with global protection. Early-stage pricing offers strategic entry point for qualified acquirers.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            What's Included in Acquisition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="bg-gyrocraft-dark rounded-2xl p-6 border border-gyrocraft-text/10 hover:border-gyrocraft-teal/30 transition-all">
                  <div className="w-14 h-14 bg-gyrocraft-teal/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-gyrocraft-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-gyrocraft-text mb-2">{item.title}</h3>
                  <p className="text-gyrocraft-text/60 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Valuation Scenarios */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">Valuation Scenarios</h2>
            <p className="text-gyrocraft-text/60 max-w-2xl mx-auto">
              Realistic valuation range based on development stage and validation outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {valuationScenarios.map((item) => (
              <div key={item.scenario} className={`rounded-2xl p-8 border text-center ${
                item.scenario === 'Bull Case' 
                  ? 'bg-gyrocraft-teal/10 border-gyrocraft-teal/30' 
                  : item.scenario === 'Bear Case'
                  ? 'bg-gyrocraft-orange/10 border-gyrocraft-orange/30'
                  : 'bg-gyrocraft-blue/10 border-gyrocraft-blue/30'
              }`}>
                <p className="text-gyrocraft-text/50 text-sm mb-2">{item.scenario}</p>
                <p className={`text-4xl font-display font-bold mb-4 ${
                  item.scenario === 'Bull Case' ? 'text-gyrocraft-teal' :
                  item.scenario === 'Bear Case' ? 'text-gyrocraft-orange' :
                  'text-gyrocraft-text'
                }`}>
                  {item.value}
                </p>
                <p className="text-gyrocraft-text/60 text-sm mb-4">{item.description}</p>
                <span className="inline-block bg-gyrocraft-dark/50 text-gyrocraft-text/70 px-3 py-1 rounded-full text-xs">
                  {item.probability} probability
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gyrocraft-text/40 text-sm mt-6 italic">
            * Valuations are estimates based on comparable early-stage deep tech transactions. Actual value contingent on validation results.
          </p>
        </div>
      </section>

      {/* Why Acquire Now */}
      <section className="py-16 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Why Acquire at Pre-Validation Stage?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyAcquireNow.map((item) => (
              <div key={item.title} className="bg-gyrocraft-dark rounded-xl p-6 border border-gyrocraft-text/10">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gyrocraft-text mb-2">{item.title}</h3>
                    <p className="text-gyrocraft-text/60">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Terms */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Indicative Deal Terms
          </h2>
          <div className="bg-gyrocraft-blue/10 rounded-2xl border border-gyrocraft-blue/20 overflow-hidden">
            <table className="w-full">
              <tbody>
                {dealTerms.map((item, index) => (
                  <tr key={item.term} className={index < dealTerms.length - 1 ? "border-b border-gyrocraft-text/10" : ""}>
                    <td className="py-4 px-6 text-gyrocraft-text/60 font-medium">{item.term}</td>
                    <td className="py-4 px-6 text-gyrocraft-text font-semibold text-right">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gyrocraft-text/40 text-sm mt-4">
            All terms negotiable. Structured deals with earnouts and milestone payments available.
          </p>
        </div>
      </section>

      {/* Acquirer Profiles */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Ideal Acquirer Profiles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gyrocraft-dark rounded-2xl p-6 border border-gyrocraft-text/10">
              <Rocket className="w-10 h-10 text-gyrocraft-teal mb-4" />
              <h3 className="text-xl font-semibold text-gyrocraft-text mb-3">Satellite Companies</h3>
              <ul className="space-y-2 text-gyrocraft-text/60 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Attitude control R&D expansion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Propellant-free technology hedge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Competitive IP positioning</span>
                </li>
              </ul>
            </div>
            <div className="bg-gyrocraft-dark rounded-2xl p-6 border border-gyrocraft-text/10">
              <Plane className="w-10 h-10 text-gyrocraft-teal mb-4" />
              <h3 className="text-xl font-semibold text-gyrocraft-text mb-3">Defense Contractors</h3>
              <ul className="space-y-2 text-gyrocraft-text/60 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Advanced propulsion research</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Block competitor access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Classified program integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-gyrocraft-dark rounded-2xl p-6 border border-gyrocraft-text/10">
              <Settings className="w-10 h-10 text-gyrocraft-teal mb-4" />
              <h3 className="text-xl font-semibold text-gyrocraft-text mb-3">Industrial OEMs</h3>
              <ul className="space-y-2 text-gyrocraft-text/60 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Control system technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Electromagnetic actuation IP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                  <span>Multiple market licensing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & NDA Form */}
      <section id="contact" className="py-20 bg-gyrocraft-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Request Acquisition Information
            </h2>
            <p className="text-gyrocraft-text/60">
              Complete NDA to access full technical documentation and detailed financials.
            </p>
          </div>
          <GyrocraftNDAForm />
        </div>
      </section>

      <GyrocraftFooter />
    </>
  );
};

export default GyrocraftAcquisition;