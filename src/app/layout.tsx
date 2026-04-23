import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bill Gate ntwali",
  description:
    "Columbia University undergraduate at the intersection of software engineering, computational biology, and data. Builder, researcher, and community leader.",
  keywords: ["Bill Gate ntwali", "Columbia University", "Software Engineer", "Computational Biology"],
  authors: [{ name: "Bill Gate ntwali" }],
  openGraph: {
    title: "Bill Gate ntwali",
    description: "Software engineer, builder, and computational biology student at Columbia University.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09091a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cormorant Garant — cinematic editorial serif */}
        {/* DM Sans — clean humanist sans, DM Mono — technical labels */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-bg-base text-text-primary antialiased overflow-x-hidden"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        {/* Film grain overlay — adds cinematic texture */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
