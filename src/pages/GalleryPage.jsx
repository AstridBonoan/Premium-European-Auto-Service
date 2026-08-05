import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PageHero } from './AboutPage';
import GalleryCard from '../components/common/GalleryCard';
import CTASection from '../components/common/CTASection';
import { galleryItems, galleryCategories } from '../data/gallery';
import { usePageTitle } from '../hooks';
import { cn } from '../utils/helpers';

export default function GalleryPage() {
  usePageTitle('Gallery');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    if (category === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Facility craftsmanship, luxury vehicles, technician artistry, and completed work."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={cn(
                  'border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition',
                  category === cat
                    ? 'border-gold bg-gold text-matte'
                    : 'border-silver/50 bg-white text-ink hover:border-gold dark:border-carbon dark:bg-carbon dark:text-silver'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60 dark:text-silver/60" aria-live="polite">
            {filtered.length} images
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
