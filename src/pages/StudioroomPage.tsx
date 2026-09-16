import { useEffect } from "react";

/**
 * Studioroom Network — demo page.
 * The delivered HTML is rendered exactly as provided from
 * public/studioroom-landing.html inside a full-viewport frame so its styling
 * stays isolated from the Ravolution design system.
 */
const StudioroomPage = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Studioroom Network — Demo";

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
    <div className="fixed inset-0 bg-[#F5F1EA]">
      <iframe
        src="/studioroom-landing.html"
        title="Studioroom Network demo"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default StudioroomPage;
