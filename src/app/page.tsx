import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { InterestCard } from '@/components/interest-card';
import { ProjectLink } from '@/components/project-link';
import { Section } from '@/components/section';
import { interests, projects, site, stack } from '@/lib/site';

const featured = projects.filter((p) => p.featured);
const other = projects.filter((p) => !p.featured);

export default function Home() {
  return (
    <>
      <Header />

      <main className="space-y-20">
        <Section title="Projects" id="projects">
          {featured.map((project) => (
            <ProjectLink key={project.slug} project={project} />
          ))}
          {other.length > 0 ? (
            <div className="pt-4">
              <p className="text-faint mb-2 px-3 text-xs">More</p>
              {other.map((project) => (
                <ProjectLink key={project.slug} project={project} />
              ))}
            </div>
          ) : null}
        </Section>

        <Section title="Interests" id="interests">
          {interests.map((item) => (
            <InterestCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </Section>

        <Section title="Stack" id="stack">
          <div className="flex flex-wrap gap-2 px-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border-border bg-surface text-muted rounded-full border px-3 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Connect" id="connect">
          <div className="text-muted -mx-3 space-y-4 px-3 text-sm">
            <p>
              Open to collaborations on fintech, AI, and startup ideas from
              Toronto. References and live demos available upon request.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-border hover:text-accent underline underline-offset-4 transition-colors"
              >
                GitHub →
              </a>
              <a
                href={site.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground decoration-border hover:text-accent underline underline-offset-4 transition-colors"
              >
                X (@taranx0911) →
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-foreground decoration-border hover:text-accent underline underline-offset-4 transition-colors"
              >
                Email →
              </a>
              <a
                href="/resume"
                className="text-foreground decoration-border hover:text-accent underline underline-offset-4 transition-colors"
              >
                Resume →
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
