import { useLangPath } from "@/hooks/use-lang-path";
import { useLanguage } from "@/i18n/LanguageContext";

const COPY = {
  en: { before: "Every venture we build runs on ", link: "TheCreator, our Founder Operating System", after: " — open to all founders from 0 SEK." },
  sv: { before: "Varje företag vi bygger drivs i ", link: "TheCreator, vårt operativsystem för grundare", after: " — öppet för alla grundare från 0 SEK." },
  es: { before: "Cada empresa que construimos funciona en ", link: "TheCreator, nuestro sistema operativo del fundador", after: " — abierto a todos los fundadores desde 0 SEK." },
} as const;

/** One natural internal-link sentence pointing to /{lang}/thecreator. */
export default function TheCreatorMention({ className = "", linkClassName = "underline underline-offset-4" }: { className?: string; linkClassName?: string }) {
  const { language } = useLanguage();
  const lp = useLangPath();
  const c = COPY[(language in COPY ? language : "en") as keyof typeof COPY];
  return (
    <p className={className}>
      {c.before}
      <a href={lp("/thecreator")} className={linkClassName}>{c.link}</a>
      {c.after}
    </p>
  );
}
