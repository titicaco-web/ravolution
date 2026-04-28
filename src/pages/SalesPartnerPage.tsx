import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";
import { EditorialShell, Reveal, SectionLabel, CountUp } from "@/components/editorial/EditorialLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Lang = "sv" | "en" | "es";

const T = {
  sv: {
    metaTitle: "Säljpartner hos Ravolution AB — Sälj svenska SaaS-plattformar globalt",
    metaDesc: "Provisionsbaserat samarbete för erfarna B2B-säljare. Sälj Bizmeet, xPortMatch, iApply, CarbonX och fler — produktion, demoinstanser och säljkit på plats.",
    eyebrow: "Säljpartner-program",
    h1Pre: "Sälj plattformar som ",
    h1Em: "faktiskt finns",
    h1Post: ".",
    sub: "Ravolution AB bygger och driver svenska SaaS-plattformar i produktion — Bizmeet, xPortMatch, iApply, CommunicaringSchool, Rosetta Livingstone och CarbonX. Vi söker erfarna B2B-säljare som vill bygga en återkommande intäkt med en starkt motiverande ersättningsmodell.",
    ctaPrimary: "Ansök som säljpartner",
    ctaSecondary: "Maila Ivan direkt",
    cities: "Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich",
    kpis: [
      { n: 27, suffix: "", l: "Patent" },
      { n: 6, suffix: "", l: "Branscher i drift" },
      { n: 40, suffix: "+", l: "Marknader Bizmeet är byggt för" },
    ],
    sellTitle: "Det här säljer du.",
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
    bizTitle: "Bizmeet — din snabbaste väg till första provisionen.",
    bizSubtitle: "Live i produktion. Demonstrerbar idag.",
    bizBody: "Bizmeet är en white-label community- och matchningsplattform som förvandlar 40+ marknader, hundratals rådgivare och tusentals klientföretag till ett mätbart digitalt ekosystem. Lösningen drivs live på businesssweden.ravolution.se och i en svensk flaggskeppsinstans hos Convendum.",
    bizBullets: [
      "Avtalsvärde år 1: Tier 1-segment",
      "Säljcykel: 3–6 månader beroende på beslutsfattare",
      "Leverans: 60–90 dagar från signatur till live",
      "Tydlig revenue share-modell till kundens fördel på paid tiers",
    ],
    bizKitTitle: "Ditt kit för Bizmeet",
    bizKit: ["Demoinstans på businesssweden.ravolution.se", "Privat sandlåda du bokar med kund", "Fullständig pitch-PDF", "Invändningsbibliotek", "45-min månadssync med Ivan"],
    earnTitle: "Så tjänar du pengar.",
    earnSub: "En starkt motiverande ersättningsmodell",
    earnBody: "Vi har byggt en provisionsmodell som belönar både stängningen och den långsiktiga relationen. Ersättningen sträcker sig över setup, drift, revenue share och tilläggsutveckling — så att en bra första affär växer till en återkommande intäkt över flera år. Exakta nivåer går vi igenom i introsamtalet.",
    earnPillars: [
      { title: "Setup-fee", desc: "Engångsersättning vid signerat avtal." },
      { title: "Drift & utveckling", desc: "Återkommande andel under hela kundens livstid." },
      { title: "Revenue share", desc: "Andel av kundens betalda nivåer i flera år." },
      { title: "Tilläggsutveckling", desc: "Provision på integrationer och anpassningar." },
    ],
    whoTitle: "Vem vi söker.",
    personas: [
      { title: "Den erfarna B2B-säljaren", body: "5+ år av att stänga SaaS- eller konsulttjänster i 0,5–5 MSEK-segmentet. Du jobbar gärna självständigt med tydliga mål." },
      { title: "Den nordiska networkern", body: "Befintligt nätverk inom branschorganisationer, exportbyråer, coworking eller offentlig sektor i Sverige eller Norden." },
      { title: "Den specialiserade konsulten", body: "Du jobbar redan på provision eller F-skatt och vill addera en SaaS-portfölj till din befintliga praktik utan exklusivitet." },
    ],
    getTitle: "Vad du får från oss.",
    getList: [
      "Egen e-post fornamn.efternamn@ravolution.se efter signerat avtal",
      "Demoinstans + privat sandlåda",
      "Pipeline (HubSpot eller Notion) med full provisionstransparens",
      "NDA-mall och avtalsutkast",
      "Säljkit, invändningsbibliotek, prislistor",
      "Månadssync 45 min för coachning och eskaleringar",
      "Tydligt provisionsavtal med juridisk klarhet kring IP, GDPR och uppsägning",
    ],
    processTitle: "Så här går det till.",
    steps: [
      { t: "Ansök", d: "Fyll i formuläret nedan" },
      { t: "Introsamtal", d: "30 min med Ivan inom 5 arbetsdagar" },
      { t: "Match-check", d: "Vi går igenom ICP, nätverk och tidigare resultat" },
      { t: "Avtal", d: "Provisionsavtal signeras digitalt" },
      { t: "Onboarding", d: "Demo, säljkit, pipeline, e-post — samma dag" },
      { t: "Första 90 dagar", d: "Mål: 1 stängd Bizmeet-affär eller 3 kvalificerade demos" },
      { t: "Skala", d: "Lägg till fler plattformar i din portfölj" },
    ],
    faqTitle: "Vanliga frågor.",
    faq: [
      { q: "Är detta en anställning?", a: "Nej. Det är ett provisionsbaserat samarbetsavtal. Du fakturerar Ravolution med F-skatt eller motsvarande. Du behåller din frihet." },
      { q: "Är det exklusivt?", a: "Nej. Du får sälja kompletterande tjänster i andra vertikaler parallellt, så länge du inte säljer direkt konkurrerande plattformar inom samma ICP." },
      { q: "Vad händer om kunden churnar?", a: "Setup-provisionen behåller du. Drift- och revenue-share-provisionen följer kundens livslängd." },
      { q: "Hur snabbt får jag betalt?", a: "Provision utbetalas månatligen i efterskott senast den 25:e i månaden efter den månad då Ravolution mottagit kundbetalning." },
      { q: "Får jag använda Ravolutions varumärke?", a: "Ja, inom ramarna i provisionsavtalet — säljkit, demoinstanser, e-post och officiella mallar. Egenproducerat marknadsmaterial ska godkännas innan publicering." },
    ],
    formTitle: "Ansök som säljpartner.",
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
    h1Post: ".",
    sub: "Ravolution AB builds and operates production-grade SaaS platforms — Bizmeet, xPortMatch, iApply, CommunicaringSchool, Rosetta Livingstone and CarbonX. We are recruiting experienced B2B salespeople worldwide to build recurring revenue under a strongly motivating compensation model.",
    ctaPrimary: "Apply as sales partner",
    ctaSecondary: "Email Ivan directly",
    cities: "Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich",
    kpis: [
      { n: 27, suffix: "", l: "Patents" },
      { n: 6, suffix: "", l: "Industries in production" },
      { n: 40, suffix: "+", l: "Markets Bizmeet is engineered for" },
    ],
    sellTitle: "What you get to sell.",
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
    bizTitle: "Bizmeet — your fastest path to a first close.",
    bizSubtitle: "Live in production. Demonstrable today.",
    bizBody: "Bizmeet is a white-label community and matching platform that turns 40+ markets, hundreds of advisors and thousands of client companies into a measurable digital ecosystem. The solution runs live at businesssweden.ravolution.se and at a Swedish flagship instance with Convendum.",
    bizBullets: [
      "Year-1 contract value: Tier 1 segment",
      "Sales cycle: 3–6 months depending on decision-maker",
      "Delivery: 60–90 days from signature to live",
      "Clear revenue share model favoring the customer on paid tiers",
    ],
    bizKitTitle: "Your Bizmeet kit",
    bizKit: ["Demo instance at businesssweden.ravolution.se", "Private sandbox you book with the customer", "Full pitch PDF", "Objection handling library", "45-min monthly sync with Ivan"],
    earnTitle: "How you get paid.",
    earnSub: "A strongly motivating compensation model",
    earnBody: "We have built a commission model that rewards both the close and the long-term relationship. Compensation spans setup, operations, revenue share and add-on development — so a strong first deal grows into recurring income over years. We walk you through exact levels in the intro call.",
    earnPillars: [
      { title: "Setup fee", desc: "One-time payout on signed contract." },
      { title: "Operations & development", desc: "Recurring share for the customer's full lifetime." },
      { title: "Revenue share", desc: "Share of the customer's paid tiers across multiple years." },
      { title: "Add-on development", desc: "Commission on integrations and customizations." },
    ],
    whoTitle: "Who we're looking for.",
    personas: [
      { title: "The experienced B2B closer", body: "5+ years of closing SaaS or consulting deals in the EUR 50k–500k segment. You work independently with clear targets." },
      { title: "The connected networker", body: "Existing network in trade associations, export agencies, coworking, or public sector — anywhere in your region." },
      { title: "The specialized consultant", body: "You already invoice on commission and want to add a SaaS portfolio to your existing practice without exclusivity." },
    ],
    getTitle: "What you get from us.",
    getList: [
      "Your own email firstname.lastname@ravolution.se after signature",
      "Demo instance + private sandbox",
      "Pipeline (HubSpot or Notion) with full commission transparency",
      "NDA template and contract draft",
      "Sales kit, objection library, price lists",
      "Monthly 45-min sync for coaching and escalations",
      "Clear commission contract with legal clarity on IP, GDPR and termination",
    ],
    processTitle: "How it works.",
    steps: [
      { t: "Apply", d: "Fill in the form below" },
      { t: "Intro call", d: "30 min with Ivan within 5 business days" },
      { t: "Match check", d: "We review ICP, network and past results" },
      { t: "Contract", d: "Commission contract signed digitally" },
      { t: "Onboarding", d: "Demo, sales kit, pipeline, email — same day" },
      { t: "First 90 days", d: "Goal: 1 closed Bizmeet deal or 3 qualified demos" },
      { t: "Scale", d: "Add more platforms to your portfolio" },
    ],
    faqTitle: "Frequently asked questions.",
    faq: [
      { q: "Is this employment?", a: "No. It's a commission-based partnership. You invoice Ravolution as a self-employed professional or via your company. You keep your independence." },
      { q: "Is it exclusive?", a: "No. You can sell complementary services in other verticals in parallel, as long as you don't sell directly competing platforms in the same ICP." },
      { q: "What happens if the customer churns?", a: "You keep the setup commission. Operations and revenue share commissions follow the customer's lifetime." },
      { q: "How fast do I get paid?", a: "Commission is paid monthly in arrears, by the 25th of the month following the month Ravolution received customer payment." },
      { q: "Can I use the Ravolution brand?", a: "Yes, within the limits of the commission contract — sales kit, demo instances, email and official templates. Self-produced marketing materials require approval before publishing." },
    ],
    formTitle: "Apply as sales partner.",
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
    },
    industriesOptions: ["Export & internationalization", "Trade associations", "Coworking & business clubs", "Universities & alumni", "Logistics & ports", "K-12 Education", "Sustainability & ESG", "Other"],
    startOptions: ["Immediately", "Within 1 month", "Within 3 months", "Just exploring"],
    footerCta: "Not ready to apply yet? Email Ivan directly at ",
  },
  es: {
    metaTitle: "Socio Comercial en Ravolution AB — Vende SaaS suecas globalmente",
    metaDesc: "Asociación basada en comisiones para vendedores B2B experimentados. Vende Bizmeet, xPortMatch, iApply, CarbonX y más — plataformas en producción, instancias demo y kit de ventas completo.",
    eyebrow: "Programa de Socios Comerciales",
    h1Pre: "Vende plataformas que ",
    h1Em: "realmente existen",
    h1Post: ".",
    sub: "Ravolution AB construye y opera plataformas SaaS suecas en producción — Bizmeet, xPortMatch, iApply, CommunicaringSchool, Rosetta Livingstone y CarbonX. Buscamos vendedores B2B experimentados a nivel mundial para construir ingresos recurrentes con un modelo de compensación fuertemente motivador.",
    ctaPrimary: "Postular como socio",
    ctaSecondary: "Escribir a Ivan",
    cities: "Stockholm · New York · Barcelona · Shanghai · Santiago · Zürich",
    kpis: [
      { n: 27, suffix: "", l: "Patentes" },
      { n: 6, suffix: "", l: "Industrias en producción" },
      { n: 40, suffix: "+", l: "Mercados para los que Bizmeet está diseñado" },
    ],
    sellTitle: "Esto es lo que vendes.",
    sellIntro: "Ravolution posee y opera cada plataforma. Tú te enfocas en el cliente correcto y cierras el trato — nosotros entregamos y operamos.",
    platforms: [
      { name: "Bizmeet™", star: true, what: "Comunidad B2B, matching con IA, eventos y leads. White-label.", who: "Agencias de exportación, gremios, business clubs" },
      { name: "xPortMatch™", what: "Matching de puertos y logística.", who: "Puertos, transitarios, regiones exportadoras" },
      { name: "iApply™", what: "Matching de candidatos con IA.", who: "Universidades, regiones, agencias de empleo" },
      { name: "Rosetta Livingstone™", what: "Plataforma de idiomas y cultura.", who: "Municipalidades, programas de integración, multinacionales" },
      { name: "CommunicaringSchool™", what: "Plataforma escolar con comunicación asistida por IA.", who: "Colegios, grupos educativos, municipalidades" },
      { name: "CarbonX™", what: "Comercio verificado de créditos de carbono (Gold Standard / Verra).", who: "Industria, inmobiliarias, sector financiero" },
    ],
    starNote: "★ = Prioridad principal ahora mismo",
    bizTitle: "Bizmeet — tu camino más rápido al primer cierre.",
    bizSubtitle: "En producción. Demostrable hoy.",
    bizBody: "Bizmeet es una plataforma white-label de comunidad y matching que convierte 40+ mercados, cientos de asesores y miles de empresas cliente en un ecosistema digital medible. La solución funciona en vivo en businesssweden.ravolution.se y en una instancia insignia sueca en Convendum.",
    bizBullets: [
      "Valor de contrato año 1: segmento Tier 1",
      "Ciclo de venta: 3–6 meses según decisor",
      "Entrega: 60–90 días desde firma hasta vivo",
      "Modelo claro de revenue share favoreciendo al cliente en tiers pagos",
    ],
    bizKitTitle: "Tu kit Bizmeet",
    bizKit: ["Instancia demo en businesssweden.ravolution.se", "Sandbox privado para reservar con el cliente", "PDF de pitch completo", "Biblioteca de manejo de objeciones", "Sync mensual de 45 min con Ivan"],
    earnTitle: "Cómo te pagan.",
    earnSub: "Un modelo de compensación fuertemente motivador",
    earnBody: "Hemos construido un modelo de comisiones que recompensa tanto el cierre como la relación a largo plazo. La compensación cubre setup, operaciones, revenue share y desarrollo adicional — para que un buen primer trato crezca en ingresos recurrentes durante años. Los niveles exactos se revisan en la llamada inicial.",
    earnPillars: [
      { title: "Tarifa de setup", desc: "Pago único al firmar el contrato." },
      { title: "Operaciones y desarrollo", desc: "Cuota recurrente durante toda la vida del cliente." },
      { title: "Revenue share", desc: "Porcentaje de los tiers pagos del cliente durante años." },
      { title: "Desarrollo adicional", desc: "Comisión sobre integraciones y personalizaciones." },
    ],
    whoTitle: "A quién buscamos.",
    personas: [
      { title: "El cerrador B2B experimentado", body: "5+ años cerrando SaaS o consultoría en el segmento EUR 50k–500k. Trabajas de forma independiente con objetivos claros." },
      { title: "El networker conectado", body: "Red existente en gremios, agencias de exportación, coworking o sector público — en tu región." },
      { title: "El consultor especializado", body: "Ya facturas por comisión y quieres añadir un portafolio SaaS a tu práctica actual sin exclusividad." },
    ],
    getTitle: "Lo que recibes de nosotros.",
    getList: [
      "Tu propio email nombre.apellido@ravolution.se tras la firma",
      "Instancia demo + sandbox privado",
      "Pipeline (HubSpot o Notion) con transparencia total de comisiones",
      "Plantilla de NDA y borrador de contrato",
      "Kit de ventas, biblioteca de objeciones, listas de precios",
      "Sync mensual de 45 min para coaching y escalaciones",
      "Contrato claro con claridad legal sobre IP, GDPR y terminación",
    ],
    processTitle: "Cómo funciona.",
    steps: [
      { t: "Postular", d: "Completa el formulario abajo" },
      { t: "Llamada intro", d: "30 min con Ivan en 5 días hábiles" },
      { t: "Match check", d: "Revisamos ICP, red y resultados pasados" },
      { t: "Contrato", d: "Contrato de comisión firmado digitalmente" },
      { t: "Onboarding", d: "Demo, kit, pipeline, email — el mismo día" },
      { t: "Primeros 90 días", d: "Meta: 1 cierre Bizmeet o 3 demos cualificadas" },
      { t: "Escalar", d: "Añade más plataformas a tu portafolio" },
    ],
    faqTitle: "Preguntas frecuentes.",
    faq: [
      { q: "¿Es un empleo?", a: "No. Es una asociación basada en comisiones. Facturas a Ravolution como profesional autónomo o vía tu empresa. Mantienes tu independencia." },
      { q: "¿Es exclusivo?", a: "No. Puedes vender servicios complementarios en otras verticales en paralelo, mientras no vendas plataformas directamente competidoras en el mismo ICP." },
      { q: "¿Qué pasa si el cliente abandona?", a: "Conservas la comisión de setup. Las comisiones de operaciones y revenue share siguen la vida del cliente." },
      { q: "¿Qué tan rápido cobro?", a: "La comisión se paga mensualmente en mora, antes del día 25 del mes siguiente al mes en que Ravolution recibió el pago del cliente." },
      { q: "¿Puedo usar la marca Ravolution?", a: "Sí, dentro de los límites del contrato — kit de ventas, instancias demo, email y plantillas oficiales. Los materiales propios requieren aprobación antes de publicar." },
    ],
    formTitle: "Postular como socio comercial.",
    formSub: "Leemos cada postulación personalmente y respondemos en 5 días hábiles.",
    f: {
      firstName: "Nombre", lastName: "Apellido", email: "Email", phone: "Teléfono",
      city: "Ciudad", linkedin: "Perfil de LinkedIn (URL)", company: "Empresa (si facturas vía empresa)",
      orgNumber: "RUT / NIF / Tax ID", industries: "Foco de industria (selecciona todas las que apliquen)",
      primaryPlatform: "Plataforma que más te interesa vender",
      pastDeal: "Cuéntanos un trato cerrado de EUR 50k+ (mín 200 caracteres)",
      network: "Red existente relevante para las plataformas de Ravolution (opcional)",
      startDate: "¿Cuándo puedes empezar?",
      source: "¿Cómo supiste de Ravolution? (opcional)",
      consent: "Consiento que Ravolution AB procese mis datos personales según nuestra política de privacidad para evaluar mi postulación.",
      submit: "Enviar postulación",
      sending: "Enviando…",
      success: "Gracias — te contactaremos en 5 días hábiles. Ivan lee personalmente cada postulación.",
      error: "No se pudo enviar. Escribe directamente a ivan.daza@ravolution.se.",
    },
    industriesOptions: ["Exportación e internacionalización", "Gremios y asociaciones", "Coworking y business clubs", "Universidades y alumni", "Logística y puertos", "Educación K-12", "Sostenibilidad y ESG", "Otro"],
    startOptions: ["Inmediatamente", "En 1 mes", "En 3 meses", "Solo explorando"],
    footerCta: "¿No estás listo para postular? Escribe a Ivan directamente a ",
  },
} as const;

const platformOptions = ["Bizmeet", "xPortMatch", "iApply", "Rosetta Livingstone", "CommunicaringSchool", "CarbonX", "Several"];

/* Editorial-style underlined input */
const Field = ({
  label, value, onChange, type = "text", required = false, placeholder,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string }) => (
  <label className="block">
    <span className="block edit-label text-white/45 mb-3">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
    />
  </label>
);

const SalesPartnerPage = () => {
  const { language } = useLanguage();
  const lang: Lang = language === "sv" ? "sv" : language === "es" ? "es" : "en";
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
      toast.error(lang === "sv" ? "Samtycke krävs." : lang === "es" ? "Consentimiento requerido." : "Consent required.");
      return;
    }
    if (form.pastDeal.length < 200) {
      toast.error(lang === "sv" ? "Skriv minst 200 tecken om en tidigare deal." : lang === "es" ? "Escribe al menos 200 caracteres sobre un trato pasado." : "Please write at least 200 characters about a past deal.");
      return;
    }
    if (form.industries.length === 0) {
      toast.error(lang === "sv" ? "Välj minst ett branschfokus." : lang === "es" ? "Selecciona al menos una industria." : "Select at least one industry.");
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

  const canonical =
    lang === "sv" ? "https://ravolution.se/sv/saljpartner"
    : lang === "es" ? "https://ravolution.se/es/socio-comercial"
    : "https://ravolution.se/en/sales-partner";

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDesc} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="sv-SE" href="https://ravolution.se/sv/saljpartner" />
        <link rel="alternate" hrefLang="en" href="https://ravolution.se/en/sales-partner" />
        <link rel="alternate" hrefLang="es" href="https://ravolution.se/es/socio-comercial" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:type" content="website" />
      </Helmet>

      <EditorialShell>
        {/* HERO */}
        <section className="pt-40 pb-20 px-6 md:px-12">
          <div className="edit-container">
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">{t.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1
                className="mt-8 font-display font-bold text-white uppercase tracking-[-0.04em] leading-[0.95]"
                style={{ fontSize: "clamp(2.75rem, 7vw, 6.5rem)" }}
              >
                {t.h1Pre}
                <em className="not-italic text-[hsl(var(--accent-edit))]">{t.h1Em}</em>
                {t.h1Post}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 text-lg md:text-2xl text-white/75 max-w-3xl font-display leading-snug">
                {t.sub}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-6 items-center">
                <a href="#apply" className="edit-btn">
                  <span>{t.ctaPrimary}</span>
                </a>
                <a
                  href="mailto:ivan.daza@ravolution.se"
                  className="edit-label text-white/80 hover:text-white edit-link"
                >
                  {t.ctaSecondary} →
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-16 pt-6 border-t border-white/10">
                <span className="edit-label text-white/55">{t.cities}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* KPI ROW */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {t.kpis.map((k, i) => (
                <Reveal key={k.l} delay={i * 0.1}>
                  <CountUp end={k.n} suffix={k.suffix} className="font-display text-7xl md:text-8xl font-bold text-white tracking-tighter leading-none" />
                  <div className="mt-4 edit-label text-white/55">{k.l}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU SELL */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="01 — Portfolio" title={t.sellTitle} />
            <Reveal>
              <p className="text-xl md:text-2xl text-white/80 font-display max-w-3xl leading-snug">{t.sellIntro}</p>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {t.platforms.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.05} className="bg-[hsl(var(--bg))] p-8 hover:bg-white/[0.03] transition-colors">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                    {("star" in p && p.star) && <span className="text-[hsl(var(--accent-edit))] text-sm">★</span>}
                  </div>
                  <p className="mt-4 text-white/75 leading-relaxed">{p.what}</p>
                  <p className="mt-6 edit-label text-white/45">{p.who}</p>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 edit-label text-white/45">{t.starNote}</p>
          </div>
        </section>

        {/* BIZMEET FOCUS */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="02 — Flagship" title={t.bizTitle} />
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <Reveal className="md:col-span-7">
                <p className="text-2xl text-white/85 font-display leading-snug">{t.bizSubtitle}</p>
                <p className="mt-8 text-white/70 leading-relaxed text-lg">{t.bizBody}</p>
                <ul className="mt-10 space-y-4 border-t border-white/10 pt-8">
                  {t.bizBullets.map((b) => (
                    <li key={b} className="flex gap-4 text-white/85">
                      <span className="edit-label text-[hsl(var(--accent-edit))] mt-1">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://businesssweden.ravolution.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-block edit-label text-[hsl(var(--accent-edit))] edit-link"
                >
                  businesssweden.ravolution.se ↗
                </a>
              </Reveal>

              <Reveal className="md:col-span-5" delay={0.15}>
                <div className="border border-white/10 p-8 md:p-10">
                  <span className="edit-label text-white/45">Kit</span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">{t.bizKitTitle}</h3>
                  <ul className="mt-8 space-y-5">
                    {t.bizKit.map((k) => (
                      <li key={k} className="flex gap-3 text-white/80 text-sm border-b border-white/10 pb-4 last:border-0">
                        <span className="edit-label text-[hsl(var(--accent-edit))]">·</span>
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HOW YOU GET PAID */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="03 — Compensation" title={t.earnTitle} />
            <Reveal>
              <span className="edit-label text-[hsl(var(--accent-edit))]">{t.earnSub}</span>
              <p className="mt-6 text-white/75 text-lg max-w-3xl leading-relaxed">{t.earnBody}</p>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {t.earnPillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} className="bg-[hsl(var(--bg))] p-8">
                  <div className="edit-label text-white/40">0{i + 1}</div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-4 text-white/65 text-sm leading-relaxed">{p.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE SEEK */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="04 — Profile" title={t.whoTitle} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {t.personas.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08} className="bg-[hsl(var(--bg))] p-8">
                  <div className="w-10 h-px bg-[hsl(var(--accent-edit))]" />
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-4 text-white/70 leading-relaxed text-sm">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="05 — Toolkit" title={t.getTitle} />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {t.getList.map((g, i) => (
                <Reveal key={g} delay={i * 0.04} as="li" className="flex gap-4 text-white/85 border-b border-white/10 py-5">
                  <span className="edit-label text-[hsl(var(--accent-edit))] shrink-0">0{i + 1}</span>
                  <span>{g}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="06 — Process" title={t.processTitle} />
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {t.steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.05} as="li" className="bg-[hsl(var(--bg))] p-7">
                  <div className="font-display text-4xl font-bold text-[hsl(var(--accent-edit))] tracking-tighter">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{s.t}</h3>
                  <p className="mt-2 text-white/65 text-sm leading-relaxed">{s.d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container max-w-3xl">
            <SectionLabel number="07 — FAQ" title={t.faqTitle} />
            <Reveal>
              <Accordion type="single" collapsible>
                {t.faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                    <AccordionTrigger className="text-white text-left font-display text-lg hover:text-[hsl(var(--accent-edit))] hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed text-base">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* APPLICATION FORM */}
        <section id="apply" className="edit-section border-t border-white/10">
          <div className="edit-container">
            <SectionLabel number="08 — Apply" title={t.formTitle} />
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <Reveal className="md:col-span-5">
                <p className="text-xl md:text-2xl text-white/80 font-display leading-snug">{t.formSub}</p>
                <div className="mt-12 space-y-6 border-t border-white/10 pt-8">
                  <div>
                    <span className="edit-label text-white/45">Direct line</span>
                    <a href="mailto:ivan.daza@ravolution.se" className="block mt-2 text-lg text-white/85 font-display edit-link">
                      ivan.daza@ravolution.se
                    </a>
                  </div>
                  <div>
                    <span className="edit-label text-white/45">Established in</span>
                    <p className="text-sm text-white/70 mt-2">{t.cities}</p>
                  </div>
                </div>
              </Reveal>

              <div className="md:col-span-7">
                {sent ? (
                  <Reveal>
                    <div className="border border-white/10 p-12">
                      <span className="edit-label text-[hsl(var(--accent-edit))]">✓ Sent</span>
                      <h3 className="edit-h2 text-white mt-4">Application received.</h3>
                      <p className="text-white/70 mt-4 leading-relaxed">{t.f.success}</p>
                    </div>
                  </Reveal>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <Field label={`01 / ${t.f.firstName}`} value={form.firstName} onChange={(v) => update("firstName", v)} required />
                      <Field label={`02 / ${t.f.lastName}`} value={form.lastName} onChange={(v) => update("lastName", v)} required />
                      <Field label={`03 / ${t.f.email}`} type="email" value={form.email} onChange={(v) => update("email", v)} required />
                      <Field label={`04 / ${t.f.phone}`} type="tel" value={form.phone} onChange={(v) => update("phone", v)} required />
                      <Field label={`05 / ${t.f.city}`} value={form.city} onChange={(v) => update("city", v)} required />
                      <Field label={`06 / ${t.f.linkedin}`} type="url" value={form.linkedin} onChange={(v) => update("linkedin", v)} required placeholder="https://linkedin.com/in/…" />
                      <Field label={`07 / ${t.f.company}`} value={form.company} onChange={(v) => update("company", v)} />
                      <Field label={`08 / ${t.f.orgNumber}`} value={form.orgNumber} onChange={(v) => update("orgNumber", v)} />
                    </div>

                    <div>
                      <span className="block edit-label text-white/45 mb-4">09 / {t.f.industries}</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {t.industriesOptions.map((opt) => {
                          const active = form.industries.includes(opt);
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => toggleIndustry(opt)}
                              className={`text-left border px-4 py-3 text-sm transition-colors ${
                                active
                                  ? "bg-white text-black border-white"
                                  : "border-white/20 text-white/75 hover:border-white/50"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <span className="block edit-label text-white/45 mb-4">10 / {t.f.primaryPlatform}</span>
                      <div className="flex flex-wrap gap-3">
                        {platformOptions.map((p) => {
                          const active = form.primaryPlatform === p;
                          return (
                            <button
                              type="button"
                              key={p}
                              onClick={() => update("primaryPlatform", p)}
                              className={`border px-4 py-2 text-sm transition-colors ${
                                active
                                  ? "bg-[hsl(var(--accent-edit))] text-black border-[hsl(var(--accent-edit))]"
                                  : "border-white/20 text-white/75 hover:border-white/50"
                              }`}
                            >
                              {p}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <label className="block">
                      <span className="block edit-label text-white/45 mb-3">11 / {t.f.pastDeal}</span>
                      <textarea
                        rows={5}
                        required
                        minLength={200}
                        value={form.pastDeal}
                        onChange={(e) => update("pastDeal", e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors resize-none"
                      />
                      <p className="mt-2 edit-label text-white/40">{form.pastDeal.length} / 200+</p>
                    </label>

                    <label className="block">
                      <span className="block edit-label text-white/45 mb-3">12 / {t.f.network}</span>
                      <textarea
                        rows={3}
                        maxLength={1000}
                        value={form.network}
                        onChange={(e) => update("network", e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors resize-none"
                      />
                    </label>

                    <div className="grid md:grid-cols-2 gap-8">
                      <label className="block">
                        <span className="block edit-label text-white/45 mb-3">13 / {t.f.startDate}</span>
                        <select
                          required
                          value={form.startDate}
                          onChange={(e) => update("startDate", e.target.value)}
                          className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white text-base md:text-lg focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                        >
                          {t.startOptions.map((o) => <option key={o} value={o} className="bg-[hsl(var(--bg))] text-white">{o}</option>)}
                        </select>
                      </label>
                      <Field label={`14 / ${t.f.source}`} value={form.source} onChange={(v) => update("source", v)} />
                    </div>

                    <label className="flex items-start gap-3 text-white/70 text-sm cursor-pointer pt-4 border-t border-white/10">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="mt-1 accent-[hsl(var(--accent-edit))]"
                      />
                      <span>{t.f.consent}</span>
                    </label>

                    <button type="submit" disabled={loading} className="edit-btn" aria-busy={loading}>
                      <span>{loading ? t.f.sending : t.f.submit}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="edit-section border-t border-white/10">
          <div className="edit-container text-center">
            <p className="text-white/75 text-lg">
              {t.footerCta}
              <a href="mailto:ivan.daza@ravolution.se" className="text-[hsl(var(--accent-edit))] edit-link">
                ivan.daza@ravolution.se
              </a>
            </p>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default SalesPartnerPage;
