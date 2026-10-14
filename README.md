# NARA Studio (v2)

Revenue-driven personal branding website for [NARA Studio](https://github.com/beniskillen/thaibiazzini) — Thai Biazzini.

A high-performance modern web application built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling, referencing the preview system architecture from Emergent and incorporating core modules and copy from the original Thaibiazzini site.

## Stack & Highlights

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom editorial dark/bone theme (`--void`, `--bone`, `--ink`, `--chrome`), SVG noise grain overlay, and responsive layouts
- **Typography**: Archivo (variable width), Instrument Serif italic, JetBrains Mono
- **Animations**: Framer Motion with fluid easing (`[0.16, 1, 0.3, 1]`), 3D tilt physics, clip-path reveals, scroll progress, and smooth view transitions
- **Smooth Scroll**: Lenis smooth wheel scrolling with automatic route reset
- **Routing**: React Router with full client routing (`/`, `/method`, `/services`, `/work`, `/work/:slug`, `/about`, `/apply`, `/privacy`)
- **Modules**:
  - **Hero**: Slowed background video with founder portrait fallback, dynamic mouse-tracking 3D tilt, telemetry tags, and key stat callouts
  - **Trust Marquee**: Infinite smooth scrolling client logo bar (Goodfields, Table Manners, Ray White, Sean Bell, Fortem Media, Red Dust, Cali Press)
  - **The Warm Market Activation Method**: Interactive proof funnel pyramid and step-by-step commercial breakdown
  - **Prior Work & Case Studies**: Deep dive case studies for Red Dust (A$175k raised), Sean Bell (endurance mission), and Shiv Nair (local category authority)
  - **Brand Equity Valuation & Application Form**: 12-field comprehensive intake questionnaire with client-side validation, error handling, local storage fallback, and direct booking options
  - **Privacy Policy**: Data privacy, relationship respect, and business confidentiality statement

## Local Development

```bash
npm install
npm run dev
```

The dev server will start at `http://localhost:3000`.

## Production Build

```bash
npm run build
```

Outputs optimized production bundles to `dist/`.

To test the production build locally:

```bash
npm run preview
```

## Running Tests

```bash
npm test
```

## Legacy Archival

The previous Astro codebase has been safely preserved in `legacy/v1-astro/` for complete reference and auditability.
