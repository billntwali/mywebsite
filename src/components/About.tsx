"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const TABS = ["Background", "Interests", "Beyond Tech"] as const;
type Tab = typeof TABS[number];

const TAB_CONTENT: Record<Tab, { body: string[] }> = {
  Background: {
    body: [
      "I'm a Columbia University undergraduate studying Computational Biology with a strong focus on computer science, software engineering, and data-driven systems. My work sits at the intersection of building useful products, designing reliable backends, and using code to make complex information easier to work with.",
      "Outside the classroom, I've built full-stack applications, mobile tools, Chrome extensions, REST APIs, database schemas, and AI-powered developer tools. I learn best by building, debugging, and shipping projects that real people can use.",
    ],
  },
  Interests: {
    body: [
      "I'm especially interested in software that solves practical problems: developer tools, fintech products, research platforms, data pipelines, and applications that make workflows faster, clearer, or more reliable.",
      "I care about the craft of software engineering itself: clean architecture, readable code, thoughtful product design, strong data modeling, and systems that feel simple on the surface because the engineering underneath is solid.",
    ],
  },
  "Beyond Tech": {
    body: [
      "Outside of software, I serve as a Resident Adviser at Columbia, supporting a community of 50+ students through mentorship, conflict mediation, programming, and everyday problem-solving.",
      "That work has shaped how I think about engineering too. The best systems are not just technically correct; they are built with people in mind. I care about mentorship, access, and creating environments where people feel supported enough to grow.",
    ],
  },
};

const IDENTITY = [
  {
    label: "Software Engineer",
    desc: "I enjoy building practical applications, APIs, and tools that solve real problems and are reliable enough for people to actually use.",
  },
  {
    label: "Systems Thinker",
    desc: "I like understanding how pieces fit together, from frontend interfaces to backend services, databases, data pipelines, and deployment decisions.",
  },
  {
    label: "Data-Focused",
    desc: "I’m drawn to problems where good software makes messy information easier to validate, analyze, search, and turn into useful decisions.",
  },
  {
    label: "Community-Driven",
    desc: "As an RA and mentor, I know technical work does not happen in isolation. Communication, trust, and empathy matter as much as code.",
  },
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
            background:
              "linear-gradient(to bottom, #09091a 0%, rgba(9,9,26,0.88) 50%, #09091a 100%)",
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
            <em style={{ fontStyle: "italic", color: "#c4883e" }}>
              the builds
            </em>
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
                  <p className="text-text-primary text-sm font-medium mb-1.5">
                    {item.label}
                  </p>
                  <p
                    className="text-text-secondary leading-relaxed"
                    style={{ fontSize: "0.875rem", fontWeight: 300 }}
                  >
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
                style={{
                  background: "#0e1020",
                  border: "1px solid #1d2136",
                  borderRadius: "2px",
                }}
              >
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {[
                    ["Location", "New York City"],
                    ["Background", "Rwanda → New York"],
                    ["Focus", "Software Engineering"],
                    ["Building", "Full-stack, mobile & data tools"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="label-mono mb-0.5" style={{ fontSize: "0.6rem" }}>
                        {k}
                      </p>
                      <p className="text-text-primary" style={{ fontSize: "0.8125rem" }}>
                        {v}
                      </p>
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
            <div className="flex gap-0 mb-8 border-b" style={{ borderColor: "#1d2136" }}>
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
                    borderBottom:
                      tab === t ? "1px solid #c4883e" : "1px solid transparent",
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
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
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