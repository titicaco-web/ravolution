import { useState, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLangPath } from "@/hooks/use-lang-path";
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

const platformTypes = [
  "SaaS Platform",
  "Marketplace",
  "Recruitment Tool",
  "EdTech",
  "CRM/Portal",
  "AI Workflow",
  "Mobile App",
  "Other",
];

const budgetRanges = [
  "Under €5,000",
  "€5,000–€20,000",
  "€20,000–€50,000",
  "€50,000+",
  "Equity / Build-for-equity model",
  "Not sure yet",
];

const timelines = ["ASAP", "1–3 months", "3–6 months", "Flexible"];

const projectStages = [
  "Just an idea",
  "Have a wireframe or spec",
  "Already have a prototype",
  "Existing platform to upgrade",
];

const buildTypes = [
  { icon: Monitor, label: "SaaS Platforms", desc: "Custom B2B & B2C software" },
  { icon: Globe, label: "Marketplaces & Trade", desc: "Multi-sided platforms" },
  { icon: Users, label: "Recruitment & Matching", desc: "AI-powered talent matching" },
  { icon: GraduationCap, label: "EdTech & Learning", desc: "LMS, courses, assessments" },
  { icon: Briefcase, label: "CRM & Partner Portals", desc: "Client & partner management" },
  { icon: Brain, label: "AI-Powered Workflows", desc: "Automation & intelligence" },
  { icon: Leaf, label: "Carbon & Compliance", desc: "ESG reporting & tracking" },
  { icon: Layers, label: "Custom Web Apps", desc: "Tailored B2B/B2C solutions" },
];

const portfolioProjects = [
  { name: "iApply™", desc: "Transparent recruiting platform", url: "https://iapply.se" },
  { name: "CommunicaringSchool", desc: "UN-aligned global education", url: "https://communicaringschool.com" },
  { name: "xPortMatch", desc: "B2B export-import connector", url: "https://xportmatch.com" },
  { name: "NewsToast", desc: "News & Language Learning Platform", url: "https://newstoast.com" },
  { name: "CarbonX", desc: "Carbon offset marketplace", url: "https://carbonx.se" },
  { name: "Autos Zofri", desc: "Vehicle marketplace & exports", url: "https://autos-zofri.com" },
  { name: "Titicaco", desc: "Latin American e-commerce", url: "https://titicaco.com" },
  { name: "Partysta", desc: "Event & party planning platform", url: "https://partysta.com" },
];

const ServicesPage = () => {
  const lp = useLangPath();
  const [step, setStep] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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
    },
  });

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

  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

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
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-6 bg-background">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Your brief has been sent to WhatsApp ✓</h1>
            {files.length > 0 && (
              <p className="text-muted-foreground mb-4">
                Your files have been uploaded and their download links are included in the WhatsApp message.
              </p>
            )}
            <p className="text-muted-foreground mb-8">
              Expect a response within 48 hours at <span className="font-semibold text-foreground">{watch("email")}</span>.
            </p>
            <Link to={lp("/")} className="btn-primary inline-flex items-center gap-2">
              Back to Ravolution <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Start Your Platform Project | Ravolution AB</title>
        <meta name="description" content="Send us your brief in 5 minutes. Within 48 hours we send back a cost estimate, platform description — or in some cases a live mockup." />
        <link rel="canonical" href="https://ravolution.se/services" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary to-primary-dark text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-light mb-4">Venture Studio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Start Your Platform Project
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Send us your brief in 5 minutes. Within 48 hours we send back a cost estimate, platform description — or in some cases a live mockup.
            </p>
            <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" onClick={scrollToForm}>
              Submit Your Brief <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Trust bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/70 text-sm">
              {[
                { icon: Zap, label: "48h response guarantee" },
                { icon: Lock, label: "NDA on request" },
                { icon: Rocket, label: "MVP in 8–12 weeks" },
                { icon: ShieldCheck, label: "Swedish venture studio" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-accent-light" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Can Build */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">What you can build with us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {buildTypes.map((item, i) => (
                <div key={i} className="card-elevated group text-center p-5 hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intake Form */}
        <section ref={formRef} className="py-20 px-6 bg-background scroll-mt-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Brief Us On Your Project</h2>
              <p className="text-muted-foreground">Fill in what you know. Don't worry about what you don't — we'll figure it out together.</p>
            </div>

            {/* Progress bar */}
            <div className="flex items-center justify-center gap-2 mb-10">
              {["About You", "Your Project", "Files & Submit"].map((label, i) => (
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
                      <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <input
                        {...register("fullName", { required: "Full name is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your full name"
                      />
                      {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Company / Project Name</label>
                      <input
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Your Website URL</label>
                      <input
                        {...register("website")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="https://yoursite.com — or leave blank"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Country / Location</label>
                      <input
                        {...register("country")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Sweden"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Platform Type *</label>
                      <div className="flex flex-wrap gap-2">
                        {platformTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setValue("platformType", type)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedPlatformType === type ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      {errors.platformType && <p className="text-sm text-destructive mt-1">{errors.platformType.message}</p>}
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90">
                        Next <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 1 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Project Description *</label>
                      <textarea
                        {...register("description", { required: "Please describe your project" })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Describe your idea, problem you're solving, who uses it, and what it needs to do. The more detail the better."
                      />
                      {errors.description && <p className="text-sm text-destructive mt-1">{errors.description.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Target Audience</label>
                      <input
                        {...register("targetAudience")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Who are your users? B2B, B2C, both?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Key Features Needed</label>
                      <textarea
                        {...register("keyFeatures")}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="List the main features you need — e.g. user login, admin dashboard, payments, AI matching, API integrations…"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Do you have an existing website or platform?</label>
                      <div className="flex gap-3">
                        {["Yes", "No", "In progress"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setValue("hasExisting", opt)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedHasExisting === opt ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Stage of project</label>
                      <div className="flex flex-wrap gap-2">
                        {projectStages.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setValue("projectStage", s)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedStage === s ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Approximate budget range</label>
                      <select
                        {...register("budget")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Desired timeline</label>
                      <select
                        {...register("timeline")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90">
                        Next <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 2 && (
                  <div className="space-y-5 animate-fade-in">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Upload Supporting Materials (optional)</label>
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                      >
                        <input {...getInputProps()} />
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm text-foreground font-medium mb-1">
                          {isDragActive ? "Drop files here…" : "Drag & drop or click to browse"}
                        </p>
                        <p className="text-xs text-muted-foreground">PDF, DOCX, PNG, JPG, WEBP, ZIP — max 10 MB each, up to 10 files</p>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2 space-y-0.5">
                        <p>💡 Business plan or pitch deck</p>
                        <p>💡 Wireframes or design mockups</p>
                        <p>💡 Screenshots of reference sites</p>
                        <p>💡 Logo or brand assets</p>
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
                      <label className="block text-sm font-medium text-foreground mb-1.5">Additional notes / links</label>
                      <textarea
                        {...register("additionalNotes")}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Any reference websites, Figma links, Google Docs, or extra context"
                      />
                    </div>
                    {files.length > 0 && (
                      <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-sm text-foreground">
                        <p className="font-medium mb-1">📎 Files ready</p>
                        <p className="text-muted-foreground">Click the button below to open WhatsApp — your brief summary will be pre-filled. Then attach your files in the chat.</p>
                      </div>
                    )}
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                      <Button type="submit" className="bg-gold hover:bg-gold-light text-gold-foreground text-lg px-8">
                        <MessageCircle className="w-5 h-5 mr-2" /> Submit Brief → Send via WhatsApp
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">What happens next</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "You submit your brief", desc: "Takes ~5 minutes" },
                { step: "2", title: "We review within 24–48h", desc: "Ivan and the team analyse your brief" },
                { step: "3", title: "You receive back", desc: "A cost estimate + platform scope description, or a clickable mockup" },
                { step: "4", title: "We align & start", desc: "Once you're happy, we lock scope and begin production" },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {i < 3 && <div className="hidden lg:block absolute top-10 -right-3 w-6 border-t-2 border-dashed border-primary/30" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof / Portfolio */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Built for complexity. Proven across industries.</h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-10">
              <span>✅ Built 10+ complex platforms across 6 industries</span>
              <span>✅ Patents filed across 3 continents</span>
              <span>✅ Clients from Sweden, Spain, MENA, and North America</span>
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
                  <p className="text-xs text-muted-foreground mb-2">{project.desc}</p>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors mx-auto" />
                </a>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={lp("/angel-investor")} className="text-sm text-accent hover:text-accent-light font-medium underline underline-offset-2 transition-colors">
                Interested in equity instead of cash? →
              </Link>
              <Link to={lp("/configure")} className="text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors">
                Configure your platform →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What happens to my uploaded files?", a: "They are sent securely to our production team. We never share your files with third parties. NDA available on request." },
                { q: "Do I need a finished idea to submit?", a: "No. Many of our best projects started with a rough concept. Submit what you have." },
                { q: "How do you respond?", a: "Via email and/or WhatsApp within 48 hours with a cost estimate or mockup." },
                { q: "Can I request an equity deal instead of paying?", a: "Yes — see our Build-for-Equity model." },
                { q: "What does it cost?", a: "Depends entirely on scope. Typical MVPs range from €8,000–€40,000. We'll give you an honest estimate after reviewing your brief." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build something great?</h2>
            <p className="text-white/70 mb-8 text-lg">Submit your brief in 5 minutes. We'll respond within 48 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-gold-foreground" onClick={scrollToForm}>
                Submit Your Brief <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to={lp("/configure")}>
                  Configure my platform <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:ivan.daza@ravolution.se" target="_blank" rel="noopener noreferrer">
                  Book discovery call
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
