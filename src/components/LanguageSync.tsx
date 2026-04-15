import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/i18n/LanguageContext";

const validLangs: Language[] = ["en", "sv", "es"];

const LanguageSync = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Try :lang param first, then fall back to first path segment
    const detectedLang = lang || location.pathname.split("/")[1];
    if (detectedLang && validLangs.includes(detectedLang as Language) && detectedLang !== language) {
      setLanguage(detectedLang as Language);
    }
  }, [lang, location.pathname, language, setLanguage]);

  return <>{children}</>;
};

export default LanguageSync;
