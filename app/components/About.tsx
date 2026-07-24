"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-[144px] md:py-[173px]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px] mb-6">
              ABOUT
            </span>
            <h2 className="text-display text-ghost mb-6">
              Built on craft,<br />guided by precision.
            </h2>
            <p className="text-heading text-ghost/70 max-w-[540px] leading-[1.2]">
              Every project begins with a simple belief — that great buildings
              are the result of rigorous thinking, honest materials, and
              collaborative process.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-body text-ash leading-[1.6]">
              Steel Groove Construction is a design-build general contracting
              firm operating across the Northeast. We specialize in projects
              that demand a high level of coordination, from ground-up
              commercial construction to intricate residential renovations.
            </p>
            <p className="text-body text-ash leading-[1.6]">
              Our team brings together architects, engineers, and builders under
              a single umbrella, ensuring that every decision — from material
              selection to sequencing — is made with the project's long-term
              performance in mind.
            </p>
            <p className="text-body text-ash leading-[1.6]">
              With 19 years of experience and over 200 projects delivered, we
              have built a reputation for reliability, transparency, and an
              uncompromising standard of quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
