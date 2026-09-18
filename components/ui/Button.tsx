import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-transform duration-150 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    outline: "border border-brand text-brand hover:bg-brand-light",
    ghost: "text-brand hover:bg-brand-light",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm sm:text-base",
    lg: "px-8 py-3 text-base sm:text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
