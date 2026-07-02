"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INTERESTS = [
  {
    title: "Software Engineering",
    desc: "Clean systems, thoughtful architecture, and the craft of building software that is reliable, useful, and built to scale.",
  },
  {
    title: "Backend Systems",
    desc: "APIs, databases, authentication, data models, and infrastructure that make applications fast, organized, and dependable.",
  },
  {
    title: "Full-Stack Products",
    desc: "Building user-facing tools from idea to implementation, connecting intuitive interfaces with strong engineering underneath.",
  },
  {
    title: "Data-Driven Tools",
    desc: "Making messy information easier to validate, search, analyze, and turn into decisions people can actually use.",
  },
  {
    title: "Developer Tools",
    desc: "Extensions, repository analyzers, automation tools, and platforms that help other builders move faster with less friction.",
  },
  {
    title: "Fintech & Markets",
    desc: "Software that supports faster decisions, clearer comparisons, reliable data flows, and real-world financial products.",
  },
  {
    title: "AI-Powered Applications",
    desc: "Using modern AI tools to build practical features, improve workflows, and make complex systems easier to understand.",
  },
  {
    title: "Research Software",
    desc: "Building tools for scientific and clinical teams where accuracy, validation, and usability matter in high-stakes workflows.",
  },
];

export default function Interests() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-28 lg:py-36"
      style={{ background: "#09091a" }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="label-section block mb-5">Exploring</span>
          <h2
            className="heading-section"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
          >
            What keeps me{" "}
            <em style={{ fontStyle: "italic", color: "#c4883e" }}>curious</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "#1d2136" }}
        >
          {INTERESTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group p-7 transition-all duration-400"
              style={{
                background: "#09091a",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#0e1020";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#09091a";
              }}
            >
              <p
                className="text-text-primary mb-3 transition-colors duration-300 group-hover:text-accent-gold"
                style={{ fontSize: "0.9375rem", fontWeight: 400 }}
              >
                {item.title}
              </p>
              <p
                className="text-text-muted leading-relaxed"
                style={{ fontSize: "0.8125rem", fontWeight: 300 }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Currently exploring callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 px-7 py-5 flex items-start gap-5"
          style={{ background: "#0e1020", border: "1px solid #1d2136", borderLeft: "2px solid rgba(196,136,62,0.5)", borderRadius: "2px" }}
        >
          <span className="label-section block shrink-0 mt-0.5">Now</span>
          <p className="text-text-secondary" style={{ fontSize: "0.9rem", fontWeight: 300 }}>
            Exploring the intersection of{" "}
            <span style={{ color: "#c4883e" }}>machine learning</span> and{" "}
            <span style={{ color: "#4e6e9a" }}>genomic data</span> — specifically how AI-assisted tools can make bioinformatics workflows faster and more accessible for researchers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
