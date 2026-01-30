"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load icons (only needed for mobile menu)
const Menu = dynamic(() => import("lucide-react").then((mod) => ({ default: mod.Menu })), { ssr: false });
const X = dynamic(() => import("lucide-react").then((mod) => ({ default: mod.X })), { ssr: false });

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { y: 0 } : { y: -100 }}
        animate={{ y: 0 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="relative">
          {/* Dark blue gradient glow in top right corner */}
          <div
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top right, rgba(30, 70, 120, 0.08) 0%, transparent 70%)`,
            }}
          />

          {/* Navigation bar */}
          <nav
            className="relative backdrop-blur-[20px] border-b border-white/5 h-[60px] md:h-[70px]"
            style={{
              background: "rgba(0, 0, 0, 0.8)",
            }}
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
              {/* Logo/Brand */}
              <Link
                href="/"
                className="text-foreground-white font-display text-xl font-semibold hover:text-foreground-light transition-colors duration-300"
              >
                Automation
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center" style={{ gap: "2rem" }}>
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative text-[0.9375rem] font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-foreground-white"
                          : "text-foreground-light hover:text-foreground-white"
                      }`}
                      style={{ fontSize: "0.9375rem", fontWeight: 500 }}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground-white"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden text-foreground-light hover:text-foreground-white transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-foreground-white" />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black-000/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-black-010 backdrop-blur-[20px] z-50 md:hidden border-l border-white/5"
              style={{
                background: "rgba(10, 10, 10, 0.95)",
              }}
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`text-[0.9375rem] font-medium transition-colors duration-300 py-2 ${
                            isActive
                              ? "text-foreground-white"
                              : "text-foreground-light hover:text-foreground-white"
                          }`}
                          style={{ fontSize: "0.9375rem", fontWeight: 500 }}
                        >
                          {item.label}
                          {isActive && (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="mt-2 h-0.5 w-8 bg-foreground-white"
                              initial={false}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[60px] md:h-[70px]" />
    </>
  );
}

