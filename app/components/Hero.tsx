"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import heroBg from "@/public/images/hero-bg.jpg";
import ScrollIndicator from "./ScrollIndicator";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: i * 0.08,
    duration: 0.7,
    ease,
  },
});

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeIn = (i: number) => {
    if (prefersReduced) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: i * 0.08, duration: 0.7 },
      };
    }
    return stagger(i);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/60 via-paper/20 to-paper/80" />
      </div>

      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid meet"
          className="opacity-15"
        >
          <circle cx="400" cy="400" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted/50" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted/40" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted/30" />
          <circle cx="400" cy="400" r="360" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted/20" />
        </svg>
      </div>

      <div className="relative z-[2] flex flex-col items-start justify-center h-full px-6 md:px-12 mx-auto max-w-[1500px] pt-20">
        <motion.div {...fadeIn(0)}>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-8">
            <span className="inline-flex items-center gap-2 border border-rule text-caption text-ink/70 px-3 py-1 rounded-[4.5px] whitespace-nowrap">
              GENERAL CONTRACTING
            </span>
            <span className="inline-flex items-center gap-2 border border-accent/40 text-caption text-accent px-3 py-1 rounded-[4.5px] whitespace-nowrap">
              DESIGN-BUILD
            </span>
          </div>
        </motion.div>

        <motion.h1
          {...fadeIn(1)}
          className="font-display text-[clamp(3rem,14vw,8rem)] text-ink max-w-5xl leading-[0.85] tracking-[-0.06em] mb-8 font-[600]"
        >
          WE BUILD<br />WHAT LASTS
        </motion.h1>

        <motion.p
          {...fadeIn(2)}
          className="text-heading text-muted max-w-[560px] leading-[1.2]"
        >
          A design-build general contracting firm rooted in craft, precision,
          and the belief that great buildings endure.
        </motion.p>

        <motion.div {...fadeIn(3)} className="mt-10">
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
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]">
        <ScrollIndicator />
      </div>
    </section>
  );
}
