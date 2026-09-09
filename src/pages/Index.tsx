import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import {
  EditorialShell,
  Reveal,
  CountUp,
  MarqueeStrip,
} from "@/components/editorial/EditorialLayout";
import InvestorPortfolioMarquee from "@/components/InvestorPortfolioMarquee";
import {
  NetworkCanvas,
  TechGrid,
  SectionHead,
  MissionPanel,
  SystemMap,
  StealthPanel,
  type Mission,
} from "@/components/lab/LabPrimitives";

const seoByLang = {
  en: {
    title: "Ravolution AB | Building the Missing Infrastructure for Human Progress",
    description:
      "Ravolution AB is a Swedish invention company. We invent, protect and commercialise patent-backed systems that remove structural friction in education, language, trust, trade, health and human capability.",
    eyebrow: "Swedish invention company · patent-backed systems",
    h1a: "BUILDING THE ",
    h1b: "MISSING",
    h1c: " INFRASTRUCTURE FOR HUMAN PROGRESS.",
    lede:
      "Ravolution invents and commercialises systems designed to remove structural friction in education, language, trade, trust, health and human capability.",
    ctaPrimary: "Explore the missions ↘",
    ctaSecondary: "Partner with Ravolution ↗",
  },
  sv: {
    title: "Ravolution AB | Vi bygger den saknade infrastrukturen för mänskligt framsteg",
    description:
      "Ravolution AB är ett svenskt uppfinningsbolag. Vi uppfinner, skyddar och kommersialiserar patentbaserade system som tar bort strukturell friktion inom utbildning, språk, tillit, handel, hälsa och mänsklig förmåga.",
    eyebrow: "Svenskt uppfinningsbolag · patentbaserade system",
    h1a: "VI BYGGER DEN ",
    h1b: "SAKNADE",
    h1c: " INFRASTRUKTUREN FÖR MÄNSKLIGT FRAMSTEG.",
    lede:
      "Ravolution uppfinner och kommersialiserar system som tar bort strukturell friktion inom utbildning, språk, handel, tillit, hälsa och mänsklig förmåga.",
    ctaPrimary: "Utforska uppdragen ↘",
    ctaSecondary: "Samarbeta med Ravolution ↗",
  },
  es: {
    title: "Ravolution AB | Construimos la infraestructura que falta para el progreso humano",
    description:
      "Ravolution AB es una empresa sueca de invención. Inventamos, protegemos y comercializamos sistemas respaldados por patentes que eliminan la fricción estructural en educación, idiomas, confianza, comercio, salud y capacidad humana.",
    eyebrow: "Empresa sueca de invención · sistemas con patentes",
    h1a: "CONSTRUIMOS LA INFRAESTRUCTURA ",
    h1b: "QUE FALTA",
    h1c: " PARA EL PROGRESO HUMANO.",
    lede:
      "Ravolution inventa y comercializa sistemas diseñados para eliminar la fricción estructural en educación, idiomas, comercio, confianza, salud y capacidad humana.",
    ctaPrimary: "Explorar las misiones ↘",
    ctaSecondary: "Colaborar con Ravolution ↗",
  },
} as const;

const Index = () => {
  const { language } = useLanguage();
  const lp = useLangPath();
  const seo = seoByLang[(language as "en" | "sv" | "es")] ?? seoByLang.en;
  const canonicalUrl = `https://ravolution.se/${language}`;

  const missions: Mission[] = [
    {
      num: "01",
      name: "LEARN",
      question: "What if a child's postcode no longer defined the quality of their education?",
      body: "Learning infrastructure for K1–K9: curriculum equivalency, benchmarking and rights-aligned access, designed to make quality education portable across borders.",
      systems: ["CommunicaringSchool", "NewsToast"],
    },
    {
      num: "02",
      name: "LANGUAGE",
      question: "What if language stopped being a multi-year barrier to belonging and opportunity?",
      body: "Multimodal acquisition systems combining adaptive AI, music, context and real-world content to compress the path from exposure to usable language.",
      systems: ["Rosetta Livingstone", "SINGUISTIC"],
    },
    {
      num: "03",
      name: "TRUST",
      question: "What if humans could still prove what is real in an age of synthetic everything?",
      body: "Identity, voice authentication, AI governance and safety systems for a world where deepfakes and autonomous agents make trust an infrastructure problem.",
      systems: ["VoiceProtector", "AIMagnifica", "AlarmSole"],
    },
    {
      num: "04",
      name: "OPPORTUNITY",
      question: "What if a first chance, a fair match, a relationship or a market were never blocked by where you started?",
      body: "PikpCash removes the experience barrier, iApply removes the recruitment-information barrier, BizMeet removes the relationship barrier and XportMatch removes the geography barrier.",
      systems: ["PikpCash", "iApply", "BizMeet", "XportMatch"],

    },
    {
      num: "05",
      name: "HEALTHIER CHOICES",
      question: "What if prevention began at the moment a person chooses what to buy?",
      body: "Consumer decision infrastructure that turns complex product, ingredient and emissions data into understandable risk signals and practical alternatives.",
      systems: ["TOXINSIDE", "CarbonX"],
    },
    {
      num: "06",
      name: "HUMAN CAPABILITY",
      question: "What if technology amplified human agency instead of merely automating activity?",
      body: "Interfaces, wearables, companionship systems and unreleased inventions aimed at extending capability, resilience and freedom of action.",
      systems: ["Gyrocraft", "Pratis", "Stealth IP"],
    },
  ];

  const mapNodes = [
    { title: "Education", systems: "CommunicaringSchool · NewsToast", pos: "left-[3%] top-[8%]" },
    { title: "Language", systems: "Rosetta Livingstone · SINGUISTIC", pos: "right-[3%] top-[8%]" },
    { title: "Trust & Safety", systems: "VoiceProtector · AIMagnifica · AlarmSole", pos: "left-[3%] bottom-[8%]" },
    { title: "Opportunity", systems: "PikpCash · iApply · BizMeet · XportMatch", pos: "right-[3%] bottom-[8%]" },
    { title: "Health & Planet", systems: "TOXINSIDE · CarbonX", pos: "left-1/2 -translate-x-1/2 top-[1%]" },
    { title: "Frontier / Stealth", systems: "Gyrocraft · unreleased systems", pos: "left-1/2 -translate-x-1/2 bottom-[1%]" },
  ];

  const inventions = [
    {
      status: "FLAGSHIP · EDUCATION INFRASTRUCTURE",
      name: "CommunicaringSchool",
      desc: "Cross-national learning infrastructure built around K1–K9 access, curriculum equivalency, assessment and rights-aligned educational participation.",
      outcome: "OUTCOME → education less constrained by geography",
      href: lp("/portfolio"),
    },
    {
      status: "LANGUAGE INFRASTRUCTURE",
      name: "Rosetta Livingstone",
      desc: "Adaptive language acquisition built around immersion, context and AI-supported learning pathways.",
      outcome: "OUTCOME → faster access to language and work",
      href: "https://rosettalivingstone.com",
    },
    {
      status: "DIGITAL TRUST",
      name: "VoiceProtector",
      desc: "Voice authentication and anti-deepfake architecture for a world of synthetic speech and remote identity.",
      outcome: "OUTCOME → trust that travels digitally",
      href: "https://voiceprotector.com",
    },
    {
      status: "GLOBAL OPPORTUNITY",
      name: "XportMatch",
      desc: "AI-native export infrastructure for market prioritisation, buyer discovery and international opportunity management.",
      outcome: "OUTCOME → more companies can reach global markets",
      href: lp("/xportmatch"),
    },
    {
      status: "PREVENTION ECONOMY",
      name: "TOXINSIDE",
      desc: "Consumer product intelligence that turns complex safety information into understandable decisions and alternatives.",
      outcome: "OUTCOME → healthier choices at the point of decision",
      href: "https://toxinside.com",
    },
    {
      status: "HUMAN SAFETY",
      name: "AlarmSole",
      desc: "Discreet connected footwear safety architecture designed to activate emergency workflows directly from the foot.",
      outcome: "OUTCOME → safety without reaching for a phone",
      href: lp("/alarmsole"),
    },
  ];

  const method = [
    { n: "01", h: "Find the friction", p: "Identify a persistent barrier that affects large populations or markets." },
    { n: "02", h: "Invent the mechanism", p: "Design a new system, workflow, interface or method that removes it." },
    { n: "03", h: "Protect the core", p: "Structure defensible IP around what is genuinely novel and valuable." },
    { n: "04", h: "Build and prove", p: "Turn the mechanism into a working product and expose it to real use." },
    { n: "05", h: "Scale the system", p: "Commercialise through ventures, institutions, licensing and strategic partners." },
  ];

  const entryPoints = [
    {
      kicker: "Governments & institutions",
      title: "Deploy a system",
      body: "Education, integration, export support, trust, safety and public-interest infrastructure.",
      label: "Start an institutional conversation →",
      href: "mailto:ivan.daza@ravolution.se",
    },
    {
      kicker: "Investors & strategic buyers",
      title: "Access the portfolio",
      body: "Selected ventures, patent-backed opportunities, acquisition assets and frontier work.",
      label: "Request investor access →",
      href: lp("/invest"),
    },
    {
      kicker: "Founders & companies",
      title: "Build with us",
      body: "Venture building, build-for-equity, technical execution and IP strategy.",
      label: "Submit a serious problem →",
      href: lp("/build-for-equity"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ravolution AB",
            url: "https://ravolution.se",
            description: seo.description,
            founder: { "@type": "Person", name: "Ivan Daza", jobTitle: "Tech inventor" },
            email: "ivan.daza@ravolution.se",
            address: { "@type": "PostalAddress", addressLocality: "Stockholm", addressCountry: "SE" },
          })}
        </script>
      </Helmet>

      <EditorialShell>
        {/* ───── Hero ───── */}
        <section className="relative min-h-[92vh] flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 overflow-hidden">
          <NetworkCanvas />
          <TechGrid />
          <div className="edit-container relative z-10">
            <Reveal>
              <span className="edit-label edit-eyebrow">{seo.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="edit-display text-white mt-5 max-w-6xl">
                {seo.h1a}
                <span className="edit-outline">{seo.h1b}</span>
                {seo.h1c}
              </h1>
            </Reveal>
            <div className="grid md:grid-cols-12 gap-10 mt-11">
              <Reveal delay={0.16} className="md:col-span-7">
                <p className="edit-lede max-w-3xl">
                  {seo.lede}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="#missions"
                    className="edit-label px-6 py-4 bg-[hsl(var(--accent-edit-btn))] text-[#081426] hover:opacity-90 transition-opacity"
                  >
                    {seo.ctaPrimary}
                  </a>
                  <a
                    href="#partner"
                    className="edit-label px-6 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
                  >
                    {seo.ctaSecondary}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.24} className="md:col-span-5 md:border-l border-white/10 md:pl-10">
                <div className="font-display text-4xl md:text-5xl text-white">27 / 369</div>
                <p className="edit-label text-white/50 mt-3 leading-relaxed">
                  Patent assets / claims
                  <br />
                  status verified per jurisdiction
                </p>
                <Link to={lp("/evidence")} className="edit-label text-[hsl(var(--accent-edit))] mt-4 inline-block edit-link">
                  See the evidence register →
                </Link>
                <div className="edit-label text-white/45 mt-6 border-t border-white/10 pt-4">
                  ● Some of the highest-impact systems remain in stealth.
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <MarqueeStrip
          items={[
            "EDUCATION EQUITY",
            "LANGUAGE ACQUISITION",
            "DIGITAL TRUST",
            "GLOBAL TRADE",
            "PREVENTION ECONOMY",
            "HUMAN SAFETY",
            "WORK & OPPORTUNITY",
            "AI GOVERNANCE",
          ]}
        />

        {/* ───── Thesis (Human Ivory surface) ───── */}
        <section className="edit-section edit-light px-6 md:px-12">
          <div className="edit-container">
            <Reveal className="mb-12 md:mb-16 grid md:grid-cols-12 gap-6">
              <span className="edit-label text-[#7c633d] md:col-span-3 pt-2">00 / Thesis</span>
              <div className="md:col-span-9">
                <h2 className="edit-h2">
                  NOT MORE APPS.
                  <br />
                  BETTER SYSTEMS.
                </h2>
                <p className="edit-intro mt-6 max-w-3xl">
                  The most important technologies do more than optimise a task. They change the
                  underlying conditions in which millions of people learn, work, communicate, trade,
                  decide and stay safe.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-12 border-t border-[#081426]/14">
              <Reveal className="md:col-span-7 py-10 md:pr-[7vw]">
                <p className="edit-quote">
                  Ravolution should be measured by one question:{" "}
                  <strong>what becomes possible at scale if this system works?</strong>
                </p>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5 py-10 md:pl-[6vw] md:border-l border-[#081426]/14">
                <span className="edit-label text-[#7c633d]">The Ravolution thesis</span>
                <p className="text-[#405066] text-lg leading-relaxed mt-6 max-w-lg">
                  Find structural friction that blocks human progress. Invent the missing
                  infrastructure. Protect the core mechanism. Build it into a usable platform. Then
                  scale through institutions, partners, licensing and ventures.
                </p>
                <a href="#method" className="edit-label text-[#7c633d] mt-8 inline-block edit-link">
                  See the method →
                </a>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ───── Missions ───── */}
        <section id="missions" className="edit-section px-6 md:px-12 border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="01 / Global missions"
              title={
                <>
                  START WITH THE WORLD
                  <br />
                  THAT SHOULD EXIST.
                </>
              }
              intro="Ravolution is organised around outcomes, not company names. Each mission can contain several products, patents, pilots and future inventions."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.map((m, i) => (
                <MissionPanel key={m.num} mission={m} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </section>

        {/* ───── System map ───── */}
        <section id="systems" className="edit-section px-6 md:px-12 border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="02 / System map"
              title={
                <>
                  ONE PORTFOLIO.
                  <br />
                  CONNECTED PURPOSE.
                </>
              }
              intro="The relationship between the inventions matters more than the list. One architecture, six mission areas, many systems."
            />
            <SystemMap nodes={mapNodes} />
          </div>
        </section>

        {/* ───── Selected inventions ───── */}
        <section id="inventions" className="edit-section px-6 md:px-12 border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="03 / Selected inventions"
              title={
                <>
                  SHOW THE FEW
                  <br />
                  THAT DEFINE THE WHOLE.
                </>
              }
              intro="These six explain Ravolution's ambition. Active ventures, studio assets and acquisition opportunities live in the full portfolio."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inventions.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.05}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full min-h-[320px] border border-white/10 p-7 md:p-9 transition-colors hover:border-[hsl(var(--accent-edit))]"
                  >
                    <span className="edit-label text-white/40">{c.status}</span>
                    <h3 className="text-2xl md:text-3xl font-display text-white mt-6 group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed mt-4">{c.desc}</p>
                    <span className="edit-label text-[hsl(var(--accent-edit))] mt-auto pt-8 text-[10px]">
                      {c.outcome}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-12">
              <Link
                to={lp("/portfolio")}
                className="edit-label border border-white/30 px-6 py-4 text-white hover:bg-white hover:text-black transition-colors inline-block"
              >
                See the full portfolio in four layers →
              </Link>
            </Reveal>
          </div>
        </section>

        <InvestorPortfolioMarquee />

        {/* ───── Evidence ───── */}
        <section className="edit-section px-6 md:px-12 border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="04 / Evidence architecture"
              title={
                <>
                  AMBITION EARNS ATTENTION.
                  <br />
                  PRECISION EARNS TRUST.
                </>
              }
              intro="Every large claim resolves into evidence: patent status, pilot stage, methodology, measured result, market context — and what is still hypothesis."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10">
              {[
                { v: 27, s: "", l: "Patent assets" },
                { v: 369, s: "", l: "Patent claims" },
                { v: 6, s: "", l: "Global mission areas" },
                { v: 12, s: "+", l: "Built / active systems" },
              ].map((x) => (
                <div key={x.l} className="border-r border-b border-white/10 p-6 md:p-9">
                  <CountUp end={x.v} suffix={x.s} className="font-display text-4xl md:text-5xl text-white" />
                  <div className="edit-label text-white/50 mt-3">{x.l}</div>
                </div>
              ))}
            </div>
            <Reveal className="mt-8 flex flex-wrap items-center gap-6">
              <p className="edit-label text-white/40 max-w-2xl leading-relaxed">
                Counts cover granted and pending assets across jurisdictions. Status per asset is
                listed in the evidence register.
              </p>
              <Link to={lp("/evidence")} className="edit-label text-[hsl(var(--accent-edit))] edit-link">
                Open IP &amp; evidence →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───── Method ───── */}
        <section id="method" className="edit-section px-6 md:px-12 border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="05 / The Ravolution method"
              title={
                <>
                  FROM STRUCTURAL FRICTION
                  <br />
                  TO GLOBAL INFRASTRUCTURE.
                </>
              }
            />
            <div className="grid md:grid-cols-5 border-t border-l border-white/10">
              {method.map((s) => (
                <div key={s.n} className="border-r border-b border-white/10 p-6 md:p-8">
                  <span className="edit-label text-[hsl(var(--accent-edit))]">{s.n}</span>
                  <h4 className="font-display text-white text-lg mt-4">{s.h}</h4>
                  <p className="text-sm text-white/55 leading-relaxed mt-3">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Stealth ───── */}
        <section id="stealth" className="edit-section px-6 md:px-12 border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionHead
              kicker="06 / Frontier work"
              title={
                <>
                  THE PORTFOLIO YOU CAN SEE
                  <br />
                  IS NOT THE LIMIT.
                </>
              }
              intro="Ravolution keeps a frontier layer of unreleased systems, with controlled access for qualified investors, institutions and strategic partners."
            />
            <StealthPanel
              title="Selected work remains in stealth."
              body="Qualified conversations can unlock the deeper patent map, unreleased systems and partnership opportunities."
              ctaLabel="Request private briefing →"
              ctaHref="mailto:ivan.daza@ravolution.se"
              redacted={[
                "SYSTEM_07 / ███████████",
                "VERTICAL_09 / ███████████",
                "PATENT_MAP / ██████████████",
                "MISSION / ████████",
              ]}
            />
          </div>
        </section>

        {/* ───── Partner ───── */}
        <section id="partner" className="edit-section px-6 md:px-12 border-t border-white/10">
          <div className="edit-container">
            <SectionHead
              kicker="07 / Work with Ravolution"
              title={
                <>
                  THE RIGHT PARTNER DEPENDS
                  <br />
                  ON THE SYSTEM.
                </>
              }
              intro="Three deliberate entry points instead of a generic contact form."
            />
            <div className="grid md:grid-cols-3 border-t border-l border-white/10">
              {entryPoints.map((c) => (
                <div key={c.title} className="border-r border-b border-white/10 p-8 md:p-10 flex flex-col">
                  <span className="edit-label text-[hsl(var(--accent-edit))]">{c.kicker}</span>
                  <h3 className="font-display text-white text-2xl mt-5">{c.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mt-4">{c.body}</p>
                  {c.href.startsWith("mailto:") ? (
                    <a href={c.href} className="edit-label text-white mt-auto pt-8 edit-link">
                      {c.label}
                    </a>
                  ) : (
                    <Link to={c.href} className="edit-label text-white mt-auto pt-8 edit-link">
                      {c.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default Index;
