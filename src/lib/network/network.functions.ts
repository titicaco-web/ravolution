import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  inviteSchema,
  membershipSchema,
  projectInputSchema,
  projectUpdateSchema,
} from "./validation";

function safeLoginUrl(origin: string): string {
  const u = new URL(origin);
  const h = u.hostname;
  const ok = u.protocol === "https:" && (h === "ravolution.se" || h === "www.ravolution.se" || h.endsWith(".lovable.app"));
  const local = u.protocol === "http:" && h === "localhost";
  return new URL("/login", ok || local ? u.origin : "https://ravolution.se").href;
}

type Ctx = { supabase: any; userId: string };

async function assertAdmin(ctx: Ctx) {
  const { data, error } = await ctx.supabase.rpc("is_network_admin", { _user_id: ctx.userId });
  if (error || data !== true) throw new Error("Forbidden");
}

/** Projects the caller may open (RLS: memberships, or all for network admins). */
export const getMyNetwork = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const sb = context.supabase;
    const [{ data: isAdmin }, { data: projects, error }, { data: memberships }] = await Promise.all([
      sb.rpc("is_network_admin", { _user_id: context.userId }),
      sb.from("network_projects").select("id, slug, name, description, url, status").eq("status", "active").order("name"),
      sb.from("network_project_members").select("project_id, role").eq("user_id", context.userId),
    ]);
    if (error) throw new Error(error.message);
    const roleBy = new Map((memberships ?? []).map((m) => [m.project_id, m.role]));
    return {
      isAdmin: isAdmin === true,
      projects: (projects ?? []).map((p) => ({ ...p, role: roleBy.get(p.id) ?? (isAdmin ? "admin" : null) })),
    };
  });

export const getAdminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const sb = context.supabase;
    const [projects, members, invites, audit, caps, recs] = await Promise.all([
      sb.from("network_projects").select("*").order("name"),
      sb.from("network_project_members").select("*"),
      sb.from("network_invitations").select("*").order("created_at", { ascending: false }).limit(100),
      sb.from("network_audit_log").select("id, actor, action, entity, entity_id, created_at").order("id", { ascending: false }).limit(50),
      sb.from("network_capabilities").select("*").order("created_at", { ascending: false }),
      sb.from("network_recommendations").select("*").order("created_at", { ascending: false }),
    ]);
    // Resolve member emails (admin-only, after role check).
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const ids = [...new Set((members.data ?? []).map((m) => m.user_id))];
    const emails: Record<string, string> = {};
    for (const id of ids) {
      const { data } = await supabaseAdmin.auth.admin.getUserById(id);
      if (data.user?.email) emails[id] = data.user.email;
    }
    return {
      projects: projects.data ?? [],
      members: (members.data ?? []).map((m) => ({ ...m, email: emails[m.user_id] ?? m.user_id })),
      invites: invites.data ?? [],
      audit: audit.data ?? [],
      capabilities: caps.data ?? [],
      recommendations: recs.data ?? [],
    };
  });

export const createProject = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => projectInputSchema.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("network_projects").insert(data);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const updateProject = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => projectUpdateSchema.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { id, ...rest } = data;
    const { error } = await context.supabase
      .from("network_projects")
      .update({ ...rest, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/** Invite-only: records the invitation; existing accounts get the role directly, new ones get an invite email. */
export const inviteUser = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => inviteSchema.extend({ redirectTo: z.string().url() }).parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("network_invitations").insert({
      email: data.email, project_id: data.projectId, role: data.role, invited_by: context.userId,
    });
    if (error) throw new Error(error.message);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const redirect = safeLoginUrl(data.redirectTo);
    const { error: inviteErr } = await supabaseAdmin.auth.admin.inviteUserByEmail(data.email, { redirectTo: redirect });
    if (inviteErr) {
      // Account already exists: grant membership directly.
      const { data: list } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
      const existing = list?.users.find((u) => u.email?.toLowerCase() === data.email);
      if (!existing) throw new Error(inviteErr.message);
      await context.supabase.from("network_project_members").upsert({
        project_id: data.projectId, user_id: existing.id, role: data.role,
      });
      await context.supabase.from("network_invitations").update({ status: "accepted" })
        .eq("email", data.email).eq("status", "pending");
      return { ok: true, mode: "granted" as const };
    }
    return { ok: true, mode: "invited" as const };
  });

export const revokeInvitation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => z.object({ id: z.string().uuid() }).parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("network_invitations").update({ status: "revoked" }).eq("id", data.id).eq("status", "pending");
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const setMembership = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => membershipSchema.parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("network_project_members")
      .upsert({ project_id: data.projectId, user_id: data.userId, role: data.role });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const revokeMembership = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => z.object({ projectId: z.string().uuid(), userId: z.string().uuid() }).parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("network_project_members").delete()
      .eq("project_id", data.projectId).eq("user_id", data.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const decideRecommendation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((i: unknown) => z.object({ id: z.string().uuid(), decision: z.enum(["accepted", "dismissed"]) }).parse(i))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    // Decision is recorded only; nothing is deployed or shared automatically.
    const { error } = await context.supabase.from("network_recommendations")
      .update({ status: data.decision, decided_by: context.userId, decided_at: new Date().toISOString() })
      .eq("id", data.id).eq("status", "proposed");
    if (error) throw new Error(error.message);
    return { ok: true };
  });

/**
 * Owner bootstrap: with public signup disabled, the owner account is created only
 * by an invite email sent to the fixed bootstrap address stored in the database,
 * and only while no account exists for it. Admin rights are granted by a database
 * trigger after the email is verified. Always returns the same response.
 */
export const requestSignInHelp = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) => z.object({ email: z.string().trim().toLowerCase().email().max(254), origin: z.string().url() }).parse(i))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row } = await supabaseAdmin.from("network_owner_bootstrap").select("email").eq("email", data.email).maybeSingle();
    if (row) {
      const { data: list } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
      const exists = list?.users.some((u) => u.email?.toLowerCase() === data.email);
      if (!exists) {
        await supabaseAdmin.auth.admin.inviteUserByEmail(data.email, { redirectTo: safeLoginUrl(data.origin) });
      }
    }
    return { ok: true };
  });
