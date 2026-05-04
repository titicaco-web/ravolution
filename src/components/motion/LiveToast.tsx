import { useEffect, useState } from "react";

const TOASTS = [
  { icon: "🇸🇪", text: "New application received from Stockholm", sub: "2 min ago" },
  { icon: "🚀", text: "Portfolio company raised seed round", sub: "8 min ago" },
  { icon: "🤝", text: "Partnership inquiry from Berlin", sub: "14 min ago" },
  { icon: "📈", text: "Ravolution portfolio grew 3x this year", sub: "1 hr ago" },
  { icon: "✅", text: "Due diligence completed — new deal signed", sub: "3 hr ago" },
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
