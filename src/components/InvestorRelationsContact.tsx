import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Mail, MapPin, Send, Linkedin, AlertCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const InvestorRelationsContact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setHasError(false);
    try {
      const { error } = await supabase.functions.invoke("send-investor-inquiry", {
        body: formData,
      });
      if (error) throw error;
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setHasError(true);
      toast({
        title: t("invest.ir.errorMsg") as string,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setFormData({ name: "", email: "", organization: "", role: "", subject: "", message: "" });
    setIsSubmitted(false);
    setHasError(false);
  };

  return (
    <section id="ir-contact-form" className="section-padding pt-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10 text-center">
          {t("invest.ir.sectionTitle")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Leon profile card */}
          <div className="card-elevated p-8">
            {/* Replace with /images/leon-barakat.jpg when available */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-3xl mb-5 ring-2 ring-accent/30">
              LB
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-1">
              {t("invest.ir.name")}
            </h3>
            <p className="text-accent font-medium mb-3">{t("invest.ir.title")}</p>
            <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5" />
              🇨🇭 {t("invest.ir.location")}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">{t("invest.ir.bio")}</p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:leon.barakat@ravolution.se"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                leon.barakat@ravolution.se
              </a>
              {/* Replace with Leon's LinkedIn URL */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className={`card-elevated p-8 ${hasError ? "border-destructive" : ""}`}>
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {t("invest.ir.successTitle")}
                </h3>
                <p className="text-muted-foreground mb-5">{t("invest.ir.successMsg")}</p>
                <Button onClick={reset} variant="outline">
                  {t("invest.ir.sendAnother")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">
                    {t("invest.ir.formTitle")}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t("invest.ir.formSubtitle")}</p>
                </div>

                <Input
                  placeholder={t("invest.ir.fieldName") as string}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={200}
                  className="bg-secondary border-border text-foreground text-white placeholder:text-white/70"
                />
                <Input
                  type="email"
                  placeholder={t("invest.ir.fieldEmail") as string}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  maxLength={320}
                  className="bg-secondary border-border text-foreground text-white placeholder:text-white/70"
                />
                <Input
                  placeholder={t("invest.ir.fieldOrg") as string}
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  maxLength={200}
                  className="bg-secondary border-border text-foreground text-white placeholder:text-white/70"
                />
                <Input
                  placeholder={t("invest.ir.fieldRole") as string}
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  maxLength={200}
                  className="bg-secondary border-border text-foreground text-white placeholder:text-white/70"
                />
                <Select
                  value={formData.subject}
                  onValueChange={(v) => setFormData({ ...formData, subject: v })}
                >
                  <SelectTrigger className="bg-secondary border-border text-foreground text-white placeholder:text-white/70">
                    <SelectValue placeholder={t("invest.ir.fieldSubject") as string} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={t("invest.ir.subjectDeck") as string}>
                      {t("invest.ir.subjectDeck")}
                    </SelectItem>
                    <SelectItem value={t("invest.ir.subjectCall") as string}>
                      {t("invest.ir.subjectCall")}
                    </SelectItem>
                    <SelectItem value={t("invest.ir.subjectCoInvest") as string}>
                      {t("invest.ir.subjectCoInvest")}
                    </SelectItem>
                    <SelectItem value={t("invest.ir.subjectFamilyOffice") as string}>
                      {t("invest.ir.subjectFamilyOffice")}
                    </SelectItem>
                    <SelectItem value={t("invest.ir.subjectDueDiligence") as string}>
                      {t("invest.ir.subjectDueDiligence")}
                    </SelectItem>
                    <SelectItem value={t("invest.ir.subjectPartnership") as string}>
                      {t("invest.ir.subjectPartnership")}
                    </SelectItem>
                    <SelectItem value={t("invest.ir.subjectGeneral") as string}>
                      {t("invest.ir.subjectGeneral")}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder={t("invest.ir.fieldMessage") as string}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                  maxLength={5000}
                  className="bg-secondary border-border resize-none text-foreground text-white placeholder:text-white/70"
                />

                {hasError && (
                  <p className="text-sm text-destructive flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    {t("invest.ir.errorMsg")}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-light text-accent-foreground"
                >
                  <Send className="mr-2 w-4 h-4" />
                  {isSubmitting ? t("invest.ir.sending") : t("invest.ir.cta")}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Prefer direct contact */}
        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">{t("invest.ir.directTitle")}</p>
          <p>
            Leon Barakat —{" "}
            <a href="mailto:leon.barakat@ravolution.se" className="text-accent hover:text-accent-light transition-colors">
              leon.barakat@ravolution.se
            </a>{" "}
            — Switzerland
          </p>
          <p>
            Ivan Daza —{" "}
            <a href="mailto:ivan.daza@ravolution.se" className="text-accent hover:text-accent-light transition-colors">
              ivan.daza@ravolution.se
            </a>{" "}
            — Stockholm, Sweden
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorRelationsContact;
