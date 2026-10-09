import { z } from "zod";

export const platformOptions = ["Singuistic", "VoiceProtector", "iApply", "BizMeet", "CarbonX", "ToxInside", "EyeHealthIntel", "CommunicaringSchool", "xPortMatch", "Pratis", "Okwerin", "AI Magnifica", "Ravolution AB", "Not sure yet"] as const;
export const supportOptions = ["Sales & GTM", "Tech build", "IP & patents", "Branding", "Strategy & business dev", "All of it"] as const;
const safeText = (max: number) => z.string().trim().max(max).refine(value => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value), "Remove unsupported characters.");
export const invitationSchema = z.object({
  interest: z.enum(["invest", "partner", "other"]),
  platforms: z.array(z.enum(platformOptions)).max(platformOptions.length),
  support: z.array(z.enum(supportOptions)).max(supportOptions.length),
  message: safeText(3000),
  deck: z.string().trim().max(2048).refine(value => {
    if (!value) return true;
    try { return ["https:", "http:"].includes(new URL(value).protocol); } catch { return false; }
  }, "Use a valid http or https URL."),
  name: safeText(100).refine(value => value.length > 0, "Please add your name."),
  company: safeText(150),
  email: z.string().trim().email("Please add a valid email.").max(255),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the privacy terms." }) }),
  language: z.enum(["en", "sv", "es"]),
}).strict();
export type InvitationInput = z.infer<typeof invitationSchema>;