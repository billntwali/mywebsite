"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    id: "frameworks-tools",
    label: "Frameworks/Tools",
    skills: [
      "React",
      "Angular",
      "Next.js",
      "FastAPI",
      "Spring Boot",
      "Django",
      "Tailwind CSS",
      "Docker",
      "Git/GitHub",
      "AWS",
    ],
  },
  {
    id: "data-ai-db",
    label: "Databases/AI/Data",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "OpenAI API",
      "Claude API",
      "LangChain",
      "Pandas",
      "NumPy",
      "Tableau",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 lg:py-36" style={{ background: "#0e1020" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="label-section block mb-5">Toolbox</span>
          <h2
            className="heading-section"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
          >
            What I work{" "}
            <em style={{ fontStyle: "italic", color: "#c4883e" }}>with</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.08 }}
              className="p-6 lg:p-7"
              style={{ background: "#09091a", border: "1px solid #1d2136", borderRadius: "2px" }}
            >
              <p className="label-section mb-3 block">{group.label}</p>
              <p
                className="text-text-secondary"
                style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.8 }}
              >
                {group.skills.join(", ")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
