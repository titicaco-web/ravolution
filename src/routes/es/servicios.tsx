import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ServicesPage from "@/pages/ServicesPage";

export const Route = createFileRoute("/es/servicios")({
  component: () => (
    <LanguageSync>
      <ServicesPage />
    </LanguageSync>
  ),
});
