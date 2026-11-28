import { createFileRoute, notFound } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import TheCreatorPage from "@/pages/TheCreatorPage";
import { normalizeApplyLanguage } from "@/components/apply/apply-copy";
import { getTheCreatorRouteHead } from "@/components/thecreator/thecreator-page-copy";

export const Route = createFileRoute("/$lang/thecreator")({
  beforeLoad: ({ params }) => {
    if (!["en", "sv", "es"].includes(params.lang)) throw notFound();
  },
  head: ({ params }) => getTheCreatorRouteHead(normalizeApplyLanguage(params.lang)),
  component: TheCreatorRoute,
});

function TheCreatorRoute() {
  const { lang } = Route.useParams();
  return (
    <LanguageSync>
      <TheCreatorPage lang={normalizeApplyLanguage(lang)} />
    </LanguageSync>
  );
}
