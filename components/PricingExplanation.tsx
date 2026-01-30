"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "./ui/Card";

const pricingFactors = [
  "Complexity",
  "Responsibility",
  "System dependency",
  "Maintenance requirements",
];

export default function PricingExplanation() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative pt-12 pb-4 md:pt-16 md:pb-6">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[700px] mx-auto"
        >
          <Card
            hover={false}
            className="borderless"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "none",
            }}
          >
            <div className="flex flex-col gap-6 text-center">
              {/* Title */}
              <h2
                className="text-foreground-white font-bold"
                style={{
                  fontSize: "1.5rem",
                }}
              >
                How Pricing Works
              </h2>

              {/* Content */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-foreground-light"
                  style={{
                    fontSize: "1rem",
                    color: "#a3a3a3",
                    lineHeight: "1.6",
                  }}
                >
                  Automation pricing is based on:
                </p>

                {/* Bullet List */}
                <ul className="flex flex-col gap-2 items-start">
                  {pricingFactors.map((factor, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 w-full"
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
                        {factor}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Final Statement */}
                <p
                  className="text-foreground-white font-semibold mt-2"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  I do not charge by the hour. I charge for clear outcomes and system ownership.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

