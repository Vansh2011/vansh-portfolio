"use client";

import { useRef } from "react";
import { StatItem } from "@/components/molecules/StatItem";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";
import { stats } from "@/lib/data";

/** Key numbers that count up the first time they scroll into view. */
export function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.4 });
  const p = useCountUp(inView);

  return (
    <section ref={ref} aria-label="Highlights in numbers" className="reveal flex flex-wrap border-y border-line">
      {stats.map((s) => {
        const n = Math.round(s.from + (s.to - s.from) * p);
        // "45% → 87%" shows its own prefix, so the count starts from `from`.
        const value = `${s.prefix ?? ""}${n}${s.suffix ?? ""}`;
        return <StatItem key={s.label} value={value} label={s.label} />;
      })}
    </section>
  );
}
