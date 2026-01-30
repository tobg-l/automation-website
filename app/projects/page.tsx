import type { Metadata } from "next";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioNavigation from "@/components/PortfolioNavigation";
import RealSystems from "@/components/RealSystems";
import ReferenceWork from "@/components/ReferenceWork";
import PortfolioClosing from "@/components/PortfolioClosing";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Projects | Automation Architect",
  description: "Real operational automation systems and reference workflows. Case studies showing n8n and Python automation architecture.",
  openGraph: {
    title: "Projects | Automation Architect",
    description: "Real operational automation systems and reference workflows. Case studies showing n8n and Python automation architecture.",
    url: "/projects",
  },
  twitter: {
    card: "summary",
    title: "Projects | Automation Architect",
    description: "Real operational automation systems and reference workflows. Case studies showing n8n and Python automation architecture.",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="bg-black-000 relative">
      <StructuredData
        type="CollectionPage"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Automation Projects Portfolio",
          description: "Real operational automation systems and reference workflows",
          url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://automation-architect.com"}/projects`,
        }}
      />
      <PortfolioHero />
      <PortfolioNavigation />
      <RealSystems />
      <ReferenceWork />
      <PortfolioClosing />
    </main>
  );
}

