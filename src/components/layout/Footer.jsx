import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { company } from '../../data/company';
import { navLinks } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-matte text-silver" role="contentinfo">
      <div className="container-premium grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-offwhite">{company.name}</p>
          <p className="mt-2 text-sm text-gold">{company.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-silver/70">
            Dealership-level European automotive service for discerning owners who expect precision
            without compromise.
          </p>
        </div>

        <div>
          <h2 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Hours
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {company.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-silver/70">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 text-gold" aria-hidden />
              <span>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </span>
            </li>
            <li>
              <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 hover:text-gold">
                <FiPhone className="text-gold" aria-hidden />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <FiMail className="text-gold" aria-hidden />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-premium flex flex-col gap-2 text-xs text-silver/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Demo portfolio website.</p>
          <p>Frontend demonstration — not a real business.</p>
        </div>
      </div>
    </footer>
  );
}
