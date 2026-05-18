import Github from '@/components/svgs/Github';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const skillComponents = {
  TypeScript,
  ReactIcon,
  NextJs,
  NodeJs,
  PostgreSQL,
  Python,
};

export const heroConfig = {
  name: 'Taranpreet Singh',
  title: 'AI/ML Engineer · FinTech · iOS',
  location: 'Toronto, ON',
  avatar: '/assets/avatar.png',
  tagline:
    'AI/ML Engineer with experience building and shipping production iOS apps and full-stack AI/fintech platforms — 2 App Store apps, 8+ live products, building in public from Toronto.',
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],
  description: {
    template:
      'I build at the intersection of <b>markets</b>, <b>AI</b>, and <b>software</b> — from Bloomberg-style terminals to hedge-fund swarms and privacy-first wellness apps on iOS.',
  },
  buttons: [
    {
      variant: 'default' as const,
      text: 'View Projects',
      href: '/projects',
      icon: 'CV',
    },
    {
      variant: 'outline' as const,
      text: 'Resume',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'outline' as const,
      text: 'Follow on X',
      href: 'https://x.com/taranx0911',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/taranx0911',
    icon: <X />,
  },
  {
    name: 'Github',
    href: 'https://github.com/taran1610',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:taranpreets2004@gmail.com',
    icon: <Mail />,
  },
];
