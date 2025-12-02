import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Calendar, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FooterCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Inquiry Submitted",
      description: "We'll be in touch within 48 hours.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Partner?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're exploring licensing opportunities, investment potential, 
              or concept acquisition, we're ready to discuss.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:contact@ravolution.se" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@ravolution.se
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a href="tel:+46123456789" className="text-muted-foreground hover:text-accent transition-colors">
                    +46 12 345 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Stockholm, Sweden</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary-light" asChild>
                <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Licensing Consultation
                </a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto ml-0 sm:ml-3">
                <FileText className="mr-2 w-4 h-4" />
                Download Company Overview
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your inquiry has been received. We'll be in touch within 48 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Send an Inquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>
                  
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-secondary border-border"
                  />

                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue placeholder="Inquiry Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="licensing">IP Licensing</SelectItem>
                      <SelectItem value="investment">Investment Inquiry</SelectItem>
                      <SelectItem value="partnership">Strategic Partnership</SelectItem>
                      <SelectItem value="acquisition">Concept Acquisition</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Textarea
                    placeholder="Tell us about your interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="bg-secondary border-border resize-none"
                  />

                  <Button type="submit" className="w-full bg-accent hover:bg-accent-light">
                    <Send className="mr-2 w-4 h-4" />
                    Submit Inquiry
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
