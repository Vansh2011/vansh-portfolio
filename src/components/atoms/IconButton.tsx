import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: IconName;
  /** Required: icon-only buttons need an accessible name. */
  label: string;
  shape?: "square" | "circle";
};

export function IconButton({ icon, label, shape = "square", className, type = "button", ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "inline-flex size-11 cursor-pointer items-center justify-center border border-line-strong bg-transparent text-fg transition-[transform,border-color] duration-200 hover:border-line-hover",
        shape === "circle" ? "rounded-full" : "rounded-[10px]",
        className,
      )}
      {...rest}
    >
      <Icon name={icon} size={20} strokeWidth={2} />
    </button>
  );
}
