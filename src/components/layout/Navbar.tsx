"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, utilityLinks, navLinks } from "@/data/content";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-300/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-midnight flex items-center justify-center text-gold font-display text-lg font-bold border border-gold/30">
                SLV
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-lg font-semibold text-midnight leading-tight block group-hover:text-gold-premium transition-colors">
                  Sri Lakshmi
                </span>
                <span className="font-display text-lg font-semibold text-midnight leading-tight block group-hover:text-gold-premium transition-colors">
                  Vidyaniketan
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-midnight transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/admissions"
                className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-midnight rounded-lg hover:bg-midnight-deep transition-colors border border-midnight/10"
              >
                Admissions
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 -mr-2 text-midnight hover:text-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-midnight/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold font-display text-lg font-bold border border-gold/30">
                    SLV
                  </div>
                  <span className="font-display text-xl font-semibold text-white">
                    Sri Lakshmi Vidyaniketan
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-2xl font-display text-white/90 hover:text-gold transition-colors border-b border-white/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4">
                <Link
                  href="/admissions"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-6 py-4 text-base font-semibold text-midnight bg-gold rounded-lg hover:bg-gold-premium transition-colors"
                >
                  Admissions
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-6 py-4 text-base font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
                <div className="flex items-center justify-center gap-6 pt-4 text-sm text-white/60">
                  <Link href={siteConfig.portals.parent} className="hover:text-gold transition-colors">Parent Portal</Link>
                  <Link href={siteConfig.portals.student} className="hover:text-gold transition-colors">Student Portal</Link>
                  <Link href={siteConfig.portals.faculty} className="hover:text-gold transition-colors">Faculty Portal</Link>
                  <Link href={siteConfig.portals.alumni} className="hover:text-gold transition-colors">Alumni Portal</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
