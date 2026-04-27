import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, Languages, Globe, Dog, Heart, ShieldAlert, Droplets, Home, Calendar, Gift, ExternalLink, Newspaper, PartyPopper, Handshake, Leaf } from "lucide-react";
import { useLangPath } from "@/hooks/use-lang-path";

type Item = {
  name: string;
  icon: typeof Briefcase;
  href: string;
  external?: boolean;
};

const InvestorPortfolioMarquee = ({ transparent = false }: { transparent?: boolean } = {}) => {
  const lp = useLangPath();
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;

    if (!track || !firstGroup) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const speed = mediaQuery.matches ? 12 : 55;
    let frameId = 0;
    let lastTime = 0;
    let offset = 0;
    let groupWidth = firstGroup.getBoundingClientRect().width;

    const resizeObserver = new ResizeObserver(() => {
      groupWidth = firstGroup.getBoundingClientRect().width;
    });

    resizeObserver.observe(firstGroup);

    const tick = (time: number) => {
      if (!groupWidth) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      offset -= (speed * delta) / 1000;

      if (Math.abs(offset) >= groupWidth) {
        offset += groupWidth;
      }

      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const items: Item[] = [
    { name: "NewsToast™", icon: Newspaper, href: lp("/#concepts") },
    { name: "BizMeet™", icon: Handshake, href: "https://bizmeetbyc.se/", external: true },
    { name: "Partysta™", icon: PartyPopper, href: lp("/#concepts") },
    { name: "iApply.se", icon: Briefcase, href: "https://iapply.se", external: true },
    { name: "CarbonX™", icon: Leaf, href: "https://carbonx.se/", external: true },
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

  const renderGroup = (groupProps?: { ref?: React.Ref<HTMLDivElement>; ariaHidden?: boolean }) => (
    <div
      ref={groupProps?.ref}
      aria-hidden={groupProps?.ariaHidden}
      className="flex items-center gap-8 py-4 whitespace-nowrap pr-8"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const linkProps = item.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <a
            key={`${groupProps?.ariaHidden ? "clone" : "main"}-${item.name}`}
            href={item.href}
            {...linkProps}
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 hover:text-accent-light transition-colors shrink-0"
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
  );

  return (
    <section
      aria-label="Portfolio projects"
      className="relative border-y border-white/10 bg-primary/95 overflow-hidden"
    >
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex w-max items-center will-change-transform">
          {renderGroup({ ref: firstGroupRef })}
          {renderGroup({ ariaHidden: true })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent" />
    </section>
  );
};

export default InvestorPortfolioMarquee;
