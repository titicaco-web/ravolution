import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Check, ArrowRight, MapPin } from "lucide-react";

type Lang = "sv" | "en";

const T = {
  sv: {
    metaTitle: "Säljpartner hos Ravolution AB — Sälj svenska SaaS-plattformar globalt",
    metaDesc: "Provisionsbaserat samarbete för erfarna B2B-säljare. Sälj Bizmeet, xPortMatch, iApply, CarbonX och fler — produktion, demoinstanser och säljkit på plats.",
    eyebrow: "Säljpartner-program",
    h1Pre: "Sälj plattformar som ",
    h1Em: "faktiskt finns",
    h1Post: ". Bygg en återkommande intäkt som speglar din ambition.",
    sub: "Ravolution AB bygger och driver svenska SaaS-plattformar i produktion — Bizmeet, xPortMatch, iApply, CommunicaringSchool, Rosetta Livingstone och CarbonX. Vi söker erfarna B2B-säljare som vill bygga en återkommande intäkt med en starkt motiverande ersättningsmodell.",
    ctaPrimary: "Ansök som säljpartner",
    ctaSecondary: "Maila Ivan direkt",
    presence: "Etablerade i",
    cities: "Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich",
    kpis: [
      { n: "27", l: "Patent" },
      { n: "6", l: "Branscher där våra plattformar är i drift" },
      { n: "40+", l: "Marknader som Bizmeet är konstruerat för" },
    ],
    sellTitle: "Det här säljer du",
    sellIntro: "Ravolution äger och driver alla plattformar. Du fokuserar på rätt kund och stänger affären — vi levererar och förvaltar.",
    platforms: [
      { name: "Bizmeet™", star: true, what: "B2B-community, AI-matchning, event och leads. White-label.", who: "Exportbyråer, branschorgan, business clubs" },
      { name: "xPortMatch™", what: "Hamn- och logistikmatchning.", who: "Hamnar, speditörer, exportregioner" },
      { name: "iApply™", what: "AI-driven kandidatmatchning.", who: "Universitet, regioner, arbetsförmedlingar" },
      { name: "Rosetta Livingstone™", what: "Språk- och kulturplattform.", who: "Kommuner, integrationsprojekt, multinationella" },
      { name: "CommunicaringSchool™", what: "Skolplattform med AI-stödd kommunikation.", who: "Skolor, friskolekoncerner, kommuner" },
      { name: "CarbonX™", what: "Verifierad handel av koldioxidkrediter (Gold Standard / Verra).", who: "Industri, fastighetsbolag, finanssektor" },
    ],
    starNote: "★ = Förstaprioritet just nu",
    bizTitle: "Bizmeet — din snabbaste väg till första provisionen",
    bizSubtitle: "Live i produktion. Demonstrerbar idag.",
    bizBody: "Bizmeet är en white-label community- och matchningsplattform som förvandlar 40+ marknader, hundratals rådgivare och tusentals klientföretag till ett mätbart digitalt ekosystem. Lösningen drivs live på businesssweden.ravolution.se och i en svensk flaggskeppsinstans hos Convendum.",
    bizBullets: [
      "Avtalsvärde år 1: Tier 1-segment",
      "Säljcykel: 3–6 månader beroende på beslutsfattare",
      "Leverans: 60–90 dagar från signatur till live",
      "Tydlig revenue share-modell till kundens fördel på paid tiers",
    ],
    bizKitTitle: "Ditt kit för Bizmeet",
    bizKit: [
      "Demoinstans på businesssweden.ravolution.se",
      "Privat sandlåda du bokar med kund",
      "Fullständig pitch-PDF",
      "Invändningsbibliotek",
      "45-min månadssync med Ivan",
    ],
    earnTitle: "Så tjänar du pengar",
    earnSub: "En starkt motiverande ersättningsmodell",
    earnBody: "Vi har byggt en provisionsmodell som belönar både stängningen och den långsiktiga relationen. Ersättningen sträcker sig över setup, drift, revenue share och tilläggsutveckling — så att en bra första affär växer till en återkommande intäkt över flera år. Exakta nivåer går vi igenom i introsamtalet.",
    earnPillars: [
      { title: "Setup-fee", desc: "Engångsersättning vid signerat avtal." },
      { title: "Drift & utveckling", desc: "Återkommande andel under hela kundens livstid." },
      { title: "Revenue share", desc: "Andel av kundens betalda nivåer i flera år." },
      { title: "Tilläggsutveckling", desc: "Provision på integrationer och anpassningar." },
    ],
    whoTitle: "Vem vi söker",
    personas: [
      { title: "Den erfarna B2B-säljaren", body: "Du har 5+ år av att stänga SaaS- eller konsulttjänster i 0,5–5 MSEK-segmentet. Du jobbar gärna självständigt med tydliga mål." },
      { title: "Den nordiska networkern", body: "Du har ett befintligt nätverk inom branschorganisationer, exportbyråer, coworking eller offentlig sektor i Sverige eller Norden." },
      { title: "Den specialiserade konsulten", body: "Du jobbar redan på provision eller F-skatt och vill addera en SaaS-portfölj till din befintliga praktik utan exklusivitet." },
    ],
    getTitle: "Vad du får från oss",
    getList: [
      "Egen e-post fornamn.efternamn@ravolution.se efter signerat avtal",
      "Demoinstans + privat sandlåda",
      "Pipeline (HubSpot eller Notion) med full provisionstransparens",
      "NDA-mall och avtalsutkast",
      "Säljkit, invändningsbibliotek, prislistor",
      "Månadssync 45 min för coachning och eskaleringar",
      "Tydligt provisionsavtal med juridisk klarhet kring IP, GDPR och uppsägning",
    ],
    processTitle: "Så här går det till",
    steps: [
      { t: "Ansök", d: "Fyll i formuläret nedan" },
      { t: "Introsamtal", d: "30 min med Ivan inom 5 arbetsdagar" },
      { t: "Match-check", d: "Vi går igenom ICP, nätverk och tidigare resultat" },
      { t: "Avtal", d: "Provisionsavtal signeras digitalt" },
      { t: "Onboarding", d: "Demo, säljkit, pipeline, e-post — samma dag" },
      { t: "Första 90 dagar", d: "Mål: 1 stängd Bizmeet-affär eller 3 kvalificerade demomöten" },
      { t: "Skala", d: "Lägg till fler plattformar i din portfölj" },
    ],
    faqTitle: "Vanliga frågor",
    faq: [
      { q: "Är detta en anställning?", a: "Nej. Det är ett provisionsbaserat samarbetsavtal. Du fakturerar Ravolution med F-skatt eller motsvarande. Du behåller din frihet." },
      { q: "Är det exklusivt?", a: "Nej. Du får sälja kompletterande tjänster i andra vertikaler parallellt, så länge du inte säljer direkt konkurrerande plattformar inom samma ICP." },
      { q: "Vad händer om kunden churnar?", a: "Setup-provisionen behåller du. Drift- och revenue-share-provisionen följer kundens livslängd." },
      { q: "Hur snabbt får jag betalt?", a: "Provision utbetalas månatligen i efterskott senast den 25:e i månaden efter den månad då Ravolution mottagit kundbetalning." },
      { q: "Får jag använda Ravolutions varumärke?", a: "Ja, inom ramarna i provisionsavtalet — säljkit, demoinstanser, e-post och officiella mallar. Egenproducerat marknadsmaterial ska godkännas innan publicering." },
    ],
    formTitle: "Ansök som säljpartner",
    formSub: "Vi läser varje ansökan personligen och svarar inom 5 arbetsdagar.",
    f: {
      firstName: "Förnamn", lastName: "Efternamn", email: "E-post", phone: "Telefon",
      city: "Stad", linkedin: "LinkedIn-profil (URL)", company: "Företag (om du fakturerar via bolag)",
      orgNumber: "Org.nr / Personnummer", industries: "Branschfokus (välj alla som passar)",
      primaryPlatform: "Plattform du är mest intresserad av att sälja",
      pastDeal: "Berätta om en deal du stängt på 0,5+ MSEK (min 200 tecken)",
      network: "Befintligt nätverk relevant för Ravolutions plattformar (valfritt)",
      startDate: "När kan du börja?",
      source: "Hur hörde du om Ravolution? (valfritt)",
      consent: "Jag samtycker till att Ravolution AB behandlar mina personuppgifter enligt vår integritetspolicy i syfte att utvärdera min ansökan.",
      submit: "Skicka ansökan",
      sending: "Skickar…",
      success: "Tack — vi hör av oss inom 5 arbetsdagar. Ivan läser personligen varje ansökan.",
      error: "Det gick inte att skicka. Maila ivan.daza@ravolution.se direkt.",
      optional: "valfritt",
    },
    industriesOptions: ["Export & internationalisering", "Branschorganisationer", "Coworking & business clubs", "Universitet & alumni", "Logistik & hamnar", "Utbildning K-12", "Hållbarhet & ESG", "Annat"],
    startOptions: ["Omgående", "Inom 1 månad", "Inom 3 månader", "Bara utforskar"],
    footerCta: "Inte redo att ansöka än? Maila Ivan direkt på ",
  },
  en: {
    metaTitle: "Sales Partner at Ravolution AB — Sell production-grade SaaS globally",
    metaDesc: "Commission-based partnership for experienced B2B salespeople. Sell Bizmeet, xPortMatch, iApply, CarbonX and more — live platforms, demo instances and full sales kit.",
    eyebrow: "Sales Partner Program",
    h1Pre: "Sell platforms that ",
    h1Em: "actually exist",
    h1Post: ". Build recurring income that matches your ambition.",
    sub: "Ravolution AB builds and operates production-grade SaaS platforms — Bizmeet, xPortMatch, iApply, CommunicaringSchool, Rosetta Livingstone and CarbonX. We are recruiting experienced B2B salespeople worldwide to build recurring revenue under a strongly motivating compensation model.",
    ctaPrimary: "Apply as sales partner",
    ctaSecondary: "Email Ivan directly",
    presence: "Established in",
    cities: "Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich",
    kpis: [
      { n: "27", l: "Patents" },
      { n: "6", l: "Industries with platforms in production" },
      { n: "40+", l: "Markets Bizmeet is engineered for" },
    ],
    sellTitle: "What you get to sell",
    sellIntro: "Ravolution owns and operates every platform. You focus on the right customer and close the deal — we deliver and run it.",
    platforms: [
      { name: "Bizmeet™", star: true, what: "B2B community, AI matching, events and leads. White-label.", who: "Export agencies, trade bodies, business clubs" },
      { name: "xPortMatch™", what: "Port and logistics matching.", who: "Ports, freight forwarders, export regions" },
      { name: "iApply™", what: "AI-driven candidate matching.", who: "Universities, regions, employment agencies" },
      { name: "Rosetta Livingstone™", what: "Language and culture platform.", who: "Municipalities, integration programs, multinationals" },
      { name: "CommunicaringSchool™", what: "School platform with AI-assisted communication.", who: "Schools, school groups, municipalities" },
      { name: "CarbonX™", what: "Verified carbon credit trading (Gold Standard / Verra).", who: "Industry, real estate, finance sector" },
    ],
    starNote: "★ = Top priority right now",
    bizTitle: "Bizmeet — your fastest path to a first close",
    bizSubtitle: "Live in production. Demonstrable today.",
    bizBody: "Bizmeet is a white-label community and matching platform that turns 40+ markets, hundreds of advisors and thousands of client companies into a measurable digital ecosystem. The solution runs live at businesssweden.ravolution.se and at a Swedish flagship instance with Convendum.",
    bizBullets: [
      "Year-1 contract value: Tier 1 segment",
      "Sales cycle: 3–6 months depending on decision-maker",
      "Delivery: 60–90 days from signature to live",
      "Clear revenue share model favoring the customer on paid tiers",
    ],
    bizKitTitle: "Your Bizmeet kit",
    bizKit: [
      "Demo instance at businesssweden.ravolution.se",
      "Private sandbox you book with the customer",
      "Full pitch PDF",
      "Objection handling library",
      "45-min monthly sync with Ivan",
    ],
    earnTitle: "How you get paid",
    earnSub: "A strongly motivating compensation model",
    earnBody: "We have built a commission model that rewards both the close and the long-term relationship. Compensation spans setup, operations, revenue share and add-on development — so a strong first deal grows into recurring income over years. We walk you through exact levels in the intro call.",
    earnPillars: [
      { title: "Setup fee", desc: "One-time payout on signed contract." },
      { title: "Operations & development", desc: "Recurring share for the customer's full lifetime." },
      { title: "Revenue share", desc: "Share of the customer's paid tiers across multiple years." },
      { title: "Add-on development", desc: "Commission on integrations and customizations." },
    ],
    whoTitle: "Who we're looking for",
    personas: [
      { title: "The experienced B2B closer", body: "You have 5+ years of closing SaaS or consulting deals in the EUR 50k–500k segment. You work independently with clear targets." },
      { title: "The connected networker", body: "You have an existing network in trade associations, export agencies, coworking, or public sector — anywhere in your region." },
      { title: "The specialized consultant", body: "You already invoice on commission and want to add a SaaS portfolio to your existing practice without exclusivity." },
    ],
    getTitle: "What you get from us",
    getList: [
      "Your own email firstname.lastname@ravolution.se after signature",
      "Demo instance + private sandbox",
      "Pipeline (HubSpot or Notion) with full commission transparency",
      "NDA template and contract draft",
      "Sales kit, objection library, price lists",
      "Monthly 45-min sync for coaching and escalations",
      "Clear commission contract with legal clarity on IP, GDPR and termination",
    ],
    processTitle: "How it works",
    steps: [
      { t: "Apply", d: "Fill in the form below" },
      { t: "Intro call", d: "30 min with Ivan within 5 business days" },
      { t: "Match check", d: "We review ICP, network and past results" },
      { t: "Contract", d: "Commission contract signed digitally" },
      { t: "Onboarding", d: "Demo, sales kit, pipeline, email — same day" },
      { t: "First 90 days", d: "Goal: 1 closed Bizmeet deal or 3 qualified demos" },
      { t: "Scale", d: "Add more platforms to your portfolio" },
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Is this employment?", a: "No. It's a commission-based partnership. You invoice Ravolution as a self-employed professional or via your company. You keep your independence." },
      { q: "Is it exclusive?", a: "No. You can sell complementary services in other verticals in parallel, as long as you don't sell directly competing platforms in the same ICP." },
      { q: "What happens if the customer churns?", a: "You keep the setup commission. Operations and revenue share commissions follow the customer's lifetime." },
      { q: "How fast do I get paid?", a: "Commission is paid monthly in arrears, by the 25th of the month following the month Ravolution received customer payment." },
      { q: "Can I use the Ravolution brand?", a: "Yes, within the limits of the commission contract — sales kit, demo instances, email and official templates. Self-produced marketing materials require approval before publishing." },
    ],
    formTitle: "Apply as sales partner",
    formSub: "We read every application personally and respond within 5 business days.",
    f: {
      firstName: "First name", lastName: "Last name", email: "Email", phone: "Phone",
      city: "City", linkedin: "LinkedIn profile (URL)", company: "Company (if invoicing via a company)",
      orgNumber: "Company / Tax ID", industries: "Industry focus (select all that apply)",
      primaryPlatform: "Platform you're most interested in selling",
      pastDeal: "Tell us about a deal you closed at EUR 50k+ (min 200 chars)",
      network: "Existing network relevant to Ravolution's platforms (optional)",
      startDate: "When can you start?",
      source: "How did you hear about Ravolution? (optional)",
      consent: "I consent to Ravolution AB processing my personal data per our privacy policy to evaluate my application.",
      submit: "Submit application",
      sending: "Sending…",
      success: "Thank you — we'll be in touch within 5 business days. Ivan reads every application personally.",
      error: "Could not send. Please email ivan.daza@ravolution.se directly.",
      optional: "optional",
    },
    industriesOptions: ["Export & internationalization", "Trade associations", "Coworking & business clubs", "Universities & alumni", "Logistics & ports", "K-12 Education", "Sustainability & ESG", "Other"],
    startOptions: ["Immediately", "Within 1 month", "Within 3 months", "Just exploring"],
    footerCta: "Not ready to apply yet? Email Ivan directly at ",
  },
} as const;

const platformOptions = ["Bizmeet", "xPortMatch", "iApply", "Rosetta Livingstone", "CommunicaringSchool", "CarbonX", "Several"];

const SalesPartnerPage = () => {
  const { language } = useLanguage();
  const lang: Lang = language === "sv" ? "sv" : "en";
  const t = T[lang];

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", city: "", linkedin: "",
    company: "", orgNumber: "",
    industries: [] as string[],
    primaryPlatform: "Bizmeet",
    pastDeal: "", network: "",
    startDate: t.startOptions[0],
    source: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));
  const toggleIndustry = (i: string) => {
    setForm((p) => ({
      ...p,
      industries: p.industries.includes(i) ? p.industries.filter((x) => x !== i) : [...p.industries, i],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      toast.error(lang === "sv" ? "Samtycke krävs." : "Consent required.");
      return;
    }
    if (form.pastDeal.length < 200) {
      toast.error(lang === "sv" ? "Skriv minst 200 tecken om en tidigare deal." : "Please write at least 200 characters about a past deal.");
      return;
    }
    if (form.industries.length === 0) {
      toast.error(lang === "sv" ? "Välj minst ett branschfokus." : "Select at least one industry.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-sales-partner-application", {
        body: { ...form, language: lang },
      });
      if (error) throw error;
      setSent(true);
      toast.success(t.f.success);
    } catch (err) {
      console.error(err);
      toast.error(t.f.error);
    } finally {
      setLoading(false);
    }
  };

  const canonical = lang === "sv" ? "https://ravolution.se/sv/saljpartner" : "https://ravolution.se/en/sales-partner";

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="sv-SE" href="https://ravolution.se/sv/saljpartner" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/sales-partner" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* HERO */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 overflow-hidden bg-gradient-to-b from-[#0D0D0E] via-[#111118] to-primary">
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="max-w-5xl mx-auto relative">
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-gold mb-6">
              {t.eyebrow}
            </span>
            <h1 className="font-display font-bold text-white leading-[1.05] tracking-tight text-4xl md:text-6xl lg:text-7xl">
              {t.h1Pre}
              <em className="not-italic text-gold">{t.h1Em}</em>
              {t.h1Post}
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed">{t.sub}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-white">
                <a href="#apply">{t.ctaPrimary} <ArrowRight className="w-4 h-4 ml-1" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                <a href="mailto:ivan.daza@ravolution.se">{t.ctaSecondary}</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-3 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="uppercase tracking-widest text-xs">{t.presence}:</span>
              <span className="font-medium text-white/80">{t.cities}</span>
            </div>
          </div>
        </section>

        {/* KPI ROW */}
        <section className="bg-primary border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.kpis.map((k) => (
              <div key={k.l} className="text-center md:text-left">
                <div className="font-display text-6xl md:text-7xl font-bold text-gold leading-none">{k.n}</div>
                <div className="mt-3 text-white/70 text-sm md:text-base">{k.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT YOU SELL */}
        <section className="bg-[#0D0D0E] py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.sellTitle}</h2>
            <p className="mt-5 text-white/70 max-w-3xl text-lg">{t.sellIntro}</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.platforms.map((p) => (
                <div key={p.name} className="bg-[#111118] border border-white/10 hover:border-gold/40 transition-colors p-7 rounded-sm">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-xl font-bold text-gold">{p.name}</h3>
                    {("star" in p && p.star) && <span className="text-gold text-sm">★</span>}
                  </div>
                  <p className="mt-3 text-white/85 text-sm leading-relaxed">{p.what}</p>
                  <p className="mt-4 text-white/55 text-xs uppercase tracking-wider">{p.who}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/50 text-sm">{t.starNote}</p>
          </div>
        </section>

        {/* BIZMEET FOCUS */}
        <section className="bg-primary py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Bizmeet</span>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white leading-tight">{t.bizTitle}</h2>
              <p className="mt-6 text-xl text-white/80 font-display">{t.bizSubtitle}</p>
              <p className="mt-6 text-white/75 leading-relaxed">{t.bizBody}</p>
              <ul className="mt-8 space-y-3">
                {t.bizBullets.map((b) => (
                  <li key={b} className="flex gap-3 text-white/85">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="https://businesssweden.ravolution.se" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium">
                businesssweden.ravolution.se <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white/[0.03] border border-white/15 p-8 md:p-10 rounded-sm h-fit">
              <h3 className="font-display text-xl font-bold text-white">{t.bizKitTitle}</h3>
              <ul className="mt-6 space-y-4">
                {t.bizKit.map((k) => (
                  <li key={k} className="flex gap-3 text-white/80 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0 mt-2" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* HOW YOU GET PAID — no specific levels */}
        <section className="bg-[#0D0D0E] py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">{t.earnSub}</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white">{t.earnTitle}</h2>
            <p className="mt-6 text-white/75 text-lg max-w-3xl leading-relaxed">{t.earnBody}</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.earnPillars.map((p, i) => (
                <div key={p.title} className="bg-[#111118] border-l-2 border-gold p-7 rounded-sm">
                  <div className="text-gold/60 text-xs font-mono mb-3">0{i + 1}</div>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-white/65 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE SEEK */}
        <section className="bg-primary py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.whoTitle}</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.personas.map((p) => (
                <div key={p.title} className="bg-white/[0.03] border border-white/10 p-7 rounded-sm">
                  <div className="w-10 h-px bg-gold mb-5" />
                  <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-[#0D0D0E] py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.getTitle}</h2>
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {t.getList.map((g) => (
                <li key={g} className="flex gap-3 text-white/85">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-primary py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.processTitle}</h2>
            <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.steps.map((s, i) => (
                <li key={s.t} className="bg-white/[0.03] border border-white/10 p-6 rounded-sm">
                  <div className="font-display text-3xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 font-display text-lg font-bold text-white">{s.t}</h3>
                  <p className="mt-2 text-white/65 text-sm">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0D0D0E] py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.faqTitle}</h2>
            <Accordion type="single" collapsible className="mt-10">
              {t.faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-white text-left hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-white/70 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section id="apply" className="bg-primary py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">{t.formTitle}</h2>
            <p className="mt-5 text-white/70 text-lg">{t.formSub}</p>

            {sent ? (
              <div className="mt-12 bg-gold/10 border-l-4 border-gold p-8 rounded-sm">
                <p className="text-white text-lg">{t.f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 space-y-6 bg-white/[0.03] border border-white/10 p-6 md:p-10 rounded-sm">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="firstName" className="text-white/80">{t.f.firstName} *</Label>
                    <Input id="firstName" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white/80">{t.f.lastName} *</Label>
                    <Input id="lastName" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white/80">{t.f.email} *</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/80">{t.f.phone} *</Label>
                    <Input id="phone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-white/80">{t.f.city} *</Label>
                    <Input id="city" required value={form.city} onChange={(e) => update("city", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="linkedin" className="text-white/80">{t.f.linkedin} *</Label>
                    <Input id="linkedin" type="url" required placeholder="https://linkedin.com/in/…" value={form.linkedin} onChange={(e) => update("linkedin", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-white/80">{t.f.company}</Label>
                    <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="orgNumber" className="text-white/80">{t.f.orgNumber}</Label>
                    <Input id="orgNumber" value={form.orgNumber} onChange={(e) => update("orgNumber", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                </div>

                <div>
                  <Label className="text-white/80">{t.f.industries} *</Label>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.industriesOptions.map((opt) => (
                      <label key={opt} className="flex items-center gap-3 text-white/85 text-sm cursor-pointer">
                        <Checkbox
                          checked={form.industries.includes(opt)}
                          onCheckedChange={() => toggleIndustry(opt)}
                          className="border-white/40 data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-primary"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white/80">{t.f.primaryPlatform} *</Label>
                  <RadioGroup value={form.primaryPlatform} onValueChange={(v) => update("primaryPlatform", v)} className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {platformOptions.map((p) => (
                      <label key={p} className="flex items-center gap-2 text-white/85 text-sm cursor-pointer">
                        <RadioGroupItem value={p} className="border-white/40 text-gold" />
                        <span>{p}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="pastDeal" className="text-white/80">{t.f.pastDeal} *</Label>
                  <Textarea id="pastDeal" required minLength={200} rows={5} value={form.pastDeal} onChange={(e) => update("pastDeal", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  <p className="mt-1 text-white/50 text-xs">{form.pastDeal.length} / 200+</p>
                </div>

                <div>
                  <Label htmlFor="network" className="text-white/80">{t.f.network}</Label>
                  <Textarea id="network" rows={3} maxLength={1000} value={form.network} onChange={(e) => update("network", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="startDate" className="text-white/80">{t.f.startDate} *</Label>
                    <select
                      id="startDate"
                      required
                      value={form.startDate}
                      onChange={(e) => update("startDate", e.target.value)}
                      className="mt-2 w-full h-10 rounded-md bg-white/5 border border-white/20 text-white px-3 focus:outline-none focus:border-gold"
                    >
                      {t.startOptions.map((o) => <option key={o} value={o} className="bg-primary">{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="source" className="text-white/80">{t.f.source}</Label>
                    <Input id="source" value={form.source} onChange={(e) => update("source", e.target.value)} className="mt-2 bg-white/5 border-white/20 text-white" />
                  </div>
                </div>

                <label className="flex items-start gap-3 text-white/80 text-sm cursor-pointer">
                  <Checkbox
                    checked={form.consent}
                    onCheckedChange={(c) => update("consent", !!c)}
                    className="mt-0.5 border-white/40 data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-primary"
                  />
                  <span>{t.f.consent} *</span>
                </label>

                <Button type="submit" disabled={loading} size="lg" className="bg-accent hover:bg-accent-light text-white w-full md:w-auto" aria-busy={loading}>
                  {loading ? t.f.sending : t.f.submit} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="bg-[#0D0D0E] border-t border-white/10 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/80 text-lg">
              {t.footerCta}
              <a href="mailto:ivan.daza@ravolution.se" className="text-gold hover:text-gold/80 font-medium underline-offset-4 hover:underline">
                ivan.daza@ravolution.se
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SalesPartnerPage;
