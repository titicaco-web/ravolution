import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

interface GyrocraftContactFormProps {
  defaultInterest?: string;
}

const GyrocraftContactForm = ({ defaultInterest = "licensing" }: GyrocraftContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    interest: defaultInterest,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully",
      description: "We'll contact you within 48 hours to schedule a meeting with CEO Ivan Daza.",
    });

    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      interest: defaultInterest,
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gyrocraft-blue/10 rounded-2xl p-8 border border-gyrocraft-blue/20">
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gyrocraft-text/60 text-sm mb-2">Company Name *</label>
          <Input
            required
            placeholder="Your company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30"
          />
        </div>
        <div>
          <label className="block text-gyrocraft-text/60 text-sm mb-2">Your Name *</label>
          <Input
            required
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gyrocraft-text/60 text-sm mb-2">Email *</label>
          <Input
            required
            type="email"
            placeholder="email@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30"
          />
        </div>
        <div>
          <label className="block text-gyrocraft-text/60 text-sm mb-2">Phone</label>
          <Input
            type="tel"
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gyrocraft-text/60 text-sm mb-2">What interests you? *</label>
        <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
          <SelectTrigger className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gyrocraft-dark border-gyrocraft-text/20">
            <SelectItem value="licensing" className="text-gyrocraft-text">Licensing Partnership</SelectItem>
            <SelectItem value="investing" className="text-gyrocraft-text">Investment Opportunity</SelectItem>
            <SelectItem value="acquisition" className="text-gyrocraft-text">Patent Acquisition</SelectItem>
            <SelectItem value="press" className="text-gyrocraft-text">Press Inquiry</SelectItem>
            <SelectItem value="other" className="text-gyrocraft-text">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <label className="block text-gyrocraft-text/60 text-sm mb-2">Tell us about your interest</label>
        <Textarea
          placeholder="Describe your application or questions..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30 resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 w-5 h-5" />
            Schedule Meeting with CEO
          </>
        )}
      </Button>
    </form>
  );
};

export default GyrocraftContactForm;
