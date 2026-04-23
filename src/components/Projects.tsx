"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Github, ExternalLink, X, ArrowUpRight,
  Layers, Database, Globe, BarChart2
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  icon: React.ElementType;
  image: string;
  color: string;
  accentColor: string;
  borderColor: string;
  shadowColor: string;
  github?: string;
  demo?: string;
  highlights: string[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "LemonTree",
    tagline: "Volunteer Outreach Platform",
    description: "A full-stack platform built for a nonprofit to modernize their volunteer operations end-to-end.",
    longDescription: `LemonTree is a production-grade volunteer management platform designed from the ground up for a nonprofit.
    It handles everything from event creation and publishing to participant registration, guest sign-ups, attendance tracking,
    automated reminders, and admin dashboards. The goal was to replace fragmented, manual workflows with a cohesive system
    that event leaders and volunteers actually want to use. Built with a Next.js frontend, FastAPI backend, and a PostgreSQL
    database via Supabase, the platform supports multiple user roles and real-time data flows.`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL"],
    category: "Full-Stack",
    icon: Layers,
    image: "/images/tech-overlay-1.png",
    color: "from-accent-blue/20 to-accent-teal/10",
    accentColor: "text-accent-blue",
    borderColor: "hover:border-accent-blue/60",
    shadowColor: "hover:shadow-accent-blue/15",
    github: "https://github.com/billntwali/lemontree",
    demo: "#",
    highlights: [
      "Multi-role access: admin, event leaders, participants, guest sign-ups",
      "Automated email reminders and attendance workflows",
      "Real-time event dashboard with participation analytics",
      "Mobile-responsive design with full PostgreSQL persistence",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "IdeaFinder",
    tagline: "Intelligent Idea Discovery Tool",
    description: "An intelligent web app for capturing, organizing, and discovering connections between ideas.",
    longDescription: `IdeaFinder is a productivity MVP built around the problem of idea capture and rediscovery.
    Instead of letting valuable thoughts disappear into notes apps or browser tabs, IdeaFinder lets you build a
    searchable, interconnected library of ideas. The app surfaces relationships between entries, supports tagging
    and filtering, and provides a clean interface that prioritizes speed of entry. Built as a real product with
    persistent storage, user sessions, and a fast, intuitive UI.`,
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    category: "Product",
    icon: Globe,
    image: "/images/tech-overlay-2.png",
    color: "from-accent-teal/20 to-accent-blue/10",
    accentColor: "text-accent-teal",
    borderColor: "hover:border-accent-teal/60",
    shadowColor: "hover:shadow-accent-teal/15",
    github: "https://github.com/billntwali/ideafinder",
    highlights: [
      "Fast capture with keyboard-first design philosophy",
      "Smart tag system with cross-idea relationship mapping",
      "Full-text search across your personal idea library",
      "Clean, distraction-free writing and review interface",
    ],
  },
  {
    id: 3,
    title: "Link Saver",
    tagline: "Chrome Extension for Web Curation",
    description: "A productivity Chrome extension for saving, organizing, and rediscovering web content with zero friction.",
    longDescription: `Link Saver is a Chrome extension built around a frustratingly common problem: saving interesting
    web content in a way you'll actually be able to find and use later. The extension provides one-click saving with
    automatic metadata extraction, a category system for organization, and a clean pop-up UI for reviewing and
    searching saved links. Everything syncs to local storage with optional export, so your content library is
    always fast and private.`,
    tech: ["JavaScript", "Chrome Extensions API", "CSS", "Local Storage"],
    category: "Developer Tool",
    icon: Globe,
    image: "/images/hero-day.png",
    color: "from-accent-green/20 to-accent-teal/10",
    accentColor: "text-accent-green",
    borderColor: "hover:border-accent-green/60",
    shadowColor: "hover:shadow-accent-green/15",
    github: "https://github.com/billntwali/link-saver",
    highlights: [
      "One-click save with automatic title, URL, and description extraction",
      "Custom category tagging and search by keyword or tag",
      "Clean pop-up UI with instant access to your saved library",
      "Local-first: fast, private, and zero dependency on external services",
    ],
  },
  {
    id: 4,
    title: "BioData Explorer",
    tagline: "Computational Biology Analysis Tool",
    description: "A data analysis and visualization toolkit for exploring biological datasets and genomic patterns.",
    longDescription: `BioData Explorer is a research-oriented analysis project that applies computational methods
    to biological datasets. It combines data cleaning, statistical analysis, and interactive visualization to
    help surface meaningful patterns in complex biological data. The project reflects my interest in the overlap
    between software engineering and scientific research — building tools that help researchers ask better
    questions and find answers faster.`,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter", "R"],
    category: "Research",
    icon: BarChart2,
    image: "/images/hero-night.png",
    color: "from-accent-purple/20 to-accent-blue/10",
    accentColor: "text-accent-purple",
    borderColor: "hover:border-accent-purple/60",
    shadowColor: "hover:shadow-accent-purple/15",
    github: "https://github.com/billntwali/biodata-explorer",
    highlights: [
      "Automated data cleaning and normalization pipelines",
      "Statistical pattern analysis across biological datasets",
      "Interactive visualizations for genomic and expression data",
      "Reproducible research workflows with Jupyter notebooks",
    ],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-2xl glass rounded-3xl border border-bg-border overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-80`} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${project.accentColor.replace("text-", "bg-")}/20 flex items-center justify-center`}>
              <Icon size={20} className={project.accentColor} />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
              <p className={`text-sm ${project.accentColor}`}>{project.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-text-secondary leading-relaxed text-sm">{project.longDescription}</p>

          {/* Highlights */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${project.accentColor.replace("text-", "bg-")} shrink-0`} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-4 py-2 flex-1 justify-center"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2 flex-1 justify-center"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-28 bg-bg-dark overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #3b82f6, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-tag mb-4 inline-flex">Projects</span>
            <div className="flex items-end justify-between flex-wrap gap-4 mt-4">
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary max-w-lg">
                Things I&apos;ve{" "}
                <span className="gradient-text">built</span>
              </h2>
              <a
                href="https://github.com/billntwali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors group"
              >
                View all on GitHub
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Project grid */}
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  onClick={() => setSelected(project)}
                  className={`group relative glass rounded-3xl overflow-hidden border border-bg-border
                    ${project.borderColor} transition-all duration-500
                    hover:-translate-y-2 hover:shadow-2xl ${project.shadowColor}
                    cursor-pointer
                    ${project.featured ? "lg:col-span-2" : ""}`}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-5 right-5 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-blue/20 text-accent-blue border border-accent-blue/30">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className={`relative ${project.featured ? "h-64 lg:h-72" : "h-48"} overflow-hidden`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-40 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-bg-surface/50 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/40 backdrop-blur-sm text-text-secondary border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-bg-elevated flex items-center justify-center shrink-0 border border-bg-border group-hover:border-current transition-colors ${project.accentColor}`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className={`font-display font-bold text-xl text-text-primary group-hover:${project.accentColor} transition-colors`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm ${project.accentColor} font-medium`}>{project.tagline}</p>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, project.featured ? 6 : 4).map((t) => (
                        <span key={t} className="skill-tag">{t}</span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-blue transition-colors"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                      <span className="ml-auto text-xs text-text-muted group-hover:text-text-secondary transition-colors flex items-center gap-1">
                        Details
                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
