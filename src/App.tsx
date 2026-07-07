import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageRedirect from "./components/LanguageRedirect";
import LanguageSync from "./components/LanguageSync";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import MotionRoot from "./components/motion/MotionRoot";
import { GtagPageView } from "./components/GtagPageView";

// Route-level code splitting: each page is fetched on demand,
// dropping initial JS by ~1MB.
const Index = lazy(() => import("./pages/Index"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Founder = lazy(() => import("./pages/Founder"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BriefPage = lazy(() => import("./pages/BriefPage"));
const ConfigurePage = lazy(() => import("./pages/ConfigurePage"));
const BlogPodcast = lazy(() => import("./pages/BlogPodcast"));
const InvestPage = lazy(() => import("./pages/InvestPage"));
const AngelInvestor = lazy(() => import("./pages/AngelInvestor"));
const BuildForEquity = lazy(() => import("./pages/BuildForEquity"));
const PatentStrategyForStartups = lazy(() => import("./pages/PatentStrategyForStartups"));
const TechnicalCofounderAlternative = lazy(() => import("./pages/TechnicalCofounderAlternative"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SalesPartnerPage = lazy(() => import("./pages/SalesPartnerPage"));
const MetadataMachinePage = lazy(() => import("./pages/MetadataMachinePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Gyrocraft Pages
const GyrocraftHome = lazy(() => import("./pages/gyrocraft/GyrocraftHome"));
const GyrocraftLicensing = lazy(() => import("./pages/gyrocraft/GyrocraftLicensing"));
const GyrocraftInvestors = lazy(() => import("./pages/gyrocraft/GyrocraftInvestors"));
const GyrocraftAcquisition = lazy(() => import("./pages/gyrocraft/GyrocraftAcquisition"));
const GyrocraftAbout = lazy(() => import("./pages/gyrocraft/GyrocraftAbout"));
import GyrocraftPasswordGate from "./components/gyrocraft/GyrocraftPasswordGate";

const queryClient = new QueryClient();

// Protected Gyrocraft Route wrapper
const ProtectedGyrocraftRoute = ({ children }: { children: React.ReactNode }) => (
  <GyrocraftPasswordGate>{children}</GyrocraftPasswordGate>
);

const RouteFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" aria-label="Loading" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GtagPageView />
        <ScrollToTop />
        <MotionRoot />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* Root redirects to /:lang */}
            <Route path="/" element={<LanguageRedirect />} />

            {/* Standalone tool — no language prefix (SEO-shareable single URL) */}
            <Route path="/metadatamachine" element={<LanguageSync><MetadataMachinePage /></LanguageSync>} />
            <Route path="/:lang/metadatamachine" element={<LanguageSync><MetadataMachinePage /></LanguageSync>} />

            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LanguageSync><Index /></LanguageSync>} />
            <Route path="/:lang/privacy-policy" element={<LanguageSync><PrivacyPolicy /></LanguageSync>} />
            <Route path="/:lang/terms-of-service" element={<LanguageSync><TermsOfService /></LanguageSync>} />
            <Route path="/:lang/about" element={<LanguageSync><Founder /></LanguageSync>} />
            <Route path="/:lang/services" element={<LanguageSync><ServicesPage /></LanguageSync>} />
            <Route path="/sv/tjanster" element={<LanguageSync><ServicesPage /></LanguageSync>} />
            <Route path="/es/servicios" element={<LanguageSync><ServicesPage /></LanguageSync>} />
            <Route path="/:lang/brief" element={<LanguageSync><BriefPage /></LanguageSync>} />
            <Route path="/:lang/configure" element={<LanguageSync><ConfigurePage /></LanguageSync>} />
            <Route path="/:lang/blog" element={<LanguageSync><BlogPodcast /></LanguageSync>} />
            <Route path="/:lang/invest" element={<LanguageSync><InvestPage /></LanguageSync>} />
            <Route path="/:lang/angel-investor" element={<LanguageSync><AngelInvestor /></LanguageSync>} />
            <Route path="/:lang/build-for-equity" element={<LanguageSync><BuildForEquity /></LanguageSync>} />
            <Route path="/:lang/patent-strategy-for-startups" element={<LanguageSync><PatentStrategyForStartups /></LanguageSync>} />
            <Route path="/:lang/technical-cofounder-alternative" element={<LanguageSync><TechnicalCofounderAlternative /></LanguageSync>} />
            <Route path="/:lang/portfolio" element={<LanguageSync><PortfolioPage /></LanguageSync>} />
            <Route path="/:lang/contact" element={<LanguageSync><ContactPage /></LanguageSync>} />
            <Route path="/:lang/sales-partner" element={<LanguageSync><SalesPartnerPage /></LanguageSync>} />
            <Route path="/sv/saljpartner" element={<LanguageSync><SalesPartnerPage /></LanguageSync>} />
            <Route path="/es/socio-comercial" element={<LanguageSync><SalesPartnerPage /></LanguageSync>} />

            {/* Gyrocraft Routes - Password Protected */}
            <Route path="/:lang/gyrocraft" element={<LanguageSync><ProtectedGyrocraftRoute><GyrocraftHome /></ProtectedGyrocraftRoute></LanguageSync>} />
            <Route path="/:lang/gyrocraft/licensing" element={<LanguageSync><ProtectedGyrocraftRoute><GyrocraftLicensing /></ProtectedGyrocraftRoute></LanguageSync>} />
            <Route path="/:lang/gyrocraft/investors" element={<LanguageSync><ProtectedGyrocraftRoute><GyrocraftInvestors /></ProtectedGyrocraftRoute></LanguageSync>} />
            <Route path="/:lang/gyrocraft/acquisition" element={<LanguageSync><ProtectedGyrocraftRoute><GyrocraftAcquisition /></ProtectedGyrocraftRoute></LanguageSync>} />
            <Route path="/:lang/gyrocraft/about" element={<LanguageSync><ProtectedGyrocraftRoute><GyrocraftAbout /></ProtectedGyrocraftRoute></LanguageSync>} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
