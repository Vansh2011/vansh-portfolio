import Link from "next/link";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  label: string;
  index?: string;
  /** "inline" for the desktop bar, "stacked" for the mobile menu. */
  variant?: "inline" | "stacked";
  onClick?: () => void;
};

export function NavLink({ href, label, index, variant = "inline", onClick }: NavLinkProps) {
  if (variant === "stacked") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="flex min-h-13 items-center justify-between border-b border-line text-lg text-fg hover:text-accent"
      >
        <span>{label}</span>
        {index && <span className="font-mono text-xs text-fg-subtle">{index}</span>}
      </Link>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={cn("nav-underline text-sm text-fg-muted hover:text-fg")}>
      {label}
    </Link>
  );
}
