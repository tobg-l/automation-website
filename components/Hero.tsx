"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

// Lazy load ChevronDown icon
const ChevronDown = dynamic(
  () => import("lucide-react").then((mod) => mod.ChevronDown),
  { ssr: false }
);

export default function Hero() {
  const nextSectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Find the next section after hero (usually the first section with an id or class)
    const sections = document.querySelectorAll("section, main > div");
    if (sections.length > 1) {
      nextSectionRef.current = sections[1] as HTMLElement;
    }
  }, []);

  const scrollToNext = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse 50% 50% at center, rgba(30, 100, 140, 0.12) 0%, transparent 70%)`,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-4 pt-8 pb-4 md:pt-16 md:pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <Badge>NEW GEN AI AUTOMATION PARTNER</Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-gradient font-display font-bold mt-2 mb-2"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Automation systems that replace manual work —{" "}
            <span className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              reliably
            </span>
            .
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-foreground-light max-w-[600px] mx-auto mb-3"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "#a3a3a3",
            }}
          >
            I design and implement automation workflows using n8n, Python, APIs, and AI to eliminate repetitive operational tasks and reduce human error.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <Link href="/contact">
              <Button variant="primary" size="md">
                Book a Workflow Audit
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary" size="md">
                View Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground-light hover:text-foreground-white transition-colors duration-300"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

