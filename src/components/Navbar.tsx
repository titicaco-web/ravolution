import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLangPath } from "@/hooks/use-lang-path";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const lp = useLangPath();

  const salesPartnerHref = language === "sv" ? "/sv/saljpartner" : language === "es" ? "/es/socio-comercial" : "/en/sales-partner";
  const salesPartnerLabel = language === "sv" ? "Säljpartner" : language === "es" ? "Socio Comercial" : "Sales Partner";

  const navLinks = [
    { label: t("nav.founder"), href: lp("/about") },
    { label: t("nav.angel"), href: lp("/angel-investor") },
    { label: t("nav.services"), href: lp("/services") },
    { label: t("nav.ventures"), href: lp("/#products") },
    { label: t("nav.patents"), href: lp("/#patents") },
    { label: salesPartnerLabel, href: salesPartnerHref },
    { label: t("nav.blog"), href: lp("/blog") },
    { label: t("nav.investors"), href: lp("/invest") },
  ];

  const isSalesPartner = (href: string) => href === salesPartnerHref;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href={lp("/")} className="flex items-center gap-3 flex-shrink-0">
            <span className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-[0.25em]">
              Ravolution
            </span>
          </a>

          {/* Desktop Navigation — only at lg+ to avoid overflow at narrow widths */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors whitespace-nowrap ${
                  isSalesPartner(link.href)
                    ? "text-gold hover:text-gold/80"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
              <a href="#contact">{t("nav.contact")}</a>
            </Button>
            <Button className="bg-accent hover:bg-accent-light text-white" asChild>
              <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                {t("nav.licensingInquiry")}
              </a>
            </Button>
          </div>

          {/* Mobile/Tablet: Language Switcher + Menu Toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation — scrollable so all items reachable */}
        {isOpen && (
          <div
            className="lg:hidden py-4 border-t border-white/10 animate-fade-in overflow-y-auto overscroll-contain"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            <div className="flex flex-col gap-4 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium py-2 ${
                    isSalesPartner(link.href)
                      ? "text-gold hover:text-gold/80"
                      : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <div className="py-2">
                  <LanguageSwitcher />
                </div>
                <Button variant="ghost" className="text-white hover:bg-white/10 justify-start" asChild>
                  <a href="#contact">{t("nav.contact")}</a>
                </Button>
                <Button className="bg-accent hover:bg-accent-light text-white" asChild>
                  <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                    {t("nav.licensingInquiry")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
