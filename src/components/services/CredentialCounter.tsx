import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface CounterItemProps {
  end: number;
  suffix?: string;
  label: string;
}

const CounterItem = ({ end, suffix = "", label }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="edit-display text-white text-4xl md:text-6xl">
        {count}{suffix}
      </span>
      <span className="edit-label text-white/45 mt-3">{label}</span>
    </div>
  );
};

const CredentialCounter = () => {
  const { t } = useLanguage();

  const stats = [
    { end: 27, label: t("credentials.patentsFiled") },
    { end: 343, label: t("credentials.patentClaims") },
    { end: 10, suffix: "+", label: t("credentials.platformsBuilt") },
    { end: 6, label: t("credentials.industriesCovered") },
    { end: 150, suffix: "+", label: t("credentials.countriesReached") },
  ];

  return (
    <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
      <div className="edit-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[hsl(var(--surface))] p-8">
              <CounterItem {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialCounter;
