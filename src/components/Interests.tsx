"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INTERESTS = [
  {
    title: "Software Engineering",
    desc: "Clean systems, thoughtful architecture, and the craft of building software that lasts and scales with purpose.",
  },
  {
    title: "Computational Biology",
    desc: "Algorithms that reveal patterns in living systems — where code becomes a lens for understanding biology.",
  },
  {
    title: "Bioinformatics",
    desc: "Building pipelines and tools that help researchers navigate genomic, proteomic, and expression datasets.",
  },
  {
    title: "Data-Driven Products",
    desc: "Making data meaningful through visualization, analysis, and systems that help people make better decisions.",
  },
  {
    title: "Developer Tools",
    desc: "Extensions, CLIs, and platforms that make other builders faster, more capable, and less frustrated.",
  },
  {
    title: "Healthcare & Nonprofit Tech",
    desc: "Technology at its most meaningful — software that serves people in high-stakes, high-need contexts.",
  },
  {
    title: "Applied Research Systems",
    desc: "Software infrastructure that makes research faster, more reproducible, and easier to share and build on.",
  },
  {
    title: "AI in Science",
    desc: "How ML and intelligent systems can be embedded into useful, real-world scientific products — especially in biology.",
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
