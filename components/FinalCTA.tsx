"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/Button";

export default function FinalCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    <section className="relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-12">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(30, 100, 140, 0.12) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-foreground-medium uppercase tracking-wider mb-3"
            style={{
              fontSize: "0.875rem",
              color: "#6b6b6b",
              letterSpacing: "0.05em",
            }}
          >
            Ready to remove manual work from your operations?
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-gradient font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Ready to remove manual work?
          </motion.h2>

          {/* Body Text */}
          <motion.p
            variants={itemVariants}
            className="text-foreground-light mb-6 mx-auto"
            style={{
              fontSize: "1.125rem",
              color: "#a3a3a3",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            If you have a repetitive process that keeps breaking, consuming time,
            or relying on people to remember things — it can probably be automated.
          </motion.p>

          {/* Primary Button */}
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <Button variant="primary" size="md">
                Book a Workflow Audit
              </Button>
            </Link>
          </motion.div>

          {/* Footer Micro-copy */}
          <motion.p
            variants={itemVariants}
            className="mt-6 italic text-foreground-medium mx-auto"
            style={{
              fontSize: "0.875rem",
              color: "#6b6b6b",
              maxWidth: "600px",
            }}
          >
            I work with a limited number of projects at a time to ensure fast
            delivery and high-quality systems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

