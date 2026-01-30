"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "real-systems", label: "Real Systems" },
  { id: "reference-work", label: "Reference Work" },
];

export default function PortfolioNavigation() {
  const [activeSection, setActiveSection] = useState("real-systems");

  useEffect(() => {
    const handleScroll = () => {
      const realSystems = document.getElementById("real-systems");
      const referenceWork = document.getElementById("reference-work");

      if (realSystems && referenceWork) {
        const realSystemsTop = realSystems.getBoundingClientRect().top;
        const referenceWorkTop = referenceWork.getBoundingClientRect().top;
        // Account for fixed header (60px mobile, 70px desktop) + tab bar (~60px)
        const headerHeight = window.innerWidth >= 768 ? 70 : 60;
        const tabBarHeight = 60;
        const headerOffset = headerHeight + tabBarHeight;

        if (referenceWorkTop < headerOffset) {
          setActiveSection("reference-work");
        } else if (realSystemsTop < headerOffset) {
          setActiveSection("real-systems");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed header (60px mobile, 70px desktop) + tab bar (~60px)
      const headerHeight = window.innerWidth >= 768 ? 70 : 60;
      const tabBarHeight = 60;
      const offset = headerHeight + tabBarHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="sticky top-[60px] md:top-[70px] z-40 border-b border-white/5 bg-black-000/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <nav className="flex gap-1 max-w-[1200px] mx-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-4 md:px-6 py-3 md:py-4 text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? "text-foreground-white"
                  : "text-foreground-light hover:text-foreground-white"
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

