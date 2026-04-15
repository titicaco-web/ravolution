import { Linkedin, Mail } from "lucide-react";
import ivanPhoto from "@/assets/ivan-daza.jpg";

const FounderBlock = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Who You'll Work With</h2>
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start hover:border-primary/20 transition-colors">
          <img
            src={ivanPhoto}
            alt="Ivan Daza — Founder & CEO, Ravolution AB"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover object-top shrink-0"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground">Ivan Daza</h3>
            <p className="text-muted-foreground mb-4">Founder & CEO, Ravolution AB</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Serial entrepreneur and inventor with 27 patents across education, recruitment, AI, and trade. 
              Builds complex platforms end-to-end — from architecture to patent protection. Based in Stockholm, 
              operating globally in English, Swedish, and Spanish.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              {["27 Patents", "343 Claims", "10+ Platforms", "6 Industries"].map((s) => (
                <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 bg-primary text-primary-foreground">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/ivandaza/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ivan.daza@ravolution.se"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderBlock;
