import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Calendar, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

const FooterCTA = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", type: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({ title: t("contact.toastTitle"), description: t("contact.toastDescription") });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">{t("contact.title")}</h2>
            <p className="text-lg text-white/80 mb-8">{t("contact.description")}</p>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-accent" /></div>
                <div><h4 className="font-semibold text-white">{t("contact.email")}</h4><a href="mailto:ivan.daza@ravolution.se" className="text-white/75 hover:text-accent-light transition-colors">ivan.daza@ravolution.se</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-accent" /></div>
                <div><h4 className="font-semibold text-white">{t("contact.phone")}</h4><a href="tel:+46769456600" className="text-white/75 hover:text-accent-light transition-colors">+46 76 945 66 00</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-gold" /></div>
                <div><h4 className="font-semibold text-white">{t("contact.location")}</h4><p className="text-white/75">Kungsgatan 9, 111 43 Stockholm, Sweden</p></div>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full sm:w-auto bg-accent hover:bg-accent-light text-white" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer"><Calendar className="mr-2 w-4 h-4" />{t("contact.scheduleLicensing")}</a>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto ml-0 sm:ml-3 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><FileText className="mr-2 w-4 h-4" />{t("contact.downloadOverview")}</Button>
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-8 h-8 text-accent" /></div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{t("contact.thankYou")}</h3>
                <p className="text-muted-foreground mb-6">{t("contact.thankYouMessage")}</p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>{t("contact.submitAnother")}</Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-display font-bold text-foreground mb-6">{t("contact.formTitle")}</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder={t("contact.formName")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-secondary border-white/20 text-white placeholder:text-white/70" />
                    <Input type="email" placeholder={t("contact.formEmail")} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-secondary border-white/20 text-white placeholder:text-white/70" />
                  </div>
                  <Input placeholder={t("contact.formCompany")} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="bg-secondary border-white/20 text-white placeholder:text-white/70" />
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger className="bg-secondary border-white/20 text-white [&>span]:text-white data-[placeholder]:text-white/70"><SelectValue placeholder={t("contact.formType")} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="licensing">{t("contact.formTypeOptions.licensing")}</SelectItem>
                      <SelectItem value="investment">{t("contact.formTypeOptions.investment")}</SelectItem>
                      <SelectItem value="partnership">{t("contact.formTypeOptions.partnership")}</SelectItem>
                      <SelectItem value="acquisition">{t("contact.formTypeOptions.acquisition")}</SelectItem>
                      <SelectItem value="other">{t("contact.formTypeOptions.other")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder={t("contact.formMessage")} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="bg-secondary border-white/20 text-white placeholder:text-white/70 resize-none" />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent-light"><Send className="mr-2 w-4 h-4" />{t("contact.formSubmit")}</Button>
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
