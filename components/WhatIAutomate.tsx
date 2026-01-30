"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  BarChart,
  Users,
  FileText,
  MessageSquare,
  Zap,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./ui/Card";
import IconContainer from "./ui/IconContainer";

interface Category {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

const categories: Category[] = [
  {
    icon: BarChart,
    title: "Operations & Reporting",
    bullets: [
      "Automated weekly and monthly reports",
      "Spreadsheet → dashboard pipelines",
      "Scheduled data aggregation",
    ],
  },
  {
    icon: Users,
    title: "HR & Documentation",
    bullets: [
      "Document expiry tracking",
      "Employee data validation",
      "Compliance reminders",
    ],
  },
  {
    icon: FileText,
    title: "OCR & Data Extraction",
    bullets: [
      "PDF → structured data",
      "Scanned document processing",
      "Excel / database population",
    ],
  },
  {
    icon: MessageSquare,
    title: "Messaging & Notifications",
    bullets: [
      "WhatsApp alerts",
      "Email automation",
      "Deadline and status notifications",
    ],
  },
  {
    icon: Zap,
    title: "Custom Integrations",
    bullets: [
      "API-based workflows",
      "Tool-to-tool synchronization",
      "Legacy system automation",
    ],
  },
];

export default function WhatIAutomate() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-12 pb-4 md:pt-16 md:pb-6 overflow-hidden">
      {/* Background gradient effect */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, rgba(30, 70, 120, 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="SERVICES"
          heading={
            <>
              Most businesses don&apos;t need more tools. They need{" "}
              <em className="italic">fewer manual steps</em>.
            </>
          }
          subheading="I build automation systems that quietly handle operational work in the background."
          className="mb-6 md:mb-8"
        />

        {/* Category Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2rem" }}
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={cardVariants}>
              <Card>
                <div className="flex flex-col gap-4">
                  {/* Icon */}
                  <IconContainer icon={category.icon} />

                  {/* Title */}
                  <h3
                    className="text-foreground-white font-semibold mb-3"
                    style={{
                      fontSize: "1.25rem",
                    }}
                  >
                    {category.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="flex flex-col gap-2">
                    {category.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="text-foreground-light flex items-start"
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: "1.6",
                          color: "#a3a3a3",
                        }}
                      >
                        <span className="mr-2 text-foreground-medium">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

