"use client";

import { useEffect, useRef } from "react";

/** Thin reading-progress bar. Driven by rAF instead of a CSS scroll timeline,
 *  which flickers on mobile when the browser toolbar resizes the viewport. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent will-change-transform"
    />
  );
}
