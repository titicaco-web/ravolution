import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Building2, Calendar, Users, Mail, Phone, Globe, Zap, Shield, Target } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftContactForm from "@/components/gyrocraft/GyrocraftContactForm";

const GyrocraftAbout = () => {
  const achievements = [
    "Patent application filed (Dec 30, 2025)",
    "5-10 core patents protected globally",
    "50+ LOIs from aerospace companies",
    "$2-5B patent valuation (independent appraisal)",
    "$284B addressable market identified",
    "Strategic interest from Inmarsat, Lockheed, Joby",
  ];

  const advisors = [
    { role: "Former SpaceX Chief Engineer", name: "Name TBD", status: "Being assembled" },
    { role: "Former Relativity Space VP Operations", name: "Name TBD", status: "Being assembled" },
    { role: "Satellite Industry Veteran", name: "Name TBD", status: "Being assembled" },
  ];

  return (
    <>
      <Helmet>
        <title>About Ravolution AB | Gyrocraft Propulsion Technology Company</title>
        <meta name="description" content="Ravolution AB - Founded 2025 in Sweden. Inventor of Gyrocraft, revolutionary propellant-free propulsion technology for aerospace, defense, and advanced air mobility." />
      </Helmet>

      <GyrocraftNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gyrocraft-text mb-4">
            Ravolution AB
          </h1>
          <p className="text-2xl text-gyrocraft-teal font-medium mb-4">
            Inventing the Future of Propulsion
          </p>
          <p className="text-xl text-gyrocraft-text/70 max-w-3xl mx-auto">
            Founded 2025, Sweden. Patent holder of revolutionary inertial electromagnetic propulsion technology.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gyrocraft-dark rounded-xl p-6 border border-gyrocraft-text/10">
              <Building2 className="w-8 h-8 text-gyrocraft-teal mb-3" />
              <p className="text-gyrocraft-text/50 text-sm">Organization Number</p>
              <p className="text-gyrocraft-text font-semibold">556709-7547</p>
            </div>
            <div className="bg-gyrocraft-dark rounded-xl p-6 border border-gyrocraft-text/10">
              <Calendar className="w-8 h-8 text-gyrocraft-teal mb-3" />
              <p className="text-gyrocraft-text/50 text-sm">Founded</p>
              <p className="text-gyrocraft-text font-semibold">2025</p>
            </div>
            <div className="bg-gyrocraft-dark rounded-xl p-6 border border-gyrocraft-text/10">
              <MapPin className="w-8 h-8 text-gyrocraft-teal mb-3" />
              <p className="text-gyrocraft-text/50 text-sm">Headquarters</p>
              <p className="text-gyrocraft-text font-semibold">Tyresö, Sweden</p>
            </div>
            <div className="bg-gyrocraft-dark rounded-xl p-6 border border-gyrocraft-text/10">
              <Target className="w-8 h-8 text-gyrocraft-teal mb-3" />
              <p className="text-gyrocraft-text/50 text-sm">Focus</p>
              <p className="text-gyrocraft-text font-semibold">Aerospace, Defense, AAM</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-6">
                Propulsion <span className="text-gyrocraft-teal">Without Propellant</span>
              </h2>
              <p className="text-gyrocraft-text/70 text-lg mb-6">
                We invented a breakthrough technology that generates thrust using only electromagnetic forces 
                and rotational dynamics. Our patented Gyrocraft system works in space, air, and underwater 
                environments without fuel, exhaust, or external reaction mass.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <span className="text-gyrocraft-text">Electromagnetic propulsion - no fuel required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <span className="text-gyrocraft-text">Works in all environments: space, air, water</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <span className="text-gyrocraft-text">Zero emissions, silent operation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gyrocraft-blue/20 to-gyrocraft-teal/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-display font-bold text-gyrocraft-teal mb-2">∞</div>
                  <p className="text-gyrocraft-text/60">Unlimited Endurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement} className="flex items-center gap-3 bg-gyrocraft-dark rounded-xl p-4 border border-gyrocraft-text/10">
                <CheckCircle className="w-6 h-6 text-gyrocraft-teal flex-shrink-0" />
                <span className="text-gyrocraft-text">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Leadership
          </h2>
          
          {/* Founder */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gyrocraft-blue/10 rounded-2xl p-8 border border-gyrocraft-teal/20 text-center">
              <div className="w-32 h-32 bg-gyrocraft-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gyrocraft-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gyrocraft-text mb-2">Ivan Daza</h3>
              <p className="text-gyrocraft-teal font-medium mb-4">Founder & CEO | Patent Inventor</p>
              <p className="text-gyrocraft-text/60 max-w-xl mx-auto mb-6">
                Construction Engineer and Inventor of the Gyrocraft propulsion system. 
                Leading the development of revolutionary technology that will reshape the aerospace industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:ivan@ravolution.se" className="flex items-center gap-2 text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  <Mail className="w-4 h-4" />
                  ivan@ravolution.se
                </a>
              </div>
            </div>
          </div>

          {/* Advisory Board */}
          <div>
            <h3 className="text-xl font-semibold text-gyrocraft-text text-center mb-6">
              Advisory Board <span className="text-gyrocraft-text/40">(Being Assembled)</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {advisors.map((advisor) => (
                <div key={advisor.role} className="bg-gyrocraft-blue/5 rounded-xl p-6 border border-dashed border-gyrocraft-text/20 text-center">
                  <div className="w-16 h-16 bg-gyrocraft-text/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gyrocraft-text/30" />
                  </div>
                  <p className="text-gyrocraft-text font-medium mb-1">{advisor.role}</p>
                  <p className="text-gyrocraft-text/40 text-sm">{advisor.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-8">
                Contact Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gyrocraft-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <p className="text-gyrocraft-text/50 text-sm mb-1">Office Address</p>
                    <p className="text-gyrocraft-text">Bagarsvängen 5, lgh 1101</p>
                    <p className="text-gyrocraft-text">130 35 Tyresö, Sweden</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gyrocraft-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <p className="text-gyrocraft-text/50 text-sm mb-1">Email</p>
                    <a href="mailto:ivan@ravolution.se" className="text-gyrocraft-teal hover:underline">
                      ivan@ravolution.se
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gyrocraft-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <p className="text-gyrocraft-text/50 text-sm mb-1">Company</p>
                    <p className="text-gyrocraft-text">Ravolution AB</p>
                    <p className="text-gyrocraft-text/60 text-sm">Org.nr: 556709-7547</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gyrocraft-text/10">
                <p className="text-gyrocraft-text/50 text-sm mb-2">Press Inquiries</p>
                <a href="mailto:press@ravolution.se" className="text-gyrocraft-teal hover:underline">
                  press@ravolution.se
                </a>
              </div>
            </div>

            <div>
              <GyrocraftContactForm defaultInterest="other" />
            </div>
          </div>
        </div>
      </section>

      <GyrocraftFooter />
    </>
  );
};

export default GyrocraftAbout;
