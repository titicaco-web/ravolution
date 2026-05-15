import { useEffect, useState } from "react";

const TOASTS = [
  // Flagship patent platforms
  { icon: "🔍", text: "iApply™ — AI-powered recruiting engine with 7 patents protecting the $924B global hiring market.", sub: "Patent Flagship" },
  { icon: "🎓", text: "CommunicaringSchool™ — Global education platform aligned with the UN Convention on the Rights of the Child.", sub: "EdTech Flagship" },
  { icon: "🗣️", text: "Rosetta Livingstone™ — AI language-learning platform with intelligent learning partners across €585B market.", sub: "Language AI" },
  { icon: "🌐", text: "xPortMatch.com — B2B export connector for 180,500+ Swedish SMEs across 150+ countries.", sub: "Trade Platform" },
  { icon: "📰", text: "NewsToast.com — AI news curation for 28M+ immigrants and expats across 8 languages.", sub: "Media Intelligence" },
  { icon: "🎉", text: "Partysta™ — Patented event-planning platform reinventing how people host and discover gatherings.", sub: "Consumer Platform" },
  { icon: "👕", text: "It's a Fitt™ — AI-driven fashion fit and styling engine eliminating returns in online retail.", sub: "Retail AI" },
  // Marketplace concepts & live ventures
  { icon: "🐕", text: "Hundelser.se — Pet services marketplace connecting Swedish dog owners with verified walkers and groomers.", sub: "Live Marketplace" },
  { icon: "❤️", text: "NäraVän.se — Companionship platform connecting elderly Swedes with verified social visitors.", sub: "Social Impact" },
  { icon: "🛡️", text: "Beredskapad.se — Civil-preparedness platform helping Swedish households build resilience kits.", sub: "MVP Ready" },
  { icon: "💧", text: "EndOfThirst.com — Clean water access platform bridging donors with verified filtration projects worldwide.", sub: "Impact Venture" },
  { icon: "🏠", text: "VillaSpar.se — Home-savings platform helping Swedish families build deposits for first homes.", sub: "FinTech Concept" },
  { icon: "💼", text: "NordicFreelance.se — Live freelance marketplace connecting Nordic talent with verified clients.", sub: "Live Platform" },
  { icon: "📅", text: "Eventor™ — Patented events infrastructure for organizers, sponsors, and attendees.", sub: "Concept" },
  { icon: "🎁", text: "Givin™ — Patented gifting platform reinventing how people send meaningful gifts.", sub: "Concept" },
  // Voice & security
  { icon: "🎙️", text: "Voice biometrics & anti-deepfake authentication — proprietary identity-verification stack in development.", sub: "Security R&D" },
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
