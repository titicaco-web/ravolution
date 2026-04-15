import { Clock } from "lucide-react";
import { ScrollAnimateWrapper } from "@/hooks/use-scroll-animation";

const cases = [
  {
    clientType: "Nordic SaaS Startup",
    challenge: "Fragmented recruitment process with zero IP protection. Competitors could replicate the matching algorithm.",
    built: "Full multi-role recruitment platform with AI matching engine, admin dashboards, real-time transparency layer — plus 3 provisional patent filings.",
    result: "Platform live in 10 weeks · 3 patents filed · 40% valuation increase",
    time: "10 weeks",
  },
  {
    clientType: "International Education Organization",
    challenge: "Needed to benchmark students across national curricula and align with UN Sustainable Development Goals. No existing platform could handle the complexity.",
    built: "Cross-national education platform with 9 patented technologies, role-based access for teachers/parents/students, and institutional-grade assessment engine.",
    result: "9 patents · 116 claims · Multi-country pilot launched",
    time: "6 months",
  },
  {
    clientType: "B2B Trade Company, Nordics",
    challenge: "Manual export-import documentation. Sales team spending 60% of time on compliance instead of selling.",
    built: "AI-powered trade matching platform with automated compliance workflows, partner discovery across 150+ countries, and integrated messaging.",
    result: "3× faster order processing · 150+ country coverage · Automated compliance",
    time: "MVP in 8 weeks",
  },
];

const MiniCaseStudies = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Builds Look Like</h2>
          <p className="text-muted-foreground text-lg">Real problems. Real solutions. Measurable outcomes.</p>
        </div>
        <div className="space-y-6">
          {cases.map((c, i) => (
            <ScrollAnimateWrapper key={i} delay={i * 0.15}>
              <div className="rounded-2xl bg-card border border-border p-6 md:p-8 border-l-4 border-l-primary">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">{c.clientType}</span>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">What we built</h4>
                    <p className="text-sm text-muted-foreground">{c.built}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="inline-block text-sm font-semibold bg-primary/10 text-primary px-4 py-2 rounded-full">
                      {c.result}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" /> {c.time}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniCaseStudies;
