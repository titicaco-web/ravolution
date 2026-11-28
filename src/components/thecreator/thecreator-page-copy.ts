/**
 * Copy for the public, indexable TheCreator page (/{lang}/thecreator).
 * Lifecycle, advisory board and engagement models are reused from
 * thecreator-apply-copy.ts so pricing never diverges from /apply.
 * Owner decision: Ravolution makes no cash investments.
 */
import type { ApplyLanguage } from "@/components/apply/apply-copy";

export const THECREATOR_LANGS = ["en", "sv", "es"] as const;
export const THECREATOR_LOGIN_URL = "https://thecreator.ravolution.se/auth";
export const THECREATOR_OG_IMAGE = "https://ravolution.se/og-thecreator.jpg";
export const theCreatorUrl = (lang: ApplyLanguage) => `https://ravolution.se/${lang}/thecreator`;

export type Faq = { q: string; a: string };

type PageCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  answer: string;
  applyCta: string;
  loginCta: string;
  breadcrumbHome: string;
  evidenceLabel: string;
  evidenceTitle: string;
  evidenceBody: string;
  onboardingLabel: string;
  onboardingTitle: string;
  onboardingOptions: readonly { t: string; d: string }[];
  whoLabel: string;
  whoTitle: string;
  who: readonly { t: string; d: string }[];
  faqLabel: string;
  faqTitle: string;
  faqs: readonly Faq[];
  closingTitle: string;
  closingBody: string;
};

export const theCreatorPageCopy: Record<ApplyLanguage, PageCopy> = {
  en: {
    title: "TheCreator — Founder Operating System | Ravolution AB",
    description: "TheCreator, the founder operating system by Ravolution: AI advisory board, investor-ready data room and build-for-equity partnership. From 0 SEK.",
    eyebrow: "TheCreator · Project Intelligence by Ravolution",
    h1: "TheCreator — the Founder Operating System",
    answer: "TheCreator is a founder and startup operating system built by Ravolution AB: one evidence-based workspace for strategy, product, decisions, growth and fundraising, with an AI advisory board and an investor-ready data room. It is made for pre-seed and seed founders and the investors who back them, and starts at 0 SEK per month on the Flex plan.",
    applyCta: "Apply for TheCreator",
    loginCta: "Log in to TheCreator →",
    breadcrumbHome: "Home",
    evidenceLabel: "Evidence",
    evidenceTitle: "The Trust Ledger",
    evidenceBody: "Every decision, commitment and milestone is logged together with the evidence behind it. Founders see what has actually been proven, and investors see verified progress instead of claims in a slide.",
    onboardingLabel: "Onboarding",
    onboardingTitle: "Start from what you already have",
    onboardingOptions: [
      { t: "A git repository", d: "Technical teams connect the existing codebase as the starting point for the venture workspace." },
      { t: "A pitch deck", d: "Founders without code start from the deck: problem, market and plan become the first hypotheses to validate." },
    ],
    whoLabel: "Who it's for",
    whoTitle: "Built for founders — and the investors who back them",
    who: [
      { t: "Pre-seed & seed founders", d: "One system from first hypothesis to investor-ready company." },
      { t: "Non-technical founders", d: "Structure, specification and an AI advisory board, with Ravolution as optional build partner." },
      { t: "Technical teams needing velocity", d: "Turn an existing repository into a gated plan toward investable milestones." },
      { t: "Investors", d: "Verified progress from portfolio companies, backed by the Trust Ledger." },
    ],
    faqLabel: "FAQ",
    faqTitle: "Questions about TheCreator",
    faqs: [
      { q: "What is a founder operating system?", a: "A founder operating system is one workspace where a startup runs strategy, product, decisions, growth and fundraising together. TheCreator gates each stage — Imagine, Validate, Build, Launch, Grow, Scale — by evidence, with fundraising and IP protection running in parallel." },
      { q: "How is TheCreator different from Notion, Jira or ChatGPT?", a: "Notion stores documents, Jira tracks tasks and ChatGPT answers prompts. TheCreator connects them to the venture lifecycle: decisions and commitments are logged against evidence, an AI advisory board reviews plans, and the investor data room stays current as the company is built." },
      { q: "What does TheCreator cost?", a: "Flex has no monthly minimum (0 SEK), with managed AI at cost + 20% and prepaid advisory at 2,300 SEK/h (≈ $225). Pro is 9,800 SEK per month (≈ $960) with managed AI at cost and 2 advisory hours included. A Venture partnership is equity by agreement. Prices exclude VAT; you are charged in SEK." },
      { q: "Which AI models does TheCreator use?", a: "Claude and ChatGPT. On Flex they are managed for you at cost + 20%. On Pro they are managed at cost, or you can use your own AI connection." },
      { q: "Is my data used to train AI models?", a: "No. TheCreator uses the providers' APIs, and data sent through these APIs is not used to train their models." },
      { q: "Does Ravolution invest cash?", a: "No. Ravolution makes no cash investments. In a Venture partnership Ravolution invests build, product, IP and patents, brand and go-to-market in exchange for equity." },
      { q: "How do investors use TheCreator?", a: "Investors get verified progress from portfolio companies: milestones, decisions and data-room material backed by evidence in the Trust Ledger, instead of self-reported updates." },
      { q: "How do I get access?", a: "Apply through Ravolution's application page. Access is by invitation: once your application is approved you receive an invite and log in at thecreator.ravolution.se." },
    ],
    closingTitle: "Build the company, not the AI bill.",
    closingBody: "Apply, get your invitation, and run the whole venture in one system.",
  },
  sv: {
    title: "TheCreator — Operativsystem för grundare | Ravolution AB",
    description: "TheCreator är operativsystemet för grundare från Ravolution: AI-rådgivningsgrupp, investerarredo datarum och bygg mot ägarandel. Från 0 SEK.",
    eyebrow: "TheCreator · Project Intelligence by Ravolution",
    h1: "TheCreator — operativsystemet för grundare",
    answer: "TheCreator är ett operativsystem för grundare byggt av Ravolution AB: en evidensbaserad arbetsyta för strategi, produkt, beslut, tillväxt och kapitalanskaffning, med en AI-rådgivningsgrupp och ett investerarredo datarum. Det är gjort för grundare i pre-seed- och seed-fas och investerarna bakom dem, och börjar på 0 SEK per månad med Flex.",
    applyCta: "Ansök till TheCreator",
    loginCta: "Logga in i TheCreator →",
    breadcrumbHome: "Hem",
    evidenceLabel: "Evidens",
    evidenceTitle: "Trust Ledger",
    evidenceBody: "Varje beslut, åtagande och milstolpe loggas tillsammans med bevisen bakom. Grundare ser vad som faktiskt är bevisat, och investerare ser verifierade framsteg i stället för påståenden i en presentation.",
    onboardingLabel: "Kom igång",
    onboardingTitle: "Börja med det du redan har",
    onboardingOptions: [
      { t: "Ett git-repo", d: "Tekniska team kopplar den befintliga kodbasen som startpunkt för företagets arbetsyta." },
      { t: "En pitchdeck", d: "Grundare utan kod börjar från pitchdecken: problem, marknad och plan blir de första hypoteserna att validera." },
    ],
    whoLabel: "För vem",
    whoTitle: "Byggt för grundare — och investerarna bakom dem",
    who: [
      { t: "Grundare i pre-seed och seed", d: "Ett system från första hypotes till investerarredo bolag." },
      { t: "Icke-tekniska grundare", d: "Struktur, specifikation och AI-rådgivning, med Ravolution som valfri byggpartner." },
      { t: "Tekniska team som behöver fart", d: "Gör ett befintligt repo till en styrd plan mot investerbara milstolpar." },
      { t: "Investerare", d: "Verifierade framsteg från portföljbolag, med stöd av Trust Ledger." },
    ],
    faqLabel: "Frågor",
    faqTitle: "Frågor om TheCreator",
    faqs: [
      { q: "Vad är ett operativsystem för grundare?", a: "Ett operativsystem för grundare är en arbetsyta där ett startupbolag driver strategi, produkt, beslut, tillväxt och kapitalanskaffning tillsammans. TheCreator styr varje fas — Föreställ, Validera, Bygg, Lansera, Väx, Skala — med evidens, med kapitalanskaffning och IP-skydd parallellt." },
      { q: "Hur skiljer sig TheCreator från Notion, Jira eller ChatGPT?", a: "Notion lagrar dokument, Jira följer uppgifter och ChatGPT svarar på frågor. TheCreator kopplar ihop dem med företagets livscykel: beslut och åtaganden loggas mot evidens, en AI-rådgivningsgrupp granskar planer och investerardatarummet hålls aktuellt medan bolaget byggs." },
      { q: "Vad kostar TheCreator?", a: "Flex har ingen månadsavgift (0 SEK), med hanterad AI till kostnad + 20 % och förskottsbetald rådgivning för 2 300 SEK/h (≈ 225 USD). Pro kostar 9 800 SEK per månad (≈ 960 USD) med hanterad AI till självkostnad och 2 rådgivningstimmar. Venture-partnerskap är ägarandel enligt avtal. Priser exkl. moms; du debiteras i SEK." },
      { q: "Vilka AI-modeller använder TheCreator?", a: "Claude och ChatGPT. Med Flex hanteras de åt dig till kostnad + 20 %. Med Pro hanteras de till självkostnad, eller så använder du din egen AI-anslutning." },
      { q: "Används min data för att träna AI-modeller?", a: "Nej. TheCreator använder leverantörernas API:er, och data som skickas via dessa API:er används inte för att träna deras modeller." },
      { q: "Investerar Ravolution kontanter?", a: "Nej. Ravolution gör inga kontanta investeringar. I ett venture-partnerskap investerar Ravolution utveckling, produkt, IP och patent, varumärke och go-to-market mot ägarandel." },
      { q: "Hur använder investerare TheCreator?", a: "Investerare får verifierade framsteg från portföljbolag: milstolpar, beslut och datarumsmaterial med evidens i Trust Ledger, i stället för egenrapporterade uppdateringar." },
      { q: "Hur får jag tillgång?", a: "Ansök via Ravolutions ansökningssida. Tillgång sker på inbjudan: när din ansökan är godkänd får du en inbjudan och loggar in på thecreator.ravolution.se." },
    ],
    closingTitle: "Bygg företaget, inte AI-fakturan.",
    closingBody: "Ansök, få din inbjudan och driv hela företaget i ett system.",
  },
  es: {
    title: "TheCreator — Sistema operativo del fundador | Ravolution AB",
    description: "TheCreator, sistema operativo del fundador de Ravolution: consejo asesor de IA, sala de datos para inversores y desarrollo por participación. Desde 0 SEK.",
    eyebrow: "TheCreator · Project Intelligence by Ravolution",
    h1: "TheCreator — el sistema operativo del fundador",
    answer: "TheCreator es un sistema operativo para fundadores creado por Ravolution AB: un espacio de trabajo basado en evidencias para estrategia, producto, decisiones, crecimiento y captación de fondos, con un consejo asesor de IA y una sala de datos lista para inversores. Está pensado para fundadores en fase pre-semilla y semilla y sus inversores, y empieza en 0 SEK al mes con el plan Flex.",
    applyCta: "Solicita TheCreator",
    loginCta: "Inicia sesión en TheCreator →",
    breadcrumbHome: "Inicio",
    evidenceLabel: "Evidencia",
    evidenceTitle: "El Trust Ledger",
    evidenceBody: "Cada decisión, compromiso e hito se registra junto con la evidencia que lo respalda. Los fundadores ven lo que está realmente demostrado y los inversores ven progreso verificado en lugar de promesas en una diapositiva.",
    onboardingLabel: "Incorporación",
    onboardingTitle: "Empieza con lo que ya tienes",
    onboardingOptions: [
      { t: "Un repositorio git", d: "Los equipos técnicos conectan el código existente como punto de partida del espacio de trabajo." },
      { t: "Una presentación", d: "Los fundadores sin código parten de su presentación: problema, mercado y plan se convierten en las primeras hipótesis a validar." },
    ],
    whoLabel: "Para quién",
    whoTitle: "Hecho para fundadores — y los inversores que los respaldan",
    who: [
      { t: "Fundadores pre-semilla y semilla", d: "Un sistema desde la primera hipótesis hasta una empresa lista para inversores." },
      { t: "Fundadores no técnicos", d: "Estructura, especificación y consejo asesor de IA, con Ravolution como socio de desarrollo opcional." },
      { t: "Equipos técnicos que necesitan velocidad", d: "Convierte un repositorio existente en un plan guiado hacia hitos invertibles." },
      { t: "Inversores", d: "Progreso verificado de las empresas de su cartera, respaldado por el Trust Ledger." },
    ],
    faqLabel: "Preguntas",
    faqTitle: "Preguntas sobre TheCreator",
    faqs: [
      { q: "¿Qué es un sistema operativo del fundador?", a: "Un sistema operativo del fundador es un único espacio donde una startup gestiona estrategia, producto, decisiones, crecimiento y captación de fondos. TheCreator guía cada fase — Imagina, Valida, Construye, Lanza, Crece, Escala — con evidencias, con captación y protección de PI en paralelo." },
      { q: "¿En qué se diferencia TheCreator de Notion, Jira o ChatGPT?", a: "Notion guarda documentos, Jira sigue tareas y ChatGPT responde preguntas. TheCreator los conecta con el ciclo de vida de la empresa: decisiones y compromisos se registran con evidencias, un consejo asesor de IA revisa los planes y la sala de datos se mantiene al día mientras se construye la empresa." },
      { q: "¿Cuánto cuesta TheCreator?", a: "Flex no tiene mínimo mensual (0 SEK), con IA gestionada a coste + 20 % y asesoría prepagada a 2.300 SEK/h (≈ 225 USD). Pro cuesta 9.800 SEK al mes (≈ 960 USD) con IA gestionada a coste y 2 horas de asesoría incluidas. La asociación Venture es participación según acuerdo. Precios sin IVA; se cobra en SEK." },
      { q: "¿Qué modelos de IA usa TheCreator?", a: "Claude y ChatGPT. En Flex se gestionan por ti a coste + 20 %. En Pro se gestionan a coste, o puedes usar tu propia conexión de IA." },
      { q: "¿Se usan mis datos para entrenar modelos de IA?", a: "No. TheCreator usa las API de los proveedores, y los datos enviados a través de estas API no se usan para entrenar sus modelos." },
      { q: "¿Ravolution invierte efectivo?", a: "No. Ravolution no realiza inversiones en efectivo. En una asociación Venture, Ravolution invierte desarrollo, producto, PI y patentes, marca y salida al mercado a cambio de participación." },
      { q: "¿Cómo usan TheCreator los inversores?", a: "Los inversores reciben progreso verificado de las empresas de su cartera: hitos, decisiones y material de la sala de datos respaldados por evidencias en el Trust Ledger, en lugar de informes autodeclarados." },
      { q: "¿Cómo obtengo acceso?", a: "Solicítalo en la página de solicitud de Ravolution. El acceso es por invitación: cuando se aprueba tu solicitud recibes una invitación e inicias sesión en thecreator.ravolution.se." },
    ],
    closingTitle: "Construye la empresa, no la factura de IA.",
    closingBody: "Solicita, recibe tu invitación y gestiona toda la empresa en un solo sistema.",
  },
};

/** JSON-LD for the page. Every field mirrors visible page content. */
export const getTheCreatorJsonLd = (lang: ApplyLanguage) => {
  const c = theCreatorPageCopy[lang];
  const url = theCreatorUrl(lang);
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "TheCreator",
      description: c.answer,
      url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: lang,
      offers: [
        { "@type": "Offer", name: "Flex", price: "0", priceCurrency: "SEK" },
        {
          "@type": "Offer",
          name: "Pro",
          price: "9800",
          priceCurrency: "SEK",
          priceSpecification: { "@type": "UnitPriceSpecification", price: "9800", priceCurrency: "SEK", unitCode: "MON", unitText: "month" },
        },
      ],
      publisher: { "@type": "Organization", name: "Ravolution AB", url: "https://ravolution.se" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: c.breadcrumbHome, item: `https://ravolution.se/${lang}` },
        { "@type": "ListItem", position: 2, name: "TheCreator", item: url },
      ],
    },
  ];
};

export const getTheCreatorRouteHead = (lang: ApplyLanguage) => {
  const c = theCreatorPageCopy[lang];
  const url = theCreatorUrl(lang);
  return {
    meta: [
      { title: c.title },
      { name: "description", content: c.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:title", content: c.title },
      { property: "og:description", content: c.description },
      { property: "og:image", content: THECREATOR_OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: c.title },
      { name: "twitter:description", content: c.description },
      { name: "twitter:image", content: THECREATOR_OG_IMAGE },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
    ],
    links: [
      { rel: "canonical", href: url },
      ...THECREATOR_LANGS.map((l) => ({ rel: "alternate", hrefLang: l, href: theCreatorUrl(l) })),
      { rel: "alternate", hrefLang: "x-default", href: theCreatorUrl("en") },
    ],
    scripts: getTheCreatorJsonLd(lang).map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) })),
  };
};
