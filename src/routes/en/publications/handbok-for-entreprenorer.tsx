import { createFileRoute } from "@tanstack/react-router";
import html from "@/content/publications/handbok.html?raw";

export const Route = createFileRoute("/en/publications/handbok-for-entreprenorer")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
        }),
    },
  },
});
