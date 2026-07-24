"use client";

import { motion } from "framer-motion";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-[#808080] bg-obsidian py-[144px] md:py-[173px]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.35">
            <path d="M0 600 L200 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M200 600 L400 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M400 600 L600 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M600 600 L800 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M800 600 L1000 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1000 600 L1200 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1200 600 L1400 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1400 600 L1600 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1600 600 L1800 0" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1800 600 L1920 0" stroke="#5a5a5a" strokeWidth="1" />
          </g>
          <g opacity="0.25">
            <path d="M0 0 L200 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M200 0 L400 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M400 0 L600 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M600 0 L800 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M800 0 L1000 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1000 0 L1200 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1200 0 L1400 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1400 0 L1600 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1600 0 L1800 600" stroke="#5a5a5a" strokeWidth="1" />
            <path d="M1800 0 L1920 600" stroke="#5a5a5a" strokeWidth="1" />
          </g>
          <g opacity="0.4">
            <rect x="630" y="100" width="660" height="400" stroke="#ffffff" strokeWidth="0.5" />
            <rect x="680" y="150" width="560" height="300" stroke="#ffffff" strokeWidth="0.5" />
            <rect x="730" y="200" width="460" height="200" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="960" y1="100" x2="960" y2="500" stroke="#ffffff" strokeWidth="0.5" />
            <line x1="630" y1="300" x2="1290" y2="300" stroke="#ffffff" strokeWidth="0.5" />
          </g>
          <g opacity="0.2">
            <circle cx="960" cy="300" r="280" stroke="#5a5a5a" strokeWidth="1" />
            <circle cx="960" cy="300" r="200" stroke="#5a5a5a" strokeWidth="1" />
            <circle cx="960" cy="300" r="120" stroke="#5a5a5a" strokeWidth="1" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-6 md:px-12 mx-auto max-w-[1500px]">
        <h2 className="text-display text-ghost max-w-3xl">
          Ready to build something that lasts?
        </h2>
        <motion.a
          href="/contact"
          className="group inline-flex items-center gap-2 border border-ghost text-body text-ghost px-8 py-3 rounded-[4.5px] bg-transparent no-underline hover:opacity-60 transition-opacity duration-200"
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
        </motion.a>
      </div>
    </section>
  );
}
