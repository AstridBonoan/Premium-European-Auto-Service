import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BrandsPage from './pages/BrandsPage';
import PackagesPage from './pages/PackagesPage';
import TimelinePage from './pages/TimelinePage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import PortalPage from './pages/PortalPage';

export default function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="timeline" element={<TimelinePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portal" element={<PortalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
