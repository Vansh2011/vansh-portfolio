"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  /** Makes the whole card a link. External URLs open in a new tab. */
  href?: string;
  className?: string;
  /** Lift + cursor spotlight on hover. */
  interactive?: boolean;
};

/** Surface container with an optional cursor-following spotlight. */
export function Card({ children, href, className, interactive = true }: CardProps) {
  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  const classes = cn(
    "group/card block rounded-2xl border border-line bg-surface text-fg",
    interactive &&
      "spot transition-[transform,border-color,box-shadow] duration-300 ease-out-soft hover:-translate-y-1.5 hover:border-line-hover hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] active:scale-[0.99]",
    className,
  );

  const handlers = interactive ? { onMouseMove } : {};

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...handlers}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...handlers}>
        {children}
      </a>
    );
  }
  return (
    <div className={classes} {...handlers}>
      {children}
    </div>
  );
}
