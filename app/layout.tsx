import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Dynamic import for non-critical background component
const BackgroundGradients = dynamic(() => import("@/components/BackgroundGradients"), {
  ssr: false, // Background gradients are not critical for SSR
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://automation-architect.com"),
  title: {
    template: "%s | Automation Architect",
    default: "Automation Architect | Operational Automation Systems",
  },
  description: "Automation systems designed for real operations. I build n8n and Python workflows that eliminate manual work.",
  keywords: ["automation", "workflow automation", "n8n", "Python automation", "business process automation", "operational automation"],
  authors: [{ name: "Automation Architect" }],
  creator: "Automation Architect",
  publisher: "Automation Architect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Automation Architect",
    title: "Automation Architect | Operational Automation Systems",
    description: "Automation systems designed for real operations. I build n8n and Python workflows that eliminate manual work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Architect | Operational Automation Systems",
    description: "Automation systems designed for real operations. I build n8n and Python workflows that eliminate manual work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  charset: "utf-8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <BackgroundGradients />
        {/* Skip to main content link for keyboard navigation */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

