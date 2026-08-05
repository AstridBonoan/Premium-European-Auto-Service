import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { formatNumber } from '../../utils/helpers';

export default function StatisticCard({ label, value, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="border border-gold/20 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-display text-3xl font-semibold text-gold sm:text-4xl" aria-live="polite">
        {prefix}
        {formatNumber(display)}
        {suffix}
      </p>
      <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-silver">
        {label}
      </p>
    </motion.div>
  );
}
