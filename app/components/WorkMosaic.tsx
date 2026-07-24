"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/images/mosaic-1.jpg";
import img2 from "@/public/images/mosaic-2.jpg";
import img3 from "@/public/images/mosaic-3.jpg";
import img4 from "@/public/images/mosaic-4.jpg";
import img5 from "@/public/images/mosaic-5.jpg";
import img6 from "@/public/images/mosaic-6.jpg";

const projects = [
  { src: img1, category: "COMMERCIAL", title: "Riverfront Tower" },
  { src: img2, category: "RESIDENTIAL", title: "Hilltop Residence" },
  { src: img3, category: "CIVIC", title: "Public Library" },
  { src: img4, category: "INTERIORS", title: "Lobby Renovation" },
  { src: img5, category: "FIELD", title: "Site Operations" },
  { src: img6, category: "DETAIL", title: "Steel Joint Study" },
];

const gridClasses = [
  "col-span-6 row-span-2",     // 1 - large
  "col-span-6 row-span-2",     // 2 - large
  "col-span-4 row-span-1",     // 3 - medium
  "col-span-4 row-span-1",     // 4 - medium
  "col-span-4 row-span-1",     // 5 - medium
  "col-span-12 row-span-1",    // 6 - full width
];

export default function WorkMosaic() {
  return (
    <section className="px-6 md:px-12 py-[144px] md:py-[173px]">
      <div className="mb-14">
        <h2 className="text-display text-ghost mb-3">Selected Work</h2>
        <p className="text-body text-ash max-w-[480px]">
          A curated selection of projects spanning commercial, residential, and civic work.
        </p>
      </div>

      <div className="grid grid-cols-12 auto-rows-[200px] md:auto-rows-[280px] gap-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.category}
            className={`${gridClasses[i]} relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ marginLeft: i === 1 ? "-2px" : 0, marginTop: i === 3 ? "-2px" : 0 }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            {/* Category badge */}
            <span className="absolute top-3 left-3 z-10 inline-block border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px]">
              {project.category}
            </span>
            {/* Bottom gradient scrim + title */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-[2]" />
            <span className="absolute bottom-3 left-3 z-10 text-heading-sm text-ghost">
              {project.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
