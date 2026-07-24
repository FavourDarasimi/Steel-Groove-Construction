"use client";

import { motion } from "framer-motion";

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
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="inline-block border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px] mb-6">
            OUR PROCESS
          </span>
          <h2 className="text-display text-ghost mb-3">How we work.</h2>
          <p className="text-body text-ash max-w-[480px]">
            A transparent, four-phase approach that keeps every project on track and on budget.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-ash/30 md:-translate-x-px" />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 items-start ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:pr-12 pl-5 md:text-right" : "md:pl-12 pl-5"}`}>
                    <span className="block text-caption text-ash mb-3">{step.number}</span>
                    <h3 className="text-heading text-ghost mb-3">{step.title}</h3>
                    <p className={`text-body text-ash max-w-[440px] leading-[1.6] ${isEven ? "md:ml-auto" : ""}`}>{step.body}</p>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-[24px] h-[24px] rounded-full border border-ash flex items-center justify-center md:mx-auto">
                    <div className="w-[8px] h-[8px] rounded-full bg-ash" />
                  </div>

                  {/* Spacer for opposite side */}
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
