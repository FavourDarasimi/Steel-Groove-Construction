"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    quote: "They delivered a 40,000 sq ft commercial shell on time despite a steel shortage that pushed every other contractor on site. Their preconstruction team had already modeled three material alternatives before the shortage hit.",
    name: "David Chen",
    role: "Project Executive",
    company: "Lincoln Property Group",
  },
  {
    quote: "The renovation was a landmark brownstone with strict landmark restrictions. Steel Groove navigated approvals, matched existing masonry, and finished two weeks ahead of the owner's deadline.",
    name: "Sarah Mitchell",
    role: "Principal",
    company: "Mitchell Development Partners",
  },
  {
    quote: "We brought them in during design phase. Their value engineering saved 12% on structural steel alone — and the building performed better than the original spec.",
    name: "James Okafor",
    role: "Director of Construction",
    company: "Northeast Health Systems",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[144px] md:py-[173px]">
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
            <span className="text-caption text-muted tracking-widest">TESTIMONIALS</span>
          </div>
          <h2 className="font-display text-display text-ink mb-3 font-[600]">What clients say.</h2>
          <p className="text-body text-muted/80 max-w-[480px]">
            Construction is a relationship business. Here is what ours have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="border-t border-rule pt-8"
            >
              <p className="text-body text-muted/80 leading-[1.7] mb-8 max-w-[480px]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="flex flex-col">
                <cite className="font-display text-heading-sm text-ink not-italic font-[600]">{item.name}</cite>
                <span className="text-caption text-muted">{item.role}, {item.company}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
