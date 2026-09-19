import { Navigate } from "@/lib/router-compat";

const LanguageRedirect = () => {
  const stored =
    typeof window === "undefined" ? null : localStorage.getItem("site-language");
  const lang = stored === "sv" || stored === "es" ? stored : "en";
  return <Navigate to={`/${lang}`} replace />;
};

export default LanguageRedirect;
