"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const techStack = [
  "n8n",
  "Python",
  "APIs",
  "OCR",
  "Google Sheets",
  "WhatsApp",
  "Email Automation",
  "Webhooks",
  "Database Integration",
  "PDF Processing",
  "Data Transformation",
  "Scheduled Tasks",
];

export default function TechnicalFoundation() {
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
            Technical Foundation
          </h2>

          {/* Intro Paragraph */}
          <p
            className="text-foreground-light mb-4 text-center"
            style={{
              fontSize: "1.125rem",
              color: "#a3a3a3",
              lineHeight: "1.7",
            }}
          >
            I work with modern automation tools and platforms that prioritize reliability and maintainability. The focus is on choosing the right tool for the job, not the newest one.
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="px-4 py-2 rounded-lg text-sm"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#a3a3a3",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

