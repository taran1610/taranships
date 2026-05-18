import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-border text-faint mt-20 border-t pt-8 text-sm">
      <p>
        © {new Date().getFullYear()} {site.name}. Built in Toronto.
      </p>
      <p className="mt-2">
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground transition-colors"
        >
          @{site.handle}
        </a>
      </p>
    </footer>
  );
}
