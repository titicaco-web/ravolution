import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import AngelInvestor from "@/pages/AngelInvestor";

export const Route = createFileRoute("/$lang/angel-investor")({
  component: () => (
    <LanguageSync>
      <AngelInvestor />
    </LanguageSync>
  ),
});
