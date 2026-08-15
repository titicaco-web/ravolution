import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import {
  EditorialShell,
  Reveal,
  CountUp,
  SectionLabel,
  MarqueeStrip,
} from "@/components/editorial/EditorialLayout";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import InvestorPortfolioMarquee from "@/components/InvestorPortfolioMarquee";
import IsometricGrid from "@/components/effects/IsometricGrid";
import RadialPulseBlob from "@/components/effects/RadialPulseBlob";
import TypewriterCycle from "@/components/effects/TypewriterCycle";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const { t, language } = useLanguage();
  const lp = useLangPath();

  const [time, setTime] = useState("");
  const [openCard, setOpenCard] = useState<string | null>(null);
  const processAnim = useScrollAnimation<HTMLUListElement>(0.25);

  const seoByLang = {
    en: {
      title: "Ravolution | Patented AI & Deep Tech Venture Studio",
      description:
        "Swedish venture studio creating patented AI and deep-tech platforms for education, language learning, voice security, global trade, climate and health.",
      ogTitle: "Ravolution — Patented Deep Tech for Civilization-Scale Challenges",
      ogDescription:
        "Explore Ravolution's portfolio of patented AI and deep-tech platforms across education, language learning, voice security, global trade, climate and health.",
      h1: "Solving Civilization-Scale Challenges with Patented Deep Tech",
      intro1:
        "Ravolution is a Swedish venture studio that invents, builds and commercialises patented AI and deep-tech platforms across education, language learning, voice security, global trade, climate innovation and human health.",
      intro2:
        "Founded by inventor Ivan Daza, Ravolution's portfolio combines proprietary intellectual property, scalable digital platforms and business models designed to address large global challenges.",
    },
    sv: {
      title: "Ravolution | Patenterad AI och deep tech från Sverige",
      description:
        "Svensk venture studio som utvecklar patenterade AI- och deep tech-plattformar inom utbildning, språk, röstsäkerhet, global handel, klimat och hälsa.",
      ogTitle: "Ravolution — Patenterad deep tech för globala utmaningar",
      ogDescription:
        "Utforska Ravolutions portfölj av patenterade AI- och deep tech-plattformar inom utbildning, språkinlärning, röstsäkerhet, global handel, klimat och hälsa.",
      h1: "Vi löser globala utmaningar med patenterad deep tech",
      intro1:
        "Ravolution är en svensk venture studio som uppfinner, bygger och kommersialiserar patenterade AI- och deep tech-plattformar inom utbildning, språkinlärning, röstsäkerhet, global handel, klimatinnovation och människors hälsa.",
      intro2:
        "Grundat av uppfinnaren Ivan Daza kombinerar Ravolutions portfölj egen immateriell tillgång, skalbara digitala plattformar och affärsmodeller utformade för stora globala utmaningar.",
    },
    es: {
      title: "Ravolution | Estudio de IA y tecnología profunda patentada",
      description:
        "Estudio sueco que desarrolla plataformas patentadas de IA y deep tech para educación, idiomas, seguridad de voz, comercio global, clima y salud.",
      ogTitle: "Ravolution — Tecnología profunda patentada para desafíos globales",
      ogDescription:
        "Explora el portafolio de Ravolution de plataformas patentadas de IA y deep tech en educación, idiomas, seguridad de voz, comercio global, clima y salud.",
      h1: "Resolvemos desafíos globales con tecnología profunda patentada",
      intro1:
        "Ravolution es un estudio sueco que inventa, construye y comercializa plataformas patentadas de IA y deep tech en educación, aprendizaje de idiomas, seguridad de voz, comercio global, innovación climática y salud humana.",
      intro2:
        "Fundado por el inventor Ivan Daza, el portafolio de Ravolution combina propiedad intelectual propia, plataformas digitales escalables y modelos de negocio diseñados para grandes desafíos globales.",
    },
  } as const;
  const seo = seoByLang[(language as "en" | "sv" | "es")] ?? seoByLang.en;
  const canonicalUrl = `https://ravolution.se/${language}`;

  const heroHeadlines = [
    seo.h1,
    ...Array.from({ length: 7 }, (_, i) => t(`hero.headlines.${i}`)).filter(
      (h) => h && !h.startsWith("hero.headlines")
    ),
  ];
  const [headlineIndex, setHeadlineIndex] = useState(0);


  useEffect(() => {
    const id = setInterval(
      () => setHeadlineIndex((i) => (i + 1) % heroHeadlines.length),
      5000
    );
    return () => clearInterval(id);
  }, [heroHeadlines.length]);


  useEffect(() => {
    const upd = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit", minute: "2-digit", timeZone: "Europe/Stockholm",
        }) + " CET"
      );
    };
    upd();
    const id = setInterval(upd, 60000);
    return () => clearInterval(id);
  }, []);

  /* Pillars: Build-for-Equity, Angel, Venture Studio Operations */
  const pillars = [
    {
      n: "01",
      title: "Build-for-Equity",
      desc: "We build defensible platforms for select founders in exchange for meaningful equity. No invoices, no markup — partnership.",
      href: lp("/build-for-equity"),
    },
    {
      n: "02",
      title: "Angel Investment",
      desc: "Direct early-stage capital paired with patent strategy, technical co-founder support, and operator-level execution.",
      href: lp("/angel-investor"),
    },
    {
      n: "03",
      title: "Venture Studio Operations",
      desc: "Rosetta Livingstone, CommunicaringSchool, xPortMatch, VoiceProtector, iApply — operated, scaled, licensed.",
      href: lp("/services"),
    },
  ];

  /* Stats */
  const stats = [
    { value: 27, label: "Patents granted" },
    { value: 343, label: "Patent claims" },
    { value: 11, label: "Active platforms", suffix: "+" },
    { value: 150, label: "Countries reached", suffix: "+" },
  ];

  /* AIMagnifica — localized copy */
  const aimagnifica = {
    en: {
      tagline: "AI Governance & Compliance Layer",
      summary:
        "Screens prompts and documents before they reach any connected LLM, applying organisational policy, EU AI Act controls and ISO/IEC 42001 through Allow, Review or Stop decisions with audit-ready logging.",
      cta: "Visit AIMagnifica",
      heading: "The compliance layer above your AI stack",
      intro:
        "AIMagnifica is an enterprise AI-governance platform that sits between an organisation's users and the AI models they use. Every prompt and uploaded document can be inspected before it reaches OpenAI, Anthropic Claude, Google Gemini, Mistral or a locally deployed model. The platform checks the request against the organisation's own policies together with relevant AI-governance and regulatory controls.",
      decisions: [
        { l: "Allow", d: "The request is approved, routed to the selected AI provider and recorded in the audit log." },
        { l: "Review", d: "Sensitive, ambiguous or high-impact requests are referred to an authorised manager, legal officer or compliance reviewer." },
        { l: "Stop", d: "Requests that violate policy can be blocked, redacted or redirected to a sovereign or locally hosted AI environment." },
      ],
      offeringsLabel: "Three connected offerings",
      offerings: [
        { l: "Audit", d: "A structured assessment of the organisation's AI systems, use cases, providers, risks and governance maturity." },
        { l: "Gateway", d: "Continuous screening, routing, policy enforcement and audit logging across the organisation's AI usage." },
        { l: "Advisory", d: "Access to specialists in AI governance, regulation, ethics, ISO/IEC 42001 and sovereign AI deployment." },
      ],
      capabilitiesLabel: "Key capabilities",
      capabilities: [
        "Prompt and document screening",
        "Detection of personal and confidential information",
        "Organisation-specific AI policies",
        "Allow, Review and Stop decisions",
        "Human approval workflows",
        "Redaction of sensitive information",
        "Routing between external and local AI models",
        "Audit-ready event logging",
        "Support for EU AI Act governance",
        "Support for ISO/IEC 42001 management processes",
        "Sovereign and on-premise deployment options",
      ],
      closing:
        "AIMagnifica helps organisations adopt powerful AI systems without surrendering governance, accountability or human oversight.",
      forSale: "AIMagnifica is available for sale — enquiries welcome.",
    },
    sv: {
      tagline: "Styrning och regelefterlevnad för AI",
      summary:
        "Granskar promptar och dokument innan de når en ansluten AI-modell och tillämpar organisationens policy, EU:s AI-förordning och ISO/IEC 42001 genom besluten Tillåt, Granska eller Stoppa samt revisionsklar loggning.",
      cta: "Besök AIMagnifica",
      heading: "Efterlevnadslagret ovanpå organisationens AI-infrastruktur",
      intro:
        "AIMagnifica är en plattform för AI-styrning som placeras mellan organisationens användare och de AI-modeller de använder. Promptar och dokument kan granskas innan information skickas till en extern eller lokalt installerad AI-modell.",
      decisions: [
        { l: "Tillåt", d: "Förfrågan godkänns, skickas till vald AI-leverantör och registreras i revisionsloggen." },
        { l: "Granska", d: "Känsliga, otydliga eller verksamhetskritiska förfrågningar hänvisas till behörig chef, jurist eller efterlevnadsansvarig." },
        { l: "Stoppa", d: "Förfrågningar som bryter mot policy kan blockeras, maskeras eller omdirigeras till en suverän eller lokalt driftsatt AI-miljö." },
      ],
      offeringsLabel: "Tre sammankopplade erbjudanden",
      offerings: [
        { l: "Audit", d: "En strukturerad genomlysning av organisationens AI-system, användningsfall, leverantörer, risker och styrningsmognad." },
        { l: "Gateway", d: "Löpande granskning, routing, policytillämpning och revisionsloggning över organisationens AI-användning." },
        { l: "Advisory", d: "Tillgång till specialister inom AI-styrning, regelverk, etik, ISO/IEC 42001 och suverän AI-drift." },
      ],
      capabilitiesLabel: "Viktiga funktioner",
      capabilities: [
        "Granskning av promptar och dokument",
        "Upptäckt av personuppgifter och konfidentiell information",
        "Organisationsspecifika AI-policyer",
        "Besluten Tillåt, Granska och Stoppa",
        "Arbetsflöden för mänskligt godkännande",
        "Maskering av känslig information",
        "Routing mellan externa och lokala AI-modeller",
        "Revisionsklar händelseloggning",
        "Stöd för styrning enligt EU:s AI-förordning",
        "Stöd för ledningsprocesser enligt ISO/IEC 42001",
        "Alternativ för suverän och lokal driftsättning",
      ],
      closing:
        "AIMagnifica hjälper organisationer att införa kraftfulla AI-system utan att ge upp styrning, ansvar eller mänsklig kontroll.",
      forSale: "AIMagnifica är till salu — förfrågningar välkomnas.",
    },
    es: {
      tagline: "Gobernanza y cumplimiento normativo de IA",
      summary:
        "Analiza instrucciones y documentos antes de que lleguen a cualquier modelo de IA conectado, aplicando las políticas de la organización, los controles de la Ley de IA de la UE e ISO/IEC 42001 mediante decisiones de Permitir, Revisar o Detener y registros preparados para auditoría.",
      cta: "Visitar AIMagnifica",
      heading: "La capa de cumplimiento situada sobre la infraestructura de IA",
      intro:
        "AIMagnifica es una plataforma empresarial de gobernanza de IA que se sitúa entre los usuarios de una organización y los modelos de inteligencia artificial que utilizan. Las instrucciones y los documentos pueden revisarse antes de enviar información a un modelo externo o instalado localmente.",
      decisions: [
        { l: "Permitir", d: "La solicitud se aprueba, se dirige al proveedor de IA seleccionado y se registra en el registro de auditoría." },
        { l: "Revisar", d: "Las solicitudes sensibles, ambiguas o de alto impacto se remiten a un responsable autorizado, jurídico o de cumplimiento." },
        { l: "Detener", d: "Las solicitudes que infringen la política pueden bloquearse, redactarse o redirigirse a un entorno de IA soberano o local." },
      ],
      offeringsLabel: "Tres servicios conectados",
      offerings: [
        { l: "Audit", d: "Evaluación estructurada de los sistemas de IA, casos de uso, proveedores, riesgos y madurez de gobernanza de la organización." },
        { l: "Gateway", d: "Análisis continuo, enrutamiento, aplicación de políticas y registro de auditoría en todo el uso de IA de la organización." },
        { l: "Advisory", d: "Acceso a especialistas en gobernanza de IA, regulación, ética, ISO/IEC 42001 y despliegue de IA soberana." },
      ],
      capabilitiesLabel: "Capacidades clave",
      capabilities: [
        "Análisis de instrucciones y documentos",
        "Detección de información personal y confidencial",
        "Políticas de IA específicas de la organización",
        "Decisiones de Permitir, Revisar y Detener",
        "Flujos de aprobación humana",
        "Redacción de información sensible",
        "Enrutamiento entre modelos de IA externos y locales",
        "Registro de eventos preparado para auditoría",
        "Apoyo a la gobernanza según la Ley de IA de la UE",
        "Apoyo a los procesos de gestión ISO/IEC 42001",
        "Opciones de despliegue soberano y local",
      ],
      closing:
        "AIMagnifica ayuda a las organizaciones a adoptar sistemas de IA potentes sin renunciar a la gobernanza, la responsabilidad ni la supervisión humana.",
      forSale: "AIMagnifica está a la venta — se aceptan consultas.",
    },
  }[language];

  /* Operated platforms — full briefs */
  const portfolio: Array<{
    name: string;
    tagline: string;
    flagship?: boolean;
    patents: string;
    summary: string;
    market: string;
    revenue: string;
    href: string;
    cta: string;
    status?: string;
    internal?: boolean;
    cells?: { l: string; d: string }[];
    details?: typeof aimagnifica;


  }> = [

    {
      name: "CommunicaringSchool™",
      tagline: "UN-Compliant Global Education Platform",
      flagship: true,
      patents: "9 Patents · 116 Claims",
      summary: "9 patented technologies enabling cross-national student benchmarking, curriculum equivalency, and rights-based learning.",
      market: "$850B Global EdTech Market",
      revenue: "Government licensing, UN agency partnerships, international school subscriptions",
      href: "https://communicaringschool.com",
      cta: "Visit Website",
    },
    {
      name: "Rosetta Livingstone™",
      tagline: "Language Learning Revolution",
      patents: "4 Patents · 52 Claims",
      summary: "Multimodal language acquisition, 34 languages, real-time vocational calibration. Three verticals: government integration, broadcast media transformation, vocational workforce acceleration.",
      market: "$82B Global Language Learning Market — Nordic governments, international enterprise, corporate training",
      revenue: "Licensing, co-development, acquisition",
      href: "https://rosettalivingstone.com",
      cta: "Visit Rosetta Livingstone",
    },
    {
      name: "SINGUISTIC™",
      tagline: "LANGUAGE LEARNING · MUSIC-NATIVE · GLOBAL",
      flagship: true,
      patents: "Patent filed on the underlying learning system (Rosetta Livingstone); continuation in preparation on prosodic alignment of translated lyrics to sung timing",
      summary:
        "Turn listening into learning. Synced dual-language lyrics for whatever's playing — tap a word, keep it, master it through spaced repetition. Built on the Spotify Web API, backed by peer-reviewed research, live in 26 languages. The learning layer for the world's most-loved habit.",
      market: "Language learning and music-native education — a $1B+ digital category",
      revenue: "Freemium consumer subscriptions ($1.99–2.99/mo), education seat licences, and sponsored collections with cultural institutes",
      cells: [
        {
          l: "Moat",
          d: "Learner-outcome data no one else has — songs ranked by what people actually master, not plays. Patent filed on the underlying learning system (Rosetta Livingstone); continuation in preparation on prosodic alignment of translated lyrics to sung timing.",
        },
        {
          l: "Market",
          d: "Language learning is a proven $1B+ digital category (Duolingo: 12M+ paying learners) — and 67% of adults say they want to learn a language. Music is the motivation engine every incumbent lacks.",
        },
        {
          l: "Vertical · Integration",
          d: "Sweden-first education wedge: SFI and municipal language programs, with teacher dashboards and CEFR-anchored student reports built from authentic material. Learning as a bridge into a new country — culturally and linguistically.",
        },
        {
          l: "Model",
          d: "Freemium consumer subscriptions ($1.99–2.99/mo), education seat licences, and sponsored collections with cultural institutes. No ads. No listening data sold.",
        },
      ],
      href: "https://singuistic.com",
      cta: "Visit Website",
    },
    {
      name: "NewsToast™",
      tagline: "Mobile-First Language Learning Through Daily News",
      patents: "3 Patents · 38 Claims",
      summary: "Language acquisition for immigrants and global learners through localized daily news content — turning everyday reading into immersive language practice.",
      market: "$54.8B Global Language Learning Market (16.6% CAGR) · 28M+ European immigrants",
      revenue: "Freemium subscriptions, premium tiers, B2B integration partnerships",
      href: "https://newstoast.com",
      cta: "Visit NewsToast.com",
    },
    {
      name: "CarbonX™",
      tagline: "Verified Carbon Credit Trading Platform",
      patents: "Compliance-first marketplace architecture",
      summary: "Digital marketplace for verified carbon credits with Gold Standard and Verra compliance baked into every transaction — built for transparent, auditable corporate decarbonization.",
      market: "$2.4T projected voluntary & compliance carbon markets by 2030",
      revenue: "Transaction fees, enterprise compliance subscriptions, data licensing",
      href: "https://carbonx.se/",
      cta: "Visit Website",
    },
    {
      name: "BizMeet™",
      tagline: "WHITE-LABEL COMMUNITY OS",
      patents: "White-label community platform",
      summary: "The community operating system for organisations running 2,000–20,000 members. Replaces the stack of five tools (Meetup, Eventbrite, Mailchimp, Slack, Stripe) with one platform under the customer's own brand.",
      market: "Community operators, industry publishers, verticalized panel series (5k+ members)",
      revenue: "Two-tier SaaS — €500/mo + 30% or €1,500/mo + 10% revenue share",
      href: "https://mlops.ravolution.se/platform",
      cta: "Visit Website",
    },
    {
      name: "TOXINSIDE™",
      tagline: "Product Safety & Ingredient Transparency · EU-First",
      patents: "Filed patent — safety-scoring methodology",
      summary:
        "Scan any product for a regulator-cited safety score and a better alternative. Methodology-public, EU-first, with a native halal ingredient vertical opening the world's fastest-growing consumer market. A prevention-economy platform built for a strategic outcome.",
      market: "Consumer ingredient-transparency category — EU-first expansion",
      revenue: "Freemium subscriptions, B2B brand-verification portal, anonymized data licensing",
      cells: [
        {
          l: "Moat",
          d: "Filed patent on the safety-scoring methodology, plus a published, regulator-cited method competitors cannot copy without abandoning their own commercial model.",
        },
        {
          l: "Market",
          d: "Consumer ingredient-transparency category — created by Yuka, validated at 90M+ users across the EU and US. TOXINSIDE is the methodology-public successor.",
        },
        {
          l: "Vertical · Halal",
          d: "A native halal / haram ingredient check — flags, never certifies — addressing the daily needs of the world's ~2 billion Muslims. Extends the addressable market and the acquirer pool into MENA.",
        },
        {
          l: "Model",
          d: "Freemium consumer subscriptions, a B2B brand-verification portal, and anonymized data licensing. No ads. No user data sold.",
        },
      ],
      href: "https://toxinside.com",
      cta: "Visit Website",
    },

    {
      name: "AIMagnifica™",
      tagline: aimagnifica.tagline,
      flagship: true,
      patents: "AI governance & compliance architecture",
      summary: aimagnifica.summary,
      market: "Enterprise AI governance — EU AI Act & ISO/IEC 42001 driven demand",
      revenue: "Audit engagements, gateway subscriptions, advisory retainers",
      href: "https://aimagnifica.com/",
      cta: aimagnifica.cta,
      details: aimagnifica,
    },
    {
      name: "AlarmSole™",
      tagline: "CONNECTED FOOTWEAR · PERSONAL SAFETY · PATENT PENDING",
      flagship: true,
      patents: "Patent pending — PRV 2630522-7 · 26 claims",
      summary:
        "A discreet connected safety sole activated through the foot — sending SOS, live location and app-based emergency workflows without requiring the user to reach for a phone. Built as both a standalone trim-to-fit product and an embedded technology platform for global footwear brands.",
      market: "Personal safety, connected wearables, family location, smart footwear, lone-worker protection and digital health",
      revenue: "Standalone sales, AlarmSole Connect subscriptions, OEM integration, platform licensing",
      href: "https://alarmsole.com",
      cta: "Visit Website",
    },
    {
      name: "iApply™",
      tagline: "Candidate-Centric Transparent Recruitment Platform",
      flagship: true,
      patents: "7 Patents · 89 Claims",
      summary: "Category-creating innovation: real-time recruiter transparency, AI-powered autonomous references, verified credentials & pre-screening with candidate coaching.",
      market: "$924B Global Recruiting Market by 2030",
      revenue: "Freemium SaaS, enterprise licensing, data insights partnerships",
      href: "https://iapply.se",
      cta: "Visit iApply.se",
    },
    {
      name: "It's a Fitt™",
      tagline: "AI Video Virtual Try-On Technology",
      patents: "1 Patent · 25 Claims",
      summary: "Temporal fabric physics simulation, multi-body-type AI personalization, predictive sizing & return prediction — reducing returns by 15–50%.",
      market: "$48.1B Virtual Try-On Market by 2030 · 25.95% CAGR",
      revenue: "SaaS subscription, API licensing, enterprise white-label",
      href: "https://itsafitt.com",
      cta: "Visit Website",
    },
    {
      name: "XportMatch.com",
      tagline: "AI-Native Export Matchmaking Platform",
      patents: "Domain, brand and existing platform",
      summary:
        "A digital B2B platform designed to connect export-ready companies with relevant international buyers, distributors and commercial opportunities — combining market intelligence, AI-assisted matching and export workflows.",
      market: "International trade — exporting SMEs, importers, distributors, trade organisations and export consultants",
      revenue: "Potential paths: company subscriptions, buyer-discovery packages, consultant and trade-organisation licences, data and API access, white-label deployments",
      href: lp("/xportmatch"),
      cta: "Explore the Opportunity",
      status: "Available for acquisition",
      internal: true,
    },
    {
      name: "Beredskapad.se",
      tagline: "Digital Crisis Preparedness Platform",
      patents: "Domain, brand and platform concept",
      summary:
        "A Swedish-language platform that helps individuals, companies and organisations improve their crisis preparedness through practical education, checklists, readiness assessments and step-by-step guidance.",
      market: "Swedish and Nordic preparedness education — households, employers, municipalities and insurers",
      revenue: "Potential paths: consumer subscriptions, organisational licences, white-label portals, training packages",
      href: lp("/beredskapad"),
      cta: "Explore the Opportunity",
      status: "Available for acquisition",
      internal: true,
    },
    {
      name: "Hundelser.se",
      tagline: "Social Platform for Dog Owners",
      patents: "Domain, brand and existing platform",
      summary:
        "A Swedish digital community connecting dog owners through profiles, shared content, friendships, activities, challenges and dog-related marketplace opportunities.",
      market: "Swedish pet economy — dog owners, breeders, trainers, clinics, groomers, pet brands and clubs",
      revenue: "Potential paths: premium memberships, business profiles, marketplace listings, booking commissions, sponsorships",
      href: lp("/hundelser"),
      cta: "Explore the Opportunity",
      status: "Available for acquisition",
      internal: true,
    },
    {
      name: "Partysta.com",
      tagline: "Party Planning & Memory-Sharing Platform",
      patents: "Domain, brand and existing platform",
      summary:
        "A social event platform that helps hosts and guests plan celebrations, coordinate practical details and collect shared memories in one place.",
      market: "Private and social celebrations — birthdays, weddings, graduations, dinners, reunions and company gatherings",
      revenue: "Potential paths: premium event packages, host subscriptions, planner and venue accounts, marketplace and booking commissions",
      href: lp("/partysta"),
      cta: "Explore the Opportunity",
      status: "Available for acquisition",
      internal: true,
    }

  ];



  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en" />
        <meta name="google-site-verification" content="BeeUnb4Up6ljydW2DT6VNZuFv5RX0quHioFQwyl3v_Q" />
        <meta property="og:site_name" content="Ravolution" />
        <meta property="og:locale" content={language === "sv" ? "sv_SE" : language === "es" ? "es_ES" : "en_US"} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://ravolution.se/#organization",
          name: "Ravolution AB",
          legalName: "Ravolution AB",
          alternateName: "Ravolution",
          description: "Swedish venture studio creating patented AI and deep-tech platforms.",
          email: "ivan.daza@ravolution.se",
          url: "https://ravolution.se/",
          logo: "https://ravolution.se/favicon.png",
          founder: { "@type": "Person", name: "Ivan Daza", url: "https://ravolution.se/en/about" },
          sameAs: [
            "https://www.linkedin.com/company/ravolution-ab/",
            "https://www.linkedin.com/in/ivandaza/",
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://ravolution.se/#website",
          name: "Ravolution",
          url: "https://ravolution.se/",
          publisher: { "@id": "https://ravolution.se/#organization" },
          inLanguage: ["en", "sv", "es"],
        })}</script>

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AIMagnifica",
          alternateName: "AIMagnifica™",
          url: "https://aimagnifica.com/",
          applicationCategory: "BusinessApplication",
          description:
            "AIMagnifica is Ravolution's enterprise AI-governance layer for prompt screening, policy enforcement, human review, secure model routing and audit-ready AI usage.",
          keywords:
            "AIMagnifica, AI governance, AI compliance, EU AI Act, ISO 42001, AI gateway, prompt screening, AI audit logs, sovereign AI, enterprise AI security",
          publisher: { "@id": "https://ravolution.se/#organization" },
        })}</script>

      </Helmet>

      <EditorialShell>
        {/* ───────── HERO ───────── */}
        <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 overflow-hidden">
          <HeroVideoBackground overlayClassName="bg-black/70" />
          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          {/* noise */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />

          {/* top bar */}
          <div className="relative z-10 flex flex-wrap justify-between items-start gap-4 edit-label text-white/45 mt-6">
            <span>Ravolution AB — Venture Studio</span>
            <span className="hidden md:inline">59.6099° N · 16.5448° E</span>
            <span>{time}</span>
          </div>

          {/* floating portfolio marquee — transparent under header */}
          <div className="relative z-10 mt-4">
            <InvestorPortfolioMarquee transparent />
          </div>

          {/* headline block */}
          <div className="relative z-10 max-w-[1400px] w-full mx-auto">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">
                {t("hero.badge") || "Swedish venture studio"}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-display text-white mt-8 min-h-[1.1em]">
                <span key={headlineIndex} className="inline-block animate-fade-in">
                  {heroHeadlines[headlineIndex]}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="edit-body text-white/70 mt-10 max-w-3xl">
                {t("hero.subheadline")}
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={lp("/portfolio")}
                  className="px-8 py-4 bg-[hsl(var(--accent-edit))] text-[#0F2747] font-semibold tracking-tight hover:opacity-90 transition-opacity"
                >
                  {t("hero.ctaExplore")}
                </Link>
                <Link
                  to={lp("/apply")}
                  className="px-8 py-4 border border-white/40 text-white font-semibold tracking-tight hover:border-[hsl(var(--accent-edit))] hover:text-[hsl(var(--accent-edit))] transition-colors"
                >
                  {t("hero.ctaLicensing")}
                </Link>
              </div>
            </Reveal>

          </div>

          {/* bottom indicator */}
          <div className="relative z-10 flex justify-between items-end edit-label text-white/40">
            <span>Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich</span>
            <span className="flex items-center gap-3" aria-hidden>
              <span className="rotate-90 origin-center inline-block translate-y-[-6px]">Scroll</span>
              <span className="block w-px h-12 bg-white/40 animate-pulse" />
            </span>
          </div>
        </section>

        {/* ───────── INTRO (static, crawlable) ───────── */}
        <section className="px-6 md:px-12 py-16 md:py-20 border-t border-white/10">
          <div className="edit-container max-w-4xl">
            <p className="edit-body text-white/85">{seo.intro1}</p>
            <p className="edit-body text-white/65 mt-6">{seo.intro2}</p>
          </div>
        </section>



        {/* ───────── MARQUEE ───────── */}
        <MarqueeStrip
          items={[
            "Build for Equity",
            "Venture Studio",
            "Angel Investor",
            "27 Patents · 343 Claims",
            "Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich",
            "Ravolution",
            "Defensible Innovation",
          ]}
        />

        {/* ───────── 01 — WHO WE ARE ───────── */}
        <section className="edit-section relative overflow-hidden">
          <IsometricGrid stroke="rgba(220,70,70,0.08)" />
          <div className="edit-container relative" style={{ zIndex: 1 }}>
            <SectionLabel number="01 — Who We Are" title="A Swedish venture studio built around defensible IP." />
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <Reveal className="md:col-span-7">
                <p className="text-2xl md:text-4xl font-display font-bold text-white leading-[1.1] tracking-[-0.02em]">
                  Ravolution AB protects, builds, and scales platforms that solve civilization-scale problems —
                  from language acquisition to voice security to global trade infrastructure.
                </p>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.15}>
                <p className="edit-body text-white/65 max-w-md">
                  Founded by Ivan Daza, recognized as one of 200 entrepreneurs who shaped Sweden's modern
                  business landscape. We operate as a studio, invest as an angel, and build as partners —
                  always backed by patented, defensible technology.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────── 02 — WHAT WE DO ───────── */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — What We Do" title="Three ways we partner." />
            <ul
              ref={processAnim.ref}
              className={`process-reveal ${processAnim.isVisible ? "revealed" : ""}`}
            >
              {pillars.map((p, i) => (
                <li key={p.n} className="process-step">
                  <Link
                    to={p.href}
                    className="group block border-t border-white/10 last:border-b py-10 md:py-14 grid md:grid-cols-12 gap-6 md:gap-10 items-baseline transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">{p.n}</span>
                    <h3 className="md:col-span-6 text-3xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-[0.95] group-hover:translate-x-2 transition-transform">
                      {p.title}
                    </h3>
                    <p className="md:col-span-4 edit-body text-white/60">{p.desc}</p>
                    <span className="md:col-span-1 edit-label text-white/40 group-hover:text-[hsl(var(--accent-edit))] md:text-right transition-colors">
                      →
                    </span>
                  </Link>
                  {i < pillars.length - 1 && (
                    <svg
                      className="process-connector"
                      viewBox="0 0 100 2"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <line
                        x1="0" y1="1" x2="100" y2="1"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="0.5"
                        pathLength={100}
                        strokeDasharray="100"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* ───────── STATS ───────── */}
        <section className="edit-section bg-[hsl(var(--surface))] border-y border-white/10">
          <div className="edit-container">
            <Reveal>
              <span className="edit-label text-white/45">By the numbers</span>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mt-10">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="border-t border-white/15 pt-6">
                    <CountUp
                      end={s.value}
                      suffix={s.suffix || ""}
                      className="block edit-stat text-white"
                    />
                    <span className="edit-label text-white/55 mt-4 block">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── 03 — PORTFOLIO ───────── */}
        <section className="edit-section relative overflow-hidden">
          <RadialPulseBlob />
          <div className="edit-container relative" style={{ zIndex: 1 }}>
            <SectionLabel number="03 — Portfolio" title="Platforms we operate." />
            <div className="border-t border-white/10">
              {portfolio.map((c, i) => {
                const isOpen = openCard === c.name;
                return (
                  <Reveal key={c.name} delay={i * 0.04}>
                    <div className="frosted-card border-b border-white/10 mb-2">
                      <button
                        type="button"
                        onClick={() => setOpenCard(isOpen ? null : c.name)}
                        className="w-full text-left py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-10 items-baseline group transition-colors hover:bg-white/[0.02]"
                        aria-expanded={isOpen}
                      >
                        <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="md:col-span-5">
                          {c.flagship && (
                            <span className="edit-label text-[hsl(var(--accent-edit))] block mb-2">★ Flagship</span>
                          )}
                          {c.status && (
                            <span className="edit-label text-[hsl(var(--accent-edit))] border border-[hsl(var(--accent-edit))]/50 px-3 py-1 inline-block mb-2 uppercase">
                              {c.status}
                            </span>
                          )}

                          <h3 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-[-0.02em] group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                            {c.name}
                          </h3>
                          <p className="edit-label text-white/55 mt-3">{c.tagline}</p>
                        </div>
                        <p className="md:col-span-5 edit-body text-white/65">{c.summary}</p>
                        <span className="md:col-span-1 edit-label text-white/40 md:text-right group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                          {isOpen ? "− Close" : "+ Details"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-10 md:pb-12 grid md:grid-cols-12 gap-4 md:gap-10 animate-fade-in">
                          {c.cells ? (
                            <div className="md:col-start-2 md:col-span-11 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                              {c.cells.map((cell) => (
                                <div key={cell.l} className="bg-[hsl(var(--surface))] p-6">
                                  <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3 uppercase">{cell.l}</span>
                                  <p className="text-white/85 text-sm leading-relaxed">{cell.d}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                          <div className="md:col-start-2 md:col-span-11 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                            <div className="bg-[hsl(var(--surface))] p-6">
                              <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Patents</span>
                              <p className="text-white text-base">{c.patents}</p>
                            </div>
                            <div className="bg-[hsl(var(--surface))] p-6">
                              <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Market</span>
                              <p className="text-white/85 text-sm leading-relaxed">{c.market}</p>
                            </div>
                            <div className="bg-[hsl(var(--surface))] p-6">
                              <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">Revenue</span>
                              <p className="text-white/85 text-sm leading-relaxed">{c.revenue}</p>
                            </div>
                          </div>
                          )}

                          {c.details && (
                            <div className="md:col-start-2 md:col-span-11 mt-8 space-y-8">
                              <div>
                                <h4 className="text-xl md:text-2xl font-display font-bold text-white">{c.details.heading}</h4>
                                <p className="edit-body text-white/70 mt-4 max-w-3xl">{c.details.intro}</p>
                              </div>
                              <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                                {c.details.decisions.map((d) => (
                                  <div key={d.l} className="bg-[hsl(var(--surface))] p-6">
                                    <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">{d.l}</span>
                                    <p className="text-white/85 text-sm leading-relaxed">{d.d}</p>
                                  </div>
                                ))}
                              </div>
                              <div>
                                <span className="edit-label text-white/40 block mb-4">{c.details.offeringsLabel}</span>
                                <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                                  {c.details.offerings.map((o) => (
                                    <div key={o.l} className="bg-[hsl(var(--surface))] p-6">
                                      <span className="edit-label text-[hsl(var(--accent-edit))] block mb-3">{o.l}</span>
                                      <p className="text-white/85 text-sm leading-relaxed">{o.d}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <span className="edit-label text-white/40 block mb-4">{c.details.capabilitiesLabel}</span>
                                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                                  {c.details.capabilities.map((cap) => (
                                    <li key={cap} className="text-white/70 text-sm leading-relaxed flex gap-2">
                                      <span className="text-[hsl(var(--accent-edit))]">—</span>
                                      <span>{cap}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p className="edit-body text-white/70 max-w-3xl">{c.details.closing}</p>
                              <p className="edit-label text-[hsl(var(--accent-edit))]">{c.details.forSale}</p>
                            </div>
                          )}
                          <div className="md:col-start-2 md:col-span-11 mt-6">

                            {c.internal ? (
                              <Link
                                to={c.href}
                                className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                              >
                                {c.cta} →
                              </Link>
                            ) : (
                              <a
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white edit-label hover:bg-white hover:text-[hsl(var(--bg))] transition-colors"
                              >
                                {c.cta} ↗
                              </a>
                            )}

                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="flex justify-between items-center mt-10">
              <span className="edit-label text-white/40">
                3 additional strategic patent verticals under Emerging Market Opportunities — plus one secret unlocked after investment.
              </span>
              <Link to={lp("/portfolio")} className="edit-label text-white edit-link">
                View full portfolio →
              </Link>
            </div>
          </div>
        </section>

        {/* ───────── CTA ───────── */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container text-center">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">Build with us</span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg md:text-2xl font-display text-white/80">
                We build{" "}
                <TypewriterCycle
                  words={["fintech", "healthtech", "proptech", "SaaS", "your idea"]}
                  className="text-[hsl(var(--accent-edit))] font-bold"
                />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="edit-display text-white mt-6">
                Ready to <br className="md:hidden" />
                <span className="text-[hsl(var(--accent-edit))]">build?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link to={lp("/angel-investor")} className="edit-btn">
                  <span>For Founders</span>
                </Link>
                <Link to={lp("/invest")} className="edit-btn" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
                  <span>For Investors</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default Index;
