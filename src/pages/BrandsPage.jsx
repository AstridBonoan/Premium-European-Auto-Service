import { useMemo, useState } from 'react';
import { PageHero } from './AboutPage';
import VehicleBrandCard from '../components/vehicles/VehicleBrandCard';
import CTASection from '../components/common/CTASection';
import { FadeIn } from '../components/common/Badge';
import { brands } from '../data/brands';
import { usePageTitle } from '../hooks';
import { cn } from '../utils/helpers';

export default function BrandsPage() {
  usePageTitle('Vehicle Brands');
  const [filter, setFilter] = useState('All');
  const names = ['All', ...brands.map((b) => b.name)];

  const filtered = useMemo(() => {
    if (filter === 'All') return brands;
    return brands.filter((b) => b.name === filter);
  }, [filter]);

  return (
    <>
      <PageHero
        title="Vehicle Brands"
        subtitle="Deep marque expertise across Germany’s icons and Britain’s grand tourers."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter brands">
            {names.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setFilter(name)}
                aria-pressed={filter === name}
                className={cn(
                  'border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition',
                  filter === name
                    ? 'border-gold bg-gold text-matte'
                    : 'border-silver/50 bg-white text-ink hover:border-gold dark:border-carbon dark:bg-carbon dark:text-silver'
                )}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((brand, i) => (
              <FadeIn key={brand.id} delay={(i % 3) * 0.05}>
                <VehicleBrandCard brand={brand} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
