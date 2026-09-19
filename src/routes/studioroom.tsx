import { createFileRoute } from "@tanstack/react-router";
import StudioroomPage from "@/pages/StudioroomPage";

export const Route = createFileRoute("/studioroom")({
  component: StudioroomPage,
});
