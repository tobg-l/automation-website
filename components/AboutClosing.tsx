"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function AboutClosing() {
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
          className="max-w-[800px] mx-auto"
        >
          <Card
            hover={false}
            style={{
              background: "rgba(15, 15, 15, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="flex flex-col gap-6 text-center">
              {/* Closing Statement */}
              <p
                className="text-foreground-white font-semibold"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.6",
                }}
              >
                If you need a workflow that replaces repetitive work — not another tool to manage — we'll work well together.
              </p>

              {/* CTA Button */}
              <div className="mt-2">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md">
                    Book a Discovery Call
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

