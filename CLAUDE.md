# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 personal portfolio website with dark/light theming, EN/PT internationalization, and scroll animations. Built with Vite, Vue Router, and plain CSS custom properties (no UI framework).

## Commands

- `npm run dev` — Start dev server with HMR
- `npm run build` — Production build
- `npm run preview` — Preview production build locally

No linting, testing, or type-checking tools are configured.

## Architecture

**Stack:** Vue 3 (Composition API, `<script setup>`), Vite 7, Vue Router 5, JavaScript (ES modules), CSS custom properties.

### Key Directories

- `src/composables/` — Reusable logic hooks (theme, language/i18n, scroll animation, smooth scroll)
- `src/components/ui/` — Reusable base components (BaseButton, BaseCard, SectionTitle, ThemeToggle, LanguageToggle)
- `src/components/sections/` — Full-width page sections (Hero, Expertise, Projects, Journey, Testimonials, Contact)
- `src/components/layout/` — AppHeader and AppFooter
- `src/pages/` — Route-level views (HomePage, ProjectsPage)
- `src/i18n/` — Translation message objects (`en.js`, `pt.js`)
- `src/assets/styles/` — Global CSS: `variables.css` (design tokens), `base.css` (reset/typography), `utilities.css` (animation/layout helpers)

### Patterns

**Composables for state:** No global store. Theme and language state are managed via composables with localStorage persistence and browser preference detection (`prefers-color-scheme`, `navigator.language`).

**Custom i18n:** Uses dot-notation key resolution (`t('nav.about')`) over simple message objects — no external i18n library.

**Polymorphic BaseButton:** Renders as `<router-link>`, `<a>`, or `<button>` based on which props (`to`, `href`, or neither) are provided.

**Theming:** CSS custom properties defined in `variables.css`, toggled via `data-theme` attribute on `<html>`. Dark mode is the default.

**Scroll animations:** Elements with `.reveal` class are observed via IntersectionObserver (in `useScrollAnimation`), gaining `.visible` when in viewport. Respects `prefers-reduced-motion`.

**Routing:** Two routes (`/` and `/projects`). ProjectsPage is lazy-loaded. Scroll behavior restores position or returns to top.

**Styling:** Scoped CSS per component, mobile-first responsive design, fluid typography via `clamp()`. Key breakpoints: 768px (mobile), 1024px (desktop).
