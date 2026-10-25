import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Bar = { label: string; value: number; display: string; highlight?: boolean };

/** Before/after comparison bars that fill in as they scroll into view. */
export function BarChart({ bars, caption, footnote }: { bars: Bar[]; caption?: [string, string]; footnote?: ReactNode }) {
  return (
    <figure className="m-0 flex flex-col gap-3.5 rounded-xl border border-line bg-surface p-7">
      {caption && (
        <figcaption className="flex justify-between font-mono text-xs text-fg-subtle">
          <span>{caption[0]}</span>
          <span>{caption[1]}</span>
        </figcaption>
      )}
      {bars.map((bar) => (
        <div key={bar.label} className="flex items-center gap-4">
          <span className="flex-[0_0_64px] font-mono text-xs text-fg-subtle">{bar.label}</span>
          <div className="h-3.5 flex-1 rounded bg-raised">
            <div
              className={cn("bar-fill h-full rounded", bar.highlight ? "bg-accent" : "bg-line-hover")}
              style={{ width: `${bar.value}%` }}
            />
          </div>
          <span className={cn("flex-[0_0_48px] text-right text-sm", bar.highlight ? "text-fg" : "text-fg-muted")}>{bar.display}</span>
        </div>
      ))}
      {footnote && <p className="m-0 pt-1 text-sm text-fg-muted">{footnote}</p>}
    </figure>
  );
}
