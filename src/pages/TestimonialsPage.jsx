import { PageHero } from './AboutPage';
import TestimonialCard from '../components/common/TestimonialCard';
import CTASection from '../components/common/CTASection';
import { testimonials } from '../data/testimonials';
import { usePageTitle } from '../hooks';

export default function TestimonialsPage() {
  usePageTitle('Testimonials');

  return (
    <>
      <PageHero
        title="Testimonials"
        subtitle="Voices from owners of BMW, Mercedes-Benz, Porsche, Audi, and beyond."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>
      <CTASection title="Join our community of discerning owners" />
    </>
  );
}
