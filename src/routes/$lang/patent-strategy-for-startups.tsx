import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import PatentStrategyForStartups from "@/pages/PatentStrategyForStartups";

export const Route = createFileRoute("/$lang/patent-strategy-for-startups")({
  component: () => (
    <LanguageSync>
      <PatentStrategyForStartups />
    </LanguageSync>
  ),
});
