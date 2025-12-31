import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Building2, Calendar, Users, Mail, Phone, Globe, Zap, Shield, Target, AlertCircle, FlaskConical, Microscope } from "lucide-react";
import GyrocraftNavbar from "@/components/gyrocraft/GyrocraftNavbar";
import GyrocraftFooter from "@/components/gyrocraft/GyrocraftFooter";
import GyrocraftContactForm from "@/components/gyrocraft/GyrocraftContactForm";

const GyrocraftAbout = () => {
  const milestones = [
    { status: "complete", date: "Dec 2025", milestone: "Patent application filed" },
    { status: "complete", date: "Q4 2025", milestone: "Initial design specifications completed" },
    { status: "active", date: "Q1-Q2 2026", milestone: "Benchtop prototype development" },
    { status: "planned", date: "Q3-Q4 2026", milestone: "Laboratory testing and measurement" },
    { status: "planned", date: "2027", milestone: "University partnership for independent validation" },
  ];

  const researchQuestions = [
    "Can asymmetric electromagnetic field actuation produce measurable force effects in gyroscopic systems?",
    "What are the underlying physical mechanisms?",
    "What engineering applications might benefit from this control approach?",
  ];

  const teamGaps = [
    { role: "Physics Advisor", requirement: "PhD in electromagnetism or gyroscopic dynamics", status: "Actively recruiting" },
    { role: "Aerospace Engineer", requirement: "Propulsion or attitude control background", status: "Actively recruiting" },
    { role: "Industry Advisor", requirement: "Satellite/aerospace customer relationships", status: "Actively recruiting" },
  ];

  return (
    <>
      <Helmet>
        <title>About Ravolution AB | Gyrocraft Research</title>
        <meta name="description" content="Ravolution AB - Founded 2025 in Sweden. Conducting early-stage research into electromagnetic gyroscopic effects for potential aerospace applications." />
      </Helmet>

      <GyrocraftNavbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gyrocraft-teal/20 text-gyrocraft-teal rounded-full px-4 py-2 mb-6">
            <FlaskConical className="w-4 h-4" />
            <span className="text-sm font-semibold">Research-Stage Company</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gyrocraft-text mb-4">
            Ravolution AB
          </h1>
          <p className="text-2xl text-gyrocraft-teal font-medium mb-4">
            Investigating Electromagnetic Gyroscopic Effects
          </p>
          <p className="text-xl text-gyrocraft-text/70 max-w-3xl mx-auto">
            Founded 2025, Sweden. Conducting early-stage research into novel electromagnetic control systems with potential aerospace applications.
          </p>
        </div>
      </section>

      {/* Development Status Notice */}
      <section className="py-6 bg-gyrocraft-orange/10 border-y border-gyrocraft-orange/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-center">
            <AlertCircle className="w-6 h-6 text-gyrocraft-orange flex-shrink-0" />
            <p className="text-gyrocraft-text">
              <span className="font-semibold text-gyrocraft-orange">Development Stage:</span> Pre-prototype. Seeking independent validation through university partnerships.
            </p>
          </div>
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
              <p className="text-gyrocraft-text/50 text-sm">Stage</p>
              <p className="text-gyrocraft-text font-semibold">Pre-Seed / Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-display font-bold text-gyrocraft-text mb-6">
                Our <span className="text-gyrocraft-teal">Research</span> Focus
              </h2>
              <p className="text-gyrocraft-text/70 text-lg mb-6">
                We are conducting fundamental research into electromagnetic actuation of high-speed gyroscopic systems. 
                Our patent-pending approach combines ultra-high-speed rotor dynamics (up to 20,000 RPM), Halbach array 
                electromagnetic coils, and predictive digital control algorithms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <span className="text-gyrocraft-text font-medium">Control Frequency</span>
                    <p className="text-gyrocraft-text/50 text-sm">10-100 kHz sampling rate with predictive algorithms</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <span className="text-gyrocraft-text font-medium">Electromagnetic System</span>
                    <p className="text-gyrocraft-text/50 text-sm">Halbach array with 8-16 independently controlled coils</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gyrocraft-teal/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-gyrocraft-teal" />
                  </div>
                  <div>
                    <span className="text-gyrocraft-text font-medium">Patent Protection</span>
                    <p className="text-gyrocraft-text/50 text-sm">Application filed December 30, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gyrocraft-text mb-4">Research Questions</h3>
              <div className="space-y-4">
                {researchQuestions.map((question, index) => (
                  <div key={index} className="bg-gyrocraft-blue/10 rounded-xl p-4 border border-gyrocraft-blue/20">
                    <p className="text-gyrocraft-text/80 italic">"{question}"</p>
                  </div>
                ))}
              </div>
              <p className="text-gyrocraft-text/50 text-sm mt-4">
                Timeline: 18-24 months to complete controlled testing and publish findings. 
                Commercial applications contingent on validation results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 bg-gyrocraft-blue/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Development Timeline
          </h2>
          <div className="space-y-4">
            {milestones.map((item) => (
              <div key={item.milestone} className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                  item.status === 'complete' ? 'bg-gyrocraft-teal' :
                  item.status === 'active' ? 'bg-gyrocraft-orange animate-pulse' :
                  'bg-gyrocraft-text/20'
                }`} />
                <div className="flex-1 bg-gyrocraft-dark rounded-xl p-4 border border-gyrocraft-text/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <span className="text-gyrocraft-teal font-bold">{item.date}</span>
                      <span className="text-gyrocraft-text ml-3">{item.milestone}</span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      item.status === 'complete' ? 'bg-gyrocraft-teal/20 text-gyrocraft-teal' :
                      item.status === 'active' ? 'bg-gyrocraft-orange/20 text-gyrocraft-orange' :
                      'bg-gyrocraft-text/10 text-gyrocraft-text/50'
                    }`}>
                      {item.status === 'complete' ? 'Complete' : item.status === 'active' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gyrocraft-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-gyrocraft-text text-center mb-12">
            Team & Leadership
          </h2>
          
          {/* Founder */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gyrocraft-blue/10 rounded-2xl p-8 border border-gyrocraft-teal/20 text-center">
              <div className="w-32 h-32 bg-gyrocraft-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-gyrocraft-teal" />
              </div>
              <h3 className="text-2xl font-bold text-gyrocraft-text mb-2">Ivan Daza, P.Eng., MBA</h3>
              <p className="text-gyrocraft-teal font-medium mb-4">Founder & CEO | Patent Inventor</p>
              <p className="text-gyrocraft-text/60 max-w-xl mx-auto mb-6">
                Product management executive with 15+ years in technology commercialization across automotive, 
                telecommunications, and aerospace sectors. Inventor of the Gyrocraft patent-pending technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:ivan@ravolution.se" className="flex items-center gap-2 text-gyrocraft-text/60 hover:text-gyrocraft-teal transition-colors">
                  <Mail className="w-4 h-4" />
                  ivan@ravolution.se
                </a>
              </div>
            </div>
          </div>

          {/* Team Gaps - Honest Disclosure */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gyrocraft-text mb-2">
                Actively Recruiting
              </h3>
              <p className="text-gyrocraft-text/60">
                Building advisory board to address expertise gaps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {teamGaps.map((gap) => (
                <div key={gap.role} className="bg-gyrocraft-orange/5 rounded-xl p-6 border border-dashed border-gyrocraft-orange/30 text-center">
                  <div className="w-16 h-16 bg-gyrocraft-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gyrocraft-orange/50" />
                  </div>
                  <p className="text-gyrocraft-text font-medium mb-1">{gap.role}</p>
                  <p className="text-gyrocraft-text/50 text-sm mb-3">{gap.requirement}</p>
                  <span className="inline-block bg-gyrocraft-orange/20 text-gyrocraft-orange px-3 py-1 rounded-full text-xs">
                    {gap.status}
                  </span>
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
                <h4 className="text-lg font-semibold text-gyrocraft-text mb-4">Seeking Collaboration</h4>
                <ul className="space-y-2 text-gyrocraft-text/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gyrocraft-teal" />
                    <span>University research partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gyrocraft-teal" />
                    <span>Physics PhD advisory board members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gyrocraft-teal" />
                    <span>Aerospace industry veterans</span>
                  </li>
                </ul>
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