import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { company } from '../../data/company';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=80';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-matte" aria-label="Hero">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={HERO_IMAGE}
          alt="Luxury European sports car in dramatic lighting"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="gradient-hero absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-32 sm:justify-center sm:pb-0"
      >
        <div className="container-premium max-w-4xl">
          <motion.p
            className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            European Automotive Atelier
          </motion.p>
          <motion.h1
            className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-offwhite text-balance sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {company.name}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl font-body text-lg text-silver/90 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            {company.tagline}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link to="/booking" className="btn-primary">
              Book Service
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
