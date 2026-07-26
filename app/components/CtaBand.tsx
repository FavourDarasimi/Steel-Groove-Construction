"use client";

import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-rule py-[144px] md:py-[173px]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 600"
          fill="none"
        >
          <g opacity="0.15">
            <path d="M0 600 L200 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M200 600 L400 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M400 600 L600 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M600 600 L800 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M800 600 L1000 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1000 600 L1200 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1200 600 L1400 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1400 600 L1600 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1600 600 L1800 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1800 600 L1920 0" stroke="currentColor" strokeWidth="1" className="text-muted" />
          </g>
          <g opacity="0.1">
            <path d="M0 0 L200 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M200 0 L400 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M400 0 L600 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M600 0 L800 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M800 0 L1000 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1000 0 L1200 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1200 0 L1400 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1400 0 L1600 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1600 0 L1800 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
            <path d="M1800 0 L1920 600" stroke="currentColor" strokeWidth="1" className="text-muted" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-start gap-8 px-6 md:px-12 mx-auto max-w-[1500px]">
        <h2 className="font-display text-display text-ink max-w-3xl font-[600]">
          Ready to build something that lasts?
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-accent text-body text-accent px-8 py-3 rounded-[4.5px] bg-transparent no-underline hover:opacity-80 transition-opacity duration-[var(--dur-short)]"
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
      </div>
    </section>
  );
}
