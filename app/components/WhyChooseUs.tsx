"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const reasons = [
  {
    number: "01",
    title: "Integrated Teams",
    body: "Architects, engineers, and builders under one roof — no silos, no miscommunication.",
  },
  {
    number: "02",
    title: "Self-Performed Trades",
    body: "We keep critical work in-house for consistent quality and direct schedule control.",
  },
  {
    number: "03",
    title: "Risk Mitigation",
    body: "Early cost modeling and constructability analysis eliminate surprises before they surface.",
  },
  {
    number: "04",
    title: "Proven Track Record",
    body: "Over 200 projects delivered across the Northeast with a 19-year history of repeat clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-[144px] md:py-[173px]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-px bg-accent/60" />
            <span className="text-caption text-muted tracking-widest">WHY CHOOSE US</span>
          </div>
          <h2 className="font-display text-display text-ink mb-3 font-[600]">Built Different.</h2>
          <p className="text-body text-muted/80 max-w-[480px]">
            What sets us apart is not just what we build, but how we build it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {reasons.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="border-t border-rule pt-6"
            >
              <span className="block text-caption text-accent mb-3">{item.number}</span>
              <h3 className="font-display text-heading text-ink mb-2 font-[600]">{item.title}</h3>
              <p className="text-body text-muted/80 max-w-[440px]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
