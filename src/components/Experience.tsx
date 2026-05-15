"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Experience {
  role: string;
  org: string;
  period: string;
  type: string;
  location: string;
  description: string;
  highlights: string[];
  website?: string;
}

const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer Intern",
    org: "The Rockefeller University",
    period: "May 2026 - Present · 1 mo",
    type: "Internship",
    location: "New York, United States",
    description:
      "Software Engineer Intern in the Rockefeller Bioinformatics Group, contributing to machine learning and bioinformatics workflows.",
    highlights: [
      "Built and maintained software workflows for research data analysis",
      "Collaborated with researchers on ML-assisted bioinformatics tasks",
      "Supported reproducible analysis and data-quality checks",
    ],
    website: "rockefeller.edu",
  },
  {
    role: "Resident Advisor (RA)",
    org: "Columbia University",
    period: "Feb 2026 - Present · 4 mos",
    type: "Leadership",
    location: "New York, New York, United States · On-site",
    description:
      "Support a residential community of 50+ students through 1:1 check-ins, community programming, conflict mediation, and referrals to campus resources.",
    highlights: [
      "Led floor events in coordination with university housing staff",
      "Maintained an inclusive and supportive residential environment",
      "Provided direct support and resource navigation for student wellbeing",
    ],
    website: "columbia.edu",
  },
  {
    role: "Fellow",
    org: "ColorStack",
    period: "Sep 2025 - Present · 9 mos",
    type: "Fellowship",
    location: "United States",
    description:
      "Participate in a community of Black and Latinx computer science students focused on career growth, technical development, and peer mentorship.",
    highlights: [
      "Engaged in career and technical development programming",
      "Expanded mentorship and peer learning network in tech",
      "Built community through workshops and professional opportunities",
    ],
    website: "colorstack.org",
  },
  {
    role: "AI/Product Strategy- Wells Fargo x GCA Early Talent Competition",
    org: "Wells Fargo",
    period: "Apr 2026 · 1 mo",
    type: "Competition",
    location: "New York, New York, United States",
    description:
      "Designed an AI banking concept focused on fraud resolution, onboarding, and small-business lending through transparent customer-bank commitments.",
    highlights: [
      "Proposed Promise Ledger, Case Space, and Relationship Copilot components",
      "Focused on retrieval-grounded compliance guidance and case summarization",
      "Built explainability into customer-facing lending support flows",
    ],
    website: "wellsfargo.com",
  },
  {
    role: "Software Engineering-Tech Lab",
    org: "Bloomberg",
    period: "Apr 2026 · 1 mo",
    type: "Engineering",
    location: "New York City Metropolitan Area · On-site",
    description:
      "Implemented Python producer and consumer classes for a RabbitMQ messaging system, routing simulated securities updates by ticker and industry sector.",
    highlights: [
      "Tested topic-exchange routing behavior in RabbitMQ",
      "Built and validated workflows in a Dockerized environment",
      "Applied event-driven design and distributed systems fundamentals",
    ],
    website: "bloomberg.com",
  },
  {
    role: "Software Engineering - Cubist Systematic",
    org: "Point72",
    period: "Apr 2026 · 1 mo",
    type: "Hackathon",
    location: "New York City Metropolitan Area · On-site",
    description:
      "Built an AI chess platform in a 5-person team that generated custom opponents from user prompts with distinct play styles and move narration.",
    highlights: [
      "Integrated two Claude models across three gameplay touchpoints",
      "Helped build a five-stage validation pipeline for generated code",
      "Improved prompt pass rate from 40% to 100% after six iterations",
    ],
    website: "point72.com",
  },
  {
    role: "BCG Launch",
    org: "Boston Consulting Group (BCG)",
    period: "Mar 2026 - Apr 2026 · 2 mos",
    type: "Program",
    location: "United States",
    description:
      "Professional development program focused on consulting, business problem-solving, and career readiness through workshops, networking, and case-based learning.",
    highlights: [
      "Strengthened structured problem-solving and communication skills",
      "Practiced case-based analysis in collaborative settings",
      "Expanded understanding of consulting workflows and expectations",
    ],
    website: "bcg.com",
  },
  {
    role: "Launch Your Career in Tech, Data, AI & Design Series",
    org: "JPMorganChase",
    period: "Mar 2026 - Apr 2026 · 2 mos",
    type: "Program",
    location: "United States",
    description:
      "Participated in a career readiness series focused on technology, data, AI, and design pathways in financial services.",
    highlights: [
      "Learned from practitioner sessions across technical career tracks",
      "Built practical insight into product and engineering roles in finance",
      "Engaged with peers and mentors through structured programming",
    ],
    website: "jpmorganchase.com",
  },
  {
    role: "Software Engineering - Code To Give",
    org: "Morgan Stanley",
    period: "Mar 2026 · 1 mo",
    type: "Hackathon",
    location: "New York, New York, United States · Hybrid",
    description:
      "Built a full-stack volunteer outreach platform in a 10-person team, supporting event creation, registrations, cancellations, attendee tracking, and check-in workflows.",
    highlights: [
      "Contributed backend API and database workflows for platform modules",
      "Collaborated across roles to ship features on a hackathon timeline",
      "Supported event operations tooling with production-minded design",
    ],
    website: "morganstanley.com",
  },
  {
    role: "Student Academic Support Worker",
    org: "Columbia University",
    period: "Sep 2025 - Feb 2026 · 6 mos",
    type: "Part-time",
    location: "New York, United States",
    description:
      "Tutored 5-6 STEM students weekly through 5+ individual and group sessions, maintaining a 95% student satisfaction rate.",
    highlights: [
      "Created 12+ customized study plans with targeted practice",
      "Helped students improve exam scores by an average of 20%",
      "Delivered consistent support across individual and group formats",
    ],
    website: "columbia.edu",
  },
  {
    role: "Research Assistant",
    org: "Columbia University Irving Medical Center",
    period: "Mar 2025 - Aug 2025 · 6 mos",
    type: "Internship",
    location: "New York, United States · On-site",
    description:
      "Analyzed flow cytometry data from seven mice using R, Python, FlowJo, and GraphPad Prism to investigate ILC2 roles in steady-state bone marrow hematopoiesis.",
    highlights: [
      "Validated ILC2 depletion with a 10x reduction (0.06% to 0.006%)",
      "Quantified experimental outcomes and supported interpretation",
      "Authored a manuscript covering methods, findings, and next experiments",
    ],
    website: "cumc.columbia.edu",
  },
  {
    role: "Frontiers of Science Teaching Assistant",
    org: "Columbia University",
    period: "Jan 2025 - May 2025 · 5 mos",
    type: "Teaching",
    location: "New York, United States · On-site",
    description:
      "Supported course delivery, student engagement, and discussion-based learning for the Frontiers of Science curriculum.",
    highlights: [
      "Facilitated sections and student support during course cycles",
      "Helped clarify technical concepts and assignment expectations",
      "Partnered with course staff to maintain instructional quality",
    ],
    website: "columbia.edu",
  },
  {
    role: "John Jay RHLO Representative",
    org: "Columbia University",
    period: "Oct 2024 - May 2025 · 8 mos",
    type: "Leadership",
    location: "New York, United States · On-site",
    description:
      "Represented resident voices in housing leadership processes while supporting student communication, planning, and community priorities.",
    highlights: [
      "Coordinated resident feedback with housing leadership",
      "Supported floor-level initiatives and community organization",
      "Helped advance student-centered residential improvements",
    ],
    website: "columbia.edu",
  },
  {
    role: "Project Manager",
    org: "Helping Hand Foundation",
    period: "Nov 2021 - Sep 2024 · 2 yrs 11 mos",
    type: "Internship",
    location: "Kigali, Kigali City, Rwanda · On-site",
    description:
      "Led project planning and coordination for community-focused initiatives, including stakeholder communication and implementation support.",
    highlights: [
      "Managed project timelines and execution checkpoints",
      "Coordinated teams and partners across initiative phases",
      "Tracked outcomes and communicated progress to stakeholders",
    ],
  },
  {
    role: "Student Research Assistant",
    org: "Lycee de Kigali",
    period: "Sep 2022 - Aug 2024 · 2 yrs",
    type: "Internship",
    location: "Kigali City, Rwanda · On-site",
    description:
      "Supported student research initiatives with data handling, technical analysis, and structured reporting.",
    highlights: [
      "Contributed SQL and Python support for research workflows",
      "Assisted with documentation and presentation of results",
      "Strengthened foundational quantitative analysis practices",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const getInitials = (org: string) =>
    org
      .split(/[\s&()]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");

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
                    <div className="flex items-start gap-3">
                      <div
                        className="shrink-0 flex items-center justify-center"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "2px",
                          background: "#151828",
                          border: "1px solid #1d2136",
                        }}
                      >
                        {exp.website ? (
                          // Favicon source provides lightweight company marks without adding local assets.
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${exp.website}&sz=128`}
                            alt={`${exp.org} logo`}
                            style={{ width: "1.125rem", height: "1.125rem" }}
                          />
                        ) : (
                          <span className="label-mono" style={{ fontSize: "0.6rem" }}>
                            {getInitials(exp.org)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-text-primary font-medium mb-0.5" style={{ fontSize: "1rem" }}>
                          {exp.role}
                        </h3>
                        <p className="text-accent-gold" style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                          {exp.org}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="label-mono">{exp.period}</p>
                        <p className="label-mono mt-1" style={{ color: "#3f4a5f", fontSize: "0.625rem" }}>
                          {exp.location}
                        </p>
                      </div>
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
