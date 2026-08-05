import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navLinks } from '../../data/content';
import { company } from '../../data/company';
import { useThemeContext } from '../../hooks/ThemeContext';
import { cn } from '../../utils/helpers';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    cn(
      'font-body text-xs font-semibold uppercase tracking-[0.14em] transition hover:text-gold',
      isActive ? 'text-gold' : 'text-offwhite/85'
    );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        scrolled || open ? 'bg-matte/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="container-premium flex h-16 items-center justify-between lg:h-20" aria-label="Primary">
        <Link to="/" className="group flex flex-col" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-semibold tracking-wide text-offwhite sm:text-xl">
            {company.name}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-gold sm:block">
            {company.tagline}
          </span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center text-offwhite transition hover:text-gold"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <Link to="/booking" className="btn-primary hidden px-4 py-2 sm:inline-flex">
            Book Service
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-offwhite xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/10 bg-matte xl:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-premium flex max-h-[80vh] flex-col gap-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      'px-2 py-3 font-body text-sm font-semibold uppercase tracking-[0.14em]',
                      isActive ? 'text-gold' : 'text-offwhite'
                    )
                  }
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/booking" className="btn-primary mt-2" onClick={() => setOpen(false)}>
                Book Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
