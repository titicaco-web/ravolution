import { useEffect, useRef, useState } from "react";

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
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-bold text-primary">
        {count}{suffix}
      </span>
      <span className="text-sm text-foreground/70 mt-2 font-medium">{label}</span>
    </div>
  );
};

const CredentialCounter = () => {
  const stats = [
    { end: 27, label: "Patents Filed" },
    { end: 343, label: "Patent Claims" },
    { end: 10, suffix: "+", label: "Platforms Built & Live" },
    { end: 6, label: "Industries Covered" },
    { end: 150, suffix: "+", label: "Countries Reached" },
  ];

  return (
    <section className="py-12 px-6 bg-secondary border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <CounterItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialCounter;
