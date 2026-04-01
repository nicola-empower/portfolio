# Nicola Berry - Portfolio

A high-performance portfolio website showcasing digital solutions across full-stack development, AI automation, and business systems. Built to demonstrate modern web development practices and serves as both a professional profile and a live proof of capability.

🌐 **Live:** [nicolaberry.uk](https://nicolaberry.uk)

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@theme inline` semantic tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) - persistent dark/light mode
- **Forms:** [Formspree](https://formspree.io/) for contact form submissions

---

## Features

- **Project Gallery** - Data-driven, filterable grid (Web App, Automation, Case Study, Website)
- **Project Deep Dives** - Full detail pages per project with problem/solution/tech/gallery sections
- **CV Page** - Interactive professional CV with experience, education, languages and superpowers
- **Dark / Light Mode** - Seamless switching with the Champagne/Sage/Burgundy/Cream palette
- **SEO Structured Data** - Schema.org JSON-LD with `Person`, `Organization`, and `WebSite` nodes, including cross-site `sameAs` entity linking to empower digital properties
- **Responsive** - Fully adaptive from mobile to widescreen

---

## Brand Palette

| Token | Light | Dark |
|---|---|---|
| Background | `#F5F5F0` (Cream) | `#120008` (deep maroon-black) |
| Heading | `#630625` (Burgundy) | `#ffffff` |
| Foreground | `#630625` (Burgundy) | `#F5F5F0` (Cream) |
| Accent Primary | `#728C69` (Sage) | `#728C69` (Sage) |
| Accent Secondary | `#F7E7CE` (Champagne) | `#2D0412` |


---

## Getting Started

```bash
git clone https://github.com/nicola-empower/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/              # Next.js App Router pages & layouts
  layout.tsx      # Root layout with JSON-LD structured data
  globals.css     # Tailwind v4 @theme tokens + CSS vars
  cv/             # Interactive CV page
components/
  sections/       # Page sections (Hero, Services, Process, Contact…)
  work/           # ProjectCard, ProjectModal
  ui/             # Shared UI (Button, GlassCard, ContactForm, ThemeToggle)
  layout/         # Navbar, Footer
data/
  projects.ts     # Single source of truth for all project data
types/            # TypeScript definitions
```

---

**Nicola Berry** - Principal Digital Architect | Operations Engineer | Technical Founder  
[nicolaberry.uk](https://nicolaberry.uk) · [empowerdigitalsolutions.co.uk](https://empowerdigitalsolutions.co.uk)
