"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Background() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative pt-4 pb-4 md:pt-6 md:pb-6 border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            Background
          </h2>

          {/* Narrative Paragraphs */}
          <div className="flex flex-col gap-4">
            <p
              className="text-foreground-light"
              style={{
                fontSize: "1.125rem",
                color: "#a3a3a3",
                lineHeight: "1.7",
              }}
            >
              I&apos;ve spent years working with operational systems and seeing firsthand how manual processes create bottlenecks, errors, and frustration. The problem isn&apos;t usually a lack of tools — it&apos;s a lack of clear automation architecture.
            </p>

            <p
              className="text-foreground-light"
              style={{
                fontSize: "1.125rem",
                color: "#a3a3a3",
                lineHeight: "1.7",
              }}
            >
              My approach focuses on understanding the actual problem before proposing solutions. I map processes end-to-end, identify what should be automated (and what shouldn&apos;t), and then design systems that are reliable and maintainable.
            </p>

            <p
              className="text-foreground-light"
              style={{
                fontSize: "1.125rem",
                color: "#a3a3a3",
                lineHeight: "1.7",
              }}
            >
              I work with businesses that value clarity and reliability over complexity. If you need a workflow that replaces repetitive work — not another tool to manage — we&apos;ll work well together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

