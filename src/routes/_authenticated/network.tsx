import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getMyNetwork } from "@/lib/network/network.functions";
import { NetworkShell, nb } from "@/components/network/NetworkShell";

export const Route = createFileRoute("/_authenticated/network")({
  head: () => ({
    meta: [
      { title: "Projects — TheCreator by Ravolution AB" },
      { name: "description", content: "TheCreator by Ravolution AB: open the subprojects you have been given access to." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Projects — TheCreator by Ravolution AB" },
      { property: "og:description", content: "Open the TheCreator subprojects you have access to." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Launcher,
});

function Launcher() {
  const { user } = Route.useRouteContext();
  const q = useQuery({ queryKey: ["network", "mine", user.id], queryFn: () => getMyNetwork() });

  return (
    <NetworkShell email={user.email}>
      <p className="edit-label text-[hsl(var(--accent-edit))] mb-4">TheCreator platform</p>
      <h1 className="font-display text-4xl font-bold uppercase mb-10">Your projects</h1>
      {q.isPending && <p className="text-[hsl(var(--text-secondary))]">Loading…</p>}
      {q.isError && <p role="alert">Could not load your projects. {String(q.error.message)}</p>}
      {q.data && q.data.projects.length === 0 && (
        <p className="text-[hsl(var(--text-secondary))]">You don't have access to any project yet. Ask the owner for an invitation.</p>
      )}
      <ul className={`border-t ${nb}`}>
        {q.data?.projects.map((p) => (
          <li key={p.id} className={`border-b ${nb}`}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 py-5 group">
              <span>
                <span className="font-display text-xl font-semibold group-hover:text-[hsl(var(--accent-edit))]">{p.name}</span>
                <span className="block text-sm text-[hsl(var(--text-secondary))]">{p.description}</span>
              </span>
              <span className="edit-label text-[hsl(var(--text-secondary))]">{p.role} · Open ↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-[hsl(var(--text-secondary))]">
        Each portal still has its own sign-in until shared single sign-on is enabled.
      </p>
      {q.data?.isAdmin && (
        <Link to="/network/admin" className="edit-label inline-block mt-10 text-[hsl(var(--accent-edit))] underline">
          TheCreator administration →
        </Link>
      )}
    </NetworkShell>
  );
}
