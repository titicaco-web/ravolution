import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BuildForEquity from "@/pages/BuildForEquity";

export const Route = createFileRoute("/$lang/build-for-equity")({
  component: () => (
    <LanguageSync>
      <BuildForEquity />
    </LanguageSync>
  ),
});
