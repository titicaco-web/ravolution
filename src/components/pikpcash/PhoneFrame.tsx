interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  glow?: boolean;
}

/** Minimal dark phone frame for PikpCash app screenshots. Never stretches the image. */
const PhoneFrame = ({ src, alt, className = "", glow = false }: PhoneFrameProps) => (
  <div className={`relative mx-auto w-full max-w-[300px] ${className}`}>
    {glow && (
      <div
        aria-hidden
        className="absolute -inset-10 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4FC8A4 0%, transparent 70%)" }}
      />
    )}
    <div className="relative rounded-[40px] border border-[#1C2942] bg-[#0C1424] p-2 shadow-2xl">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-[32px] object-contain"
      />
    </div>
  </div>
);

export default PhoneFrame;
