import { SimplePage } from '@/components/simple-page';
import { site } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: site.bio,
};

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact"
      description="Get in touch for collaborations on fintech, AI, and startup ideas."
    >
      <ul className="text-muted space-y-3 text-sm">
        <li>
          <span className="text-foreground font-medium">Location:</span>{' '}
          {site.location}
        </li>
        <li>
          <span className="text-foreground font-medium">Email:</span>{' '}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground decoration-border hover:text-accent underline underline-offset-4"
          >
            {site.email}
          </a>
        </li>
        <li>
          <a
            href={site.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-border hover:text-accent underline underline-offset-4"
          >
            X (@taranx0911) →
          </a>
        </li>
        <li>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground decoration-border hover:text-accent underline underline-offset-4"
          >
            GitHub (@{site.handle}) →
          </a>
        </li>
      </ul>
    </SimplePage>
  );
}
