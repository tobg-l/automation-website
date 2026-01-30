import { HTMLAttributes, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  icon?: LucideIcon;
}

export default function IconContainer({
  children,
  icon: Icon,
  className,
  ...props
}: IconContainerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-white/5",
        className
      )}
      style={{
        width: "64px",
        height: "64px",
      }}
      role="img"
      aria-hidden="true"
      {...props}
    >
      {Icon ? (
        <Icon size={48} className="text-foreground-white" />
      ) : (
        <div style={{ fontSize: "48px", lineHeight: 1 }}>
          {children}
        </div>
      )}
    </div>
  );
}

