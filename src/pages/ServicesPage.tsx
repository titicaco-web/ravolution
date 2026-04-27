import { Helmet } from "react-helmet-async";
import { EditorialShell, Reveal, SectionLabel } from "@/components/editorial/EditorialLayout";
import HeroVideoBackground from "@/components/HeroVideoBackground";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Briefcase,
  CheckCircle2,
  Layers,
  Monitor,
  Palette,
  Settings,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import CredentialCounter from "@/components/services/CredentialCounter";
import PlatformShowcase from "@/components/services/PlatformShowcase";
import MiniCaseStudies from "@/components/services/MiniCaseStudies";
import HowWeWorkTimeline from "@/components/services/HowWeWorkTimeline";
import TechStackStrip from "@/components/services/TechStackStrip";
import FounderBlock from "@/components/services/FounderBlock";
import ExpandedFAQ from "@/components/services/ExpandedFAQ";
import DeliveryProcess from "@/components/services/DeliveryProcess";

const getServiceRouteSlug = (lang: string) => {
  switch (lang) {
    case "sv": return "tjanster";
    case "es": return "servicios";
    default: return "services";
  }
};

const getCanonicalUrl = (lang: string) => {
  return `https://ravolution.se/${lang}/${getServiceRouteSlug(lang)}`;
};

const buildStructuredData = (lang: string, t: (key: string) => string) => {
  const url = getCanonicalUrl(lang);
  const faqEntries = lang === "sv" ? [
    { q: "Hur snabbt kan Ravolution bygga en SaaS-plattform?", a: "Upptäcktssprint tar 2–3 veckor. MVP-leverans på 8–12 veckor beroende på komplexitet. Fullständiga plattformar med flera moduler tar 3–9 månader med milstolpebaserad leverans." },
    { q: "Hur får jag en kostnadsuppskattning från Ravolution?", a: "Skicka din projektbrief via formuläret på ravolution.se/sv/tjanster. Ravolution svarar inom 48 timmar med en kostnadsuppskattning och plattformsbeskrivning, eller i många fall en klickbar mockup." },
    { q: "Arbetar Ravolution med kunder i Chile och Bolivia?", a: "Ja. Ravolution betjänar kunder i Sverige, Chile, Bolivia, Spanien, MENA och globalt. Teamet kommunicerar på engelska, svenska och spanska. Formuläret finns på alla tre språken." },
    { q: "Vilka typer av plattformar bygger Ravolution?", a: "SaaS-plattformar, marknadsplatser, rekryterings- och matchningssystem, EdTech och språkinlärningsplattformar, CRM och partnerportaler, AI-drivna arbetsflödesverktyg, koldioxidhandels- och efterlevnadssystem samt anpassade B2B- och B2C-webbapplikationer." },
    { q: "Kan jag få equity-baserad utveckling istället för kontant betalning?", a: "Ja. Ravolution erbjuder en Build-for-Equity-modell för pre-seed till seed-grundare med validerade koncept. Engineering, design och patentstrategi investeras i utbyte mot ägarandel. Detaljer på ravolution.se/sv/angel-investor." },
    { q: "Hur många patent har Ravolution lämnat in?", a: "27 patent med 343 krav inom 6 branscher inklusive rekrytering, språkutbildning, AI, handel, koldioxidmarknader och modeteknologi." },
    { q: "Vilken teknikstack använder Ravolution?", a: "Kärnstack: React, TypeScript, Node.js, Supabase, PostgreSQL, Tailwind CSS. Betalningar: Stripe. AI: OpenAI API:er, finjusterade modeller. Design: Figma. Hosting: Vercel. Teamet väljer den bästa stacken för varje projekt utan leverantörsinlåsning." },
    { q: "Vad kostar plattformsutveckling på Ravolution?", a: "Sprintprojekt (4–12 veckor) kostar normalt EUR 8 000–40 000. Komplexa plattformar med flera moduler (3–9 månader) kostar EUR 30 000–120 000. En ärlig uppskattning ges inom 48 timmar efter inskickad brief." },
  ] : lang === "es" ? [
    { q: "¿Qué tan rápido puede Ravolution construir una plataforma SaaS?", a: "El sprint de descubrimiento toma 2–3 semanas. La entrega del MVP toma 8–12 semanas según la complejidad. Plataformas completas con múltiples módulos toman 3–9 meses con entrega basada en hitos." },
    { q: "¿Cómo obtengo una estimación de costos de Ravolution?", a: "Envía tu brief de proyecto a través del formulario en ravolution.se/es/servicios. Ravolution responde en 48 horas con una estimación de costos y descripción de plataforma, o en muchos casos un mockup clickeable." },
    { q: "¿Trabaja Ravolution con clientes en Chile y Bolivia?", a: "Sí. Ravolution atiende clientes en Suecia, Chile, Bolivia, España, MENA y globalmente. El equipo se comunica en inglés, sueco y español. El formulario está disponible en los tres idiomas. Atendemos Santiago, Valparaíso, Santa Cruz, Cochabamba y La Paz." },
    { q: "¿Qué tipos de plataformas construye Ravolution?", a: "Plataformas SaaS, marketplaces, sistemas de reclutamiento y matching, plataformas EdTech y de aprendizaje de idiomas, CRM y portales de socios, herramientas de flujo de trabajo con IA, sistemas de comercio de carbono y cumplimiento, y aplicaciones web B2B y B2C personalizadas." },
    { q: "¿Puedo obtener desarrollo basado en equity en lugar de pagar en efectivo?", a: "Sí. Ravolution ofrece un modelo Build-for-Equity para fundadores pre-seed a seed con conceptos validados. Ingeniería, diseño y estrategia de patentes se invierten a cambio de participación accionaria. Detalles en ravolution.se/es/angel-investor." },
    { q: "¿Cuántas patentes ha registrado Ravolution?", a: "27 patentes con 343 reivindicaciones en 6 industrias incluyendo reclutamiento, educación de idiomas, IA, comercio, mercados de carbono y tecnología de moda." },
    { q: "¿Qué stack tecnológico usa Ravolution?", a: "Stack principal: React, TypeScript, Node.js, Supabase, PostgreSQL, Tailwind CSS. Pagos: Stripe. IA: APIs de OpenAI, modelos ajustados. Diseño: Figma. Hosting: Vercel. El equipo selecciona el mejor stack para cada proyecto sin dependencia de proveedor." },
    { q: "¿Cuánto cuesta el desarrollo de plataformas en Ravolution?", a: "Proyectos sprint (4–12 semanas) típicamente van desde EUR 8.000 hasta EUR 40.000. Plataformas complejas con múltiples módulos (3–9 meses) van desde EUR 30.000–120.000. Se entrega una estimación honesta dentro de 48 horas de recibir el brief." },
  ] : [
    { q: "How fast can Ravolution build a SaaS platform?", a: "Discovery sprint takes 2–3 weeks. MVP delivery in 8–12 weeks depending on complexity. Full platforms with multiple modules take 3–9 months with milestone-based delivery." },
    { q: "How do I get a cost estimate from Ravolution?", a: "Submit your project brief via the intake form at ravolution.se/en/services. Ravolution responds within 48 hours with a cost estimate and platform description, or in many cases a clickable mockup." },
    { q: "Does Ravolution work with clients in Chile and Bolivia?", a: "Yes. Ravolution serves clients in Sweden, Chile, Bolivia, Spain, MENA, and globally. The team communicates in English, Swedish, and Spanish. The intake form is available in all three languages." },
    { q: "What types of platforms does Ravolution build?", a: "SaaS platforms, marketplaces, recruitment and matching systems, EdTech and language learning platforms, CRM and partner portals, AI-powered workflow tools, carbon trading and compliance systems, and custom B2B and B2C web applications." },
    { q: "Can I get equity-based development instead of paying cash?", a: "Yes. Ravolution offers a Build-for-Equity model for pre-seed to seed founders with validated concepts. Engineering, design, and patent strategy are invested in exchange for equity. Details at ravolution.se/en/angel-investor." },
    { q: "How many patents has Ravolution filed?", a: "27 patents with 343 claims across 6 industries including recruitment, language education, AI, trade, carbon markets, and fashion technology." },
    { q: "What tech stack does Ravolution use?", a: "Core stack: React, TypeScript, Node.js, Supabase, PostgreSQL, Tailwind CSS. Payments: Stripe. AI: OpenAI APIs, fine-tuned models. Design: Figma. Hosting: Vercel. The team selects the best stack for each project with no vendor lock-in." },
    { q: "What does platform development cost at Ravolution?", a: "Sprint projects (4–12 weeks) typically range EUR 8,000–40,000. Complex multi-module platforms (3–9 months) range EUR 30,000–120,000. An honest estimate is provided within 48 hours of brief submission." },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ravolution.se/#organization",
        "name": "Ravolution AB",
        "alternateName": ["Ravolution", "Ravolution Venture Studio"],
        "url": "https://ravolution.se",
        "logo": { "@type": "ImageObject", "url": "https://ravolution.se/logo.png", "width": 512, "height": 512 },
        "sameAs": ["https://www.linkedin.com/company/ravolution", "https://github.com/ravolution"],
        "foundingDate": "2023",
        "founder": {
          "@type": "Person",
          "@id": "https://ravolution.se/#founder",
          "name": "Ivan Daza",
          "jobTitle": "Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/ivandaza/",
          "knowsAbout": ["SaaS platform architecture", "Patent strategy and IP protection", "AI integration and machine learning", "Carbon markets and environmental compliance", "Recruitment technology", "Language education technology", "International business development"],
          "knowsLanguage": ["en", "sv", "es"]
        },
        "address": [{ "@type": "PostalAddress", "addressCountry": "SE", "addressLocality": "Stockholm", "addressRegion": "Stockholms län" }],
        "areaServed": [
          { "@type": "Country", "name": "Sweden", "sameAs": "https://en.wikipedia.org/wiki/Sweden" },
          { "@type": "Country", "name": "Chile", "sameAs": "https://en.wikipedia.org/wiki/Chile" },
          { "@type": "Country", "name": "Bolivia", "sameAs": "https://en.wikipedia.org/wiki/Bolivia" },
          { "@type": "Country", "name": "Spain", "sameAs": "https://en.wikipedia.org/wiki/Spain" }
        ],
        "knowsAbout": ["SaaS platform development", "Custom marketplace architecture", "AI-powered workflow tools", "Recruitment and matching platforms", "EdTech and language learning systems", "CRM and partner portal development", "Carbon trading and compliance platforms", "Patent filing and IP strategy", "MVP development and rapid prototyping"],
        "knowsLanguage": ["en", "sv", "es"],
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 10 },
        "contactPoint": [{ "@type": "ContactPoint", "contactType": "Sales", "availableLanguage": ["English", "Swedish", "Spanish"], "url": "https://ravolution.se/en/services", "email": "ivan.daza@ravolution.se" }]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        "name": "End-to-End SaaS Platform Development",
        "description": "Ravolution AB is a Swedish venture studio that builds custom SaaS platforms, marketplaces, AI tools, recruitment systems, EdTech platforms, and CRMs. MVP delivered in 8–12 weeks. 27 patents filed with 343 claims across 6 industries. Submit a project brief and receive a cost estimate within 48 hours.",
        "provider": { "@id": "https://ravolution.se/#organization" },
        "serviceType": ["SaaS Platform Development", "Marketplace Development", "AI Workflow Development", "Recruitment Platform Development", "EdTech Platform Development", "CRM Development", "MVP Development", "Patent Strategy"],
        "areaServed": [{ "@type": "Country", "name": "Sweden" }, { "@type": "Country", "name": "Chile" }, { "@type": "Country", "name": "Bolivia" }, { "@type": "Country", "name": "Spain" }],
        "availableChannel": { "@type": "ServiceChannel", "serviceUrl": url, "availableLanguage": ["English", "Swedish", "Spanish"] },
        "termsOfService": "https://ravolution.se/en/terms",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sprint Project", "description": "Defined deliverables, timeline, and budget. Ideal for MVPs, prototypes, and well-scoped modules. 1–12 weeks." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Milestone Project", "description": "Full platform development with milestones and iterative delivery. For complex, multi-module projects. 3–9 months." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retainer", "description": "Continuous development, support, and platform evolution. Scales up or down as needed. Monthly." } }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": t("servicesPage.seoTitle"),
        "description": t("servicesPage.seoDesc"),
        "inLanguage": lang,
        "isPartOf": { "@id": "https://ravolution.se/#website" },
        "about": { "@id": `${url}#service` },
        "dateModified": "2026-04-15",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": lang === "sv" ? "Hem" : lang === "es" ? "Inicio" : "Home", "item": `https://ravolution.se/${lang}` },
            { "@type": "ListItem", "position": 2, "name": t("servicesPage.services"), "item": url }
          ]
        },
        "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".hero-description", ".service-summary"] }
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        "mainEntity": faqEntries.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };
};

const getOgLocale = (lang: string) => {
  switch (lang) {
    case "sv": return "sv_SE";
    case "es": return "es_CL";
    default: return "en_SE";
  }
};

const ServicesPage = () => {
  const { t, language } = useLanguage();
  const lp = useLangPath();
  const briefHref = lp("/brief");
  const canonicalUrl = getCanonicalUrl(language);
  const ogImage = `https://ravolution.se/og/services-${language}.png`;
  const structuredData = buildStructuredData(language, t);

  const engagementModels = [
    {
      icon: Briefcase,
      title: t("servicesPage.fixedScopeTitle"),
      description: t("servicesPage.fixedScopeDesc"),
      duration: t("servicesPage.fixedScopeDuration"),
    },
    {
      icon: Layers,
      title: t("servicesPage.buildPhaseTitle"),
      description: t("servicesPage.buildPhaseDesc"),
      duration: t("servicesPage.buildPhaseDuration"),
    },
    {
      icon: Settings,
      title: t("servicesPage.retainerTitle"),
      description: t("servicesPage.retainerDesc"),
      duration: t("servicesPage.retainerDuration"),
    },
  ];

  const services = [
    {
      icon: Monitor,
      title: t("servicesPage.service1Title"),
      tagline: t("servicesPage.service1Tagline"),
      description: t("servicesPage.service1Desc"),
      whoFor: t("servicesPage.service1WhoFor"),
      deliverables: [
        t("servicesPage.service1D1"),
        t("servicesPage.service1D2"),
        t("servicesPage.service1D3"),
        t("servicesPage.service1D4"),
        t("servicesPage.service1D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service1UC1Problem"),
          approach: t("servicesPage.service1UC1Approach"),
          outcome: t("servicesPage.service1UC1Outcome"),
        },
        {
          problem: t("servicesPage.service1UC2Problem"),
          approach: t("servicesPage.service1UC2Approach"),
          outcome: t("servicesPage.service1UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service1FAQ1Q"), a: t("servicesPage.service1FAQ1A") },
        { q: t("servicesPage.service1FAQ2Q"), a: t("servicesPage.service1FAQ2A") },
        { q: t("servicesPage.service1FAQ3Q"), a: t("servicesPage.service1FAQ3A") },
        { q: t("servicesPage.service1FAQ4Q"), a: t("servicesPage.service1FAQ4A") },
      ],
    },
    {
      icon: Palette,
      title: t("servicesPage.service2Title"),
      tagline: t("servicesPage.service2Tagline"),
      description: t("servicesPage.service2Desc"),
      whoFor: t("servicesPage.service2WhoFor"),
      deliverables: [
        t("servicesPage.service2D1"),
        t("servicesPage.service2D2"),
        t("servicesPage.service2D3"),
        t("servicesPage.service2D4"),
        t("servicesPage.service2D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service2UC1Problem"),
          approach: t("servicesPage.service2UC1Approach"),
          outcome: t("servicesPage.service2UC1Outcome"),
        },
        {
          problem: t("servicesPage.service2UC2Problem"),
          approach: t("servicesPage.service2UC2Approach"),
          outcome: t("servicesPage.service2UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service2FAQ1Q"), a: t("servicesPage.service2FAQ1A") },
        { q: t("servicesPage.service2FAQ2Q"), a: t("servicesPage.service2FAQ2A") },
        { q: t("servicesPage.service2FAQ3Q"), a: t("servicesPage.service2FAQ3A") },
      ],
    },
    {
      icon: Brain,
      title: t("servicesPage.service3Title"),
      tagline: t("servicesPage.service3Tagline"),
      description: t("servicesPage.service3Desc"),
      whoFor: t("servicesPage.service3WhoFor"),
      deliverables: [
        t("servicesPage.service3D1"),
        t("servicesPage.service3D2"),
        t("servicesPage.service3D3"),
        t("servicesPage.service3D4"),
        t("servicesPage.service3D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service3UC1Problem"),
          approach: t("servicesPage.service3UC1Approach"),
          outcome: t("servicesPage.service3UC1Outcome"),
        },
        {
          problem: t("servicesPage.service3UC2Problem"),
          approach: t("servicesPage.service3UC2Approach"),
          outcome: t("servicesPage.service3UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service3FAQ1Q"), a: t("servicesPage.service3FAQ1A") },
        { q: t("servicesPage.service3FAQ2Q"), a: t("servicesPage.service3FAQ2A") },
        { q: t("servicesPage.service3FAQ3Q"), a: t("servicesPage.service3FAQ3A") },
      ],
    },
    {
      icon: ShieldCheck,
      title: t("servicesPage.service4Title"),
      tagline: t("servicesPage.service4Tagline"),
      description: t("servicesPage.service4Desc"),
      whoFor: t("servicesPage.service4WhoFor"),
      deliverables: [
        t("servicesPage.service4D1"),
        t("servicesPage.service4D2"),
        t("servicesPage.service4D3"),
        t("servicesPage.service4D4"),
        t("servicesPage.service4D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service4UC1Problem"),
          approach: t("servicesPage.service4UC1Approach"),
          outcome: t("servicesPage.service4UC1Outcome"),
        },
        {
          problem: t("servicesPage.service4UC2Problem"),
          approach: t("servicesPage.service4UC2Approach"),
          outcome: t("servicesPage.service4UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service4FAQ1Q"), a: t("servicesPage.service4FAQ1A") },
        { q: t("servicesPage.service4FAQ2Q"), a: t("servicesPage.service4FAQ2A") },
        { q: t("servicesPage.service4FAQ3Q"), a: t("servicesPage.service4FAQ3A") },
      ],
    },
    {
      icon: Settings,
      title: t("servicesPage.service5Title"),
      tagline: t("servicesPage.service5Tagline"),
      description: t("servicesPage.service5Desc"),
      whoFor: t("servicesPage.service5WhoFor"),
      deliverables: [
        t("servicesPage.service5D1"),
        t("servicesPage.service5D2"),
        t("servicesPage.service5D3"),
        t("servicesPage.service5D4"),
        t("servicesPage.service5D5"),
      ],
      useCases: [
        {
          problem: t("servicesPage.service5UC1Problem"),
          approach: t("servicesPage.service5UC1Approach"),
          outcome: t("servicesPage.service5UC1Outcome"),
        },
        {
          problem: t("servicesPage.service5UC2Problem"),
          approach: t("servicesPage.service5UC2Approach"),
          outcome: t("servicesPage.service5UC2Outcome"),
        },
      ],
      faqs: [
        { q: t("servicesPage.service5FAQ1Q"), a: t("servicesPage.service5FAQ1A") },
        { q: t("servicesPage.service5FAQ2Q"), a: t("servicesPage.service5FAQ2A") },
        { q: t("servicesPage.service5FAQ3Q"), a: t("servicesPage.service5FAQ3A") },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t("servicesPage.seoTitle")}</title>
        <meta name="description" content={t("servicesPage.seoDesc")} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Hreflang */}
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/services" />
        <link rel="alternate" hrefLang="en-SE" href="https://ravolution.se/en/services" />
        <link rel="alternate" hrefLang="sv-SE" href="https://ravolution.se/sv/tjanster" />
        <link rel="alternate" hrefLang="sv" href="https://ravolution.se/sv/tjanster" />
        <link rel="alternate" hrefLang="es-CL" href="https://ravolution.se/es/servicios" />
        <link rel="alternate" hrefLang="es-BO" href="https://ravolution.se/es/servicios" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/servicios" />
        <link rel="alternate" hrefLang="x-default" href="https://ravolution.se/en/services" />

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={t("servicesPage.ogTitle")} />
        <meta property="og:description" content={t("servicesPage.ogDesc")} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={t("servicesPage.ogImageAlt")} />
        <meta property="og:locale" content={getOgLocale(language)} />
        {language === "en" && <meta property="og:locale:alternate" content="sv_SE" />}
        {language === "en" && <meta property="og:locale:alternate" content="es_CL" />}
        {language === "es" && <meta property="og:locale:alternate" content="es_BO" />}
        <meta property="og:site_name" content="Ravolution AB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("servicesPage.ogTitle")} />
        <meta name="twitter:description" content={t("servicesPage.twitterDesc")} />
        <meta name="twitter:image" content={ogImage} />

        {/* Preload OG image */}
        <link rel="preload" as="image" href={ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <EditorialShell>
        {/* HERO — editorial 60vh */}
        <section className="relative pt-40 pb-16 px-6 md:px-12 min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <HeroVideoBackground />
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none z-[1]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          <div className="edit-container relative z-10">
            <h1 className="sr-only">{t("servicesPage.seoH1")}</h1>
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">{t("intake.badge")}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="edit-display text-white mt-6" role="heading" aria-level={2}>
                {t("intake.heroTitle")}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="edit-body text-white/65 mt-8 max-w-2xl">
                {t("intake.heroSubtitle")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to={briefHref}
                  className="edit-label inline-flex items-center gap-3 bg-white text-black px-6 py-4 hover:bg-[hsl(var(--accent-edit))] hover:text-white transition-colors"
                >
                  {t("intake.submitBrief")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 border-t border-white/10 pt-6">
                {[
                  { icon: Zap, label: t("intake.trust1") },
                  { icon: ShieldCheck, label: t("intake.trust2") },
                  { icon: Workflow, label: t("intake.trust3") },
                  { icon: Target, label: t("intake.trust4") },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 edit-label text-white/55">
                    <item.icon className="w-4 h-4 text-[hsl(var(--accent-edit))]" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 01 — INTRO */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Overview" title={t("intake.heroTitle") as string} />
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-8 md:col-start-3">
                <Reveal>
                  <p className="text-xl md:text-2xl font-display text-white/85 leading-snug">
                    {t("servicesPage.geoIntro")}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 🆕 Section 1 — Credential Counter */}
        <CredentialCounter />

        {/* 🆕 Section 2 — Platform Showcase */}
        <PlatformShowcase />

        {/* 🆕 Section 3 — Mini Case Studies */}
        <MiniCaseStudies />

        {/* 02 — ENGAGEMENT MODELS */}
        <section className="edit-section border-t border-white/10 bg-[hsl(var(--surface))]">
          <div className="edit-container">
            <SectionLabel number="02 — Engagement" title={t("servicesPage.engagementModels") as string} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {engagementModels.map((model, i) => (
                <Reveal key={model.title} delay={i * 0.08}>
                  <div className="bg-[hsl(var(--surface))] p-8 md:p-10 h-full flex flex-col">
                    <model.icon className="w-6 h-6 text-[hsl(var(--accent-edit))] mb-6" />
                    <span className="edit-label text-white/45 mb-3">0{i + 1}</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white mb-4">{model.title}</h3>
                    <p className="edit-body text-white/60 mb-6 flex-1">{model.description}</p>
                    <span className="edit-label text-[hsl(var(--accent-edit))] border-t border-white/10 pt-4">
                      {model.duration}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — SERVICES */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Services" title="What we build" />
          </div>
        </section>
        {services.map((service, index) => {
          return (
          <section
            key={service.title}
            className="edit-section border-t border-white/10"
          >
            <div className="edit-container">
              <Reveal>
                <div className="mb-12 grid md:grid-cols-12 gap-6 items-baseline border-t border-white/10 pt-6">
                  <span className="md:col-span-1 edit-label text-[hsl(var(--accent-edit))]">0{index + 1}</span>
                  <div className="md:col-span-11 space-y-5">
                    <service.icon className="w-7 h-7 text-[hsl(var(--accent-edit))]" />
                    <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-[-0.02em] text-white leading-tight">{service.title}</h3>
                    <p className="edit-label text-[hsl(var(--accent-edit))]">{service.tagline}</p>
                    <p className="edit-body text-white/65 max-w-3xl">{service.description}</p>
                  </div>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
                <Reveal>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <span className="edit-label text-white/45 mb-4 block">{t("servicesPage.whatsIncluded")}</span>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-white/70">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1 text-[hsl(var(--accent-edit))]" />
                          <span className="edit-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <span className="edit-label text-white/45 mb-4 block">{t("servicesPage.whoFor")}</span>
                    <p className="edit-body text-white/70">{service.whoFor}</p>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <span className="edit-label text-white/45 mb-4 block">{t("servicesPage.useCases")}</span>
                    <div className="space-y-5">
                      {service.useCases.map((item, caseIndex) => (
                        <div key={`${service.title}-${caseIndex}`} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                          <p className="text-sm text-white/80 mb-2"><span className="edit-label text-[hsl(var(--accent-edit))] mr-2">{t("servicesPage.problem")}</span>{item.problem}</p>
                          <p className="text-sm text-white/80 mb-2"><span className="edit-label text-[hsl(var(--accent-edit))] mr-2">{t("servicesPage.approach")}</span>{item.approach}</p>
                          <p className="text-sm text-white/80"><span className="edit-label text-[hsl(var(--accent-edit))] mr-2">{t("servicesPage.outcome")}</span>{item.outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="bg-[hsl(var(--bg))] p-8 h-full">
                    <span className="edit-label text-white/45 mb-4 block">{t("servicesPage.faq")}</span>
                    <div className="space-y-2">
                      {service.faqs.map((faq) => (
                        <details key={faq.q} className="group border-b border-white/10 py-3">
                          <summary className="cursor-pointer list-none font-display font-bold uppercase tracking-tight text-white flex items-center justify-between gap-3 text-sm">
                            <span>{faq.q}</span>
                            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90 text-[hsl(var(--accent-edit))]" />
                          </summary>
                          <p className="mt-3 text-sm text-white/60 leading-relaxed">{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {(index === 1 || index === 3) && (
                <div className="mt-12">
                  <Link
                    to={briefHref}
                    className="edit-label inline-flex items-center gap-3 bg-white text-black px-6 py-4 hover:bg-[hsl(var(--accent-edit))] hover:text-white transition-colors"
                  >
                    {t("intake.submitBrief")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </section>
          );
        })}

        {/* 🆕 Section 4 — How We Work Timeline */}
        <HowWeWorkTimeline />

        {/* 🆕 Section 5 — Tech Stack Strip */}
        <TechStackStrip />

        {/* 🆕 Section 6 — Delivery Process Teaser */}
        <DeliveryProcess variant="teaser" />

        {/* Cost + Comparison Section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("servicesPage.h2Cost")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("servicesPage.costP1")}</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">{t("servicesPage.comparisonTitle")}</h3>
              <p className="text-muted-foreground">{t("servicesPage.comparisonText")}</p>
            </div>
          </div>
        </section>

        {/* LatAm Presence (Spanish only) */}
        {language === "es" && (
          <section className="py-12 px-6" style={{ backgroundColor: '#F7F5F0' }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("servicesPage.latamTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("servicesPage.latamText")}</p>
            </div>
          </section>
        )}

        {/* Founder Authority */}
        <FounderBlock />

        {/* Submit Brief CTA */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("servicesPage.h2Brief")}</h2>
              <p className="text-muted-foreground mb-6">{t("intake.briefSubtitle")}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to={briefHref}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Expanded FAQ */}
        <ExpandedFAQ />

        {/* ✅ Footer CTA — untouched */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("servicesPage.bottomCtaTitle")}</h2>
            <p className="text-primary-foreground/80 text-lg mb-8">{t("servicesPage.bottomCtaDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
                <Link to={briefHref}>
                  {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-primary font-semibold hover:bg-white/90" asChild>
                <a href="https://wa.me/46769456600" target="_blank" rel="noopener noreferrer">
                  {t("servicesPage.bottomCtaBook")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        </EditorialShell>
    </>
  );
};

export default ServicesPage;
