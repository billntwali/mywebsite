"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Dna, Globe, BarChart3, Layers, HeartPulse, Terminal, FlaskConical, Cpu
} from "lucide-react";

const INTERESTS = [
  {
    icon: Layers,
    title: "Software Engineering",
    desc: "Clean systems, thoughtful architecture, and the craft of building software that lasts.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
    border: "hover:border-accent-blue/50",
  },
  {
    icon: Dna,
    title: "Computational Biology",
    desc: "Algorithms that reveal patterns in living systems — where code meets the biology of life.",
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
    border: "hover:border-accent-teal/50",
  },
  {
    icon: FlaskConical,
    title: "Bioinformatics",
    desc: "Building tools and pipelines that help researchers navigate genomic and proteomic data.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    border: "hover:border-accent-green/50",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Products",
    desc: "Making data meaningful — through visualization, analysis, and systems that help people decide.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "hover:border-accent-purple/50",
  },
  {
    icon: Terminal,
    title: "Developer Tools",
    desc: "Extensions, CLIs, and platforms that make other builders faster and more capable.",
    color: "text-accent-blue-light",
    bg: "bg-accent-blue/10",
    border: "hover:border-accent-blue/40",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Nonprofit Tech",
    desc: "Technology at its most meaningful — software that serves people in high-stakes, high-need contexts.",
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
    border: "hover:border-accent-teal/40",
  },
  {
    icon: Globe,
    title: "Applied Research Systems",
    desc: "Software infrastructure that makes research faster, more reproducible, and more shareable.",
    color: "text-accent-green-light",
    bg: "bg-accent-green/10",
    border: "hover:border-accent-green/40",
  },
  {
    icon: Cpu,
    title: "AI & Intelligent Systems",
    desc: "Curious about how ML and AI can be embedded into useful, real-world products — especially in science.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "hover:border-accent-purple/40",
  },
];

export default function Interests() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #080f1e 0%, #050a14 100%)" }}>
      {/* Atmospheric background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tech-overlay-1.png"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/95 via-bg-deep/85 to-bg-deep" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-tag mb-4 inline-flex">Exploring</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mt-4">
            What keeps me{" "}
            <span className="gradient-text">curious</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto text-lg">
            The domains and problems I find myself returning to, reading about, and wanting to build in.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INTERESTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group glass rounded-2xl p-5 border border-bg-border ${item.border}
                  transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl cursor-default`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className={item.color} />
                </div>
                <h3 className={`font-display font-semibold text-sm mb-2 ${item.color} group-hover:brightness-110 transition-all`}>
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Currently reading / exploring callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass rounded-2xl p-6 border border-accent-blue/20 max-w-2xl mx-auto text-center"
        >
          <p className="text-text-muted text-sm font-mono mb-2 uppercase tracking-wider">Currently exploring</p>
          <p className="text-text-secondary text-base leading-relaxed">
            The intersection of{" "}
            <span className="text-accent-blue font-medium">machine learning</span> and{" "}
            <span className="text-accent-teal font-medium">genomic data</span> — specifically how
            AI-assisted tools can make bioinformatics workflows faster and more accessible to researchers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
