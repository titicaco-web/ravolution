import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Satellite, Plane, Car, Settings, CheckCircle, ArrowRight } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftContactForm from "@/components/gyrocraft/GyrocraftContactForm";

const GyrocraftLicensing = () => {
  const tiers = [
    {
      id: "satellite",
      icon: Satellite,
      title: "TIER 1: Satellite Propulsion",
      subtitle: "Exclusive Regional License",
      borderColor: "border-gyrocraft-blue",
      bgColor: "bg-gyrocraft-blue/10",
      details: [
        { label: "Territory", value: "North America / Europe / Asia-Pacific (by region)" },
        { label: "Exclusivity", value: "Exclusive to licensee in territory" },
        { label: "Upfront License Fee", value: "$100-150 Million" },
        { label: "Annual Minimum", value: "$10-15 Million/year" },
        { label: "Running Royalty", value: "2.5% of net sales" },
        { label: "Term", value: "15 years with 5-year renewal options" },
        { label: "10-Year Revenue", value: "$400-600 Million" },
      ],
      targets: ["Inmarsat", "Viasat", "Iridium", "Amazon Kuiper", "OneWeb", "SES"],
      cta: "Schedule Demo",
    },
    {
      id: "military",
      icon: Plane,
      title: "TIER 2: Military UAV/Drone Propulsion",
      subtitle: "Non-Exclusive License",
      borderColor: "border-red-500",
      bgColor: "bg-red-500/10",
      details: [
        { label: "Territory", value: "Worldwide (non-exclusive)" },
        { label: "Field of Use", value: "Military UAV/HALE platforms" },
        { label: "Upfront Fee", value: "$50-100 Million" },
        { label: "Development Contract", value: "$500M-$1B over 5 years" },
        { label: "Unit Royalty", value: "5-8% per system" },
        { label: "Term", value: "20 years, perpetual after 3 deployments" },
        { label: "5-Year Contract Value", value: "$1.5-2.5 Billion" },
      ],
      targets: ["Lockheed Martin", "Northrop Grumman", "Raytheon", "Boeing Defense", "General Dynamics"],
      cta: "Request Technical Briefing",
    },
    {
      id: "aam",
      icon: Car,
      title: "TIER 3: eVTOL & Advanced Air Mobility",
      subtitle: "Non-Exclusive License",
      borderColor: "border-green-500",
      bgColor: "bg-green-500/10",
      details: [
        { label: "Territory", value: "Worldwide (non-exclusive)" },
        { label: "Upfront Fee", value: "$50-200 Million" },
        { label: "Co-Investment", value: "Ravolution invests $20M" },
        { label: "Running Royalty", value: "3-5% of sales" },
        { label: "10-Year Revenue", value: "$3-5 Billion" },
        { label: "Market Growth", value: "$6B (2030) → $137B (2035)" },
      ],
      targets: ["Joby Aviation", "Archer", "Lilium", "Vertical Aerospace", "EHang"],
      cta: "Join the Air Mobility Revolution",
    },
    {
      id: "components",
      icon: Settings,
      title: "TIER 4: Propulsion System Integrators",
      subtitle: "OEM Integration License",
      borderColor: "border-gyrocraft-orange",
      bgColor: "bg-gyrocraft-orange/10",
      details: [
        { label: "Territory", value: "Worldwide" },
        { label: "Upfront Fee", value: "$20-50 Million" },
        { label: "Annual Minimum", value: "$2-5 Million/year" },
        { label: "Royalty", value: "1.5-3% of propulsion sales" },
        { label: "Integration Support", value: "2 FTE engineers for 3 years" },
      ],
      targets: ["GE Aviation", "Rolls-Royce", "Collins Aerospace", "Honeywell"],
      cta: "Component Supplier Inquiry",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Gyrocraft Licensing | Partner with Revolutionary Propulsion Technology</title>
        <meta name="description" content="Explore Gyrocraft licensing opportunities for satellite operators, military contractors, eVTOL manufacturers, and propulsion integrators. Three tiers of partnerships available." />
      </Helmet>

      <GyrocraftNavbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gyrocraft-text mb-4">
            Gyrocraft <span className="text-gyrocraft-teal">Licensing</span> Opportunities
          </h1>
          <p className="text-xl text-gyrocraft-text/70 max-w-3xl mx-auto">
            Four tiers of licensing partnerships for different market segments. 
            Choose the model that fits your strategic objectives.
          </p>
        </div>
      </section>

      {/* Licensing Tiers */}
      <section className="py-16 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {tiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <div
                key={tier.id}
                className={`${tier.bgColor} border-2 ${tier.borderColor} rounded-2xl p-8 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Header */}
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 ${tier.bgColor} border ${tier.borderColor} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-gyrocraft-text" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-gyrocraft-text mb-2">{tier.title}</h2>
                    <p className="text-gyrocraft-text/60 mb-4">{tier.subtitle}</p>
                    
                    <div className="mb-6">
                      <p className="text-sm text-gyrocraft-text/50 mb-2">Target Companies:</p>
                      <div className="flex flex-wrap gap-2">
                        {tier.targets.map((target) => (
                          <span key={target} className="text-xs bg-gyrocraft-text/10 text-gyrocraft-text/80 px-3 py-1 rounded-full">
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold" asChild>
                      <a href="#contact">
                        {tier.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Details */}
                  <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
                    {tier.details.map((detail) => (
                      <div key={detail.label} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gyrocraft-text/50">{detail.label}</p>
                          <p className="text-gyrocraft-text font-medium">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-10">
            Licensing Tier Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gyrocraft-text/20">
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium">Tier</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium">Territory</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium">Exclusivity</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium">Upfront Fee</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium">Royalty</th>
                  <th className="py-4 px-4 text-gyrocraft-text/60 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gyrocraft-text/10">
                  <td className="py-4 px-4 text-gyrocraft-text font-medium">Satellite</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">Regional</td>
                  <td className="py-4 px-4"><span className="bg-gyrocraft-blue/20 text-gyrocraft-teal px-2 py-1 rounded text-sm">Exclusive</span></td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">$100-150M</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">2.5%</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">Satellite operators</td>
                </tr>
                <tr className="border-b border-gyrocraft-text/10">
                  <td className="py-4 px-4 text-gyrocraft-text font-medium">Military</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">Worldwide</td>
                  <td className="py-4 px-4"><span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm">Non-Exclusive</span></td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">$50-100M</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">5-8%</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">Defense contractors</td>
                </tr>
                <tr className="border-b border-gyrocraft-text/10">
                  <td className="py-4 px-4 text-gyrocraft-text font-medium">AAM/eVTOL</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">Worldwide</td>
                  <td className="py-4 px-4"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">Non-Exclusive</span></td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">$50-200M</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">3-5%</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">eVTOL manufacturers</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gyrocraft-text font-medium">Components</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">Worldwide</td>
                  <td className="py-4 px-4"><span className="bg-gyrocraft-orange/20 text-gyrocraft-orange px-2 py-1 rounded text-sm">Non-Exclusive</span></td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">$20-50M</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">1.5-3%</td>
                  <td className="py-4 px-4 text-gyrocraft-text/70">OEM integrators</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gyrocraft-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Ready to License <span className="text-gyrocraft-teal">Gyrocraft</span>?
            </h2>
            <p className="text-gyrocraft-text/60">
              Fill out the form below and we'll contact you within 48 hours to schedule a meeting with CEO Ivan Daza.
            </p>
          </div>
          <GyrocraftContactForm defaultInterest="licensing" />
        </div>
      </section>

      <GyrocraftFooter />
    </>
  );
};

export default GyrocraftLicensing;
