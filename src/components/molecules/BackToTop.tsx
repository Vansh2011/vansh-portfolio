"use client";

import { IconButton } from "@/components/atoms/IconButton";
import { useScrolledPast } from "@/hooks/useScrolledPast";

export function BackToTop() {
  const visible = useScrolledPast(700);
  if (!visible) return null;

  return (
    <IconButton
      icon="arrowUp"
      label="Back to top"
      shape="circle"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-5 bottom-5 z-25 size-12 animate-drop bg-surface text-accent shadow-[0_16px_40px_-16px_rgba(0,0,0,0.9)] hover:-translate-y-0.5"
    />
  );
}
