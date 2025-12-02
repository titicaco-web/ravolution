import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lightbulb, Scale, Globe, Briefcase } from "lucide-react";

const AboutPatents = () => {
  return (
    <>
      <Helmet>
        <title>Patent Strategy | Ravolution AB - License-First Innovation</title>
        <meta name="description" content="Learn how Ravolution applies patent strategy across multiple market verticals to create defensible, scalable global solutions." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero */}
        <header className="gradient-hero text-primary-foreground pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ravolution: A New Model for Patent Innovation
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Rather than building & selling individual products, Ravolution incubates high-value patented technologies and licenses them to enterprises, governments, and strategic partners worldwide.
            </p>
          </div>
        </header>

        {/* Strategy Section */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="section-header">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Patent Strategy
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Deep Innovation",
                  description: "Each vertical solves a real global problem with defensible IP."
                },
                {
                  icon: Scale,
                  title: "Multiple Claims",
                  description: "100+ patent claims across 9 applications prevent workarounds."
                },
                {
                  icon: Globe,
                  title: "Global Impact",
                  description: "Designed for UN alignment and cross-border scalability."
                },
                {
                  icon: Briefcase,
                  title: "Licensing Model",
                  description: "License to partners vs. competing directly. Sustainable revenue."
                }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="card-feature text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="section-padding bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="section-header">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Patent Portfolio Metrics
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "4", label: "Active Patent Verticals" },
                { number: "20+", label: "Total Patents Filed" },
                { number: "250+", label: "Total Patent Claims" },
                { number: "$2.3T+", label: "Combined Market Addressable" }
              ].map((metric) => (
                <div key={metric.label} className="bg-card rounded-2xl p-8 text-center shadow-card border border-border">
                  <div className="text-5xl font-display font-bold text-gradient-gold mb-2">
                    {metric.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-hero text-primary-foreground section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Explore Partnership Opportunities
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Connect with our team to discuss licensing, co-development, or acquisition opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                  Schedule a Meeting
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/verticals">
                  View All Verticals
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPatents;
