import AWS from '@/components/technologies/AWS';
import Docker from '@/components/technologies/Docker';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Independent / Indie',
    position: 'AI/ML Engineer & Indie Hacker',
    location: 'Toronto, ON (Remote)',
    image: '/assets/avatar.png',
    description: [
      'Shipped two production iOS applications (Serenica and Uncravr) to the Apple App Store in early 2026, delivering privacy-first AI companions with mood tracking, guided journaling, and habit-breaking features',
      'Developed and open-sourced 8+ full-stack AI and fintech platforms from concept to live deployment, including real-time trading dashboards, product intelligence tools, and real-estate tokenization systems',
      'Architected Cortex Capital, an autonomous multi-agent AI hedge-fund swarm using LangGraph for trading decisions, portfolio optimization, market analysis, and real-time execution',
      'Built and deployed production-grade full-stack applications using Next.js, FastAPI, Supabase, PostgreSQL, Redis, and Docker while maintaining strict privacy-first architecture across all projects',
      'Actively build in public on X (@taranx0911), sharing technical deep-dives, product updates, and learnings with a growing audience of indie hackers and developers',
      'Leveraged hands-on futures trading and poker expertise in probability modeling, risk assessment, and high-stakes decision-making to enhance backtesting engines and habit tools',
    ],
    startDate: '2025',
    endDate: 'Present',
    website: 'https://github.com/taran1610',
    github: 'https://github.com/taran1610',
    x: 'https://x.com/taranx0911',
    technologies: [
      { name: 'Python', href: 'https://python.org/', icon: <Python /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'PostgreSQL', href: 'https://postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Docker', href: 'https://docker.com/', icon: <Docker /> },
      { name: 'Vercel', href: 'https://vercel.com/', icon: <Vercel /> },
      { name: 'AWS', href: 'https://aws.amazon.com/', icon: <AWS /> },
    ],
  },
];
