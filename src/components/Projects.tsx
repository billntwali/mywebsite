"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, X } from "lucide-react";

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
    title: "Code to Give — LemonTree",
    tagline: "Volunteer Outreach Platform",
    category: "Full-Stack · Nonprofit",
    description:
      "A full-stack platform that helps LemonTree organize and manage volunteer events. Organizers can create events, share with volunteers, manage sign-ups and cancellations, track attendees, and check people in during events in real time.",
    longDescription: [
      "This platform was built to give LemonTree a single system for volunteer operations instead of juggling disconnected tools and manual processes.",
      "I focused on backend and database engineering, building a 16-endpoint REST API and a 10-table PostgreSQL schema to support authentication, event management, registrations, attendee tracking, and check-in workflows.",
      "I also helped ship event-facing features like real-time event feeds and automatically generated PDF flyers that include QR codes and location information.",
    ],
    highlights: [
      "Built a 16-endpoint REST API for event and volunteer workflows",
      "Designed a 10-table PostgreSQL schema for core platform data",
      "Implemented real-time event feeds for organizers and volunteers",
      "Generated PDF flyers automatically with QR codes and location details",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Supabase", "PostgreSQL"],
    github: "https://github.com/Labcoxyzl/MS-CodeToGive-TEAM3",
    demo: "https://ms-code-to-give-deployment-tawny.vercel.app/",
    featured: true,
    accentColor: "#c4883e",
  },
  {
    id: 2,
    num: "02",
    title: "SendSmart",
    tagline: "Remittance Cost Comparator",
    category: "Fintech · Full-Stack",
    description:
      "A fintech comparison platform that helps users find the cheapest and most effective way to send money internationally by ranking transfer providers across fees, rates, payout methods, speed, and recipient outcome.",
    longDescription: [
      "SendSmart goes beyond flat fee comparisons by ranking transfer providers using multiple practical factors that matter to real users.",
      "I built the platform with Next.js, TypeScript, FastAPI, Supabase, and PostgreSQL to support cross-corridor quote comparison and ranking workflows.",
      "The backend includes 12 REST API endpoints for corridor search, quote comparison, provider ranking, saved searches, alert configuration, and savings calculations.",
    ],
    highlights: [
      "Compared providers using fees, FX rates, payout methods, and transfer speed",
      "Built 12 REST endpoints for quote, ranking, and savings workflows",
      "Added saved searches and alerting for recurring transfer needs",
      "Ranked options by final recipient value, not just transfer cost",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL"],
    accentColor: "#4e6e9a",
  },
  {
    id: 3,
    num: "03",
    title: "MenyaCode",
    tagline: "GitHub Repository Analyzer",
    category: "Developer Tool · AI",
    description:
      "A tool that helps developers understand unfamiliar GitHub repositories faster with project-structure exploration and DFS/BFS traversal visualizations.",
    longDescription: [
      "RepoLens allows users to enter a public GitHub repository URL and quickly explore how the codebase is structured.",
      "I built a full-stack app with a Spring Boot backend and a Next.js/TypeScript frontend, with repository views that support DFS and BFS traversal.",
      "The tool uses the OpenAI API to generate plain-English file explanations across 27 file and language types, with safeguards for large files, unsupported formats, API rate limits, and runtime errors.",
    ],
    highlights: [
      "Repository traversal visualizations using DFS and BFS",
      "Plain-English file explanations generated via OpenAI API",
      "Coverage across 27 file and language types",
      "Guardrails for size limits, unsupported formats, and API limits",
    ],
    tech: ["Spring Boot", "Java", "Next.js", "TypeScript", "OpenAI API"],
    github: "https://github.com/billntwali/menyacode",
    demo: "https://menyacode-production.up.railway.app/",
    featured: true,
    accentColor: "#3d6649",
  },
  {
    id: 4,
    num: "04",
    title: "IdeaFinder",
    tagline: "Chrome Extension",
    category: "Extension · Search",
    description:
      "A Chrome extension for searching long articles, books, PDFs, and web documents by meaning instead of exact keywords.",
    longDescription: [
      "IdeaFinder supports concept-level search so users can query ideas rather than exact phrases, for example finding passages that imply being treated as secondary without using those exact words.",
      "I built the extension using TypeScript, React, and Chrome Manifest V3.",
      "The retrieval pipeline extracts page text, chunks it at paragraph level, and combines BM25 with Fuse.js to find relevant matches. It also supports scroll-linked highlighting, local notes, tags, and saved passages.",
    ],
    highlights: [
      "Meaning-based retrieval for long-form documents and web pages",
      "Paragraph chunking with BM25 + Fuse.js ranking pipeline",
      "Scroll-linked highlighting for fast context navigation",
      "Local notes, tags, and saved-passage workflows",
    ],
    tech: ["TypeScript", "React", "Chrome Manifest V3", "BM25", "Fuse.js"],
    github: "https://github.com/billNtwali/ideafinder",
    demo: "https://chromewebstore.google.com/detail/ideafinder/emngnhajiadljeiigbmfilidjngenddj",
    accentColor: "#6b5e3a",
  },
  {
    id: 5,
    num: "05",
    title: "Chess Forge",
    tagline: "Point72 Cubist Hackathon",
    category: "Hackathon · AI",
    description:
      "An AI-powered chess platform that creates custom opponents from user prompts and generates distinct behavior with move narration.",
    longDescription: [
      "Chess Forge lets users describe the type of opponent they want and then generates a corresponding chess-playing style.",
      "I worked on a 5-person team integrating Claude Haiku and Claude Sonnet across prompt interpretation, evaluation-code generation, and real-time move commentary.",
      "I also helped build a 5-stage validation pipeline for syntax, safety, sanity, determinism, and play-style variation, increasing prompt success from 40% to 100% after iterative tuning.",
    ],
    highlights: [
      "Generated custom chess agents directly from user intent",
      "Integrated Claude Haiku and Sonnet into multi-stage AI workflow",
      "Built 5-stage validation for syntax, safety, and deterministic behavior",
      "Improved prompt success rate from 40% to 100%",
    ],
    tech: ["TypeScript", "AI Orchestration", "Claude Haiku", "Claude Sonnet", "Prompt Engineering"],
    github: "https://github.com/billntwali/Chess_cubist",
    accentColor: "#9a4e4e",
  },
  {
    id: 6,
    num: "06",
    title: "Fargo Covenant Continuity",
    tagline: "Wells Fargo x GCA Early Talent Competition",
    category: "Fintech Concept · AI",
    description:
      "An AI banking concept focused on improving trust through transparent fraud resolution, onboarding, and small-business lending commitments.",
    longDescription: [
      "Fargo Covenant Continuity was designed as a trust-first banking concept to make customer-bank commitments more visible and actionable.",
      "The idea reframes support and lending workflows around shared accountability, clearer case context, and explainable decision support.",
      "The concept included a Promise Ledger for commitments, a cross-channel Case Space for support interactions, and a Relationship Copilot for policy-grounded summaries and lending explanations.",
    ],
    highlights: [
      "Promise Ledger to track commitments between customers and the bank",
      "Cross-channel Case Space to unify support interactions",
      "Relationship Copilot for policy-grounded case guidance",
      "Explainable onboarding, fraud resolution, and lending workflows",
    ],
    tech: ["AI Product Design", "Fintech Operations", "Case Management", "Policy Grounding"],
    accentColor: "#4e4e9a",
  },
  {
    id: 7,
    num: "07",
    title: "Dividend",
    tagline: "Ramp Hackathon",
    category: "Hackathon · Fintech",
    description:
      "An AI pricing and revenue-intelligence platform built in a 2-person, 4-hour hackathon to help professional-service firms quantify the financial value created when AI reduces billable work.",
    longDescription: [
      "Dividend was built in a 2-person, 4-hour hackathon to help professional-service firms quantify the financial value created when AI reduces billable work.",
      "I engineered a centralized calculation system that combines historical labor baselines, actual hours, and 47 Ramp-style AI transactions to calculate efficiency savings and generate transparent client invoices.",
      "I also developed interactive pricing simulations, ROI dashboards, and invoice-outcome tracking to split AI-generated value between firms and clients and support data-driven pricing decisions.",
    ],
    highlights: [
      "Built in a 2-person, 4-hour hackathon sprint",
      "Centralized calculation engine combining labor baselines, actual hours, and 47 Ramp-style AI transactions",
      "Generated transparent, efficiency-based client invoices",
      "Interactive pricing simulations and ROI dashboards to split AI-generated value",
    ],
    tech: ["React", "TypeScript", "Vite", "Recharts"],
    demo: "https://ramp-dividend-production.up.railway.app/",
    accentColor: "#6b4e9a",
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
                <Globe size={13} /> Live Site <ArrowUpRight size={13} />
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
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="link-arrow inline-flex items-center gap-1.5"
                            title="Visit deployed site"
                          >
                            <Globe size={13} /> Live
                          </a>
                        )}
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
