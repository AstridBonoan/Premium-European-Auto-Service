import { useMemo, useState } from 'react';
import { PageHero } from './AboutPage';
import ServiceCard from '../components/services/ServiceCard';
import CTASection from '../components/common/CTASection';
import { FadeIn } from '../components/common/Badge';
import { services, serviceCategories } from '../data/services';
import { usePageTitle } from '../hooks';
import { cn } from '../utils/helpers';

export default function ServicesPage() {
  usePageTitle('Services');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    if (category === 'All') return services;
    return services.filter((s) => s.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        title="Services"
        subtitle="Factory-level diagnostics, maintenance, repair, and performance for European luxury vehicles."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter services by category"
          >
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={cn(
                  'border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition',
                  category === cat
                    ? 'border-gold bg-gold text-matte'
                    : 'border-silver/50 bg-white text-ink hover:border-gold dark:border-carbon dark:bg-carbon dark:text-silver'
                )}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm text-ink/60 dark:text-silver/60" aria-live="polite">
            Showing {filtered.length} service{filtered.length === 1 ? '' : 's'}
            {category !== 'All' ? ` in ${category}` : ''}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((service, i) => (
              <FadeIn key={service.id} delay={(i % 3) * 0.05}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Need a custom service plan?" />
    </>
  );
}
