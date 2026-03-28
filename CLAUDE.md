# Project Guidelines – Villa Bajano Website

## 🎯 Project

Villa Bajano is a static multilingual holiday villa website for a property on Curaçao.

- **Live URL**: paulos1375.github.io/Bajano/
- **Domain (future)**: villabajano.com
- **Hosting**: GitHub Pages (repo: paulos1375/Bajano)
- **Languages**: NL (primary), EN, ES

---

## ⚙️ Technical Stack

- Static HTML, CSS, vanilla JS — no frameworks, no build tools
- Bootstrap 5 grid (layout only)
- Swiper.js for sliders
- Font Awesome icons
- Google Fonts: Lato, Domine, Dancing Script

---

## 📁 Project Structure

```
/project-root
  /images               ← all site images (large, unoptimized)
  /css
    style.css           ← template base styles (do not edit)
    responsive.css      ← template responsive styles (do not edit)
    bajano.css          ← custom overrides (edit here, loaded last)
  /js
  /plugin
  /nl
    index.html
    /tarieven/index.html
    /boeken/index.html
    /locatie/index.html
    /interieur/index.html
    /tuin/index.html
    /gallery/index.html
    /contact/index.html
  /en
    index.html
    [same pages as nl]
  /es
    index.html
    [same pages as nl]
  index.html            ← language detection redirect to /Bajano/nl
```

---

## 🚀 Hosting Rules

- All pages use `<base href="/Bajano/">` in `<head>`
- All asset and internal link paths must be **relative** (no leading `/`)
- jQuery must NOT have `defer` attribute — it breaks the mobile menu
- CSS load order: `bootstrap.min.css` → `style.css` → `responsive.css` → `bajano.css`

---

## 🎨 CSS Architecture

- `style.css` and `responsive.css` are template files — do not modify
- All customisations go in `bajano.css`, which loads last
- Use `!important` only when needed to override template styles
- Mobile breakpoints that matter:
  - `≤991px` — Bootstrap lg columns stack (col-lg-* becomes full width)
  - `≤767px` — mobile overrides in bajano.css

---

## 🖼️ Images

- Images live in `/images/`
- Do NOT rename, resize, or optimize images
- Do NOT invent filenames
- Always add descriptive `alt` text

---

## 🌍 Multilingual Rules

- Languages: **NL, EN, ES**
- Layout and structure must be identical across all three languages
- Only text content changes between languages
- Do NOT generate or guess translations — content is always provided

---

## 🔍 SEO Requirements

Every page must include:

- `<title>` and `<meta name="description">`
- `<html lang="">` — `nl`, `en`, or `es`
- `<meta name="robots" content="index, follow">`
- Canonical: `<link rel="canonical" href="https://www.villabajano.com/[lang]/[page]">`
- hreflang tags for all 3 language variants + `x-default`
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags
- ONE `<h1>` per page, proper heading hierarchy (h1 → h2 → h3)
- Primary keyword in title, h1, and first paragraph
- JSON-LD `LodgingBusiness` schema on home pages

---

## 🧩 Functionality

Only implement what is explicitly requested.

- Sliders: Swiper.js (already included)
- Mobile menu: handled by existing template JS (custom.js)
- Booking widget: Sirvoy embed — include exactly as provided, do not modify

---

## 🚫 What to Avoid

- No WordPress or Elementor code
- No React, Vue, or any JS framework
- No Tailwind or CSS frameworks beyond Bootstrap
- No unnecessary animations
- No overengineering
- No invented content or translations
- No editing `style.css` or `responsive.css`

---

## 🧪 Self-Check

Before responding:

- Are paths relative (no leading `/`)?
- Is `<base href="/Bajano/">` present?
- Are all 3 language files updated?
- Does the CSS override go in `bajano.css`?
- Did I add anything not requested?

---

## 💬 Communication Style

- Be concise
- Focus on usable output
- Do not overexplain
