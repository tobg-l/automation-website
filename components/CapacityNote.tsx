"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "./ui/Card";
import { Info } from "lucide-react";

export default function CapacityNote() {
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
          className="max-w-3xl mx-auto"
        >
          <Card
            hover={false}
            className="border-accent-blue-20"
            style={{
              background: "rgba(26, 35, 50, 0.1)",
              border: "1px solid rgba(26, 35, 50, 0.3)",
            }}
          >
            <div className="flex gap-4">
              <Info size={24} className="text-accent-blue-40 flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-2">
                <h3
                  className="text-foreground-white font-semibold"
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  Capacity Note
                </h3>
                <p
                  className="text-foreground-light"
                  style={{
                    fontSize: "0.9375rem",
                    color: "#a3a3a3",
                    lineHeight: "1.7",
                  }}
                >
                  I work with a limited number of projects at a time to ensure fast delivery and high-quality systems. If you&apos;re ready to move forward, I recommend booking a discovery call or submitting an inquiry soon.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

