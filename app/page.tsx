import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustSignalStrip from "@/components/TrustSignalStrip";
import WhatIAutomate from "@/components/WhatIAutomate";
import HowMySystemsWork from "@/components/HowMySystemsWork";
import PortfolioPreview from "@/components/PortfolioPreview";
import ImpactMetrics from "@/components/ImpactMetrics";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import FinalCTA from "@/components/FinalCTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Automation Architect | Operational Automation Systems",
  description: "Automation systems that replace manual work reliably. I design and implement n8n and Python workflows to eliminate repetitive operational tasks.",
  openGraph: {
    title: "Automation Architect | Operational Automation Systems",
    description: "Automation systems that replace manual work reliably. I design and implement n8n and Python workflows to eliminate repetitive operational tasks.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Architect | Operational Automation Systems",
    description: "Automation systems that replace manual work reliably. I design and implement n8n and Python workflows to eliminate repetitive operational tasks.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="bg-black-000">
      <StructuredData
        type="WebSite"
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Automation Architect",
          description: "Automation systems designed for real operations",
          url: process.env.NEXT_PUBLIC_SITE_URL || "https://automation-architect.com",
        }}
      />
      <Hero />
      <TrustSignalStrip />
      <WhatIAutomate />
      <HowMySystemsWork />
      <PortfolioPreview />
      <ImpactMetrics />
      <WhyWorkWithMe />
      <FinalCTA />
    </main>
  );
}

