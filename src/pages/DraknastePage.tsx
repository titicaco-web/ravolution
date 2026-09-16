import { useEffect } from "react";

/**
 * eAktiebok — Draknäste
 * Static mockup (no functionality). The design is rendered exactly as delivered
 * from public/draknaste-mockup.html inside a full-viewport frame so its styling
 * stays isolated from the Ravolution design system.
 */
const DraknastePage = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "eAktiebok — Draknäste | Mockup";

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
    <div className="fixed inset-0 bg-[#F3EFE7]">
      <iframe
        src="/draknaste-mockup.html"
        title="eAktiebok — Draknäste mockup"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default DraknastePage;
