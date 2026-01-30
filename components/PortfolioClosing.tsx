"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./ui/Button";
import Card from "./ui/Card";

const principles = [
  "Clear scope",
  "Explicit logic",
  "Error handling",
  "Maintainability in mind",
];

export default function PortfolioClosing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
    <section className="relative pt-4 pb-4 md:pt-6 md:pb-6 overflow-hidden">
      {/* Background gradient - dark blue */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(26, 35, 50, 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
              {/* Principles List */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-foreground-light"
                  style={{
                    fontSize: "1rem",
                    color: "#a3a3a3",
                    lineHeight: "1.6",
                  }}
                >
                  All systems are designed with:
                </p>

                <ul className="flex flex-col gap-2 items-center">
                  {principles.map((principle, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <span className="text-foreground-medium">•</span>
                      <span
                        className="text-foreground-light"
                        style={{
                          fontSize: "1rem",
                          color: "#a3a3a3",
                          lineHeight: "1.6",
                        }}
                      >
                        {principle}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Closing Statement */}
              <motion.p
                variants={itemVariants}
                className="text-foreground-white font-semibold mt-2"
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.6",
                }}
              >
                The goal is not automation for its own sake — but removing fragile manual processes.
              </motion.p>

              {/* CTA */}
              <motion.div variants={itemVariants} className="mt-6 pt-6 border-t border-white/5">
                <p
                  className="text-foreground-light mb-3"
                  style={{
                    fontSize: "1rem",
                    color: "#a3a3a3",
                  }}
                >
                  Ready to build your automation system?
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="md">
                    Book a Workflow Audit
                  </Button>
                </Link>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

