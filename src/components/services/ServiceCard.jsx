import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Badge from '../common/Badge';
import { formatCurrency } from '../../utils/helpers';

export default function ServiceCard({ service }) {
  return (
    <motion.article
      className="card-premium group flex h-full flex-col p-6"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-start justify-between gap-3">
        <Badge>{service.category}</Badge>
        <span className="font-body text-sm text-ink/60 dark:text-silver/60">
          from {formatCurrency(service.priceFrom)}
        </span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-offwhite">
        {service.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70 dark:text-silver/80">
        {service.description}
      </p>
      <ul className="mt-4 space-y-1.5 text-sm text-ink/80 dark:text-silver/80">
        {service.benefits.slice(0, 3).map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs uppercase tracking-wider text-ink/50 dark:text-silver/50">
        Est. {service.estimatedTime}
      </p>
      <Link
        to="/booking"
        state={{ service: service.id }}
        className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold transition group-hover:gap-3"
      >
        Request Service <FiArrowRight aria-hidden />
      </Link>
    </motion.article>
  );
}
