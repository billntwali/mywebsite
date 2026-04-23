"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Experience {
  role: string;
  org: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Resident Adviser",
    org: "Columbia University Housing",
    period: "Aug 2024 – Present",
    type: "Leadership",
    description:
      "Live-in community leader for a floor of Columbia undergraduates. On-call crisis support, student wellness programming, and close collaboration with the Dean of Students office.",
    highlights: [
      "On-call crisis support and student wellness coordination",
      "Designed and facilitated community programming and academic workshops",
      "Collaborated with Dean of Students office on policy and student affairs",
    ],
  },
  {
    role: "Research Assistant",
    org: "Computational Biology Lab",
    period: "Jan 2024 – Present",
    type: "Research",
    description:
      "Contribute to research at the intersection of computational methods and biological systems — data processing pipelines, genomic analysis, and research software tooling.",
    highlights: [
      "Built data cleaning and analysis pipelines for genomic datasets",
      "Contributed to literature reviews and experimental design",
      "Developed reproducible research workflows using Python and R",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Tech Organization",
    period: "Summer 2024",
    type: "Engineering",
    description:
      "Full-stack feature development and analytics tooling in a fast-moving engineering team. Worked across frontend and backend, participating in code review, sprint planning, and architectural decisions.",
    highlights: [
      "Built and shipped user-facing features in React and TypeScript",
      "Improved data pipeline performance with backend optimization",
      "Participated in sprint reviews, retros, and technical design discussions",
    ],
  },
  {
    role: "Academic Tutor & Mentor",
    org: "Columbia Academic Programs",
    period: "Sep 2023 – Present",
    type: "Mentorship",
    description:
      "One-on-one academic support in STEM subjects, focused on making technical material accessible and building genuine understanding rather than surface recall.",
    highlights: [
      "One-on-one tutoring in CS, mathematics, and biology",
      "Developed supplemental study materials for complex topics",
      "Helped students navigate academic challenges and build confidence",
    ],
  },
  {
    role: "Hackathon Participant",
    org: "Multiple Events",
    period: "2023 – 2025",
    type: "Building",
    description:
      "Competed in multiple hackathons, shipping functional product prototypes under time pressure. Strong emphasis on real-world relevance, product thinking, and clean execution.",
    highlights: [
      "Shipped MVPs across web, data, and healthcare-adjacent domains",
      "Led cross-functional teams under 24–48 hour build timelines",
      "Pitched technical products to judges and stakeholder audiences",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "#09091a" }}
    >
      {/* Background: hero-day.png, barely visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-day.png"
          alt=""
          fill
          className="object-cover"
          quality={70}
          style={{ opacity: 0.05, objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(9,9,26,0.93)" }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="label-section block mb-5">Experience</span>
          <h2
            className="heading-section"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
          >
            Where I&apos;ve{" "}
            <em style={{ fontStyle: "italic", color: "#c4883e" }}>shown up</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: "0", width: "1px", background: "linear-gradient(to bottom, #c4883e33, #1d2136, transparent)" }}
          />

          <div className="space-y-0 pl-8 lg:pl-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="relative pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className="absolute"
                  style={{
                    left: "-2.5rem",
                    top: "0.35rem",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#c4883e",
                    boxShadow: "0 0 0 3px rgba(196,136,62,0.12)",
                  }}
                />

                <div
                  className="group p-6 lg:p-7 transition-all duration-400"
                  style={{ background: "#0e1020", border: "1px solid #1d2136", borderRadius: "2px" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,136,62,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#1d2136";
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <h3 className="text-text-primary font-medium mb-0.5" style={{ fontSize: "1rem" }}>
                        {exp.role}
                      </h3>
                      <p className="text-accent-gold" style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                        {exp.org}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="label-mono">{exp.period}</span>
                      <span
                        className="label-mono px-2 py-0.5"
                        style={{ background: "#151828", border: "1px solid #1d2136", borderRadius: "2px" }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-text-secondary leading-relaxed mb-4"
                    style={{ fontSize: "0.875rem", fontWeight: 300 }}
                  >
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3"
                        style={{ fontSize: "0.8125rem", color: "#404d62" }}
                      >
                        <span
                          style={{
                            width: "3px", height: "3px", borderRadius: "50%",
                            background: "#c4883e", flexShrink: 0, marginTop: "7px",
                            opacity: 0.6,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
