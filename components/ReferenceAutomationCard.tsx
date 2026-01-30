"use client";

import {
  Sparkles,
  Mail,
  FileText,
  Users,
  Database,
  MessageSquare,
  Calendar,
} from "lucide-react";
import Card from "./ui/Card";

interface ReferenceAutomation {
  icon: any;
  badge: string;
  title: string;
  type: string;
  problem: string;
  systemDesign: string[];
  workflow: string[];
  outcome: string[];
}

interface ReferenceAutomationCardProps {
  automation: ReferenceAutomation;
}

export default function ReferenceAutomationCard({
  automation,
}: ReferenceAutomationCardProps) {
  const Icon = automation.icon;

  return (
    <Card className="h-full flex flex-col" hover={false}>
      <div className="flex flex-col gap-4 flex-1">
        {/* Badge and Icon */}
        <div className="flex items-start justify-between">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-accent-cyan-30"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              color: "#a3a3a3",
              fontSize: "0.75rem",
            }}
          >
            {automation.badge}
          </div>
          <Icon size={24} className="text-foreground-light opacity-50" />
        </div>

        {/* Title */}
        <h3
          className="text-foreground-white font-bold"
          style={{
            fontSize: "1.25rem",
          }}
        >
          {automation.title}
        </h3>

        {/* Type Label */}
        <p
          className="text-foreground-medium uppercase tracking-wider"
          style={{
            fontSize: "0.75rem",
            color: "#6b6b6b",
            letterSpacing: "0.05em",
          }}
        >
          {automation.type}
        </p>

        {/* Problem */}
        <div className="flex flex-col gap-2">
          <h4
            className="text-foreground-light font-semibold uppercase tracking-wider"
            style={{
              fontSize: "0.75rem",
              color: "#6b6b6b",
              letterSpacing: "0.05em",
            }}
          >
            Problem
          </h4>
          <p
            className="text-foreground-light"
            style={{
              fontSize: "0.9375rem",
              color: "#a3a3a3",
              lineHeight: "1.6",
            }}
          >
            {automation.problem}
          </p>
        </div>

        {/* System Design */}
        <div className="flex flex-col gap-2">
          <h4
            className="text-foreground-light font-semibold uppercase tracking-wider"
            style={{
              fontSize: "0.75rem",
              color: "#6b6b6b",
              letterSpacing: "0.05em",
            }}
          >
            System Design
          </h4>
          <ul className="flex flex-col gap-2">
            {automation.systemDesign.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2"
              >
                <span className="text-foreground-medium text-xs mt-1">•</span>
                <span
                  className="text-foreground-light"
                  style={{
                    fontSize: "0.875rem",
                    color: "#a3a3a3",
                    lineHeight: "1.5",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Workflow Overview */}
        <div className="flex flex-col gap-2">
          <h4
            className="text-foreground-light font-semibold uppercase tracking-wider"
            style={{
              fontSize: "0.75rem",
              color: "#6b6b6b",
              letterSpacing: "0.05em",
            }}
          >
            Workflow Overview
          </h4>
          <ul className="flex flex-col gap-2">
            {automation.workflow.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2"
              >
                <span className="text-foreground-medium text-xs mt-1">•</span>
                <span
                  className="text-foreground-light"
                  style={{
                    fontSize: "0.875rem",
                    color: "#a3a3a3",
                    lineHeight: "1.5",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div className="flex flex-col gap-2 mt-auto">
          <h4
            className="text-foreground-light font-semibold uppercase tracking-wider"
            style={{
              fontSize: "0.75rem",
              color: "#6b6b6b",
              letterSpacing: "0.05em",
            }}
          >
            Outcome
          </h4>
          <ul className="flex flex-col gap-2">
            {automation.outcome.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2"
              >
                <span className="text-foreground-medium text-xs mt-1">•</span>
                <span
                  className="text-foreground-light"
                  style={{
                    fontSize: "0.875rem",
                    color: "#a3a3a3",
                    lineHeight: "1.5",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

