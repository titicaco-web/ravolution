interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export default function Marquee({ items, speed = 35, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`rav-marquee ${className}`}>
      <div
        className="rav-marquee__track edit-label"
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="rav-marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
