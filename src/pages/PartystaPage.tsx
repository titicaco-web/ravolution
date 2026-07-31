import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const SITE = "https://partysta.com";

const journey = [
  { n: "01", t: "Create", d: "The host creates the event and adds the occasion, time, location, description and other relevant information." },
  { n: "02", t: "Invite", d: "Guests receive an invitation and can respond without needing to manage several separate communication channels." },
  { n: "03", t: "Coordinate", d: "The group can organise practical details such as attendance, food, drinks, contributions, transport and responsibilities." },
  { n: "04", t: "Celebrate", d: "Guests can follow updates and share photographs and moments while the event is taking place." },
  { n: "05", t: "Remember", d: "The photographs, conversations and contributions remain connected to the celebration, creating a shared digital memory." },
];

const platformFeatures = [
  "Event creation",
  "Guest invitations",
  "Guest-list management",
  "Attendance responses",
  "Public or private events",
  "Participant capacity",
  "Information about remaining places",
  "Planning what guests should bring",
  "Travel and transport coordination",
  "Event budgets",
  "Member profiles",
  "Live photograph sharing",
  "Shared event memories",
  "Event-related communication",
];

const useCases = [
  { t: "Birthdays", d: "Manage invitations, attendance, food, activities, contributions and photographs in one shared space." },
  { t: "Graduation parties", d: "Coordinate several groups of guests, schedules, transport, gifts and practical responsibilities." },
  { t: "Weddings and related celebrations", d: "Support engagement parties, bachelor and bachelorette parties, rehearsal dinners, weddings and anniversary celebrations." },
  { t: "Dinners and home gatherings", d: "Organise smaller occasions without creating complicated message threads or spreadsheets." },
  { t: "Barbecues and garden parties", d: "Clarify what each guest will bring, coordinate transport and share event updates." },
  { t: "Reunions", d: "Bring friends, families, school groups or former colleagues together around a shared occasion." },
  { t: "Seasonal celebrations", d: "Create spaces for New Year's Eve, Midsummer, Christmas gatherings, Halloween, Walpurgis Night and other recurring celebrations." },
  { t: "Company social events", d: "Partysta could also be developed for informal company gatherings, team celebrations, summer parties and employee-organised events." },
];

const audiences = [
  { t: "Private hosts", d: "People arranging birthdays, dinners, garden parties, graduations, weddings and other celebrations." },
  { t: "Guests", d: "Participants who need one clear place for event information, responsibilities, updates and shared photographs." },
  { t: "Families and friend groups", d: "Recurring social groups that organise several gatherings throughout the year." },
  { t: "Students and young adults", d: "Users arranging graduation parties, shared dinners, trips, pre-parties and other group activities." },
  { t: "Professional party planners", d: "Organisers who need a simple client-facing environment for private celebrations." },
  { t: "Venues and hospitality companies", d: "Businesses that could offer Partysta as part of their booking and customer experience." },
  { t: "Employers and organisations", d: "Teams arranging internal celebrations and social activities." },
];

const productAreas = [
  {
    n: "01",
    t: "Invitations and Guest Management",
    items: ["Digital invitations", "Custom event pages", "RSVP management", "Guest categories", "Waiting lists", "Capacity limits", "Plus-one management", "Reminders", "Event updates", "QR-based guest check-in"],
  },
  {
    n: "02",
    t: "Collaborative Planning",
    items: ["Shared task lists", "Food and drink coordination", "Contribution lists", "Gift coordination", "Seating plans", "Shared budgets", "Expense splitting", "Polls and voting", "Transport and carpool planning", "Accommodation coordination"],
  },
  {
    n: "03",
    t: "Memories and Social Interaction",
    items: ["Shared event albums", "Live photo and video uploads", "Comments and reactions", "Event timelines", "Automated highlight collections", "Downloadable albums", "Printed photo books", "Anniversary reminders", "Private group history", "AI-generated event recaps"],
  },
  {
    n: "04",
    t: "Marketplace and Bookings",
    items: ["Venue discovery", "Catering", "Entertainment", "DJs and musicians", "Photographers", "Decorations", "Cakes and food", "Equipment rental", "Transport", "Party supplies", "Cleaning services", "Event insurance"],
  },
  {
    n: "05",
    t: "Professional Tools",
    items: ["Planner dashboards", "Reusable event templates", "Client collaboration", "Supplier coordination", "White-label event spaces", "Company accounts", "Venue accounts", "Analytics", "Payment collection", "Booking management"],
  },
];

const models = [
  "Free basic events with premium upgrades",
  "Per-event premium packages",
  "Monthly host subscriptions",
  "Professional planner accounts",
  "Venue and supplier subscriptions",
  "Featured supplier placements",
  "Marketplace commissions",
  "Booking commissions",
  "Affiliate commerce",
  "Payment-processing revenue",
  "Printed photo books and event albums",
  "Premium invitation templates",
  "Sponsored celebration content",
  "Brand partnerships",
  "Company and organisation licences",
  "White-label platform licensing",
];

const buyers = [
  "Event-planning platforms",
  "Invitation and greeting-card companies",
  "Wedding-planning services",
  "Venue marketplaces",
  "Hospitality groups",
  "Restaurant-booking platforms",
  "Ticketing and event companies",
  "Photo-storage and printing businesses",
  "Payment and group-expense applications",
  "Social and community platforms",
  "Party-supply retailers",
  "Catering marketplaces",
  "Entertainment-booking services",
  "Telecom and messaging companies",
  "Consumer media groups",
  "Entrepreneurs and investors within event technology",
];

const qualities = [
  "Memorable .com domain",
  "Clear association with parties and celebrations",
  "Broad international applicability",
  "Recurring consumer use cases",
  "Natural group-based acquisition",
  "User-generated content potential",
  "Social invitation mechanics",
  "Marketplace and booking opportunities",
  "Consumer and business revenue paths",
  "Existing digital product foundation",
  "Potential integration with hospitality and event services",
];

const assets = [
  "Partysta.com domain",
  "Brand name",
  "Visual identity",
  "Existing website and platform",
  "Source code",
  "User-interface assets",
  "Database structure",
  "Product documentation",
  "Social media accounts",
  "Selected content and related intellectual property",
];

const buyerPaths = [
  "Continue Partysta as a consumer party-planning platform",
  "Introduce premium event packages",
  "Build a vendor and venue marketplace",
  "Add bookings and integrated payments",
  "Develop professional tools for party planners",
  "Integrate Partysta with a hospitality business",
  "Create wedding and graduation-specific versions",
  "Expand into corporate social events",
  "Add printed albums and memory products",
  "Introduce international language versions",
  "Develop native mobile applications",
  "Relaunch the product in selected geographic markets",
  "Integrate the platform with calendars, messaging and photo services",
];

const fragmentedTools = [
  "One service for invitations",
  "A messaging group for updates",
  "A spreadsheet for the budget",
  "A separate list for food and drinks",
  "Another conversation for transport",
  "Multiple photo albums after the event",
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
  interest: z.string().min(1, "Select an area of interest"),
  message: z.string().trim().min(1, "A short message is required").max(4000),
});

const inputClass =
  "w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors";

const PartystaPage = () => {
  const lp = useLangPath();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
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
      const { error } = await supabase.functions.invoke("send-partysta-inquiry", {
        body: parsed.data,
      });
      if (error) throw error;
      toast.success("Thank you — your enquiry has been sent. We will be in touch.");
      setForm({ name: "", company: "", role: "", email: "", phone: "", interest: interests[0], message: "" });
    } catch {
      toast.error("Could not send the enquiry. Please email ivan.daza@ravolution.se directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Partysta.com | Party Planning Platform for Acquisition</title>
        <meta
          name="description"
          content="Partysta is a social event-planning platform for invitations, guest coordination, budgets, shared responsibilities and event memories. Available for acquisition."
        />
        <link rel="canonical" href="https://ravolution.se/en/partysta" />
        <meta property="og:title" content="Partysta.com — Plan, Celebrate and Share the Memories" />
        <meta
          property="og:description"
          content="Explore the acquisition opportunity behind Partysta, a digital platform bringing invitations, guest coordination, party planning and shared memories together."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/partysta" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="Partysta, event tech, party planning, social platform, guest management, memory sharing, marketplace potential, global domain, available for acquisition"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "Partysta.com",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              url: SITE,
              inLanguage: "en",
              description:
                "A digital platform for planning private and social events, coordinating guests and collecting shared memories. Available for acquisition.",
              creativeWorkStatus: "Available for acquisition",
              publisher: { "@type": "Organization", name: "Ravolution AB", url: "https://ravolution.se/" },
            },
            {
              "@type": "Brand",
              name: "Partysta",
              url: SITE,
              description: "Party planning and memory-sharing platform brand.",
            },
            {
              "@type": "WebSite",
              name: "Partysta.com",
              url: SITE,
              inLanguage: "en",
              about: "Party planning, guest coordination and shared event memories.",
            },
            {
              "@type": "Organization",
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
                Partysta.com — Available for acquisition
              </span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-white mt-6">
                Plan together. Celebrate together. Remember together.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/70 mt-8 max-w-3xl">
                Partysta is a digital platform designed to make private celebrations easier to organise and more
                enjoyable for everyone involved. Instead of spreading invitations, guest information, budgets,
                transport plans, photographs and conversations across multiple applications, Partysta brings the
                complete social journey around a celebration into one shared environment — before, during and
                after the event.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Event Tech", "Party Planning", "Social Platform", "Guest Management", "Memory Sharing", "Marketplace Potential", "Global Domain", "Available for Acquisition"].map((tag) => (
                  <span key={tag} className="edit-label text-white/60 border border-white/20 px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Challenge */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — The Challenge" title="Every celebration becomes a fragmented digital project." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Planning a party often requires several disconnected tools. Important information becomes
                  difficult to find, responsibilities are unclear and photographs are often scattered across
                  several phones and social networks.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Partysta is designed to bring these activities together around the event itself.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">A host may use</span>
                <ul className="space-y-2">
                  {fragmentedTools.map((f) => (
                    <li key={f} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Concept */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — The Concept" title="One shared space for the entire celebration." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                Each event becomes a private or public digital space where the host and guests can prepare,
                communicate and contribute. Partysta can be used for everything from spontaneous dinners and
                barbecue evenings to birthdays, graduation parties, weddings, reunions and larger private
                celebrations.
              </p>
            </Reveal>
            <div className="border-t border-white/10">
              {journey.map((j, i) => (
                <Reveal key={j.n} delay={i * 0.04}>
                  <div className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 border-b border-white/10">
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">{j.n}</span>
                    <h3 className="md:col-span-4 text-lg md:text-xl font-display font-bold text-white">{j.t}</h3>
                    <p className="md:col-span-7 edit-body text-white/65">{j.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Product foundation */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Existing Product Foundation" title="More than a party invitation." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                Partysta has been developed as a functioning digital platform for planning, experiencing and
                remembering social events. The current platform presents functionality related to the areas below.
                Individual functions vary in maturity and should be assessed against their verified production
                status — not every listed function is fully developed, monetised or actively used at scale.
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-3">
              {platformFeatures.map((f) => (
                <li key={f} className="text-white/70 text-sm leading-relaxed flex gap-2 border-b border-white/10 pb-3">
                  <span className="text-[hsl(var(--accent-edit))]">—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Use cases */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04 — Core Use Cases" title="Built for the occasions people organise themselves." />
            <div className="border-t border-white/10">
              {useCases.map((u, i) => (
                <Reveal key={u.t} delay={i * 0.04}>
                  <div className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 border-b border-white/10">
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="md:col-span-4 text-lg md:text-xl font-display font-bold text-white">{u.t}</h3>
                    <p className="md:col-span-7 edit-body text-white/65">{u.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Target users */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — Target Users" title="A platform for both hosts and guests." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {audiences.map((a, i) => (
                <Reveal key={a.t} delay={i * 0.04}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <h3 className="text-lg font-display font-bold text-white">{a.t}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-3">{a.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Product development */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="06 — Potential Product Development" title="From planning tool to celebration ecosystem." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {productAreas.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.05}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block">{p.n}</span>
                    <h3 className="text-xl font-display font-bold text-white mt-4">{p.t}</h3>
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
                These are potential development opportunities and are not represented as current production
                features. Any AI-generated feature should be clearly marked and designed with appropriate privacy
                controls.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Commercial potential */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="07 — Commercial Potential" title="Several possible revenue paths." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                Partysta could be developed through a combination of consumer subscriptions, transaction revenues
                and business partnerships. The following are potential commercialisation opportunities for a future
                owner rather than existing revenue streams.
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
          </div>
        </section>

        {/* Why Partysta */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="08 — Why Partysta" title="A global domain with an immediately understandable purpose." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Partysta.com is short, memorable and closely associated with social events and celebration. The
                  brand can work in English-speaking and international markets while remaining understandable to
                  Nordic users.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Its distinctive position is the combination of planning, guest coordination, participation and
                  shared memories — a broader proposition than a traditional RSVP tool.
                </p>
                <p className="edit-body text-white/85 mt-6 border-l-2 border-[hsl(var(--accent-edit))] pl-6">
                  Partysta connects everything that happens around a celebration — from the first invitation to the
                  final shared photograph.
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
            <SectionLabel number="09 — Acquisition Opportunity" title="Partysta.com is available for acquisition." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Ravolution is seeking a strategic buyer, operator or investor with the industry position,
                  audience or resources to develop Partysta further.
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
                  The exact assets included in a transaction are confirmed by Ravolution and documented in the
                  acquisition agreement. Personal data, registered user accounts, private event information,
                  photographs and other user-generated content do not automatically transfer to a buyer. Any
                  transfer or continued processing of personal data must be evaluated under applicable privacy
                  legislation, user agreements and consent requirements.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Relevant to several parts of the event economy</span>
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
            <SectionLabel number="10 — Contact" title="Acquire and develop Partysta.com" />
            <div className="grid md:grid-cols-12 gap-12">
              <Reveal className="md:col-span-5">
                <p className="edit-body text-white/70">
                  Partysta combines a memorable international domain with a developed platform concept for one of
                  life's most recurring activities: bringing people together to celebrate. The platform is
                  available to a strategic buyer, operator or investor that can take the product to its next stage.
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
                    Visit Partysta.com ↗
                  </a>
                </div>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6 max-w-md">
                  Further information about the platform, technical foundation, available assets and acquisition
                  terms is provided upon request. The exact transaction scope will be agreed directly with
                  Ravolution AB.
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
                      <label htmlFor="p-name" className="edit-label text-white/50 block mb-2">Name *</label>
                      <input id="p-name" className={inputClass} value={form.name} onChange={set("name")} maxLength={200} required />
                    </div>
                    <div>
                      <label htmlFor="p-company" className="edit-label text-white/50 block mb-2">Company</label>
                      <input id="p-company" className={inputClass} value={form.company} onChange={set("company")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="p-role" className="edit-label text-white/50 block mb-2">Role</label>
                      <input id="p-role" className={inputClass} value={form.role} onChange={set("role")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="p-email" className="edit-label text-white/50 block mb-2">Email *</label>
                      <input id="p-email" type="email" className={inputClass} value={form.email} onChange={set("email")} maxLength={320} required />
                    </div>
                    <div>
                      <label htmlFor="p-phone" className="edit-label text-white/50 block mb-2">Telephone number</label>
                      <input id="p-phone" type="tel" className={inputClass} value={form.phone} onChange={set("phone")} maxLength={60} />
                    </div>
                    <div>
                      <label htmlFor="p-interest" className="edit-label text-white/50 block mb-2">Area of interest</label>
                      <select id="p-interest" className={`${inputClass} appearance-none`} value={form.interest} onChange={set("interest")}>
                        {interests.map((i) => (
                          <option key={i} value={i} className="bg-[#0F2747] text-white">{i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="p-message" className="edit-label text-white/50 block mb-2">Message *</label>
                    <textarea id="p-message" rows={5} className={inputClass} value={form.message} onChange={set("message")} maxLength={4000} required />
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

export default PartystaPage;
