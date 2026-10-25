import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centers content with the site's max width and side gutters. */
export function Container({
  children,
  narrow = false,
  className,
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full px-5", narrow ? "max-w-[880px]" : "max-w-[1120px]", className)}>{children}</div>;
}
