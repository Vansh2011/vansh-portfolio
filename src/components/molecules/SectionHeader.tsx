import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  /** Optional note shown on the right on wide screens. */
  aside?: ReactNode;
  as?: "h1" | "h2";
};

export function SectionHeader({ eyebrow, title, aside, as = "h2" }: SectionHeaderProps) {
  return (
    <div className="reveal flex flex-wrap items-end justify-between gap-4">
      <div className="flex flex-col gap-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as={as}>{title}</Heading>
      </div>
      {aside && <div className="max-w-sm text-sm leading-relaxed text-fg-subtle">{aside}</div>}
    </div>
  );
}
