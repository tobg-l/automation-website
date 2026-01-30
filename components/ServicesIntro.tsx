"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ServicesIntro() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative pt-12 pb-0 md:pt-16 md:pb-0">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[800px] mx-auto"
        >
          {/* Headline */}
          <h2
            className="text-foreground-white font-bold mb-3"
            style={{
              fontSize: "2rem",
              lineHeight: "1.3",
            }}
          >
            How I Work <em className="italic">With Clients</em>
          </h2>

          {/* Subheadline */}
          <p
            className="text-foreground-light"
            style={{
              fontSize: "1.125rem",
              color: "#a3a3a3",
              lineHeight: "1.6",
            }}
          >
            Automation works best when the scope is clear. That&apos;s why I offer three structured ways to work together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

