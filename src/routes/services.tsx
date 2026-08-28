import { createFileRoute } from "@tanstack/react-router";
import { COMBO_PLANS, SERVICE_DETAILS } from "@/data/site";
import { BrutalLink } from "@/components/starfix/BrutalButton";
import { Reveal } from "@/components/starfix/Reveal";
import { SectionHeading } from "@/components/starfix/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Digital Solutions Designed for Growth | Starfix" },
      {
        name: "description",
        content:
          "Digital marketing, social media management, Meta Ads, website design, app development and content solutions from Starfix Media Solutions.",
      },
      { property: "og:title", content: "Digital Solutions Designed for Growth — Starfix" },
      {
        property: "og:description",
        content:
          "Creative content, powerful digital experiences and targeted advertising built to help your brand build, connect and grow.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <header className="border-b-2 border-ink px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h1 className="max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
              Digital Solutions Designed for <span className="text-brand">Growth</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-lg text-ink-muted">
              From creative content to powerful digital experiences and targeted advertising, we
              provide solutions designed to help your brand build, connect, and grow.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="space-y-10">
          {SERVICE_DETAILS.map((service, i) => (
            <Reveal key={service.id} delay={i * 40}>
              <article
                id={service.id}
                className="scroll-mt-24 border-2 border-ink bg-paper transition-shadow hover:shadow-brutal"
              >
                <div className="grid gap-0 lg:grid-cols-12">
                  <div className="border-b-2 border-ink p-8 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-10">
                    <div className="mb-8 grid h-12 w-12 place-items-center bg-brand font-bold text-brand-foreground">
                      {service.index}
                    </div>
                    <h2 className="font-display text-3xl font-black uppercase leading-[0.95]">
                      {service.title}
                    </h2>
                    <p className="mt-4 font-bold uppercase tracking-tight text-brand">
                      {service.subheading}
                    </p>
                    <p className="mt-4 text-ink-muted">{service.blurb}</p>
                    <BrutalLink to="/about" hash="contact" className="mt-8">
                      {service.cta}
                    </BrutalLink>
                  </div>
                  <div className="p-8 lg:col-span-7 lg:p-10">
                    <span className="mb-6 block text-xs font-bold uppercase tracking-widest text-ink-muted">
                      What's included
                    </span>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="h-2 w-2 shrink-0 bg-brand" />
                          <span className="text-sm font-bold uppercase">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Combo plans */}
      <section className="border-y-2 border-ink bg-paper px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Combo Plans"
            title={
              <>
                Packages Built <br />
                Around Your Stage
              </>
            }
            aside="Final package names, inclusions and pricing are coming soon."
          />
          <div className="grid border-2 border-ink md:grid-cols-2 lg:grid-cols-4">
            {COMBO_PLANS.map((plan, i) => (
              <div
                key={plan}
                className={`border-ink p-8 ${i < COMBO_PLANS.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2" : ""}`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand">
                  Plan 0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight">
                  {plan}
                </h3>
                <p className="mt-4 text-sm text-ink-muted">
                  Inclusions to be announced. Talk to us and we'll map the right mix for your goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customized services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="border-2 border-ink bg-brand p-10 text-brand-foreground md:p-16">
          <h2 className="max-w-2xl font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
            Need Something Customized?
          </h2>
          <p className="mt-6 max-w-2xl text-lg">
            Every business has different goals, audiences, challenges, and growth requirements. If
            our standard service plans don't exactly fit your needs, we'll work with you to create a
            customized digital solution.
          </p>
          <BrutalLink to="/about" hash="contact" variant="outline" size="lg" className="mt-10">
            Let's Build Your Plan
          </BrutalLink>
        </div>
      </section>
    </>
  );
}
