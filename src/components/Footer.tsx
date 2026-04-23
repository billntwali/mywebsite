"use client";

export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ background: "#09091a", borderColor: "#1d2136" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between flex-wrap gap-4">
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "1rem",
            fontWeight: 400,
            color: "#404d62",
            letterSpacing: "0.04em",
          }}
        >
          Bill Ntwali
        </span>

        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/billntwali" },
            { label: "LinkedIn", href: "https://linkedin.com/in/billntwali" },
            { label: "Email", href: "mailto:bn2394@columbia.edu" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono transition-colors duration-250 hover:text-accent-gold"
              style={{ color: "#2a3040" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="label-mono" style={{ color: "#2a3040" }}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
