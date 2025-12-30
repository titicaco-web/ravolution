import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Founder from "./pages/Founder";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

// Gyrocraft Pages
import GyrocraftHome from "./pages/gyrocraft/GyrocraftHome";
import GyrocraftLicensing from "./pages/gyrocraft/GyrocraftLicensing";
import GyrocraftInvestors from "./pages/gyrocraft/GyrocraftInvestors";
import GyrocraftAcquisition from "./pages/gyrocraft/GyrocraftAcquisition";
import GyrocraftAbout from "./pages/gyrocraft/GyrocraftAbout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          
          {/* Gyrocraft Routes */}
          <Route path="/gyrocraft" element={<GyrocraftHome />} />
          <Route path="/gyrocraft/licensing" element={<GyrocraftLicensing />} />
          <Route path="/gyrocraft/investors" element={<GyrocraftInvestors />} />
          <Route path="/gyrocraft/acquisition" element={<GyrocraftAcquisition />} />
          <Route path="/gyrocraft/about" element={<GyrocraftAbout />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
