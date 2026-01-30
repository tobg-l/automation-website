import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import BookingOption from "@/components/BookingOption";
import ContactFAQ from "@/components/ContactFAQ";
import CapacityNote from "@/components/CapacityNote";
import ContactCTA from "@/components/ContactCTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact | Automation Architect",
  description: "Get in touch to discuss your automation needs. Book a discovery call or submit an inquiry about workflow automation.",
  openGraph: {
    title: "Contact | Automation Architect",
    description: "Get in touch to discuss your automation needs. Book a discovery call or submit an inquiry about workflow automation.",
    url: "/contact",
  },
  twitter: {
    card: "summary",
    title: "Contact | Automation Architect",
    description: "Get in touch to discuss your automation needs. Book a discovery call or submit an inquiry about workflow automation.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-black-000">
      <StructuredData
        type="ContactPage"
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Automation Architect",
          description: "Get in touch to discuss your automation needs",
          url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://automation-architect.com"}/contact`,
        }}
      />
      <ContactHero />
      <ContactForm />
      <BookingOption />
      <ContactFAQ />
      <CapacityNote />
      <ContactCTA />
    </main>
  );
}

