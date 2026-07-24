"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-8">
          {["Work", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Work" ? "#work" : "#contact"}
              className="relative text-body text-ghost no-underline group"
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
        <span className="text-caption text-ash">
          &copy; {new Date().getFullYear()} Steel Groove Construction. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
