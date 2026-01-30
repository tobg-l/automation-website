"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative pt-12 pb-2 md:pt-16 md:pb-4">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[800px] mx-auto"
        >
          {/* Headline */}
          <h1
            className="text-gradient font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Let's see if automation makes sense for your process.
          </h1>

          {/* Subheadline */}
          <p
            className="text-foreground-light"
            style={{
              fontSize: "1.125rem",
              color: "#a3a3a3",
              lineHeight: "1.7",
            }}
          >
            If you have a repetitive process that&apos;s consuming time or causing errors, I can help you evaluate whether automation is the right solution. Start by sharing details about your workflow, or book a discovery call to discuss your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

