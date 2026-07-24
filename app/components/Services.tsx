"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import s1 from "@/public/images/service-1.svg";
import s2 from "@/public/images/service-2.svg";
import s3 from "@/public/images/service-3.svg";
import s4 from "@/public/images/service-4.svg";

const services = [
  {
    src: s1,
    category: "DESIGN-BUILD",
    meta: "Integrated delivery",
    title: "End-to-End Design & Construction",
    body: "From concept to completion, our integrated teams deliver unified project control, streamlined communication, and a single point of accountability.",
    reverse: false,
  },
  {
    src: s2,
    category: "GENERAL CONTRACTING",
    meta: "Construction management",
    title: "General Contracting Excellence",
    body: "We self-perform key trades and coordinate every subcontractor to deliver projects on time, on budget, and above standard.",
    reverse: true,
  },
  {
    src: s3,
    category: "RENOVATION",
    meta: "Adaptive reuse",
    title: "Thoughtful Renovation",
    body: "Breathing new life into existing structures — preserving character while introducing modern performance, accessibility, and efficiency.",
    reverse: false,
  },
  {
    src: s4,
    category: "PRECONSTRUCTION",
    meta: "Estimating & planning",
    title: "Preconstruction Intelligence",
    body: "Early-stage cost modeling, value engineering, and constructability analysis that de-risk projects before groundbreaking.",
    reverse: true,
  },
];

export default function Services() {
  return (
    <section className="px-6 md:px-12 py-[144px] md:py-[173px]">
      <div className="mb-20">
        <h2 className="text-display text-ghost mb-3">Services</h2>
        <p className="text-body text-ash max-w-[480px]">
          Every capability we offer, from first sketch to final punch.
        </p>
      </div>

      <div className="flex flex-col gap-28">
        {services.map((service) => (
          <motion.div
            key={service.category}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            <div
              className={`relative w-full aspect-[6/5] ${
                service.reverse ? "md:order-2" : "md:order-1"
              }`}
            >
              <Image
                src={service.src}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Copy */}
            <div
              className={`flex flex-col gap-4 ${
                service.reverse ? "md:order-1" : "md:order-2"
              }`}
            >
              <span className="inline-block self-start border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px]">
                {service.category}
              </span>
              <span className="text-caption text-ash">{service.meta}</span>
              <h3 className="text-heading-lg text-ghost">{service.title}</h3>
              <p className="text-body text-ash max-w-[480px]">{service.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
