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
    <section className="px-6 md:px-12 py-[144px] md:py-[173px]">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-display text-ghost">
              <Counter value={stat.value} suffix={stat.suffix} />
              {stat.suffix}
            </span>
            <span className="text-caption text-ash">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
