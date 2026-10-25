import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Level = "display" | "section" | "card" | "sub";

const styles: Record<Level, string> = {
  display: "text-[clamp(38px,6.4vw,60px)] leading-[1.08] tracking-[-0.03em]",
  section: "text-[clamp(30px,4.6vw,40px)] tracking-[-0.02em]",
  card: "text-[clamp(22px,3vw,30px)] leading-tight tracking-[-0.02em]",
  sub: "text-[19px]",
};

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  level?: Level;
  children: ReactNode;
  className?: string;
};

export function Heading({ as: Tag = "h2", level = "section", children, className }: HeadingProps) {
  return <Tag className={cn("m-0 font-semibold", styles[level], className)}>{children}</Tag>;
}
