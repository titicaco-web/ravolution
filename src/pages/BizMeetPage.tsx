import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Users, Calendar, Mail, MessageSquare, CreditCard } from "lucide-react";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const SITE = "https://mlops.ravolution.se/platform";

const valueBoxes = [
  {
    label: "Ideal for",
    body: "Events & professional communities",
    detail: "Conferences · Associations · Industry networks · Member organisations · B2B communities",
  },
  {
    label: "What you get",
    body: "Everything under your own brand",
    detail:
      "AI-powered matchmaking · 1-to-1 meetings · Events · Member profiles · Messaging · Content · Notifications · Sponsor visibility & lead generation",
  },
  {
    label: "Business value",
    body: "More valuable connections",
    detail:
      "Increase meaningful meetings, member engagement, returning participants and measurable sponsor ROI — before, during and after every event.",
  },
];

const conversionStrip = [
  { label: "Match", desc: "Connect participants by business relevance" },
  { label: "Meet", desc: "Turn matches into scheduled 1-to-1 meetings" },
  { label: "Engage", desc: "Keep the community active between events" },
  { label: "Measure", desc: "Give organisers and sponsors measurable outcomes" },
];

const whyBizmeet = [
  {
    title: "Better participant ROI",
    desc: "Help attendees identify the people they should actually meet.",
  },
  {
    title: "Better organiser ROI",
    desc: "Create engagement and value throughout the year, not only during event days.",
  },
  {
    title: "Better sponsor ROI",
    desc: "Move beyond logo exposure toward qualified introductions, conversations and measurable engagement.",
  },
];

const BizMeetPage = () => {
  const lp = useLangPath();
  const contactUrl = `${lp("/contact")}?project=bizmeet`;

  return (
    <>
      <Helmet>
        <title>BizMeet™ | White-Label Event & Community Platform — Ravolution</title>
        <meta
          name="description"
          content="Turn your event or professional community into a year-round business network. Bizmeet connects the right people before, during and after an event — under your own brand."
        />
        <link rel="canonical" href="https://ravolution.se/en/bizmeet" />
        <meta property="og:title" content="BizMeet™ — White-Label Event & Community Platform" />
        <meta
          property="og:description"
          content="Turn your event or professional community into a year-round business network. Under your own brand."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/bizmeet" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="BizMeet, event platform, community platform, white-label event software, professional networking, B2B community, matchmaking, sponsor ROI, Ravolution"
        />
        <script type="application/ld+json">
          {JSON.stringify({
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
                  "White-label event and community platform that matches participants, enables meetings and keeps professional networks connected before, during and after events.",
                publisher: { "@id": "https://ravolution.se/#organization" },
              },
              {
                "@type": "Brand",
                name: "BizMeet",
                url: SITE,
                description: "White-label event and community platform brand.",
              },
              {
                "@type": "WebSite",
                name: "BizMeet",
                url: SITE,
                inLanguage: "en",
                about: "White-label event and community platform for conferences, associations and professional networks.",
              },
              {
                "@type": "Organization",
                "@id": "https://ravolution.se/#organization",
                name: "Ravolution AB",
                url: "https://ravolution.se/",
                email: "ivan.daza@ravolution.se",
              },
            ],
          })}
        </script>
      </Helmet>

      <EditorialShell>
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 md:px-12 min-h-[80vh] flex flex-col justify-end overflow-hidden">
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
              <span className="edit-label text-white/40 block mt-8">05 — Event Technology</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-4">BizMeet™</h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="edit-label text-white/70 mt-4">White-Label Event & Community Platform</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="edit-h2 text-white mt-6 max-w-[22ch]">
                Turn every event into the beginning of a business relationship.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="edit-body text-white/70 mt-6 max-w-[60ch]">
                Bizmeet matches the right participants, helps them book meaningful 1-to-1 meetings and keeps the community
                connected before, during and after the event.
              </p>
            </Reveal>
            <Reveal delay={0.38}>
              <p className="edit-body text-white/60 mt-4 max-w-[60ch]">
                Events · Matchmaking · Meetings · Community · Content · Sponsors — all under your own brand.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="edit-label text-white/40 mt-6">
                Built for conferences, industry communities, associations and professional networks.
              </p>
            </Reveal>

            {/* Value boxes */}
            <Reveal delay={0.5}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-5xl">
                {valueBoxes.map((box) => (
                  <div key={box.label} className="bg-[hsl(var(--surface))] p-6">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">{box.label}</span>
                    <p className="text-white font-display font-bold text-lg leading-snug">{box.body}</p>
                    <p className="text-white/60 text-sm leading-relaxed mt-3">{box.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Conversion strip */}
            <Reveal delay={0.55}>
              <div className="mt-10 flex flex-wrap gap-6 md:gap-10 max-w-4xl">
                {conversionStrip.map((item) => (
                  <div key={item.label} className="flex items-baseline gap-3">
                    <span className="edit-label text-[hsl(var(--accent-edit))]">{item.label}</span>
                    <span className="text-white/60 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.6}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={contactUrl}
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[hsl(var(--accent-edit))] text-black font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:bg-white"
                >
                  <span>Book a Bizmeet Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edit-btn inline-flex items-center gap-3"
                >
                  <span>See Bizmeet Live</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <p className="edit-body text-white/50 mt-6 max-w-[60ch]">
                Planning an event or running a professional community? Let us show you how Bizmeet can fit your brand and
                workflow.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Positioning */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Positioning" title="One platform. One brand. One continuous network." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-7">
                <p className="edit-body text-white/70">
                  Most events end when the doors close. Attendees leave with a stack of business cards, a few LinkedIn
                  requests, and no structured way to keep the right conversations alive. Organisers lose the signal they
                  just paid to create.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Bizmeet turns every event into the beginning of a business relationship —{" "}
                  <strong className="text-white/90">not the end of one</strong>.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Replace fragmented event, community, communication and matchmaking tools with one platform under your own
                  brand. Members discover relevant contacts, book meetings, continue conversations and create measurable value
                  for organisers, partners and sponsors.
                </p>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.1}>
                <div className="bg-[hsl(var(--surface))] border border-white/10 p-8">
                  <span className="edit-label text-white/40 block mb-4">In one platform</span>
                  <ul className="space-y-3">
                    <li className="text-white/70 text-sm leading-relaxed flex gap-3">
                      <Calendar className="w-4 h-4 text-[hsl(var(--accent-edit))] mt-0.5 shrink-0" />
                      <span>Events, ticketing and check-in</span>
                    </li>
                    <li className="text-white/70 text-sm leading-relaxed flex gap-3">
                      <Users className="w-4 h-4 text-[hsl(var(--accent-edit))] mt-0.5 shrink-0" />
                      <span>Member profiles and segmentation</span>
                    </li>
                    <li className="text-white/70 text-sm leading-relaxed flex gap-3">
                      <MessageSquare className="w-4 h-4 text-[hsl(var(--accent-edit))] mt-0.5 shrink-0" />
                      <span>Messaging, groups and community channels</span>
                    </li>
                    <li className="text-white/70 text-sm leading-relaxed flex gap-3">
                      <Mail className="w-4 h-4 text-[hsl(var(--accent-edit))] mt-0.5 shrink-0" />
                      <span>Announcements, newsletters and notifications</span>
                    </li>
                    <li className="text-white/70 text-sm leading-relaxed flex gap-3">
                      <CreditCard className="w-4 h-4 text-[hsl(var(--accent-edit))] mt-0.5 shrink-0" />
                      <span>Memberships, tickets and subscriptions</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Bizmeet? */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — Why Bizmeet?" title="Measurable networking ROI for every stakeholder." />
            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {whyBizmeet.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <h3 className="text-lg font-display font-bold text-white">{item.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-3">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="edit-section border-t border-white/10">
          <div className="edit-container text-center">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">Get a demo</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="edit-h2 text-white mt-6">See Bizmeet in action.</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="edit-body text-white/60 max-w-2xl mx-auto mt-6">
                Let us walk you through the platform and show how it can be tailored to your event, community or
                association.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={contactUrl}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[hsl(var(--accent-edit))] text-black font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:bg-white"
                >
                  <span>Book a Bizmeet Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edit-btn inline-flex items-center justify-center gap-3"
                >
                  <span>See Bizmeet Live</span>
                  <ExternalLink className="w-4 h-4" />
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
