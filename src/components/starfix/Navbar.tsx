import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { BRAND, NAV } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b-2 border-ink bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-extrabold uppercase tracking-tighter">
          {BRAND.short}
          <span className="text-brand">.</span>
        </Link>

        <div className="hidden gap-8 font-medium md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-brand [&.active]:text-brand"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/about"
            hash="contact"
            className="hidden bg-ink px-5 py-2 font-bold uppercase text-paper transition-colors hover:bg-brand sm:inline-flex"
          >
            Let's Talk
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center border-2 border-ink md:hidden"
          >
            <span className="font-display text-lg font-black">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t-2 border-ink bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-bold uppercase">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              to="/about"
              hash="contact"
              onClick={() => setOpen(false)}
              className="bg-ink px-5 py-3 text-center text-paper"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
