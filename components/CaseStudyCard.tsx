"use client";

import { useState } from "react";
import {
  AlertCircle,
  Layout,
  Workflow,
  Code,
  TrendingUp,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Card from "./ui/Card";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
  badge: string;
  title: string;
  metadata: {
    type: string;
    role: string;
    execution: string;
  };
  problem: string;
  architecture: string;
  workflow: string[];
  techStack: string[];
  outcome: string;
  metrics?: string;
  note: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-8">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col gap-3">
          {/* Badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-accent-blue-40"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              color: "#a3a3a3",
              fontSize: "0.75rem",
              width: "fit-content",
            }}
          >
            {caseStudy.badge}
          </div>

          {/* Title */}
          <h3
            className="text-foreground-white font-bold"
            style={{
              fontSize: "1.75rem",
            }}
          >
            {caseStudy.title}
          </h3>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-foreground-light" style={{ fontSize: "0.875rem" }}>
            <span><strong>Type:</strong> {caseStudy.metadata.type}</span>
            <span><strong>Role:</strong> {caseStudy.metadata.role}</span>
            <span><strong>Execution:</strong> {caseStudy.metadata.execution}</span>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <AlertCircle size={20} className="text-foreground-light" />
            <h4
              className="text-foreground-white font-semibold uppercase tracking-wider"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
              }}
            >
              Problem
            </h4>
          </div>
          <p
            className="text-foreground-light"
            style={{
              fontSize: "1rem",
              color: "#a3a3a3",
              lineHeight: "1.7",
            }}
          >
            {caseStudy.problem}
          </p>
        </div>

        {/* System Architecture */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <Layout size={20} className="text-foreground-light" />
            <h4
              className="text-foreground-white font-semibold uppercase tracking-wider"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
              }}
            >
              System Architecture
            </h4>
          </div>
          <p
            className="text-foreground-light"
            style={{
              fontSize: "1rem",
              color: "#a3a3a3",
              lineHeight: "1.7",
            }}
          >
            {caseStudy.architecture}
          </p>
        </div>

        {/* Workflow Overview */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <Workflow size={20} className="text-foreground-light" />
            <h4
              className="text-foreground-white font-semibold uppercase tracking-wider"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
              }}
            >
              Workflow Overview
            </h4>
          </div>
          <ul className="flex flex-col gap-2">
            {caseStudy.workflow.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3"
              >
                <span className="text-foreground-medium mt-1">•</span>
                <span
                  className="text-foreground-light"
                  style={{
                    fontSize: "1rem",
                    color: "#a3a3a3",
                    lineHeight: "1.7",
                  }}
                >
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <Code size={20} className="text-foreground-light" />
            <h4
              className="text-foreground-white font-semibold uppercase tracking-wider"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
              }}
            >
              Tech Stack
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#a3a3a3",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-foreground-light" />
            <h4
              className="text-foreground-white font-semibold uppercase tracking-wider"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
              }}
            >
              Outcome
            </h4>
          </div>
          <p
            className="text-foreground-light"
            style={{
              fontSize: "1rem",
              color: "#a3a3a3",
              lineHeight: "1.7",
            }}
          >
            {caseStudy.outcome}
          </p>
          {caseStudy.metrics && (
            <p
              className="text-foreground-white font-semibold mt-2"
              style={{
                fontSize: "1rem",
              }}
            >
              {caseStudy.metrics}
            </p>
          )}
        </div>

        {/* Note Section */}
        <div
          className="flex flex-col gap-2 p-4 rounded-lg border border-accent-blue-20 mt-4"
          style={{
            background: "rgba(26, 35, 50, 0.1)",
          }}
        >
          <div className="flex items-center gap-2">
            <Info size={20} className="text-accent-blue-40" />
            <h4
              className="text-foreground-white font-semibold uppercase tracking-wider"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
              }}
            >
              Note
            </h4>
          </div>
          <p
            className="text-foreground-light italic"
            style={{
              fontSize: "0.9375rem",
              color: "#a3a3a3",
              lineHeight: "1.7",
            }}
          >
            {caseStudy.note}
          </p>
        </div>
      </div>
    </Card>
  );
}

