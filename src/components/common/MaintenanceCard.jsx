import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from '../common/Badge';
import { formatCurrency } from '../../utils/helpers';

export default function MaintenanceCard({ pkg }) {
  return (
    <motion.article
      className={`card-premium flex h-full flex-col p-6 ${pkg.featured ? 'border-gold/60' : ''}`}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between gap-2">
        <Badge variant={pkg.featured ? 'gold' : 'silver'}>{pkg.tier}</Badge>
        {pkg.featured && <span className="text-xs font-semibold uppercase tracking-wider text-gold">Featured</span>}
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-offwhite">{pkg.name}</h3>
      <p className="mt-2 text-sm text-ink/70 dark:text-silver/80">{pkg.description}</p>
      <p className="mt-4 font-display text-3xl font-semibold text-gold">
        {formatCurrency(pkg.price)}
        <span className="ml-1 font-body text-sm font-normal text-ink/50 dark:text-silver/50">est.</span>
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-ink/50 dark:text-silver/50">
        {pkg.recommendedMileage}
      </p>
      <ul className="mt-5 flex-1 space-y-2 text-sm text-ink/80 dark:text-silver/80">
        {pkg.included.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-gold" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <Link to="/booking" state={{ packageId: pkg.id }} className="btn-primary mt-6 w-full">
        Select Package
      </Link>
    </motion.article>
  );
}
