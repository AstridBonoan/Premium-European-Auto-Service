import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

export default function FloatingBookButton() {
  const { pathname } = useLocation();
  if (pathname === '/booking') return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Link
        to="/booking"
        className="inline-flex items-center gap-2 bg-gold px-5 py-3 font-body text-sm font-semibold text-matte shadow-lg transition hover:bg-gold-light"
        aria-label="Book a service appointment"
      >
        <FiCalendar aria-hidden />
        Book Service
      </Link>
    </motion.div>
  );
}
