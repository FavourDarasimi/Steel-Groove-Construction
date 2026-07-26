"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu01Icon } from "hugeicons-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/70 backdrop-blur-lg">
        <div className="flex items-center justify-between py-5 px-6 md:px-12 mx-auto max-w-[1500px]">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <rect x="2" y="2" width="24" height="24" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="6" y="6" width="6" height="16" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="16" y="10" width="6" height="12" stroke="currentColor" strokeWidth="1" fill="none" />
              <line x1="14" y1="2" x2="14" y2="6" stroke="currentColor" strokeWidth="1" />
              <line x1="14" y1="22" x2="14" y2="26" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="font-display text-heading-sm text-ink tracking-tight">
              STEEL GROOVE
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body text-muted/60 no-underline hover:text-ink transition-colors duration-[var(--dur-short)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-accent text-body text-accent px-5 py-2 rounded-[4.5px] bg-transparent no-underline hover:opacity-80 transition-opacity duration-[var(--dur-short)]"
            >
              Make an Enquiry
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M3 8H13" stroke="currentColor" strokeWidth="1" />
                <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-ink hover:text-muted transition-colors"
            aria-label="Open menu"
          >
            <Menu01Icon size={24} strokeWidth={1} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-paper/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 md:right-12 text-ink"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M6 6L18 18M18 6L6 18" />
            </svg>
          </button>
          {["Home", "Work", "Services", "Contact"].map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "/" : link === "Contact" ? "/contact" : `/#${link.toLowerCase()}`}
              className="font-display text-display text-ink no-underline hover:text-muted transition-colors duration-[var(--dur-short)]"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-accent text-body text-accent px-8 py-3 rounded-[4.5px] bg-transparent no-underline hover:opacity-80 transition-opacity duration-[var(--dur-short)] mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Make an Enquiry
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M3 8H13" stroke="currentColor" strokeWidth="1" />
              <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
