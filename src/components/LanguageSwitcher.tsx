import { useLanguage, Language } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "sv", label: "SV", flag: "🇸🇪" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = languages.find((l) => l.code === language)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm font-medium px-2 py-1 rounded-md hover:bg-white/10"
      >
        <Globe className="w-4 h-4" />
        <span>{current.flag} {current.label}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-primary border border-white/20 rounded-lg shadow-xl overflow-hidden z-50 min-w-[100px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                lang.code === language ? "bg-white/20 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
