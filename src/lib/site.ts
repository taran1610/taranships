export const site = {
  name: "Taranpreet Singh",
  handle: "taran1610",
  xHandle: "taranx0911",
  location: "Toronto, Canada",
  role: "AI/ML Engineer · FinTech · iOS",
  headline: "I ship products people use.",
  tagline:
    "I ship production iOS apps and full-stack AI / fintech platforms. Python, LLM systems, and real-time data — built fast, shipped publicly.",
  bio: "AI/ML Engineer building production iOS apps and full-stack AI/fintech platforms. Strong in Python, LLM systems, multi-agent design, and real-time data applications.",
  availability: "Open to collaborate · 2026",
  links: {
    github: "https://github.com/taran1610",
    x: "https://x.com/taranx0911",
    email: "taranpreets2004@gmail.com",
    resume: "/Taran_resume.pdf",
  },
  avatar: "https://avatars.githubusercontent.com/u/144640144?v=4",
} as const;

export const stats = [
  { value: "2", label: "App Store Apps" },
  { value: "10+", label: "AI Products" },
  { value: "YC S26", label: "Targeting" },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  live?: string;
  github?: string;
  appStore?: string;
  tags: string[];
  status?: string;
  featured?: boolean;
  stars?: number;
  gradient: [string, string];
};

export const projects: Project[] = [
  {
    slug: "gloomberg",
    title: "Gloomberg",
    subtitle: "Bloomberg-style terminal for retail traders",
    description:
      "Retail-friendly Bloomberg-style terminal. Real-time dashboards, AI chat, technical indicators, and strategy backtesting — built on PostgreSQL + Redis.",
    live: "https://gloomberg-red.vercel.app",
    github: "https://github.com/taran1610/Gloomberg",
    tags: ["Python", "Next.js", "PostgreSQL", "Redis"],
    stars: 3,
    gradient: ["#cdd9e5", "#e3d4c2"],
  },
  {
    slug: "cortex-capital",
    title: "Cortex Capital",
    subtitle: "Autonomous multi-agent hedge-fund swarm",
    description:
      "Autonomous multi-agent hedge-fund swarm for trading, portfolio optimization, and execution. Targeting YC Summer 2026.",
    live: "https://cortex-capital-two.vercel.app",
    github: "https://github.com/taran1610/cortex-capital",
    tags: ["Python", "LangGraph", "Agents", "YC S26"],
    status: "In progress",
    featured: true,
    stars: 1,
    gradient: ["#f6c89f", "#f59e69"],
  },
  {
    slug: "earningswarm",
    title: "EarningSwarm",
    subtitle: "Multi-agent document intelligence for funds",
    description:
      "SaaS workspace where 1k–100k+ agents debate filings, transcripts, and memos to stress-test narratives before sizing risk.",
    live: "https://earningswarm.vercel.app",
    github: "https://github.com/taran1610/earningswarm",
    tags: ["Python", "Multi-Agent", "FinTech"],
    featured: true,
    gradient: ["#d4c4e8", "#c9a8df"],
  },
  {
    slug: "clausely",
    title: "Clausely",
    subtitle: "Collaborative AI for Canadian law firms",
    description:
      "Contract review, AI drafting, and jurisdiction-aware research for Ontario, BC, Alberta, and Federal practice. Lawyer-in-the-loop.",
    live: "https://clausely-eight.vercel.app",
    github: "https://github.com/taran1610/lexio",
    tags: ["TypeScript", "Legal", "Claude"],
    featured: true,
    gradient: ["#c8e0d2", "#a8cdb6"],
  },
  {
    slug: "compass",
    title: "Compass",
    subtitle: "AI product intelligence platform",
    description:
      "LLM-driven product intelligence — user feedback analysis, PRDs, roadmaps, and knowledge-base chat. RAG pipelines + Vercel AI SDK.",
    live: "https://compass-iota-tan.vercel.app",
    github: "https://github.com/taran1610/compass",
    tags: ["TypeScript", "Next.js", "RAG"],
    stars: 1,
    gradient: ["#e3d8c5", "#d4c2a3"],
  },
  {
    slug: "maplevault",
    title: "MapleVault",
    subtitle: "Tokenized Toronto real estate on Polymesh",
    description:
      "Real-estate tokenization (RWA) platform — marketing site, lead capture forms, secure backend, and aggressive rate limiting.",
    live: "https://maplevault.vercel.app",
    github: "https://github.com/taran1610/maplevault",
    tags: ["Node.js", "Express", "RWA"],
    gradient: ["#f4d6c6", "#e8b89c"],
  },
  {
    slug: "serenica",
    title: "Serenica",
    subtitle: "Privacy-first AI mood tracker on iOS",
    description:
      "Privacy-first AI mood tracker and mental wellness app on iOS. Shipped v1.0 and v2.0 in Jan 2026.",
    appStore:
      "https://apps.apple.com/ca/app/serenica-mood-tracker-ai-budy/id6757016872",
    github: "https://github.com/taran1610/serenica-waitlist",
    tags: ["Swift", "iOS", "AI"],
    gradient: ["#dbe5c9", "#c2d1a8"],
  },
  {
    slug: "uncravr",
    title: "Uncravr",
    subtitle: "Nicotine craving & habit tracker on iOS",
    description:
      "Nicotine craving and habit tracker with streaks, milestones, and savings calculator. 5.0★ App Store rating.",
    appStore:
      "https://apps.apple.com/ca/app/uncravr-quit-nicotine-craving/id6757340358",
    tags: ["Swift", "iOS"],
    gradient: ["#e8c8d0", "#d8a6b3"],
  },
  {
    slug: "agencydesk",
    title: "AgencyDesk AI",
    subtitle: "AI back office for insurance agencies",
    description:
      "Reads ACORDs, loss runs, and dec pages. Summarizes client files, prepares CRM updates, and flags missing forms before a human approves.",
    live: "https://agencydesk.ai",
    github: "https://github.com/taran1610/agencydeskai",
    tags: ["TypeScript", "RAG", "Compliance"],
    gradient: ["#cdd6e2", "#a8b8cf"],
  },
  {
    slug: "custos",
    title: "Custos",
    subtitle: "Agent financial control plane",
    description:
      "Policies, approvals, simulated payments, and MCP tools that let autonomous agents run invoice and payment workflows under guardrails.",
    live: "https://custospay.vercel.app",
    github: "https://github.com/taran1610/custos",
    tags: ["TypeScript", "MCP", "Agents"],
    gradient: ["#e0d8c4", "#cfc2a3"],
  },
  {
    slug: "pr-guard",
    title: "PR Guard",
    subtitle: "AI pull request reviews",
    description:
      "GitHub App that reads diffs and repo context, then posts a senior-engineer-style risk review on every PR.",
    live: "https://pr-guard-eta.vercel.app",
    github: "https://github.com/taran1610/pr-guard",
    tags: ["TypeScript", "DevTools"],
    gradient: ["#d2dbe5", "#b3c1d2"],
  },
  {
    slug: "propertyops",
    title: "PropertyOps AI",
    subtitle: "AI operations team for property managers",
    description:
      "Automates tenant communications, work-order triage, and lease renewal workflows for small property managers.",
    live: "https://propertyopsai.vercel.app",
    tags: ["AI", "PropTech"],
    status: "In progress",
    featured: true,
    gradient: ["#e6d4c2", "#d2b89e"],
  },
  {
    slug: "alexspark",
    title: "AlexSpark",
    subtitle: "Citation-grounded AI search",
    description:
      "AI search that prioritizes verifiable answers — every claim links back to a source.",
    live: "https://sparkage.vercel.app",
    github: "https://github.com/taran1610/alexgotit",
    tags: ["TypeScript", "AI Search"],
    gradient: ["#dfd0e0", "#c5acc7"],
  },
];

export const obsessions = [
  {
    title: "Markets & FinTech",
    description:
      "Real-time trading dashboards, backtesting engines, and democratizing institutional-grade tooling.",
  },
  {
    title: "AI-native products",
    description:
      "LLM systems, multi-agent swarms, RAG pipelines, and copilots for finance and product intelligence.",
    active: true,
  },
  {
    title: "iOS & privacy-first",
    description:
      "Production App Store apps for mental wellness and habit-breaking with zero data collection.",
  },
  {
    title: "Building in public",
    description:
      "Zero-to-one shipping from Toronto — technical deep-dives and product updates on X.",
  },
  {
    title: "RWA & tokenization",
    description:
      "Real-estate tokenization platforms and on-chain property exposure for retail.",
  },
  {
    title: "Open collaboration",
    description:
      "Co-founding bets on fintech, AI tooling, and ambitious zero-to-one product ideas.",
  },
];

export const toolbox = {
  rowA: [
    "Tailwind",
    "Python",
    "TypeScript",
    "Swift",
    "Next.js",
    "PostgreSQL",
    "LangGraph",
  ],
  rowB: [
    "AI SDK",
    "React",
    "AWS",
    "Docker",
    "Supabase",
    "Redis",
    "FastAPI",
    "Vercel",
  ],
};
