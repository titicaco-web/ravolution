import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const SITE = "https://hundelser.se/";

const platformFeatures = [
  "Create a personal profile",
  "Present and share their dogs",
  "Publish photographs, updates and stories",
  "Follow other dogs and owners",
  "Comment on and interact with community content",
  "Find dog friends and local connections",
  "Create and discover dog-related events",
  "Participate in training challenges",
  "Earn badges and document progress",
  "Discover dogs, products or services offered for sale",
  "Follow breeders, trainers and other dog-related professionals",
];

const assets = [
  "Hundelser.se domain",
  "Brand name and visual identity",
  "Website and platform",
  "Source code",
  "User interface and design assets",
  "Database structure",
  "Registered user accounts",
  "User-generated content",
  "Social media accounts",
  "Documentation",
  "Analytics and traffic data",
  "Intellectual property and usage rights",
];

const audiences = [
  { t: "Dog owners", d: "A dedicated place to share their dogs, meet other owners, exchange experiences and take part in activities." },
  { t: "Prospective dog owners", d: "A source of inspiration, knowledge and potential connections with breeders, adoption organisations and experienced dog owners." },
  { t: "Breeders and kennels", d: "A channel for presenting their work, documenting litters, building trust and communicating with relevant audiences." },
  { t: "Dog trainers and behaviour specialists", d: "A platform for educational content, challenges, events, courses and customer acquisition." },
  { t: "Veterinary clinics and animal-care providers", d: "An opportunity to publish useful information and build relationships with local dog owners." },
  { t: "Dog walkers, groomers and pet sitters", d: "A focused environment for visibility, local discovery and service bookings." },
  { t: "Pet brands and retailers", d: "A relevant audience for products, campaigns, partnerships, commerce and community-led product discovery." },
  { t: "Clubs and associations", d: "A digital channel for organising activities, communicating with members and attracting new participants." },
];

const productAreas = [
  {
    n: "01",
    t: "Social Community",
    items: ["Dog and owner profiles", "Social feed", "Followers and friendships", "Groups by breed, location or interest", "Private messaging", "Questions and community advice", "Verified professional profiles"],
  },
  {
    n: "02",
    t: "Activities and Gamification",
    items: ["Weekly dog challenges", "Training programmes", "Badges and achievement levels", "Walking and activity goals", "Competitions", "Breed-specific activities", "User-generated challenges"],
  },
  {
    n: "03",
    t: "Local Discovery",
    items: ["Dog-friendly places", "Walking routes", "Dog parks", "Events and meetups", "Local dog services", "Trainers and veterinary clinics", "Location-based dog-friend matching"],
  },
  {
    n: "04",
    t: "Marketplace and Services",
    items: ["Dog-related classified advertisements", "Products and accessories", "Service listings", "Booking for grooming, training and dog care", "Breeder and kennel listings", "Sponsorship and promoted placements", "Affiliate commerce"],
  },
  {
    n: "05",
    t: "Knowledge and Safety",
    items: ["Training guides", "Breed information", "Puppy education", "Health and care content", "Lost-dog alerts", "Local warnings", "Veterinary guidance", "Emergency contact information"],
  },
];

const models = [
  "Premium memberships",
  "Professional business profiles",
  "Marketplace listing fees",
  "Featured advertisements",
  "Booking commissions",
  "E-commerce and affiliate commissions",
  "Brand sponsorships",
  "Native advertising",
  "Local business promotion",
  "Breed-club and association packages",
  "Event and competition fees",
  "Training courses",
  "Insurance partnerships",
  "Veterinary and pet-care partnerships",
  "White-label community solutions",
];

const buyers = [
  "Pet retailers and e-commerce companies",
  "Pet food and accessory brands",
  "Veterinary groups",
  "Pet insurance companies",
  "Dog-training businesses",
  "Breeder and kennel platforms",
  "Classified advertising marketplaces",
  "Media and publishing groups",
  "Community-platform operators",
  "Event and activity platforms",
  "Pet-tech companies",
  "Entrepreneurs or investors focused on the pet economy",
];

const qualities = [
  "Distinctive Swedish domain",
  "Clear and immediately understandable category",
  "Emotionally engaging subject",
  "Strong potential for user-generated content",
  "Natural recurring engagement",
  "Local and national expansion potential",
  "Multiple professional customer groups",
  "Community, content and commerce opportunities",
  "Existing digital product foundation",
  "Potential for international adaptation under other brands",
];

const buyerPaths = [
  "Continue developing Hundelser as a Swedish dog community",
  "Add marketplace and booking functionality",
  "Integrate the platform into a pet retail business",
  "Use it as a customer community for an insurance or veterinary group",
  "Develop a broader dog-services ecosystem",
  "Build local discovery and dog-friendly destination services",
  "Relaunch the platform with a new commercial model",
  "Adapt the technology for additional pet categories or markets",
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

const HundelserPage = () => {
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
      const { error } = await supabase.functions.invoke("send-hundelser-inquiry", {
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
        <title>Hundelser.se – Swedish Dog Community Platform for Acquisition</title>
        <meta
          name="description"
          content="Hundelser is a Swedish social platform for dog owners, combining community content, dog profiles, friendships, activities, challenges and marketplace potential. The platform is available for acquisition."
        />
        <link rel="canonical" href="https://ravolution.se/en/hundelser" />
        <meta property="og:title" content="Hundelser.se – Swedish Dog Community Platform for Acquisition" />
        <meta
          property="og:description"
          content="A Swedish social platform for dog owners — profiles, community content, friendships, activities, challenges and marketplace opportunities. Available for acquisition."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/hundelser" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="Hundelser, pet tech, dog community, social platform, online community, marketplace, dog owners, Sweden, available for acquisition"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "Hundelser.se",
              applicationCategory: "SocialNetworkingApplication",
              operatingSystem: "Web",
              url: SITE,
              inLanguage: "sv",
              description:
                "A Swedish digital community for dog owners, combining dog profiles, social content, friendships, events, training challenges and dog-related marketplace opportunities. Available for acquisition.",
              creativeWorkStatus: "Available for acquisition",
              publisher: { "@type": "Organization", name: "Ravolution AB", url: "https://ravolution.se/" },
            },
            {
              "@type": "Brand",
              name: "Hundelser",
              url: SITE,
              description: "Swedish dog community brand and social platform.",
            },
            {
              "@type": "WebSite",
              name: "Hundelser.se",
              url: SITE,
              inLanguage: "sv",
              about: "Social platform for dog owners — profiles, content, activities and dog-related marketplace.",
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
                Hundelser.se — Available for acquisition
              </span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-white mt-6">Bringing the dog community together</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/70 mt-8 max-w-3xl">
                Hundelser is a Swedish digital platform created for dog owners, dog lovers and organisations
                operating within the wider dog ecosystem. The platform brings social interaction, dog-related
                content, friendships, activities and commercial opportunities together in one focused digital
                environment. Unlike broad social networks where dog-related content competes with every other
                subject, Hundelser is designed around one shared interest: dogs and the people whose lives
                revolve around them.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Pet Tech", "Social Platform", "Online Community", "Marketplace", "Dog Owners", "Sweden", "Available for Acquisition"].map((tag) => (
                  <span key={tag} className="edit-label text-white/60 border border-white/20 px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Opportunity */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — The Opportunity" title="Dog ownership is social, local and highly engaging." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Dog owners regularly exchange advice, share photographs and stories, arrange walks, follow
                  breeders, search for services and purchase products for their dogs.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Today, much of this activity is fragmented across general social networks, discussion groups,
                  messaging services, classified advertising sites and individual business pages.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <p className="edit-body text-white/70">
                  Hundelser creates the foundation for a dedicated platform where these activities can be brought
                  together around trusted profiles, relevant content and a shared community identity.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — The Platform" title="A focused social environment for dog life." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                Hundelser is built around the everyday relationships and activities that come with owning and
                caring for a dog. Features below are existing, in development or expandable depending on their
                actual status on Hundelser.se.
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

        {/* Product foundation */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Existing Product Foundation" title="More than a domain name." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Hundelser has been developed as a functioning digital platform rather than only a brand concept.
                  The current product foundation includes social content, profiles, community interaction, friend
                  functionality, events, dog challenges and a sales-related section.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  This provides a future owner with a base that can be redesigned, expanded, repositioned or
                  integrated into a larger pet-related business.
                </p>
                <p className="text-white/50 text-sm italic leading-relaxed mt-6">
                  User data and user-generated content are not automatically included in a transaction. Any
                  transfer must be assessed and handled in accordance with applicable privacy rules, user
                  agreements and technical requirements.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Assets to be confirmed per transaction</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {assets.map((a) => (
                    <li key={a} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* User groups */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04 — Core User Groups" title="A platform serving the wider dog ecosystem." />
            <div className="border-t border-white/10">
              {audiences.map((a, i) => (
                <Reveal key={a.t} delay={i * 0.04}>
                  <div className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 border-b border-white/10">
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="md:col-span-4 text-lg md:text-xl font-display font-bold text-white">{a.t}</h3>
                    <p className="md:col-span-7 edit-body text-white/65">{a.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Product development */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — Potential Product Development" title="From community platform to dog-life ecosystem." />
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
                Any veterinary or medical content is general information only and does not replace professional
                veterinary advice.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Commercial potential */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="06 — Commercial Potential" title="Several possible paths to monetisation." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-10">
                Hundelser could be developed through a combination of consumer, business and marketplace revenues.
                The following are potential commercialisation opportunities for a future owner rather than existing
                revenue streams.
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

        {/* Why Hundelser */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="07 — Why Hundelser" title="A memorable Swedish brand with category relevance." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  The name Hundelser combines the Swedish words associated with dogs and events or happenings.
                  It is memorable, playful and directly connected to the subject of the platform.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
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
            <SectionLabel number="08 — Acquisition Opportunity" title="Hundelser.se is available for acquisition." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Ravolution is seeking a strategic buyer, operator or investor with the relevant industry
                  position, audience or resources to develop Hundelser further. The opportunity may include the
                  acquisition of the brand, domain, existing platform and selected related assets. The exact
                  transaction scope is subject to agreement and due diligence.
                </p>
                <span className="edit-label text-white/40 block mt-8 mb-4">A buyer could choose to</span>
                <ul className="space-y-2">
                  {buyerPaths.map((b) => (
                    <li key={b} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Relevant to several categories of acquirers</span>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {buyers.map((b) => (
                    <li key={b} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="edit-body text-white/65 mt-8">
                  A strategic buyer could operate Hundelser as an independent brand or integrate its community,
                  content and marketplace functions into an existing customer ecosystem.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA + form */}
        <section id="acquire" className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="09 — Contact" title="Acquire and develop Hundelser.se" />
            <div className="grid md:grid-cols-12 gap-12">
              <Reveal className="md:col-span-5">
                <p className="edit-body text-white/70">
                  Hundelser offers a foundation for building a focused digital community within one of the most
                  engaging areas of consumer life: the relationship between people and their dogs. The concept and
                  platform are available to a buyer with the ambition and resources to take the next step.
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
                    Visit Hundelser.se ↗
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
                      <label htmlFor="h-name" className="edit-label text-white/50 block mb-2">Name *</label>
                      <input id="h-name" className={inputClass} value={form.name} onChange={set("name")} maxLength={200} required />
                    </div>
                    <div>
                      <label htmlFor="h-company" className="edit-label text-white/50 block mb-2">Company</label>
                      <input id="h-company" className={inputClass} value={form.company} onChange={set("company")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="h-role" className="edit-label text-white/50 block mb-2">Role</label>
                      <input id="h-role" className={inputClass} value={form.role} onChange={set("role")} maxLength={200} />
                    </div>
                    <div>
                      <label htmlFor="h-email" className="edit-label text-white/50 block mb-2">Email *</label>
                      <input id="h-email" type="email" className={inputClass} value={form.email} onChange={set("email")} maxLength={320} required />
                    </div>
                    <div>
                      <label htmlFor="h-phone" className="edit-label text-white/50 block mb-2">Telephone number</label>
                      <input id="h-phone" type="tel" className={inputClass} value={form.phone} onChange={set("phone")} maxLength={60} />
                    </div>
                    <div>
                      <label htmlFor="h-interest" className="edit-label text-white/50 block mb-2">Area of interest</label>
                      <select id="h-interest" className={`${inputClass} appearance-none`} value={form.interest} onChange={set("interest")}>
                        {interests.map((i) => (
                          <option key={i} value={i} className="bg-[#0F2747] text-white">{i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="h-message" className="edit-label text-white/50 block mb-2">Message *</label>
                    <textarea id="h-message" rows={5} className={inputClass} value={form.message} onChange={set("message")} maxLength={4000} required />
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

export default HundelserPage;
