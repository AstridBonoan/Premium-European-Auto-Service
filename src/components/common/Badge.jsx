import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export default function Badge({ children, variant = 'gold', className }) {
  const variants = {
    gold: 'bg-gold/15 text-gold border-gold/40',
    dark: 'bg-matte text-offwhite border-matte',
    silver: 'bg-silver/20 text-ink border-silver/50',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center border px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em]',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function FadeIn({ children, className, delay = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
