# Bill Gate Ntwali — Portfolio

Personal portfolio of Bill Gate Ntwali, a Columbia University undergraduate working at the intersection of software engineering, computational biology, and data.

Live site: _add deployment URL_

## Overview

A single-page, dark-themed portfolio built from scratch with the Next.js App Router. The site presents a hero introduction, snapshot stats, biography, projects, experience, skills, interests, and contact information, layered with cinematic typography, glassmorphism, and scroll-driven motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 with custom design tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Cormorant Garant, DM Sans, DM Mono (Google Fonts)
- **Runtime:** React 19

## Project Structure

```
src/
  app/
    layout.tsx        Root layout, metadata, fonts, grain overlay
    page.tsx          Composition of all page sections
    globals.css       Design tokens and utility classes
  components/
    Navbar.tsx        Sticky navigation
    Hero.tsx          Landing introduction
    Snapshot.tsx      At-a-glance stats
    About.tsx         Biography
    Projects.tsx      Featured work
    Experience.tsx    Roles and timeline
    Skills.tsx        Technical capabilities
    Interests.tsx     Personal interests
    Contact.tsx       Contact links
    Footer.tsx        Footer
public/
  images/             Atmospheric background imagery
tailwind.config.ts    Custom color tokens and theme extensions
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm 9 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages hot-reload as files are edited.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Design System

- **Palette:** Deep charcoal and navy base with electric-blue, teal, and green accents
- **Typography:** Editorial serif headlines paired with humanist sans body copy and monospaced technical labels
- **Motion:** Scroll-reveal transitions and cursor parallax via Framer Motion
- **Surfaces:** Glassmorphism cards, subtle film grain overlay, layered background imagery

Color tokens, typography scales, and shared utility classes (`glass`, `btn`, `section-tag`) are defined in [tailwind.config.ts](tailwind.config.ts) and [src/app/globals.css](src/app/globals.css).

## Deployment

The project is configured for zero-config deployment on [Vercel](https://vercel.com). Any Next.js-compatible host will also work; build with `npm run build` and serve with `npm run start`.

## Author

**Bill Gate Ntwali**
Columbia University

- Email: bn2394@columbia.edu
- GitHub: [@billntwali](https://github.com/billntwali)

## License

All rights reserved. The source code is provided for reference and is not licensed for redistribution or reuse without permission.
