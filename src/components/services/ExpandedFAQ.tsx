import { Link } from "react-router-dom";
import { useLangPath } from "@/hooks/use-lang-path";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What happens to the files and information I upload?",
    a: "Everything you submit is reviewed exclusively by our team. We never share your files or project details with third parties. If you need formal confidentiality, we sign an NDA before we review anything — just mention it in your brief.",
  },
  {
    q: "Do I need a finished idea to submit a brief?",
    a: "Not at all. Some of our best projects started as a rough concept or a problem statement. Submit what you have — even if it's just a paragraph describing your challenge. We'll help shape it into a buildable scope.",
  },
  {
    q: "How quickly do you respond?",
    a: "Within 48 hours, guaranteed. Most briefs get a first response within 24 hours. You'll receive either a cost estimate with platform description, a clickable mockup, or a short list of clarifying questions.",
  },
  {
    q: "Who owns the IP and code you build?",
    a: "You do. 100% ownership of all code, designs, and documentation transfers to you on delivery. If we file patents together, ownership structure is agreed upfront — typically you own the patents, we may retain a license if working on an equity basis.",
  },
  {
    q: "Can I build with equity instead of cash?",
    a: "Yes. We offer a Build-for-Equity model for pre-seed to seed founders with validated concepts. We invest our engineering, design, and patent strategy in exchange for equity.",
    hasLink: true,
  },
  {
    q: "What does a typical project cost?",
    a: "Depends on scope. Sprint projects (4–12 weeks) typically range €8,000–€40,000. Complex multi-module platforms (3–9 months) range €30,000–€120,000. We give you an honest number in our 48-hour response — no hidden fees, no scope creep without approval.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, immediately on request. Just mention it in your brief or email us at ivan.daza@ravolution.se and we'll send one before reviewing any materials.",
  },
  {
    q: "Can you work with my existing codebase or platform?",
    a: "Absolutely. We regularly take over, audit, and improve existing platforms. We stabilize first, then iterate. No need to start from scratch.",
  },
  {
    q: "What tech stack do you use?",
    a: "We pick the best tools for each project. Our core stack is React, TypeScript, Node.js, Supabase, and Tailwind — but we also work with Python, PostgreSQL, Stripe, OpenAI APIs, and more. No vendor lock-in.",
  },
  {
    q: "Where are you based?",
    a: "Stockholm, Sweden — but we work with clients globally. Our team communicates in English, Swedish, and Spanish. Remote-first, timezone-flexible.",
  },
];

const ExpandedFAQ = () => {
  const lp = useLangPath();

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-foreground text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
                {faq.hasLink && (
                  <>
                    {" "}
                    <Link to={lp("/angel-investor")} className="text-primary hover:text-accent font-medium underline underline-offset-2">
                      Learn more about our equity model →
                    </Link>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ExpandedFAQ;
