import { Helmet } from "react-helmet-async";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
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
{/* ✅ Hero — untouched */}
        <section className="relative pt-40 md:pt-48 pb-20 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground overflow-hidden">
          <HeroVideoBackground />
          {/* White Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-[none] z-[1]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* SEO H1 — sr-only for search engines */}
            <h1 className="sr-only">{t("servicesPage.seoH1")}</h1>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">
              {t("intake.badge")}
            </span>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" role="heading" aria-level={2}>
              {t("intake.heroTitle")}
            </p>
            <p className="hero-description text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              {t("intake.heroSubtitle")}
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" asChild>
              <Link to={briefHref}>
                {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            {/* Trust bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-primary-foreground/70 text-sm">
              {[
                { icon: Zap, label: t("intake.trust1") },
                { icon: ShieldCheck, label: t("intake.trust2") },
                { icon: Workflow, label: t("intake.trust3") },
                { icon: Target, label: t("intake.trust4") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-accent-light" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GEO Intro Paragraph */}
        <section className="py-12 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <p className="service-summary text-lg leading-relaxed text-muted-foreground">
              {t("servicesPage.geoIntro")}
            </p>
          </div>
        </section>

        {/* 🆕 Section 1 — Credential Counter */}
        <CredentialCounter />

        {/* 🆕 Section 2 — Platform Showcase */}
        <PlatformShowcase />

        {/* 🆕 Section 3 — Mini Case Studies */}
        <MiniCaseStudies />

        {/* ✅ Engagement Models — untouched */}
        <section className="relative py-16 px-6 overflow-hidden" style={{ backgroundColor: '#F7F5F0' }}>
          {/* Dot Pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(15,39,71,0.12) 1.2px, transparent 1.2px)`,
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              {t("servicesPage.engagementModels")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model) => (
                <div key={model.title} className="relative text-center rounded-2xl p-8 backdrop-blur-sm border border-white/40 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(200,215,235,0.6) 0%, rgba(180,200,225,0.4) 50%, rgba(160,185,215,0.3) 100%)' }}>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <model.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{model.title}</h3>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <span className="inline-flex items-center rounded-full bg-accent/15 text-foreground px-3 py-1 text-sm font-medium">
                    {model.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Service detail sections — untouched */}
        {services.map((service, index) => {
          const isDark = index % 2 !== 0;
          return (
          <section
            key={service.title}
            className={`py-20 px-6 ${isDark ? "bg-secondary" : "bg-background"}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 max-w-4xl">
                <div className={`w-14 h-14 rounded-2xl ${isDark ? "bg-white/10" : "bg-primary/10"} flex items-center justify-center mb-5`}>
                  <service.icon className={`w-7 h-7 ${isDark ? "text-accent-light" : "text-primary"}`} />
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-foreground"}`}>{service.title}</h2>
                <p className={`text-lg font-medium mb-4 ${isDark ? "text-accent-light" : "text-primary"}`}>{service.tagline}</p>
                <p className={`text-base md:text-lg leading-relaxed ${isDark ? "text-white/75" : "text-muted-foreground"}`}>{service.description}</p>
              </div>

              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                <div className="space-y-6">
                  <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" : "card-elevated"}>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-foreground"}`}>{t("servicesPage.whatsIncluded")}</h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className={`flex items-start gap-3 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-1 ${isDark ? "text-accent-light" : "text-accent"}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" : "card-elevated"}>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-foreground"}`}>{t("servicesPage.whoFor")}</h3>
                    <p className={isDark ? "text-white/70" : "text-muted-foreground"}>{service.whoFor}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" : "card-elevated"}>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-foreground"}`}>{t("servicesPage.useCases")}</h3>
                    <div className="space-y-4">
                      {service.useCases.map((item, caseIndex) => (
                        <div key={`${service.title}-${caseIndex}`} className={`rounded-2xl border p-5 ${isDark ? "border-white/10 bg-white/5" : "border-border bg-background"}`}>
                          <p className={`text-sm mb-2 ${isDark ? "text-white/80" : "text-foreground"}`}><span className="font-semibold">{t("servicesPage.problem")}</span> {item.problem}</p>
                          <p className={`text-sm mb-2 ${isDark ? "text-white/80" : "text-foreground"}`}><span className="font-semibold">{t("servicesPage.approach")}</span> {item.approach}</p>
                          <p className={`text-sm ${isDark ? "text-white/80" : "text-foreground"}`}><span className="font-semibold">{t("servicesPage.outcome")}</span> {item.outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={isDark ? "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm" : "card-elevated"}>
                    <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-foreground"}`}>{t("servicesPage.faq")}</h3>
                    <div className="space-y-3">
                      {service.faqs.map((faq) => (
                        <details key={faq.q} className={`group rounded-2xl border px-5 py-4 ${isDark ? "border-white/10 bg-white/5" : "border-border bg-background"}`}>
                          <summary className={`cursor-pointer list-none font-semibold flex items-center justify-between gap-3 ${isDark ? "text-white" : "text-foreground"}`}>
                            <span>{faq.q}</span>
                            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                          </summary>
                          <p className={`mt-3 text-sm ${isDark ? "text-white/70" : "text-muted-foreground"}`}>{faq.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {(index === 1 || index === 3) && (
                <div className="mt-10 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to={briefHref}>
                      {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
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
