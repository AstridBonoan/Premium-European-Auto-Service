import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import FloatingBookButton from './FloatingBookButton';
import LoadingScreen from './LoadingScreen';
import { scrollToTop } from '../../utils/helpers';

export default function MainLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen onComplete={() => setLoading(false)} />}</AnimatePresence>
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-gold focus:px-4 focus:py-2 focus:text-matte"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
}
