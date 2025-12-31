import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Satellite, Plane, Car, Settings, CheckCircle, ArrowRight, AlertCircle, FlaskConical, Handshake } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftContactForm from "@/components/gyrocraft/GyrocraftContactForm";

const GyrocraftLicensing = () => {
  const partnershipTiers = [
    {
      id: "research",
      icon: FlaskConical,
      title: "Research Partnership",
      subtitle: "University & Research Institutions",
      borderColor: "border-gyrocraft-teal",
      bgColor: "bg-gyrocraft-teal/10",
      description: "Collaborate on independent validation testing and peer-reviewed publication of results. Access to prototype and technical documentation.",
      benefits: [
        "Access to prototype for testing",
        "Joint research publication rights",
        "First-mover advantage if validated",
        "Co-development of commercial applications",
      ],
      cta: "Discuss Research Collaboration",
    },
    {
      id: "development",
      icon: Handshake,
      title: "Development Partnership",
      subtitle: "Aerospace & Defense Companies",
      borderColor: "border-gyrocraft-blue",
      bgColor: "bg-gyrocraft-blue/10",
      description: "Early partner access to technology development. Joint investment in validation and commercial pathway exploration.",
      benefits: [
        "Joint development agreement",
        "Preferential licensing terms if validated",
        "Input on application-specific design",
        "Co-investment structure available",
      ],
      cta: "Explore Development Partnership",
    },
    {
      id: "strategic",
      icon: Satellite,
      title: "Strategic Acquisition Interest",
      subtitle: "For Acquisition or Major Investment",
      borderColor: "border-gyrocraft-orange",
      bgColor: "bg-gyrocraft-orange/10",
      description: "Complete patent portfolio and technology available for acquisition. Structured deal terms available for qualified acquirers.",
      benefits: [
        "Full patent portfolio transfer",
        "Complete technical documentation",
        "Founder consulting arrangement",
        "Clean IP with no encumbrances",
      ],
      cta: "Request Acquisition Details",
    },
  ];

  const applicationAreas = [
    {
      icon: Satellite,
      title: "Satellite Attitude Control",
      description: "Precision torque vectoring for zero-propellant station-keeping and orientation control",
      status: "Primary research focus",
    },
    {
      icon: Plane,
      title: "UAV Stabilization",
      description: "High-frequency control systems for precision gimbal and platform stabilization",
      status: "Secondary application",
    },
    {
      icon: Car,
      title: "Industrial Controls",
      description: "Component-level licensing for precision motor control and magnetic bearing systems",
      status: "Pivot option if core concept limited",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Gyrocraft Partnership | Research Collaboration & Development Opportunities</title>
        <meta name="description" content="Partner with Gyrocraft on electromagnetic control research. Research collaborations, development partnerships, and strategic acquisition opportunities available." />
      </Helmet>

      <GyrocraftNavbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gyrocraft-teal/20 text-gyrocraft-teal rounded-full px-4 py-2 mb-6">
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-semibold">Partnership Opportunities</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gyrocraft-text mb-4">
            Partner with <span className="text-gyrocraft-teal">Gyrocraft</span> Research
          </h1>
          <p className="text-xl text-gyrocraft-text/70 max-w-3xl mx-auto">
            We're seeking research partners, development collaborators, and strategic acquirers 
            to validate and commercialize our electromagnetic control technology.
          </p>
        </div>
      </section>

      {/* Development Status Notice */}
      <section className="py-6 bg-gyrocraft-orange/10 border-y border-gyrocraft-orange/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertCircle className="w-6 h-6 text-gyrocraft-orange flex-shrink-0" />
            <p className="text-gyrocraft-text">
              <span className="font-semibold text-gyrocraft-orange">Current Status:</span> Pre-validation stage. All partnerships structured around joint technology validation and contingent commercial terms.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {partnershipTiers.map((tier) => {
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
                    <p className="text-gyrocraft-text/70 text-sm mb-6">{tier.description}</p>

                    <Button className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold" asChild>
                      <a href="#contact">
                        {tier.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Benefits */}
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-semibold text-gyrocraft-text mb-4">Partnership Benefits</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {tier.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-gyrocraft-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gyrocraft-text">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-4">
            Potential Application Areas
          </h2>
          <p className="text-gyrocraft-text/60 text-center max-w-2xl mx-auto mb-10">
            If technology validates, these markets represent initial commercialization targets
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {applicationAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div key={area.title} className="bg-gyrocraft-dark rounded-2xl p-6 border border-gyrocraft-text/10">
                  <div className="w-14 h-14 bg-gyrocraft-teal/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-gyrocraft-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gyrocraft-text mb-2">{area.title}</h3>
                  <p className="text-gyrocraft-text/60 text-sm mb-4">{area.description}</p>
                  <span className="inline-block bg-gyrocraft-blue/20 text-gyrocraft-teal px-3 py-1 rounded-full text-xs font-medium">
                    {area.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer Partners */}
      <section className="py-16 bg-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-10">
            What Partners Receive
          </h2>
          <div className="space-y-4">
            {[
              { item: "Patent-pending technology documentation (5,000+ pages)", included: true },
              { item: "CAD files and simulation models", included: true },
              { item: "Control algorithm specifications", included: true },
              { item: "Access to benchtop prototype (Q2 2026)", included: true },
              { item: "Joint research publication opportunities", included: true },
              { item: "Preferential commercial licensing terms", included: true },
              { item: "Validated performance specifications", included: false, note: "Pending independent testing" },
              { item: "Commercial revenue projections", included: false, note: "Contingent on validation" },
            ].map((item) => (
              <div key={item.item} className="flex items-center gap-4 bg-gyrocraft-blue/5 rounded-xl p-4">
                {item.included ? (
                  <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-gyrocraft-orange flex-shrink-0" />
                )}
                <span className={`text-gyrocraft-text ${!item.included ? 'opacity-70' : ''}`}>
                  {item.item}
                </span>
                {item.note && (
                  <span className="ml-auto text-gyrocraft-orange text-sm italic">{item.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-4">
              Interested in <span className="text-gyrocraft-teal">Partnership</span>?
            </h2>
            <p className="text-gyrocraft-text/60">
              Tell us about your organization and interest area. We'll follow up within 48 hours.
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