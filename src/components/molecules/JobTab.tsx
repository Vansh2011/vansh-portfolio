import type { KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

type JobTabProps = {
  id: string;
  panelId: string;
  company: string;
  meta: string;
  selected: boolean;
  onSelect: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
};

export function JobTab({ id, panelId, company, meta, selected, onSelect, onKeyDown }: JobTabProps) {
  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={panelId}
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className={cn(
        "flex min-h-15 cursor-pointer flex-col gap-1 rounded-[10px] border px-4.5 py-3 text-left transition-colors duration-200",
        selected ? "border-accent bg-surface text-fg" : "border-line bg-transparent text-fg-muted hover:border-line-hover hover:text-fg",
      )}
    >
      <span className="text-[15px] font-semibold">{company}</span>
      <span className="font-mono text-xs text-fg-subtle">{meta}</span>
    </button>
  );
}
