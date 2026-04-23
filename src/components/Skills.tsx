"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Category {
  id: string;
  label: string;
  skills: { name: string; level: "primary" | "regular" | "growing" }[];
}

const CATEGORIES: Category[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", level: "primary" },
      { name: "TypeScript", level: "regular" },
      { name: "JavaScript", level: "regular" },
      { name: "SQL", level: "regular" },
      { name: "HTML / CSS", level: "primary" },
      { name: "R", level: "growing" },
      { name: "Bash", level: "growing" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Web",
    skills: [
      { name: "Next.js", level: "regular" },
      { name: "React", level: "regular" },
      { name: "Tailwind CSS", level: "primary" },
      { name: "FastAPI", level: "regular" },
      { name: "REST APIs", level: "regular" },
      { name: "Node.js", level: "growing" },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    skills: [
      { name: "Pandas", level: "regular" },
      { name: "NumPy", level: "regular" },
      { name: "Jupyter", level: "primary" },
      { name: "PostgreSQL", level: "regular" },
      { name: "Supabase", level: "regular" },
      { name: "Matplotlib", level: "regular" },
      { name: "Tableau", level: "growing" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: "primary" },
      { name: "VS Code", level: "primary" },
      { name: "Chrome Extensions", level: "regular" },
      { name: "Docker", level: "growing" },
      { name: "Figma", level: "growing" },
      { name: "Linux / Unix", level: "growing" },
    ],
  },
];

const LEVEL_STYLES: Record<string, React.CSSProperties> = {
  primary: {
    background: "rgba(196,136,62,0.08)",
    border: "1px solid rgba(196,136,62,0.35)",
    color: "#daa055",
  },
  regular: {
    background: "rgba(78,110,154,0.08)",
    border: "1px solid rgba(78,110,154,0.3)",
    color: "#6b8fb5",
  },
  growing: {
    background: "#151828",
    border: "1px solid #1d2136",
    color: "#404d62",
  },
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState("languages");

  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

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

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Category selector */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="w-full text-left flex items-center justify-between px-4 py-3 transition-all duration-250"
                  style={{
                    borderRadius: "2px",
                    background: active === cat.id ? "#151828" : "transparent",
                    borderLeft: active === cat.id ? "2px solid #c4883e" : "2px solid transparent",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 400,
                      color: active === cat.id ? "#ece5d8" : "#404d62",
                      transition: "color 0.25s",
                    }}
                  >
                    {cat.label}
                  </span>
                  <span className="label-mono" style={{ fontSize: "0.6rem" }}>
                    {cat.skills.length}
                  </span>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-10 space-y-2.5">
              <p className="label-section block mb-4" style={{ fontSize: "0.55rem" }}>Proficiency</p>
              {[
                { level: "primary" as const, label: "Primary / Daily" },
                { level: "regular" as const, label: "Regular / Project use" },
                { level: "growing" as const, label: "Growing / Familiar" },
              ].map(({ level, label }) => (
                <div key={level} className="flex items-center gap-2.5">
                  <span
                    className="label-mono px-1.5 py-0.5"
                    style={{ ...LEVEL_STYLES[level], borderRadius: "2px", fontSize: "0.6rem" }}
                  >
                    {level}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#404d62" }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills display */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {current.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.035 }}
                      className="label-mono px-3.5 py-2.5 cursor-default transition-all duration-200 hover:-translate-y-px"
                      style={{ ...LEVEL_STYLES[skill.level], borderRadius: "2px" }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Mini bars */}
                <div
                  className="p-6"
                  style={{ background: "#09091a", border: "1px solid #1d2136", borderRadius: "2px" }}
                >
                  <p className="label-section block mb-5" style={{ fontSize: "0.55rem" }}>Depth overview</p>
                  {[
                    { key: "primary" as const, label: "Primary tools" },
                    { key: "regular" as const, label: "Regular use" },
                    { key: "growing" as const, label: "Growing skills" },
                  ].map(({ key, label }) => {
                    const count = current.skills.filter((s) => s.level === key).length;
                    const pct = (count / current.skills.length) * 100;
                    const barColor = key === "primary" ? "#c4883e" : key === "regular" ? "#4e6e9a" : "#1d2136";
                    return (
                      <div key={key} className="flex items-center gap-4 mb-3 last:mb-0">
                        <span style={{ fontSize: "0.75rem", color: "#404d62", width: "7rem", flexShrink: 0 }}>{label}</span>
                        <div className="flex-1 h-px" style={{ background: "#1d2136", position: "relative" }}>
                          <motion.div
                            style={{ height: "1px", background: barColor, originX: 0 }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: pct / 100 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "#404d62", width: "1.2rem", textAlign: "right" }}>
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
