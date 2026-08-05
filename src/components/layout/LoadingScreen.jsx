import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { company } from '../../data/company';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-matte"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="h-16 w-16 border border-gold/30"
        initial={{ rotate: 0, opacity: 0.4 }}
        animate={{ rotate: 180, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="h-3 w-3 bg-gold" />
        </div>
      </motion.div>
      <motion.p
        className="mt-6 font-display text-2xl text-offwhite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        {company.name}
      </motion.p>
      <motion.p
        className="mt-2 text-xs uppercase tracking-[0.3em] text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        {company.tagline}
      </motion.p>
    </motion.div>
  );
}
