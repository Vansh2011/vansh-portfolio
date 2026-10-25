import type { TerminalLine } from "@/lib/data";
import { cn } from "@/lib/cn";

/** Fake terminal whose lines "type" in one after another. */
export function TerminalCard({ lines, title = "now.log", className }: { lines: TerminalLine[]; title?: string; className?: string }) {
  const startDelay = 0.9;
  const step = 0.38;

  return (
    <div
      className={cn(
        "min-w-0 overflow-hidden rounded-[14px] border border-line bg-surface font-mono text-[13px] leading-[1.9] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 text-xs text-fg-subtle">{title}</span>
      </div>
      <div className="overflow-x-auto px-5.5 py-5 text-fg-muted">
        {lines.map((line, i) => {
          const delay = { animationDelay: `${startDelay + i * step}s` };
          const gap = line.kind === "cmd" && i > 0 ? "pt-2.5" : "";
          if (line.kind === "cmd") {
            return (
              <div key={i} className={cn("animate-type", gap)} style={delay}>
                <span className="text-accent">$</span> {line.text}
              </div>
            );
          }
          if (line.kind === "check") {
            return (
              <div key={i} className="animate-type pl-4.5 text-fg" style={delay}>
                {line.text} <span className="text-accent">✓</span>
              </div>
            );
          }
          return (
            <div key={i} className={cn("animate-type", line.text.startsWith("→") ? "" : "text-fg")} style={delay}>
              {line.text}
              {line.muted && <span className="text-fg-subtle"> {line.muted}</span>}
              {line.accent && <span className="text-accent"> {line.accent}</span>}
            </div>
          );
        })}
        <div className="animate-type pt-2.5" style={{ animationDelay: `${startDelay + lines.length * step}s` }}>
          <span className="text-accent">$</span>{" "}
          <span className="inline-block h-[15px] w-2 animate-blink bg-fg align-middle" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
