"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Card from "./ui/Card";

interface ServiceOffering {
  badge: string;
  badgeColor: "primary" | "success" | "info";
  title: string;
  price: string;
  description: string;
  whenAppropriate?: {
    heading: string;
    items: string[];
  };
  examples?: {
    heading: string;
    items: string[];
  };
  whatIncluded: {
    heading: string;
    items: string[];
  };
  deliverable?: {
    heading: string;
    items: string[];
  };
  closingLine: string;
  isHighlighted?: boolean;
}

const offerings: ServiceOffering[] = [
  {
    badge: "Starting Point",
    badgeColor: "primary",
    title: "Workflow Audit",
    price: "€350–€400",
    description: "A structured analysis of your current process to identify automation opportunities.",
    whenAppropriate: {
      heading: "When appropriate:",
      items: [
        "You're unsure what to automate",
        "Your process is messy or undocumented",
        "You want clarity before building anything",
      ],
    },
    whatIncluded: {
      heading: "What's included:",
      items: [
        "Process mapping (current state)",
        "Identification of manual bottlenecks",
        "Automation feasibility analysis",
        "Tool and architecture recommendations",
        "Estimated time and cost savings",
        "Clear automation blueprint",
      ],
    },
    deliverable: {
      heading: "Deliverable:",
      items: [
        "Written audit summary",
        "Automation plan you can act on",
        "No obligation to proceed further",
      ],
    },
    closingLine: "This audit often prevents expensive mistakes.",
  },
  {
    badge: "Most Common",
    badgeColor: "success",
    title: "Standard Automation Workflow",
    price: "€900–€1,200",
    description: "For well-defined, single-purpose automations.",
    whenAppropriate: {
      heading: "Best suited for:",
      items: [
        "Reporting workflows",
        "Data synchronization",
        "Document processing",
        "Notifications and alerts",
      ],
    },
    examples: {
      heading: "Examples:",
      items: [
        "Email → spreadsheet automation",
        "CSV → database syncing",
        "Basic OCR pipelines",
        "API-based integrations",
        "Scheduled reports",
        "Webhook-triggered workflows",
      ],
    },
    whatIncluded: {
      heading: "What's included:",
      items: [
        "Workflow design and implementation",
        "Error handling and logging",
        "Basic documentation",
        "Deployment and handover",
      ],
    },
    closingLine: "Clear scope. Clear outcome. No feature creep.",
    isHighlighted: true,
  },
  {
    badge: "Complex Workflows",
    badgeColor: "info",
    title: "Advanced Automation System",
    price: "€1,500–€2,500+",
    description: "For multi-step, business-critical workflows.",
    whenAppropriate: {
      heading: "Appropriate when:",
      items: [
        "Multiple tools are involved",
        "Logic branches are required",
        "The process runs daily or continuously",
        "Failure would cause real disruption",
      ],
    },
    examples: {
      heading: "Examples:",
      items: [
        "OCR → validation → reporting systems",
        "WhatsApp or email notification bots",
        "CRM routing and enrichment",
        "HR onboarding pipelines",
        "Real estate lead processing",
        "AI-assisted classification workflows",
      ],
    },
    whatIncluded: {
      heading: "What's included:",
      items: [
        "System architecture design",
        "Multi-step workflow implementation",
        "Robust error handling",
        "Documentation and logic explanation",
        "Deployment support",
      ],
    },
    closingLine: "Pricing depends on complexity and responsibility.",
  },
];

const badgeColors = {
  primary: "border-accent-blue-40",
  success: "border-accent-cyan-40",
  info: "border-accent-blue-30",
};

const badgeGlows = {
  primary: "group-hover:shadow-[0_0_20px_rgba(26,35,50,0.2)]",
  success: "group-hover:shadow-[0_0_20px_rgba(26,51,56,0.2)]",
  info: "group-hover:shadow-[0_0_20px_rgba(26,35,50,0.15)]",
};

export default function ServiceOfferings() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative pt-2 pb-4 md:pt-4 md:pb-6">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: "1rem" }}
        >
          {offerings.map((offering) => (
            <motion.div
              key={offering.title}
              variants={cardVariants}
              className="h-full flex"
            >
              <motion.div
                className="h-full w-full group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  hover={false}
                  className={`h-full flex flex-col ${
                    offering.isHighlighted
                      ? "border-accent-cyan-30"
                      : ""
                  } ${badgeGlows[offering.badgeColor]}`}
                >
                  <div className="flex flex-col gap-4 flex-1">
                    {/* Badge */}
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider border ${
                        badgeColors[offering.badgeColor]
                      }`}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "#a3a3a3",
                        fontSize: "0.75rem",
                        width: "fit-content",
                      }}
                    >
                      {offering.badge}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-foreground-white font-bold mb-3"
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      {offering.title}
                    </h3>

                    {/* Price */}
                    <div
                      className="text-foreground-white font-bold mb-3"
                      style={{
                        fontSize: "2rem",
                        lineHeight: "1.2",
                      }}
                    >
                      {offering.price}
                    </div>

                    {/* Description */}
                    <p
                      className="text-foreground-light italic mb-3"
                      style={{
                        fontSize: "0.9375rem",
                        color: "#a3a3a3",
                        lineHeight: "1.6",
                      }}
                    >
                      {offering.description}
                    </p>

                    {/* When Appropriate */}
                    {offering.whenAppropriate && (
                      <div className="flex flex-col gap-2 mt-4">
                        <h4
                          className="text-foreground-light uppercase tracking-wider"
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b6b6b",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {offering.whenAppropriate.heading}
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {offering.whenAppropriate.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-foreground-light flex items-start"
                              style={{
                                fontSize: "0.9375rem",
                                color: "#a3a3a3",
                                lineHeight: "1.5",
                              }}
                            >
                              <span className="mr-2 text-foreground-medium">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Examples */}
                    {offering.examples && (
                      <div className="flex flex-col gap-2 mt-4">
                        <h4
                          className="text-foreground-light uppercase tracking-wider"
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b6b6b",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {offering.examples.heading}
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {offering.examples.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-foreground-light flex items-start"
                              style={{
                                fontSize: "0.9375rem",
                                color: "#a3a3a3",
                                lineHeight: "1.5",
                              }}
                            >
                              <span className="mr-2 text-foreground-medium">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* What's Included */}
                    <div className="flex flex-col gap-2 mt-4">
                      <h4
                        className="text-foreground-light uppercase tracking-wider"
                        style={{
                          fontSize: "0.75rem",
                          color: "#6b6b6b",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {offering.whatIncluded.heading}
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {offering.whatIncluded.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-foreground-light flex items-start"
                            style={{
                              fontSize: "0.9375rem",
                              color: "#a3a3a3",
                              lineHeight: "1.5",
                            }}
                          >
                            <span className="mr-2 text-foreground-medium">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverable */}
                    {offering.deliverable && (
                      <div className="flex flex-col gap-2 mt-4">
                        <h4
                          className="text-foreground-light uppercase tracking-wider"
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b6b6b",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {offering.deliverable.heading}
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {offering.deliverable.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-foreground-light flex items-start"
                              style={{
                                fontSize: "0.9375rem",
                                color: "#a3a3a3",
                                lineHeight: "1.5",
                              }}
                            >
                              <span className="mr-2 text-foreground-medium">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Closing Line */}
                    <p
                      className="text-foreground-light italic mt-auto pt-4 border-t border-white/5"
                      style={{
                        fontSize: "0.9375rem",
                        color: "#6b6b6b",
                        lineHeight: "1.6",
                      }}
                    >
                      {offering.closingLine}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

