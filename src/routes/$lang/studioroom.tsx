import { createFileRoute } from "@tanstack/react-router";
import StudioroomPage from "@/pages/StudioroomPage";

export const Route = createFileRoute("/$lang/studioroom")({
  head: () => ({
    meta: [
      { title: "Studioroom Network Demo | Ravolution AB" },
      { name: "description", content: "Utforska Studioroom Network, ett bemannat affärsnätverk byggt på BizMeet." },
      { property: "og:title", content: "Studioroom Network Demo | Ravolution AB" },
      { property: "og:description", content: "Utforska Studioroom Network, ett bemannat affärsnätverk byggt på BizMeet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: StudioroomPage,
});
