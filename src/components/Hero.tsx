"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const ROLES = [
  "Software Engineer",
  "Computational Biology Student",
  "Full-Stack Builder",
  "Data-Driven Problem Solver",
];

function RoleFader() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(hold);
  }, [idx]);

  useEffect(() => {
    if (!visible) {
      const swap = setTimeout(() => {
        setIdx((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 500);
      return () => clearTimeout(swap);
    }
  }, [visible]);

  return (
    <div className="relative h-6 overflow-hidden">
      <motion.span
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="label-mono absolute inset-0 flex items-center justify-center"
        style={{ color: "#8090a6", letterSpacing: "0.2em" }}
      >
        {ROLES[idx]}
      </motion.span>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 60, stiffness: 40 });
  const springY = useSpring(mouseY, { damping: 60, stiffness: 40 });
  const imgX = useTransform(springX, [-1, 1], [-10, 10]);
  const imgY = useTransform(springY, [-1, 1], [-6, 6]);

  const onMouseMove = (e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#09091a" }}
    >
      {/* ── Background: hero-night.png with subtle parallax ──────── */}
      <motion.div
        style={{ x: imgX, y: imgY }}
        className="absolute inset-[-4%] z-0"
      >
        <Image
          src="/images/hero-night.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
          style={{ objectPosition: "center 40%" }}
        />
      </motion.div>

      {/* ── Multi-layer overlay: cinematic, not washed out ────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Vignette + gradient for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(9,9,26,0.52) 0%, rgba(9,9,26,0.3) 30%, rgba(9,9,26,0.48) 65%, rgba(9,9,26,0.92) 100%)",
          }}
        />
        {/* Subtle left-right vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(9,9,26,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center pt-16 pb-24">

        {/* Location / institution label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-10"
        >
          <span
            className="label-section"
            style={{ letterSpacing: "0.28em" }}
          >
            Columbia University &nbsp;·&nbsp; New York
          </span>
        </motion.div>

        {/* Name — the dominant element */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display mb-6"
          style={{
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
            fontWeight: 300,
            letterSpacing: "0.01em",
            lineHeight: 0.9,
          }}
        >
          Bill Ntwali
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          style={{ originX: 0.5 }}
          className="mb-8"
        >
          <div className="divider-gold mx-auto" style={{ width: "2.5rem", opacity: 0.7 }} />
        </motion.div>

        {/* Dynamic role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mb-10"
        >
          <RoleFader />
        </motion.div>

        {/* Short intro */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-text-secondary text-base leading-relaxed max-w-lg mx-auto mb-12"
          style={{ fontWeight: 300 }}
        >
          Building at the intersection of software engineering, computational biology,
          and data — with a focus on tools that solve real problems and create genuine impact.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost"
          >
            About Me
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Resume
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
        style={{ cursor: "pointer" }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} style={{ color: "#8090a6" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
