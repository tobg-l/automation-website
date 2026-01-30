import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl p-6 md:p-8 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-white/20 hover:shadow-glow",
        className
      )}
      style={{
        background: "rgba(15, 15, 15, 0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

