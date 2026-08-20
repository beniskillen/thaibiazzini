# NARA Studio

Revenue-driven personal branding website for [NARA Studio](https://github.com/beniskillen/thaibiazzini).

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run check
npm test
npm run build
```

## Configuration

Copy `.env.example` to `.env` when needed:

- `PUBLIC_SITE_URL` — canonical origin for sitemap, robots and Open Graph tags
- `PUBLIC_APPLY_ENDPOINT` — optional application POST endpoint. Leave empty to keep the validated local success fallback
