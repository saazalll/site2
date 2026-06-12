"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out border-b flex items-center",
          scrolled ? "bg-primary/80 backdrop-blur-xl border-border" : "bg-transparent border-transparent"
        )}
        style={{ height: "var(--navbar-height)" }}
      >
        <div 
          className="w-full flex items-center justify-between"
          style={{ paddingLeft: "clamp(24px, 4vw, 60px)", paddingRight: "clamp(24px, 4vw, 60px)" }}
        >
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-start z-50">
            <span 
              className="font-serif tracking-[0.12em] uppercase font-light text-textPrimary leading-none"
              style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}
            >
              Studio V
            </span>
            <span 
              className="tracking-[0.18em] uppercase text-textSecondary group-hover:text-accent transition-colors leading-none mt-1"
              style={{ fontSize: "clamp(7px, 0.6vw, 9px)" }}
            >
              Fine Art Photography
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative overflow-visible group py-1 uppercase tracking-[0.18em] font-medium"
                  style={{ fontSize: "clamp(9px, 0.7vw, 11px)" }}
                >
                  <div className="flex flex-col items-center">
                    <span className={clsx("transition-colors", isActive ? "text-accent" : "text-textPrimary group-hover:text-accent")}>
                      {link.label}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              );
            })}
            
            <div className="flex items-center gap-6 ml-4">
              <ThemeToggle />
              
              <Link
                href="/contact"
                className="border border-border uppercase tracking-[0.2em] hover:bg-textPrimary hover:text-primary transition-colors duration-500 rounded-sm"
                style={{ 
                  fontSize: "clamp(9px, 0.7vw, 11px)",
                  padding: "clamp(8px, 0.8vw, 12px) clamp(12px, 1vw, 20px)"
                }}
              >
                Begin a Project
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <ThemeToggle />
            <button
              className="p-2 text-textPrimary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center space-y-8">
              {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-display font-serif text-textPrimary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-12 text-center text-textSecondary text-small"
            >
              <p>studio@example.com</p>
              <p>+44 20 7123 4567</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
