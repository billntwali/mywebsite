"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-bg-border bg-bg-deep py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-teal flex items-center justify-center font-display font-bold text-white text-xs shadow-md">
              BN
            </div>
            <div>
              <p className="text-text-primary text-sm font-semibold">Bill Ntwali</p>
              <p className="text-text-muted text-xs">Columbia University · Builder · Researcher</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
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
                className="w-9 h-9 rounded-lg glass border border-bg-border flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue/30 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} Bill Ntwali
          </p>
        </div>
      </div>
    </footer>
  );
}
