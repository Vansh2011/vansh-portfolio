import { cn } from "@/lib/cn";

/** Small pulsing dot used for "available" and "live" states. */
export function StatusDot({ size = 8, className }: { size?: number; className?: string }) {
  return (
    <span aria-hidden="true" className={cn("relative inline-block flex-none", className)} style={{ width: size, height: size }}>
      <span className="absolute inset-0 animate-ping-soft rounded-full bg-accent" />
      <span className="absolute inset-0 rounded-full bg-accent" />
    </span>
  );
}
