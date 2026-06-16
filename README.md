# Zara AI Training & Automation Website

A polished one-page website for Zara's AI training and automation services, positioning the business around practical AI adoption, workflow automation, and team enablement.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- npm

## Local Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality Checks

Run the TypeScript check:

```bash
npm run check
```

Build for production:

```bash
npm run build
```

## Cloudflare Pages Deployment

Use Cloudflare Pages with the following settings:

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Output directory: `out`
- Node.js version: 20 or newer

The site is configured as a static export because it does not require server-side rendering, API routes, or runtime environment variables.
