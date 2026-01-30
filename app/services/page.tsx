import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServicesIntro from "@/components/ServicesIntro";
import ServiceOfferings from "@/components/ServiceOfferings";
import MaintenanceSupport from "@/components/MaintenanceSupport";
import Boundaries from "@/components/Boundaries";
import PricingExplanation from "@/components/PricingExplanation";
import ServicesCTA from "@/components/ServicesCTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Services | Automation Architect",
  description: "Workflow audits, standard automations, and advanced automation systems. Clear pricing and transparent process for operational automation.",
  openGraph: {
    title: "Services | Automation Architect",
    description: "Workflow audits, standard automations, and advanced automation systems. Clear pricing and transparent process for operational automation.",
    url: "/services",
  },
  twitter: {
    card: "summary",
    title: "Services | Automation Architect",
    description: "Workflow audits, standard automations, and advanced automation systems. Clear pricing and transparent process for operational automation.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      "@type": "Service",
      name: "Workflow Audit",
      description: "A structured analysis of your current process to identify automation opportunities",
      provider: {
        "@type": "Person",
        name: "Automation Architect",
      },
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        price: "350-400",
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "Service",
      name: "Standard Automation Workflow",
      description: "For well-defined, single-purpose automations",
      provider: {
        "@type": "Person",
        name: "Automation Architect",
      },
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        price: "900-1200",
        priceCurrency: "EUR",
      },
    },
    {
      "@type": "Service",
      name: "Advanced Automation System",
      description: "For multi-step, business-critical workflows",
      provider: {
        "@type": "Person",
        name: "Automation Architect",
      },
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        price: "1500-2500",
        priceCurrency: "EUR",
      },
    },
  ];

  return (
    <main className="bg-black-000">
      <StructuredData
        type="Service"
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Automation Architect",
          description: "Automation systems designed for real operations",
          serviceType: "Business Process Automation",
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Automation Services",
            itemListElement: services.map((service, index) => ({
              "@type": "OfferCatalogItem",
              position: index + 1,
              itemOffered: service,
            })),
          },
        }}
      />
      <ServicesHero />
      <ServicesIntro />
      <ServiceOfferings />
      <MaintenanceSupport />
      <Boundaries />
      <PricingExplanation />
      <ServicesCTA />
    </main>
  );
}

