import { createFileRoute } from "@tanstack/react-router";
import LanguageRedirect from "@/components/LanguageRedirect";

export const Route = createFileRoute("/")({
  component: LanguageRedirect,
});
