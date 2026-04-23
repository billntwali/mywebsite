import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bill Ntwali — Software Engineer & Builder",
  description:
    "Columbia University undergraduate building at the intersection of software engineering, computational biology, and data. Full-stack developer, researcher, and community leader.",
  keywords: [
    "Bill Ntwali",
    "Columbia University",
    "Software Engineer",
    "Computational Biology",
    "Full-Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Bill Ntwali", url: "https://billntwali.com" }],
  openGraph: {
    title: "Bill Ntwali — Software Engineer & Builder",
    description:
      "Columbia University undergraduate at the intersection of software engineering, computational biology, and data.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bill Ntwali — Software Engineer & Builder",
    description:
      "Columbia University undergraduate at the intersection of software engineering, computational biology, and data.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050a14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-bg-deep text-text-primary">
        {children}
      </body>
    </html>
  );
}
