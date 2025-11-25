interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-sm text-slate-300">{description}</p>
      )}
    </div>
  );
}