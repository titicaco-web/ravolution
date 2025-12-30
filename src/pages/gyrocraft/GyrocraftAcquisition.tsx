import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Database, BarChart3, Shield, Building2, Rocket, Plane, Car, Settings, CheckCircle } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftNDAForm from "@/components/gyrocraft/GyrocraftNDAForm";

const GyrocraftAcquisition = () => {
  const included = [
    {
      icon: FileText,
      title: "Core Patent Portfolio",
      description: "5-10 granted patents, 20+ provisional, all derivatives, perpetual global rights",
    },
    {
      icon: Database,
      title: "Technical Documentation",
      description: "5,000+ page specs, CAD/simulation files, prototypes, test data",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "50+ LOIs, competitive analysis, regulatory pathways",
    },
    {
      icon: Shield,
      title: "IP Protection",
      description: "Clean IP, no encumbrances, filed globally (Sweden, EU, US, China, Japan)",
    },
  ];

  const dealTerms = [
    { term: "Purchase Price", value: "$2.5B" },
    { term: "Structure", value: "70% cash, 30% equity (if private)" },
    { term: "Earnout", value: "+$500M if 10+ customers by 2030" },
    { term: "Consulting", value: "Ivan Daza + 2 engineers @ $500K/year × 3 years" },
    { term: "Non-Compete", value: "3-year period" },
    { term: "Closing Timeline", value: "60-90 days after LOI" },
  ];

  const processTimeline = [
    { phase: "Phase 1", weeks: "Week 1-2", description: "NDA + Technical Diligence" },
    { phase: "Phase 2", weeks: "Week 2-4", description: "Valuation Negotiation + LOI" },
    { phase: "Phase 3", weeks: "Week 4-8", description: "Full Due Diligence (IP, market, technical)" },
    { phase: "Phase 4", weeks: "Week 8-12", description: "Purchase Agreement + Closing" },
    { phase: "Phase 5", weeks: "Week 12-16", description: "Consulting + IP Handoff" },
  ];

  return (
    <>
      <Helmet>
        <title>Acquire Gyrocraft | $2.5B Strategic Patent Acquisition Opportunity</title>
        <meta name="description" content="Strategic acquisition opportunity for aerospace giants. Complete Gyrocraft patent portfolio - $2.5B asking price. 5-10 core patents, 20+ provisionals, global protection." />
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
            Gyrocraft: The Complete <span className="text-gyrocraft-teal">Patent Portfolio</span>
          </h1>
          <p className="text-xl text-gyrocraft-text/70 max-w-3xl mx-auto">
            Strategic acquisition opportunity for aerospace defense companies. 
            Own the future of propulsion technology outright.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            What's Included
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

      {/* Asking Price */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-6">Asking Price</h2>
          <div className="bg-gradient-to-br from-gyrocraft-blue/20 to-gyrocraft-teal/20 rounded-3xl p-12 border border-gyrocraft-teal/30">
            <p className="text-6xl md:text-7xl font-display font-bold text-gyrocraft-teal mb-4">
              $2.5 Billion USD
            </p>
            <p className="text-gyrocraft-text/60 text-lg mb-6">
              Conservative valuation based on $2-5B range
            </p>
            <p className="text-gyrocraft-text/40 text-sm max-w-xl mx-auto">
              Comparable to SpaceX Raptor development cost (100x ROI potential). 
              Validated by independent aerospace IP valuation methods.
            </p>
          </div>
        </div>
      </section>

      {/* Why Acquire - Tabs */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Why Acquire?
          </h2>
          <Tabs defaultValue="lockheed" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-gyrocraft-dark p-1 rounded-xl">
              <TabsTrigger value="lockheed" className="data-[state=active]:bg-gyrocraft-teal data-[state=active]:text-gyrocraft-dark rounded-lg text-sm">
                <Plane className="w-4 h-4 mr-2" />
                Defense
              </TabsTrigger>
              <TabsTrigger value="spacex" className="data-[state=active]:bg-gyrocraft-teal data-[state=active]:text-gyrocraft-dark rounded-lg text-sm">
                <Rocket className="w-4 h-4 mr-2" />
                SpaceX
              </TabsTrigger>
              <TabsTrigger value="boeing" className="data-[state=active]:bg-gyrocraft-teal data-[state=active]:text-gyrocraft-dark rounded-lg text-sm">
                <Car className="w-4 h-4 mr-2" />
                Boeing/Airbus
              </TabsTrigger>
              <TabsTrigger value="ge" className="data-[state=active]:bg-gyrocraft-teal data-[state=active]:text-gyrocraft-dark rounded-lg text-sm">
                <Settings className="w-4 h-4 mr-2" />
                GE/Rolls-Royce
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lockheed" className="mt-8">
              <div className="bg-gyrocraft-dark rounded-2xl p-8 border border-gyrocraft-text/10">
                <h3 className="text-2xl font-bold text-gyrocraft-text mb-6">For Lockheed Martin / Northrop Grumman</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Own military drone propulsion breakthrough outright</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Block competitors from licensing the technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Integrate into classified programs ($500M+ contracts)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">$220B+ company value growth opportunity</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="spacex" className="mt-8">
              <div className="bg-gyrocraft-dark rounded-2xl p-8 border border-gyrocraft-text/10">
                <h3 className="text-2xl font-bold text-gyrocraft-text mb-6">For SpaceX</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Complement Raptor engine portfolio with propellant-free option</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Satellite servicing & orbital maneuvering applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Strategic moat vs Blue Origin, Relativity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Starlink constellation permanent positioning capability</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="boeing" className="mt-8">
              <div className="bg-gyrocraft-dark rounded-2xl p-8 border border-gyrocraft-text/10">
                <h3 className="text-2xl font-bold text-gyrocraft-text mb-6">For Boeing / Airbus</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">eVTOL division competitive edge vs Joby, Archer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Future commercial aircraft applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Licensing spinoff value ($500M+/year)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Defense division integration opportunities</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="ge" className="mt-8">
              <div className="bg-gyrocraft-dark rounded-2xl p-8 border border-gyrocraft-text/10">
                <h3 className="text-2xl font-bold text-gyrocraft-text mb-6">For GE Aviation / Rolls-Royce</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Add to propulsion systems portfolio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Licensing to all OEMs ($1B+/year by 2035)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Strategic positioning in next-gen aerospace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                    <span className="text-gyrocraft-text">Complementary to existing turbofan/turboprop lines</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Deal Terms */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Deal Terms
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
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Acquisition Process Timeline
          </h2>
          <div className="space-y-4">
            {processTimeline.map((item, index) => (
              <div key={item.phase} className="flex items-center gap-4">
                <div className="w-16 text-center">
                  <span className="text-gyrocraft-teal font-bold">{item.phase}</span>
                </div>
                <div className="flex-1 bg-gyrocraft-dark rounded-xl p-4 border border-gyrocraft-text/10 flex items-center justify-between">
                  <span className="text-gyrocraft-text">{item.description}</span>
                  <span className="text-gyrocraft-text/50 text-sm">{item.weeks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & NDA Form */}
      <section id="contact" className="py-20 bg-gyrocraft-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Interested in Strategic Acquisition?
            </h2>
            <p className="text-gyrocraft-text/60">
              Request confidential discussion and NDA to access full technical documentation.
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
