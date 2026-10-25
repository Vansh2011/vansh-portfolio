import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";

/** Numbered section of a case study: label, heading, body copy and optional extras. */
export function CaseSection({ eyebrow, title, body, children }: { eyebrow: string; title: string; body?: string; children?: ReactNode }) {
  return (
    <section className="reveal flex flex-col gap-4 pt-6 pb-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading level="card">{title}</Heading>
      {body && <p className="m-0 text-[17px] leading-[1.7] text-fg-muted">{body}</p>}
      {children && <div className="flex flex-col gap-6 pt-2">{children}</div>}
    </section>
  );
}
