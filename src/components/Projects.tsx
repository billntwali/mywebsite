"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface Project {
  id: number;
  num: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  longDescription: string[];
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    num: "01",
    title: "LemonTree",
    tagline: "Volunteer Outreach Platform",
    category: "Full-Stack · Nonprofit",
    description:
      "A production-grade volunteer management platform built for a nonprofit to replace fragmented manual workflows. Handles event creation, participant registration, guest sign-ups, attendance tracking, automated reminders, and admin dashboards end-to-end.",
    longDescription: [
      "LemonTree is a full-stack platform designed from the ground up for a real nonprofit organization. The goal was to replace a fragmented, manual volunteer management workflow with a cohesive system that event leaders and participants actually want to use.",
      "The platform supports multiple user roles — administrators, event leaders, registered participants, and guest sign-ups — each with distinct workflows and permissions. Real-time dashboards give organizers visibility into attendance and participation across events.",
      "Built with a Next.js frontend, a FastAPI backend, and a PostgreSQL database via Supabase, the system handles the full lifecycle of a volunteer event from creation through post-event reporting.",
    ],
    highlights: [
      "Multi-role access control: admin, event leaders, participants, guest sign-ups",
      "Automated email reminders and post-event attendance workflows",
      "Real-time event dashboards with participation analytics",
      "Mobile-responsive, production-deployed with full data persistence",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL"],
    github: "https://github.com/billNtwali/lemontree",
    featured: true,
    accentColor: "#c4883e",
  },
  {
    id: 2,
    num: "02",
    title: "IdeaFinder",
    tagline: "Intelligent Idea Discovery Tool",
    category: "Product · Web App",
    description:
      "A productivity MVP built around the problem of idea capture and rediscovery. Build a searchable, interconnected library of ideas with smart tagging, relationship mapping, and a fast capture-first interface.",
    longDescription: [
      "IdeaFinder addresses a frustratingly common problem: capturing valuable thoughts in a way that makes them findable and usable later. Instead of letting ideas disappear into note apps or forgotten tabs, IdeaFinder builds a personal idea library with real structure.",
      "The app surfaces connections between entries, supports custom tagging and filtering, and provides a distraction-free interface designed around speed of entry. Full-text search, cross-idea relationships, and a clean review flow make it genuinely useful, not just another capture tool.",
    ],
    highlights: [
      "Keyboard-first capture interface with zero friction",
      "Cross-idea relationship mapping and tag-based organization",
      "Full-text search across your personal idea library",
      "Clean writing and review interface, minimal and fast",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL"],
    github: "https://github.com/billNtwali/ideafinder",
    accentColor: "#4e6e9a",
  },
  {
    id: 3,
    num: "03",
    title: "Link Saver",
    tagline: "Chrome Extension for Web Curation",
    category: "Developer Tool · Extension",
    description:
      "A Chrome extension for saving, organizing, and rediscovering web content with zero friction. One-click saves, automatic metadata extraction, custom categorization, and a clean pop-up UI for instant access to your library.",
    longDescription: [
      "Link Saver was built around a simple but real frustration: saving interesting web content in a way you'll actually find and use later. Existing bookmark systems are clunky and disorganized — this extension makes it genuinely fast and private.",
      "One-click saving with automatic title, URL, and description extraction. Custom category tagging, keyword search, and a clean pop-up UI that opens instantly. Everything stores locally — fast, private, and zero dependency on external services.",
    ],
    highlights: [
      "One-click save with automatic metadata extraction",
      "Custom category tagging and keyword search",
      "Clean pop-up UI with instant local access",
      "Local-first: private, fast, no external dependencies",
    ],
    tech: ["JavaScript", "Chrome Extensions API", "CSS", "Local Storage"],
    github: "https://github.com/billNtwali/link-saver",
    accentColor: "#3d6649",
  },
  {
    id: 4,
    num: "04",
    title: "BioData Explorer",
    tagline: "Computational Biology Analysis Tool",
    category: "Research · Data Science",
    description:
      "A data analysis and visualization toolkit for exploring biological datasets and genomic patterns. Applies computational methods to surface meaningful signals in complex biological data.",
    longDescription: [
      "BioData Explorer applies computational methods to biological datasets, combining data cleaning, statistical analysis, and interactive visualization to help surface meaningful patterns in complex data.",
      "The project reflects my interest in the overlap between software engineering and scientific research — building tools that help researchers ask better questions and find answers faster. Reproducible workflows with Jupyter notebooks make results shareable and verifiable.",
    ],
    highlights: [
      "Automated data cleaning and normalization pipelines",
      "Statistical pattern analysis across biological datasets",
      "Interactive visualizations for genomic and expression data",
      "Reproducible research workflows via Jupyter notebooks",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "R", "Jupyter"],
    github: "https://github.com/billNtwali/biodata-explorer",
    accentColor: "#6b5ea8",
  },
];

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(6,8,16,0.88)", backdropFilter: "blur(12px)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl overflow-hidden"
        style={{
          background: "#0e1020",
          border: "1px solid #1d2136",
          borderRadius: "3px",
          maxHeight: "88vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid #1d2136" }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="label-section block mb-2">{project.category}</span>
              <h3
                className="heading-section"
                style={{ fontSize: "2rem", fontWeight: 400, color: project.accentColor }}
              >
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm mt-1" style={{ fontStyle: "italic" }}>
                {project.tagline}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors mt-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-7 space-y-7">
          {/* Description */}
          <div className="space-y-4">
            {project.longDescription.map((para, i) => (
              <p key={i} className="text-text-secondary leading-relaxed"
                style={{ fontSize: "0.9rem", fontWeight: 300 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div>
            <p className="label-section mb-4 block">Key Features</p>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-text-secondary"
                  style={{ fontSize: "0.875rem", fontWeight: 300 }}>
                  <span
                    style={{
                      width: "4px", height: "4px", borderRadius: "50%", flexShrink: 0,
                      background: project.accentColor, marginTop: "8px",
                    }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <p className="label-section mb-4 block">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="label-mono px-2.5 py-1.5"
                  style={{ background: "#151828", border: "1px solid #1d2136", borderRadius: "2px" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 pt-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                GitHub <ArrowUpRight size={13} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-arrow">
                Live Demo <ArrowUpRight size={13} />
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
      <section
        id="projects"
        className="py-28 lg:py-36"
        style={{ background: "#0e1020" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 flex items-end justify-between flex-wrap gap-6"
          >
            <div>
              <span className="label-section block mb-5">Projects</span>
              <h2
                className="heading-section"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300 }}
              >
                Things I&apos;ve{" "}
                <em style={{ fontStyle: "italic", color: "#c4883e" }}>built</em>
              </h2>
            </div>
            <a
              href="https://github.com/billNtwali"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              All on GitHub <ArrowUpRight size={13} />
            </a>
          </motion.div>

          {/* Project list */}
          <div ref={ref} className="space-y-4">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setSelected(project)}
                  className="w-full text-left group"
                >
                  <div
                    className="card-dark transition-all duration-400 p-7 lg:p-9"
                    style={{
                      borderLeftWidth: "2px",
                      borderLeftColor: project.featured ? project.accentColor : "#1d2136",
                    }}
                  >
                    <div className="flex items-start justify-between gap-6 flex-wrap">
                      {/* Left: project info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="label-mono">{project.num}</span>
                          <span className="label-mono">{project.category}</span>
                          {project.featured && (
                            <span
                              className="label-section"
                              style={{ color: project.accentColor }}
                            >
                              Featured
                            </span>
                          )}
                        </div>
                        <h3
                          className="heading-section mb-1 transition-colors duration-300 group-hover:text-accent-gold"
                          style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 400 }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-text-secondary mb-4"
                          style={{ fontSize: "0.9375rem", fontStyle: "italic", fontWeight: 300 }}
                        >
                          {project.tagline}
                        </p>
                        <p
                          className="text-text-secondary leading-relaxed mb-5"
                          style={{ fontSize: "0.875rem", fontWeight: 300, maxWidth: "52ch" }}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="label-mono px-2.5 py-1"
                              style={{
                                background: "#151828",
                                border: "1px solid #1d2136",
                                borderRadius: "2px",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: action */}
                      <div className="flex items-center gap-5 shrink-0 self-start pt-1">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="link-arrow"
                          >
                            GitHub
                          </a>
                        )}
                        <span
                          className="link-arrow transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ color: "#c4883e" }}
                        >
                          Details <ArrowUpRight size={13} style={{ display: "inline" }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Screenshot note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 label-mono text-center"
            style={{ color: "#2a3040" }}
          >
            Project screenshots coming soon
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
