import { HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  icon?: LucideIcon;
}

export default function Badge({
  children,
  icon: Icon,
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full uppercase tracking-wider",
        "bg-white/5 border border-white/10 text-foreground-light",
        className
      )}
      style={{
        fontSize: "0.75rem",
        letterSpacing: "0.05em",
      }}
      {...props}
    >
      {Icon && <Icon size={14} aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
}

