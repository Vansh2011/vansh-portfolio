import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary";
type Size = "md" | "sm";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Renders a link when set; internal paths use next/link. */
  href?: string;
  icon?: IconName;
  /** Show a sliding arrow after the label. */
  trailingArrow?: boolean;
  /** Open the link in a new browser tab. */
  newTab?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  type?: "button" | "submit";
};

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink font-semibold hover:shadow-[0_10px_30px_-12px_var(--accent)]",
  secondary: "border border-line-strong text-fg font-medium hover:border-line-hover hover:text-fg",
};

const sizes: Record<Size, string> = {
  md: "min-h-12 px-5 text-[15px]",
  sm: "min-h-11 px-4 text-sm",
};

export function Button({
  children,
  variant = "secondary",
  size = "md",
  href,
  icon,
  trailingArrow,
  newTab,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-lg transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {icon && <Icon name={icon} size={size === "md" ? 18 : 16} />}
      <span>{children}</span>
      {trailingArrow && (
        <Icon name="arrowRight" size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (!href) {
    return (
      <button type={type} onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  const isInternal = href.startsWith("/") && !newTab;
  if (isInternal) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  const openInNewTab = newTab || href.startsWith("http");
  return (
    <a
      href={href}
      onClick={onClick}
      className={classes}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {content}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
