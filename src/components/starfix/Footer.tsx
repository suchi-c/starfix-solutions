import { Link } from "@tanstack/react-router";
import { BRAND, SERVICES_GLIMPSE } from "@/data/site";

const SOCIALS = ["Instagram", "Facebook", "LinkedIn", "WhatsApp"];

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink px-6 py-20 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row">
        <div className="max-w-md">
          <div className="mb-3 font-display text-3xl font-black uppercase leading-none">
            {BRAND.name}
            <span className="text-brand">.</span>
          </div>
          <p className="mb-6 text-sm font-bold uppercase tracking-widest text-brand">
            {BRAND.tagline}
          </p>
          <p className="text-paper/50">{BRAND.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="mb-6 font-bold uppercase text-brand">Navigate</h4>
            <ul className="space-y-3 text-paper/70">
              <li>
                <Link to="/" className="hover:text-paper">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-paper">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-paper">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" hash="portfolio" className="hover:text-paper">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-paper">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" hash="contact" className="hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold uppercase text-brand">Services</h4>
            <ul className="space-y-3 text-paper/70">
              {SERVICES_GLIMPSE.map((service) => (
                <li key={service.id}>
                  <Link to="/services" hash={service.id} className="hover:text-paper">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold uppercase text-brand">Social</h4>
            <ul className="space-y-3 text-paper/70">
              {SOCIALS.map((social) => (
                <li key={social}>
                  <a href="#" className="hover:text-paper">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-paper/10 pt-8 text-[10px] font-medium uppercase tracking-widest text-paper/30 sm:flex-row sm:justify-between">
        <span>© 2026 {BRAND.name}. All Rights Reserved.</span>
        <span>{BRAND.tagline}</span>
      </div>
    </footer>
  );
}
