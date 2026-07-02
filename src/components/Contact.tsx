"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  {
    label: "Email",
    value: "bn2394@columbia.edu",
    href: "mailto:bn2394@columbia.edu",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/billNtwali",
    href: "https://github.com/billNtwali",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bill-gate-ntwali",
    href: "https://www.linkedin.com/in/bill-gate-ntwali/",
    external: true,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "https://drive.google.com/file/d/1NhMyC9TWZHXDWVhmDHhDQDL4Zyboiv9q/view?usp=sharing",
    external: true,
  },
];

const TOPICS = [
  "Internship & research opportunities",
  "Full-stack or data engineering roles",
  "Computational biology collaborations",
  "Nonprofit / mission-driven projects",
  "Hackathons and team builds",
  "General conversations about tech and ideas",
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "#0e1020" }}
    >
      {/* Background: hills.png, very faded */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hills.png"
          alt=""
          fill
          className="object-cover"
          quality={70}
          style={{ opacity: 0.07, objectPosition: "center 70%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,16,32,0.94)" }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="label-section block mb-5">Contact</span>
          <h2
            className="heading-section"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 300, maxWidth: "14ch" }}
          >
            Let&apos;s build something{" "}
            <em style={{ fontStyle: "italic", color: "#c4883e" }}>meaningful.</em>
          </h2>
          <p
            className="text-text-secondary mt-8 max-w-lg"
            style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8 }}
          >
            I&apos;m always excited to connect about software, data, research, and impact-driven work.
            Whether it&apos;s a role, a collaboration, or just a conversation — reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-0"
            style={{ borderTop: "1px solid #1d2136" }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.6 }}
                className="flex items-center justify-between py-5 group transition-all duration-300"
                style={{ borderBottom: "1px solid #1d2136" }}
              >
                <div className="flex items-center gap-5">
                  <span className="label-section" style={{ width: "4.5rem", flexShrink: 0 }}>
                    {link.label}
                  </span>
                  <span
                    className="transition-colors duration-300 group-hover:text-accent-gold"
                    style={{ fontSize: "0.9375rem", color: "#8090a6", fontWeight: 300 }}
                  >
                    {link.value}
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="transition-all duration-300 group-hover:text-accent-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#1d2136", flexShrink: 0 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Right: topics + final cta */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="label-section block mb-6">Happy to talk about</p>
            <div className="space-y-2 mb-12">
              {TOPICS.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3"
                  style={{ fontSize: "0.875rem", color: "#404d62", fontWeight: 300 }}
                >
                  <span
                    style={{
                      width: "3px", height: "3px", borderRadius: "50%",
                      background: "#c4883e", flexShrink: 0, opacity: 0.7,
                    }}
                  />
                  {topic}
                </div>
              ))}
            </div>

            <a
              href="mailto:bn2394@columbia.edu"
              className="btn-outline"
            >
              Say hello
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
