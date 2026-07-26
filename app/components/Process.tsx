"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discovery & Briefing",
    body: "We learn your goals, site constraints, and budget. No assumptions — just questions.",
  },
  {
    number: "02",
    title: "Concept & Design",
    body: "Our in-house team develops schematic designs, massing studies, and initial cost models.",
  },
  {
    number: "03",
    title: "Estimation & Value Engineering",
    body: "We refine the budget, explore alternatives, and lock in scope before breaking ground.",
  },
  {
    number: "04",
    title: "Construction & Delivery",
    body: "Self-performed trades, coordinated schedules, and onsite quality control from foundation to finish.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-[144px] md:py-[173px]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-6 h-px bg-accent/60" />
            <span className="text-caption text-muted tracking-widest">OUR PROCESS</span>
          </div>
          <h2 className="font-display text-display text-ink mb-3 font-[600]">How we work.</h2>
          <p className="text-body text-muted/80 max-w-[480px]">
            A transparent, four-phase approach that keeps every project on track and on budget.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[12px] md:left-1/2 top-0 bottom-0 w-px bg-rule md:-translate-x-px" />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className={`relative flex md:flex-row gap-6 md:gap-0 items-start ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "md:pr-12 pl-9 md:text-right" : "md:pl-12 pl-9"}`}>
                    <span className="block text-caption text-muted mb-3">{step.number}</span>
                    <h3 className="font-display text-heading text-ink mb-3 font-[600]">{step.title}</h3>
                    <p className={`text-body text-muted/80 max-w-[440px] leading-[1.6] ${isEven ? "md:ml-auto" : ""}`}>{step.body}</p>
                  </div>

                  <div className="relative z-10 flex-shrink-0 w-6 h-6 -ml-3 md:ml-0 md:mx-auto">
                    <div className="absolute inset-0 rounded-full border border-rule bg-paper" />
                    <div className="absolute inset-[5px] rounded-full bg-accent/60" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
