import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Founder from "./pages/Founder";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/services" element={<ServicesPage />} />
          
          {/* Gyrocraft Routes - Password Protected */}
          <Route path="/gyrocraft" element={<ProtectedGyrocraftRoute><GyrocraftHome /></ProtectedGyrocraftRoute>} />
          <Route path="/gyrocraft/licensing" element={<ProtectedGyrocraftRoute><GyrocraftLicensing /></ProtectedGyrocraftRoute>} />
          <Route path="/gyrocraft/investors" element={<ProtectedGyrocraftRoute><GyrocraftInvestors /></ProtectedGyrocraftRoute>} />
          <Route path="/gyrocraft/acquisition" element={<ProtectedGyrocraftRoute><GyrocraftAcquisition /></ProtectedGyrocraftRoute>} />
          <Route path="/gyrocraft/about" element={<ProtectedGyrocraftRoute><GyrocraftAbout /></ProtectedGyrocraftRoute>} />
          
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
