import { useLanguage } from "@/i18n/LanguageContext";
import { EditorialShell } from "@/components/editorial/EditorialLayout";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
          <EditorialShell>
<main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">{t("terms.title")}</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-lg">{t("terms.lastUpdated")} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s1Title")}</h2><p>{t("terms.s1Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s2Title")}</h2><p>{t("terms.s2Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s3Title")}</h2><p>{t("terms.s3P1")}</p><p className="mt-4">{t("terms.s3P2")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s4Title")}</h2><p>{t("terms.s4Text")}</p><ul className="list-disc pl-6 mt-2 space-y-2"><li>{t("terms.s4L1")}</li><li>{t("terms.s4L2")}</li><li>{t("terms.s4L3")}</li><li>{t("terms.s4L4")}</li><li>{t("terms.s4L5")}</li></ul></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s5Title")}</h2><p>{t("terms.s5Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s6Title")}</h2><p>{t("terms.s6Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s7Title")}</h2><p>{t("terms.s7Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s8Title")}</h2><p>{t("terms.s8Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s9Title")}</h2><p>{t("terms.s9Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s10Title")}</h2><p>{t("terms.s10Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s11Title")}</h2><p>{t("terms.s11Text")}</p></section>
            <section><h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">{t("terms.s12Title")}</h2><p>{t("terms.s12Text")}</p><div className="mt-4 p-4 bg-muted rounded-lg"><p><strong>Ravolution AB</strong></p><p>Kungsgatan 9, 111 43 Stockholm, Sweden</p><p>Email: info@ravolution.se</p><p>Phone: +46 76 945 66 00</p></div></section>
          </div>
        </div>
      </main>
      </EditorialShell>
  );
};

export default TermsOfService;
