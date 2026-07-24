"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import s1 from "@/public/images/service-1.jpg";
import s2 from "@/public/images/service-2.jpg";
import s3 from "@/public/images/service-3.jpg";
import s4 from "@/public/images/service-4.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    src: s1,
    category: "DESIGN-BUILD",
    meta: "Integrated delivery",
    title: "End-to-End Design & Construction",
    body: "Integrated teams, unified control — one point of accountability from concept to completion.",
  },
  {
    src: s2,
    category: "GENERAL CONTRACTING",
    meta: "Construction management",
    title: "General Contracting Excellence",
    body: "Self-performing key trades with coordinated subcontractors, delivered on time and on budget.",
  },
  {
    src: s3,
    category: "RENOVATION",
    meta: "Adaptive reuse",
    title: "Thoughtful Renovation",
    body: "Preserving character while introducing modern performance, accessibility, and efficiency.",
  },
  {
    src: s4,
    category: "PRECONSTRUCTION",
    meta: "Estimating & planning",
    title: "Preconstruction Intelligence",
    body: "Cost modeling, value engineering, and constructability analysis that de-risk before groundbreaking.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[144px] md:py-[173px]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="mb-14">
          <h2 className="text-display text-ghost mb-3">Services</h2>
          <p className="text-body text-ash max-w-[480px]">
            Every capability we offer, from first sketch to final punch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service) => (
          <motion.div
            key={service.category}
            className="relative w-full aspect-[4/5] overflow-hidden group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease }}
            >
              <Image
                src={service.src}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-500 rounded-[8px]"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-black/50 z-[1]"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.65)" }}
              transition={{ duration: 0.3 }}
            />

            {/* Category badge */}
            <span className="absolute top-5 left-5 z-10 inline-block border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px]">
              {service.category}
            </span>

            {/* Meta */}


            {/* Bottom content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 p-5"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease }}
            >
              <h3 className="text-heading-sm text-ghost mb-1">{service.title}</h3>
              <p className="text-caption text-ghost/70 max-w-[440px]">{service.body}</p>
            </motion.div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
