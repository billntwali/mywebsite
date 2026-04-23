"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Briefcase, FlaskConical, Users, Code2, BookOpen } from "lucide-react";

interface Experience {
  role: string;
  org: string;
  period: string;
  type: string;
  icon: React.ElementType;
  color: string;
  iconBg: string;
  iconColor: string;
  description: string;
  highlights: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Resident Adviser",
    org: "Columbia University Housing",
    period: "Aug 2024 – Present",
    type: "Leadership",
    icon: Users,
    color: "border-accent-purple/40",
    iconBg: "bg-accent-purple/10",
    iconColor: "text-accent-purple",
    description:
      "Serve as a live-in community leader for a floor of Columbia undergraduates, providing support, programming, and crisis navigation. This role has sharpened my ability to lead with empathy, handle ambiguity, and build trust at scale.",
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
    icon: FlaskConical,
    color: "border-accent-teal/40",
    iconBg: "bg-accent-teal/10",
    iconColor: "text-accent-teal",
    description:
      "Contribute to ongoing research at the intersection of computational methods and biological systems. Work involves data processing pipelines, genomic analysis, and supporting research workflows with software tooling.",
    highlights: [
      "Built data cleaning and analysis pipelines for genomic datasets",
      "Contributed to literature reviews and experimental design discussions",
      "Developed reproducible research workflows using Python and R",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Tech Organization",
    period: "Summer 2024",
    type: "Engineering",
    icon: Code2,
    color: "border-accent-blue/40",
    iconBg: "bg-accent-blue/10",
    iconColor: "text-accent-blue",
    description:
      "Contributed to full-stack feature development and analytics tooling in a fast-moving engineering team. Worked across frontend and backend systems and participated in code review, sprint planning, and technical design discussions.",
    highlights: [
      "Built and shipped user-facing features in React and TypeScript",
      "Improved data pipeline performance with backend optimization",
      "Participated in sprint reviews, retros, and architectural discussions",
    ],
  },
  {
    role: "Academic Tutor & Mentor",
    org: "Columbia Academic Programs",
    period: "Sep 2023 – Present",
    type: "Mentorship",
    icon: BookOpen,
    color: "border-accent-green/40",
    iconBg: "bg-accent-green/10",
    iconColor: "text-accent-green",
    description:
      "Provide academic support in STEM subjects to Columbia undergraduates, with a focus on making technical material accessible and building genuine understanding rather than surface-level recall.",
    highlights: [
      "One-on-one tutoring in CS, math, and biology coursework",
      "Developed supplemental study materials for complex topics",
      "Helped students navigate academic challenges and build confidence",
    ],
  },
  {
    role: "Hackathon Participant & Builder",
    org: "Multiple Hackathons",
    period: "2023 – 2025",
    type: "Building",
    icon: Briefcase,
    color: "border-accent-blue/30",
    iconBg: "bg-accent-blue/10",
    iconColor: "text-accent-blue-light",
    description:
      "Competed in multiple hackathons, shipping functional prototypes under time pressure. Strong emphasis on product thinking, real-world relevance, and clean execution in constrained environments.",
    highlights: [
      "Shipped MVPs across web, data, and healthcare-adjacent domains",
      "Led or contributed to cross-functional teams under 24–48 hour timelines",
      "Pitched technical products to judges and stakeholder audiences",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #050a14 0%, #080f1e 100%)" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tech-overlay-2.png"
          alt=""
          fill
          className="object-cover opacity-8"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/95 via-bg-deep/90 to-bg-deep/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag mb-4 inline-flex">Experience</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mt-4 max-w-xl">
            Where I&apos;ve{" "}
            <span className="gradient-text">shown up</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line opacity-30" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.role + exp.org}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative pl-16 sm:pl-20 group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-3.5 sm:left-5.5 top-6 w-5 h-5 rounded-full ${exp.iconBg} border-2 ${exp.color}
                    flex items-center justify-center z-10 transition-all duration-300
                    group-hover:scale-125`}
                    style={{ left: "1.125rem" }}
                  >
                    <div className={`w-2 h-2 rounded-full ${exp.iconColor.replace("text-", "bg-")}`} />
                  </div>

                  {/* Card */}
                  <div className={`glass rounded-2xl p-6 border border-bg-border ${exp.color.replace("border-", "hover:border-")}
                    transition-all duration-400 hover:shadow-xl hover:-translate-y-0.5`}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${exp.iconBg} flex items-center justify-center shrink-0`}>
                          <Icon size={18} className={exp.iconColor} />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-base text-text-primary">{exp.role}</h3>
                          <p className={`text-sm font-medium ${exp.iconColor}`}>{exp.org}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-mono text-text-muted">{exp.period}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-bg-elevated text-text-muted border border-bg-border">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-text-muted">
                          <span className={`mt-1.5 w-1 h-1 rounded-full ${exp.iconColor.replace("text-", "bg-")} shrink-0`} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
