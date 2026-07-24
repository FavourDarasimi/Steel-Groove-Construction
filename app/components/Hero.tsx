"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { motion, useReducedMotion } from "framer-motion";
import heroBg from "@/public/images/hero-bg.jpg";
import ScrollIndicator from "./ScrollIndicator";

const blanka = localFont({
  src: "../fonts/Blanka-Regular.otf",
  display: "swap",
  weight: "400",
});

const ease = [0.22, 1, 0.36, 1] as const;

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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
      </div>

      {/* Decorative concentric circles */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid meet"
          className="opacity-20"
        >
          <circle
            cx="400"
            cy="400"
            r="120"
            fill="none"
            stroke="#5a5a5a"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="400"
            r="200"
            fill="none"
            stroke="#5a5a5a"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="400"
            r="280"
            fill="none"
            stroke="#5a5a5a"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="400"
            r="360"
            fill="none"
            stroke="#5a5a5a"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Foreground content */}
      <div className="relative z-[2] flex flex-col items-center justify-center h-full px-6 md:px-12 text-center">
        <motion.div {...fadeIn(0)}>
          <div className="flex gap-3 mb-8 justify-center">
            <span className="inline-flex items-center gap-2 border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px]">
              <span className="w-[1px] h-3 bg-ash/50" />
              GENERAL CONTRACTING
            </span>
            <span className="inline-flex items-center gap-2 border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px]">
              <span className="w-[1px] h-3 bg-ash/50" />
              DESIGN-BUILD
            </span>
          </div>
        </motion.div>

        <motion.h1
          {...fadeIn(1)}
          className={`${blanka.className} text-[clamp(3.5rem,15vw,9rem)] text-ghost max-w-6xl leading-[0.85] tracking-[-0.06em] mb-8`}
        >
          WE BUILD<br />WHAT LASTS
        </motion.h1>

        <motion.p
          {...fadeIn(2)}
          className="text-heading text-ghost/70 max-w-[560px] leading-[1.2] pt-5"
        >
          A design-build general contracting firm rooted in craft, precision,
          and the belief that great buildings endure.
        </motion.p>

        <motion.div {...fadeIn(3)} className="mt-10">
          <a
            href="mailto:info@steelgrooveconstruction.com"
            className="inline-block border border-ghost text-body text-ghost px-8 py-3 rounded-[4.5px] bg-transparent no-underline hover:opacity-60 transition-opacity duration-200"
          >
            Make an Enquiry
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeIn(4)}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2]"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
