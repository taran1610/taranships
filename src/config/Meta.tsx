import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export const siteConfig = {
  name: heroConfig.name,
  title: `${heroConfig.name} — Portfolio`,
  description:
    'AI/ML Engineer building autonomous trading systems, privacy-first iOS apps, and full-stack AI/fintech products from Toronto.',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@taranx0911',
    github: 'taran1610',
    email: 'taranpreets2004@gmail.com',
  },
  keywords: [
    'portfolio',
    'AI',
    'ML',
    'fintech',
    'iOS',
    'trading',
    'LangGraph',
    'Next.js',
    'Toronto',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: `${heroConfig.name} — ${heroConfig.title}`,
    description: about.description,
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },
  '/resume': {
    title: 'Resume — Taranpreet Singh',
    description:
      'AI/ML Engineer resume: iOS apps, full-stack AI/fintech platforms, LangGraph, and production systems from Toronto.',
    twitterCard: 'summary_large_image',
  },
  '/contact': {
    title: 'Contact — Get in Touch',
    description:
      "Get in touch for collaborations on fintech, AI, and startup ideas. I'd love to hear from you!",
    twitterCard: 'summary',
  },
  '/work-experience': {
    title: 'Experience — Professional Journey',
    description:
      'AI/ML engineering, indie hacking, and shipping production iOS and full-stack AI products.',
    twitterCard: 'summary_large_image',
  },
  '/projects': {
    title: 'Projects — Portfolio',
    description:
      'Gloomberg, Compass, MapleVault, Serenica, Uncravr, Cortex Capital — AI, fintech, and iOS projects.',
    twitterCard: 'summary_large_image',
  },
  '/gears': {
    title: 'Gears — Setup & Tools',
    description:
      'Tech stack, dev tools, and trading/poker tools I use to build and ship products.',
    twitterCard: 'summary_large_image',
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', ') ?? siteConfig.keywords.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
