"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      /* clipboard blocked: still show feedback so the click feels handled */
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border bg-transparent px-4 font-mono text-[13px] transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5",
        copied ? "border-accent text-accent" : "border-line-strong text-fg-muted hover:text-fg",
      )}
    >
      <Icon name={copied ? "check" : "copy"} size={14} strokeWidth={2} />
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
