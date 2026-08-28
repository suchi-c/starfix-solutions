import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-structure.jpg";
import { BRAND, SERVICES_GLIMPSE } from "@/data/site";
import { BrutalLink } from "@/components/starfix/BrutalButton";
import { ContactPopup } from "@/components/starfix/ContactPopup";
import { Marquee } from "@/components/starfix/Marquee";
import { Reveal } from "@/components/starfix/Reveal";
import { SectionHeading } from "@/components/starfix/SectionHeading";
import { ServiceCard } from "@/components/starfix/ServiceCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starfix Media Solutions — Reach the Right Way" },
      {
        name: "description",
        content:
          "Starfix Media Solutions helps businesses build a powerful digital presence through marketing, content, websites, apps and Meta advertising.",
      },
      { property: "og:title", content: "Starfix Media Solutions — Reach the Right Way" },
      {
        property: "og:description",
        content:
          "Build your brand, reach your audience and grow the right way with creative, strategic and technology-driven digital solutions.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="mb-6 inline-block border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-brand">
                {BRAND.tagline}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mb-8 font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-7xl">
                Build Your Brand. Reach Your <span className="text-brand">Audience.</span> Grow the
                Right Way.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-ink-muted md:text-xl">
                Starfix Media Solutions helps businesses build a powerful digital presence through
                strategic marketing, creative content, website design, app development, social media
                management, and high-performing Meta advertising.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-4">
                <BrutalLink to="/about" hash="contact" size="lg">
                  Let's Grow Your Brand
                </BrutalLink>
                <BrutalLink to="/services" variant="outline" size="lg">
                  Explore Our Services
                </BrutalLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <img
              src={heroImage}
              alt="Bold architectural structure with sharp shadows and orange accents"
              width={1200}
              height={1200}
              className="w-full border-2 border-ink object-cover shadow-brutal-lg"
            />
          </Reveal>
        </div>
      </header>

      <Marquee
        items={[
          "Digital Marketing",
          "Social Media",
          "Meta Ads",
          "Websites",
          "Apps",
          "Content & Creative",
        ]}
      />

      {/* About glimpse */}
      <section className="border-b-2 border-ink bg-paper px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
                Who We Are
              </span>
              <h2 className="font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
                Your Digital <br />
                Growth Partner
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal delay={80}>
              <p className="text-lg text-ink-muted">
                At Starfix Media Solutions, we combine creativity, technology, and strategy to help
                businesses build stronger brands and connect with the right audience.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-ink-muted">
                We don't just create digital solutions. We help businesses build their online
                presence, communicate their value, reach more relevant people, and create
                opportunities for growth.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <BrutalLink to="/about" variant="ink" className="self-start">
                About Starfix
              </BrutalLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services glimpse */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Everything Your Brand <br />
              Needs to Grow Digitally
            </>
          }
          aside="From building your digital presence to reaching the right audience, we provide creative, strategic, and technology-driven solutions designed to support your business growth."
        />

        <div className="grid gap-0.5 border-2 border-ink bg-ink md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_GLIMPSE.map((service) => (
            <div key={service.id} className="bg-surface">
              <ServiceCard index={service.index} title={service.title} blurb={service.blurb} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <BrutalLink to="/services" size="lg">
            Explore All Services
          </BrutalLink>
        </div>
      </section>

      <ContactPopup />
    </>
  );
}
