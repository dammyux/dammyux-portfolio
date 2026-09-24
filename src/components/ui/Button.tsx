import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "brandGlow";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      children,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-brand hover:text-neutral-950 dark:hover:bg-brand dark:hover:text-neutral-950 shadow-sm",
      secondary:
        "bg-neutral-200/80 dark:bg-white/[0.08] text-neutral-800 dark:text-white hover:bg-neutral-300 dark:hover:bg-white/[0.14] border border-neutral-300/60 dark:border-white/[0.1]",
      outline:
        "bg-transparent text-neutral-800 dark:text-white border border-neutral-300 dark:border-white/20 hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand",
      ghost:
        "bg-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.05]",
      brandGlow:
        "bg-brand text-neutral-950 font-bold hover:bg-brand/90 shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:shadow-[0_0_35px_rgba(0,255,135,0.6)] border border-brand/50",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="inline-flex transition-transform group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex transition-transform group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (isExternal) {
        return (
          <a
            href={href}
            target={target || "_blank"}
            rel={rel || "noopener noreferrer"}
            className={cn("group", combinedClassName)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={cn("group", combinedClassName)}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cn("group", combinedClassName)} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
