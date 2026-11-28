export const USD_SEK = 10.207;

export const approximateUsd = (sek: number) => Math.round(sek / USD_SEK);
export const formatApproxUsd = (sek: number) => `≈ $${approximateUsd(sek).toLocaleString("en-US")}`;

type EngagementModel = {
  name: string;
  price: string;
  unit?: string;
  usdSek?: number;
  lines: readonly string[];
  featured?: boolean;
};

type TheCreatorCopy = {
  eyebrow: string;
  heading: string;
  headingMuted: string;
  intro: string;
  lifecycleExhibit: string;
  lifecycleTitle: string;
  stages: readonly { n: string; t: string; d: string }[];
  parallelLabel: string;
  parallelRows: readonly { title: string; description: string }[];
  advisoryExhibit: string;
  advisoryTitle: string;
  advisoryTag: string;
  advisoryRoles: string;
  advisoryDescription: string;
  advisoryLine: string;
  engagementExhibit: string;
  engagementTitle: string;
  models: readonly EngagementModel[];
  footnote: string;
  legalLinks: readonly { label: string; href: string }[];
  applyCta: string;
  loginCta: string;
};

export const theCreatorApplyCopy: Record<"en" | "sv" | "es", TheCreatorCopy> = {
  en: {
    eyebrow: "TheCreator · The Founder Operating System",
    heading: "From idea to unicorn.",
    headingMuted: "One system for the whole venture.",
    intro: "Every founder who applies can run the venture on TheCreator: strategy, product development, decisions, growth and fundraising in one evidence-based workspace. Operate it yourself, or build together with Ravolution for equity.",
    lifecycleExhibit: "Exhibit 1",
    lifecycleTitle: "The venture lifecycle, gated by evidence",
    stages: [
      { n: "01", t: "Imagine", d: "Problem, market, hypotheses" },
      { n: "02", t: "Validate", d: "Interviews, demand, willingness to pay" },
      { n: "03", t: "Build", d: "Specification, UX, architecture, code" },
      { n: "04", t: "Launch", d: "Pricing, payments, sales, support" },
      { n: "05", t: "Grow", d: "Acquisition, retention, expansion" },
      { n: "06", t: "Scale", d: "Governance, compliance, profitability" },
    ],
    parallelLabel: "Parallel",
    parallelRows: [
      { title: "Raise", description: "Financial model, investor memorandum, pitch deck, data room and due diligence, maintained continuously." },
      { title: "Protect", description: "IP register, patent strategy and filings, maintained alongside the build — backed by Ravolution's 28 patents and 369 claims." },
    ],
    advisoryExhibit: "Exhibit 2",
    advisoryTitle: "AI advisory board",
    advisoryTag: "Rolling out in phases",
    advisoryRoles: "Product · Technology · Finance · Legal · Investor relations",
    advisoryDescription: "Specialist AI roles review plans, challenge assumptions and build skills over time. Every commitment is logged and checked against evidence.",
    advisoryLine: "TheCreator helps you build the company, not your AI bill.",
    engagementExhibit: "Exhibit 3",
    engagementTitle: "Engagement models",
    models: [
      { name: "Flex", price: "0 SEK", usdSek: 0, unit: "monthly minimum", lines: ["Managed Claude & ChatGPT, cost + 20%", "Start with a 1,000 SEK AI credit pack (≈ $98)", "Advisory 2,300 SEK/h (≈ $225), prepaid", "10 hours + 1 free: 23,000 SEK (≈ $2,253)"] },
      { name: "Pro", price: "9,800 SEK", usdSek: 9800, unit: "per month", featured: true, lines: ["Managed AI at cost, own AI connections", "2 advisory hours included monthly", "Additional advisory 1,500 SEK/h (≈ $147)", "10 hours + 1 free: 15,000 SEK (≈ $1,470)"] },
      { name: "Venture partnership", price: "Equity · by agreement", lines: ["Ravolution co-builds the venture for equity", "Patent strategy and filings for your inventions", "Individual approval by Ravolution", "Signed partnership agreement"] },
    ],
    footnote: "Prices exclude VAT. USD amounts are approximate (ECB rate 26 Nov 2026) — you are charged in SEK. Unused purchased advisory hours are refundable within 45 days; unused AI credit is refundable on request. Included advisory hours expire each billing period. Equity terms require individual approval and a signed agreement. AI advisory supports, and does not replace, qualified legal, financial or security professionals.",
    legalLinks: [
      { label: "Terms", href: "https://thecreator.ravolution.se/terms" },
      { label: "Refunds", href: "https://thecreator.ravolution.se/refunds" },
      { label: "Privacy", href: "https://thecreator.ravolution.se/privacy" },
    ],
    applyCta: "Apply for TheCreator",
    loginCta: "Log in to TheCreator →",
  },
  sv: {
    eyebrow: "TheCreator · Operativsystemet för grundare",
    heading: "Från idé till unicorn.",
    headingMuted: "Ett system för hela företaget.",
    intro: "Varje grundare som ansöker kan driva företaget i TheCreator: strategi, produktutveckling, beslut, tillväxt och kapitalanskaffning i en evidensbaserad arbetsyta. Driv det själv eller bygg tillsammans med Ravolution mot ägarandel.",
    lifecycleExhibit: "Del 1",
    lifecycleTitle: "Företagets livscykel, styrd av evidens",
    stages: [
      { n: "01", t: "Föreställ", d: "Problem, marknad, hypoteser" },
      { n: "02", t: "Validera", d: "Intervjuer, efterfrågan, betalningsvilja" },
      { n: "03", t: "Bygg", d: "Specifikation, UX, arkitektur, kod" },
      { n: "04", t: "Lansera", d: "Prissättning, betalningar, försäljning, support" },
      { n: "05", t: "Väx", d: "Kundanskaffning, retention, expansion" },
      { n: "06", t: "Skala", d: "Styrning, efterlevnad, lönsamhet" },
    ],
    parallelLabel: "Parallellt",
    parallelRows: [
      { title: "Kapitalanskaffning", description: "Finansiell modell, investerarmemorandum, pitchdeck, datarum och due diligence, kontinuerligt uppdaterade." },
      { title: "Skydda", description: "IP-register, patentstrategi och patentansökningar, underhållna parallellt med utvecklingen — med stöd av Ravolutions 28 patent och 369 patentkrav." },
    ],
    advisoryExhibit: "Del 2",
    advisoryTitle: "AI-rådgivningsgrupp",
    advisoryTag: "Rullas ut i etapper",
    advisoryRoles: "Produkt · Teknik · Ekonomi · Juridik · Investerarrelationer",
    advisoryDescription: "Specialiserade AI-roller granskar planer, ifrågasätter antaganden och utvecklar sina färdigheter över tid. Varje åtagande loggas och kontrolleras mot bevis.",
    advisoryLine: "TheCreator hjälper dig att bygga företaget, inte din AI-faktura.",
    engagementExhibit: "Del 3",
    engagementTitle: "Samarbetsmodeller",
    models: [
      { name: "Flex", price: "0 SEK", usdSek: 0, unit: "minimikostnad per månad", lines: ["Hanterade Claude och ChatGPT, kostnad + 20 %", "Börja med ett AI-kreditpaket på 1 000 SEK (≈ 98 USD)", "Rådgivning 2 300 SEK/h (≈ 225 USD), förskottsbetald", "10 timmar + 1 utan kostnad: 23 000 SEK (≈ 2 253 USD)"] },
      { name: "Pro", price: "9 800 SEK", usdSek: 9800, unit: "per månad", featured: true, lines: ["Hanterad AI till självkostnadspris, egna AI-anslutningar", "2 rådgivningstimmar ingår varje månad", "Ytterligare rådgivning 1 500 SEK/h (≈ 147 USD)", "10 timmar + 1 utan kostnad: 15 000 SEK (≈ 1 470 USD)"] },
      { name: "Venture-partnerskap", price: "Ägarandel · enligt avtal", lines: ["Ravolution medutvecklar företaget mot ägarandel", "Patentstrategi och patentansökningar för dina uppfinningar", "Individuellt godkännande av Ravolution", "Signerat partnerskapsavtal"] },
    ],
    footnote: "Priserna exkluderar moms. USD-beloppen är ungefärliga (ECB-kurs 26 november 2026) — du debiteras i SEK. Oanvända köpta rådgivningstimmar återbetalas inom 45 dagar; oanvänd AI-kredit återbetalas på begäran. Inkluderade rådgivningstimmar går ut vid varje faktureringsperiod. Villkor för ägarandel kräver individuellt godkännande och ett signerat avtal. AI-rådgivning stödjer, men ersätter inte, kvalificerade juridiska, finansiella eller säkerhetstekniska experter.",
    legalLinks: [
      { label: "Villkor", href: "https://thecreator.ravolution.se/terms" },
      { label: "Återbetalning", href: "https://thecreator.ravolution.se/refunds" },
      { label: "Integritet", href: "https://thecreator.ravolution.se/privacy" },
    ],
    applyCta: "Ansök till TheCreator",
    loginCta: "Logga in i TheCreator →",
  },
  es: {
    eyebrow: "TheCreator · El sistema operativo del fundador",
    heading: "De la idea al unicornio.",
    headingMuted: "Un sistema para toda la empresa.",
    intro: "Cada fundador que solicita puede gestionar su empresa en TheCreator: estrategia, desarrollo de producto, decisiones, crecimiento y captación de fondos en un espacio de trabajo basado en evidencias. Gestiónalo tú mismo o construye junto con Ravolution a cambio de participación.",
    lifecycleExhibit: "Anexo 1",
    lifecycleTitle: "El ciclo de vida de la empresa, guiado por evidencias",
    stages: [
      { n: "01", t: "Imagina", d: "Problema, mercado, hipótesis" },
      { n: "02", t: "Valida", d: "Entrevistas, demanda, disposición a pagar" },
      { n: "03", t: "Construye", d: "Especificación, UX, arquitectura, código" },
      { n: "04", t: "Lanza", d: "Precios, pagos, ventas, soporte" },
      { n: "05", t: "Crece", d: "Adquisición, retención, expansión" },
      { n: "06", t: "Escala", d: "Gobernanza, cumplimiento, rentabilidad" },
    ],
    parallelLabel: "En paralelo",
    parallelRows: [
      { title: "Captación", description: "Modelo financiero, memorando para inversores, presentación, sala de datos y due diligence, actualizados continuamente." },
      { title: "Protección", description: "Registro de PI, estrategia de patentes y solicitudes, mantenidos junto con el desarrollo — respaldados por las 28 patentes y 369 reivindicaciones de Ravolution." },
    ],
    advisoryExhibit: "Anexo 2",
    advisoryTitle: "Consejo asesor de IA",
    advisoryTag: "Despliegue por fases",
    advisoryRoles: "Producto · Tecnología · Finanzas · Legal · Relaciones con inversores",
    advisoryDescription: "Roles especializados de IA revisan los planes, cuestionan las hipótesis y desarrollan sus capacidades con el tiempo. Cada compromiso queda registrado y se comprueba contra evidencias.",
    advisoryLine: "TheCreator te ayuda a construir la empresa, no tu factura de IA.",
    engagementExhibit: "Anexo 3",
    engagementTitle: "Modelos de colaboración",
    models: [
      { name: "Flex", price: "0 SEK", usdSek: 0, unit: "mínimo mensual", lines: ["Claude y ChatGPT gestionados, coste + 20 %", "Comienza con un paquete de crédito de IA de 1.000 SEK (≈ 98 USD)", "Asesoría 2.300 SEK/h (≈ 225 USD), prepagada", "10 horas + 1 gratis: 23.000 SEK (≈ 2.253 USD)"] },
      { name: "Pro", price: "9.800 SEK", usdSek: 9800, unit: "al mes", featured: true, lines: ["IA gestionada a coste, conexiones de IA propias", "2 horas de asesoría incluidas al mes", "Asesoría adicional 1.500 SEK/h (≈ 147 USD)", "10 horas + 1 gratis: 15.000 SEK (≈ 1.470 USD)"] },
      { name: "Alianza empresarial", price: "Participación · según acuerdo", lines: ["Ravolution codesarrolla la empresa a cambio de participación", "Estrategia y solicitudes de patentes para tus invenciones", "Aprobación individual de Ravolution", "Acuerdo de colaboración firmado"] },
    ],
    footnote: "Los precios no incluyen IVA. Los importes en USD son aproximados (tipo del BCE del 26 de noviembre de 2026) — el cargo se realiza en SEK. Las horas de asesoría compradas y no utilizadas son reembolsables dentro de los 45 días; el crédito de IA no utilizado es reembolsable previa solicitud. Las horas de asesoría incluidas caducan en cada período de facturación. Las condiciones de participación requieren aprobación individual y un acuerdo firmado. La asesoría de IA apoya, y no sustituye, a profesionales cualificados en materia jurídica, financiera o de seguridad.",
    legalLinks: [
      { label: "Condiciones", href: "https://thecreator.ravolution.se/terms" },
      { label: "Reembolsos", href: "https://thecreator.ravolution.se/refunds" },
      { label: "Privacidad", href: "https://thecreator.ravolution.se/privacy" },
    ],
    applyCta: "Solicita TheCreator",
    loginCta: "Inicia sesión en TheCreator →",
  },
};
