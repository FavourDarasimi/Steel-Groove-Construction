"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu01Icon } from "hugeicons-react";

const navLinks = ["Home", "Work", "Services", "Contact"];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 40 && !scrolled) setScrolled(true);
    if (y <= 40 && scrolled) setScrolled(false);
  });

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian">
        <motion.div
          className="border-b"
          style={{ borderColor: scrolled ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between py-5 px-6 md:px-12">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 no-underline">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="24" height="24" stroke="#ffffff" strokeWidth="1" fill="none" />
                <rect x="6" y="6" width="6" height="16" stroke="#ffffff" strokeWidth="1" fill="none" />
                <rect x="16" y="10" width="6" height="12" stroke="#ffffff" strokeWidth="1" fill="none" />
                <line x1="14" y1="2" x2="14" y2="6" stroke="#ffffff" strokeWidth="1" />
                <line x1="14" y1="22" x2="14" y2="26" stroke="#ffffff" strokeWidth="1" />
              </svg>
              <span className="text-heading-sm text-ghost tracking-tight">
                STEEL GROOVE
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={link === "Home" ? "/" : `/#${link.toLowerCase()}`}
                  className="text-body text-ghost no-underline hover:opacity-60 transition-opacity duration-200"
                >
                  {link}
                </a>
              ))}
              <a
                href="mailto:info@steelgrooveconstruction.com"
                className="inline-block border border-ghost text-caption text-ghost px-5 py-2 rounded-[4.5px] bg-transparent no-underline hover:opacity-60 transition-opacity duration-200"
              >
                Make an Enquiry
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-ghost"
              aria-label="Open menu"
            >
              <Menu01Icon size={24} strokeWidth={1} />
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-obsidian flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 md:right-12 text-ghost text-heading-sm"
            aria-label="Close menu"
          >
            CLOSE
          </button>
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "/" : `/#${link.toLowerCase()}`}
              className="text-heading text-ghost no-underline hover:opacity-60 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:info@steelgrooveconstruction.com"
            className="inline-block border border-ghost text-body text-ghost px-8 py-3 rounded-[4.5px] bg-transparent no-underline hover:opacity-60 transition-opacity duration-200 mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Make an Enquiry
          </a>
        </motion.div>
      )}
    </>
  );
}
