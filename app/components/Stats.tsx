"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 19, suffix: "", label: "Years Operating" },
  { value: 212, suffix: "+", label: "Projects Delivered" },
  { value: 0.31, suffix: "", label: "OSHA Incident Rate" },
  { value: 96, suffix: "%", label: "On-Schedule Handover" },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const count = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = value % 1 === 0
            ? Math.round(latest).toLocaleString()
            : latest.toFixed(2);
        }
      },
    });
    return controls.stop;
  }, [count, value]);

  return (
    <span ref={ref}>
      0
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#fff" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#fff" strokeWidth="1" />
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#fff" strokeWidth="1" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#fff" strokeWidth="1" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 md:px-12 relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="inline-block border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px] mb-4">
            BY THE NUMBERS
          </span>
          <p className="text-body text-ash max-w-[480px]">
            Measurable results earned across nearly two decades of work.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 border-t border-ash/30 pt-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex flex-col gap-2 lg:border-r border-ash/30 lg:px-10 first:lg:pl-0 last:lg:border-r-0">
            <span className="text-display text-ghost">
              <Counter value={stat.value} suffix={stat.suffix} />
              {stat.suffix}
            </span>
            <span className="text-caption text-ash max-w-[130px]">{stat.label}</span>
          </div>
        ))}
        </motion.div>
      </div>
    </section>
  );
}
