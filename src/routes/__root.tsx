import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { HelmetProvider } from "@/lib/helmet-compat";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import MotionRoot from "@/components/motion/MotionRoot";
import { GtagPageView } from "@/components/GtagPageView";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const organizationJsonLd = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ravolution.se/#organization",
  "name": "Ravolution AB",
  "legalName": "Ravolution AB",
  "alternateName": "Ravolution",
  "url": "https://ravolution.se/",
  "logo": "https://ravolution.se/favicon.png",
  "image": "https://ravolution.se/og-image.jpg",
  "description": "Swedish invention company and angel investor that partners with early-stage deep-tech startups by building product, brand and go-to-market, refining the concept for future demand, and investing capital in exchange for cash and equity. 27 patents, 369 claims. Founded by inventor Ivan Daza.",
  "identifier": "556709-7547",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Ivan Daza",
    "jobTitle": "Founder & Tech Inventor",
    "sameAs": "https://linkedin.com/in/ivandaza"
  },
  "address": { "@type": "PostalAddress", "addressLocality": "Stockholm", "addressCountry": "SE" },
  "email": "ivan.daza@ravolution.se",
  "areaServed": "Worldwide",
  "sameAs": [
    "https://www.linkedin.com/company/ravolution",
    "https://www.crunchbase.com/organization/ravolution",
    "https://www.allabolag.se/5567097547"
  ],
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Venture partnership for early-stage startups",
      "serviceType": "Tech build, branding, go-to-market, concept refinement and capital in exchange for cash and equity",
      "provider": { "@type": "Organization", "name": "Ravolution AB" },
      "areaServed": "Worldwide",
      "audience": { "@type": "Audience", "audienceType": "Early-stage deep-tech startups and technical founders" },
      "url": "https://ravolution.se/en/partner"
    }
  },
  "brand": {
    "@type": "Brand",
    "name": "Ravolution",
    "logo": "https://ravolution.se/favicon.png",
    "slogan": "Not more apps. Better systems."
  },
  "knowsAbout": ["venture building","go-to-market strategy","brand strategy","patent strategy","deep tech","language learning","voice security","climate technology","health technology"]
}`;

const websiteJsonLd = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ravolution.se/#website",
  "name": "Ravolution",
  "url": "https://ravolution.se/",
  "publisher": { "@id": "https://ravolution.se/#organization" },
  "inLanguage": ["en","sv","es"]
}`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Ravolution AB | Swedish Invention Company" },
      {
        name: "description",
        content:
          "Ravolution AB is a Swedish invention company building the missing infrastructure for human progress: patented systems for learning, language, trust, opportunity, prevention and human capability.",
      },
      { name: "author", content: "Ravolution AB" },
      {
        name: "keywords",
        content:
          "venture studio, deep tech, patent portfolio, Swedish innovation, language learning AI, voice biometrics, education technology, climate technology, health technology, Ivan Daza, strategic IP",
      },
      { name: "theme-color", content: "#0F2747" },
      { name: "apple-mobile-web-app-title", content: "Ravolution" },
      { name: "application-name", content: "Ravolution" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ravolution.se/" },
      { property: "og:title", content: "Ravolution AB | Swedish Invention Company" },
      {
        property: "og:description",
        content:
          "Not more apps. Better systems. Ravolution AB invents patented infrastructure for learning, language, trust, opportunity, prevention and human capability.",
      },
      { property: "og:image", content: "https://ravolution.se/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Ravolution" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ravolution | Patented AI & Deep Tech Venture Studio" },
      {
        name: "twitter:description",
        content:
          "Swedish venture studio creating patented AI and deep-tech platforms for education, language learning, voice security, global trade, climate and health.",
      },
      { name: "twitter:image", content: "https://ravolution.se/og-image.jpg" },
      { name: "google-site-verification", content: "BeeUnb4Up6ljydW2DT6VNZuFv5RX0quHioFQwyl3v_Q" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "icon", type: "image/svg+xml", href: "/mark.svg" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter+Tight:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "canonical", href: "https://ravolution.se/" },
      { rel: "alternate", hrefLang: "en", href: "https://ravolution.se/en" },
      { rel: "alternate", hrefLang: "sv", href: "https://ravolution.se/sv" },
      { rel: "alternate", hrefLang: "es", href: "https://ravolution.se/es" },
      { rel: "alternate", hrefLang: "x-default", href: "https://ravolution.se/en" },
    ],
    scripts: [
      { type: "application/ld+json", children: organizationJsonLd },
      { type: "application/ld+json", children: websiteJsonLd },
      // GA4 — loads once for the whole app; page_view events are sent on every
      // route change via GtagPageView.tsx
      { src: "https://www.googletagmanager.com/gtag/js?id=G-H69GJNT0BV", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', 'G-H69GJNT0BV', { send_page_view: false });",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <GtagPageView />
            <ScrollToTop />
            <MotionRoot />
            <Outlet />
            <CookieConsent />
          </TooltipProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold">This page didn't load</h1>
        <p className="text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium"
            onClick={() => {
              void router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a
            href="/"
            className="px-4 py-2 border border-border text-sm font-medium text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
