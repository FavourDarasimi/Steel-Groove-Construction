"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import s1 from "@/public/images/service-1.jpg";
import s2 from "@/public/images/service-2.jpg";
import s3 from "@/public/images/service-3.jpg";
import s4 from "@/public/images/service-4.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

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
          <div className="flex items-center gap-4 mb-4">
            <span className="w-6 h-px bg-accent/60" />
            <span className="text-caption text-muted tracking-widest">SERVICES</span>
          </div>
          <p className="text-body text-muted/80 max-w-[480px]">
            Every capability we offer, from first sketch to final punch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {services.map((service) => (
          <motion.div
            key={service.category}
            className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src={service.src}
                alt={service.title}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-paper/95 via-paper/50 to-paper/20 z-[1] transition-opacity duration-300 group-hover:opacity-80" />

            <span className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 inline-block border border-ink/60 text-caption text-ink px-2.5 py-1 sm:px-3 rounded-[4.5px] transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              {service.category}
            </span>

            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 md:p-5">
              <h3 className="font-display text-heading-sm text-ink mb-1 font-[600]">{service.title}</h3>
              <p className="text-caption sm:text-caption text-muted/70 max-w-[440px] leading-[1.4] sm:leading-[1.43]">{service.body}</p>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
