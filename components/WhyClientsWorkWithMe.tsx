"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const reasons = [
  "Clear communication and transparent process",
  "Focus on outcomes, not tool complexity",
  "Systems designed for long-term maintainability",
  "No unnecessary features or overengineering",
  "Documentation included as part of delivery",
  "Reliable systems that work consistently",
];

export default function WhyClientsWorkWithMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
            className="text-gradient font-display font-bold mb-3 text-center"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Why Clients Work With Me
          </h2>

          {/* Bullet List */}
          <ul className="flex flex-col gap-2 mt-4">
            {reasons.map((reason, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <span className="text-foreground-medium mt-1">•</span>
                <span
                  className="text-foreground-light"
                  style={{
                    fontSize: "1.125rem",
                    color: "#a3a3a3",
                    lineHeight: "1.7",
                  }}
                >
                  {reason}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

