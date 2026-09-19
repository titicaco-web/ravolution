import { createFileRoute } from "@tanstack/react-router";
import LanguageSync from "@/components/LanguageSync";
import BlogPodcast from "@/pages/BlogPodcast";

export const Route = createFileRoute("/$lang/blog")({
  component: () => (
    <LanguageSync>
      <BlogPodcast />
    </LanguageSync>
  ),
});
