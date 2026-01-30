"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    badge: "Real System",
    title: "Automated HR Reporting & Compliance System",
    metadata: {
      type: "Internal Operations Automation",
      role: "System Design, Automation Logic, Implementation",
      execution: "Python-based workflow (production system)",
    },
    problem:
      "HR reporting and document tracking were handled manually across multiple spreadsheets. Each week: employee documents had to be checked by hand, missing or expired files were often discovered late, weekly reports were compiled manually, and errors depended on human attention. This created compliance risk and wasted several hours every week.",
    architecture:
      "The system was designed to fully replace manual checks with a structured automation pipeline. Core logic: 1. Scheduled data ingestion from HR records, 2. Validation of required documentation, 3. Expiration date comparison, 4. Automated report generation, 5. Delivery to stakeholders. The system runs automatically and requires no manual intervention.",
    workflow: [
      "Scheduled trigger (weekly)",
      "Data extraction and normalization",
      "Business-rule validation",
      "Conditional logic for missing/expired documents",
      "Automated report creation",
      "Distribution via email",
      "Error handling and logging were built into the workflow to ensure reliability",
    ],
    techStack: ["Python", "Spreadsheet-based data sources", "Email automation"],
    outcome:
      "Manual HR checks eliminated, weekly reporting automated, compliance visibility improved.",
    metrics: "5–10 hours per week saved, depending on department size",
    note: "While this system was implemented in Python, the same architecture today would be deployed using n8n for orchestration and easier long-term maintenance.",
  },
  {
    badge: "Production",
    title: "OCR → Excel Work Schedule Automation",
    metadata: {
      type: "Internal Data Extraction System",
      role: "System Architecture, OCR Pipeline Design",
      execution: "Python-based workflow (production system)",
    },
    problem:
      "Work schedules were received as scanned PDF documents that required manual data entry into Excel spreadsheets. This process was time-consuming, error-prone, and created delays in schedule distribution. Staff had to manually transcribe dates, times, and employee assignments from scanned documents, leading to frequent mistakes and inconsistencies.",
    architecture:
      "The system automates the extraction and validation of scanned documents into structured spreadsheets. The architecture includes: 1. OCR processing for scanned PDFs, 2. Data extraction and parsing, 3. Validation against business rules, 4. Structured data formatting, 5. Excel file generation with proper formatting. The system handles various document formats and quality levels.",
    workflow: [
      "Document ingestion (scanned PDFs)",
      "OCR processing and text extraction",
      "Data parsing and structure recognition",
      "Validation against business rules",
      "Error detection and flagging",
      "Excel file generation with formatting",
      "Quality checks and validation",
    ],
    techStack: ["Python", "OCR libraries", "Excel automation", "PDF processing"],
    outcome:
      "Automated extraction and validation of scanned documents into structured spreadsheets, eliminating manual data entry.",
    metrics: "Reduced processing time from hours to minutes per document",
    note: "This Python-based system demonstrates the architecture that would now be implemented using n8n's OCR nodes and Excel integration for improved maintainability.",
  },
  {
    badge: "Real System",
    title: "Automated WhatsApp Alerts",
    metadata: {
      type: "Internal Compliance Automation",
      role: "Workflow Design and Logic",
      execution: "Production system",
    },
    problem:
      "Employee documentation expiry dates were tracked manually, and notifications were sent inconsistently. Critical documents would expire without warning, creating compliance risks. The manual process required someone to remember to check dates and send reminders, which often failed under workload pressure.",
    architecture:
      "The system automates document expiry tracking and notification delivery via WhatsApp. The architecture includes: 1. Document expiry date tracking, 2. Automated date checking on a schedule, 3. Notification logic for approaching and expired documents, 4. WhatsApp message formatting and delivery, 5. Delivery confirmation tracking. The system ensures no document expires without proper notification.",
    workflow: [
      "Scheduled document expiry check",
      "Date comparison and threshold detection",
      "Notification logic (30-day, 7-day, expired)",
      "WhatsApp message formatting",
      "Automated message delivery",
      "Delivery confirmation and logging",
      "Error handling for failed deliveries",
    ],
    techStack: ["Python", "WhatsApp API", "Document tracking system", "Scheduled tasks"],
    outcome:
      "Automated WhatsApp alerts for expiring employee documentation, ensuring compliance and eliminating missed deadlines.",
    metrics: "100% notification coverage, zero missed expiry dates",
    note: "This workflow architecture is now implemented using n8n's WhatsApp integration and scheduling nodes for more reliable and maintainable operations.",
  },
];

export default function RealSystems() {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="real-systems" className="relative pt-4 pb-4 md:pt-6 md:pb-6 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <SectionHeader
            badge="REAL SYSTEMS"
            heading="Architecture Case Studies"
            subheading="These are real operational systems, built in real environments, with real constraints. They demonstrate system thinking, not tool usage."
            className="mb-8 md:mb-12"
          />

          {/* Case Study Cards */}
          <div className="max-w-5xl mx-auto">
            {caseStudies.map((caseStudy, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
