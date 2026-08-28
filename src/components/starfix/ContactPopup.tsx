import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

/** Home-page contact CTA popup. Appears once per session after a short delay. */
export function ContactPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("starfix-cta-seen") === "1") return;
    const timer = window.setTimeout(() => setOpen(true), 9000);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("starfix-cta-seen", "1");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 p-4 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="starfix-cta-title"
        className="reveal-shown w-full max-w-lg border-2 border-ink bg-paper p-8 shadow-brutal-lg"
      >
        <div className="flex items-start justify-between gap-6">
          <h2
            id="starfix-cta-title"
            className="font-display text-3xl font-black uppercase leading-[0.95]"
          >
            Ready to Grow Your Brand?
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center border-2 border-ink font-black hover:bg-brand hover:text-brand-foreground"
          >
            ×
          </button>
        </div>
        <p className="mt-5 text-ink-muted">
          Have an idea, a business to grow, or a digital project in mind?
        </p>
        <p className="mt-2 text-ink-muted">
          Let's understand your goals and find the right solution for your brand.
        </p>
        <Link
          to="/about"
          hash="contact"
          onClick={close}
          className="mt-8 inline-flex border-2 border-ink bg-brand px-8 py-4 font-bold uppercase text-brand-foreground shadow-brutal transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Let's Talk
        </Link>
      </div>
    </div>
  );
}
