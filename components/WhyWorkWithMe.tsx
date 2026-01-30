"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Minimize, Eye, Shield, BookOpen, LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./ui/Card";
import IconContainer from "./ui/IconContainer";

interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: Minimize,
    title: "Simple",
    description: "Minimal moving parts",
  },
  {
    icon: Eye,
    title: "Clear",
    description: "Easy to understand and maintain",
  },
  {
    icon: Shield,
    title: "Reliable",
    description: "Designed for real-world messiness",
  },
  {
    icon: BookOpen,
    title: "Documented",
    description: "Not dependent on tribal knowledge",
  },
];

export default function WhyWorkWithMe() {
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

  const statementVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-12 pb-8 md:pt-16 md:pb-12">
      <div className="container mx-auto px-4 max-w-[900px]">
        {/* Section Header */}
        <SectionHeader
          badge="APPROACH"
          heading="Automation fails when it's rushed or poorly designed."
          className="mb-3 md:mb-4"
        />

        {/* Core Message */}
        <p
          className="text-center text-foreground-light mb-4 md:mb-6"
          style={{
            fontSize: "1rem",
            color: "#a3a3a3",
          }}
        >
          I focus on systems that are:
        </p>

        {/* Principles Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "1.5rem" }}
        >
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.div key={principle.title} variants={cardVariants}>
                <Card>
                  <div className="flex flex-col gap-4 items-start">
                    {/* Icon */}
                    <IconContainer icon={Icon} />

                    {/* Title */}
                    <h3
                      className="text-foreground-white font-bold mb-3"
                      style={{
                        fontSize: "1.125rem",
                      }}
                    >
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-foreground-light"
                      style={{
                        fontSize: "0.9375rem",
                        color: "#a3a3a3",
                      }}
                    >
                      {principle.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Statement */}
        <motion.p
          variants={statementVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mx-auto mt-6 md:mt-8 italic"
          style={{
            fontSize: "1.125rem",
            color: "#a3a3a3",
            maxWidth: "700px",
          }}
        >
          You don't get a demo. You get a system that actually runs.
        </motion.p>
      </div>
    </section>
  );
}

