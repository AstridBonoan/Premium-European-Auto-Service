import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { PageHero } from './AboutPage';
import FAQAccordion from '../components/common/FAQAccordion';
import { company } from '../data/company';
import { faqs } from '../data/content';
import { validateContact } from '../utils/validation';
import { usePageTitle } from '../hooks';

export default function ContactPage() {
  usePageTitle('Contact');
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validateContact(values);
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <>
      <PageHero title="Contact" subtitle="Speak with a service advisor dedicated to European platforms." />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium grid gap-12 lg:grid-cols-2">
          <div className="border border-silver/40 bg-white p-6 sm:p-8 dark:border-carbon dark:bg-carbon">
            {sent ? (
              <div role="status" aria-live="polite">
                <h2 className="font-display text-3xl text-ink dark:text-offwhite">Message Sent</h2>
                <p className="mt-3 text-ink/70 dark:text-silver/80">
                  Thank you, {values.name}. We will respond to {values.email} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <h2 className="font-display text-2xl text-ink dark:text-offwhite">Send a Message</h2>
                <div>
                  <label htmlFor="name" className="label-field">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="input-field"
                    value={values.name}
                    onChange={onChange}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="label-field">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input-field"
                    value={values.email}
                    onChange={onChange}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="label-field">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="input-field"
                    value={values.message}
                    onChange={onChange}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-700">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="space-y-4 text-sm text-ink dark:text-silver">
              <p className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-gold" aria-hidden />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </span>
              </p>
              <p>
                <a href={`tel:${company.phone}`} className="inline-flex items-center gap-3 hover:text-gold">
                  <FiPhone className="text-gold" aria-hidden />
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 hover:text-gold">
                  <FiMail className="text-gold" aria-hidden />
                  {company.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink dark:text-offwhite">Business Hours</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {company.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 border-b border-silver/30 py-2 dark:border-carbon">
                    <span>{h.day}</span>
                    <span className="text-ink/60 dark:text-silver/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink dark:text-offwhite">Service Area</h2>
              <p className="mt-2 text-sm text-ink/70 dark:text-silver/80">{company.serviceArea}</p>
            </div>

            <div
              className="flex aspect-[16/10] items-center justify-center border border-dashed border-silver/60 bg-white text-center text-sm text-ink/50 dark:border-carbon dark:bg-carbon dark:text-silver/50"
              role="img"
              aria-label="Map placeholder for Apex European Motors location"
            >
              Map Placeholder — 1847 Prestige Drive, Beverly Hills
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-carbon">
        <div className="container-premium max-w-3xl">
          <h2 className="section-heading text-center">FAQs</h2>
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
