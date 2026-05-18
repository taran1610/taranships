import { Project } from '@/lib/site';

function ProjectAction({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted decoration-border hover:text-accent underline underline-offset-4 transition-colors"
    >
      {label}
    </a>
  );
}

export function ProjectLink({ project }: { project: Project }) {
  const showLive = Boolean(project.live);
  const showGithub = Boolean(project.github);
  const liveLabel = project.liveLabel ?? 'Live';

  return (
    <div className="group hover:bg-surface -mx-3 rounded-lg px-3 py-4 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-foreground font-medium">
            {project.title}
            {project.status ? (
              <span className="text-muted ml-2 text-xs font-normal">
                · {project.status}
              </span>
            ) : null}
          </h3>
          <p className="text-muted mt-1 text-sm leading-relaxed">
            {project.description}
          </p>
          <p className="text-faint mt-2 text-xs">
            {project.language}
            {project.stars > 0 ? ` · ★ ${project.stars}` : ''}
          </p>
          {(showLive || showGithub) && (
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              {showLive ? (
                <ProjectAction href={project.live!} label={liveLabel} />
              ) : null}
              {showLive && showGithub ? (
                <span className="text-faint" aria-hidden>
                  ·
                </span>
              ) : null}
              {showGithub ? (
                <ProjectAction href={project.github!} label="GitHub" />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
