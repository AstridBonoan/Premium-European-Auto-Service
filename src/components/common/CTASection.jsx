import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from './Badge';

export default function CTASection({
  title = 'Ready for dealership-level care?',
  subtitle = 'Book a service appointment and experience precision European automotive craftsmanship.',
  primaryTo = '/booking',
  primaryLabel = 'Book Service',
  secondaryTo = '/contact',
  secondaryLabel = 'Contact Us',
  dark = true,
}) {
  return (
    <section
      className={dark ? 'gradient-dark-section py-20 text-offwhite' : 'bg-offwhite py-20'}
      aria-labelledby="cta-heading"
    >
      <div className="container-premium text-center">
        <FadeIn>
          <h2
            id="cta-heading"
            className={`font-display text-3xl font-semibold sm:text-4xl lg:text-5xl ${dark ? 'text-offwhite' : 'text-ink'}`}
          >
            {title}
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-base sm:text-lg ${dark ? 'text-silver/80' : 'text-ink/70'}`}
          >
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to={primaryTo} className="btn-primary">
                {primaryLabel}
              </Link>
            </motion.div>
            <Link to={secondaryTo} className={dark ? 'btn-secondary' : 'btn-dark'}>
              {secondaryLabel}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
