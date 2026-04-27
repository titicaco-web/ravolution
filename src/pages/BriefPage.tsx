import { useState, useCallback, useRef } from "react";
import { EditorialShell } from "@/components/editorial/EditorialLayout";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import DeliveryProcess from "@/components/services/DeliveryProcess";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLangPath } from "@/hooks/use-lang-path";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  ArrowRight,
  ArrowLeft,
  Zap,
  Lock,
  Rocket,
  CheckCircle2,
  Upload,
  X,
  FileText,
  MessageCircle,
  Globe,
  Users,
  Brain,
  BarChart3,
  Layers,
  ShieldCheck,
  Leaf,
  Monitor,
  Briefcase,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "46769456600";

const LATAM_COUNTRIES = ["Argentina","Brasil","Colombia","Costa Rica","Cuba","Ecuador","El Salvador","Guatemala","Honduras","México","Nicaragua","Panamá","Paraguay","Perú","Puerto Rico","República Dominicana","Uruguay","Venezuela"];

const ALL_COUNTRIES = ["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Sierra Leone","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

function getCountryList(lang: string): string[] {
  if (lang === "es") {
    return ["Chile", "Bolivia", ...LATAM_COUNTRIES.filter(c => c !== "Chile" && c !== "Bolivia").sort(), "─────────", ...ALL_COUNTRIES.sort()];
  }
  if (lang === "sv") return ["Sverige", ...ALL_COUNTRIES.filter(c => c !== "Sweden").sort()];
  return ALL_COUNTRIES.sort();
}

type FormData = {
  fullName: string;
  email: string;
  company: string;
  website: string;
  country: string;
  platformType: string;
  description: string;
  targetAudience: string;
  keyFeatures: string;
  hasExisting: string;
  projectStage: string;
  budget: string;
  timeline: string;
  additionalNotes: string;
};

const portfolioProjects = [
  { name: "iApply™", key: "portfolioIapply", url: "https://iapply.se" },
  { name: "CommunicaringSchool", key: "portfolioCommunicaring", url: "https://communicaringschool.com" },
  { name: "xPortMatch", key: "portfolioXportmatch", url: "https://xportmatch.com" },
  { name: "NewsToast", key: "portfolioNewstoast", url: "https://newstoast.com" },
  { name: "CarbonX", key: "portfolioCarbonx", url: "https://carbonx.se" },
  { name: "Autos Zofri", key: "portfolioAutoszofri", url: "https://autos-zofri.com" },
  { name: "Titicaco", key: "portfolioTiticaco", url: "https://titicaco.com" },
  { name: "Partysta", key: "portfolioPartysta", url: "https://partysta.com" },
];

const BriefPage = () => {
  const lp = useLangPath();
  const { t, language } = useLanguage();
  const [step, setStep] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      hasExisting: "",
      projectStage: "",
      platformType: "",
      budget: "",
      timeline: "",
      country: language === "es" ? "Chile" : language === "sv" ? "Sverige" : "",
    },
  });

  const platformTypes = [
    { value: "SaaS Platform", label: t("intake.ptSaas") },
    { value: "Marketplace", label: t("intake.ptMarketplace") },
    { value: "Recruitment Tool", label: t("intake.ptRecruitment") },
    { value: "EdTech", label: t("intake.ptEdtech") },
    { value: "CRM/Portal", label: t("intake.ptCrm") },
    { value: "AI Workflow", label: t("intake.ptAi") },
    { value: "Mobile App", label: t("intake.ptMobile") },
    { value: "Other", label: t("intake.ptOther") },
  ];

  const budgetRanges = [
    { value: "Under €5,000", label: t("intake.budgetUnder5k") },
    { value: "€5,000–€20,000", label: t("intake.budget5to20k") },
    { value: "€20,000–€50,000", label: t("intake.budget20to50k") },
    { value: "€50,000+", label: t("intake.budget50kPlus") },
    { value: "Equity", label: t("intake.budgetEquity") },
    { value: "Not sure", label: t("intake.budgetNotSure") },
  ];

  const timelines = [
    { value: "ASAP", label: t("intake.timelineAsap") },
    { value: "1–3 months", label: t("intake.timeline1to3") },
    { value: "3–6 months", label: t("intake.timeline3to6") },
    { value: "Flexible", label: t("intake.timelineFlexible") },
  ];

  const projectStages = [
    { value: "Just an idea", label: t("intake.stageIdea") },
    { value: "Have a wireframe or spec", label: t("intake.stageWireframe") },
    { value: "Already have a prototype", label: t("intake.stagePrototype") },
    { value: "Existing platform to upgrade", label: t("intake.stageUpgrade") },
  ];

  const buildTypes = [
    { icon: Monitor, label: t("intake.buildSaas"), desc: t("intake.buildSaasDesc") },
    { icon: Globe, label: t("intake.buildMarketplace"), desc: t("intake.buildMarketplaceDesc") },
    { icon: Users, label: t("intake.buildRecruitment"), desc: t("intake.buildRecruitmentDesc") },
    { icon: GraduationCap, label: t("intake.buildEdtech"), desc: t("intake.buildEdtechDesc") },
    { icon: Briefcase, label: t("intake.buildCrm"), desc: t("intake.buildCrmDesc") },
    { icon: Brain, label: t("intake.buildAi"), desc: t("intake.buildAiDesc") },
    { icon: Leaf, label: t("intake.buildCarbon"), desc: t("intake.buildCarbonDesc") },
    { icon: Layers, label: t("intake.buildCustom"), desc: t("intake.buildCustomDesc") },
  ];

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const remaining = 10 - files.length;
      const valid = acceptedFiles
        .filter((f) => f.size <= 10 * 1024 * 1024)
        .slice(0, remaining);
      setFiles((prev) => [...prev, ...valid]);
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
      "application/zip": [".zip"],
    },
    maxSize: 10 * 1024 * 1024,
    maxFiles: 10,
  });

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const uploadFiles = async (): Promise<string[]> => {
    if (files.length === 0) return [];
    const folder = `brief-${Date.now()}`;
    const urls: string[] = [];
    for (const file of files) {
      const path = `${folder}/${file.name}`;
      const { error } = await supabase.storage
        .from("project-briefs")
        .upload(path, file);
      if (error) {
        console.error("Upload error:", error);
        continue;
      }
      const { data: urlData } = supabase.storage
        .from("project-briefs")
        .getPublicUrl(path);
      urls.push(`${file.name}: ${urlData.publicUrl}`);
    }
    return urls;
  };

  const onSubmit = async (data: FormData) => {
    setUploading(true);
    let fileLinks: string[] = [];

    if (files.length > 0) {
      try {
        fileLinks = await uploadFiles();
      } catch (e) {
        console.error("File upload failed:", e);
        toast({ title: "File upload failed", description: "Brief will be sent without file links.", variant: "destructive" });
      }
    }

    const fileSection = fileLinks.length > 0
      ? fileLinks.join("\n")
      : "No files attached";

    const msg = `📋 *NEW PROJECT BRIEF — Ravolution*

👤 *About*
Name: ${data.fullName}
Email: ${data.email}
Company: ${data.company || "—"}
Website: ${data.website || "—"}
Location: ${data.country || "—"}

🏗️ *Project*
Type: ${data.platformType}
Stage: ${data.projectStage || "—"}
Existing platform: ${data.hasExisting || "—"}
Budget: ${data.budget || "—"}
Timeline: ${data.timeline || "—"}

📝 *Description*
${data.description}

👥 *Target Audience*
${data.targetAudience || "—"}

⚙️ *Key Features*
${data.keyFeatures || "—"}

📎 *Files*
${fileSection}

💬 *Additional Notes*
${data.additionalNotes || "—"}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setSubmitted(true);
    setUploading(false);
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const selectedPlatformType = watch("platformType");
  const selectedStage = watch("projectStage");
  const selectedHasExisting = watch("hasExisting");

  if (submitted) {
    return (
      <>
        <EditorialShell>
          <section className="edit-section pt-40 bg-[hsl(var(--bg))]">
            <div className="edit-container">
              <div className="max-w-2xl mx-auto text-center border border-white/10 bg-[hsl(var(--surface))] p-12 md:p-16">
                <div className="w-16 h-16 border border-[hsl(var(--accent-edit))] flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-7 h-7 text-[hsl(var(--accent-edit))]" />
                </div>
                <span className="edit-label text-[hsl(var(--accent-edit))]">Brief received</span>
                <h1 className="edit-h2 text-white mt-6 mb-6">{t("intake.successTitle")}</h1>
                {files.length > 0 && (
                  <p className="edit-body text-white/70 mb-4">{t("intake.successFilesNote")}</p>
                )}
                <p className="edit-body text-white/70">
                  {t("intake.successResponse")}{" "}
                  <span className="text-white">{watch("email")}</span>.
                </p>
              </div>
            </div>
          </section>
          <DeliveryProcess variant="full" />
          <section className="edit-section bg-[hsl(var(--bg))] border-t border-white/10 text-center">
            <Link
              to={lp("/")}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-[hsl(var(--bg))] transition-colors edit-label"
            >
              {t("intake.backToHome")} <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </EditorialShell>
      </>
    );
  }

  const stepLabels = [t("intake.stepAbout"), t("intake.stepProject"), t("intake.stepFiles")];

  return (
    <>
      <Helmet>
        <title>{t("intake.metaTitle")}</title>
        <meta name="description" content={t("intake.metaDesc")} />
        <link rel="canonical" href="https://ravolution.se/services" />
      </Helmet>

      <EditorialShell>
        {/* Header */}
        <section className="edit-section pt-40 pb-12 bg-[hsl(var(--bg))] border-b border-white/10">
          <div className="edit-container">
            <span className="edit-label text-[hsl(var(--accent-edit))]">Submit a brief</span>
            <h1 className="edit-display text-white mt-6 max-w-[18ch]">{t("intake.briefTitle")}</h1>
            <p className="edit-body text-white/65 mt-8 max-w-2xl">{t("intake.briefSubtitle")}</p>
          </div>
        </section>

        {/* Intake Form */}
        <section ref={formRef} className="edit-section bg-[hsl(var(--surface))] border-b border-white/10">
          <div className="edit-container max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-12 border-y border-white/10 py-6">
              {stepLabels.map((label, i) => (
                <div key={i} className="flex items-center gap-3 flex-1">
                  <div className={`flex items-center gap-3 transition-colors ${i <= step ? "text-white" : "text-white/35"}`}>
                    <span className={`w-8 h-8 flex items-center justify-center edit-label border ${i <= step ? "border-[hsl(var(--accent-edit))] text-[hsl(var(--accent-edit))]" : "border-white/20"}`}>
                      0{i + 1}
                    </span>
                    <span className="hidden sm:inline edit-label">{label}</span>
                  </div>
                  {i < 2 && <div className={`flex-1 h-px ${i < step ? "bg-[hsl(var(--accent-edit))]" : "bg-white/15"}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-[hsl(var(--bg))] border border-white/10 p-6 md:p-12">
                {/* Step 1 */}
                {step === 0 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.fullName")} *</label>
                      <input
                        {...register("fullName", { required: t("intake.fullNameRequired") })}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                        placeholder={t("intake.fullNamePlaceholder")}
                      />
                      {errors.fullName && <p className="edit-label text-[hsl(var(--accent-edit))] mt-2">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.email")} *</label>
                      <input
                        type="email"
                        {...register("email", { required: t("intake.emailRequired") })}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                        placeholder={t("intake.emailPlaceholder")}
                      />
                      {errors.email && <p className="edit-label text-[hsl(var(--accent-edit))] mt-2">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.company")}</label>
                      <input
                        {...register("company")}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                        placeholder={t("intake.companyPlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.website")}</label>
                      <input
                        {...register("website")}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                        placeholder={t("intake.websitePlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.country")}</label>
                      <select
                        {...register("country")}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                        
                      >
                        <option value="" disabled>{t("intake.countryPlaceholder")}</option>
                        {getCountryList(language).map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.platformType")} *</label>
                      <div className="flex flex-wrap gap-2">
                        {platformTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setValue("platformType", type.value)}
                            className={`px-5 py-2 edit-label border transition-colors ${selectedPlatformType === type.value ? "bg-white text-[hsl(var(--bg))] border-white" : "border-white/20 text-white/65 hover:border-[hsl(var(--accent-edit))] hover:text-white"}`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                      {errors.platformType && <p className="edit-label text-[hsl(var(--accent-edit))] mt-2">{errors.platformType.message}</p>}
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button type="button" onClick={nextStep} className="bg-white text-[hsl(var(--bg))] hover:bg-[hsl(var(--accent-edit))] hover:text-white rounded-none px-6 py-5 edit-label">
                        {t("intake.next")} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 1 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.projectDescription")} *</label>
                      <textarea
                        {...register("description", { required: t("intake.projectDescRequired") })}
                        rows={5}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors resize-none"
                        placeholder={t("intake.projectDescPlaceholder")}
                      />
                      {errors.description && <p className="edit-label text-[hsl(var(--accent-edit))] mt-2">{errors.description.message}</p>}
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.targetAudience")}</label>
                      <input
                        {...register("targetAudience")}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                        placeholder={t("intake.targetAudiencePlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.keyFeatures")}</label>
                      <textarea
                        {...register("keyFeatures")}
                        rows={3}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors resize-none"
                        placeholder={t("intake.keyFeaturesPlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.hasExisting")}</label>
                      <div className="flex gap-3">
                        {[
                          { value: "Yes", label: t("intake.hasYes") },
                          { value: "No", label: t("intake.hasNo") },
                          { value: "In progress", label: t("intake.hasInProgress") },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setValue("hasExisting", opt.value)}
                            className={`px-5 py-2 edit-label border transition-colors ${selectedHasExisting === opt.value ? "bg-white text-[hsl(var(--bg))] border-white" : "border-white/20 text-white/65 hover:border-[hsl(var(--accent-edit))] hover:text-white"}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.projectStage")}</label>
                      <div className="flex flex-wrap gap-2">
                        {projectStages.map((s) => (
                          <button
                            key={s.value}
                            type="button"
                            onClick={() => setValue("projectStage", s.value)}
                            className={`px-5 py-2 edit-label border transition-colors ${selectedStage === s.value ? "bg-white text-[hsl(var(--bg))] border-white" : "border-white/20 text-white/65 hover:border-[hsl(var(--accent-edit))] hover:text-white"}`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.budget")}</label>
                      <select
                        {...register("budget")}
                        className="w-full bg-[hsl(var(--surface))] border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                      >
                        <option value="">{t("intake.budgetSelect")}</option>
                        {budgetRanges.map((b) => (
                          <option key={b.value} value={b.value}>{b.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.timeline")}</label>
                      <select
                        {...register("timeline")}
                        className="w-full bg-[hsl(var(--surface))] border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors"
                      >
                        <option value="">{t("intake.timelineSelect")}</option>
                        {timelines.map((tl) => (
                          <option key={tl.value} value={tl.value}>{tl.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep} className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[hsl(var(--bg))] rounded-none px-6 py-5 edit-label">
                        <ArrowLeft className="w-4 h-4 mr-2" /> {t("intake.back")}
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-white text-[hsl(var(--bg))] hover:bg-[hsl(var(--accent-edit))] hover:text-white rounded-none px-6 py-5 edit-label">
                        {t("intake.next")} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 2 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.uploadLabel")}</label>

                      {/* Upload specs — accepted types, size, limits */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-5">
                        <div className="bg-[hsl(var(--surface))] p-4">
                          <p className="edit-label text-[hsl(var(--accent-edit))] mb-1">— Accepted</p>
                          <p className="text-white text-sm leading-snug">PDF · DOCX · PNG · JPG · WEBP · ZIP</p>
                        </div>
                        <div className="bg-[hsl(var(--surface))] p-4">
                          <p className="edit-label text-[hsl(var(--accent-edit))] mb-1">— Max size</p>
                          <p className="text-white text-sm leading-snug">10 MB per file</p>
                        </div>
                        <div className="bg-[hsl(var(--surface))] p-4">
                          <p className="edit-label text-[hsl(var(--accent-edit))] mb-1">— Limit</p>
                          <p className="text-white text-sm leading-snug">Up to 10 files per brief</p>
                        </div>
                      </div>

                      {/* What to include — guidance panel */}
                      <div className="border border-white/10 bg-[hsl(var(--surface))] p-5 mb-5">
                        <p className="edit-label text-[hsl(var(--accent-edit))] mb-3">— What to include in your deck or pitch</p>
                        <ul className="text-white/75 text-sm leading-relaxed space-y-1.5">
                          <li><span className="text-white/45 mr-2">01</span>Problem you solve and who it's for</li>
                          <li><span className="text-white/45 mr-2">02</span>Solution overview · key product screenshots or mockups</li>
                          <li><span className="text-white/45 mr-2">03</span>Target market size and traction (if any)</li>
                          <li><span className="text-white/45 mr-2">04</span>Business model · pricing · revenue plan</li>
                          <li><span className="text-white/45 mr-2">05</span>Team and relevant background</li>
                          <li><span className="text-white/45 mr-2">06</span>What you need from us (capital, build, IP, GTM)</li>
                          <li><span className="text-white/45 mr-2">07</span>Timeline and milestones</li>
                        </ul>
                        <p className="text-white/45 text-xs mt-4 italic">No deck yet? Skip the upload and describe your idea in the Additional notes field below — we'll take it from there.</p>
                      </div>

                      <div
                        {...getRootProps()}
                        className={`border border-dashed p-12 text-center cursor-pointer transition-colors ${isDragActive ? "border-[hsl(var(--accent-edit))] bg-[hsl(var(--accent-edit))]/5" : "border-white/20 hover:border-[hsl(var(--accent-edit))]/60"}`}
                      >
                        <input {...getInputProps()} />
                        <Upload className="w-6 h-6 text-[hsl(var(--accent-edit))] mx-auto mb-4" />
                        <p className="text-white edit-label mb-2">
                          {isDragActive ? t("intake.uploadDragActive") : t("intake.uploadDrag")}
                        </p>
                        <p className="edit-label text-white/45">PDF, DOCX, PNG, JPG, WEBP, ZIP — up to 10 MB each, max 10 files</p>
                      </div>
                      <div className="edit-label text-white/45 mt-4 space-y-1">
                        <p>{t("intake.uploadTip1")}</p>
                        <p>{t("intake.uploadTip2")}</p>
                        <p>{t("intake.uploadTip3")}</p>
                        <p>{t("intake.uploadTip4")}</p>
                      </div>
                      {files.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {files.map((file, i) => (
                            <li key={i} className="flex items-center justify-between bg-[hsl(var(--surface))] border border-white/10 px-4 py-3 text-sm text-white/85">
                              <span className="flex items-center gap-3 text-white truncate">
                                <FileText className="w-4 h-4 text-[hsl(var(--accent-edit))] flex-shrink-0" />
                                {file.name}
                              </span>
                              <button type="button" onClick={() => removeFile(i)} className="text-white/55 hover:text-[hsl(var(--accent-edit))]">
                                <X className="w-4 h-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      <label className="block edit-label text-white/55 mb-3">{t("intake.additionalNotes")}</label>
                      <textarea
                        {...register("additionalNotes")}
                        rows={3}
                        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--accent-edit))] transition-colors resize-none"
                        placeholder={t("intake.additionalNotesPlaceholder")}
                      />
                    </div>
                    {files.length > 0 && (
                      <div className="border border-[hsl(var(--accent-edit))]/40 bg-[hsl(var(--accent-edit))]/5 p-5 text-sm text-white">
                        <p className="edit-label text-[hsl(var(--accent-edit))] mb-2">📎 {files.length} {t("intake.filesReady")}</p>
                        <p className="text-white/70 text-sm">{t("intake.filesReadyDesc")}</p>
                      </div>
                    )}
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep} className="border-white/30 bg-transparent text-white hover:bg-white hover:text-[hsl(var(--bg))] rounded-none px-6 py-5 edit-label">
                        <ArrowLeft className="w-4 h-4 mr-2" /> {t("intake.back")}
                      </Button>
                      <Button type="submit" disabled={uploading} className="bg-[hsl(var(--accent-edit))] hover:bg-white hover:text-[hsl(var(--bg))] text-white rounded-none px-8 py-5 edit-label">
                        {uploading ? (
                          <><span className="animate-spin mr-2">⏳</span> {t("intake.uploading")}</>
                        ) : (
                          <><MessageCircle className="w-5 h-5 mr-2" /> {t("intake.submitViaWhatsapp")}</>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="edit-section bg-[hsl(var(--bg))] border-b border-white/10">
          <div className="edit-container">
            <span className="edit-label text-[hsl(var(--accent-edit))]">02 — What happens next</span>
            <h2 className="edit-h2 text-white mt-6 mb-12 max-w-[20ch]">{t("intake.whatsNextTitle")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {[
                { step: "01", title: t("intake.step1Title"), desc: t("intake.step1Desc") },
                { step: "02", title: t("intake.step2Title"), desc: t("intake.step2Desc") },
                { step: "03", title: t("intake.step3Title"), desc: t("intake.step3Desc") },
                { step: "04", title: t("intake.step4Title"), desc: t("intake.step4Desc") },
              ].map((item, i) => (
                <div key={i} className="bg-[hsl(var(--surface))] p-8">
                  <span className="edit-label text-[hsl(var(--accent-edit))] block mb-6">{item.step}</span>
                  <h3 className="text-white text-lg font-display font-bold mb-3">{item.title}</h3>
                  <p className="edit-body text-white/65 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Portfolio */}
        <section className="edit-section bg-[hsl(var(--surface))] border-b border-white/10">
          <div className="edit-container">
            <span className="edit-label text-[hsl(var(--accent-edit))]">03 — Proven track record</span>
            <h2 className="edit-h2 text-white mt-6 mb-6 max-w-[20ch]">{t("intake.provenTitle")}</h2>
            <div className="flex flex-wrap gap-x-10 gap-y-3 edit-label text-white/55 mb-12">
              <span>{t("intake.provenStat1")}</span>
              <span>{t("intake.provenStat2")}</span>
              <span>{t("intake.provenStat3")}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-10">
              {portfolioProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[hsl(var(--bg))] hover:bg-[hsl(var(--surface))] transition-colors p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-white font-display font-bold text-base group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                      {project.name}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-[hsl(var(--accent-edit))] transition-colors" />
                  </div>
                  <p className="edit-label text-white/55">{t(`intake.${project.key}`)}</p>
                </a>
              ))}
            </div>
            <Link
              to={lp("/configure")}
              className="edit-label text-white edit-link inline-flex items-center gap-2"
            >
              {t("intake.configureLink")} →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="edit-section bg-[hsl(var(--bg))] border-b border-white/10">
          <div className="edit-container max-w-4xl mx-auto">
            <span className="edit-label text-[hsl(var(--accent-edit))]">04 — Questions</span>
            <h2 className="edit-h2 text-white mt-6 mb-12">{t("intake.faqTitle")}</h2>
            <div className="border-t border-white/10">
              {[
                { q: t("intake.faq1Q"), a: t("intake.faq1A") },
                { q: t("intake.faq2Q"), a: t("intake.faq2A") },
                { q: t("intake.faq3Q"), a: t("intake.faq3A") },
                { q: t("intake.faq4Q"), a: t("intake.faq4A") },
                { q: t("intake.faq5Q"), a: t("intake.faq5A") },
              ].map((faq, i) => (
                <details key={i} className="group border-b border-white/10">
                  <summary className="cursor-pointer flex items-center justify-between gap-6 py-6 select-none hover:text-[hsl(var(--accent-edit))] transition-colors">
                    <span className="text-white text-lg font-display group-hover:text-[hsl(var(--accent-edit))] transition-colors">
                      {faq.q}
                    </span>
                    <span className="edit-label text-[hsl(var(--accent-edit))] flex-shrink-0 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                  </summary>
                  <div className="pb-6 edit-body text-white/65 max-w-3xl">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="edit-section bg-[hsl(var(--surface))]">
          <div className="edit-container text-center max-w-3xl mx-auto">
            <span className="edit-label text-[hsl(var(--accent-edit))]">Build with us</span>
            <h2 className="edit-display text-white mt-6 mb-8">{t("intake.bottomTitle")}</h2>
            <p className="edit-body text-white/65 mb-12">{t("intake.bottomSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[hsl(var(--bg))] hover:bg-[hsl(var(--accent-edit))] hover:text-white transition-colors edit-label"
              >
                {t("intake.submitBrief")} <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:ivan.daza@ravolution.se"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-[hsl(var(--bg))] transition-colors edit-label"
              >
                {t("intake.bookCall")}
              </a>
            </div>
          </div>
        </section>

        </EditorialShell>
    </>
  );
};

export default BriefPage;
