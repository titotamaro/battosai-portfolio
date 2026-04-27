# PT Berlian Sistem Informasi — Design System

## Company Overview

**PT Berlian Sistem Informasi** is an Indonesian information technology company. The name translates to "Diamond Information System" — reflecting a positioning around clarity, value, and precision in IT solutions. "PT" (Perseroan Terbatas) denotes a limited liability company under Indonesian law.

The brand presents a professional, corporate identity aimed at enterprise and government IT services clients in Indonesia.

## Sources

The following assets were provided:
- `uploads/Original.png` — Primary logo (blue gradient icon + black text)
- `uploads/Font BIG - Black.png` — Flat-icon variant with black wordmark
- `uploads/Font BIG - White.png` — Flat-icon variant with white wordmark
- `uploads/All White.png` — All-white logo (for dark/colored backgrounds)
- `uploads/White - Berlian Sistem Informasi.png` — Icon-only white variant

No codebase, Figma file, or website URL was provided. This design system is derived entirely from the supplied logo assets.

---

## CONTENT FUNDAMENTALS

**Language:** Indonesian primary audience, but the brand name and product names are in English/Indonesian hybrid.

**Tone:** Professional, corporate, trustworthy. Formal register. Not casual or playful.

**Casing:** Logo wordmark is ALL CAPS. Headlines in designs should follow UPPERCASE or Title Case depending on hierarchy level.

**Pronouns:** Third-person corporate voice ("Berlian Sistem Informasi provides…") or second-person formal ("Kami siap melayani…" / "We are ready to serve…").

**Emoji:** Not used. The brand identity is formal and structured.

**Vibe:** Confident, enterprise-grade, structured. Clean and no-nonsense. Inspired by the diamond metaphor — sharp, precise, valuable.

**Copy examples (inferred):**
- "Solusi Teknologi Terpercaya" (Trusted Technology Solutions)
- "PT Berlian Sistem Informasi — Membangun Sistem untuk Masa Depan"
- "Your Trusted IT Partner"

---

## VISUAL FOUNDATIONS

### Colors
The brand palette is anchored in **deep navy-to-bright blue gradients**.

| Token | Value | Usage |
|---|---|---|
| `--color-primary-dark` | `#0d2461` | Deepest navy, icon shadow |
| `--color-primary` | `#1a56db` | Core brand blue |
| `--color-primary-mid` | `#1e7bc4` | Mid-range blue |
| `--color-primary-light` | `#3ba3e8` | Bright sky blue, highlights |
| `--color-neutral-900` | `#0f172a` | Text / near-black |
| `--color-neutral-100` | `#f8fafc` | Light background |
| `--color-white` | `#ffffff` | Pure white |

### Typography
The logo wordmark uses a very bold, wide-tracking sans-serif — consistent with **Barlow Condensed ExtraBold** or similar geometric bold condensed sans-serif. Headlines should feel strong and authoritative.

- **Display / Wordmark:** Bold condensed sans-serif, ALL CAPS, wide tracking
- **Body:** Regular sans-serif (e.g. Barlow, or similar); clean and legible
- **No serif, no script** — the brand is strictly sans-serif

**Google Fonts substitution (flagged):** Using **Barlow Condensed** (ExtraBold 800) for display/headlines as the closest match to the logo wordmark. Please supply actual font files if available.

### Logo Mark
The icon depicts a **stylized human figure** — a person in motion (arms extended, wave beneath) suggesting service, connectivity, and human-centered technology. The blue-to-navy gradient gives it depth and dimensionality.

### Backgrounds
- White or very light grey (`#f8fafc`) for content areas
- Deep navy (`#0d2461`) for hero/header areas using the full brand immersion
- The all-white logo variant is for use on blue/navy backgrounds

### Animation
- Inferred: subtle, professional fades and slides. No bouncy or playful motion.
- Easing: ease-in-out for transitions; no elastic/spring.
- Hover states: slight opacity reduction (0.85) or deepened blue tone

### Hover / Press States
- Buttons: darken background on hover (`--color-primary` → `--color-primary-dark`)
- Press: slight scale-down (0.97) + darker shade
- Links: underline on hover, no color change (maintain blue)

### Borders
- Minimal border usage; prefer clean separation via spacing
- Subtle borders: `1px solid #e2e8f0` for card edges

### Shadows
- Cards: `0 2px 12px rgba(13,36,97,0.10)` — soft blue-tinted shadow
- Elevated elements: `0 8px 32px rgba(13,36,97,0.16)`

### Corner Radii
- Buttons: `6px`
- Cards: `10px`
- Inputs: `6px`
- Pill badges: `999px`

### Cards
- White background, `10px` radius, soft blue-tinted shadow, optional `1px` light border
- Generous internal padding (`24px`)

### Imagery
- Inferred: professional photography (people in office/tech environments), cool-to-neutral color grading
- Imagery should support the human+technology narrative (consistent with the logo figure)
- No hand-drawn illustrations; no patterns/textures — clean and flat

### Iconography
See ICONOGRAPHY section below.

---

## ICONOGRAPHY

No icon set was provided in the source materials.

**Approach inferred from brand:**
- Clean, outlined or lightly filled icons; consistent stroke weight (~1.5–2px)
- No emoji
- Recommended CDN icon set: **Lucide Icons** — matches the brand's clean, professional, geometric style
- Usage: `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>`

**Logo assets copied to `assets/`:**
| File | Usage |
|---|---|
| `assets/logo-original.png` | Primary — light backgrounds, full color |
| `assets/logo-black-text.png` | Alternate flat-icon on light backgrounds |
| `assets/logo-white-text.png` | On dark/navy backgrounds |
| `assets/logo-all-white.png` | On colored/brand-blue backgrounds |
| `assets/logo-icon-white.png` | Icon-only, on colored backgrounds |

---

## FILES INDEX

```
README.md                         — This file
SKILL.md                          — Agent skill definition
colors_and_type.css               — CSS variables: colors, typography, spacing, shadows
assets/
  logo-original.png               — Primary full-color logo
  logo-black-text.png             — Flat icon + black wordmark
  logo-white-text.png             — Flat icon + white wordmark
  logo-all-white.png              — All-white logo
  logo-icon-white.png             — Icon-only white
preview/
  colors-brand.html               — Brand color swatches
  colors-neutral.html             — Neutral/semantic color swatches
  type-scale.html                 — Typography scale specimen
  type-wordmark.html              — Wordmark / display type
  spacing-tokens.html             — Spacing + radii tokens
  shadows-elevation.html          — Shadow / elevation system
  components-buttons.html         — Button component states
  components-forms.html           — Form input components
  components-cards.html           — Card components
  logos.html                      — Logo variants showcase
ui_kits/
  berlian/
    README.md                     — UI kit overview
    index.html                    — Interactive prototype (main app)
    Components.jsx                — Shared UI components
```
