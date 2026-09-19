import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ApplyPage from "@/pages/ApplyPage";

export const Route = createFileRoute("/sv/ansok")({
  component: () => (
    <LanguageSync>
      <ApplyPage />
    </LanguageSync>
  ),
});
