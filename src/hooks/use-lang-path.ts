import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Returns a function that prefixes paths with the current language.
 * Usage: const lp = useLangPath(); lp("/founder") => "/en/founder"
 */
export const useLangPath = () => {
  const { language } = useLanguage();
  return (path: string) => {
    if (path.startsWith("http") || path.startsWith("#") || path.startsWith("mailto:")) return path;
    // Handle hash paths like "/#patents"
    if (path.startsWith("/#")) return `/${language}${path.slice(1)}`;
    if (path === "/") return `/${language}`;
    // Handle paths with hash like "/gyrocraft/licensing#specs"
    const [pathname, hash] = path.split("#");
    const prefixed = `/${language}${pathname}`;
    return hash ? `${prefixed}#${hash}` : prefixed;
  };
};
