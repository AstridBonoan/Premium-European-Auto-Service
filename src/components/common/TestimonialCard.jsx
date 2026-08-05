import { FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.blockquote
      className="card-premium flex h-full flex-col p-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            className={i < testimonial.rating ? 'fill-gold text-gold' : 'text-silver'}
            aria-hidden
          />
        ))}
      </div>
      <p className="mt-4 flex-1 font-display text-lg leading-relaxed text-ink dark:text-offwhite">
        “{testimonial.review}”
      </p>
      <footer className="mt-6 border-t border-silver/30 pt-4 dark:border-carbon">
        <cite className="not-italic">
          <span className="block font-body text-sm font-semibold text-ink dark:text-offwhite">
            {testimonial.name}
          </span>
          <span className="mt-1 block text-xs text-gold">{testimonial.vehicle}</span>
          <span className="mt-1 block text-xs text-ink/50 dark:text-silver/50">
            {testimonial.location}
          </span>
        </cite>
      </footer>
    </motion.blockquote>
  );
}
