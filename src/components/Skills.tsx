"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code2, Globe, Database, Wrench } from "lucide-react";

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  textColor: string;
  borderColor: string;
  skills: { name: string; level: "expert" | "strong" | "familiar" }[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    color: "bg-accent-blue/10",
    textColor: "text-accent-blue",
    borderColor: "border-accent-blue/30",
    skills: [
      { name: "Python", level: "expert" },
      { name: "TypeScript", level: "strong" },
      { name: "JavaScript", level: "strong" },
      { name: "SQL", level: "strong" },
      { name: "R", level: "familiar" },
      { name: "HTML/CSS", level: "expert" },
      { name: "Bash", level: "familiar" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Web",
    icon: Globe,
    color: "bg-accent-teal/10",
    textColor: "text-accent-teal",
    borderColor: "border-accent-teal/30",
    skills: [
      { name: "Next.js", level: "strong" },
      { name: "React", level: "strong" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "FastAPI", level: "strong" },
      { name: "Node.js", level: "familiar" },
      { name: "REST APIs", level: "strong" },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: Database,
    color: "bg-accent-green/10",
    textColor: "text-accent-green",
    borderColor: "border-accent-green/30",
    skills: [
      { name: "Pandas", level: "strong" },
      { name: "NumPy", level: "strong" },
      { name: "PostgreSQL", level: "strong" },
      { name: "Matplotlib", level: "strong" },
      { name: "Tableau", level: "familiar" },
      { name: "Jupyter", level: "expert" },
      { name: "Supabase", level: "strong" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: Wrench,
    color: "bg-accent-purple/10",
    textColor: "text-accent-purple",
    borderColor: "border-accent-purple/30",
    skills: [
      { name: "Git / GitHub", level: "expert" },
      { name: "Docker", level: "familiar" },
      { name: "VS Code", level: "expert" },
      { name: "Chrome Extensions", level: "strong" },
      { name: "Figma", level: "familiar" },
      { name: "Linux / Unix", level: "familiar" },
    ],
  },
];

const LEVEL_COLORS: Record<string, string> = {
  expert: "border-accent-blue/50 text-accent-blue bg-accent-blue/10",
  strong: "border-accent-teal/40 text-accent-teal bg-accent-teal/10",
  familiar: "border-bg-border text-text-secondary bg-bg-elevated",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("languages");

  const current = CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <section id="skills" className="relative py-28 bg-bg-dark overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag mb-4 inline-flex">Toolbox</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mt-4 max-w-xl">
            What I work{" "}
            <span className="gradient-text">with</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg text-lg">
            Technologies and tools I reach for when building — organized by how comfortable I am with each.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {/* Category selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300
                    ${isActive
                      ? `glass border ${cat.borderColor} ${cat.textColor} shadow-lg`
                      : "glass border border-bg-border text-text-secondary hover:text-text-primary hover:border-bg-border/80"
                    }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? cat.color : "bg-bg-elevated"} transition-colors`}>
                    <Icon size={16} className={isActive ? cat.textColor : "text-text-muted"} />
                  </div>
                  <span className="font-medium text-sm">{cat.label}</span>
                  <span className="ml-auto text-xs text-text-muted">{cat.skills.length}</span>
                </button>
              );
            })}

            {/* Legend */}
            <div className="pt-6 space-y-2">
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-3">Proficiency</p>
              {[
                { level: "expert", label: "Expert / Daily use" },
                { level: "strong", label: "Strong / Project use" },
                { level: "familiar", label: "Familiar / Growing" },
              ].map(({ level, label }) => (
                <div key={level} className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs border ${LEVEL_COLORS[level]}`}>{level}</span>
                  <span className="text-xs text-text-muted">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-8 border border-bg-border h-full"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-xl ${current.color} flex items-center justify-center`}>
                    <current.icon size={18} className={current.textColor} />
                  </div>
                  <h3 className={`font-display font-bold text-xl ${current.textColor}`}>
                    {current.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {current.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-default
                        ${LEVEL_COLORS[skill.level]}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        skill.level === "expert" ? "bg-accent-blue" :
                        skill.level === "strong" ? "bg-accent-teal" : "bg-text-muted"
                      }`} />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>

                {/* Proficiency bars */}
                <div className="mt-10 space-y-3">
                  <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-4">Depth overview</p>
                  {["Expert / Primary", "Strong / Regular", "Familiar / Expanding"].map((label, i) => {
                    const counts = [
                      current.skills.filter((s) => s.level === "expert").length,
                      current.skills.filter((s) => s.level === "strong").length,
                      current.skills.filter((s) => s.level === "familiar").length,
                    ];
                    const total = current.skills.length;
                    const pct = total > 0 ? (counts[i] / total) * 100 : 0;
                    const barColors = ["bg-accent-blue", "bg-accent-teal", "bg-bg-border"];
                    return (
                      <div key={label} className="flex items-center gap-3">
                        <span className="text-xs text-text-muted w-36 shrink-0">{label}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-bg-elevated overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${barColors[i]}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                          />
                        </div>
                        <span className="text-xs text-text-muted w-4 shrink-0">{counts[i]}</span>
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
