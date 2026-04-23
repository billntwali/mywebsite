"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Mail, Github, Linkedin, FileText, ArrowUpRight, Send } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "bn2394@columbia.edu",
    href: "mailto:bn2394@columbia.edu",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
    border: "hover:border-accent-blue/50",
    shadow: "hover:shadow-accent-blue/15",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/billntwali",
    href: "https://github.com/billntwali",
    color: "text-text-primary",
    bg: "bg-bg-elevated",
    border: "hover:border-text-muted/40",
    shadow: "hover:shadow-white/5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/billntwali",
    href: "https://linkedin.com/in/billntwali",
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
    border: "hover:border-accent-teal/50",
    shadow: "hover:shadow-accent-teal/15",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    border: "hover:border-accent-green/50",
    shadow: "hover:shadow-accent-green/15",
  },
];

const CONVERSATION_STARTERS = [
  "Internship & research opportunities",
  "Full-stack or data engineering roles",
  "Computational biology collaborations",
  "Nonprofit / mission-driven projects",
  "Hackathons & team builds",
  "General coffee chats or questions",
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="relative py-28 bg-bg-dark overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-day.png"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          quality={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/97 to-bg-deep" />
      </div>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse, #3b82f6, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-tag mb-4 inline-flex">Contact</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mt-4 mb-6">
              Let&apos;s build something{" "}
              <span className="gradient-text">meaningful</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto">
              I&apos;m always excited to connect about software, data, research, and impact-driven work.
              Whether it&apos;s a role, a collaboration, or just a conversation — reach out.
            </p>
          </motion.div>

          {/* Link cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            {LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`group glass rounded-2xl p-5 border border-bg-border ${link.border}
                    transition-all duration-400 hover:-translate-y-1 hover:shadow-xl ${link.shadow}
                    flex items-center gap-4`}
                >
                  <div className={`w-12 h-12 rounded-xl ${link.bg} flex items-center justify-center shrink-0
                    group-hover:scale-105 transition-transform`}>
                    <Icon size={20} className={link.color} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-text-muted text-xs font-mono mb-0.5">{link.label}</p>
                    <p className={`font-medium text-sm ${link.color} truncate`}>{link.value}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </a>
              );
            })}
          </motion.div>

          {/* Conversation topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-7 border border-bg-border"
          >
            <div className="flex items-center gap-2 mb-5">
              <Send size={16} className="text-accent-blue" />
              <h3 className="font-display font-semibold text-text-primary">Happy to chat about</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {CONVERSATION_STARTERS.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 rounded-lg text-xs text-text-secondary bg-bg-elevated border border-bg-border
                    hover:border-accent-blue/30 hover:text-accent-blue transition-all duration-200 cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center mt-12"
          >
            <a
              href="mailto:bn2394@columbia.edu"
              className="inline-flex items-center gap-2 btn-primary text-base px-8 py-4 shadow-xl shadow-accent-blue/25 hover:shadow-accent-blue/40"
            >
              <Mail size={18} />
              Say hello
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
