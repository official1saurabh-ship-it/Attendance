# AttendPro — Smart Attendance Management System

A premium, modern SaaS landing page for an attendance management system built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animations
- **React Icons** — Icon library

## Features

- 11 premium sections (Hero, Trust Bar, Features, How It Works, Benefits, Dashboard, Pricing, Testimonials, FAQ, CTA, Footer)
- Glassmorphism effects, gradient backgrounds, floating animations
- Framer Motion scroll-triggered and hover animations
- Fully responsive (mobile, tablet, laptop, desktop, ultrawide)
- Mobile-first design with hamburger navigation
- Monthly/Annual pricing toggle
- Interactive testimonial slider
- Animated FAQ accordion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
├── index.css                  # Tailwind directives & custom utilities
└── components/
    ├── Navbar.jsx             # Sticky nav with scroll blur + mobile menu
    ├── Hero.jsx               # Full-screen hero with animated dashboard
    ├── TrustBar.jsx           # Company logos + social proof metrics
    ├── Features.jsx           # 6 feature cards with gradients & hover
    ├── HowItWorks.jsx         # 4-step timeline
    ├── Benefits.jsx           # Split layout checklist + dashboard
    ├── DashboardShowcase.jsx  # Analytics panels & chart preview
    ├── Pricing.jsx            # 3-tier pricing with toggle
    ├── Testimonials.jsx       # Animated customer slider
    ├── FAQ.jsx                # Animated accordion
    ├── FinalCTA.jsx           # Dark conversion section
    └── Footer.jsx             # Full footer with links
```

## Customization

Edit `tailwind.config.js` to change colors, fonts, and animation keyframes. Primary color: `#2563EB`, Accent: `#10B981`.
