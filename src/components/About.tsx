"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const TABS = ["Background", "Interests", "Beyond Tech"] as const;
type Tab = typeof TABS[number];

const TAB_CONTENT: Record<Tab, { body: string[] }> = {
  Background: {
    body: [
      "I'm a Columbia University undergraduate studying at the intersection of biology and computing — a space where algorithms illuminate biological systems and data reshapes how we understand living things. My path has been shaped by a genuine curiosity: not just what the tools do, but why they work, and how they can become more useful.",
      "That curiosity extends beyond coursework. I've built full-stack applications, dug into data pipelines, and shipped tools that real people use. I learn by building, and I build toward things that actually matter.",
    ],
  },
  Interests: {
    body: [
      "I'm especially drawn to problems where software meets the real world in high-stakes ways — bioinformatics pipelines, healthcare data tools, nonprofit infrastructure, and developer tooling that helps other builders move faster.",
      "I'm also interested in the craft of software itself: clean architecture, thoughtful product design, and the kind of engineering that makes systems feel inevitable once you encounter them.",
    ],
  },
  "Beyond Tech": {
    body: [
      "Outside of code and research, I serve as a Resident Adviser at Columbia — a role that has taught me more about leadership, empathy, and navigating hard conversations than any class ever could. Supporting a community of students is its own kind of systems work.",
      "I care deeply about mentorship, academic access, and building environments where people feel supported to take risks, ask hard questions, and grow into their potential.",
    ],
  },
};

const IDENTITY = [
  { label: "Builder", desc: "I think in systems and ship real products. If it solves a real problem, I want to build it." },
  { label: "Research-Minded", desc: "Computational biology sits at an extraordinary intersection of data and life. I'm drawn to scientific problems where code becomes discovery." },
  { label: "Data-Focused", desc: "Good decisions come from good data. I love turning raw information into insight and building the pipelines that make it possible." },
  { label: "Community-Driven", desc: "As an RA and mentor, I know that technical work doesn't happen in isolation. People and trust matter as much as code." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [tab, setTab] = useState<Tab>("Background");

  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "#09091a" }}
    >
      {/* Background: hills image, very faded */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hills.png"
          alt=""
          fill
          className="object-cover"
          quality={75}
          style={{ opacity: 0.06, objectPosition: "center 60%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #09091a 0%, rgba(9,9,26,0.88) 50%, #09091a 100%)",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="label-section block mb-5">About</span>
          <h2
            className="heading-section"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
          >
            The person behind
            <br />
            <em style={{ fontStyle: "italic", color: "#c4883e" }}>the builds</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — identity cards */}
          <div className="space-y-5">
            {IDENTITY.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.09 }}
                className="flex items-start gap-5"
              >
                <div
                  style={{
                    width: "1px",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    background: "linear-gradient(to bottom, #c4883e, transparent)",
                    marginTop: "4px",
                  }}
                />
                <div>
                  <p className="text-text-primary text-sm font-medium mb-1.5">{item.label}</p>
                  <p className="text-text-secondary leading-relaxed" style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="pt-8"
            >
              <div
                className="p-6"
                style={{ background: "#0e1020", border: "1px solid #1d2136", borderRadius: "2px" }}
              >
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    ["Location", "New York City"],
                    ["Background", "Rwanda → New York"],
                    ["Focus", "CS + Computational Biology"],
                    ["Available", "Research & internships"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="label-mono mb-0.5" style={{ fontSize: "0.6rem" }}>{k}</p>
                      <p className="text-text-primary" style={{ fontSize: "0.8125rem" }}>{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — tabbed narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tab bar */}
            <div
              className="flex gap-0 mb-8 border-b"
              style={{ borderColor: "#1d2136" }}
            >
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="pb-3 mr-6 transition-all duration-250"
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    color: tab === t ? "#ece5d8" : "#404d62",
                    borderBottom: tab === t ? "1px solid #c4883e" : "1px solid transparent",
                    marginBottom: "-1px",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              {TAB_CONTENT[tab].body.map((para, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed"
                  style={{ fontSize: "0.9375rem", fontWeight: 300 }}
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-12"
            >
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="link-arrow"
              >
                Let's connect
                <span style={{ color: "#c4883e" }}>→</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
