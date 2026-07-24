"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#808080]">
      <div className="px-6 md:px-12 mx-auto max-w-[1500px] py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Company */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-3 no-underline">
              <svg
                width="24"
                height="24"
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
            <p className="text-body text-ash max-w-[260px]">
              A design-build general contracting firm rooted in craft, precision, and the belief that great buildings endure.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-caption text-ash tracking-wider">NAVIGATION</span>
            <div className="flex flex-col gap-3">
              {["Home", "Work", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={link === "Home" ? "/" : `/#${link.toLowerCase()}`}
                  className="relative text-body text-ghost no-underline w-fit group"
                >
                  {link}
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-ghost"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: "left", width: "100%" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <span className="text-caption text-ash tracking-wider">SERVICES</span>
            <div className="flex flex-col gap-3">
              {["Design-Build", "General Contracting", "Renovation", "Preconstruction"].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-body text-ghost no-underline hover:opacity-60 transition-opacity duration-200"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-caption text-ash tracking-wider">CONTACT</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@steelgrooveconstruction.com"
                className="text-body text-ghost no-underline hover:opacity-60 transition-opacity duration-200"
              >
                info@steelgrooveconstruction.com
              </a>
              <a
                href="tel:+15551234567"
                className="text-body text-ghost no-underline hover:opacity-60 transition-opacity duration-200"
              >
                (555) 123-4567
              </a>
              <span className="text-body text-ash">
                New York, NY
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ash/30 px-6 md:px-12 mx-auto max-w-[1500px] py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-caption text-ash">
            &copy; {new Date().getFullYear()} Steel Groove Construction. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-caption text-ash no-underline hover:opacity-60 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
