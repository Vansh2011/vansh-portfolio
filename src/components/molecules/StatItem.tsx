/** One number + label in the stats strip. */
export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-[1_1_160px] flex-col gap-1.5 px-5 py-7 transition-colors duration-300 hover:bg-surface">
      <div className="text-[clamp(28px,3.6vw,36px)] font-semibold tracking-[-0.02em] tabular-nums">{value}</div>
      <div className="font-mono text-xs text-fg-subtle">{label}</div>
    </div>
  );
}
