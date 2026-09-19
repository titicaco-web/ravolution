import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import Founder from "@/pages/Founder";

export const Route = createFileRoute("/$lang/about")({
  component: () => (
    <LanguageSync>
      <Founder />
    </LanguageSync>
  ),
});
