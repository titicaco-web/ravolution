import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { FileText, Loader2 } from "lucide-react";

const GyrocraftNDAForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeNDA, setAgreeNDA] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    signatoryName: "",
    companyEmail: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeNDA) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Confidentiality Agreement to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "NDA Request Submitted",
      description: "You'll receive the NDA and technical documentation within 24 hours.",
    });

    setFormData({
      companyName: "",
      signatoryName: "",
      companyEmail: "",
    });
    setAgreeNDA(false);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gyrocraft-blue/10 rounded-2xl p-8 border border-gyrocraft-orange/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gyrocraft-orange/20 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-gyrocraft-orange" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gyrocraft-text">Request Confidential Documents</h3>
          <p className="text-gyrocraft-text/60 text-sm">NDA required for technical specifications</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gyrocraft-text/60 text-sm mb-2">Company Name *</label>
          <Input
            required
            placeholder="Your company"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30"
          />
        </div>
        <div>
          <label className="block text-gyrocraft-text/60 text-sm mb-2">Name of Legal Signatory *</label>
          <Input
            required
            placeholder="Full name of authorized signatory"
            value={formData.signatoryName}
            onChange={(e) => setFormData({ ...formData, signatoryName: e.target.value })}
            className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30"
          />
        </div>
        <div>
          <label className="block text-gyrocraft-text/60 text-sm mb-2">Company Email *</label>
          <Input
            required
            type="email"
            placeholder="legal@company.com"
            value={formData.companyEmail}
            onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
            className="bg-gyrocraft-dark border-gyrocraft-text/20 text-gyrocraft-text placeholder:text-gyrocraft-text/30"
          />
        </div>
      </div>

      <div className="flex items-start gap-3 mb-6 p-4 bg-gyrocraft-dark rounded-xl border border-gyrocraft-text/10">
        <Checkbox 
          id="nda-agree" 
          checked={agreeNDA} 
          onCheckedChange={(checked) => setAgreeNDA(checked as boolean)}
          className="mt-0.5 border-gyrocraft-text/30 data-[state=checked]:bg-gyrocraft-teal data-[state=checked]:border-gyrocraft-teal"
        />
        <label htmlFor="nda-agree" className="text-sm text-gyrocraft-text/70 cursor-pointer">
          I agree to the <span className="text-gyrocraft-teal">Confidentiality Agreement</span> and understand that 
          all technical documentation is proprietary information of Ravolution AB.
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !agreeNDA}
        className="w-full bg-gyrocraft-orange hover:bg-gyrocraft-orange/90 text-gyrocraft-dark font-semibold py-6 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <FileText className="mr-2 w-5 h-5" />
            Download NDA & Technical Specs
          </>
        )}
      </Button>
    </form>
  );
};

export default GyrocraftNDAForm;
