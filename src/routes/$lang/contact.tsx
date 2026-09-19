import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ContactPage from "@/pages/ContactPage";

export const Route = createFileRoute("/$lang/contact")({
  component: () => (
    <LanguageSync>
      <ContactPage />
    </LanguageSync>
  ),
});
