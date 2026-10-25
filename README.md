# Vansh Gupta — Portfolio

Personal portfolio built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS v4**, organised with **atomic design**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript only
```

Needs Node.js 18.18 or newer (Node 20 recommended).

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, **Add New → Project**, import the repo. The defaults work: no settings to change.
3. Optional: add an environment variable `NEXT_PUBLIC_SITE_URL` with your live URL (e.g. `https://vansh.dev`) so link previews on LinkedIn/WhatsApp show the right image.

## Folder structure

```
src/
├── app/                         # Routes (App Router)
│   ├── layout.tsx               # Fonts, metadata, Navbar, Footer, BackToTop
│   ├── page.tsx                 # Home: only arranges organisms
│   ├── work/ferns-n-petals/     # Case study route
│   ├── not-found.tsx            # 404
│   └── globals.css              # Tailwind import, design tokens, keyframes, effects
│
├── components/
│   ├── atoms/                   # Smallest pieces, no dependencies on other components
│   │   ├── Button.tsx           # Link/button with primary + secondary variants
│   │   ├── IconButton.tsx       # Icon-only button (requires an accessible label)
│   │   ├── Icon.tsx             # Stroke icon set
│   │   ├── Tag.tsx              # Pills and tech labels
│   │   ├── SkillChip.tsx        # One skill (dashed = still learning)
│   │   ├── StatusDot.tsx        # Pulsing "live" dot
│   │   ├── Eyebrow.tsx          # Mono label above headings
│   │   ├── Heading.tsx          # h1/h2/h3 with fluid type scale
│   │   ├── Container.tsx        # Max width + gutters
│   │   ├── Card.tsx             # Surface with cursor spotlight + hover lift
│   │   └── Toast.tsx            # Bottom toast message
│   │
│   ├── molecules/               # Built only from atoms
│   │   ├── SectionHeader.tsx    # Eyebrow + Heading
│   │   ├── NavLink.tsx          # Desktop / mobile nav link
│   │   ├── RotatingWord.tsx     # Cycling hero word
│   │   ├── TerminalCard.tsx     # "now.log" typing terminal
│   │   ├── StatItem.tsx         # Number + label
│   │   ├── HighlightCard.tsx    # Card + metric + text
│   │   ├── WorkRow.tsx          # Text-only project row (NDA work)
│   │   ├── FreelanceCard.tsx    # Card + screenshot + role/timeline/tools
│   │   ├── JobTab.tsx           # One experience tab
│   │   ├── SkillGroup.tsx       # Icon + label + SkillChips
│   │   ├── SocialLinks.tsx      # GitHub / LinkedIn / resume Buttons
│   │   ├── CopyEmailButton.tsx  # Copies email, shows "Copied"
│   │   ├── AccentSwatches.tsx   # Visitor accent colour picker
│   │   ├── BackToTop.tsx        # Floating IconButton
│   │   ├── BarChart.tsx         # Before/after bars (case study)
│   │   ├── CaseFigure.tsx       # Screenshot + caption
│   │   ├── CaseSection.tsx      # Numbered case-study section
│   │   └── TakeawayCard.tsx     # One takeaway
│   │
│   └── organisms/               # Built from molecules + atoms: whole page sections
│       ├── Navbar.tsx           # Links, hamburger menu, logo easter egg, scroll progress
│       ├── Hero.tsx             # Spotlight background, greeting, rotating word, terminal
│       ├── StatsBar.tsx         # Count-up numbers
│       ├── TechMarquee.tsx      # Scrolling skills strip
│       ├── WorkSection.tsx      # Featured FNP card, highlights, Nextmantra rows
│       ├── FreelanceSection.tsx
│       ├── ExperienceSection.tsx# Keyboard-accessible tabs
│       ├── StackSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       ├── CaseStudyHeader.tsx
│       ├── Takeaways.tsx
│       └── NextStep.tsx
│
├── hooks/                       # useInView, useCountUp, useScrolledPast, usePrefersReducedMotion
├── providers/AccentProvider.tsx # Accent colour state → --accent CSS variable
└── lib/
    ├── data.ts                  # ALL copy and content lives here
    └── cn.ts                    # className joiner
```

### The rules

- **Atoms** never import other components (only `Icon` inside `Button`/`IconButton`, which is still an atom-level dependency).
- **Molecules** import atoms only.
- **Organisms** import molecules and atoms, and represent a full section.
- **Pages** (`app/`) only arrange organisms.
- **Content** is never hardcoded in components: edit `src/lib/data.ts`.

## Server vs client components

Pages and most sections are **server components**, so they ship no JavaScript. Only pieces that need the browser opt in with `"use client"`:

| Component | Why it's a client component |
| --- | --- |
| `Navbar` | Menu state, easter egg toast |
| `Hero` | Cursor spotlight |
| `StatsBar` | Count-up when scrolled into view |
| `ExperienceSection` | Tab state + arrow-key navigation |
| `Card` | Cursor spotlight on hover |
| `RotatingWord`, `CopyEmailButton`, `AccentSwatches`, `BackToTop` | Timers, clipboard, state, scroll |

## Animations

Defined as Tailwind theme animations in `globals.css` (`animate-rise`, `animate-word`, `animate-marquee`…). Scroll-driven effects (section reveals, reading progress, bar fills) use CSS `animation-timeline` and simply don't run in browsers without support. All motion turns off for visitors with **reduced motion** enabled. On touch screens, the hero spotlight roams on its own and cards get a light sweep instead of the cursor effects.

## Before you publish

Search `data.ts` for `[` to find placeholders:

- Cultural Concepts store platform: `[platform]`
- Backend skills you're learning: `[Express?]`, `[Database?]`

Also check the case study takeaways, tradeoff and "what I'd do differently" in `fnpCaseStudy` read the way you want.
