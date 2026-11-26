import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProject, decideRecommendation, getAdminOverview, inviteUser,
  revokeInvitation, revokeMembership, setMembership, updateProject,
} from "@/lib/network/network.functions";
import { isAllowedProjectUrl, projectRoles, type ProjectRole } from "@/lib/network/validation";
import { NetworkShell, btn, field, nb } from "@/components/network/NetworkShell";

export const Route = createFileRoute("/_authenticated/network_/admin")({
  head: () => ({
    meta: [
      { title: "Network administration — Ravolution AB" },
      { name: "description", content: "Ravolution AB network administration: project registry, invitations, roles, audit log and capability proposals." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Network administration — Ravolution AB" },
      { property: "og:description", content: "Administer the Ravolution AB project network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Admin,
});

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="edit-label text-[hsl(var(--accent-edit))] mt-14 mb-4">{children}</h2>
);

function Admin() {
  const { user } = Route.useRouteContext();
  const qc = useQueryClient();
  const q = useQuery({ queryKey: ["network", "admin"], queryFn: () => getAdminOverview(), retry: false });
  const [msg, setMsg] = useState<string | null>(null);
  const run = async (fn: () => Promise<unknown>, ok: string) => {
    setMsg(null);
    try { await fn(); setMsg(ok); await qc.invalidateQueries({ queryKey: ["network"] }); }
    catch (e) { setMsg(e instanceof Error ? e.message : "Something went wrong"); }
  };

  const [np, setNp] = useState({ slug: "", name: "", description: "", url: "https://" });
  const [inv, setInv] = useState<{ email: string; projectId: string; role: ProjectRole }>({ email: "", projectId: "", role: "viewer" });

  if (q.isError) return <NetworkShell email={user.email}><h1 className="font-display text-3xl">Not authorised</h1><p className="mt-4 text-[hsl(var(--text-secondary))]">This area is for network administrators.</p></NetworkShell>;
  const d = q.data;
  const projName = (id: string | null) => d?.projects.find((p) => p.id === id)?.name ?? "—";

  return (
    <NetworkShell email={user.email}>
      <Link to="/network" className="edit-label text-[hsl(var(--text-secondary))]">← Launcher</Link>
      <h1 className="font-display text-4xl font-bold uppercase mt-4">Network administration</h1>
      {msg && <p role="status" className="mt-6 border border-[hsl(var(--accent-edit))] p-3 text-sm">{msg}</p>}
      {!d ? <p className="mt-8">Loading…</p> : (<>
        <H2>Project registry</H2>
        <ul className={`border-t ${nb}`}>
          {d.projects.map((p) => (
            <ProjectRow key={p.id} p={p} onSave={(v) => run(() => updateProject({ data: v }), "Project saved")} />
          ))}
        </ul>
        <form className="grid gap-3 md:grid-cols-4 mt-6" onSubmit={(e) => { e.preventDefault(); run(() => createProject({ data: np }), "Project added"); }}>
          <input className={field} placeholder="slug" value={np.slug} onChange={(e) => setNp({ ...np, slug: e.target.value })} required />
          <input className={field} placeholder="Name" value={np.name} onChange={(e) => setNp({ ...np, name: e.target.value })} required />
          <input className={field} placeholder="https://name.ravolution.se/path" value={np.url} onChange={(e) => setNp({ ...np, url: e.target.value })} required />
          <button className={btn} disabled={!isAllowedProjectUrl(np.url)}>Add project</button>
          <input className={field + " md:col-span-4"} placeholder="Short description" value={np.description} onChange={(e) => setNp({ ...np, description: e.target.value })} />
        </form>

        <H2>Invite a person</H2>
        <form className="grid gap-3 md:grid-cols-4" onSubmit={(e) => { e.preventDefault(); run(() => inviteUser({ data: { ...inv, redirectTo: window.location.origin } }), "Invitation recorded"); }}>
          <input className={field} type="email" placeholder="email" value={inv.email} onChange={(e) => setInv({ ...inv, email: e.target.value })} required />
          <select className={field} value={inv.projectId} onChange={(e) => setInv({ ...inv, projectId: e.target.value })} required>
            <option value="">Project…</option>
            {d.projects.filter((p) => p.status === "active").map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <select className={field} value={inv.role} onChange={(e) => setInv({ ...inv, role: e.target.value as ProjectRole })}>
            {projectRoles.map((r) => <option key={r}>{r}</option>)}
          </select>
          <button className={btn}>Invite</button>
        </form>
        <ul className="mt-4 text-sm">
          {d.invites.map((i) => (
            <li key={i.id} className={`flex justify-between border-b ${nb} py-2`}>
              <span>{i.email} · {projName(i.project_id)} · {i.role} · <em>{i.status}</em></span>
              {i.status === "pending" && <button className="underline" onClick={() => run(() => revokeInvitation({ data: { id: i.id } }), "Invitation revoked")}>Revoke</button>}
            </li>
          ))}
        </ul>

        <H2>Members and roles</H2>
        <ul className="text-sm">
          {d.members.map((m) => (
            <li key={m.project_id + m.user_id} className={`flex flex-wrap items-center justify-between gap-2 border-b ${nb} py-2`}>
              <span>{m.email} · {projName(m.project_id)}</span>
              <span className="flex gap-3 items-center">
                <select className={field + " w-auto"} value={m.role} onChange={(e) => run(() => setMembership({ data: { projectId: m.project_id, userId: m.user_id, role: e.target.value as ProjectRole } }), "Role updated")}>
                  {projectRoles.map((r) => <option key={r}>{r}</option>)}
                </select>
                <button className="underline" onClick={() => run(() => revokeMembership({ data: { projectId: m.project_id, userId: m.user_id } }), "Access revoked")}>Revoke</button>
              </span>
            </li>
          ))}
          {d.members.length === 0 && <li className="text-[hsl(var(--text-secondary))]">No project members yet. Network administrators see every project.</li>}
        </ul>

        <H2>Capability recommendations</H2>
        <p className="text-sm text-[hsl(var(--text-secondary))] mb-3">Accepting only records your approval. Nothing is deployed or shared between projects automatically.</p>
        <ul className="text-sm">
          {d.recommendations.map((r) => {
            const c = d.capabilities.find((x) => x.id === r.capability_id);
            return (
              <li key={r.id} className={`border-b ${nb} py-3`}>
                <strong>{c?.name}</strong> ({c?.kind}, v{c?.version}, from {projName(c?.source_project_id ?? null)}) → {projName(r.target_project_id)}
                <div>Reason: {r.reason}</div><div>Benefit: {r.expected_benefit}</div><div>Risks: {r.risks}</div>
                {r.status === "proposed" ? (
                  <span className="flex gap-4 mt-2">
                    <button className="underline" onClick={() => run(() => decideRecommendation({ data: { id: r.id, decision: "accepted" } }), "Accepted")}>Accept</button>
                    <button className="underline" onClick={() => run(() => decideRecommendation({ data: { id: r.id, decision: "dismissed" } }), "Dismissed")}>Dismiss</button>
                  </span>
                ) : <em>{r.status}</em>}
              </li>
            );
          })}
          {d.recommendations.length === 0 && <li className="text-[hsl(var(--text-secondary))]">No proposals yet.</li>}
        </ul>

        <H2>Audit log (latest 50)</H2>
        <ul className="font-mono text-xs">
          {d.audit.map((a) => <li key={a.id} className={`border-b ${nb} py-1`}>{new Date(a.created_at).toISOString().slice(0, 16)} · {a.action} · {a.entity} · {a.entity_id} · {a.actor ?? "system"}</li>)}
        </ul>
      </>)}
    </NetworkShell>
  );
}

type P = { id: string; slug: string; name: string; description: string; url: string; status: "active" | "archived" };
function ProjectRow({ p, onSave }: { p: P; onSave: (v: P) => void }) {
  const [v, setV] = useState(p);
  return (
    <li className={`grid gap-2 md:grid-cols-[1fr_2fr_auto_auto] items-center border-b ${nb} py-3`}>
      <input className={field} value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} aria-label="Name" />
      <input className={field} value={v.url} onChange={(e) => setV({ ...v, url: e.target.value })} aria-label="Address" />
      <button className="underline text-sm" onClick={() => onSave({ ...v, status: v.status === "active" ? "archived" : "active" })}>
        {v.status === "active" ? "Archive" : "Restore"}
      </button>
      <button className={btn} disabled={!isAllowedProjectUrl(v.url)} onClick={() => onSave(v)}>Save</button>
    </li>
  );
}
