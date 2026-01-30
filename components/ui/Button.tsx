import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  showArrow?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  showArrow = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-000 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-foreground-white text-black-000 hover:-translate-y-0.5 hover:shadow-lg",
    secondary: "bg-transparent border border-white/10 text-foreground-white hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg",
    outline: "bg-transparent border border-white/10 text-foreground-white hover:bg-white/5 hover:-translate-y-0.5 hover:shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-sm rounded-lg min-h-[44px]",
    md: variant === "primary" 
      ? "text-base rounded-xl min-h-[44px]" // Will use inline style for exact padding
      : "px-8 py-3.5 text-base rounded-xl min-h-[44px]",
    lg: "px-10 py-4 text-lg rounded-xl min-h-[48px]",
  };
  
  const primaryPadding = variant === "primary" && size === "md" 
    ? { padding: "0.875rem 2rem" }
    : {};

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

      return (
        <button
          className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
          )}
          style={primaryPadding}
          aria-label={props["aria-label"] || (typeof children === "string" ? children : undefined)}
          {...props}
        >
          {Icon && <Icon size={iconSizes[size]} className="mr-2" aria-hidden="true" />}
          {children}
          {showArrow && !Icon && (
            <ArrowRight size={iconSizes[size]} className="ml-2" aria-hidden="true" />
          )}
        </button>
      );
}

