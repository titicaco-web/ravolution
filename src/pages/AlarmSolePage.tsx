import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";
import { Footprints, ExternalLink, Shield, Users, Briefcase, Activity, Dumbbell, HeartPulse, Stethoscope, Smartphone, MoveRight } from "lucide-react";

const SITE = "https://alarmsole.com";

const categories = [
  "personal safety",
  "connected wearables",
  "family location services",
  "smart footwear",
  "sports & performance technology",
  "lone-worker protection",
  "digital health and rehabilitation",
];

const verticals = [
  { icon: Shield, title: "SAFE", desc: "Discreet SOS, live location, trusted contacts and emergency workflows." },
  { icon: Users, title: "FAMILY", desc: "Kids and family location, geofences, arrival alerts and temporary live tracking." },
  { icon: Briefcase, title: "WORK", desc: "Lone-worker protection, safety timers, man-down workflows and organisational dashboards." },
  { icon: Activity, title: "ACTIVE", desc: "Steps, cadence, pressure distribution, left/right loading and movement intelligence." },
  { icon: Dumbbell, title: "PERFORMANCE", desc: "Running and sports biomechanics, impact, loading, symmetry and fatigue trends." },
  { icon: HeartPulse, title: "CARE", desc: "Location, inactivity and walking-pattern monitoring for senior and assisted-living applications." },
  { icon: Stethoscope, title: "REHAB", desc: "Future validated loading, gait and rehabilitation applications." },
  { icon: Smartphone, title: "CONTROL", desc: "Programmable foot gestures for phones, connected devices, accessibility and hands-free interaction." },
];

const models = [
  { t: "Standalone", d: "AlarmSole Flex sold through DTC, footwear retailers, travel retail and safety channels." },
  { t: "Subscription", d: "Recurring AlarmSole Connect services for safety, location, family and future application modules." },
  { t: "OEM", d: "Certified AlarmSole technology supplied or licensed to footwear manufacturers with activation fees and recurring subscription revenue share." },
  { t: "Platform licensing", d: "Hardware, algorithms, APIs, sensing applications and selected vertical technology can be licensed to strategic partners." },
];

const partnerTypes = [
  "footwear groups",
  "consumer-electronics companies",
  "connected-safety platforms",
  "telecom operators",
  "insurance companies",
  "emergency-response providers",
  "sports technology companies",
  "strategic investors",
];

const interests = [
  "Full acquisition",
  "Strategic investment",
  "OEM integration",
  "Licensing",
  "Joint venture",
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

const AlarmSolePage = () => {
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
      const { error } = await supabase.functions.invoke("send-alarmsole-inquiry", {
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
        <title>AlarmSole™ | Connected Footwear Safety Platform — Ravolution</title>
        <meta
          name="description"
          content="AlarmSole is a patent-pending connected footwear safety platform that turns a deliberate foot gesture into SOS, live location and emergency workflows. Built by Ravolution AB."
        />
        <link rel="canonical" href="https://ravolution.se/en/alarmsole" />
        <meta property="og:title" content="AlarmSole™ — Connected Footwear · Personal Safety · Patent Pending" />
        <meta
          property="og:description"
          content="A discreet connected safety sole activated through the foot — sending SOS, live location and app-based emergency workflows."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/alarmsole" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="AlarmSole, connected footwear, personal safety, smart insole, SOS, live location, patent pending, PRV 2630522-7, lone worker safety, family safety, foot gesture, wearable safety"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Product", "WearableAction"],
              name: "AlarmSole",
              alternateName: "AlarmSole™",
              url: SITE,
              description:
                "A patent-pending connected footwear safety platform that turns a deliberate foot gesture into SOS, live location and emergency workflows.",
              brand: { "@type": "Brand", name: "AlarmSole", url: SITE },
              manufacturer: { "@id": "https://ravolution.se/#organization" },
              category: "Connected Wearables",
              audience: { "@type": "PeopleAudience", audienceType: "Personal safety, family safety, lone-worker protection" },
            },
            {
              "@type": "Brand",
              name: "AlarmSole",
              url: SITE,
              description: "Connected footwear safety brand.",
            },
            {
              "@type": "WebSite",
              name: "AlarmSole.com",
              url: SITE,
              inLanguage: "en",
              about: "Connected footwear for personal safety and emergency workflows.",
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
              <span className="edit-label text-white/40 block mt-8">08 — Flagship</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="edit-display text-[hsl(var(--accent-edit))] mt-4">AlarmSole™</h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="edit-label text-white/70 mt-4">Connected Footwear · Personal Safety · Patent Pending</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="edit-body text-white/70 mt-8 max-w-[60ch]">
                AlarmSole transforms the shoe into a discreet safety interface. A deliberate foot gesture can activate an SOS,
                initiate live location sharing and trigger connected emergency workflows while the phone provides primary live
                audio when available.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="edit-body text-white/60 mt-4 max-w-[60ch]">
                The platform is designed around two commercial paths: <strong className="text-white/90">AlarmSole Flex</strong>, a
                transferable trim-to-fit smart insole, and <strong className="text-white/90">AlarmSole Embedded</strong>, a
                licensable technology layer integrated directly into footwear by manufacturers.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap gap-4">
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
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                >
                  Discuss a Partnership
                  <MoveRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Moat */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Moat" title="Patent-pending connected footwear architecture." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-7">
                <p className="edit-body text-white/70">
                  Patent pending at the Swedish Intellectual Property Office, <strong className="text-white/90">PRV application 2630522-7</strong>, with{" "}
                  <strong className="text-white/90">26 patent claims filed</strong> covering key elements including discreet
                  foot-gesture SOS activation, trim-safe architecture, autonomous LTE/GNSS positioning, silent and audible
                  emergency modes, dual phone/footwear audio architecture, Travel Mode, fail-safe reactivation and
                  standalone/OEM implementations.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  A complementary patent family is being developed around movement intelligence, pressure analytics, family
                  safety, performance, rehabilitation and foot-controlled digital interfaces.
                </p>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.1}>
                <div className="bg-[hsl(var(--surface))] border border-white/10 p-8">
                  <Footprints className="w-8 h-8 text-[hsl(var(--accent-edit))] mb-4" />
                  <span className="edit-label text-white/40 block">IP Status</span>
                  <span className="edit-label text-[hsl(var(--accent-edit))] block mt-2">PATENT PENDING</span>
                  <p className="text-white/70 text-sm mt-4 leading-relaxed">PRV application 2630522-7 · 26 claims filed · pending examination</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Market */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — Market" title="A connected technology layer for footwear." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-12">
                AlarmSole sits at the intersection of several large global categories. The initial beachhead is personal safety,
                while the same connected footwear architecture creates expansion opportunities through software subscriptions,
                additional applications and OEM licensing.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {categories.map((c, i) => (
                <Reveal key={c} delay={i * 0.04}>
                  <div className="bg-[hsl(var(--bg))] p-6">
                    <span className="text-white/85 text-sm">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="edit-body text-white/70 mt-10 max-w-3xl">
                The objective is not simply to sell electronic insoles — it is to establish <strong className="text-white/90">a connected technology layer for footwear</strong>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Platform verticals */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Platform" title="One hardware architecture. Multiple software-defined verticals." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-12">
                Most applications are intended to be activated through software and subscriptions on a common hardware platform.
                More advanced performance or clinical applications may require denser sensing and dedicated validation.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {verticals.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.title} delay={i * 0.04}>
                    <div className="bg-[hsl(var(--surface))] p-8 h-full">
                      <Icon className="w-6 h-6 text-[hsl(var(--accent-edit))] mb-4" />
                      <h3 className="text-lg font-display font-bold text-white">{v.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed mt-3">{v.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Model */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="04 — Model" title="Subscription-first hardware platform." />
            <Reveal>
              <p className="edit-body text-white/60 max-w-3xl mb-12">
                The hardware is deliberately designed around a relatively low sustainable margin; long-term enterprise value is
                intended to come from <strong className="text-white/90">subscriptions, software activation, licensing and the installed device base</strong>.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {models.map((m, i) => (
                <Reveal key={m.t} delay={i * 0.04}>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">{m.t}</span>
                    <p className="text-white/85 text-sm leading-relaxed">{m.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Opportunity */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — Strategic Opportunity" title="Open to discussions with global partners." />
            <div className="grid md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-6">
                <p className="edit-body text-white/70">
                  AlarmSole is being developed and owned by <strong className="text-white/90">Ravolution AB</strong>. Ravolution is open to discussions with
                  footwear groups, consumer-electronics companies, connected-safety platforms, telecom operators, insurance
                  companies, emergency-response providers, sports technology companies and strategic investors.
                </p>
                <p className="edit-body text-white/70 mt-6">
                  Opportunities may include investment, OEM integration, licensing, joint ventures or broader strategic transactions.
                </p>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <span className="edit-label text-white/40 block mb-4">Relevant partner profiles</span>
                <ul className="space-y-2">
                  {partnerTypes.map((p) => (
                    <li key={p} className="text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact / Inquiry */}
        <section id="contact" className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <Reveal>
                  <span className="edit-label text-[hsl(var(--accent-edit))]">Get in touch</span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="edit-h2 text-white mt-6">Explore AlarmSole.</h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="edit-body text-white/60 mt-6">
                    Tell us about your interest and we will respond directly. All enquiries are reviewed by the Ravolution team.
                  </p>
                </Reveal>
                <Reveal delay={0.25}>
                  <a
                    href={SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edit-btn inline-flex items-center gap-3 mt-10"
                  >
                    <span>Visit AlarmSole.com</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Reveal>
              </div>

              <div className="md:col-span-7">
                <Reveal delay={0.1}>
                  <form onSubmit={submit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={set("name")}
                          className={inputClass}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={set("company")}
                          className={inputClass}
                          placeholder="Company or organisation"
                        />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Role</label>
                        <input
                          type="text"
                          value={form.role}
                          onChange={set("role")}
                          className={inputClass}
                          placeholder="Your role"
                        />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={set("phone")}
                          className={inputClass}
                          placeholder="+1 000 000 0000"
                        />
                      </div>
                      <div>
                        <label className="edit-label text-white/50 block mb-2">Country</label>
                        <input
                          type="text"
                          value={form.country}
                          onChange={set("country")}
                          className={inputClass}
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="edit-label text-white/50 block mb-2">Area of interest *</label>
                      <select
                        value={form.interest}
                        onChange={set("interest")}
                        className={`${inputClass} appearance-none`}
                      >
                        {interests.map((i) => (
                          <option key={i} value={i} className="bg-[hsl(var(--bg))] text-white">
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="edit-label text-white/50 block mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        className={inputClass}
                        placeholder="Tell us about your interest and how you see AlarmSole fitting your strategy."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="edit-btn inline-flex items-center gap-3 disabled:opacity-50"
                    >
                      {sending ? "Sending..." : "Send enquiry"}
                      <MoveRight className="w-4 h-4" />
                    </button>
                  </form>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default AlarmSolePage;
