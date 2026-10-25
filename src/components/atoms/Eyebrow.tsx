import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Monospace label that sits above a heading, e.g. "01 / selected work". */
export function Eyebrow({ children, muted = false, className }: { children: ReactNode; muted?: boolean; className?: string }) {
  return <p className={cn("m-0 font-mono text-[13px]", muted ? "text-fg-subtle" : "text-accent", className)}>{children}</p>;
}
