"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

const ROLES = [
  "Software Engineer",
  "Full-Stack Builder",
  "Computational Biology Student",
  "Data-Driven Problem Solver",
  "Building Tools for Real Impact",
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing">("typing");

  useEffect(() => {
    const current = ROLES[index];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("hold"), 2200);
        return () => clearTimeout(t);
      }
    }

    if (phase === "hold") {
      const t = setTimeout(() => setPhase("erasing"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, index]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text">{displayed}</span>
      <span
        className="ml-0.5 inline-block w-0.5 h-8 bg-accent-blue animate-pulse"
        style={{ verticalAlign: "middle" }}
      />
    </span>
  );
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const pts: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(pts);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-blue"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 15, -20, 0],
            x: [0, 15, -10, 20, 0],
            opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.6, p.opacity * 1.4, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GlowOrb({
  springX,
  springY,
}: {
  springX: ReturnType<typeof useSpring>;
  springY: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(springX, [-1, 1], [20, -20]);
  const y = useTransform(springY, [-1, 1], [15, -15]);
  return (
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, transparent 70%)",
        x,
        y,
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 80 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 80 });

  const imgX = useTransform(springX, [-1, 1], [-12, 12]);
  const imgY = useTransform(springY, [-1, 1], [-8, 8]);
  const glowX = useTransform(springX, [-1, 1], [-30, 30]);
  const glowY = useTransform(springY, [-1, 1], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050a14 0%, #080f1e 100%)" }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ x: imgX, y: imgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-night.png"
          alt="Background"
          fill
          className="object-cover opacity-25"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-bg-deep/40 to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/80 via-transparent to-bg-deep/60" />
      </motion.div>

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)",
          x: glowX,
          y: glowY,
        }}
      />
      <GlowOrb springX={springX} springY={springY} />

      {/* Particle field */}
      <ParticleField />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <span className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              Columbia University · Class of 2027
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl text-text-primary leading-none tracking-tight mb-6"
          >
            Bill{" "}
            <span className="relative inline-block">
              Ntwali
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4, #10b981)" }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Dynamic role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 h-12 flex items-center justify-center"
          >
            <TypewriterText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Columbia undergraduate at the intersection of{" "}
            <span className="text-accent-blue font-medium">software engineering</span>,{" "}
            <span className="text-accent-teal font-medium">computational biology</span>, and{" "}
            <span className="text-accent-green font-medium">data-driven problem solving</span>.
            I build tools that connect technical depth with real-world usefulness.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <button onClick={scrollToProjects} className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-accent-blue/30 hover:shadow-accent-blue/50">
              View Projects
              <ExternalLink size={16} />
            </button>
            <button onClick={scrollToAbout} className="btn-secondary text-base px-8 py-3.5">
              About Me
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-3.5"
            >
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex items-center justify-center gap-5"
          >
            {[
              { icon: Github, href: "https://github.com/billntwali", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/billntwali", label: "LinkedIn" },
              { icon: Mail, href: "mailto:bn2394@columbia.edu", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/20"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-blue transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
