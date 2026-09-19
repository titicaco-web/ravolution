import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import MetadataMachinePage from "@/pages/MetadataMachinePage";

export const Route = createFileRoute("/$lang/metadatamachine")({
  component: () => (
    <LanguageSync>
      <MetadataMachinePage />
    </LanguageSync>
  ),
});
