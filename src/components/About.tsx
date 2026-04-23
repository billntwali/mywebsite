"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Hammer, Microscope, BarChart3, Heart, ChevronRight } from "lucide-react";

const IDENTITY_CARDS = [
  {
    icon: Hammer,
    title: "Builder",
    desc: "I think in systems and ship real products — from nonprofit platforms to browser extensions. If it solves a problem, I want to build it.",
    color: "blue",
    border: "hover:border-accent-blue/50",
    iconBg: "bg-accent-blue/10",
    iconColor: "text-accent-blue",
  },
  {
    icon: Microscope,
    title: "Research-Minded",
    desc: "Computational biology sits at an extraordinary intersection of data, biology, and computing. I'm drawn to scientific problems where code becomes discovery.",
    color: "teal",
    border: "hover:border-accent-teal/50",
    iconBg: "bg-accent-teal/10",
    iconColor: "text-accent-teal",
  },
  {
    icon: BarChart3,
    title: "Data-Focused",
    desc: "Good decisions come from good data. I love turning raw information into insight — whether through analysis, visualization, or building the pipelines that make it possible.",
    color: "green",
    border: "hover:border-accent-green/50",
    iconBg: "bg-accent-green/10",
    iconColor: "text-accent-green",
  },
  {
    icon: Heart,
    title: "Community-Driven",
    desc: "As a Resident Adviser and mentor, I understand that technical work doesn't happen in isolation. People, trust, and support structures matter just as much as code.",
    color: "purple",
    border: "hover:border-accent-purple/50",
    iconBg: "bg-accent-purple/10",
    iconColor: "text-accent-purple",
  },
];

const TABS = ["Background", "Interests", "Beyond Tech"];

const TAB_CONTENT: Record<string, React.ReactNode> = {
  Background: (
    <div className="space-y-4 text-text-secondary leading-relaxed">
      <p>
        I&apos;m a Columbia University undergraduate studying at the intersection of biology and computing —
        a space where algorithms illuminate biological systems and data reshapes how we understand living things.
        My academic path has been shaped by a genuine curiosity: not just{" "}
        <em className="text-text-primary">what</em> the tools do, but{" "}
        <em className="text-text-primary">why</em> they work and how they can be made more useful.
      </p>
      <p>
        That curiosity extends beyond coursework. I&apos;ve built full-stack applications, dug into data pipelines,
        and shipped tools that real people use. I believe in learning by building, and building toward things
        that actually matter.
      </p>
    </div>
  ),
  Interests: (
    <div className="space-y-4 text-text-secondary leading-relaxed">
      <p>
        I&apos;m especially excited by problems where software meets the real world in high-stakes,
        high-impact ways — bioinformatics pipelines, healthcare data tools, nonprofit infrastructure,
        and developer tooling that helps other builders move faster.
      </p>
      <p>
        I&apos;m also interested in the craft of software itself: clean architecture, thoughtful product design,
        and the kind of engineering that makes systems feel inevitable once you use them.
      </p>
    </div>
  ),
  "Beyond Tech": (
    <div className="space-y-4 text-text-secondary leading-relaxed">
      <p>
        Outside of code and research, I serve as a Resident Adviser at Columbia — a role that&apos;s taught me
        more about leadership, empathy, and crisis navigation than any class or project ever could.
        Supporting a community of students is its own kind of systems work.
      </p>
      <p>
        I care deeply about mentorship, academic access, and building spaces where people feel supported
        to take risks, ask hard questions, and grow into their potential.
      </p>
    </div>
  ),
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("Background");

  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #080f1e 0%, #050a14 100%)" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hills.png"
          alt=""
          fill
          className="object-cover opacity-10"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-deep/90 to-bg-deep" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-tag mb-4 inline-flex">About Me</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mt-4 max-w-xl">
            The person behind the{" "}
            <span className="gradient-text">builds</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: identity cards */}
          <div className="space-y-4">
            {IDENTITY_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`group glass rounded-2xl p-5 border border-bg-border ${card.border}
                    transition-all duration-400 hover:shadow-xl cursor-default`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-0.5 w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon size={18} className={card.iconColor} />
                    </div>
                    <div>
                      <h3 className={`font-display font-semibold text-sm mb-1.5 ${card.iconColor}`}>
                        {card.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: tabbed narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Tab nav */}
            <div className="flex gap-1 p-1 rounded-xl bg-bg-elevated border border-bg-border w-fit">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${
                    activeTab === tab
                      ? "bg-accent-blue text-white shadow-lg shadow-accent-blue/25"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 border border-bg-border min-h-56"
            >
              {TAB_CONTENT[activeTab]}
            </motion.div>

            {/* Mini highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Computer Science & Biology", sub: "Core focus areas" },
                { label: "New York City", sub: "Columbia Morningside Heights" },
                { label: "Open to Opportunities", sub: "Research, internships, collabs" },
                { label: "Rwanda → New York", sub: "International perspective" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4 border border-bg-border group hover:border-accent-blue/30 transition-colors">
                  <div className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-accent-blue mt-0.5 shrink-0" />
                    <div>
                      <p className="text-text-primary text-xs font-semibold">{item.label}</p>
                      <p className="text-text-muted text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
