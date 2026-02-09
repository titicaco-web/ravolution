import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { en } from "./translations/en";
import { sv } from "./translations/sv";
import { es } from "./translations/es";

export type Language = "en" | "sv" | "es";

const translations = { en, sv, es } as const;

type TranslationKeys = typeof en;

type NestedKeyOf<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? NestedKeyOf<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

type TranslationKey = NestedKeyOf<TranslationKeys>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string): any {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return path;
    current = current[key];
  }
  if (current === undefined || current === null) return path;
  return current;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("site-language");
    if (stored === "sv" || stored === "es" || stored === "en") return stored;
    return "en";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("site-language", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[language], key);
      if (value === key) {
        // Fallback to English
        return getNestedValue(translations.en, key);
      }
      return value;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
