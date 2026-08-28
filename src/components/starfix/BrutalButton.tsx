import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "brand" | "outline" | "ink";

const base =
  "inline-flex items-center justify-center border-2 border-ink font-bold uppercase tracking-tight transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

const variants: Record<Variant, string> = {
  brand:
    "bg-brand text-brand-foreground shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
  outline: "bg-paper text-ink hover:bg-brand hover:text-brand-foreground",
  ink: "bg-ink text-paper hover:bg-brand hover:text-brand-foreground",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
};

export function BrutalButton({
  children,
  variant = "brand",
  size = "md",
  className = "",
  ...rest
}: Common & ComponentProps<"button">) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function BrutalLink({
  children,
  variant = "brand",
  size = "md",
  className = "",
  to,
  hash,
}: Common & { to: string; hash?: string }) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
