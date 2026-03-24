# Project Guidelines – Website Reconstruction (Elementor → Node.js, Multilingual)

## 🎯 Goal

You are rebuilding an existing website originally created with:
- WordPress
- Elementor Pro

The new target is:
- Clean HTML, CSS, and JavaScript
- Node.js project structure
- Deployable on Vercel via GitHub

The website is multilingual (e.g. EN, NL, DE).

Your job is to:
→ Recreate the design as accurately as possible  
→ Keep everything simple, clean, and maintainable  
→ Avoid all unnecessary complexity  

---

## 🧠 Core Principle

This is NOT a creative task.

- Do NOT redesign
- Do NOT improve UX
- Do NOT add new features
- Do NOT change layout decisions

Your job is:
→ Match the existing design based on screenshots  
→ Translate Elementor structure into clean code  

---

## 📸 Input Per Page

For each page you will receive:

- Screenshots (**PRIMARY SOURCE OF TRUTH**)
- HTML template files (see below)
- Notes about functionality
- SEO input (keyword, title, meta)
- Content per language (EN / NL / DE)

Follow screenshots strictly.

---

## 🧩 HTML Template (IMPORTANT CONTEXT)

The original website is based on a commercial template that exists in:

- A clean HTML version (no WordPress/Elementor)
- A WordPress + Elementor version (current site)

We have:
→ Used the template as a base  
→ Modified and personalized many parts  
→ Not all template pages are used  

---

### How to Use the Template

The HTML template is:

→ A **clean structural reference**  
→ A way to avoid Elementor/WordPress complexity  

Use it to:
- Understand layout patterns
- Reuse clean sections where applicable
- Avoid rebuilding common structures

---

### Important Constraints

- The template is NOT the final design
- The live website (screenshots) is the source of truth
- Many sections have been modified
- Some template pages (e.g. blog) are NOT used

---

### Priority Order (CRITICAL)

When building a page:

1. Screenshots → FINAL TRUTH  
2. HTML template → CLEAN REFERENCE  
3. Ignore WordPress/Elementor implementation  

---

### Goal

Use the template to:
→ Speed up development  
→ Keep code clean  

But ALWAYS:
→ Match the screenshots exactly  

---

## 🔁 Elementor Awareness

The current site uses Elementor.

You should:
- Recognize Elementor patterns (sections, columns, widgets)
- Translate them into simple HTML/CSS

Examples:
- Sections → `<section>`
- Columns → flexbox/grid
- Buttons → `<a>` or `<button>`
- Sliders → simple JS (only if specified)

---

## ⚙️ Technical Stack

- Node.js (minimal)
- No frameworks (React, Vue, etc.)
- No build tools unless explicitly requested
- Must work on Vercel

---

## 📁 Project Structure

Use:

/project-root
  /public
    /images
    /css
    /js
  /views
    index-en.html
    index-nl.html
    index-de.html
    [other pages per language]
  server.js
  package.json

---

## 🚀 Server

- Use a minimal Express server
- Serve static files from `/public`
- Serve pages from `/views`
- Keep it extremely simple

---

## 🧱 HTML Structure

- Use semantic HTML
- Keep structure flat and readable
- Avoid unnecessary wrappers
- Avoid deep nesting

---

## 🎨 Styling

- Use clean CSS (no frameworks)
- Prefer:
  - flexbox
  - simple grid
- Match spacing visually
- Keep styles consistent across pages

---

## 🧩 Functionality

ONLY implement functionality if explicitly specified.

Examples:
- Slider → simple vanilla JS
- Menu toggle → minimal JS
- Sticky header → CSS/JS

If not specified:
→ Keep static

---

## 🔌 External Scripts

- If a script is provided (e.g. Sirvoy):
  - Include it exactly as given
  - Do NOT modify it
  - Place it correctly

---

## 🖼️ Images

- All images are provided locally in `/public/images`
- Images are large (1500–2500px) and not optimized yet

Rules:
- Use images exactly as provided
- Do NOT rename images
- Do NOT resize or optimize images
- Do NOT invent filenames

- Always include descriptive `alt` text
- Use simple `<img>` tags

---

## 🌍 Multilingual Support

The website is multilingual (EN, NL, DE).

### Content Handling

- All text content is provided per language
- Do NOT generate translations
- Do NOT fetch or extract text from WordPress
- Do NOT guess missing content

---

### Structure

- Each language has its own HTML file

Example:
- index-en.html
- index-nl.html
- index-de.html

---

### Rules

- Layout and structure must be identical across languages
- Only text content changes
- Keep everything consistent

---

### SEO per Language

Each language version MUST include:

- Correct `<title>`
- Correct `<meta description>`
- Correct `<html lang="">` attribute
- Proper keyword usage

---

## 🔍 SEO (Yoast-Inspired)

Each page includes SEO input.

You MUST:

- Add `<title>`
- Add `<meta name="description">`
- Use ONE `<h1>` per page
- Use proper heading structure (`h1 → h2 → h3`)
- Include primary keyword in:
  - Title
  - H1
  - First paragraph

Also:
- Use semantic HTML
- Add alt text to images
- Keep text natural and readable

Avoid:
- Keyword stuffing

---

## 📄 Page Workflow

For each page:

1. Analyze screenshot
2. Identify layout (Elementor-style thinking)
3. Build HTML
4. Apply CSS
5. Add images
6. Insert language-specific content
7. Apply SEO
8. Add functionality (if specified)

---

## 🔍 Output Rules

- Always return COMPLETE working code
- Provide full files when needed
- Code must run immediately

---

## 🚫 What to Avoid

- No Elementor
- No WordPress code
- No frameworks
- No Tailwind
- No unnecessary animations
- No overengineering
- No invented assets
- No guessed translations

---

## 🧪 Self-Check

Before responding:

- Does this match the screenshot?
- Is this the simplest solution?
- Did I add anything not requested?
- Are languages handled correctly?
- Does it run without setup?

If not → simplify

---

## 💬 Communication Style

- Be concise
- Focus on usable output
- Do not overexplain