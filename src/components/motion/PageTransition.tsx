import { useEffect, useState } from "react";
import { useLocation } from "@/lib/router-compat";

export default function PageTransition() {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const t = setTimeout(() => setActive(false), 500);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return <div className={`rav-page-transition ${active ? "is-active" : ""}`} aria-hidden />;
}
