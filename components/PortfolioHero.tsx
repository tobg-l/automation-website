"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PortfolioHero() {
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
          className="flex flex-col items-center text-center max-w-[900px] mx-auto"
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
            Systems & <em className="italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Reference Work</em>
          </h1>

          {/* Subheadline */}
          <p
            className="text-foreground-light"
            style={{
              fontSize: "1.125rem",
              color: "#a3a3a3",
              lineHeight: "1.6",
            }}
          >
            Real operational systems built in production environments, plus demonstration workflows showing modern automation architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

