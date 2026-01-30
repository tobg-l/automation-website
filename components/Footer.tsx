import Link from "next/link";
import { Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
        <footer className="bg-black-000 border-t border-white/5" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          {/* Left Column */}
          <div className="flex flex-col gap-2">
            <p className="text-foreground-medium" style={{ fontSize: "0.875rem" }}>
              Automation systems that replace manual work — reliably.
            </p>
            <p className="text-foreground-medium" style={{ fontSize: "0.875rem" }}>
              © 2024 Automation Services. All rights reserved.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Quick Links */}
            <nav className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground-light hover:text-foreground-white transition-colors duration-300"
                  style={{ fontSize: "0.875rem" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* LinkedIn Icon Link */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-light hover:text-foreground-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <p
            className="text-center text-foreground-dark italic"
            style={{ fontSize: "0.75rem", color: "#404040" }}
          >
            I work with a limited number of projects at a time to ensure quality
            and fast delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}

