"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Search, Code, Settings, LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./ui/Card";
import IconContainer from "./ui/IconContainer";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    description:
      "I map your current process end-to-end and identify: manual bottlenecks, failure points, unnecessary repetition, and automation opportunities. You get a clear picture of what should be automated — and what shouldn't.",
  },
  {
    number: "02",
    icon: Code,
    title: "Build",
    description:
      "I design and implement the automation workflow using: n8n for orchestration, Python where custom logic is required, APIs and data services, and clear error handling and logging. The goal is reliability, not complexity.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Optimize & Maintain",
    description:
      "Once live, the system is: monitored, documented, maintained, and improved when needed. This keeps your workflow stable as your business evolves.",
  },
];

export default function HowMySystemsWork() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-12 pb-8 md:pt-16 md:pb-12">
      <div className="container mx-auto px-4 max-w-[1280px]">
        {/* Section Header */}
        <SectionHeader
          badge="PROCESS"
          heading={
            <>
              Every automation follows the same principle:{" "}
              <em className="italic">clarity first, tools second.</em>
            </>
          }
          className="mb-6 md:mb-8"
        />

        {/* Steps Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative"
          style={{ gap: "2rem" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <motion.div key={step.number} variants={stepVariants} className="relative">
                {/* Connecting line between steps (desktop only) */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute top-16 left-full"
                    style={{
                      width: "calc(2rem + 1px)",
                      height: "1px",
                      background: "rgba(255, 255, 255, 0.05)",
                      transform: "translateX(50%)",
                    }}
                  />
                )}

                <Card>
                  <div className="flex flex-col gap-4">
                    {/* Number Badge */}
                    <div
                      className="text-foreground-dark font-bold mb-4"
                      style={{
                        fontSize: "2rem",
                        color: "#404040",
                        lineHeight: "1",
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="group mb-3">
                      <motion.div
                        whileHover={{
                          y: -4,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <IconContainer icon={Icon} />
                      </motion.div>
                    </div>

                    {/* Heading */}
                    <h3
                      className="text-foreground-white font-semibold mb-2"
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Body Text */}
                    <p
                      className="text-foreground-light"
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        color: "#a3a3a3",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

