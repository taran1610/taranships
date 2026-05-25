import { site } from "@/lib/site";

export function SayHello() {
  return (
    <section
      id="connect"
      className="relative scroll-mt-24 overflow-hidden bg-ink px-6 py-24 text-background sm:px-12 sm:py-32"
    >
      <div
        className="blob -left-32 top-0 h-[420px] w-[420px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(232,93,44,0.5), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="blob right-0 bottom-0 h-[360px] w-[360px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(246,200,159,0.4), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          + Let&apos;s build something
        </p>

        <h2 className="mt-6 font-display text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-background sm:text-[7.5rem]">
          Say <span className="text-accent">hello.</span>
        </h2>

        <p className="mt-8 max-w-lg text-base leading-relaxed text-background/70 sm:text-lg">
          Open to collaborations on fintech, AI, and ambitious zero-to-one
          ideas from Toronto. References and live demos available on request.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          <ContactCard
            href={site.links.github}
            icon={<GithubIcon />}
            name="GitHub"
            handle={`@${site.handle}`}
          />
          <ContactCard
            href={site.links.x}
            icon={<XIcon />}
            name="X / Twitter"
            handle={`@${site.xHandle}`}
          />
          <ContactCard
            href={`mailto:${site.links.email}`}
            icon={<MailIcon />}
            name="Email"
            handle={site.links.email}
            external={false}
          />
          <ContactCard
            href={site.links.resume}
            icon={<FileIcon />}
            name="Résumé"
            handle={`PDF · ${new Date().getFullYear()}`}
            accent
          />
        </ul>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  name,
  handle,
  accent = false,
  external = true,
}: {
  href: string;
  icon: React.ReactNode;
  name: string;
  handle: string;
  accent?: boolean;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`group flex items-center justify-between gap-4 rounded-2xl border p-6 transition-all hover:-translate-y-0.5 ${
          accent
            ? "border-accent/40 bg-accent/[0.06] hover:bg-accent/[0.12]"
            : "border-background/10 bg-background/[0.04] hover:border-background/30 hover:bg-background/[0.08]"
        }`}
      >
        <div className="flex items-center gap-4">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              accent ? "bg-accent/20 text-accent" : "bg-background/10 text-background/80"
            }`}
          >
            {icon}
          </span>
          <div>
            <p
              className={`font-display text-xl font-bold tracking-tight ${
                accent ? "text-accent" : "text-background"
              }`}
            >
              {name}
            </p>
            <p className="mt-0.5 font-mono text-xs text-background/50">
              {handle}
            </p>
          </div>
        </div>
        <span
          aria-hidden
          className={`text-xl transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            accent ? "text-accent" : "text-background/60"
          }`}
        >
          ↗
        </span>
      </a>
    </li>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.03c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39s1.98.13 2.9.39c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.81l-5.34-6.99L4.76 22H1.5l8.03-9.17L1 2h6.91l4.83 6.39zm-1.19 18h1.84L7.07 4H5.1z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  );
}
