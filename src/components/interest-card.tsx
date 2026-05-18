export function InterestCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="-mx-3 rounded-lg px-3 py-4">
      <h3 className="text-foreground font-medium">{title}</h3>
      <p className="text-muted mt-1 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
