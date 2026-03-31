interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h1 id={id} className="text-3xl font-bold text-primary sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
