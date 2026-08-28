import { useState } from "react";
import { PORTFOLIO_FILTERS, PROJECTS, type Project } from "@/data/site";
import { Reveal } from "@/components/starfix/Reveal";
import { SectionHeading } from "@/components/starfix/SectionHeading";

export function PortfolioSection() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const projects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="scroll-mt-24 border-y-2 border-ink bg-paper px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          aside="A collection of ideas, strategies, creative work, and digital experiences developed by Starfix Media Solutions. Items below are concept projects."
        />

        <div className="mb-12 flex flex-wrap gap-3">
          {PORTFOLIO_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                filter === item ? "bg-brand text-brand-foreground" : "bg-surface hover:bg-brand/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <article className="flex h-full flex-col border-2 border-ink bg-surface transition-all hover:-translate-y-1 hover:shadow-brutal">
                <div className="grid aspect-[4/3] place-items-center border-b-2 border-ink bg-ink">
                  <span className="px-6 text-center font-display text-2xl font-black uppercase leading-tight text-brand">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                    Concept Project
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight">
                    {project.client}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted">{project.description}</p>
                  <button
                    type="button"
                    onClick={() => setActive(project)}
                    className="mt-auto self-start border-2 border-ink px-4 py-2 pt-2 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
                  >
                    View Project
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-ink/60 p-4"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="my-8 w-full max-w-2xl border-2 border-ink bg-paper p-8 shadow-brutal-lg"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                  {active.category}
                </span>
                <h3 className="mt-2 font-display text-3xl font-black uppercase leading-[0.95]">
                  {active.client}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close case study"
                className="grid h-9 w-9 shrink-0 place-items-center border-2 border-ink font-black hover:bg-brand hover:text-brand-foreground"
              >
                ×
              </button>
            </div>

            <dl className="mt-8 space-y-6">
              {[
                ["The Challenge", active.challenge],
                ["Our Strategy", active.strategy],
                ["What We Created", active.created],
                ["The Outcome", active.outcome],
              ].map(([label, body]) => (
                <div key={label} className="border-l-2 border-brand pl-4">
                  <dt className="text-xs font-bold uppercase tracking-widest">{label}</dt>
                  <dd className="mt-1 text-ink-muted">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}
    </section>
  );
}
