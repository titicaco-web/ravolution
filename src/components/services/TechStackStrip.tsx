const techs = [
  "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL",
  "Stripe", "OpenAI", "Figma", "Tailwind CSS", "GitHub", "Vercel", "Python",
];

const TechStackStrip = () => {
  return (
    <section className="py-14 px-6 bg-secondary border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Built With Modern Tools</h2>
          <p className="text-muted-foreground">Not templates. Real engineering.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {techs.map((t) => (
            <span
              key={t}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg border border-border hover:border-primary/30 bg-card"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground">
          We select the best stack for each project. No lock-in, no proprietary frameworks.
        </p>
      </div>
    </section>
  );
};

export default TechStackStrip;
