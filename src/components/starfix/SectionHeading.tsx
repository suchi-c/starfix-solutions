import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  aside?: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, aside, className = "" }: Props) {
  return (
    <div
      className={`mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end ${className}`}
    >
      <div>
        {eyebrow ? (
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="max-w-2xl font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
          {title}
        </h2>
      </div>
      {aside ? (
        <div className="max-w-sm text-sm font-medium text-ink-muted md:text-right">{aside}</div>
      ) : null}
    </div>
  );
}
