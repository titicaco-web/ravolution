import { useEffect, useState } from "react";

const TOASTS = [
  { icon: "🔍", text: "iApply™ — AI-powered recruiting engine with 7 patents protecting the $924B global hiring market.", sub: "Patent Portfolio" },
  { icon: "🌐", text: "xPortMatch.com — B2B connector for 180,500+ Swedish SMEs across 150+ countries.", sub: "Export/Import Platform" },
  { icon: "📰", text: "NewsToast.com — AI news curation for 28M+ immigrants and expats across 8 languages.", sub: "Media Intelligence" },
  { icon: "🎓", text: "CommunicaringSchool™ — Global education platform aligned with the UN Convention on the Rights of the Child.", sub: "EdTech Flagship" },
  { icon: "🐕", text: "Hundelser.se — Pet services marketplace connecting Swedish dog owners with verified walkers and groomers.", sub: "Live Platform" },
  { icon: "💧", text: "EndOfThirst.com — Clean water access platform bridging donors with verified filtration projects worldwide.", sub: "Impact Venture" },
];

export default function LiveToast() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const dismiss = setTimeout(() => {
      setExiting(true);
      const cleanup = setTimeout(() => {
        setExiting(false);
        setVisible(false);
        const next = setTimeout(() => {
          setCurrent((c) => (c + 1) % TOASTS.length);
          setVisible(true);
        }, 8000);
        return () => clearTimeout(next);
      }, 400);
      return () => clearTimeout(cleanup);
    }, 4500);
    return () => clearTimeout(dismiss);
  }, [visible]);

  if (!visible) return null;
  const toast = TOASTS[current];

  return (
    <div className={`rav-toast ${exiting ? "is-exiting" : ""}`} role="status" aria-live="polite">
      <span className="rav-toast__dot" />
      <div>
        <div className="rav-toast__text">
          <span className="mr-1">{toast.icon}</span>
          {toast.text}
        </div>
        <div className="rav-toast__sub">{toast.sub}</div>
      </div>
    </div>
  );
}
