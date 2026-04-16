import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Languages, Globe, Dog, Heart, ShieldAlert, Droplets, Home, Calendar, Gift, ExternalLink } from "lucide-react";
import { useLangPath } from "@/hooks/use-lang-path";

type Item = {
  name: string;
  icon: typeof Briefcase;
  href: string;
  external?: boolean;
};

const InvestorPortfolioMarquee = () => {
  const lp = useLangPath();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    let frameId = 0;
    let lastTime = 0;
    const speed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 8 : 18;

    const tick = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      node.scrollLeft += (speed * delta) / 1000;
      const loopWidth = node.scrollWidth / 2;

      if (node.scrollLeft >= loopWidth) {
        node.scrollLeft -= loopWidth;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const items: Item[] = [
    { name: "iApply.se", icon: Briefcase, href: "https://iapply.se", external: true },
    { name: "CommunicaringSchool™", icon: GraduationCap, href: lp("/#products") },
    { name: "Rosetta Livingstone™", icon: Languages, href: lp("/#products") },
    { name: "xPortMatch™", icon: Globe, href: lp("/#products") },
    { name: "Eventor™", icon: Calendar, href: lp("/#concepts") },
    { name: "Givin™", icon: Gift, href: lp("/#concepts") },
    { name: "Hundelser.se", icon: Dog, href: "https://hundelser.se/", external: true },
    { name: "NäraVän.se", icon: Heart, href: "https://xn--nravn-grad.se/", external: true },
    { name: "Beredskapad.se", icon: ShieldAlert, href: "https://beredskapad.se/", external: true },
    { name: "EndOfThirst.com", icon: Droplets, href: "https://endofthirst.com/", external: true },
    { name: "VillaSpar.se", icon: Home, href: "https://villaspar.se/", external: true },
    { name: "NordicFreelance.se", icon: Briefcase, href: "https://nordicfreelance.se/", external: true },
  ];

  const loop = [...items, ...items];

  return (
    <section
      aria-label="Portfolio projects"
      className="relative border-y border-white/10 bg-primary/95 overflow-hidden"
    >
      <div ref={scrollRef} className="overflow-hidden">
        <div className="flex w-max items-center gap-8 py-4 whitespace-nowrap">
          {loop.map((item, i) => {
            const Icon = item.icon;
            const linkProps = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <a
                key={`${item.name}-${i}`}
                href={item.href}
                {...linkProps}
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-accent-light transition-colors shrink-0 pr-8"
              >
                <Icon className="w-4 h-4 text-accent" />
                <span>{item.name}</span>
                {item.external && (
                  <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-accent-light transition-colors" />
                )}
                <span className="text-white/20 ml-6" aria-hidden="true">•</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent" />
    </section>
  );
};

export default InvestorPortfolioMarquee;
