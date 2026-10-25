import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TagProps = {
  children: ReactNode;
  /** pill-accent: status badge · pill: outlined category · tech: stack label */
  variant?: "pill-accent" | "pill" | "tech";
  className?: string;
};

const variants = {
  "pill-accent": "rounded-full bg-accent-soft px-2.5 py-1 text-accent",
  pill: "rounded-full border border-line-strong px-2.5 py-1 text-fg-muted",
  tech: "rounded-md bg-raised px-2.5 py-1.5 text-fg-muted",
};

export function Tag({ children, variant = "tech", className }: TagProps) {
  return <span className={cn("inline-flex font-mono text-xs", variants[variant], className)}>{children}</span>;
}
