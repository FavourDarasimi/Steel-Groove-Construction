"use client";

import { motion } from "framer-motion";

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
          <span className="inline-block border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px] mb-6">
            WHY CHOOSE US
          </span>
          <h2 className="text-display text-ghost mb-3">Built Different.</h2>
          <p className="text-body text-ash max-w-[480px]">
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
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-ash/30 pt-6"
            >
              <span className="block text-caption text-ash mb-3">{item.number}</span>
              <h3 className="text-heading text-ghost mb-2">{item.title}</h3>
              <p className="text-body text-ash max-w-[440px]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
