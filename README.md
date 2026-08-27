# Food Delivery Landing Page

A modern, fully responsive food delivery landing page built with a Persian (RTL) interface. The project covers the complete user-facing experience of an online food ordering service: a marketing landing page, a rich home page, and a dedicated "About" page.

## About this project

This repository is my **learning project** — I started it to practice and deepen my front-end development skills by building something real and useful rather than isolated exercises. Along the way I focused on:

- **Modern tooling** — working with Vite as a build tool and Tailwind CSS 4 for utility-first styling.
- **Vanilla JavaScript architecture** — structuring an application with reusable components (hero, categories, cards, footer) and page modules, without a framework.
- **RTL and typography** — designing for a right-to-left Persian audience, including custom font loading with a full weight range.
- **State and routing** — implementing hash-based client-side routing between pages and wiring interactive UI (mobile sidebar navigation, overlays, links).
- **UI/UX fundamentals** — layout, responsive design, visual hierarchy, color systems, and micro-interactions.

The project is a work in progress and a place to experiment; feedback and contributions are always welcome.

## Features

- Hero section with call-to-action, trust statistics, and floating cards
- Food category grid with custom SVG iconography
- Popular dishes section with pricing, ratings, and discount badges
- "How it works" guide for ordering
- Promotional discount banner
- Customer testimonials
- Full About page with company story, stats, and values
- Responsive design for desktop, tablet, and mobile
- Mobile sidebar navigation with overlay
- Hash-based routing between home and about pages

## Tech stack

| Layer       | Technology        |
| ----------- | ----------------- |
| Build tool  | Vite              |
| Styling     | Tailwind CSS 4    |
| Language    | Vanilla JavaScript (ES Modules) |
| Fonts       | Lahzeh (Persian)  |
| Language UI | Persian (RTL)     |

## Project structure

```
src/
├── components/        # Reusable UI components (hero, nav, footer, sections)
├── pages/             # Page modules (home, about)
├── assets/fonts/      # Lahzeh typeface weights
├── style.css          # Tailwind entry + design tokens
└── main.js            # App entry, routing, and global interactions
```

## License

This project is for learning purposes. Please reach out before reusing the design or assets commercially.
