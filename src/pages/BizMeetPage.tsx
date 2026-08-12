import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ExternalLink, Users, Calendar, Mail, CreditCard, MessageSquare, ArrowRight } from "lucide-react";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const SITE = "https://mlops.ravolution.se/platform";

const replacedStack = [
  { name: "Meetup", for: "Community discovery & event listings" },
  { name: "Eventbrite", for: "Event ticketing & registration" },
  { name: "Mailchimp", for: "Member newsletters & campaigns" },
  { name: "Slack", for: "Ongoing member conversations" },
  { name: "Stripe", for: "Payments, subscriptions & invoicing" },
];

const platformPillars = [
  {
    icon: Users,
    title: "Member Directory",
    desc: "Profiles, roles, permissions and segmentation for 2,000–20,000 members under the customer's own brand.",
  },
  {
    icon: Calendar,
    title: "Events & Ticketing",
    desc: "Create, publish, ticket and check in events — from small meetups to large recurring series.",
  },
  {
    icon: Mail,
    title: "Campaigns & Updates",
    desc: "Newsletters, announcements, targeted updates and automated member communications without a separate email tool.",
  },
  {
    icon: MessageSquare,
    title: "Community Discussions",
    desc: "Channels, groups, direct messaging and rich conversations that stay inside the branded community.",
  },
  {
    icon: CreditCard,
    title: "Payments & Subscriptions",
    desc: "Memberships, tickets, subscriptions and billing built in — no external payment stack required.",
  },
];

const liveReferences = [
  {
    name: "MLOps/Stockholm",
    role: "AI operations community",
    desc: "A live community using the platform to run member events, workshops and knowledge-sharing sessions.",
  },
  {
    name: "Biblioteket Live",
    role: "Cultural & learning community",
    desc: "An active deployment showing the platform's flexibility for community-driven programming and events.",
  },
];

const BizMeetPage = () => {
  const lp = useLangPath();

  return (
    <>
      <Helmet>
        <title>BizMeet™ | White-Label Community Operating System — Ravolution</title>
        <meta
          name="description"
          content="BizMeet is the community operating system for organisations running 2,000–20,000 members. Replaces Meetup, Eventbrite, Mailchimp, Slack and Stripe with one branded platform."
        />
        <link rel="canonical" href="https://ravolution.se/en/bizmeet" />
        <meta property="og:title" content="BizMeet™ — White-Label Community Operating System" />
        <meta
          property="og:description"
          content="The community operating system for organisations running 2,000–20,000 members. Replaces five tools with one branded platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/bizmeet" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="BizMeet, community OS, white-label community platform, membership platform, event platform, community operating system, Ravolution"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "BizMeet",
              alternateName: "BizMeet™",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: SITE,
              inLanguage: "en",
              description:
                "White-label community operating system for organisations running 2,000–20,000 members. Replaces Meetup, Eventbrite, Mailchimp, Slack and Stripe with one branded platform.",
              publisher: { "@id": "https://ravolution.se/#organization" },
            },
            {
              "@type": "Brand",
              name: "BizMeet",
              url: SITE,
              description: "White-label community operating system brand.",
            },
            {
              "@type": "WebSite",
              name: "BizMeet",
              url: SITE,
              inLanguage: "en",
              about: "White-label community operating system for member organisations.",
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
        <section className="relative pt-40 pb-24 px-6 md:px-12 min-h-[70vh] flex flex-col justify-end overflow-hidden">
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
                ← Portfolio
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="edit-label text-white/40 block mt-8">05 — Platform</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-4">BizMeet™</h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="edit-label text-white/70 mt-4">White-Label Community OS</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="edit-body text-white/70 mt-8 max-w-[60ch]">
                The community operating system for organisations running 2,000–20,000 members. Replaces the stack of five tools
                (Meetup, Eventbrite, Mailchimp, Slack, Stripe) with one platform under the customer's own brand. Live in production
                with MLOps/Stockholm and Biblioteket Live.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-4xl">
                <div className="bg-[hsl(var(--surface))] p-6">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Category</span>
                  <p className="text-white/90 text-sm leading-relaxed">Community operating system, white-label event platform</p>
                </div>
                <div className="bg-[hsl(var(--surface))] p-6">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Market</span>
                  <p className="text-white/90 text-sm leading-relaxed">Community operators, industry publishers, verticalized panel series (5k+ members)</p>
                </div>
                <div className="bg-[hsl(var(--surface))] p-6">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Revenue</span>
                  <p className="text-white/90 text-sm leading-relaxed">Two-tier SaaS — €500/mo + 30% or €1,500/mo + 10% revenue share</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edit-btn inline-flex items-center gap-3"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:ivan.daza@ravolution.se"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                >
                  Request a Demo
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Problem */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — The Problem" title="Communities run on borrowed tools." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  Organisations that build communities around a profession, city, industry or interest often end up
                  stitching together five or more separate tools. Each tool handles one part of the member experience,
                  which creates fragmented data, inconsistent branding and a growing software bill.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Members suffer too: they must join, pay, communicate and discover events in different places, each with
                  a different login and experience.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">The typical community stack</span>
                <ul className="space-y-3">
                  {replacedStack.map((t) => (
                    <li key={t.name} className="text-white/70 text-sm leading-relaxed flex gap-3">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>
                        <strong className="text-white/90">{t.name}</strong> — {t.for}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — The Platform" title="One operating system. One brand. One member experience." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-12">
                BizMeet combines the core functions of a modern community into a single white-label platform. The customer
                keeps their own brand, domain and member relationships while controlling discovery, events, communication
                and monetisation from one place.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {platformPillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <div className="bg-[hsl(var(--bg))] p-8 h-full">
                      <Icon className="w-6 h-6 text-[hsl(var(--accent-edit))] mb-4" />
                      <h3 className="text-lg font-display font-bold text-white">{p.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed mt-3">{p.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Live references */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Live References" title="Already running in production." />
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {liveReferences.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.05}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block">{r.role}</span>
                    <h3 className="text-2xl font-display font-bold text-white mt-3">{r.name}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-4">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial model */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="04 — Commercial Model" title="Two-tier SaaS with revenue share." />
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <Reveal>
                <div className="bg-[hsl(var(--bg))] p-8 h-full">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block">Starter</span>
                  <div className="text-3xl font-display font-bold text-white mt-4">€500/mo</div>
                  <p className="text-white/65 text-sm leading-relaxed mt-2">+ 30% revenue share</p>
                  <p className="text-white/50 text-sm mt-4">
                    For emerging communities and smaller operators beginning to monetise events and memberships.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="bg-[hsl(var(--bg))] p-8 h-full">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block">Scale</span>
                  <div className="text-3xl font-display font-bold text-white mt-4">€1,500/mo</div>
                  <p className="text-white/65 text-sm leading-relaxed mt-2">+ 10% revenue share</p>
                  <p className="text-white/50 text-sm mt-4">
                    For established communities with 5,000+ members and multiple revenue streams.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <p className="text-white/50 text-sm italic leading-relaxed mt-8 max-w-3xl">
                Pricing is indicative for a white-label deployment. Exact terms depend on member volume, event frequency,
                custom integrations and support requirements.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="edit-section border-t border-white/10">
          <div className="edit-container text-center">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">Get in touch</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="edit-h2 text-white mt-6">Run your community on its own platform.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="edit-body text-white/60 max-w-2xl mx-auto mt-6">
                Book a demo to see how BizMeet can replace your community stack with one branded platform.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edit-btn inline-flex items-center justify-center gap-3"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:ivan.daza@ravolution.se"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <a
                href="mailto:ivan.daza@ravolution.se"
                className="edit-label text-white edit-link mt-10 inline-block"
              >
                ivan.daza@ravolution.se
              </a>
            </Reveal>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default BizMeetPage;
