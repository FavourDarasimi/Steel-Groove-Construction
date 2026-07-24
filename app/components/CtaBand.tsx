"use client";

import { motion } from "framer-motion";

export default function CtaBand() {
  return (
    <section className="border-t border-ghost px-6 md:px-12 py-[144px] md:py-[173px]">
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-display text-ghost max-w-3xl">
          Ready to build something that lasts?
        </h2>
        <motion.a
          href="#contact"
          className="inline-block border border-ghost text-body text-ghost px-8 py-3 rounded-[4.5px] bg-transparent no-underline"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.2 }}
        >
          Start a Conversation
        </motion.a>
      </div>
    </section>
  );
}
