import { ReactNode } from "react";
import Badge from "./ui/Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ComponentType<{ size?: number; className?: string }>;
  heading: ReactNode;
  subheading?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  badge,
  badgeIcon: BadgeIcon,
  heading,
  subheading,
  className,
  align = "center",
}: SectionHeaderProps) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const badgeAlignments = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div className={cn("flex flex-col", alignments[align], className)}>
      {badge && (
        <div className={cn("flex mb-3", badgeAlignments[align])}>
          <Badge icon={BadgeIcon}>{badge}</Badge>
        </div>
      )}
      
          <h2 
            className="text-gradient font-display font-bold mb-4" 
            id={heading && typeof heading === "string" ? heading.toLowerCase().replace(/\s+/g, "-") : undefined}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            {heading}
          </h2>
      
      {subheading && (
        <p className={cn("text-body text-foreground-light mb-4", align === "center" && "mx-auto", align === "left" && "mr-auto", align === "right" && "ml-auto", "max-w-2xl")}>
          {subheading}
        </p>
      )}
    </div>
  );
}

