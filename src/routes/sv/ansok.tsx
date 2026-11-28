import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ApplyPage from "@/pages/ApplyPage";
import { getApplyRouteHead } from "@/components/apply/apply-copy";

export const Route = createFileRoute("/sv/ansok")({
  head: () => getApplyRouteHead("sv"),
  component: () => (
    <LanguageSync>
      <ApplyPage />
    </LanguageSync>
  ),
});
