import { Mail, Search, ClipboardList, Handshake, Hammer, Rocket } from "lucide-react";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Mail,
    title: "Your Brief Arrives",
    subtitle: "Within minutes",
    body: "Your brief lands on our team's WhatsApp. Ivan personally reads every submission — no bots, no ticket queues.",
  },
  {
    icon: Search,
    title: "We Analyse & Scope",
    subtitle: "0–48 hours",
    body: "We review your brief, research your market, check feasibility, and draft a response. If you included files or a business plan, we read everything.",
  },
  {
    icon: ClipboardList,
    title: "You Receive a Response",
    subtitle: "Within 48 hours",
    body: "You get one of three things back: a cost estimate + platform description, a clickable mockup, or clarifying questions — if we need more detail before scoping.",
  },
  {
    icon: Handshake,
    title: "Alignment Call",
    subtitle: "30 min",
    body: "We hop on a 30-minute video call to walk through the scope together. We refine, adjust, lock the plan. No surprises.",
  },
  {
    icon: Hammer,
    title: "We Build",
    subtitle: "Weeks 1–12",
    body: "Sprint-based delivery with weekly demos. You see progress every week — not a big reveal at the end. We use React, Supabase, and the best stack for your project.",
  },
  {
    icon: Rocket,
    title: "Launch + Support",
    subtitle: "",
    body: "We launch together, monitor performance, and provide ongoing support. Retainer available for continuous development.",
  },
];

const HowWeWorkTimeline = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Happens After You Submit</h2>
          <p className="text-muted-foreground text-lg">No black boxes. Here's exactly what to expect.</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollAnimateWrapper key={i} delay={i * 0.2}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Connector dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 top-5 z-10 ring-4 ring-background" />

                    {/* Spacer for mobile */}
                    <div className="w-12 shrink-0 md:hidden" />

                    {/* Card */}
                    <div className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="rounded-2xl border border-border bg-card p-5">
                        <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <step.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-base">{step.title}</h3>
                            {step.subtitle && (
                              <span className="text-xs text-muted-foreground">{step.subtitle}</span>
                            )}
                          </div>
                        </div>
                        <p className={`text-sm text-muted-foreground leading-relaxed ${isLeft ? "md:text-right" : ""}`}>{step.body}</p>
                      </div>
                    </div>

                    {/* Other side spacer on desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollAnimateWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTimeline;
