import { ReactNode } from 'react';

export function Section({
  title,
  children,
  id,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-muted mb-6 text-xs font-medium tracking-[0.2em] uppercase">
        {title}
      </h2>
      <div className="space-y-1">{children}</div>
    </section>
  );
}
