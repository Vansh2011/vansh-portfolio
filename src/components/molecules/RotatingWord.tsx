"use client";

import { useEffect, useState } from "react";

/** Cycles through words, replaying the blur-up animation on each change. */
export function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="inline-block min-h-[1.1em] text-accent" aria-live="polite">
      <span key={index} className="inline-block animate-word">
        {words[index]}
      </span>
    </span>
  );
}
