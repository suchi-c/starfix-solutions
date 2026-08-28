type Props = {
  index: string;
  title: string;
  blurb: string;
};

export function ServiceCard({ index, title, blurb }: Props) {
  return (
    <div className="group h-full p-8 transition-colors hover:bg-brand/5 lg:p-10">
      <div className="mb-8 grid h-12 w-12 place-items-center bg-ink font-bold text-paper transition-colors group-hover:bg-brand">
        {index}
      </div>
      <h3 className="mb-4 font-display text-2xl font-bold uppercase leading-tight">{title}</h3>
      <p className="leading-relaxed text-ink-muted">{blurb}</p>
    </div>
  );
}
