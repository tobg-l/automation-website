"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Card from "./ui/Card";

const includedItems = [
  "Bug fixes (restore original behavior)",
  "Credential and token updates",
  "Platform / API change handling",
  "Monitoring and basic health checks",
  "Limited adjustments within scope",
  "Defined response time",
];

const notIncludedItems = [
  "New features",
  "Workflow redesigns",
  "Additional integrations",
  "Business logic changes",
  "Scaling or optimization work",
];

export default function MaintenanceSupport() {
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
          className="max-w-[900px] mx-auto"
        >
          <Card>
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h2
                    className="text-foreground-white font-bold"
                    style={{
                      fontSize: "1.5rem",
                    }}
                  >
                    Maintenance & Support
                  </h2>
                  <div
                    className="text-foreground-white font-bold"
                    style={{
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    €100–€250 / month
                  </div>
                </div>

                {/* Intro */}
                <p
                  className="text-foreground-light"
                  style={{
                    fontSize: "1rem",
                    color: "#a3a3a3",
                    lineHeight: "1.6",
                  }}
                >
                  Automation systems require stability, not constant changes. Maintenance ensures your workflow continues running and issues are handled without stress.
                </p>
              </div>

              {/* Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column: What's Included */}
                <div className="flex flex-col gap-3 mt-4">
                  <h3
                    className="text-foreground-white font-semibold uppercase tracking-wider"
                    style={{
                      fontSize: "0.875rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    What's Included
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {includedItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <Check
                          size={20}
                          className="text-foreground-light flex-shrink-0 mt-0.5"
                          style={{ color: "#a3a3a3" }}
                        />
                        <span
                          className="text-foreground-light"
                          style={{
                            fontSize: "0.9375rem",
                            color: "#a3a3a3",
                            lineHeight: "1.6",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: What's NOT Included */}
                <div className="flex flex-col gap-3 mt-4">
                  <h3
                    className="text-foreground-white font-semibold uppercase tracking-wider"
                    style={{
                      fontSize: "0.875rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    What's NOT Included
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {notIncludedItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <X
                          size={20}
                          className="text-foreground-medium flex-shrink-0 mt-0.5"
                          style={{ color: "#6b6b6b" }}
                        />
                        <span
                          className="text-foreground-medium"
                          style={{
                            fontSize: "0.9375rem",
                            color: "#6b6b6b",
                            lineHeight: "1.6",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-6 border-t border-white/5">
                <p
                  className="text-foreground-medium italic"
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b6b6b",
                    lineHeight: "1.6",
                  }}
                >
                  Maintenance is offered in fixed terms and renews at current rates.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

