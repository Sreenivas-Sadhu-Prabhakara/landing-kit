// ─────────────────────────────────────────────────────────────
// PER-PRODUCT CONFIG — each of the 5 sites customizes ONLY this file.
// Everything else (SEO head, sitemap, GA4, JSON-LD) reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  // Identity
  name: 'Landing Kit',
  organization: 'Sreenivas Sadhu',
  tagline: 'Launch a high-converting, SEO-perfect landing page in minutes.',

  // Hosting (GitHub Pages project site)
  domain: 'https://sreenivas-sadhu-prabhakara.github.io',
  base: '/landing-kit', // MUST match the repo name, e.g. '/llm-eval-trace'

  // SEO
  title: 'Landing Kit — SEO-Perfect SaaS Landing Pages in Minutes',
  description:
    'Landing Kit spins up a fast, SEO-optimized landing page with a waitlist and analytics baked in — validate any startup idea this afternoon, not next month.',
  keywords: [
    'SaaS landing page template',
    'micro SaaS launch kit',
    'waitlist landing page',
    'SEO landing page generator',
    'validate startup idea',
  ],
  ogImage: '/og.png', // 1200x630, lives in /public
  twitter: '', // e.g. '@handle' (optional)

  // Analytics — real GA4 Measurement ID goes here (or leave placeholder)
  ga4Id: 'G-XXXXXXXXXX',

  // Structured data
  jsonLdType: 'SoftwareApplication', // or 'WebApplication'
  appCategory: 'BusinessApplication',
  price: '0', // '0' => free; used in Offer schema
};

// Absolute canonical URL for the homepage (used in <head> + JSON-LD)
export const canonicalRoot = `${site.domain}${site.base}`;
