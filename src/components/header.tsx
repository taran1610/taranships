import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#interests', label: 'Interests' },
  { href: '#connect', label: 'Connect' },
];

export function Header() {
  return (
    <header className="mb-16">
      <nav className="text-muted mb-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-start gap-5">
        <Image
          src={site.avatar}
          alt={site.name}
          width={72}
          height={72}
          className="ring-border rounded-full ring-1"
          priority
        />
        <div>
          <h1 className="text-foreground font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="text-muted mt-2 text-sm">{site.tagline}</p>
          <p className="text-faint mt-1 text-sm">{site.location}</p>
        </div>
      </div>

      <p className="text-muted mt-8 max-w-xl text-base leading-relaxed">
        {site.bio}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <SocialLink href={site.links.github} label="GitHub" />
        <span className="text-faint">·</span>
        <SocialLink href={site.links.x} label="X" />
        {site.email ? (
          <>
            <span className="text-faint">·</span>
            <a
              href={`mailto:${site.email}`}
              className="text-muted decoration-border hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Email
            </a>
          </>
        ) : null}
      </div>

      <hr className="border-border mt-14" />
    </header>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted decoration-border hover:text-foreground underline underline-offset-4 transition-colors"
    >
      {label}
    </a>
  );
}
