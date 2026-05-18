export const site = {
  name: 'Taranpreet Singh',
  handle: 'taran1610',
  location: 'Toronto, ON',
  tagline: 'AI/ML Engineer · FinTech · iOS',
  bio: 'AI/ML Engineer with experience building and shipping production iOS apps and full-stack AI/fintech platforms. Strong in Python, LLM systems, and real-time data applications. Built and launched 2 App Store apps and multiple AI-driven products.',
  email: 'taranpreets2004@gmail.com',
  links: {
    github: 'https://github.com/taran1610',
    x: 'https://x.com/taranx0911',
  },
  avatar: '/assets/avatar.png',
} as const;

export type Project = {
  slug: string;
  title: string;
  description: string;
  language: string;
  stars: number;
  featured?: boolean;
  status?: string;
  live?: string;
  liveLabel?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: 'gloomberg',
    title: 'Gloomberg',
    description:
      'Retail-friendly Bloomberg-style terminal with real-time dashboards, AI chat, technical indicators, and strategy backtesting. PostgreSQL + Redis.',
    language: 'Python · Next.js',
    stars: 3,
    featured: true,
    live: 'https://gloomberg-red.vercel.app',
    github: 'https://github.com/taran1610/Gloomberg',
  },
  {
    slug: 'compass',
    title: 'Compass',
    description:
      'LLM-driven product intelligence — user feedback analysis, PRDs, roadmaps, and knowledge-base chat. RAG + Vercel AI SDK.',
    language: 'TypeScript · Next.js',
    stars: 1,
    featured: true,
    live: 'https://compass-iota-tan.vercel.app',
    github: 'https://github.com/taran1610/compass',
  },
  {
    slug: 'maplevault',
    title: 'MapleVault',
    description:
      'Real-estate tokenization (RWA) platform with marketing site, lead forms, secure backend, and rate limiting.',
    language: 'Node.js · Express',
    stars: 0,
    featured: true,
    live: 'https://maplevault.vercel.app',
    github: 'https://github.com/taran1610/maplevault',
  },
  {
    slug: 'serenica',
    title: 'Serenica',
    description:
      'Privacy-first AI mood tracker and mental wellness app on iOS. Shipped v1.0 and v2.0 in Jan 2026.',
    language: 'Swift · iOS',
    stars: 0,
    featured: true,
    live: 'https://apps.apple.com/us/app/serenica-mood-tracker-ai-budy/id6757016872',
    liveLabel: 'App Store',
    github: 'https://github.com/taran1610/serenica-waitlist',
  },
  {
    slug: 'uncravr',
    title: 'Uncravr',
    description:
      'Nicotine craving and habit tracker with streaks, milestones, and savings tracker. 5.0/5 App Store rating.',
    language: 'Swift · iOS',
    stars: 0,
    featured: true,
    github: 'https://github.com/taran1610',
  },
  {
    slug: 'cortex-capital',
    title: 'Cortex Capital',
    description:
      'Autonomous multi-agent hedge-fund swarm for trading, portfolio optimization, and execution. Targeting YC Summer 2026.',
    language: 'Python · LangGraph',
    stars: 1,
    featured: true,
    status: 'In progress',
    github: 'https://github.com/taran1610/cortex-capital',
  },
];

export const interests = [
  {
    title: 'Markets & FinTech',
    description:
      'Real-time trading dashboards, backtesting, and democratizing institutional-grade tooling.',
  },
  {
    title: 'AI-native products',
    description:
      'LLM systems, multi-agent swarms, RAG pipelines, and copilots for finance and product intelligence.',
  },
  {
    title: 'iOS & privacy-first apps',
    description:
      'Production App Store apps for mental wellness and habit-breaking with zero data collection.',
  },
  {
    title: 'Startups & building in public',
    description:
      'Zero-to-one shipping from Toronto — technical deep-dives and product updates on X.',
  },
  {
    title: 'Real estate & tokenization',
    description: 'RWA platforms and on-chain property exposure.',
  },
];

export const stack = [
  'Python',
  'TypeScript',
  'Swift',
  'Next.js',
  'FastAPI',
  'LangGraph',
  'PostgreSQL',
  'Redis',
  'Supabase',
  'Docker',
  'AWS',
];
