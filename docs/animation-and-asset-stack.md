# Animation and Asset Stack

## Recommended Animation Framework

Use GSAP as the animation framework for this project.

The reference site is a custom WordPress theme using Poppins, Swup page transitions, and GSAP libraries including ScrollTrigger, SplitText and MorphSVG. The current project is a static HTML page, so the best fit is to add GSAP directly now and avoid a full application rebuild until content management becomes necessary.

## Current Implementation

- `ty-landing.html` uses Poppins, a cursive Nara mark, and the reference-inspired palette: black `#1d1d1b`, soft yellow `#f2efa3`, off-white `#eeeeee`, muted grey-green, and white.
- GSAP powers the loading transition, split-word hero reveal, scroll reveals, parallax video layers, marquees, hover states, counters, magnetic buttons and the animated full-site cursor.
- The page still works without GSAP or for visitors who prefer reduced motion.
- The hero and editorial modules now use local video assets from `assets/table-manners/`, and the portrait lives at `assets/nara-portrait.jpg`.

## Upgrade Path

Stay static while the site is a landing page. Move to Astro or Next.js only when you need reusable pages, CMS-driven case studies, routing, preview environments or a larger editorial workflow.

If the site becomes portfolio-heavy, Astro + GSAP is the leanest next framework because it keeps pages fast and lets GSAP own the motion layer. Choose Next.js only if you need logged-in areas, server actions, richer application features or a larger React component system.

## Asset Hosting

Do not store video files in a normal database.

Use object storage or a video platform for the binary media:

- Mux or Cloudflare Stream for public reels, case films, adaptive streaming, thumbnails and analytics.
- Cloudflare R2 or Amazon S3 for original exports, backup video files, images, PDFs and brand assets.
- Cloudinary for images if you want automatic crops, responsive variants and transformations.

## Databases Needed

For the next version, use one small relational database for metadata, not for the media files themselves.

Recommended options:

- Supabase Postgres for project metadata, asset URLs, tags, metrics, testimonials and enquiries.
- Cloudflare D1 if the site is hosted on Cloudflare and you want a lightweight database close to the site runtime.

Suggested tables:

- `projects`: title, slug, summary, category, hero asset, published state and sort order.
- `assets`: project id, provider, public URL, thumbnail URL, media type, alt text, duration and credits.
- `metrics`: project id, label, value and display order.
- `leads`: name, email, company, message, source page and created date.
