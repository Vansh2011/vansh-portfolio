/**
 * All portfolio content lives here, so components stay presentational.
 * Edit copy in this file rather than inside components.
 */

import type { IconName } from "@/components/atoms/Icon";

export const site = {
  name: "Vansh Gupta",
  title: "Vansh Gupta — Frontend & Aspiring Full Stack Developer",
  description:
    "Frontend engineer in Bengaluru working in React, Next.js and TypeScript, growing into full stack. Built for a 10M+ user storefront, lending ops tools and live client sites.",
  email: "gupta20vansh@gmail.com",
  github: "https://github.com/Vansh2011",
  linkedin: "https://www.linkedin.com/in/vansh-gupta-aa1ba6212/",
  resume: "/Vansh_Gupta_Resume.pdf",
  location: "Bengaluru",
  currentRole: "SDE @ Nextmantra · Bengaluru",
};

export const navLinks = [
  { label: "Work", href: "/#work", index: "01" },
  { label: "Freelance", href: "/#freelance", index: "02" },
  { label: "Experience", href: "/#experience", index: "03" },
  { label: "Contact", href: "/#contact", index: "05" },
];

export const easterEggs = [
  "hi there, curious one :)",
  "you clicked the logo again. respect.",
  "fun fact: this site has no emojis… mostly ;)",
  "ok ok, go hire me now :D",
];

export const hero = {
  greeting: "hey, I'm Vansh",
  lead: "I build frontends for",
  words: ["10M+ shoppers.", "design studios.", "internal ops tools.", "growing brands."],
  intro:
    "Frontend engineer on the path to full stack. I work in React, Next.js and TypeScript, and I'm building out my backend skills with Node.js. Right now I'm rebuilding a lending operations dashboard from scratch and moving legacy apps from Node 14 to Node 20. Before that, I shipped UI for an e-commerce platform serving 10M+ users.",
};

export type TerminalLine =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; muted?: string; accent?: string }
  | { kind: "check"; text: string };

export const terminalLines: TerminalLine[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "vansh — frontend → full stack" },
  { kind: "cmd", text: "cat current.txt" },
  { kind: "out", text: "→ LAP dashboard revamp", muted: "(Next.js)" },
  { kind: "out", text: "→ node 14 → 20 migration" },
  { kind: "check", text: "dashboard-01" },
  { kind: "check", text: "dashboard-02" },
  { kind: "check", text: "dashboard-03" },
  { kind: "cmd", text: "status" },
  { kind: "out", text: "open to work", accent: ":)" },
  { kind: "cmd", text: "coffee --level" },
  { kind: "out", text: "low", muted: "¯\\_(ツ)_/¯" },
];

export type Stat = { from: number; to: number; prefix?: string; suffix?: string; label: string };

export const stats: Stat[] = [
  { from: 0, to: 10, suffix: "M+", label: "users on platforms I've built for" },
  { from: 45, to: 87, prefix: "45% → ", suffix: "%", label: "test coverage I took it to" },
  { from: 0, to: 4, label: "dashboards moved to Node 20" },
  { from: 0, to: 20, prefix: "−", suffix: "%", label: "initial JS bundle size" },
];

export const techMarquee = [
  "React", "Next.js", "TypeScript", "JavaScript", "Redux", "Zustand", "TanStack Query",
  "GraphQL", "Tailwind CSS", "Material UI", "Jest", "React Testing Library", "Vite",
  "Webpack", "Node.js", "Vercel", "Figma",
];

export const featured = {
  href: "/work/ferns-n-petals",
  badge: "Featured",
  category: "E-commerce · 10M+ users",
  title: "Faster, better-tested storefront for Ferns N Petals",
  summary:
    "I built product listing, search filters and a 3-step checkout for one of India's biggest gifting platforms. I cut the initial JS bundle by 20%, made First Contentful Paint 0.8s faster, and raised test coverage from 45% to 87%.",
  stack: ["React", "Next.js", "Redux", "Webpack", "Jest + RTL"],
  image: {
    src: "/images/fnp-listing.jpg",
    width: 1600,
    height: 729,
    alt: "Ferns N Petals Diwali gifts listing page with price filter, category tiles and product grid",
  },
};

export const highlights = [
  {
    metric: "−0.8s",
    title: "Performance",
    body: "Route-based code splitting, lazy loading and asset tuning in Webpack improved Lighthouse scores on high-traffic product pages.",
  },
  {
    metric: "80+ tests",
    title: "Testing",
    body: "Jest and React Testing Library unit and integration tests took coverage to 87% and cut production bug reports by about 30%.",
  },
  {
    metric: "50+ PRs",
    title: "Code quality",
    body: "Reviewed pull requests for WCAG 2.1 accessibility and cross-browser support across Chrome, Firefox, Safari and Edge.",
  },
];

export const currentWork = {
  title: "Now at Nextmantra",
  note: "Internal client tools, so no screenshots",
  rows: [
    {
      title: "Lending operations dashboard rebuild",
      body: "Rebuilding a Loan Against Property dashboard from scratch as a Next.js + TypeScript app on Node 20, including document verification for KYC and property documents.",
    },
    {
      title: "Node 14 → 20 migration",
      body: "Moved 3 more internal dashboards to Node 20, fixing deprecated packages and breaking changes with no production disruption.",
    },
    {
      title: "Commission clawback system",
      body: "A role-based dashboard for finance teams. The backend sends the allowed actions for each record, so the UI has no hardcoded role or status logic.",
    },
  ],
};

export type FreelanceProject = {
  name: string;
  url: string;
  domain: string;
  category: string;
  status: { label: string; tone: "live" | "soon" };
  description: string;
  role: string;
  timeline: string;
  tools: string[];
  image: { src: string; width: number; height: number; alt: string; position?: string };
};

export const freelance: FreelanceProject[] = [
  {
    name: "IndecSpace",
    url: "https://www.indecspace.com/",
    domain: "indecspace.com",
    category: "Interior design studio · Delhi NCR",
    status: { label: "Live", tone: "live" },
    description:
      "A Next.js site for an interiors and turnkey construction studio, with a design gallery of about 25 room categories, project case studies, a page for each of 6 cities, and a lead form with WhatsApp contact. It also has a custom-coded admin portal, with no third-party CMS, for adding services, projects, gallery listings and new product description pages, plus SEO: editing page titles and meta descriptions, managing the sitemap, and the Google Search Console connection.",
    role: "Built from scratch, including the frontend architecture",
    timeline: "1 week for UI and screens, plus 2 days for Vercel deployment",
    tools: ["Next.js", "Tailwind CSS", "Claude Code", "Figma AI", "Vercel"],
    image: {
      src: "/images/indecspace.jpg",
      width: 1600,
      height: 729,
      alt: "IndecSpace home page: a styled living room with the headline Interiors you'll love",
      position: "center top",
    },
  },
  {
    name: "Cultural Concepts",
    url: "https://www.culturalconcepts.in/",
    domain: "culturalconcepts.in",
    category: 'Gifting brand · "Gifts with a story"',
    status: { label: "Launching soon", tone: "soon" },
    description:
      "A React + Vite single-page site for a heritage gifting brand, with a live launch countdown, a Diwali collection preview and a downloadable catalogue. The full online store comes next on [platform].",
    role: "Designed and built from scratch",
    timeline: "4 days, single-page app",
    tools: ["React", "Vite", "Tailwind CSS", "Claude Code", "Figma AI"],
    image: {
      src: "/images/culturalconcepts.jpg",
      width: 1600,
      height: 689,
      alt: "Cultural Concepts pre-launch page with heritage gifting headline and launch countdown",
      position: "left top",
    },
  },
];

export type Job = {
  company: string;
  title: string;
  dates: string;
  short: string;
  place: string;
  points: string[];
};

export const jobs: Job[] = [
  {
    company: "Nextmantra",
    title: "Software Development Engineer",
    dates: "Mar 2026 — now",
    short: "SDE · 2026 — now",
    place: "Bengaluru",
    points: [
      "Rebuilding a Loan Against Property dashboard from scratch as a Next.js + TypeScript app on Node 20.",
      "Building document verification workflows for KYC and property documents: Aadhaar, PAN, property papers, bills.",
      "Migrated 3 more internal dashboards from Node 14 to Node 20 with no production disruption.",
      "Built a role-based Partner Commission Clawback dashboard and a Udyam verification flow on Decentro APIs.",
    ],
  },
  {
    company: "Ferns N Petals",
    title: "Associate Software Engineer",
    dates: "Feb 2025 — Mar 2026",
    short: "ASE · 2025 — 2026",
    place: "Gurugram",
    points: [
      "Built and maintained 25+ React and Next.js components for a storefront serving 10M+ users.",
      "Raised Jest test coverage from 45% to 87%, cutting production bug reports by about 30%.",
      "Improved Core Web Vitals with route-based code splitting and lazy loading.",
      "Reviewed 50+ pull requests for WCAG 2.1 accessibility and cross-browser support.",
    ],
  },
  {
    company: "Ferns N Petals",
    title: "Frontend Developer Intern",
    dates: "Jul — Aug 2024",
    short: "Intern · 2024",
    place: "Gurugram",
    points: [
      "Shipped 10+ reusable React components straight to production.",
      "Fixed 10–20 UI bugs and responsive layout issues with CSS Grid and Flexbox.",
      "Integrated REST APIs with Redux on a live platform.",
    ],
  },
];

export type SkillGroupData = { label: string; icon: IconName; skills: string[]; learning?: boolean };

export const skillGroups: SkillGroupData[] = [
  { label: "core", icon: "code", skills: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { label: "state & data", icon: "database", skills: ["Redux", "Zustand", "TanStack Query", "GraphQL"] },
  { label: "styling & testing", icon: "checkCircle", skills: ["Tailwind", "SCSS", "Material UI", "Jest", "RTL"] },
  { label: "backend", icon: "server", skills: ["Node.js", "[Express?]", "[Database?]"], learning: true },
];

export const contact = {
  heading: "Open to frontend and full stack roles, and freelance builds.",
};

/* ------------------------------------------------------------------
   Case study: Ferns N Petals
------------------------------------------------------------------- */
export const fnpCaseStudy = {
  eyebrow: "case study · ferns n petals · 2025–26",
  title: "Making a 10M+ user gifting storefront faster and safer to ship",
  intro:
    "I worked on the shopping flow of one of India's largest gifting platforms, from product listing through checkout, then focused on performance and test coverage so the team could ship with confidence.",
  meta: [
    { label: "role", value: "Associate SWE" },
    { label: "scale", value: "10M+ users" },
    { label: "stack", value: "React · Next.js · Tailwind" },
    { label: "live site", value: "fnp.com ↗", href: "https://www.fnp.com/" },
  ],
  heroImage: {
    src: "/images/fnp-listing.jpg",
    width: 1600,
    height: 729,
    alt: "Ferns N Petals Diwali gifts listing page with price filter, category tiles and product grid",
    caption: "Product listing with price filter and category tiles",
  },
  productImage: {
    src: "/images/fnp-product.jpg",
    width: 1600,
    height: 729,
    alt: "Ferns N Petals product page with image gallery, price, delivery location and delivery date picker",
    caption: "Product page with delivery location and date selection",
  },
  built:
    "I built 20+ modular React components for product listing, search filters and a 3-step checkout. They connect to 10+ REST and GraphQL endpoints, with Redux managing state across listing and checkout.",
  performance: {
    body: "On high-traffic product pages, I split code by route, deferred modules that weren't needed on first load, and tuned how assets were bundled in Webpack.",
    bars: [
      { label: "before", value: 100, display: "100%" },
      { label: "after", value: 80, display: "80%", highlight: true },
    ],
    note: "First Contentful Paint improved by 0.8 seconds.",
  },
  testing: {
    body: "I wrote 80+ unit and integration tests with Jest and React Testing Library. Production bug reports dropped by about 30%, and the CI pipeline became more reliable.",
    bars: [
      { label: "before", value: 45, display: "45%" },
      { label: "after", value: 87, display: "87%", highlight: true },
    ],
  },
  quality:
    "I reviewed 50+ pull requests, checking WCAG 2.1 accessibility and making sure pages worked in Chrome, Firefox, Safari and Edge.",
  takeaways: [
    {
      title: "React vs Next.js, side by side",
      body: "I worked on two parts of the platform: one built in plain React with SCSS, and a revamp built in Next.js with Tailwind. Seeing both up close taught me the real difference between client-side rendering (CSR) and server-side rendering (SSR), and how the Next.js App Router organises pages, layouts and data loading.",
    },
    {
      title: "How businesses read their users",
      body: "I learned how web analytics works in practice, with tools like Google Analytics and CleverTap, and how the business uses that event data to understand customer trends and make decisions.",
    },
    {
      title: "Batching, by building it",
      body: "I built an in-house analytics tool that queued events in localStorage and sent them in batches every 10 seconds instead of one request per event. That's where the idea of batching really clicked for me.",
    },
    {
      title: "Shipping at scale",
      body: "Working at this scale taught me to handle several tasks and projects at once and still meet deadlines without delays on my end. I also learned how a larger company's hierarchy works: who decides what, and how work moves through reviews and approvals.",
    },
  ],
  tradeoff: {
    title: "A tradeoff I made",
    body: "Batching analytics every 10 seconds meant far fewer network requests and less load on the page, but data arrived up to 10 seconds late, and events still sitting in the queue could be lost if a user closed the tab before the next send. For trend analysis, that small delay and occasional gap was an acceptable price for a lighter page.",
  },
  differently: {
    title: "What I'd do differently",
    points: [
      "Send any queued events when the page is hidden or closed, using navigator.sendBeacon, so nothing is lost when a user leaves mid-batch.",
      "Cap the queue size and move off localStorage (which is synchronous and size-limited) to IndexedDB if event volume grew.",
      "On the Next.js revamp, decide earlier which components truly need to run in the browser, and keep the rest as server components to ship less JavaScript.",
    ],
  },
};
