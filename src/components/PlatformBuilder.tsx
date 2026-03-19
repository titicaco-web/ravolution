import { useState, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ChevronDown, ChevronUp, Send, CalendarDays, X, Loader2,
  ArrowRight, SkipForward, CheckCircle2, Building2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

/* ───────────────────── Industry data ───────────────────── */

interface IndustryPanel {
  id: string;
  name: string;
  subtitle: string;
  functions: string[];
  addons?: string[];
}

const industries: IndustryPanel[] = [
  {
    id: "healthtech",
    name: "HealthTech",
    subtitle: "Typical functions for healthcare platforms",
    functions: [
      "Patient portal",
      "Booking & scheduling",
      "EHR / EMR integrations",
      "Secure messaging (HIPAA/GDPR)",
      "Consent & GDPR management",
      "Billing & insurance claims",
      "Admin dashboard",
      "Telehealth / video consultations",
      "Lab results & reporting",
      "Prescription management",
    ],
    addons: ["AI triage / symptom checker", "Wearable device integration"],
  },
  {
    id: "automotive",
    name: "Car Dealers / Automotive",
    subtitle: "Typical functions for automotive platforms",
    functions: [
      "Inventory management",
      "Vehicle listings & search",
      "Lead capture & CRM",
      "Financing & loan forms",
      "Dealer portal",
      "Test drive booking",
      "Marketplace (multi-dealer)",
      "Trade-in valuation",
      "Service booking",
      "Customer notifications",
    ],
    addons: ["AI pricing recommendations", "Vehicle history integrations"],
  },
  {
    id: "retail",
    name: "Retail / E-commerce",
    subtitle: "Typical functions for retail platforms",
    functions: [
      "Product catalog & categories",
      "Checkout & payment gateway",
      "Subscriptions & recurring billing",
      "Promotions & discount engine",
      "Inventory management",
      "Returns & refund processing",
      "Customer dashboard & order history",
      "Analytics & conversion tracking",
      "Wishlist & recommendations",
      "Multi-warehouse logistics",
    ],
    addons: ["AI product recommendations", "Loyalty program"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    subtitle: "Typical functions for property platforms",
    functions: [
      "Property listings & search",
      "Lead capture & CRM pipeline",
      "Document signing (e-sign)",
      "Tenant / owner portals",
      "Viewing & booking calendar",
      "Payment processing & rent collection",
      "Reporting & analytics",
      "Agent management & assignments",
      "Map & geolocation search",
      "Mortgage calculator",
    ],
    addons: ["AI property valuation", "Virtual tour integration"],
  },
  {
    id: "education",
    name: "Education (General)",
    subtitle: "Typical functions for education platforms",
    functions: [
      "LMS / learning management",
      "Course builder & curriculum",
      "Quizzes & assessments",
      "Certificates & credentials",
      "Cohorts & class management",
      "Video & live sessions (Zoom/Meet)",
      "Progress dashboard",
      "Admin backoffice",
      "Student enrollment & onboarding",
      "Homework & assignment submission",
    ],
    addons: ["AI tutoring assistant", "Plagiarism detection"],
  },
  {
    id: "language-learning",
    name: "Language Learning",
    subtitle: "Typical functions for language platforms",
    functions: [
      "Lesson engine & curriculum",
      "Spaced repetition system",
      "Speech recognition & voice practice",
      "Content authoring tools",
      "User levels & skill tracking",
      "Subscriptions & billing",
      "Teacher dashboard",
      "Gamification & streaks",
      "Progress analytics",
      "Community & conversation practice",
    ],
    addons: ["AI conversation partner", "Pronunciation scoring"],
  },
  {
    id: "export-trade",
    name: "Export / Trade / B2B Matchmaking",
    subtitle: "Typical functions for trade platforms",
    functions: [
      "Company profiles & verification",
      "Intelligent matching algorithm",
      "Deal room / negotiation space",
      "Messaging & communication",
      "Partner portal",
      "Compliance document management",
      "Analytics & trade intelligence",
      "RFQ / RFP management",
      "Shipping & logistics tracking",
      "Multi-currency support",
    ],
    addons: ["AI-powered matching", "Trade finance integration"],
  },
  {
    id: "recruitment",
    name: "Recruitment / HR / Applications",
    subtitle: "Typical functions for hiring platforms (iApply-style)",
    functions: [
      "Applicant tracking system (ATS)",
      "Job posting & distribution",
      "Matching & scoring engine",
      "Interview scheduling",
      "References & verification flow",
      "Employer dashboard",
      "Candidate portal & profiles",
      "Assessment & screening tools",
      "Onboarding workflow",
      "Reporting & compliance",
    ],
    addons: ["AI resume parsing", "Video interview integration"],
  },
  {
    id: "saas-b2b",
    name: "SaaS / B2B Platforms",
    subtitle: "Typical functions for multi-tenant SaaS",
    functions: [
      "Multi-tenant organizations",
      "Roles & permissions (RBAC)",
      "Admin backoffice",
      "Billing & subscription management",
      "Third-party integrations (API)",
      "Audit logs & compliance",
      "Analytics & usage dashboards",
      "Onboarding & setup wizard",
      "Webhooks & event system",
      "White-labeling support",
    ],
    addons: ["AI-powered insights", "Custom workflow builder"],
  },
  {
    id: "marketplaces",
    name: "Marketplaces (Generic)",
    subtitle: "Typical functions for two-sided marketplaces",
    functions: [
      "Multi-vendor onboarding",
      "Product / service catalog",
      "Search & discovery",
      "Escrow & payment splitting",
      "Disputes & resolution",
      "Ratings & reviews",
      "Vendor dashboard",
      "Buyer dashboard",
      "Commission & fee management",
      "Reporting & analytics",
    ],
    addons: ["AI recommendations", "Fraud detection"],
  },
];

const crossIndustryAddons = [
  "CRM integration",
  "Custom dashboards",
  "AI features (summarization, scoring, generation)",
  "API integrations & webhooks",
  "Analytics & reporting",
  "CMS (pages, blog, content)",
  "Notifications (email / SMS / push)",
  "Multi-language (i18n)",
  "Security hardening & 2FA",
  "Audit logging",
  "GDPR compliance tools",
  "Payment & subscription management",
];

/* ───────────────────── Helpers ───────────────────── */

function getComplexity(count: number) {
  if (count <= 8) return { label: "Small", band: "4–8 weeks", color: "text-accent" };
  if (count <= 20) return { label: "Medium", band: "8–16 weeks", color: "text-gold" };
  return { label: "Large", band: "16–28 weeks", color: "text-destructive" };
}

/* ───────────────────── Component ───────────────────── */

const PlatformBuilder = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);

  // Selections: industryId → Set of selected functions
  const [selections, setSelections] = useState<Record<string, Set<string>>>({});
  const [addonSelections, setAddonSelections] = useState<Set<string>>(new Set());
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);
  const [notSure, setNotSure] = useState(false);

  // Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [launch, setLaunch] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Derived
  const totalSelected = useMemo(() => {
    let count = 0;
    Object.values(selections).forEach((s) => (count += s.size));
    count += addonSelections.size;
    return count;
  }, [selections, addonSelections]);

  const selectedIndustries = useMemo(
    () => industries.filter((ind) => selections[ind.id]?.size > 0),
    [selections]
  );

  const complexity = useMemo(() => getComplexity(totalSelected), [totalSelected]);

  const toggleFunction = (industryId: string, fn: string) => {
    setSelections((prev) => {
      const next = { ...prev };
      const set = new Set(next[industryId] || []);
      if (set.has(fn)) set.delete(fn);
      else set.add(fn);
      if (set.size === 0) delete next[industryId];
      else next[industryId] = set;
      return next;
    });
  };

  const toggleAddon = (addon: string) => {
    setAddonSelections((prev) => {
      const next = new Set(prev);
      if (next.has(addon)) next.delete(addon);
      else next.add(addon);
      return next;
    });
  };

  const goToNextPanel = (currentId: string) => {
    const allPanels = [...industries.map((i) => i.id), "cross-industry"];
    const idx = allPanels.indexOf(currentId);
    if (idx < allPanels.length - 1) {
      setExpandedPanel(allPanels[idx + 1]);
    } else {
      // Last panel → scroll to form
      setExpandedPanel(null);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({ title: "Missing fields", description: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    if (totalSelected === 0 && !notSure) {
      toast({ title: "No functions selected", description: "Select at least one function or check 'Not sure yet'.", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      // Build structured payload
      const industriesPayload = Object.entries(selections).map(([id, fns]) => ({
        industry: industries.find((i) => i.id === id)?.name || id,
        functions: Array.from(fns),
      }));

      const { error } = await supabase.functions.invoke("send-platform-spec", {
        body: {
          name,
          email,
          company,
          budget,
          launch,
          idea: notes,
          industries: industriesPayload,
          addons: Array.from(addonSelections),
          notSure,
          // Legacy compat: flatten components
          components: [
            ...Object.values(selections).flatMap((s) => Array.from(s)),
            ...Array.from(addonSelections),
          ],
        },
      });
      if (error) throw error;
      toast({ title: "Spec sent!", description: "We'll review your configuration and get back within 48 hours." });
      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      toast({ title: "Failed to send", description: "Something went wrong. Please try again or book a call instead.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Spec received!</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We'll review your platform configuration and get back to you within 48 hours with a detailed scope proposal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => setSubmitted(false)} variant="outline">Configure another platform</Button>
          <Button className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
            <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
              <CalendarDays className="w-4 h-4 mr-2" /> Book discovery call now
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Left: Accordion wizard ── */}
        <div className="lg:col-span-2 space-y-3">
          <p className="text-sm text-muted-foreground mb-4">
            Open an industry panel, select the functions you need, then move to the next. Skip any industry that doesn't apply.
          </p>

          {/* Industry panels – SEO: all content rendered in DOM */}
          {industries.map((ind, idx) => {
            const isExpanded = expandedPanel === ind.id;
            const selected = selections[ind.id] || new Set();
            const selectedCount = selected.size;

            return (
              <section
                key={ind.id}
                id={ind.id}
                className="border border-border rounded-xl overflow-hidden scroll-mt-24"
                aria-label={ind.name}
              >
                <button
                  type="button"
                  onClick={() => setExpandedPanel(isExpanded ? null : ind.id)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="font-semibold text-foreground flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    {ind.name}
                    {selectedCount > 0 && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        {selectedCount} selected
                      </span>
                    )}
                  </span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </button>

                {/* SEO: always render content in DOM; visually toggle */}
                <div className={isExpanded ? "px-5 py-4 bg-background" : "sr-only"}>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">{ind.subtitle}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {ind.functions.map((fn) => (
                      <label key={fn} className="flex items-start gap-3 cursor-pointer group/item py-1">
                        <Checkbox
                          checked={selected.has(fn)}
                          onCheckedChange={() => toggleFunction(ind.id, fn)}
                          className="mt-0.5"
                        />
                        <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">{fn}</span>
                      </label>
                    ))}
                  </div>

                  {ind.addons && ind.addons.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recommended add-ons</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ind.addons.map((fn) => (
                          <label key={fn} className="flex items-start gap-3 cursor-pointer group/item py-1">
                            <Checkbox
                              checked={selected.has(fn)}
                              onCheckedChange={() => toggleFunction(ind.id, fn)}
                              className="mt-0.5"
                            />
                            <span className="text-sm text-accent/80 group-hover/item:text-accent transition-colors">{fn}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 mt-4">
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => goToNextPanel(ind.id)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {idx < industries.length - 1 ? "Next industry" : "Continue to add-ons"} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => goToNextPanel(ind.id)}
                    >
                      <SkipForward className="w-4 h-4 mr-1" /> Skip
                    </Button>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Cross-industry add-ons */}
          <section
            id="cross-industry"
            className="border border-border rounded-xl overflow-hidden scroll-mt-24"
            aria-label="Cross-industry add-ons"
          >
            <button
              type="button"
              onClick={() => setExpandedPanel(expandedPanel === "cross-industry" ? null : "cross-industry")}
              className="w-full flex items-center justify-between px-5 py-4 bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <span className="font-semibold text-foreground flex items-center gap-3">
                <Building2 className="w-5 h-5 text-accent" />
                Cross-Industry Add-Ons
                {addonSelections.size > 0 && (
                  <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                    {addonSelections.size} selected
                  </span>
                )}
              </span>
              {expandedPanel === "cross-industry" ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
            </button>

            <div className={expandedPanel === "cross-industry" ? "px-5 py-4 bg-background" : "sr-only"}>
              <p className="text-sm text-muted-foreground mb-3 font-medium">Common capabilities that apply across all industries</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {crossIndustryAddons.map((addon) => (
                  <label key={addon} className="flex items-start gap-3 cursor-pointer group/item py-1">
                    <Checkbox
                      checked={addonSelections.has(addon)}
                      onCheckedChange={() => toggleAddon(addon)}
                      className="mt-0.5"
                    />
                    <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">{addon}</span>
                  </label>
                ))}
              </div>

              <Button
                type="button"
                size="sm"
                onClick={() => {
                  setExpandedPanel(null);
                  formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Continue to details <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </section>

          {/* Not sure checkbox */}
          <div className="flex items-center gap-3 px-2 pt-2">
            <Checkbox checked={notSure} onCheckedChange={(v) => setNotSure(!!v)} id="not-sure" />
            <Label htmlFor="not-sure" className="text-sm text-muted-foreground cursor-pointer">
              Not sure yet — I'd like guidance on what I need
            </Label>
          </div>

          {/* Contact form */}
          <div ref={formRef} className="card-elevated mt-6 scroll-mt-24">
            <h3 className="font-bold text-foreground text-lg mb-4">Your details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="pb-name">Name *</Label>
                <Input id="pb-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="pb-email">Email *</Label>
                <Input id="pb-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" maxLength={255} />
              </div>
              <div>
                <Label htmlFor="pb-company">Company (optional)</Label>
                <Input id="pb-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company name" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="pb-budget">Budget range (optional)</Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger id="pb-budget"><SelectValue placeholder="Select range" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<50k">Under €50K</SelectItem>
                    <SelectItem value="50-100k">€50K – €100K</SelectItem>
                    <SelectItem value="100-250k">€100K – €250K</SelectItem>
                    <SelectItem value="250k+">€250K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="pb-launch">Desired launch</Label>
                <Select value={launch} onValueChange={setLaunch}>
                  <SelectTrigger id="pb-launch"><SelectValue placeholder="Select timeline" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-4w">0–4 weeks</SelectItem>
                    <SelectItem value="1-3m">1–3 months</SelectItem>
                    <SelectItem value="3-6m">3–6 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="pb-notes">Notes (optional)</Label>
              <Textarea
                id="pb-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What problem does your platform solve? Who are the users? Any other context."
                maxLength={2000}
                rows={3}
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* ── Right: Sticky summary ── */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="card-elevated border-2 border-primary/20">
              <h3 className="font-bold text-foreground text-lg mb-4">Scope summary</h3>

              {totalSelected === 0 && !notSure ? (
                <p className="text-sm text-muted-foreground italic">Select industry functions to see your scope estimate.</p>
              ) : (
                <>
                  {/* Selected industries */}
                  {selectedIndustries.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Industries</p>
                      {selectedIndustries.map((ind) => (
                        <div key={ind.id} className="mb-2">
                          <p className="text-sm font-semibold text-foreground">{ind.name}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {Array.from(selections[ind.id] || []).map((fn) => (
                              <span
                                key={fn}
                                className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-md cursor-pointer hover:bg-primary/20 transition-colors"
                                onClick={() => toggleFunction(ind.id, fn)}
                              >
                                {fn.length > 30 ? fn.slice(0, 28) + "…" : fn}
                                <X className="w-3 h-3" />
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add-ons */}
                  {addonSelections.size > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Add-ons</p>
                      <div className="flex flex-wrap gap-1">
                        {Array.from(addonSelections).map((addon) => (
                          <span
                            key={addon}
                            className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-md cursor-pointer hover:bg-accent/20 transition-colors"
                            onClick={() => toggleAddon(addon)}
                          >
                            {addon.length > 30 ? addon.slice(0, 28) + "…" : addon}
                            <X className="w-3 h-3" />
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {notSure && (
                    <p className="text-sm text-accent italic mb-4">
                      <CheckCircle2 className="w-4 h-4 inline mr-1" />
                      You'll get guidance during discovery
                    </p>
                  )}

                  {/* Stats */}
                  <div className="space-y-3 mb-6 pt-3 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Functions selected</span>
                      <span className="font-semibold text-foreground">{totalSelected}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Complexity</span>
                      <span className={`font-semibold ${complexity.color}`}>{complexity.label}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated delivery</span>
                      <span className="font-semibold text-foreground">{complexity.band}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground italic mb-4">Final scope confirmed in discovery call.</p>
                </>
              )}

              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white"
                  disabled={(totalSelected === 0 && !notSure) || sending}
                >
                  {sending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {sending ? "Sending…" : "Send requirements"}
                </Button>
                <Button type="button" variant="outline" className="w-full" asChild>
                  <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Book discovery call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlatformBuilder;
