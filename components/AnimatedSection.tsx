"use client";

import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={inView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
