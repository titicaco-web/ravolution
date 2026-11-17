import { useEffect } from "react";

/**
 * Paper Theatre Kit Builder — admin tool.
 * The self-contained tool lives in public/paper-theatre/index.html and is shown
 * inside a full-viewport frame so its styling stays isolated from the
 * Ravolution design system. Uploads are stored in the visitor's own browser
 * (IndexedDB); PDFs are generated client-side.
 */
const PaperTheatrePage = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Paper Theatre Kit Builder — Ravolution";

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      document.title = prevTitle;
      robots.remove();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#F5EFE3]">
      <iframe
        src="/paper-theatre/index.html"
        title="Paper Theatre Kit Builder"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default PaperTheatrePage;
