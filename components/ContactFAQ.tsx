"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does an automation project typically take?",
    answer:
      "Project timelines vary based on complexity. A workflow audit takes 1-2 weeks. Standard automations typically take 2-4 weeks from start to deployment. Advanced systems can take 4-8 weeks depending on scope and complexity.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "No. I handle all technical implementation. You provide the process knowledge and business requirements. I'll explain the system architecture in clear terms and ensure you understand how it works.",
  },
  {
    question: "What happens after the automation is built?",
    answer:
      "I provide full documentation, walk you through the system, and offer maintenance support. You'll understand how to monitor the workflow and what to do if issues arise. Maintenance packages are available for ongoing support.",
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Yes. I integrate with existing tools and platforms whenever possible. The goal is to enhance your current workflow, not replace everything. I'll work with your spreadsheets, databases, APIs, and other systems you already use.",
  },
  {
    question: "What if the automation doesn't work as expected?",
    answer:
      "I build error handling and logging into every system. If something goes wrong, we'll identify the issue quickly and fix it. All systems include documentation and clear logic so problems can be resolved efficiently.",
  },
];

export default function ContactFAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h2
            className="text-gradient font-display font-bold mb-3 md:mb-4 text-center"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/5 rounded-lg overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className="text-foreground-white font-medium pr-4"
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-foreground-light flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="px-6 pb-4">
                        <p
                          className="text-foreground-light"
                          style={{
                            fontSize: "0.9375rem",
                            color: "#a3a3a3",
                            lineHeight: "1.7",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

