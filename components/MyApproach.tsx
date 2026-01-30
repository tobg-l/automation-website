"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "./ui/Card";

const principles = [
  {
    title: "Clarity over complexity",
    description: "Simple systems are easier to understand, maintain, and debug. I prioritize clear logic over clever solutions.",
  },
  {
    title: "Automation-first thinking",
    description: "Every process is evaluated for automation potential. Manual work is treated as a temporary state, not a permanent solution.",
  },
  {
    title: "Reliability before optimization",
    description: "A system that works consistently is more valuable than one that's fast but fragile. Stability comes first.",
  },
  {
    title: "Explicit logic",
    description: "Business rules and decision points are clearly defined and documented. No hidden assumptions or tribal knowledge.",
  },
  {
    title: "Documentation as part of delivery",
    description: "Every system includes clear documentation. This ensures long-term maintainability and knowledge transfer.",
  },
];

export default function MyApproach() {
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
    <section className="relative pt-4 pb-4 md:pt-6 md:pb-6 border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-[800px] mx-auto"
        >
          {/* Section Header */}
          <h2
            className="text-gradient font-display font-bold mb-3 md:mb-4 text-center"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            My Approach
          </h2>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <Card hover={false} className="h-full">
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-foreground-white font-semibold mb-3"
                      style={{
                        fontSize: "1.125rem",
                      }}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className="text-foreground-light"
                      style={{
                        fontSize: "0.9375rem",
                        color: "#a3a3a3",
                        lineHeight: "1.6",
                      }}
                    >
                      {principle.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

