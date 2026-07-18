# J Bitar Glass — Website (Edition 03, fresh visual system)

Static site: HTML/CSS/JS, no build step, no dependencies. Deploys straight to GitHub Pages.

```
jbitar-glass-website/
├── index.html            Home — hero, house-index accordion, whole-home band, security band, reviews, quote form
├── whole-home.html        Flagship whole-home package page
├── security-glass.html    Dedicated dark page for the security-glass line
├── README.md
└── assets/
    ├── css/style.css
    ├── js/script.js
    └── img/favicon.svg
```

## What changed from the previous version

- **New visual system:** white canvas, ink black, one signal-blue accent (#0A5FFF), light "liquid glass" used only in the nav bar and a couple of signature cards — not everywhere.
- **The shower calculator is gone.** It added a fixed set of numbers but no real content depth. In its place, the homepage now has an **interactive services accordion** ("The house index") — six services, each expandable into a full section: overview, what's included, specs, and a real FAQ. This is far better for SEO: all that text is in the HTML (search engines index content inside closed `<details>` elements), it answers real search queries, and each service now has enough unique text to eventually become its own indexed page.
- **Structured data (schema.org) added** in `index.html`: a `LocalBusiness` block (address, phone, rating, service list) and a `FAQPage` block built from the accordion's questions. This gives Google a direct, structured read of the business and its FAQs — a real, non-cosmetic SEO improvement, independent of anything visual.

## Deploying to GitHub Pages

1. Create a repository on GitHub.
2. **Add file → Upload files**, drag in everything inside this folder (keep the `assets/` folder alongside the HTML files).
3. **Settings → Pages → Build and deployment → Deploy from a branch** → `main` / `/(root)` → Save.
4. Live in a minute or two at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Before publishing, update these placeholders

- **Contact form:** `index.html` → the `<form id="quoteForm">` has `action="https://formspree.io/f/YOUR_FORM_ID"`. Create a free form at formspree.io and paste the real endpoint in. Until then, submitting shows a reminder and visitors can still call/email directly.
- **Email address:** `info@jbitarglass.com` is a placeholder — search and replace with the real one.
- **`https://jbitarglass.com/...` in the JSON-LD `image` field** — update once the real domain is live.

## Extending the SEO structure further

The accordion covers rich content in one page. The natural next step — not built yet, flag if you want it — is breaking each service (`showers`, `railings`, `mirrors-tops`, `windows-igu`) into its **own page** with its own URL, the way `whole-home.html` and `security-glass.html` already work. That lets each page rank for its own specific search terms instead of sharing one homepage.
