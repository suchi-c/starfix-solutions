import { useState, type FormEvent } from "react";
import { SERVICE_OPTIONS } from "@/data/site";
import { BrutalButton } from "@/components/starfix/BrutalButton";

const inputClass =
  "w-full border-2 border-ink bg-paper px-4 py-3 text-sm outline-none placeholder:text-ink-muted focus:border-brand";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  // Frontend only for now — wire this to a backend later.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-brand">
            Contact
          </span>
          <h2 className="font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
            Let's Build Something Great Together.
          </h2>
          <p className="mt-6 text-lg text-ink-muted">
            Have an idea? Looking to grow your brand? Need the right digital strategy?
          </p>
          <p className="mt-2 text-lg text-ink-muted">
            Let's talk about how Starfix Media Solutions can support your business.
          </p>

          <dl className="mt-10 space-y-4 border-t-2 border-ink pt-8 text-sm">
            <div className="flex gap-3">
              <dt className="w-28 font-bold uppercase tracking-widest">Email</dt>
              <dd className="text-ink-muted">hello@starfixmedia.com</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-28 font-bold uppercase tracking-widest">Phone</dt>
              <dd className="text-ink-muted">+91 00000 00000 (WhatsApp)</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-28 font-bold uppercase tracking-widest">Social</dt>
              <dd className="text-ink-muted">Instagram · Facebook · LinkedIn</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 border-2 border-ink bg-paper p-8 shadow-brutal sm:grid-cols-2"
          >
            <Field label="Full Name">
              <input required name="fullName" className={inputClass} placeholder="Your name" />
            </Field>
            <Field label="Business / Brand Name">
              <input name="business" className={inputClass} placeholder="Brand name" />
            </Field>
            <Field label="Email Address">
              <input
                required
                type="email"
                name="email"
                className={inputClass}
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Phone Number">
              <input name="phone" className={inputClass} placeholder="+91" />
            </Field>
            <Field label="Service Interested In" full>
              <select required name="service" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Tell Us About Your Project" full>
              <textarea
                name="message"
                rows={5}
                className={inputClass}
                placeholder="Goals, timeline, anything useful"
              />
            </Field>

            <div className="sm:col-span-2">
              <BrutalButton type="submit" size="lg">
                Start the Conversation
              </BrutalButton>
              {submitted ? (
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-brand">
                  Thanks — your details are captured on the frontend. Connect a backend to receive
                  them.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      {children}
    </label>
  );
}
