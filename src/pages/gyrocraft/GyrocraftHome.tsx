import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Satellite, Plane, Car, Globe, ArrowRight, Zap, Shield, Infinity } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";

const GyrocraftHome = () => {
  const features = [
    {
      icon: Satellite,
      title: "Doubles Satellite Lifetime",
      description: "No propellant depletion - permanent orbital capability",
    },
    {
      icon: Plane,
      title: "72-Hour Endurance",
      description: "Military drones with silent, undetectable flight",
    },
    {
      icon: Car,
      title: "Unlimited Range",
      description: "Solve the eVTOL battery problem forever",
    },
    {
      icon: Globe,
      title: "$284B Market Opportunity",
      description: "Cumulative TAM across three explosive sectors",
    },
  ];

  const stats = [
    { value: "$2-5B", label: "Patent Value" },
    { value: "5-10", label: "Core Patents" },
    { value: "$284B", label: "Addressable Market" },
    { value: "3", label: "Sectors Ready" },
  ];

  const partners = [
    "Inmarsat", "Lockheed Martin", "Joby Aviation"
  ];

  return (
    <>
      <Helmet>
        <title>Gyrocraft | Revolutionary Propellant-Free Propulsion Technology</title>
        <meta name="description" content="Gyrocraft - Revolutionary inertial electromagnetic propulsion. Works everywhere: space, air, water. No fuel. No exhaust. No batteries. $284B market opportunity." />
        <meta name="keywords" content="Gyrocraft, propulsion, aerospace, satellite, eVTOL, military drone, patent, Ravolution" />
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
          <div className="inline-flex items-center gap-2 bg-gyrocraft-teal/20 text-gyrocraft-teal rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Revolutionary Aerospace Technology</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gyrocraft-text mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            The Future of Propulsion
            <br />
            <span className="text-gyrocraft-teal">Has Arrived</span>
          </h1>

          <p className="text-xl md:text-2xl text-gyrocraft-text/70 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Revolutionary inertial electromagnetic propulsion.
            <br />
            <span className="text-gyrocraft-teal font-semibold">Works everywhere: space, air, water. No fuel. No exhaust. No batteries.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold px-8 py-6 text-lg" asChild>
              <Link to="/gyrocraft/licensing">
                For Companies: Explore Licensing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gyrocraft-orange text-gyrocraft-orange hover:bg-gyrocraft-orange/10 font-semibold px-8 py-6 text-lg" asChild>
              <Link to="/gyrocraft/investors">
                For Investors: See Pitch Deck
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Gyrocraft Section */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gyrocraft-text mb-4">
              Why <span className="text-gyrocraft-teal">Gyrocraft</span>?
            </h2>
            <p className="text-gyrocraft-text/60 max-w-2xl mx-auto">
              A breakthrough technology that generates thrust using only electromagnetic forces and rotational dynamics
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

      {/* Market Proof Section */}
      <section className="py-16 bg-gyrocraft-blue/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-xl text-gyrocraft-text/60 mb-6">Strategic Partners Express Strong Interest</h3>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="text-2xl font-display font-bold text-gyrocraft-text/40 hover:text-gyrocraft-teal transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
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
                Propulsion Without Propellant
              </h2>
              <p className="text-gyrocraft-text/70 mb-6 text-lg">
                Gyrocraft generates sustained thrust using only electromagnetic forces and rotational dynamics. 
                Our patented system works in space, air, and underwater environments without fuel, exhaust, or external reaction mass.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <span className="text-gyrocraft-text">Patent application filed December 30, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <span className="text-gyrocraft-text">5-10 core patents protected globally</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center">
                    <Infinity className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <span className="text-gyrocraft-text">Works in all environments: space, air, water</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gyrocraft-blue to-gyrocraft-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gyrocraft-text mb-6">
            Ready to Revolutionize Propulsion?
          </h2>
          <p className="text-gyrocraft-text/70 mb-8 text-lg">
            Whether you're a corporation looking to license breakthrough technology or an investor seeking the next aerospace unicorn, 
            Gyrocraft offers unprecedented opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold px-8" asChild>
              <Link to="/gyrocraft/licensing">Explore Licensing</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gyrocraft-text/30 text-gyrocraft-text hover:bg-gyrocraft-text/10 font-semibold px-8" asChild>
              <Link to="/gyrocraft/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <GyrocraftFooter />
    </>
  );
};

export default GyrocraftHome;
