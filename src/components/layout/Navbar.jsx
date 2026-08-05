import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, primaryNavLinks, secondaryNavLinks } from '../../data/content';
import { company } from '../../data/company';
import { cn } from '../../utils/helpers';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

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

  useEffect(() => {
    const onPointerDown = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const linkClass = ({ isActive }) =>
    cn(
      'whitespace-nowrap font-body text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:text-gold',
      isActive ? 'text-gold' : 'text-offwhite/80'
    );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition duration-300',
        scrolled || open ? 'bg-matte/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav
        className="container-premium flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]"
        aria-label="Primary"
      >
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-semibold tracking-wide text-offwhite lg:text-xl">
            Apex
          </span>
          <span className="ml-1.5 hidden font-display text-lg font-semibold tracking-wide text-offwhite/70 sm:inline lg:text-xl">
            European Motors
          </span>
          <span className="sr-only">{company.name}</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {primaryNavLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className={cn(
                'inline-flex items-center gap-1 whitespace-nowrap font-body text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:text-gold',
                moreOpen ? 'text-gold' : 'text-offwhite/80'
              )}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More
              <FiChevronDown className={cn('transition', moreOpen && 'rotate-180')} aria-hidden />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-3 min-w-[11rem] border border-white/10 bg-matte/95 py-2 shadow-xl backdrop-blur-md"
                  role="menu"
                >
                  {secondaryNavLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      role="menuitem"
                      className={({ isActive }) =>
                        cn(
                          'block px-4 py-2.5 font-body text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:bg-white/5 hover:text-gold',
                          isActive ? 'text-gold' : 'text-offwhite/80'
                        )
                      }
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link to="/booking" className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Book Service
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-offwhite lg:hidden"
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
            className="border-t border-white/10 bg-matte lg:hidden"
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
