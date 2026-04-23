"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, FlaskConical, Code2, Users } from "lucide-react";

const STATS = [
  {
    icon: GraduationCap,
    label: "Columbia University",
    sub: "Class of 2027",
    detail: "Barnard/Columbia campus, New York City",
    color: "blue",
    gradient: "from-accent-blue/20 to-accent-teal/10",
    border: "border-accent-blue/20 hover:border-accent-blue/50",
    glow: "group-hover:shadow-accent-blue/15",
  },
  {
    icon: FlaskConical,
    label: "Computational Biology",
    sub: "Research & Science",
    detail: "Bridging algorithms and life sciences",
    color: "teal",
    gradient: "from-accent-teal/20 to-accent-green/10",
    border: "border-accent-teal/20 hover:border-accent-teal/50",
    glow: "group-hover:shadow-accent-teal/15",
  },
  {
    icon: Code2,
    label: "Full-Stack Projects",
    sub: "Product Builder",
    detail: "Web platforms, extensions, analytics tools",
    color: "green",
    gradient: "from-accent-green/20 to-accent-blue/10",
    border: "border-accent-green/20 hover:border-accent-green/50",
    glow: "group-hover:shadow-accent-green/15",
  },
  {
    icon: Users,
    label: "Leadership & Impact",
    sub: "Community First",
    detail: "Mentorship, student support, research teams",
    color: "purple",
    gradient: "from-accent-purple/20 to-accent-blue/10",
    border: "border-accent-purple/20 hover:border-accent-purple/50",
    glow: "group-hover:shadow-accent-purple/15",
  },
];

const colorMap: Record<string, string> = {
  blue: "text-accent-blue",
  teal: "text-accent-teal",
  green: "text-accent-green",
  purple: "text-accent-purple",
};

const bgMap: Record<string, string> = {
  blue: "bg-accent-blue/10",
  teal: "bg-accent-teal/10",
  green: "bg-accent-green/10",
  purple: "bg-accent-purple/10",
};

export default function Snapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Divider image strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">At a Glance</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary mt-4">
            Who I am, in four dimensions
          </h2>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`group relative glass rounded-2xl p-6 cursor-default
                  border ${item.border}
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-2xl ${item.glow}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-5 w-12 h-12 rounded-xl ${bgMap[item.color]} flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className={colorMap[item.color]} />
                </div>

                {/* Text */}
                <div className="relative">
                  <h3 className={`font-display font-semibold text-base text-text-primary mb-1 ${colorMap[item.color]} group-hover:text-text-primary transition-colors`}>
                    {item.label}
                  </h3>
                  <p className="text-sm font-medium text-text-secondary mb-2">{item.sub}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{item.detail}</p>
                </div>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${bgMap[item.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
