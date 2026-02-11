import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronUp, Send, CalendarDays, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ComponentGroup {
  name: string;
  items: string[];
}

const componentGroups: ComponentGroup[] = [
  {
    name: "Product & Users",
    items: [
      "Authentication & roles (admin, staff, customer, partner)",
      "User profiles & onboarding",
      "Team / organization accounts (B2B)",
      "Permissions (RBAC)",
    ],
  },
  {
    name: "Dashboards & Portals",
    items: [
      "Client dashboard / portal",
      "Admin backoffice",
      "Partner portal (affiliates, suppliers, schools, recruiters)",
    ],
  },
  {
    name: "Commerce & Payments",
    items: [
      "E-commerce catalog (products / services)",
      "Checkout & payment provider (Stripe / Adyen)",
      "Subscriptions & billing",
      "Invoicing & receipts",
      "Marketplace (multi-vendor)",
    ],
  },
  {
    name: "CRM & Sales",
    items: [
      "CRM (leads, pipeline, activities)",
      "Messaging & email sequences",
      "Booking / scheduling (calendar)",
      "Proposal / contract flow (e-sign)",
    ],
  },
  {
    name: "Education (CommunicaringSchool-style)",
    items: [
      "LMS / course builder",
      "Assessments & quizzes",
      "Certificates / credentials",
      "Cohorts, homework, progress tracking",
      "Video + live sessions (Zoom / Meet integration)",
    ],
  },
  {
    name: "Recruitment / Applications (iApply-style)",
    items: [
      "Applicant tracking (ATS-lite)",
      "Job posting + application forms",
      "Matching / scoring",
      "References & verification flow",
      "Interview scheduling",
    ],
  },
  {
    name: "Content & Community",
    items: [
      "CMS (pages, blog)",
      "Community (groups, comments)",
      "Notifications (email / SMS / push)",
      "Multi-language (i18n)",
    ],
  },
  {
    name: "Data & AI",
    items: [
      "Analytics dashboard (events, funnels)",
      "Search (full-text)",
      "Recommendations / matching (AI)",
      "Document generation (PDF)",
      "Integrations (Zapier / Make, APIs, webhooks)",
    ],
  },
  {
    name: "Trust, Compliance & Operations",
    items: [
      "GDPR tooling (consent, export / delete)",
      "Audit log",
      "Security hardening (2FA, rate limiting)",
      "Support (helpdesk widget, ticketing)",
      "Hosting / monitoring (SLA-ready)",
    ],
  },
];

function getComplexity(count: number) {
  if (count <= 6) return { label: "Small", band: "4–8 weeks", color: "text-accent" };
  if (count <= 14) return { label: "Medium", band: "8–16 weeks", color: "text-gold" };
  return { label: "Large", band: "16–28 weeks", color: "text-destructive" };
}

const PlatformBuilder = () => {
  const { toast } = useToast();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(componentGroups.map((g) => g.name)));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [launch, setLaunch] = useState("");
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const complexity = useMemo(() => getComplexity(selected.size), [selected.size]);

  const toggleItem = (item: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupName)) next.delete(groupName);
      else next.add(groupName);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({ title: "Missing fields", description: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    if (selected.size === 0) {
      toast({ title: "No components selected", description: "Please select at least one component.", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-platform-spec", {
        body: { name, email, company, budget, launch, idea, components: Array.from(selected) },
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
        <Button onClick={() => setSubmitted(false)} variant="outline">Configure another platform</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="builder">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Form + Checkboxes */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact info */}
          <div className="card-elevated">
            <h3 className="font-bold text-foreground text-lg mb-4">Your details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="pb-name">Name *</Label>
                <Input id="pb-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="pb-email">Email *</Label>
                <Input id="pb-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" maxLength={255} />
              </div>
              <div>
                <Label htmlFor="pb-company">Company</Label>
                <Input id="pb-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company name" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="pb-budget">Budget band (optional)</Label>
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
                    <SelectItem value="0-3">0–3 months</SelectItem>
                    <SelectItem value="3-6">3–6 months</SelectItem>
                    <SelectItem value="6-12">6–12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Component checklist */}
          <div className="space-y-3">
            <h3 className="font-bold text-foreground text-lg">Select your components</h3>
            <p className="text-sm text-muted-foreground mb-4">Pick the modules your platform needs. Each selection updates the scope summary in real time.</p>

            {componentGroups.map((group) => {
              const isExpanded = expandedGroups.has(group.name);
              const groupSelected = group.items.filter((i) => selected.has(i)).length;

              return (
                <div key={group.name} className="border border-border rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.name)}
                    className="w-full flex items-center justify-between px-5 py-3 bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <span className="font-semibold text-foreground text-sm flex items-center gap-2">
                      {group.name}
                      {groupSelected > 0 && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          {groupSelected}
                        </span>
                      )}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </button>
                  {isExpanded && (
                    <div className="px-5 py-3 space-y-2.5 bg-background">
                      {group.items.map((item) => (
                        <label key={item} className="flex items-start gap-3 cursor-pointer group/item">
                          <Checkbox
                            checked={selected.has(item)}
                            onCheckedChange={() => toggleItem(item)}
                            className="mt-0.5"
                          />
                          <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">{item}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Idea textarea */}
          <div>
            <Label htmlFor="pb-idea">Describe your idea in 2–3 sentences (optional)</Label>
            <Textarea
              id="pb-idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="What problem does your platform solve? Who are the users?"
              maxLength={1000}
              rows={3}
              className="mt-1"
            />
          </div>
        </div>

        {/* Right: Sticky summary */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="card-elevated border-2 border-primary/20">
              <h3 className="font-bold text-foreground text-lg mb-4">Scope summary</h3>

              {selected.size === 0 ? (
                <p className="text-sm text-muted-foreground italic">Select components to see your scope estimate.</p>
              ) : (
                <>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {Array.from(selected).map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-md cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => toggleItem(item)}
                      >
                        {item.split("(")[0].trim()}
                        <X className="w-3 h-3" />
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Components</span>
                      <span className="font-semibold text-foreground">{selected.size}</span>
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
                <Button type="submit" className="w-full bg-accent hover:bg-accent-light text-white" disabled={selected.size === 0 || sending}>
                  {sending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {sending ? "Sending..." : "Send my spec"}
                </Button>
                <Button type="button" variant="outline" className="w-full" asChild>
                  <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
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
