import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Satellite, Plane, Car, Globe, ArrowRight, Zap, Shield, Infinity, FlaskConical, Microscope, AlertCircle } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import { useLangPath } from "@/hooks/use-lang-path";

const GyrocraftHome = () => {
  const lp = useLangPath();
  const features = [
    {
      icon: Satellite,
      title: "Satellite Attitude Control",
      description: "Precision torque vectoring for zero-propellant station-keeping",
    },
    {
      icon: Plane,
      title: "Aerospace Applications",
      description: "High-frequency electromagnetic control for UAV stabilization",
    },
    {
      icon: Car,
      title: "Advanced Air Mobility",
      description: "Next-generation control systems for eVTOL platforms",
    },
    {
      icon: Globe,
      title: "Multi-Environment",
      description: "Investigating applications in space, air, and underwater",
    },
  ];

  const stats = [
    { value: "Seed", label: "Current Stage" },
    { value: "5-10", label: "Core Patents" },
    { value: "18-24mo", label: "To Validation" },
    { value: "3", label: "Target Sectors" },
  ];

  return (
    <>
      <Helmet>
        <title>Gyrocraft | Advanced Electromagnetic Control Systems for Aerospace</title>
        <meta name="description" content="Gyrocraft - Investigating electromagnetic gyroscopic effects for aerospace applications. Research-stage technology seeking validation through rigorous independent testing." />
        <meta name="keywords" content="Gyrocraft, electromagnetic control, aerospace, satellite attitude control, gyroscopic systems, Ravolution" />
      </Helmet>

      <GyrocraftNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gyrocraft-dark">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gyrocraft-dark via-gyrocraft-blue/20 to-gyrocraft-dark" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gyrocraft-teal/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gyrocraft-orange/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Spinning Rotor Animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <div className="w-96 h-96 border-4 border-gyrocraft-teal/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gyrocraft-teal rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-gyrocraft-teal rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gyrocraft-teal rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-gyrocraft-teal rounded-full" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
          <div className="inline-flex items-center gap-2 bg-gyrocraft-orange/20 text-gyrocraft-orange rounded-full px-4 py-2 mb-6 animate-fade-in">
            <FlaskConical className="w-4 h-4" />
            <span className="text-sm font-semibold">Research-Stage Technology</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gyrocraft-text mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Investigating Electromagnetic
            <br />
            <span className="text-gyrocraft-teal">Gyroscopic Effects</span>
          </h1>

          <p className="text-xl md:text-2xl text-gyrocraft-text/70 max-w-3xl mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Early-stage research platform exploring force generation through asymmetric magnetic field interactions in high-speed gyroscopic systems.
          </p>

          <p className="text-lg text-gyrocraft-text/50 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            Seeking validation through rigorous independent testing. Currently raising seed funding for prototype development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold px-8 py-6 text-lg" asChild>
              <Link to={lp("/gyrocraft/investors")}>
                Investment Opportunity
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gyrocraft-orange text-gyrocraft-orange hover:bg-gyrocraft-orange/10 font-semibold px-8 py-6 text-lg" asChild>
              <Link to={lp("/gyrocraft/licensing")}>
                Partnership Inquiries
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gyrocraft-text mb-4">
              Research <span className="text-gyrocraft-teal">Focus Areas</span>
            </h2>
            <p className="text-gyrocraft-text/60 max-w-2xl mx-auto">
              Exploring electromagnetic actuation mechanisms in gyroscopic systems with potential applications across aerospace sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gyrocraft-blue/10 border border-gyrocraft-blue/20 rounded-2xl p-6 hover:border-gyrocraft-teal/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gyrocraft-teal/20 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-gyrocraft-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-gyrocraft-text mb-2">{feature.title}</h3>
                  <p className="text-gyrocraft-text/60 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Status Banner */}
      <section className="py-8 bg-gyrocraft-orange/10 border-y border-gyrocraft-orange/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertCircle className="w-6 h-6 text-gyrocraft-orange flex-shrink-0" />
            <p className="text-gyrocraft-text">
              <span className="font-semibold text-gyrocraft-orange">Current Status:</span> Patent filed December 2025. Benchtop prototype under development. Seeking university partnerships for independent validation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-gyrocraft-blue to-gyrocraft-teal/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gyrocraft-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gyrocraft-text/80 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gyrocraft-text mb-6">
                Research Questions Under Investigation
              </h2>
              <p className="text-gyrocraft-text/70 mb-6 text-lg">
                Our patent-pending approach combines ultra-high-speed rotor dynamics (up to 20,000 RPM), 
                Halbach array electromagnetic coils, and predictive digital control algorithms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <span className="text-gyrocraft-text font-medium">Electromagnetic Actuation</span>
                    <p className="text-gyrocraft-text/50 text-sm">Can asymmetric field actuation produce measurable force effects?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <span className="text-gyrocraft-text font-medium">Physical Mechanisms</span>
                    <p className="text-gyrocraft-text/50 text-sm">What are the underlying principles and potential applications?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <span className="text-gyrocraft-text font-medium">Patent Protection</span>
                    <p className="text-gyrocraft-text/50 text-sm">Application filed December 30, 2025 - global protection planned</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gyrocraft-blue/20 to-gyrocraft-teal/20 rounded-3xl flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-gyrocraft-teal/50 rounded-full animate-spin relative" style={{ animationDuration: '10s' }}>
                  <div className="absolute inset-4 border-2 border-gyrocraft-orange/50 rounded-full animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-12 bg-gyrocraft-teal/30 rounded-full flex items-center justify-center">
                    <Zap className="w-12 h-12 text-gyrocraft-teal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Development Roadmap
          </h2>
          <div className="space-y-4">
            {[
              { status: "complete", phase: "Q4 2025", title: "Patent Application Filed", desc: "Core technology documented and submitted" },
              { status: "active", phase: "Q1-Q2 2026", title: "Benchtop Prototype", desc: "Complete initial hardware assembly and testing" },
              { status: "planned", phase: "Q3-Q4 2026", title: "Laboratory Testing", desc: "Controlled testing with independent measurement" },
              { status: "planned", phase: "2027", title: "University Partnership", desc: "Third-party validation and peer review" },
              { status: "future", phase: "2028+", title: "Commercial Applications", desc: "Contingent on successful validation results" },
            ].map((item) => (
              <div key={item.phase} className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                  item.status === 'complete' ? 'bg-gyrocraft-teal' :
                  item.status === 'active' ? 'bg-gyrocraft-orange animate-pulse' :
                  'bg-gyrocraft-text/20'
                }`} />
                <div className="flex-1 bg-gyrocraft-dark rounded-xl p-4 border border-gyrocraft-text/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <span className="text-gyrocraft-teal font-bold">{item.phase}</span>
                      <span className="text-gyrocraft-text ml-3">{item.title}</span>
                    </div>
                    <span className="text-gyrocraft-text/50 text-sm">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gyrocraft-blue to-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gyrocraft-text mb-6">
            Support Breakthrough Research
          </h2>
          <p className="text-gyrocraft-text/70 mb-8 text-lg">
            We're seeking seed investment to complete prototype development and establish university partnerships for independent validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold px-8" asChild>
              <Link to={lp("/gyrocraft/investors")}>Investment Details</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gyrocraft-text/30 text-gyrocraft-text hover:bg-gyrocraft-text/10 font-semibold px-8" asChild>
              <Link to={lp("/gyrocraft/about")}>About the Research</Link>
            </Button>
          </div>
        </div>
      </section>

      <GyrocraftFooter />
    </>
  );
};

export default GyrocraftHome;