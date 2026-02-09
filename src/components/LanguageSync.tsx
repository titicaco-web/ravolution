import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguage, Language } from "@/i18n/LanguageContext";

const validLangs: Language[] = ["en", "sv", "es"];

const LanguageSync = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (lang && validLangs.includes(lang as Language) && lang !== language) {
      setLanguage(lang as Language);
    }
  }, [lang, language, setLanguage]);

  return <>{children}</>;
};

export default LanguageSync;
