import { z } from "zod";

/** Only HTTPS subdomains of ravolution.se may be registered as project origins. */
export const ALLOWED_PARENT_DOMAIN = "ravolution.se";

export function isAllowedProjectUrl(value: string): boolean {
  let u: URL;
  try {
    u = new URL(value);
  } catch {
    return false;
  }
  if (u.protocol !== "https:" || u.username || u.password || u.port) return false;
  if (u.search || u.hash) return false;
  const host = u.hostname.toLowerCase();
  if (!host.endsWith("." + ALLOWED_PARENT_DOMAIN)) return false;
  const sub = host.slice(0, -(ALLOWED_PARENT_DOMAIN.length + 1));
  return /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(sub);
}

export const projectRoles = ["viewer", "editor", "admin"] as const;
export type ProjectRole = (typeof projectRoles)[number];

export const projectInputSchema = z.object({
  slug: z.string().regex(/^[a-z0-9][a-z0-9-]{1,40}$/),
  name: z.string().trim().min(1).max(80),
  description: z.string().trim().max(300),
  url: z.string().refine(isAllowedProjectUrl, "Must be an https://<name>.ravolution.se address"),
});

export const projectUpdateSchema = projectInputSchema.extend({
  id: z.string().uuid(),
  status: z.enum(["active", "archived"]),
});

export const inviteSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  projectId: z.string().uuid(),
  role: z.enum(projectRoles),
});

export const membershipSchema = z.object({
  projectId: z.string().uuid(),
  userId: z.string().uuid(),
  role: z.enum(projectRoles),
});
