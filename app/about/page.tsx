import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import MyApproach from "@/components/MyApproach";
import TechnicalFoundation from "@/components/TechnicalFoundation";
import Background from "@/components/Background";
import WhyClientsWorkWithMe from "@/components/WhyClientsWorkWithMe";
import AboutClosing from "@/components/AboutClosing";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About | Automation Architect",
  description: "Automation architect focused on operational clarity. I design automation systems with clarity, reliability, and maintainability.",
  openGraph: {
    title: "About | Automation Architect",
    description: "Automation architect focused on operational clarity. I design automation systems with clarity, reliability, and maintainability.",
    url: "/about",
  },
  twitter: {
    card: "summary",
    title: "About | Automation Architect",
    description: "Automation architect focused on operational clarity. I design automation systems with clarity, reliability, and maintainability.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-black-000">
      <StructuredData
        type="Person"
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Automation Architect",
          jobTitle: "Automation Architect",
          description: "Automation architect focused on operational clarity",
          knowsAbout: ["Workflow Automation", "n8n", "Python", "Business Process Automation", "Operational Automation"],
          url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://automation-architect.com"}/about`,
        }}
      />
      <AboutHero />
      <MyApproach />
      <TechnicalFoundation />
      <Background />
      <WhyClientsWorkWithMe />
      <AboutClosing />
    </main>
  );
}

