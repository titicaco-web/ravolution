import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import ApplyPage from "@/pages/ApplyPage";
import { getApplyRouteHead, normalizeApplyLanguage } from "@/components/apply/apply-copy";

export const Route = createFileRoute("/$lang/apply")({
  head: ({ params }) => getApplyRouteHead(normalizeApplyLanguage(params.lang)),
  component: () => (
    <LanguageSync>
      <ApplyPage />
    </LanguageSync>
  ),
});
