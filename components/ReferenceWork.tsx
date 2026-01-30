"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ReferenceAutomationCard from "./ReferenceAutomationCard";
import {
  Sparkles,
  Mail,
  FileText,
  Users,
  Database,
  MessageSquare,
  Calendar,
} from "lucide-react";

const referenceAutomations = [
  {
    icon: Sparkles,
    badge: "n8n Demo",
    title: "AI Lead Qualification System",
    type: "Lead Processing Automation",
    problem:
      "Incoming leads from multiple sources require manual qualification and routing, creating delays and inconsistent follow-up.",
    systemDesign: [
      "AI-powered lead scoring and classification",
      "Multi-source lead aggregation",
      "Automated routing based on qualification criteria",
      "CRM integration and enrichment",
    ],
    workflow: [
      "Lead ingestion from web forms, email, and APIs",
      "AI classification and scoring",
      "Conditional routing based on score",
      "CRM update and notification delivery",
    ],
    outcome: [
      "Automated lead qualification and routing",
      "Reduced response time from hours to minutes",
      "Consistent qualification criteria applied",
    ],
  },
  {
    icon: Mail,
    badge: "Reference",
    title: "Smart Email Inbox Parser",
    type: "Email Processing Automation",
    problem:
      "Important emails get buried in inboxes, requiring manual sorting and action. Critical messages are missed or delayed.",
    systemDesign: [
      "Email parsing and content extraction",
      "Intelligent categorization using rules and AI",
      "Priority-based routing and notifications",
      "Action item extraction and task creation",
    ],
    workflow: [
      "Email monitoring and ingestion",
      "Content parsing and analysis",
      "Categorization and priority assignment",
      "Notification and task creation",
    ],
    outcome: [
      "Automated email sorting and prioritization",
      "Critical messages never missed",
      "Reduced inbox management time",
    ],
  },
  {
    icon: FileText,
    badge: "n8n Demo",
    title: "Automated Invoice Processor",
    type: "Document Processing Automation",
    problem:
      "Invoices arrive via email and require manual data entry into accounting systems, creating bottlenecks and errors.",
    systemDesign: [
      "OCR and data extraction from PDF invoices",
      "Validation against business rules",
      "Automated accounting system integration",
      "Exception handling and approval workflows",
    ],
    workflow: [
      "Email monitoring for invoice attachments",
      "PDF processing and data extraction",
      "Validation and error checking",
      "Accounting system update and notification",
    ],
    outcome: [
      "Automated invoice processing end-to-end",
      "Eliminated manual data entry",
      "Faster payment processing cycles",
    ],
  },
  {
    icon: Users,
    badge: "Reference",
    title: "HR Onboarding Automation",
    type: "Employee Onboarding System",
    problem:
      "New employee onboarding involves multiple manual steps across different systems, creating delays and inconsistent experiences.",
    systemDesign: [
      "Multi-system workflow orchestration",
      "Document generation and distribution",
      "Automated account provisioning",
      "Progress tracking and notifications",
    ],
    workflow: [
      "Trigger on new employee record creation",
      "Document generation and email delivery",
      "Account creation across systems",
      "Progress tracking and completion notifications",
    ],
    outcome: [
      "Streamlined onboarding process",
      "Consistent experience for all new hires",
      "Reduced administrative overhead",
    ],
  },
  {
    icon: Database,
    badge: "n8n Demo",
    title: "Data Synchronization Pipeline",
    type: "Data Integration Automation",
    problem:
      "Data needs to be synchronized between multiple systems, requiring manual exports, transformations, and imports that are error-prone.",
    systemDesign: [
      "Automated data extraction from source systems",
      "Data transformation and validation",
      "Scheduled synchronization workflows",
      "Error handling and conflict resolution",
    ],
    workflow: [
      "Scheduled data extraction",
      "Data transformation and mapping",
      "Validation and error checking",
      "Target system update and confirmation",
    ],
    outcome: [
      "Automated multi-system data synchronization",
      "Eliminated manual data transfers",
      "Real-time data consistency across systems",
    ],
  },
  {
    icon: MessageSquare,
    badge: "Reference",
    title: "Customer Support Ticket Router",
    type: "Support Automation System",
    problem:
      "Support tickets arrive from multiple channels and require manual triage and assignment, leading to delays and misrouting.",
    systemDesign: [
      "Multi-channel ticket aggregation",
      "Intelligent routing based on content and rules",
      "Priority assignment and escalation",
      "Team assignment and notification",
    ],
    workflow: [
      "Ticket ingestion from email, chat, and forms",
      "Content analysis and classification",
      "Routing decision based on rules",
      "Assignment and notification delivery",
    ],
    outcome: [
      "Automated ticket routing and assignment",
      "Faster response times",
      "Improved routing accuracy",
    ],
  },
  {
    icon: Calendar,
    badge: "n8n Demo",
    title: "Meeting Scheduling Assistant",
    type: "Calendar Automation",
    problem:
      "Coordinating meetings across multiple calendars requires back-and-forth emails and manual availability checking.",
    systemDesign: [
      "Calendar integration and availability checking",
      "Automated meeting proposal generation",
      "Response handling and confirmation",
      "Calendar updates and reminders",
    ],
    workflow: [
      "Meeting request received",
      "Availability check across calendars",
      "Proposal generation and delivery",
      "Confirmation and calendar update",
    ],
    outcome: [
      "Automated meeting coordination",
      "Reduced scheduling back-and-forth",
      "Improved meeting efficiency",
    ],
  },
];

export default function ReferenceWork() {
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
    <section id="reference-work" className="relative pt-4 pb-4 md:pt-6 md:pb-6 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <SectionHeader
            badge="REFERENCE WORK"
            heading="Demonstration Automations (n8n)"
            subheading="These are demonstration workflows designed to show how modern automation systems are built using n8n. They represent architectures I deploy for clients today."
            className="mb-8 md:mb-12"
          />

          {/* Reference Automation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
            {referenceAutomations.map((automation, idx) => (
              <motion.div key={idx} variants={cardVariants} className="flex">
                <ReferenceAutomationCard automation={automation} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
