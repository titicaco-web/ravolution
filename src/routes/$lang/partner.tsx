import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PartnerPage from "@/pages/PartnerPage";

export const Route = createFileRoute("/$lang/partner")({
  component: () => (
    <LanguageSync>
      <PartnerPage />
    </LanguageSync>
  ),
});
