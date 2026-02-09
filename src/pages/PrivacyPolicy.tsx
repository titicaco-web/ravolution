import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-display font-bold text-foreground mb-8">{t("privacy.title")}</h1>
          <p className="text-muted-foreground mb-8">{t("privacy.lastUpdated")} {new Date().toLocaleDateString('en-SE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div className="prose prose-lg max-w-none space-y-8">
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s1Title")}</h2><p className="text-muted-foreground leading-relaxed">{t("privacy.s1Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s2Title")}</h2><p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.s2Text")}</p><ul className="list-disc pl-6 text-muted-foreground space-y-2"><li>{t("privacy.s2L1")}</li><li>{t("privacy.s2L2")}</li><li>{t("privacy.s2L3")}</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s3Title")}</h2><p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.s3Text")}</p><ul className="list-disc pl-6 text-muted-foreground space-y-2"><li>{t("privacy.s3L1")}</li><li>{t("privacy.s3L2")}</li><li>{t("privacy.s3L3")}</li><li>{t("privacy.s3L4")}</li><li>{t("privacy.s3L5")}</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s4Title")}</h2><p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.s4Text")}</p><ul className="list-disc pl-6 text-muted-foreground space-y-2"><li>{t("privacy.s4L1")}</li><li>{t("privacy.s4L2")}</li><li>{t("privacy.s4L3")}</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s5Title")}</h2><p className="text-muted-foreground leading-relaxed">{t("privacy.s5Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s6Title")}</h2><p className="text-muted-foreground leading-relaxed">{t("privacy.s6Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s7Title")}</h2><p className="text-muted-foreground leading-relaxed mb-4">{t("privacy.s7Text")}</p><ul className="list-disc pl-6 text-muted-foreground space-y-2"><li>{t("privacy.s7L1")}</li><li>{t("privacy.s7L2")}</li><li>{t("privacy.s7L3")}</li><li>{t("privacy.s7L4")}</li><li>{t("privacy.s7L5")}</li><li>{t("privacy.s7L6")}</li><li>{t("privacy.s7L7")}</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s8Title")}</h2><p className="text-muted-foreground leading-relaxed">{t("privacy.s8Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s9Title")}</h2><p className="text-muted-foreground leading-relaxed">{t("privacy.s9Text")}</p><div className="mt-4 p-6 bg-muted/50 rounded-lg"><p className="text-foreground font-semibold">Ravolution AB</p><p className="text-muted-foreground">Kungsgatan 9, 111 43 Stockholm, Sweden</p><p className="text-muted-foreground">Email: ivan.daza@ravolution.se</p><p className="text-muted-foreground">Phone: +46 76 945 66 00</p></div></section>
            <section><h2 className="text-2xl font-semibold text-foreground mb-4">{t("privacy.s10Title")}</h2><p className="text-muted-foreground leading-relaxed">{t("privacy.s10Text")}</p></section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
