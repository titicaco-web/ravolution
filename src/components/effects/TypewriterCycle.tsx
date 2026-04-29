import { useEffect, useRef, useState } from "react";

interface Props {
  words: string[];
  className?: string;
}

/**
 * Vanilla typewriter cycle with blinking cursor.
 * Respects prefers-reduced-motion (renders first word static).
 */
const TypewriterCycle = ({ words, className = "" }: Props) => {
  const [text, setText] = useState("");
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceRef.current) {
      setText(words[0] || "");
      return;
    }

    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: number;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const word = words[wordIdx];
      if (!deleting) {
        charIdx++;
        setText(word.slice(0, charIdx));
        if (charIdx >= word.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1400);
          return;
        }
        timer = window.setTimeout(tick, 90);
      } else {
        charIdx--;
        setText(word.slice(0, charIdx));
        if (charIdx <= 0) {
          deleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
        timer = window.setTimeout(tick, 55);
      }
    };
    timer = window.setTimeout(tick, 400);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [words]);

  return (
    <span className={className}>
      {text}
      <span className="tw-cursor" aria-hidden>|</span>
    </span>
  );
};

export default TypewriterCycle;
