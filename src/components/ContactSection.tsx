import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Calendar, FileText, Shield } from "lucide-react";

const ContactSection = () => {
  const contactOptions = [
    {
      type: "Investor Inquiries",
      description: "Schedule a partnership discussion with our executive team",
      cta: "Schedule Meeting",
      icon: <Calendar className="h-6 w-6" />,
      variant: "hero" as const
    },
    {
      type: "Strategic Partners",
      description: "Explore strategic alliance opportunities",
      cta: "Partner With Us",
      icon: <Shield className="h-6 w-6" />,
      variant: "accent" as const
    },
    {
      type: "Media & Press",
      description: "Download press kit and company information",
      cta: "Download Press Kit",
      icon: <FileText className="h-6 w-6" />,
      variant: "outline" as const
    }
  ];

  const documents = [
    { name: "Market Analysis Report", type: "PDF", size: "2.4 MB" },
    { name: "Technical Specifications", type: "PDF", size: "1.8 MB" },
    { name: "Partnership Overview", type: "PDF", size: "3.1 MB" },
    { name: "Financial Projections", type: "Excel", size: "950 KB" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to join the revolution in worker safety? Contact us to explore 
            investment opportunities and strategic partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h3>
            
            {contactOptions.map((option, index) => (
              <div key={index} className="card-feature">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">{option.type}</h4>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Button 
                      className={
                        option.variant === 'hero' ? 'btn-hero' :
                        option.variant === 'accent' ? 'btn-accent' :
                        'btn-outline'
                      }
                    >
                      {option.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Direct Contact */}
            <div className="card-elevated bg-primary text-white">
              <h4 className="text-2xl font-bold mb-6">Direct Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>partnerships@ravolution.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>+46 (0)8 XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Stockholm, Sweden</span>
                </div>
              </div>
            </div>
          </div>

          {/* Document Downloads */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Resource Center</h3>
            
            <div className="card-elevated">
              <h4 className="text-xl font-bold text-foreground mb-6">Download Resources</h4>
              <p className="text-muted-foreground mb-6">
                Access comprehensive documentation about our technology, market analysis, 
                and partnership opportunities.
              </p>
              
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button className="btn-accent w-full">
                  Access Secure Investor Portal
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 card-elevated">
              <h4 className="text-xl font-bold text-foreground mb-4">Trust & Security</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">ISO Certified</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">GDPR Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Worker Safety?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join industry leaders in revolutionizing PPE technology. The future of worker protection starts here.
            </p>
            <Button className="btn-accent">
              Start the Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;