"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/Button";

export default function ServicesCTA() {
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
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Background gradient - dark cyan center */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(26, 51, 56, 0.12) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center max-w-[800px] mx-auto"
        >
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
            Not sure where to start?
          </motion.h2>

          {/* Body Text */}
          <motion.p
            variants={itemVariants}
            className="text-foreground-light mb-6"
            style={{
              fontSize: "1.125rem",
              color: "#a3a3a3",
              lineHeight: "1.6",
            }}
          >
            If you have a repetitive process that consumes time, causes errors, or depends on people remembering things — it can likely be automated. Start with a workflow audit.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Book a Discovery Call
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="secondary" size="md">
                Request a Workflow Audit
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

