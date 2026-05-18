import ExpressJs from '@/components/technologies/ExpressJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Gloomberg',
    description:
      'Retail-friendly Bloomberg-style terminal with real-time dashboards, interactive charts, AI chat, technical indicators (RSI, MACD), and strategy backtesting. Full-stack system with PostgreSQL + Redis caching, informed by personal futures trading experience.',
    image: '/project/gloomberg.png',
    link: 'https://gloomberg-red.vercel.app',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'FastAPI', icon: <Python key="fastapi" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/taran1610/Gloomberg',
    live: 'https://gloomberg-red.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/gloomberg',
    isWorking: true,
  },
  {
    title: 'Compass',
    description:
      'LLM-driven system that analyzes user feedback and generates actionable product insights, PRDs, prioritized roadmaps, and interactive knowledge-base chat. RAG pipeline + Vercel AI SDK.',
    image: '/project/compass.png',
    link: 'https://compass-iota-tan.vercel.app',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'Supabase', icon: <PostgreSQL key="supabase" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/taran1610/compass',
    live: 'https://compass-iota-tan.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/compass',
    isWorking: true,
  },
  {
    title: 'MapleVault',
    description:
      'Real-estate tokenization (RWA) platform with marketing site, lead-generation forms, secure backend, validation, and rate limiting.',
    image: '/project/maplevault.png',
    link: 'https://maplevault.vercel.app',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="node" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'Supabase', icon: <PostgreSQL key="supabase" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/taran1610/maplevault',
    live: 'https://maplevault.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/maplevault',
    isWorking: true,
  },
  {
    title: 'Serenica',
    description:
      'Published privacy-first AI companion for mood tracking, guided journaling, and calm conversational emotional support (zero data collection). Shipped v1.0 (Jan 12, 2026) and v2.0 (Jan 27, 2026).',
    image: '/project/serenica.png',
    link: 'https://apps.apple.com/us/app/serenica-mood-tracker-ai-budy/id6757016872',
    technologies: [
      { name: 'Swift', icon: <ReactIcon key="swift" /> },
      { name: 'iOS', icon: <ReactIcon key="ios" /> },
    ],
    github: 'https://github.com/taran1610/serenica-waitlist',
    live: 'https://apps.apple.com/us/app/serenica-mood-tracker-ai-budy/id6757016872',
    details: true,
    projectDetailsPageSlug: '/projects/serenica',
    isWorking: true,
  },
  {
    title: 'Uncravr',
    description:
      'Craving-management tool with streaks, milestones, science-backed recovery timelines, and savings tracker. Perfect 5.0/5 App Store rating; privacy-first design.',
    image: '/project/uncravr.png',
    link: 'https://github.com/taran1610',
    technologies: [
      { name: 'Swift', icon: <ReactIcon key="swift" /> },
      { name: 'iOS', icon: <ReactIcon key="ios" /> },
    ],
    github: 'https://github.com/taran1610',
    live: 'https://github.com/taran1610',
    details: true,
    projectDetailsPageSlug: '/projects/uncravr',
    isWorking: true,
  },
  {
    title: 'Cortex Capital',
    description:
      'Architecting an autonomous multi-agent system for trading decisions, portfolio optimization, market analysis, and real-time execution. Toronto-based project targeting Y Combinator Summer 2026.',
    image: '/project/cortex-capital.png',
    link: 'https://github.com/taran1610/cortex-capital',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'LangGraph', icon: <Python key="langgraph" /> },
    ],
    github: 'https://github.com/taran1610/cortex-capital',
    live: 'https://github.com/taran1610/cortex-capital',
    details: true,
    projectDetailsPageSlug: '/projects/cortex-capital',
    isWorking: false,
  },
];
