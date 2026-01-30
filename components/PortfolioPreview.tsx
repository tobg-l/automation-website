"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import Card from "./ui/Card";

interface Project {
  tag: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    tag: "Real System",
    title: "Automated HR Reporting System",
    description:
      "Internal workflow replacing manual weekly reports and document tracking.",
    link: "/projects/automated-hr-reporting",
  },
  {
    tag: "Real System",
    title: "OCR → Excel Work Schedule Pipeline",
    description:
      "Automated extraction and validation of scanned documents into structured spreadsheets.",
    link: "/projects/ocr-excel-pipeline",
  },
  {
    tag: "Real System",
    title: "Document Expiry Notification System",
    description:
      "Automated WhatsApp alerts for expiring employee documentation.",
    link: "/projects/document-expiry-notifications",
  },
];

export default function PortfolioPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative pt-12 pb-4 md:pt-16 md:pb-6 overflow-hidden">
      {/* Background gradient effect */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(circle at bottom left, rgba(30, 120, 140, 0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badge="WORK"
          heading="Below are examples of real systems and reference automations demonstrating how I design workflows."
          className="mb-6 md:mb-8"
        />

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2rem" }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants} className="h-full">
              <motion.div
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                className="h-full group"
              >
                <Card
                  className="h-full flex flex-col group-hover:shadow-[0_0_20px_rgba(30,120,140,0.15),0_0_40px_rgba(30,120,140,0.1)]"
                  hover={false}
                  style={{
                    boxShadow: "none",
                  }}
                >
                  <div className="flex flex-col gap-4 flex-1">
                    {/* Tag Badge */}
                    <div
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "#a3a3a3",
                        fontSize: "0.75rem",
                        width: "fit-content",
                      }}
                    >
                      {project.tag}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-foreground-white font-semibold mb-3"
                      style={{
                        fontSize: "1.25rem",
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-foreground-light flex-1"
                      style={{
                        fontSize: "0.9375rem",
                        color: "#a3a3a3",
                        lineHeight: "1.6",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Link */}
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-foreground-light hover:text-foreground-white transition-colors duration-300 mt-auto"
                      style={{
                        fontSize: "0.9375rem",
                        color: "#a3a3a3",
                      }}
                    >
                      View case study
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-6 md:mt-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-foreground-light hover:text-foreground-white transition-colors duration-300"
            style={{
              fontSize: "0.9375rem",
              color: "#a3a3a3",
            }}
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

