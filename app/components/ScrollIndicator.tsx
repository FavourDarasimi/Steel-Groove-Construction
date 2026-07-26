"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-caption text-muted/50 tracking-widest">SCROLL</span>
      <div className="relative h-16 w-px bg-rule">
        <motion.div
          className="absolute top-0 left-0 w-px h-8 bg-accent/50"
          animate={{ top: ["0%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}
