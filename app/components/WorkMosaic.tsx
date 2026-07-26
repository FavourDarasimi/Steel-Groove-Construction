"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/images/mosaic-1.jpg";
import img2 from "@/public/images/mosaic-2.jpg";
import img3 from "@/public/images/mosaic-3.jpg";
import img4 from "@/public/images/mosaic-4.jpg";
import img5 from "@/public/images/mosaic-5.jpg";
import img6 from "@/public/images/mosaic-6.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
  { src: img1, category: "COMMERCIAL", title: "Riverfront Tower" },
  { src: img2, category: "RESIDENTIAL", title: "Hilltop Residence" },
  { src: img3, category: "CIVIC", title: "Public Library" },
  { src: img4, category: "INTERIORS", title: "Lobby Renovation" },
  { src: img5, category: "FIELD", title: "Site Operations" },
  { src: img6, category: "DETAIL", title: "Steel Joint Study" },
];

const gridClasses = [
  "col-span-12 md:col-span-6 md:row-span-2",
  "col-span-12 md:col-span-6 md:row-span-2",
  "col-span-12 md:col-span-4 md:row-span-1",
  "col-span-12 md:col-span-4 md:row-span-1",
  "col-span-12 md:col-span-4 md:row-span-1",
  "col-span-12 md:col-span-12 md:row-span-1",
];

export default function WorkMosaic() {
  return (
    <section id="work" className="py-[144px] md:py-[173px]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-6 h-px bg-accent/60" />
            <span className="text-caption text-muted tracking-widest">SELECTED WORK</span>
          </div>
          <p className="text-body text-muted/80 max-w-[480px]">
            A curated selection of projects spanning commercial, residential, and civic work.
          </p>
        </div>

        <div className="grid grid-cols-12 auto-rows-[200px] md:auto-rows-[280px] gap-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.category}
            className={`${gridClasses[i]} relative overflow-hidden group`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease,
            }}
            style={{ marginLeft: i === 1 ? "-2px" : 0, marginTop: i === 3 ? "-2px" : 0 }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-paper/40 z-[1] transition-opacity duration-300 group-hover:opacity-20" />
            <span className="absolute top-3 left-3 z-10 inline-block border border-ink/60 text-caption text-ink px-3 py-1 rounded-[4.5px] transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              {project.category}
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-paper/70 to-transparent z-[2]" />
            <span className="absolute bottom-3 left-3 z-10 font-display text-heading-sm text-ink">
              {project.title}
            </span>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
