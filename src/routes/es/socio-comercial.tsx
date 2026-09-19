import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import SalesPartnerPage from "@/pages/SalesPartnerPage";

export const Route = createFileRoute("/es/socio-comercial")({
  component: () => (
    <LanguageSync>
      <SalesPartnerPage />
    </LanguageSync>
  ),
});
