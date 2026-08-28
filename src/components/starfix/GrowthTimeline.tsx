import { STEPS } from "@/data/site";

export function GrowthTimeline() {
  return (
    <div>
      {/* Desktop: horizontal timeline */}
      <div className="relative hidden md:grid md:grid-cols-5">
        <div className="absolute left-0 right-0 top-[7px] h-0.5 bg-paper/20" />
        {STEPS.map((step) => (
          <div key={step.index} className="relative pr-6">
            <span className="block h-4 w-4 border-2 border-paper bg-brand" />
            <span className="mt-6 block font-display text-sm font-bold uppercase tracking-widest text-brand">
              Step {step.index}
            </span>
            <h3 className="mt-2 font-display text-xl font-bold uppercase">{step.title}</h3>
            <p className="mt-2 text-sm text-paper/60">{step.body}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="space-y-8 md:hidden">
        {STEPS.map((step) => (
          <div key={step.index} className="border-l-2 border-brand pl-5">
            <span className="font-display text-sm font-bold uppercase tracking-widest text-brand">
              Step {step.index}
            </span>
            <h3 className="mt-1 font-display text-xl font-bold uppercase">{step.title}</h3>
            <p className="mt-2 text-sm text-paper/60">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
