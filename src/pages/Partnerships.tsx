import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, FileText } from "lucide-react";

const Partnerships = () => {
  return (
    <>
      <Helmet>
        <title>Strategic Partnerships | Ravolution AB - Patent Licensing</title>
        <meta name="description" content="Partner with Ravolution AB for patent licensing, strategic partnerships, and technology co-development across education, security, and digital platforms." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero */}
        <header className="gradient-hero text-primary-foreground pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Connect with Ravolution AB to explore licensing opportunities, strategic partnerships, or pilot programs across any patent vertical.
            </p>
          </div>
        </header>

        {/* Contact Options */}
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="section-header">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Interested in Licensing?
              </h2>
              <p className="text-lg text-muted-foreground">
                Contact our partnerships team to discuss licensing opportunities across any patent vertical.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-feature text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  CommunicaringSchool
                </h3>
                <p className="text-muted-foreground mb-4">
                  Education vertical partnerships
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:partnerships@communicaringschool.com">
                    partnerships@communicaringschool.com
                  </a>
                </Button>
              </div>

              <div className="card-feature text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  All Verticals
                </h3>
                <p className="text-muted-foreground mb-4">
                  General partnership inquiries
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:partnerships@ravolution.se">
                    partnerships@ravolution.se
                  </a>
                </Button>
              </div>

              <div className="card-feature text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-4">
                  <FileText className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Legal Inquiries
                </h3>
                <p className="text-muted-foreground mb-4">
                  IP and licensing agreements
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:legal@ravolution.se">
                    legal@ravolution.se
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Ready to Start?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a call with our partnerships team to discuss your needs.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-light" asChild>
              <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                Schedule a Meeting
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Partnerships;
