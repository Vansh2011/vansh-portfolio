import { cn } from "@/lib/cn";

/** A single skill. Dashed outline marks something still being learned. */
export function SkillChip({ label, dashed = false }: { label: string; dashed?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-lg border px-3 py-2 text-sm transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent",
        dashed ? "border-dashed border-line-hover" : "border-line-strong",
      )}
    >
      {label}
    </span>
  );
}
