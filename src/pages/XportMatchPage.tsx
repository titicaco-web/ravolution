import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const SITE = "https://xportmatch.com";

const journey = [
  { n: "01", t: "Assess", d: "Assess the exporting company, its offering, capacity and commercial readiness before international outreach begins." },
  { n: "02", t: "Prioritise", d: "Identify which international markets appear most suitable rather than treating every country as equally attractive." },
  { n: "03", t: "Discover", d: "Find prospective importers, distributors, retailers, agents and procurement organisations relevant to the product category." },
  { n: "04", t: "Evaluate", d: "Assess commercial compatibility using product, geography, channel, scale and purchasing-activity signals." },
  { n: "05", t: "Initiate", d: "Prepare targeted, personalised outreach adapted to the recipient, market and potential commercial fit." },
  { n: "06", t: "Manage", d: "Move conversations, documentation and negotiations forward through a structured export pipeline." },
];

const frictionPoints = [
  "Searching manually for importers and distributors",
  "Purchasing fragmented company databases",
  "Attending expensive trade fairs",
  "Contacting poorly qualified prospects",
  "Working with multiple consultants and agencies",
  "Evaluating unfamiliar markets without sufficient data",
  "Managing conversations in spreadsheets and email",
  "Recreating similar export documents for every market",
  "Developing relationships for months without clear commercial signals",
];

const exporterSignals = [
  "Product category",
  "Industry",
  "Current markets",
  "Target markets",
  "Company size",
  "Export readiness",
  "Certifications",
  "Production capacity",
  "Pricing position",
  "Distribution preferences",
  "Commercial objectives",
  "Required partner profile",
];

const buyerSignals = [
  "Business category",
  "Product portfolio",
  "Geographic coverage",
  "Existing brands",
  "Distribution channels",
  "Import activity",
  "Company size",
  "Market position",
  "Purchasing signals",
  "Commercial relevance",
  "Product and supplier requirements",
];

const workflow = [
  {
    n: "01",
    t: "Create an Export Profile",
    d: "The exporting company provides structured information used to build a digital export profile.",
    items: ["Organisation details", "Products and services", "Existing markets", "Target customers", "Certifications", "Production capability", "Preferred commercial model", "Geographic ambitions"],
  },
  {
    n: "02",
    t: "Assess Export Readiness",
    d: "Identify potential gaps before international outreach begins. Positioned as decision support, not a guarantee of export success.",
    items: ["Product-market readiness", "Pricing", "Logistics", "Localisation", "Certifications", "Legal documentation", "Production capacity", "Payment conditions", "Marketing material", "Partner strategy"],
  },
  {
    n: "03",
    t: "Identify Relevant Markets",
    d: "AI-assisted analysis can compare potential markets so users prioritise rather than guess.",
    items: ["Category demand", "Import activity", "Market growth", "Competition", "Trade barriers", "Distribution structure", "Regulatory requirements", "Logistics", "Currency and payment risk", "Commercial signals"],
  },
  {
    n: "04",
    t: "Discover Buyers and Partners",
    d: "Identify relevant organisations, prioritised according to commercial relevance and available evidence.",
    items: ["Importers", "Distributors", "Wholesalers", "Retail chains", "E-commerce companies", "Agents", "Resellers", "Manufacturers", "Strategic partners", "Procurement organisations"],
  },
  {
    n: "05",
    t: "Understand the Match",
    d: "Each potential match can include an explanation of why the organisation may be relevant.",
    items: ["Product-category alignment", "Geographic fit", "Buyer portfolio", "Distribution channels", "Company scale", "Existing supplier relationships", "Purchasing or import activity", "Commercial timing", "Strategic compatibility"],
  },
  {
    n: "06",
    t: "Initiate Contact",
    d: "Prepare targeted outreach adapted to recipient, market and commercial fit — personalised business development rather than mass unsolicited contact.",
    items: ["Suggested decision-makers", "Personalised introductions", "Multilingual outreach", "Email templates", "Message preparation", "Meeting requests", "Follow-up reminders", "Pitch localisation", "Product presentation material"],
  },
  {
    n: "07",
    t: "Manage the Opportunity",
    d: "Potential buyers and partners can be managed through a structured export pipeline with notes, responsibilities and next actions.",
    items: ["Identified", "Evaluated", "Contact prepared", "Contacted", "Response received", "Meeting scheduled", "Information shared", "Sample requested", "Commercial discussion", "Negotiation", "Agreement", "Closed or paused"],
  },
  {
    n: "08",
    t: "Support Export Documentation",
    d: "Templates and workflow support for export preparation — not a substitute for qualified legal advice.",
    items: ["Company presentations", "Product sheets", "Distributor proposals", "Letters of intent", "Non-disclosure agreements", "Commercial quotations", "Sample agreements", "Distributor agreements", "Market documentation", "Export checklists", "Negotiation records", "Contract workflows"],
  },
];

const components = [
  { t: "Company Profiles", d: "Structured profiles for exporters, buyers, distributors and other international trade participants." },
  { t: "AI Matching", d: "Matching based on product, sector, geography, company characteristics and commercial compatibility." },
  { t: "Buyer Discovery", d: "Tools for finding potentially relevant importers, distributors, retailers and procurement organisations." },
  { t: "Market Intelligence", d: "Country, category and company-level information supporting international expansion decisions." },
  { t: "Trade Signals", d: "Indicators that may suggest changes in demand, purchasing activity, expansion or commercial timing." },
  { t: "Export Pipeline", d: "A structured environment for managing contacts, opportunities, conversations and next actions." },
  { t: "Documentation", d: "Templates and workflows supporting export preparation, proposals, negotiations and agreements." },
  { t: "Community and Knowledge", d: "Expert material, market discussions, practical export guidance and peer knowledge." },
  { t: "Professional Collaboration", d: "Potential workspaces connecting exporters with consultants, trade organisations, logistics providers, banks and other specialists." },
];

const audiences = [
  { t: "Exporting SMEs", d: "Companies with a successful domestic business preparing to expand internationally." },
  { t: "Export Managers", d: "Professionals responsible for identifying new markets, distributors, retailers and strategic partners." },
  { t: "Manufacturers and Brand Owners", d: "Companies seeking importers, distributors, agents or direct retail relationships." },
  { t: "Importers and Distributors", d: "International organisations looking for differentiated products and reliable new suppliers." },
  { t: "Export Consultants", d: "Advisers managing market research, partner searches and outreach for multiple clients." },
  { t: "Chambers of Commerce", d: "Membership organisations seeking digital tools that can strengthen their export-support offering." },
  { t: "Trade-Promotion Organisations", d: "National, regional and sector-specific organisations helping companies develop internationally." },
  { t: "Banks and Financial Institutions", d: "Organisations supporting internationally expanding companies through financing, payments and advisory services." },
  { t: "Logistics and Freight Companies", d: "Providers that could combine transport services with export-market and partner-discovery support." },
  { t: "Industry Associations", d: "Organisations helping member companies identify buyers, markets and international opportunities." },
  { t: "Private Equity and Portfolio Owners", d: "Investors seeking a repeatable export-development system across several portfolio companies." },
];

const models = [
  "Monthly company subscriptions",
  "Annual export-platform licences",
  "Premium market reports",
  "Buyer-discovery packages",
  "Qualified-match credits",
  "Export-readiness assessments",
  "Consultant accounts",
  "Multi-company agency plans",
  "Trade-organisation licences",
  "Regional or national programmes",
  "White-label export platforms",
  "Data and API access",
  "CRM integrations",
  "Sponsored market-entry programmes",
  "Success-based introduction fees",
  "Marketplace commissions",
  "Professional advisory services",
  "Documentation packages",
  "Enterprise and portfolio licences",
];

const packages = [
  { t: "Export Starter", d: "For a company exploring its first international market.", items: ["Export-readiness assessment", "Market prioritisation", "Initial buyer recommendations", "Export checklist", "Limited opportunity pipeline"] },
  { t: "Export Growth", d: "For companies actively developing several international markets.", items: ["Multiple market analyses", "Expanded buyer discovery", "AI-assisted matching", "Outreach support", "Pipeline management", "Documentation tools", "Team collaboration"] },
  { t: "Export Professional", d: "For export consultants, agencies and trade advisers.", items: ["Multiple client workspaces", "Reusable workflows", "Branded reports", "Team roles", "Export pipeline oversight", "Client collaboration", "Advanced data access"] },
  { t: "Export Enterprise", d: "For trade organisations, banks, industry associations and larger corporate groups.", items: ["Organisation-wide access", "Portfolio dashboards", "White-label deployment", "Custom data sources", "API integrations", "Reporting", "Administrative controls", "Dedicated support"] },
];

const integrations = [
  "Company registries",
  "Customs and trade statistics",
  "Import and export databases",
  "Business-information providers",
  "CRM platforms",
  "Email systems",
  "Calendar services",
  "Professional networks",
  "Translation services",
  "Electronic-signature platforms",
  "Logistics providers",
  "Payment providers",
  "Credit-information services",
  "Sanctions and compliance databases",
  "Government export-support services",
];

const transparency = [
  "Which information contributed to a match",
  "When the underlying information was last updated",
  "Whether an organisation has been independently verified",
  "Which conclusions are inferred",
  "Where information remains incomplete",
  "How users can report inaccurate information",
];

const noGuarantees = [
  "Buyer interest",
  "Commercial compatibility",
  "Regulatory approval",
  "Creditworthiness",
  "Contract completion",
  "Export success",
];

const buyers = [
  "Business-information providers",
  "B2B data platforms",
  "Export-consulting groups",
  "Trade-promotion organisations",
  "Chambers of commerce",
  "Banks and financial institutions",
  "Credit-insurance companies",
  "Logistics and freight groups",
  "Customs and trade-compliance platforms",
  "CRM and sales-intelligence companies",
  "Procurement platforms",
  "B2B marketplaces",
  "Industry associations",
  "Government export agencies",
  "Private equity firms",
  "Venture studios",
  "International business networks",
  "Enterprise software companies",
];

const qualities = [
  "Memorable international .com domain",
  "Clear B2B positioning",
  "Global market applicability",
  "Recurring software revenue potential",
  "AI and data-driven product opportunities",
  "Strong relevance for SMEs",
  "Enterprise and institutional customer potential",
  "Natural integrations with existing business platforms",
  "Potential white-label applications",
  "International expansion without dependence on one consumer market",
  "Developed product and workflow foundation",
];

const assets = [
  "XportMatch.com domain",
  "Brand name and visual identity",
  "Existing website and platform",
  "Source code",
  "User-interface assets",
  "Matching logic",
  "Workflow concepts",
  "Database structure",
  "Product documentation",
  "Market and category structures",
  "Content",
  "Social media accounts",
  "Related intellectual property",
];

const buyerPaths = [
  "Continue XportMatch as a Nordic export platform",
  "Expand the platform internationally",
  "Focus on specific countries or trade corridors",
  "Develop vertical versions for selected industries",
  "Integrate proprietary company and trade data",
  "Add CRM and sales-intelligence functionality",
  "Offer the platform through export consultants",
  "Create white-label versions for trade organisations",
  "Integrate logistics, financing and insurance services",
  "Build an importer and distributor marketplace",
  "Introduce buyer-demand signals",
  "Develop procurement and sourcing functionality",
  "Add compliance and sanctions screening",
  "Launch government or regional export programmes",
  "Build a portfolio export tool for investors",
  "Combine software subscriptions with professional export services",
];

const tags = [
  "Export Tech",
  "International Trade",
  "AI Matching",
  "Market Intelligence",
  "B2B SaaS",
  "Sales Intelligence",
  "SME Export",
  "Global Marketplace",
  "Available for Acquisition",
];

const interests = [
  "Full acquisition",
  "Platform and domain acquisition",
  "Strategic partnership",
  "Licensing",
  "Investment",
  "Request more information",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  role: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(320),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  country: z.string().trim().max(120).optional().or(z.literal("")),
  interest: z.string().min(1, "Select an area of interest"),
  message: z.string().trim().min(1, "A short message is required").max(4000),
});

const inputClass =
  "w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors";

const XportMatchPage = () => {
  const lp = useLangPath();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    country: "",
    interest: interests[0],
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check the form.");
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-xportmatch-inquiry", {
        body: parsed.data,
      });
      if (error) throw error;
      toast.success("Thank you — your enquiry has been sent. We will be in touch.");
      setForm({ name: "", company: "", role: "", email: "", phone: "", country: "", interest: interests[0], message: "" });
    } catch {
      toast.error("Could not send the enquiry. Please email ivan.daza@ravolution.se directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>XportMatch.com | AI Export Matchmaking Platform for Acquisition</title>
        <meta
          name="description"
          content="XportMatch is an AI-native B2B platform for market intelligence, international buyer discovery, export matchmaking and opportunity management. Available for acquisition."
        />
        <link rel="canonical" href="https://ravolution.se/en/xportmatch" />
        <meta property="og:title" content="XportMatch.com — AI-Native Export Matchmaking" />
        <meta
          property="og:description"
          content="Explore the acquisition opportunity behind XportMatch, a B2B platform connecting export companies with relevant international markets, buyers and commercial partners."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/xportmatch" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="XportMatch, export tech, international trade, AI matching, market intelligence, B2B SaaS, sales intelligence, SME export, buyer discovery, available for acquisition"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["WebApplication", "SoftwareApplication"],
              name: "XportMatch.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: SITE,
              inLanguage: "en",
              description:
                "An AI-native B2B platform concept for export market intelligence, international buyer discovery, matchmaking and export opportunity management. Available for acquisition.",
              creativeWorkStatus: "Available for acquisition",
              publisher: { "@id": "https://ravolution.se/#organization" },
            },
            {
              "@type": "Brand",
              name: "XportMatch",
              url: SITE,
              description: "AI-native export matchmaking platform brand.",
            },
            {
              "@type": "WebSite",
              name: "XportMatch.com",
              url: SITE,
              inLanguage: "en",
              about: "Export matchmaking, market intelligence and international buyer discovery.",
            },
            {
              "@type": "Organization",
              "@id": "https://ravolution.se/#organization",
              name: "Ravolution AB",
              url: "https://ravolution.se/",
              email: "ivan.daza@ravolution.se",
            },
          ],
        })}</script>
      </Helmet>

      <EditorialShell>
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-12 min-h-[55vh] flex flex-col justify-end overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          <div className="edit-container relative z-10">
            <Reveal>
              <Link to={lp("/portfolio")} className="edit-label text-white/50 edit-link">
                ← Strategic Ventures &amp; Acquisition Opportunities
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="edit-label text-[hsl(var(--accent-edit))] block mt-8">
                XportMatch.com — Available for acquisition
              </span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-white mt-6">
                Turning Export Ambition into International Opportunity
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/70 mt-8 max-w-3xl">
                XportMatch is an AI-native B2B platform designed to help export-ready companies identify promising
                markets, discover relevant international buyers and manage opportunities from initial match to
                potential agreement.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                >
                  Explore the Platform ↗
                </a>
                <a
                  href="#acquire"
                  className="inline-flex items-center px-6 py-3 bg-[hsl(var(--accent-edit))] text-[#0F2747] edit-label font-semibold hover:opacity-90 transition-opacity"
                >
                  Request Acquisition Information
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-3">
                {tags.map((t) => (
                  <span key={t} className="edit-label text-white/50 border border-white/15 px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview / journey */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — The Concept" title="Designed around the export journey, not a company directory." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                XportMatch is an AI-native B2B platform concept designed to make international expansion more
                structured, informed and commercially actionable — helping companies move from a general ambition
                to enter new markets toward identifying relevant countries, understanding demand signals,
                discovering prospective buyers and managing potential commercial relationships.
              </p>
            </Reveal>
            <div className="border-t border-white/10">
              {journey.map((j, i) => (
                <Reveal key={j.n} delay={i * 0.04}>
                  <div className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 border-b border-white/10">
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">{j.n}</span>
                    <h3 className="md:col-span-3 text-lg md:text-xl font-display font-bold text-white">{j.t}</h3>
                    <p className="md:col-span-8 edit-body text-white/65">{j.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — The Challenge" title="International growth remains difficult for smaller companies." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Many small and medium-sized companies have products with international potential but lack the
                  time, internal resources and local networks required to enter new markets successfully.
                </p>
                <p className="edit-body text-white/85 mt-6 border-l-2 border-[hsl(var(--accent-edit))] pl-6">
                  The problem is rarely a complete lack of information. The greater problem is turning large
                  volumes of fragmented information into a focused list of relevant markets, organisations and
                  people to approach.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Traditional export development often involves</span>
                <ul className="space-y-2">
                  {frictionPoints.map((f) => (
                    <li key={f} className="text-white/70 text-sm leading-relaxed flex gap-2 border-b border-white/10 pb-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Matching model */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — The Match" title="Market intelligence meets commercial matchmaking." />
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <Reveal>
                <div className="bg-[hsl(var(--surface))] p-8 h-full">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block">Side A</span>
                  <h3 className="text-xl font-display font-bold text-white mt-4">Exporting Company</h3>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {exporterSignals.map((s) => (
                      <li key={s} className="text-white/65 text-sm leading-relaxed flex gap-2">
                        <span className="text-[hsl(var(--accent-edit))]">—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="bg-[hsl(var(--surface))] p-8 h-full">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block">Side B</span>
                  <h3 className="text-xl font-display font-bold text-white mt-4">International Buyer or Partner</h3>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {buyerSignals.map((s) => (
                      <li key={s} className="text-white/65 text-sm leading-relaxed flex gap-2">
                        <span className="text-[hsl(var(--accent-edit))]">—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <p className="edit-body text-white/70 mt-10 max-w-3xl">
                Instead of presenting thousands of undifferentiated company records, XportMatch can prioritise a
                smaller number of potentially relevant opportunities and explain why they may be suitable.
              </p>
              <p className="edit-body text-white/85 mt-6 border-l-2 border-[hsl(var(--accent-edit))] pl-6 max-w-3xl">
                XportMatch helps companies identify where to expand, who to approach and how to move each
                international opportunity forward.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Workflow */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04 — How the Platform Can Work" title="From export profile to signed agreement." />
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {workflow.map((w, i) => (
                <Reveal key={w.n} delay={i * 0.04}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block">{w.n}</span>
                    <h3 className="text-xl font-display font-bold text-white mt-4">{w.t}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-3">{w.d}</p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                      {w.items.map((it) => (
                        <li key={it} className="text-white/65 text-sm leading-relaxed flex gap-2">
                          <span className="text-[hsl(var(--accent-edit))]">—</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-white/50 text-sm italic leading-relaxed mt-8 max-w-3xl">
                Automated communication must be designed to comply with applicable marketing, privacy and platform
                rules. Organisations are not described as verified unless the verification method and current
                status can be documented. Legal documents are workflow support, not a substitute for qualified
                legal advice.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Product foundation + components */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — Existing Product Foundation" title="A developed platform and commercial concept." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                XportMatch has been developed around an AI-assisted export workflow for companies seeking
                international buyers and commercial partners. Individual components vary in maturity — live, beta,
                prototype, demonstration, planned or integration-ready — and should be assessed against their
                verified operational status. Not every described capability is fully automated or operating at
                commercial scale.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {components.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.04}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <h3 className="text-lg font-display font-bold text-white">{c.t}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-3">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Target users */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="06 — Target Users" title="Relevant across the international trade ecosystem." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {audiences.map((a, i) => (
                <Reveal key={a.t} delay={i * 0.03}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <h3 className="text-lg font-display font-bold text-white">{a.t}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-3">{a.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial potential */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="07 — Commercial Potential" title="Multiple paths to recurring B2B revenue." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                XportMatch could be developed through a combination of software subscriptions, data services,
                professional tools and transaction-related revenue. The following are potential commercial models
                for a future owner rather than current revenue streams.
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
              {models.map((m) => (
                <li key={m} className="text-white/70 text-sm leading-relaxed flex gap-2 border-b border-white/10 pb-3">
                  <span className="text-[hsl(var(--accent-edit))]">—</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-12">
              {packages.map((p, i) => (
                <Reveal key={p.t} delay={i * 0.05}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <h3 className="text-lg font-display font-bold text-white">{p.t}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mt-3">{p.d}</p>
                    <ul className="mt-5 space-y-2">
                      {p.items.map((it) => (
                        <li key={it} className="text-white/65 text-sm leading-relaxed flex gap-2">
                          <span className="text-[hsl(var(--accent-edit))]">—</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-white/50 text-sm italic leading-relaxed mt-8 max-w-3xl">
                These are suggested future packaging options and are not current pricing plans. Success-based fees
                should only be introduced where legally and commercially appropriate and where attribution can be
                clearly established.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Data & integrations */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="08 — Data and Integration Potential" title="A connected export data layer." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <span className="edit-label text-white/40 block mb-4">Potential integrations</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {integrations.map((it) => (
                    <li key={it} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6">
                  Access to third-party data must be governed by valid licences, terms of service and applicable
                  legislation. No ownership of third-party data is implied.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Responsible AI — decision support, not guaranteed outcomes</span>
                <p className="edit-body text-white/70">
                  AI-generated matches and recommendations should be presented as decision support. The platform
                  should explain:
                </p>
                <ul className="mt-5 space-y-2">
                  {transparency.map((t) => (
                    <li key={t} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <span className="edit-label text-white/40 block mt-8 mb-4">A match does not guarantee</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {noGuarantees.map((t) => (
                    <li key={t} className="text-white/60 text-sm leading-relaxed flex gap-2">
                      <span className="text-white/30">—</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6">
                  High-value international transactions should continue to involve appropriate commercial, legal,
                  financial and compliance review.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why XportMatch */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="09 — Why XportMatch" title="A strong global name for a clearly defined B2B problem." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  XportMatch.com combines two immediately understandable concepts — export and commercial matching.
                  The name communicates the fundamental purpose of the platform without requiring a lengthy
                  explanation.
                </p>
                <p className="edit-body text-white/85 mt-6 border-l-2 border-[hsl(var(--accent-edit))] pl-6">
                  From export strategy to qualified international conversations in one connected workflow.
                </p>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6">
                  No registered trademark protection or unrestricted international naming rights are claimed.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Potential strategic qualities</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {qualities.map((q) => (
                    <li key={q} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Acquisition */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="10 — Acquisition Opportunity" title="XportMatch.com is available for acquisition." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Ravolution is seeking a strategic buyer, operator or investor with the industry access, data
                  resources, distribution capability or commercial experience required to develop XportMatch
                  further.
                </p>
                <span className="edit-label text-white/40 block mt-8 mb-4">The opportunity may include</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {assets.map((a) => (
                    <li key={a} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6">
                  The exact assets included in a transaction are subject to agreement and due diligence.
                  Third-party data, personal data, registered accounts, business profiles, correspondence and
                  confidential commercial information do not automatically transfer to a buyer. Any transfer or
                  continued processing of such information must comply with applicable contracts, licences,
                  privacy rules and user terms.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Relevant to companies throughout the trade ecosystem</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {buyers.map((b) => (
                    <li key={b} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="edit-label text-white/40 block mt-8 mb-4">A future owner could choose to</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {buyerPaths.map((b) => (
                    <li key={b} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA + form */}
        <section id="acquire" className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="11 — Contact" title="Acquire and develop XportMatch.com" />
            <div className="grid md:grid-cols-12 gap-12">
              <Reveal className="md:col-span-5">
                <p className="edit-body text-white/70">
                  XportMatch combines a memorable international domain with a developed concept for solving one of
                  the most persistent challenges facing growing companies: finding the right markets, buyers and
                  commercial partners abroad. The platform is available to a strategic buyer, operator or investor
                  capable of taking it to its next stage.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#acquire"
                    className="inline-flex items-center px-6 py-3 bg-[hsl(var(--accent-edit))] text-[#0F2747] edit-label font-semibold hover:opacity-90 transition-opacity"
                  >
                    Request Acquisition Information
                  </a>
                  <a
                    href={SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                  >
                    Visit XportMatch.com ↗
                  </a>
                </div>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6 max-w-md">
                  Further information about the platform, technical foundation, available assets and acquisition
                  terms is provided upon request. The exact scope of a potential transaction will be agreed
                  directly with Ravolution AB.
                </p>
                <a
                  href="mailto:ivan.daza@ravolution.se"
                  className="edit-label text-white edit-link mt-8 inline-block"
                >
                  ivan.daza@ravolution.se
                </a>
              </Reveal>

              <Reveal className="md:col-span-7" delay={0.1}>
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="x-name" className="edit-label text-white/50 block mb-2">Name *</label>
                      <input id="x-name" className={inputClass} value={form.name} onChange={set("name")} maxLength={200} required />
                    </div>
                    <div>
                      <label htmlFor="x-company" className="edit-label text-white/50 block mb-2">Company</label>
                      <input id="x-company" className={inputClass} value={form.company} onChange={set("company")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="x-role" className="edit-label text-white/50 block mb-2">Role</label>
                      <input id="x-role" className={inputClass} value={form.role} onChange={set("role")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="x-email" className="edit-label text-white/50 block mb-2">Email *</label>
                      <input id="x-email" type="email" className={inputClass} value={form.email} onChange={set("email")} maxLength={320} required />
                    </div>
                    <div>
                      <label htmlFor="x-phone" className="edit-label text-white/50 block mb-2">Telephone number</label>
                      <input id="x-phone" type="tel" className={inputClass} value={form.phone} onChange={set("phone")} maxLength={60} />
                    </div>
                    <div>
                      <label htmlFor="x-country" className="edit-label text-white/50 block mb-2">Country</label>
                      <input id="x-country" className={inputClass} value={form.country} onChange={set("country")} maxLength={120} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="x-interest" className="edit-label text-white/50 block mb-2">Area of interest</label>
                      <select id="x-interest" className={`${inputClass} appearance-none`} value={form.interest} onChange={set("interest")}>
                        {interests.map((i) => (
                          <option key={i} value={i} className="bg-[#0F2747] text-white">{i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="x-message" className="edit-label text-white/50 block mb-2">Message *</label>
                    <textarea id="x-message" rows={5} className={inputClass} value={form.message} onChange={set("message")} maxLength={4000} required />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-8 py-4 bg-[hsl(var(--accent-edit))] text-[#0F2747] font-semibold tracking-tight hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {sending ? "Sending…" : "Send enquiry"}
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default XportMatchPage;
