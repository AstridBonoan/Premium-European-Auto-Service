import { motion } from 'framer-motion';
import Badge from '../common/Badge';

export default function VehicleBrandCard({ brand }) {
  return (
    <motion.article
      className="card-premium group overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={brand.image}
          alt={`${brand.name} luxury vehicle`}
          loading="lazy"
          className="h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl font-semibold text-offwhite">{brand.name}</h3>
          <p className="text-xs uppercase tracking-[0.15em] text-gold">{brand.tagline}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-ink/70 dark:text-silver/80">{brand.description}</p>
        <div className="mt-4">
          <Badge variant="silver">Specialty</Badge>
          <p className="mt-2 text-sm text-ink dark:text-offwhite">{brand.specialty}</p>
        </div>
        <h4 className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink/50 dark:text-silver/50">
          Common Services
        </h4>
        <ul className="mt-2 space-y-1 text-sm text-ink/80 dark:text-silver/80">
          {brand.commonServices.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
