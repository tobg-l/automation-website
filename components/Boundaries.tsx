"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Minus } from "lucide-react";

const boundaries = [
  "Full-stack application development",
  "Heavy front-end interfaces",
  "Marketing automation management",
  "Paid ads or funnel building",
  "Enterprise custom software",
  "Ongoing feature development without scope",
];

export default function Boundaries() {
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
        delayChildren: 0.1,
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
    <section className="relative pt-12 pb-4 md:pt-16 md:pb-6">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center max-w-[800px] mx-auto"
        >
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2
              className="text-foreground-white font-bold mb-3"
              style={{
                fontSize: "2rem",
                lineHeight: "1.3",
              }}
            >
              What I <em className="italic">Don&apos;t</em> Do
            </h2>
            <p
              className="text-foreground-light"
              style={{
                fontSize: "1.125rem",
                color: "#a3a3a3",
                lineHeight: "1.6",
              }}
            >
              Clear boundaries create better systems.
            </p>
          </div>

          {/* Boundaries List */}
          <div className="w-full flex flex-col gap-4 mb-8 md:mb-12">
            <p
              className="text-foreground-light uppercase tracking-wider mb-2"
              style={{
                fontSize: "0.75rem",
                color: "#6b6b6b",
                letterSpacing: "0.05em",
              }}
            >
              I do not offer:
            </p>
            <ul className="flex flex-col gap-2 items-start">
              {boundaries.map((boundary, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 w-full"
                >
                  <Minus
                    size={20}
                    className="text-foreground-medium flex-shrink-0"
                    style={{ color: "#6b6b6b" }}
                  />
                  <span
                    className="text-foreground-light text-left"
                    style={{
                      fontSize: "1rem",
                      color: "#a3a3a3",
                      lineHeight: "1.6",
                    }}
                  >
                    {boundary}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Closing Line */}
          <motion.p
            variants={itemVariants}
            className="text-foreground-light italic"
            style={{
              fontSize: "1rem",
              color: "#a3a3a3",
              lineHeight: "1.6",
            }}
          >
            My focus is <strong className="not-italic font-semibold">operational automation architecture</strong>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

