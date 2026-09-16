import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { EditorialShell, Reveal } from "@/components/editorial/EditorialLayout";
import { useLangPath } from "@/hooks/use-lang-path";

const DEMO_URL = "https://convendum-bizmeet.lovable.app";

const BizMeetDemoPage = () => {
  const lp = useLangPath();

  return (
    <>
      <Helmet>
        <title>BizMeet™ Live Demo | White-Label Community Platform — Ravolution AB</title>
        <meta
          name="description"
          content="Explore a live BizMeet demo: AI matchmaking, 1-to-1 meetings, events and community — all under your own brand."
        />
        <link rel="canonical" href="https://ravolution.se/en/bizmeet/demo" />
        <meta property="og:title" content="BizMeet™ Live Demo — Ravolution AB" />
        <meta
          property="og:description"
          content="Explore a live BizMeet demo: matchmaking, meetings, events and community under your own brand."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravolution.se/en/bizmeet/demo" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <EditorialShell>
        <section className="pt-36 pb-10 px-6 md:px-12">
          <div className="edit-container">
            <Reveal>
              <Link to={lp("/bizmeet")} className="edit-label text-white/50 edit-link">
                ← BizMeet™
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="edit-label text-white/40 block mt-8">Live Demo — Convendum</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="edit-h2 text-white font-bold mt-4 max-w-[26ch]">
                BizMeet™ running as a live community platform.
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="edit-body text-white/70 mt-6 max-w-[62ch]">
                This is a working demo environment. Move through events, member profiles, matchmaking and meeting
                booking exactly as your members would — the same system, carrying your own brand.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[hsl(var(--accent-edit))] text-black font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:bg-white"
                >
                  <span>Open Demo in New Tab</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link to={`${lp("/contact")}?project=bizmeet`} className="edit-btn inline-flex items-center gap-3">
                  <span>Request a Guided Walkthrough</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 px-6 md:px-12">
          <div className="edit-container">
            <div className="border border-white/15 bg-[hsl(var(--surface))]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="edit-label text-white/40">convendum-bizmeet.lovable.app</span>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edit-label text-[hsl(var(--accent-edit))] edit-link"
                >
                  Full screen ↗
                </a>
              </div>
              <iframe
                src={DEMO_URL}
                title="BizMeet live demo"
                loading="lazy"
                className="w-full h-[80vh] min-h-[560px] border-0 bg-white"
              />
            </div>
            <p className="edit-label text-white/35 mt-4">
              If the demo does not load inside this frame, open it in a new tab.
            </p>
          </div>
        </section>
      </EditorialShell>
    </>
  );
};

export default BizMeetDemoPage;
