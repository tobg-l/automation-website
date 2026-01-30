"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Metric {
  value: string;
  label: string;
}

const metrics: Metric[] = [
  {
    value: "5–10 hours/week",
    label: "Saved per workflow",
  },
  {
    value: "Multiple processes",
    label: "Fully replaced",
  },
  {
    value: "Reduced errors",
    label: "In reporting",
  },
  {
    value: "Faster turnaround",
    label: "For operational tasks",
  },
];

export default function ImpactMetrics() {
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
        delayChildren: 0.2,
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
    <section className="relative pt-12 pb-4 md:pt-16 md:pb-6">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1.5rem" }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center p-6 rounded-xl"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              {/* Value/Stat */}
              <motion.div
                className="text-foreground-white font-bold mb-2"
                style={{
                  fontSize: "clamp(1.75rem, 2vw, 2.5rem)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {metric.value}
              </motion.div>

              {/* Label */}
              <p
                className="text-foreground-medium"
                style={{
                  fontSize: "0.875rem",
                  color: "#6b6b6b",
                }}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

