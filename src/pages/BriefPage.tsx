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
<div className="pt-32 pb-10 px-6 bg-background">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">{t("intake.successTitle")}</h1>
            {files.length > 0 && (
              <p className="text-muted-foreground mb-4">
                {t("intake.successFilesNote")}
              </p>
            )}
            <p className="text-muted-foreground mb-8">
              {t("intake.successResponse")} <span className="font-semibold text-foreground">{watch("email")}</span>.
            </p>
          </div>
        </div>
        <DeliveryProcess variant="full" />
        <div className="py-10 px-6 bg-background text-center">
          <Link to={lp("/")} className="btn-primary inline-flex items-center gap-2">
            {t("intake.backToHome")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
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
{/* Intake Form */}
        <section ref={formRef} className="pt-32 pb-20 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t("intake.briefTitle")}</h2>
              <p className="text-muted-foreground">{t("intake.briefSubtitle")}</p>
            </div>

            {/* Progress bar */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {stepLabels.map((label, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                  {i < 2 && <div className={`w-8 h-0.5 ${i < step ? "bg-primary" : "bg-muted"}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-card">
                {/* Step 1 */}
                {step === 0 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.fullName")} *</label>
                      <input
                        {...register("fullName", { required: t("intake.fullNameRequired") })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder={t("intake.fullNamePlaceholder")}
                      />
                      {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.email")} *</label>
                      <input
                        type="email"
                        {...register("email", { required: t("intake.emailRequired") })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder={t("intake.emailPlaceholder")}
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.company")}</label>
                      <input
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder={t("intake.companyPlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.website")}</label>
                      <input
                        {...register("website")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder={t("intake.websitePlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.country")}</label>
                      <select
                        {...register("country")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        
                      >
                        <option value="" disabled>{t("intake.countryPlaceholder")}</option>
                        {getCountryList(language).map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.platformType")} *</label>
                      <div className="flex flex-wrap gap-2">
                        {platformTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setValue("platformType", type.value)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedPlatformType === type.value ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                      {errors.platformType && <p className="text-sm text-destructive mt-1">{errors.platformType.message}</p>}
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90">
                        {t("intake.next")} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 1 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.projectDescription")} *</label>
                      <textarea
                        {...register("description", { required: t("intake.projectDescRequired") })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder={t("intake.projectDescPlaceholder")}
                      />
                      {errors.description && <p className="text-sm text-destructive mt-1">{errors.description.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.targetAudience")}</label>
                      <input
                        {...register("targetAudience")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder={t("intake.targetAudiencePlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.keyFeatures")}</label>
                      <textarea
                        {...register("keyFeatures")}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder={t("intake.keyFeaturesPlaceholder")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.hasExisting")}</label>
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
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedHasExisting === opt.value ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.projectStage")}</label>
                      <div className="flex flex-wrap gap-2">
                        {projectStages.map((s) => (
                          <button
                            key={s.value}
                            type="button"
                            onClick={() => setValue("projectStage", s.value)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedStage === s.value ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.budget")}</label>
                      <select
                        {...register("budget")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">{t("intake.budgetSelect")}</option>
                        {budgetRanges.map((b) => (
                          <option key={b.value} value={b.value}>{b.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.timeline")}</label>
                      <select
                        {...register("timeline")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">{t("intake.timelineSelect")}</option>
                        {timelines.map((tl) => (
                          <option key={tl.value} value={tl.value}>{tl.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> {t("intake.back")}
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90">
                        {t("intake.next")} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 2 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.uploadLabel")}</label>
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                      >
                        <input {...getInputProps()} />
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm text-foreground font-medium mb-1">
                          {isDragActive ? t("intake.uploadDragActive") : t("intake.uploadDrag")}
                        </p>
                        <p className="text-xs text-muted-foreground">{t("intake.uploadHint")}</p>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 space-y-0.5">
                        <p>{t("intake.uploadTip1")}</p>
                        <p>{t("intake.uploadTip2")}</p>
                        <p>{t("intake.uploadTip3")}</p>
                        <p>{t("intake.uploadTip4")}</p>
                      </div>
                      {files.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {files.map((file, i) => (
                            <li key={i} className="flex items-center justify-between bg-muted rounded-lg px-4 py-2 text-sm">
                              <span className="flex items-center gap-2 text-foreground truncate">
                                <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                {file.name}
                              </span>
                              <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                                <X className="w-4 h-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t("intake.additionalNotes")}</label>
                      <textarea
                        {...register("additionalNotes")}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder={t("intake.additionalNotesPlaceholder")}
                      />
                    </div>
                    {files.length > 0 && (
                      <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-sm text-foreground">
                        <p className="font-medium mb-1">📎 {files.length} {t("intake.filesReady")}</p>
                        <p className="text-muted-foreground">{t("intake.filesReadyDesc")}</p>
                      </div>
                    )}
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> {t("intake.back")}
                      </Button>
                      <Button type="submit" disabled={uploading} className="bg-gold hover:bg-gold-light text-gold-foreground text-lg px-8">
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
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">{t("intake.whatsNextTitle")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: t("intake.step1Title"), desc: t("intake.step1Desc") },
                { step: "2", title: t("intake.step2Title"), desc: t("intake.step2Desc") },
                { step: "3", title: t("intake.step3Title"), desc: t("intake.step3Desc") },
                { step: "4", title: t("intake.step4Title"), desc: t("intake.step4Desc") },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                  {i < 3 && <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-primary/30" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Portfolio */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("intake.provenTitle")}</h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <span>{t("intake.provenStat1")}</span>
              <span>{t("intake.provenStat2")}</span>
              <span>{t("intake.provenStat3")}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {portfolioProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated group hover:border-primary/30 transition-all text-center p-4"
                >
                  <h4 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{project.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{t(`intake.${project.key}`)}</p>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors mx-auto" />
                </a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={lp("/configure")} className="text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors">
                {t("intake.configureLink")}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">{t("intake.faqTitle")}</h2>
            <div className="space-y-4">
              {[
                { q: t("intake.faq1Q"), a: t("intake.faq1A") },
                { q: t("intake.faq2Q"), a: t("intake.faq2A") },
                { q: t("intake.faq3Q"), a: t("intake.faq3A") },
                { q: t("intake.faq4Q"), a: t("intake.faq4A") },
                { q: t("intake.faq5Q"), a: t("intake.faq5A") },
              ].map((faq, i) => (
                <details key={i} className="group card-elevated !p-0 overflow-hidden">
                  <summary className="cursor-pointer font-semibold text-foreground text-sm flex items-center justify-between px-5 py-4 select-none hover:bg-secondary/50 transition-colors">
                    <span>{faq.q}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90 flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-4 text-sm text-muted-foreground">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("intake.bottomTitle")}</h2>
            <p className="text-white/70 mb-8 text-lg">{t("intake.bottomSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" onClick={scrollToForm}>
                {t("intake.submitBrief")} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" className="bg-white text-primary font-semibold hover:bg-white/90" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                  {t("intake.bookCall")}
                </a>
              </Button>
            </div>
          </div>
        </section>

        </EditorialShell>
    </>
  );
};

export default BriefPage;
