import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import LanguageRedirect from "./components/LanguageRedirect";
import LanguageSync from "./components/LanguageSync";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Founder from "./pages/Founder";
import ServicesPage from "./pages/ServicesPage";
import BriefPage from "./pages/BriefPage";
import ConfigurePage from "./pages/ConfigurePage";
import BlogPodcast from "./pages/BlogPodcast";
import InvestPage from "./pages/InvestPage";
import AngelInvestor from "./pages/AngelInvestor";
import BuildForEquity from "./pages/BuildForEquity";
import PatentStrategyForStartups from "./pages/PatentStrategyForStartups";
import TechnicalCofounderAlternative from "./pages/TechnicalCofounderAlternative";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import SalesPartnerPage from "./pages/SalesPartnerPage";
import MetadataMachinePage from "./pages/MetadataMachinePage";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import MotionRoot from "./components/motion/MotionRoot";
import { GtagPageView } from "./components/GtagPageView";

// Gyrocraft Pages
import GyrocraftHome from "./pages/gyrocraft/GyrocraftHome";
import GyrocraftLicensing from "./pages/gyrocraft/GyrocraftLicensing";
import GyrocraftInvestors from "./pages/gyrocraft/GyrocraftInvestors";
import GyrocraftAcquisition from "./pages/gyrocraft/GyrocraftAcquisition";
import GyrocraftAbout from "./pages/gyrocraft/GyrocraftAbout";
import GyrocraftPasswordGate from "./components/gyrocraft/GyrocraftPasswordGate";

const queryClient = new QueryClient();

// Protected Gyrocraft Route wrapper
const ProtectedGyrocraftRoute = ({ children }: { children: React.ReactNode }) => (
  <GyrocraftPasswordGate>{children}</GyrocraftPasswordGate>
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
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
