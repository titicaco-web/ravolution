import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const lp = useLangPath();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-display font-bold">Ravolution</span>
              <span className="text-xs font-medium bg-gold/20 text-gold px-2 py-0.5 rounded">AB</span>
            </div>
            <p className="text-white/70 text-sm mb-2">{t("footer.tagline")}</p>
            <p className="text-white/60 text-xs">{t("footer.founderNote")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.patentPortfolios")}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#patents" className="hover:text-white transition-colors">Rosetta Livingstone™</a></li>
              <li><a href="#patents" className="hover:text-white transition-colors">Voice Biometric Security</a></li>
              <li><a href="#patents" className="hover:text-white transition-colors">Professional Networking</a></li>
              <li><a href="#patents" className="hover:text-white transition-colors">B2B Export-Import</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="https://xportmatch.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">xPortMatch.com</a></li>
              <li><a href="https://voiceprotector.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">VoiceProtector.com</a></li>
              <li><a href="#concepts" className="hover:text-white transition-colors">{t("concepts.title")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to={lp("/founder")} className="hover:text-white transition-colors">{t("footer.aboutFounder")}</Link></li>
              <li><Link to={lp("/blog")} className="hover:text-white transition-colors">{t("nav.blog")}</Link></li>
              <li><Link to={lp("/invest")} className="hover:text-white transition-colors">{t("footer.investorRelations")}</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t("footer.contact")}</a></li>
              <li><Link to={lp("/privacy-policy")} className="hover:text-white transition-colors">{t("footer.privacyPolicy")}</Link></li>
              <li><Link to={lp("/terms-of-service")} className="hover:text-white transition-colors">{t("footer.termsOfService")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">© {currentYear} {t("footer.copyright")}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:ivan.daza@ravolution.se" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
