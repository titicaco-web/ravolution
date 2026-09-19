import { createFileRoute } from "@tanstack/react-router";
import DraknastePage from "@/pages/DraknastePage";

export const Route = createFileRoute("/eaktiebok-draknaste")({
  component: DraknastePage,
});
