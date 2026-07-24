"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "@/app/components/Nav";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Nav />

      <section className="min-h-screen pt-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#fff" strokeWidth="1" />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#fff" strokeWidth="1" />
            <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#fff" strokeWidth="1" />
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#fff" strokeWidth="1" />
            <circle cx="50%" cy="50%" r="30%" fill="none" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-12 relative z-[1]">
          {/* Heading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 py-20 md:py-28 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="inline-block border border-ghost text-caption text-ghost px-3 py-1 rounded-[4.5px] mb-6">
                GET IN TOUCH
              </span>
              <h1 className="text-[clamp(2.5rem,8vw,77px)] text-ghost max-w-4xl mb-6 leading-[0.9] tracking-[-0.04em]">
                Let&rsquo;s start<br />a conversation.
              </h1>
              <p className="text-heading text-ash max-w-[560px]">
                Tell us about your project. We&rsquo;ll respond within one business day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="hidden lg:flex justify-end items-end"
            >
              <svg width="320" height="200" viewBox="0 0 320 200" fill="none" className="opacity-15">
                <rect x="2" y="2" width="316" height="196" stroke="#fff" strokeWidth="1" />
                <rect x="20" y="20" width="120" height="80" stroke="#fff" strokeWidth="1" />
                <rect x="180" y="20" width="120" height="80" stroke="#fff" strokeWidth="1" />
                <rect x="20" y="120" width="120" height="60" stroke="#fff" strokeWidth="1" />
                <rect x="180" y="120" width="120" height="60" stroke="#fff" strokeWidth="1" />
                <line x1="80" y1="2" x2="80" y2="200" stroke="#fff" strokeWidth="1" />
                <line x1="240" y1="2" x2="240" y2="200" stroke="#fff" strokeWidth="1" />
                <line x1="20" y1="100" x2="140" y2="100" stroke="#fff" strokeWidth="1" />
                <line x1="180" y1="100" x2="300" y2="100" stroke="#fff" strokeWidth="1" />
                <motion.g
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "160px 100px" }}
                >
                  <rect x="145" y="85" width="30" height="30" stroke="#fff" strokeWidth="1" fill="none" />
                </motion.g>
              </svg>
            </motion.div>
          </div>

          {/* Form + Info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 pb-[144px] md:pb-[173px]">
            {/* Form / Success */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease }}
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-caption text-ash">Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="bg-transparent border border-ash/30 text-body text-ghost px-4 py-3 rounded-[4.5px] outline-none focus:border-ghost transition-colors duration-200 placeholder:text-ash/40"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-caption text-ash">Email</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-transparent border border-ash/30 text-body text-ghost px-4 py-3 rounded-[4.5px] outline-none focus:border-ghost transition-colors duration-200 placeholder:text-ash/40"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-caption text-ash">Phone (optional)</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-transparent border border-ash/30 text-body text-ghost px-4 py-3 rounded-[4.5px] outline-none focus:border-ghost transition-colors duration-200 placeholder:text-ash/40"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="text-caption text-ash">Project Type</label>
                      <select
                        id="projectType"
                        className="bg-transparent border border-ash/30 text-body text-ghost px-4 py-3 rounded-[4.5px] outline-none focus:border-ghost transition-colors duration-200 appearance-none"
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5L6 8L9 5' stroke='%23888' stroke-width='1' fill='none'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                      >
                        <option value="" className="bg-obsidian">Select project type</option>
                        <option value="commercial" className="bg-obsidian">Commercial</option>
                        <option value="residential" className="bg-obsidian">Residential</option>
                        <option value="renovation" className="bg-obsidian">Renovation</option>
                        <option value="preconstruction" className="bg-obsidian">Preconstruction</option>
                        <option value="other" className="bg-obsidian">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-caption text-ash">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        required
                        className="bg-transparent border border-ash/30 text-body text-ghost px-4 py-3 rounded-[4.5px] outline-none focus:border-ghost transition-colors duration-200 placeholder:text-ash/40 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group self-start inline-flex items-center gap-2 border border-ghost text-body text-ghost px-8 py-3 rounded-[4.5px] bg-transparent no-underline hover:opacity-60 transition-opacity duration-200"
                    >
                      Send Enquiry
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M3 8H13" stroke="currentColor" strokeWidth="1" />
                        <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5, ease }}
                    className="flex flex-col items-start gap-6 pt-4"
                  >
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect x="2" y="2" width="44" height="44" stroke="#fff" strokeWidth="1" />
                      <path d="M14 24L22 32L34 18" stroke="#fff" strokeWidth="1" />
                    </svg>
                    <h2 className="text-display text-ghost">Thank you.</h2>
                    <p className="text-heading text-ash max-w-[480px] leading-[1.3]">
                      Your enquiry has been received. Our team will review the details and reach out within one business day.
                    </p>
                    <p className="text-body text-ash max-w-[480px]">
                      In the meantime, feel free to call us directly at <a href="tel:+15551234567" className="text-ghost no-underline hover:opacity-60 transition-opacity">+1 (555) 123-4567</a>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 inline-flex items-center gap-2 border border-ghost text-body text-ghost px-8 py-3 rounded-[4.5px] bg-transparent no-underline hover:opacity-60 transition-opacity duration-200"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="lg:col-span-2 flex flex-col gap-10 pt-2"
            >
              <div className="flex flex-col gap-6">
                <span className="text-caption text-ash tracking-wider">CONTACT</span>
                <div className="flex flex-col gap-4">
                  <a href="mailto:info@steelgrooveconstruction.com" className="text-body text-ghost no-underline hover:opacity-60 transition-opacity duration-200">
                    info@steelgrooveconstruction.com
                  </a>
                  <a href="tel:+15551234567" className="text-body text-ghost no-underline hover:opacity-60 transition-opacity duration-200">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-caption text-ash tracking-wider">LOCATION</span>
                <p className="text-body text-ghost leading-[1.6]">
                  200 Lincoln Street<br />
                  Suite 400<br />
                  Boston, MA 02111
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <span className="text-caption text-ash tracking-wider">HOURS</span>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-body text-ghost"><span>Mon – Fri</span><span className="text-ash">7:00 AM – 5:00 PM</span></div>
                  <div className="flex justify-between text-body text-ghost"><span>Sat – Sun</span><span className="text-ash">Closed</span></div>
                </div>
              </div>

              {/* Decorative architectural element */}
              <div className="mt-6 pt-10 border-t border-ash/30">
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="opacity-20">
                  <rect x="2" y="2" width="116" height="76" stroke="#fff" strokeWidth="1" />
                  <rect x="12" y="12" width="40" height="56" stroke="#fff" strokeWidth="1" />
                  <rect x="68" y="12" width="40" height="56" stroke="#fff" strokeWidth="1" />
                  <line x1="32" y1="2" x2="32" y2="80" stroke="#fff" strokeWidth="1" />
                  <line x1="88" y1="2" x2="88" y2="80" stroke="#fff" strokeWidth="1" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
