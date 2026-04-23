"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "Columbia", label: "University", sub: "Class of 2027" },
  { value: "Comp Bio", label: "Core Focus", sub: "Biology × Computing" },
  { value: "4+", label: "Projects Shipped", sub: "Real-world applications" },
  { value: "Open", label: "To Opportunities", sub: "Internships & research" },
];

export default function Snapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-20 border-t border-b"
      style={{
        background: "#0e1020",
        borderColor: "#1d2136",
      }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-bg-border">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 lg:px-10 py-10 lg:py-12 first:pl-0 last:pr-0"
              style={{ borderColor: "#1d2136" }}
            >
              <p
                className="heading-section mb-2"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", color: "#c4883e", fontWeight: 400 }}
              >
                {s.value}
              </p>
              <p className="text-text-primary text-sm font-medium mb-1">{s.label}</p>
              <p className="text-text-muted" style={{ fontSize: "0.75rem" }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
