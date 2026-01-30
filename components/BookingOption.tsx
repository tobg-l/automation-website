"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function BookingOption() {
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
          className="max-w-4xl mx-auto"
        >
          {/* OR Separator */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-white/5"></div>
            <span
              className="text-foreground-medium"
              style={{
                fontSize: "0.875rem",
                color: "#6b6b6b",
              }}
            >
              — or —
            </span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          {/* Booking Card */}
          <Card>
            <div className="flex flex-col gap-6 text-center">
              <h2
                className="text-foreground-white font-bold"
                style={{
                  fontSize: "1.5rem",
                }}
              >
                Book a Discovery Call
              </h2>

              <p
                className="text-foreground-light"
                style={{
                  fontSize: "1rem",
                  color: "#a3a3a3",
                  lineHeight: "1.7",
                }}
              >
                Prefer to discuss your automation needs directly? Book a discovery call to explore whether automation makes sense for your process. We'll discuss your workflow, identify automation opportunities, and determine the best approach.
              </p>

              {/* Calendly Link or Embed Placeholder */}
              <div className="mt-4">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" size="md">
                    Schedule Call
                  </Button>
                </a>
              </div>

              {/* Note */}
              <p
                className="text-foreground-medium italic text-sm mt-2"
                style={{
                  fontSize: "0.875rem",
                  color: "#6b6b6b",
                }}
              >
                Calls typically last 30 minutes and are free of charge.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

