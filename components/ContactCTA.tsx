"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/Button";

export default function ContactCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative pt-4 pb-4 md:pt-6 md:pb-6 border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(26, 35, 50, 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[800px] mx-auto"
        >
          {/* Headline */}
          <h2
            className="text-gradient font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Ready to remove manual work?
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

