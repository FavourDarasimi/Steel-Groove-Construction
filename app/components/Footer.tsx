"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="px-6 md:px-12 mx-auto max-w-[1500px] py-20 md:py-28">
        <p className="font-display text-[clamp(2rem,5vw,3.5rem)] text-ink leading-[1.0] tracking-[-0.02em] max-w-[20ch] mb-8 font-[600]">
          We build<br />what lasts.
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-rule">
          <Link href="/" className="font-display text-heading-sm text-ink no-underline tracking-tight">
            STEEL GROOVE
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-body text-muted/60 no-underline hover:text-ink transition-colors duration-[var(--dur-short)]">Home</Link>
            <Link href="/#work" className="text-body text-muted/60 no-underline hover:text-ink transition-colors duration-[var(--dur-short)]">Work</Link>
            <Link href="/#services" className="text-body text-muted/60 no-underline hover:text-ink transition-colors duration-[var(--dur-short)]">Services</Link>
            <Link href="/contact" className="text-body text-muted/60 no-underline hover:text-ink transition-colors duration-[var(--dur-short)]">Contact</Link>
          </div>
          <span className="text-caption text-muted/40">
            &copy; {new Date().getFullYear()} Steel Groove Construction
          </span>
        </div>
      </div>
    </footer>
  );
}
