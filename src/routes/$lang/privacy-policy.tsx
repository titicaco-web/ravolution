import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const Route = createFileRoute("/$lang/privacy-policy")({
  component: () => (
    <LanguageSync>
      <PrivacyPolicy />
    </LanguageSync>
  ),
});
