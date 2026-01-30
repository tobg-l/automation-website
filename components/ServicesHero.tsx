"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient effect - subtle dark blue top right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at top right, rgba(26, 35, 50, 0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[800px] mx-auto px-4 pt-12 pb-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-gradient font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Automation systems designed for real operations — not demos.
          </motion.h1>

          {/* Body Text */}
          <motion.div variants={itemVariants} className="flex flex-col" style={{ gap: "1rem" }}>
            <p
              className="text-foreground-light"
              style={{
                fontSize: "1.125rem",
                color: "#a3a3a3",
                lineHeight: "1.8",
              }}
            >
              Most automation problems are not technical. They&apos;re architectural.
            </p>

            <p
              className="text-foreground-light"
              style={{
                fontSize: "1.125rem",
                color: "#a3a3a3",
                lineHeight: "1.8",
              }}
            >
              I help businesses remove repetitive manual work by designing automation systems that are clear, reliable, and easy to maintain.
            </p>

            <p
              className="text-foreground-light"
              style={{
                fontSize: "1.125rem",
                color: "#a3a3a3",
                lineHeight: "1.8",
              }}
            >
              No unnecessary tools. No overengineering. No fragile workflows.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

