import { Navigate } from "react-router-dom";

const LanguageRedirect = () => {
  const stored = localStorage.getItem("site-language");
  const lang = stored === "sv" || stored === "es" ? stored : "en";
  return <Navigate to={`/${lang}`} replace />;
};

export default LanguageRedirect;
