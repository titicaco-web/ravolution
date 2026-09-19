import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import TermsOfService from "@/pages/TermsOfService";

export const Route = createFileRoute("/$lang/terms-of-service")({
  component: () => (
    <LanguageSync>
      <TermsOfService />
    </LanguageSync>
  ),
});
