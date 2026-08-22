import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";
import PortfolioAccessGate, { isGateUnlocked } from "@/components/PortfolioAccessGate";
import { MapPin, ExternalLink, ArrowRight, Users, TrendingUp, Award, Wallet } from "lucide-react";
import PhoneFrame from "@/components/pikpcash/PhoneFrame";
import splashAsset from "@/assets/pikpcash/splash.jpg.asset.json";
import mapAsset from "@/assets/pikpcash/map.png.asset.json";
import doorAsset from "@/assets/pikpcash/door.png.asset.json";
import productsAsset from "@/assets/pikpcash/products.jpg.asset.json";
import productAsset from "@/assets/pikpcash/product.png.asset.json";
import receiptAsset from "@/assets/pikpcash/receipt.png.asset.json";
import teamAsset from "@/assets/pikpcash/team.png.asset.json";
import notebookAsset from "@/assets/pikpcash/notebook.png.asset.json";

const CONTACT_EMAIL = "ivan.daza@ravolution.se";

const mapCallouts = [
  "Deal pins — PikpCash available at this location; coins = open money, handshake = deal in progress, bell = task.",
  "Task — do it and be rewarded, don't and be punished.",
  "Close a deal — or lose it to a competitor.",
  "Average rating (4,31) — affects commission level on all deals and on each deal.",
  "PT (2 487 pt) — your level and the points until the next level.",
  "Earned (4 543 sek) — Cash Points turned into cash or the stuff you want; 5 457 kr to goal.",
];

const checkInPoints = [
  "Sales status on each address: you can go in · you must go in · if blocked to another player, don't go in.",
  "Re-sell when you reach a new level, re-sell when products and services shift — or lose the customer.",
  "Friends and competitors are alerted when an order is placed.",
  "Personal goal engine: “You have earned 4 500 kr this month. Your goal is 12 400 kr for an iPad and Camera — close 40 more deals.” Goals are broken down into daily to-dos.",
];

const incentives = [
  { t: "Commission ladder", d: "30 % → 60 % player commission, driven by orders, order value, customer rating, closing rate, pitches and hours on the field." },
  { t: "Hours pay", d: "More hours per week means a higher commission bracket." },
  { t: "Rating pays", d: "Average rating raises or lowers commission on every deal — one bad streak is felt immediately." },
  { t: "Level unlocks", d: "Each level opens better product categories and a bigger cut. Level 1 books and magazines → Level 7 a Tesla or a trip to Mars." },
  { t: "Reward & punish", d: "Every action creates results; every non-action is punished. Tasks carry both carrot and stick." },
  { t: "Deal urgency", d: "An open deal can be lost to a competitor; blocked deals belong to another player." },
  { t: "Area limits & unlocks", d: "Territory itself is a reward — perform to unlock more of the map." },
  { t: "Surprise rewards", d: "Unexpected bonuses at unexpected moments keep the loop unpredictable." },
  { t: "Quality gate", d: "Retailers can demand four-star sellers; reputation becomes market access." },
  { t: "Goals made tangible", d: "Cash Points convert to cash or the exact thing the player wants — and the app breaks the goal into a daily to-do list." },
  { t: "Recruiter bonus", d: "5 % on a recruit's first month: the salesforce grows itself." },
  { t: "Learn to earn", d: "Video courses per product raise commission; a live player curriculum, test levels and cancelling rate keep quality honest." },
  { t: "Social proof", d: "Badges, top-seller lists and public team progress make status visible." },
  { t: "Re-sell triggers", d: "New level, shifted product lines, or the risk of losing the customer: the map never goes quiet." },
];

const conceptCells = [
  {
    label: "Every location, a sales point",
    body: "The map is the market. Sellers check in at any address — a home, a workplace, a street corner — and open a deal on the spot.",
  },
  {
    label: "Zero entry barriers",
    body: "No CV, no interview, no stock to buy. Level 1 products can be sold by anyone from day one, with training built into the app.",
  },
  {
    label: "Selling, gamified",
    body: "Orders, order value, customer ratings, closing rate and hours in the field move a player up the ladder. Higher levels unlock better products and higher commission.",
  },
  {
    label: "Teams that push each other",
    body: "Sports teams and school classes sell together toward a shared goal — the trip, the new kit — with rankings, coaching and competition keeping everyone moving.",
  },
];

const mechanics = [
  { icon: MapPin, title: "Check in & close", desc: "Each address carries live sales status. Open deals are visible to nearby players — close it, or lose it to a competitor." },
  { icon: Users, title: "Learn to earn", desc: "Short video courses per product raise commission. Sales tips, live curriculum and constant coaching turn first-timers into closers." },
  { icon: Award, title: "Ratings steer commission", desc: "Every order confirmation asks the customer to rate the seller with one click. Quality polices itself." },
  { icon: Wallet, title: "Rewards you can hold", desc: "Cash Points convert to cash or to goals players actually want — a hoverboard, an iPad, the team trip." },
];

const levels = [
  { n: "LV 1", cat: "Books, magazines, subscriptions, simple home products", note: "ZERO ENTRY" },
  { n: "LV 2", cat: "Sports, tech, cleaning, food", note: "COMMISSION ↑" },
  { n: "◆", cat: "Surprise rewards on unexpected moments", note: "", gate: true },
  { n: "LV 3", cat: "Kitchen, home, streaming", note: "COMMISSION ↑" },
  { n: "LV 4", cat: "Wine, tools, garden", note: "COMMISSION ↑" },
  { n: "◆", cat: "Retailers can demand four-star sellers", note: "", gate: true },
  { n: "LV 5", cat: "Higher-priced, more advanced products", note: "COMMISSION ↑" },
  { n: "LV 6", cat: "Camera, watch, alarm", note: "COMMISSION ↑" },
  { n: "LV 7", cat: "Tesla — or a trip to Mars", note: "LEGEND" },
];

const modelCells = [
  { label: "The split", body: "Partners release a retail margin on each order. The player takes a commission that grows with level and volume; PikpCash keeps the remainder. Player earnings scale from pocket money to full income." },
  { label: "Partner control", body: "An open platform for suppliers — with quality built in. Only qualified sellers represent each product at each level, training is shaped per product, and partners see what is sold, by whom, with what outcome." },
  { label: "Payments, Nordic-grade", body: "Swish, Autogiro, card, Klarna and BankID in the purchase loop. Fast, familiar and fraud-resistant — sellers are paid out weekly." },
  { label: "White label", body: "The same engine offered as a white-label direct sales system for brands and retail chains: easy setup, monthly fee, per-user pricing, Salesforce integration." },
];

const interests = [
  "Strategic investment",
  "Full acquisition",
  "White-label partnership",
  "Retail / brand integration",
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

const GATE_PROJECT = "PikpCash®";

const PikpCashPage = () => {
  const lp = useLangPath();
  const [unlocked, setUnlocked] = useState(() => isGateUnlocked(GATE_PROJECT));
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
      const { error } = await supabase.functions.invoke("send-pikpcash-inquiry", {
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
        <title>PikpCash® | Direct Sales Gamification Platform — Ravolution</title>
        <meta
          name="description"
          content="PikpCash turns selling into a game and every address into a point of sale. A direct-sales platform concept by Ravolution AB, documented since 2017."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ravolution.se/en/pikpcash" />
        <meta property="og:title" content="PikpCash® — Direct Sales Gamification Platform" />
        <meta
          property="og:description"
          content="Every address on the planet is a point of sale. PikpCash turns selling into a game and young people into a global, self-organising salesforce."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/pikpcash" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="PikpCash, direct sales, gamified sales, zero unemployment, salesforce platform, gig economy, youth employment, point of sale, field sales, Ravolution"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "PikpCash",
              alternateName: "PikpCash®",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: "https://ravolution.se/en/pikpcash",
              inLanguage: "en",
              description:
                "Direct sales gamification platform that turns every address into a point of sale and selling into a competitive, level-based game.",
              publisher: { "@id": "https://ravolution.se/#organization" },
            },
            {
              "@type": "Brand",
              name: "PikpCash",
              url: "https://ravolution.se/en/pikpcash",
              description: "Direct sales gamification platform brand.",
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
        {!unlocked ? (
          <section className="pt-40 pb-32 px-6 md:px-12 min-h-[80vh]">
            <div className="edit-container">
              <Link to={lp("/portfolio")} className="edit-label text-white/50 edit-link">
                ← Portfolio
              </Link>
              <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-8">PikpCash®</h1>
              <p className="edit-label text-white/70 mt-4 mb-10">
                Direct Sales Gamification Platform — restricted brief
              </p>
              <div className="grid md:grid-cols-12">
                <PortfolioAccessGate
                  project={GATE_PROJECT}
                  code="gyrocraft2017"
                  onUnlock={() => setUnlocked(true)}
                />
              </div>
            </div>
          </section>
        ) : (
        <>
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
              <span className="edit-label text-white/40 block mt-8">05 — Direct Sales · Gamification</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-4">PikpCash®</h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="edit-label text-white/70 mt-4">Direct Sales Gamification Platform</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="edit-h2 text-white mt-6 max-w-[22ch]">
                Every address on the planet is a point of sale.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="edit-body text-white/70 mt-6 max-w-[60ch]">
                PikpCash turns selling into a game and young people into a global, self-organising salesforce.
                Zero barriers to start earning. Teams, levels and live coaching built in.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=PikpCash%20investor%20enquiry`}
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[hsl(var(--accent-edit))] text-black font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:bg-white"
                >
                  <span>Request Investor Access</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="edit-btn inline-flex items-center gap-3"
                >
                  <span>Discuss the Opportunity</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-12 flex flex-wrap gap-4">
                <span className="edit-label text-white/55 border border-white/10 px-4 py-2">Concept · Zero unemployment</span>
                <span className="edit-label text-white/55 border border-white/10 px-4 py-2">Provenance · 7 April 2017</span>
                <span className="edit-label text-white/55 border border-white/10 px-4 py-2">Origin · Stockholm, Sweden</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Concept */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Concept" title="Zero barriers between wanting to earn and earning." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-12">
                PikpCash is built on a simple thesis: anyone should be able to turn idle time and local knowledge into income.
                The platform removes the traditional gatekeepers of sales — inventory, interviews and upfront capital — and replaces them with training, reputation and competition.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {conceptCells.map((cell, i) => (
                <Reveal key={cell.label} delay={i * 0.04}>
                  <div className="bg-[hsl(var(--surface))] p-8 h-full">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">{cell.label}</span>
                    <p className="text-white/85 text-sm leading-relaxed">{cell.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mechanics */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — Mechanics" title="Face to face, on the map, against the clock." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {mechanics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <Reveal key={m.title} delay={i * 0.04}>
                    <div className="bg-[hsl(var(--bg))] p-8 h-full">
                      <Icon className="w-6 h-6 text-[hsl(var(--accent-edit))] mb-4" />
                      <h3 className="text-lg font-display font-bold text-white">{m.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed mt-3">{m.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Levels */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Levels" title="The ladder: better products, higher cut, prouder seller." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-12">
                Sellers advance by performance — orders, value, ratings and hours in the field. Each level unlocks higher-commission products,
                while surprise gates and retailer demands keep the system dynamic and quality-focused.
              </p>
            </Reveal>
            <div className="border border-white/10">
              {levels.map((lv, i) => (
                <Reveal key={`${lv.n}-${i}`} delay={i * 0.03}>
                  <div
                    className={`grid grid-cols-[80px_1fr_140px] md:grid-cols-[100px_1fr_200px] border-b border-white/10 last:border-b-0 ${
                      lv.gate ? "bg-[hsl(var(--surface))]" : "bg-[hsl(var(--bg))]"
                    }`}
                  >
                    <div className="p-4 md:p-5 flex items-center font-mono text-xs md:text-sm text-[hsl(var(--accent-edit))] border-r border-white/10">
                      {lv.n}
                    </div>
                    <div className={`p-4 md:p-5 flex items-center text-sm ${lv.gate ? "text-[hsl(var(--accent-edit))] font-mono uppercase tracking-widest text-xs" : "text-white/85"}`}>
                      {lv.cat}
                    </div>
                    <div className="hidden md:flex p-5 items-center justify-end text-right text-xs font-mono text-white/50 border-l border-white/10">
                      {lv.note}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Model */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="04 — Model" title="One margin, three winners." />
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {modelCells.map((cell, i) => (
                <Reveal key={cell.label} delay={i * 0.04}>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">{cell.label}</span>
                    <p className="text-white/85 text-sm leading-relaxed">{cell.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <Reveal>
              <div className="border border-white/10 bg-[hsl(var(--surface))] p-10 md:p-16">
                <p className="edit-h2 text-white max-w-[30ch]">
                  PikpCash makes youth compete to close deals on <span className="text-[hsl(var(--accent-edit))]">every address</span> on the planet.
                </p>
                <p className="edit-label text-white/50 mt-8">Founding thesis · Stockholm, 2017</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="edit-section border-t border-white/10">
          <div className="edit-container">
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-5">
                <span className="edit-label text-[hsl(var(--accent-edit))]">Investor access</span>
                <h2 className="edit-h2 text-white mt-6">Request the PikpCash data room.</h2>
                <p className="edit-body text-white/60 mt-6">
                  The original 2017 pitch deck, player-earning and revenue models, provenance record and document index are available to invited investors.
                </p>
                <p className="edit-body text-white/60 mt-4">
                  Send a direct enquiry or email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-white edit-link">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </Reveal>
              <Reveal className="md:col-span-7" delay={0.1}>
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input className={inputClass} placeholder="Name *" value={form.name} onChange={set("name")} required />
                    <input className={inputClass} placeholder="Email *" type="email" value={form.email} onChange={set("email")} required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input className={inputClass} placeholder="Company" value={form.company} onChange={set("company")} />
                    <input className={inputClass} placeholder="Role" value={form.role} onChange={set("role")} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input className={inputClass} placeholder="Phone" value={form.phone} onChange={set("phone")} />
                    <input className={inputClass} placeholder="Country" value={form.country} onChange={set("country")} />
                  </div>
                  <select className={inputClass} value={form.interest} onChange={set("interest")} required>
                    {interests.map((i) => (
                      <option key={i} value={i} className="bg-[hsl(var(--bg))] text-white">
                        {i}
                      </option>
                    ))}
                  </select>
                  <textarea
                    className={`${inputClass} min-h-[140px]`}
                    placeholder="Message *"
                    value={form.message}
                    onChange={set("message")}
                    required
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex items-center gap-3 px-7 py-4 bg-[hsl(var(--accent-edit))] text-black font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:bg-white disabled:opacity-50"
                  >
                    <span>{sending ? "Sending..." : "Send enquiry"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
        </>
        )}
      </EditorialShell>
    </>
  );
};

export default PikpCashPage;
