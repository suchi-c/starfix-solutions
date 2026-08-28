import { createFileRoute } from "@tanstack/react-router";
import platformImage from "@/assets/platform-preview.jpg";
import { APPROACH, BRAND, WHY_STARFIX } from "@/data/site";
import { ContactSection } from "@/components/starfix/ContactSection";
import { GrowthTimeline } from "@/components/starfix/GrowthTimeline";
import { PortfolioSection } from "@/components/starfix/PortfolioSection";
import { Reveal } from "@/components/starfix/Reveal";
import { SectionHeading } from "@/components/starfix/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Starfix Media Solutions | Digital Growth Partner" },
      {
        name: "description",
        content:
          "Our story, mission, approach, five-step growth process, concept portfolio and contact details — Starfix Media Solutions.",
      },
      { property: "og:title", content: "Helping Brands Find Their Place in the Digital World" },
      {
        property: "og:description",
        content:
          "Starfix Media Solutions is a digital growth and creative solutions partner for brands that want to build, connect and grow.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <header className="border-b-2 border-ink px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h1 className="max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
              Helping Brands Find Their Place in the <span className="text-brand">Digital World</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-lg text-ink-muted">
              Starfix Media Solutions is a digital growth and creative solutions partner helping
              businesses build their online presence, communicate their value, and connect with the
              right audience.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Our story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
                Our Story
              </span>
              <h2 className="font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
                Why Starfix Exists
              </h2>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-brand">
                {BRAND.tagline}
              </p>
            </Reveal>
          </div>
          <div className="space-y-6 text-lg text-ink-muted lg:col-span-7">
            <Reveal delay={80}>
              <p>
                Starfix Media Solutions was created with a simple belief: every business deserves the
                opportunity to reach the right audience.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                In today's digital world, having a good product or service is not always enough.
                Brands need a strong online presence, clear communication, creative content, and the
                right strategy to stand out. That's where we come in.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                At Starfix Media Solutions, we combine creativity, technology, and digital strategy
                to help businesses build their brand, improve their online presence, and create
                meaningful connections with their audience.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                Whether you are a startup taking your first steps or an established business looking
                to grow digitally, we aim to provide the right solutions for your journey.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y-2 border-ink bg-paper px-6 py-24">
        <div className="mx-auto grid max-w-7xl border-2 border-ink md:grid-cols-2">
          <div className="border-b-2 border-ink p-10 md:border-b-0 md:border-r-2 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Our Mission
            </span>
            <p className="mt-6 font-display text-2xl font-bold uppercase leading-tight md:text-3xl">
              To help businesses grow through creative, strategic, and effective digital solutions.
            </p>
          </div>
          <div className="p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand">
              Our Vision
            </span>
            <p className="mt-6 font-display text-2xl font-bold uppercase leading-tight md:text-3xl">
              To become a trusted digital growth partner for brands that want to build, connect, and
              grow.
            </p>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Our Approach"
          title={
            <>
              How We Think <br />
              About Growth
            </>
          }
        />
        <div className="grid gap-8 md:grid-cols-2">
          {APPROACH.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="h-full border-2 border-ink bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-brutal">
                <span className="font-display text-sm font-black uppercase tracking-widest text-brand">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="border-y-2 border-ink bg-ink px-6 py-24 text-paper">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
            How We Work
          </span>
          <h2 className="mb-16 font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
            Your Growth Journey Starts Here
          </h2>
          <GrowthTimeline />
        </div>
      </section>

      {/* Why choose Starfix */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
                Why Choose Us
              </span>
              <h2 className="font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
                Why Starfix Media Solutions?
              </h2>
              <img
                src={platformImage}
                alt="Dashboard and mobile app interfaces created by Starfix"
                width={1600}
                height={900}
                loading="lazy"
                className="mt-10 w-full border-2 border-ink shadow-brutal-soft"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t-2 border-ink">
              {WHY_STARFIX.map((item, i) => (
                <Reveal key={item.index} delay={i * 50}>
                  <li className="flex gap-6 border-b-2 border-ink py-7">
                    <span className="font-display text-3xl font-black text-brand">
                      {item.index}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-ink-muted">{item.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PortfolioSection />
      <ContactSection />
    </>
  );
}
