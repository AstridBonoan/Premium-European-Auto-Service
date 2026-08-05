import { Link } from 'react-router-dom';
import { FadeIn } from '../components/common/Badge';
import Hero from '../components/home/Hero';
import ServiceCard from '../components/services/ServiceCard';
import VehicleBrandCard from '../components/vehicles/VehicleBrandCard';
import TestimonialCard from '../components/common/TestimonialCard';
import MaintenanceCard from '../components/common/MaintenanceCard';
import StatisticCard from '../components/common/StatisticCard';
import CTASection from '../components/common/CTASection';
import { services } from '../data/services';
import { brands } from '../data/brands';
import { testimonials } from '../data/testimonials';
import { packages } from '../data/packages';
import { statistics } from '../data/content';
import { company, values } from '../data/company';
import { usePageTitle } from '../hooks';

export default function HomePage() {
  usePageTitle('Home');
  const featuredServices = services.filter((s) => s.featured).slice(0, 6);
  const featuredPackages = packages.filter((p) => p.featured).slice(0, 4);
  const homeStats = statistics.slice(0, 4);

  return (
    <>
      <Hero />

      <section className="bg-offwhite py-20 dark:bg-matte" aria-labelledby="intro-heading">
        <div className="container-premium grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Atelier</p>
            <h2 id="intro-heading" className="section-heading mt-3">
              Dealership precision. Independent integrity.
            </h2>
            <p className="section-sub">{company.story}</p>
            <Link to="/about" className="btn-dark mt-8 inline-flex">
              Discover Our Story
            </Link>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="border border-silver/40 bg-white p-5 dark:border-carbon dark:bg-carbon">
                  <h3 className="font-display text-xl text-ink dark:text-offwhite">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink/70 dark:text-silver/80">{v.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-carbon" aria-labelledby="services-heading">
        <div className="container-premium">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Expertise</p>
            <h2 id="services-heading" className="section-heading mt-3">
              Featured Services
            </h2>
            <p className="section-sub">
              From OEM diagnostics to track preparation — curated for European platforms.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 dark:bg-matte" aria-labelledby="brands-heading">
        <div className="container-premium">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Marques</p>
            <h2 id="brands-heading" className="section-heading mt-3">
              European Brands Served
            </h2>
            <p className="section-sub">Specialized care across Germany, Britain, and Scandinavia’s finest.</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {brands.slice(0, 4).map((brand, i) => (
              <FadeIn key={brand.id} delay={i * 0.05}>
                <VehicleBrandCard brand={brand} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/brands" className="btn-dark inline-flex">
              All Brands
            </Link>
          </div>
        </div>
      </section>

      <section className="gradient-dark-section py-20" aria-labelledby="why-heading">
        <div className="container-premium">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Why Apex</p>
            <h2 id="why-heading" className="mt-3 font-display text-3xl font-semibold text-offwhite sm:text-4xl lg:text-5xl">
              Why choose Apex European Motors
            </h2>
            <p className="mt-4 max-w-2xl text-silver/80">
              OEM tooling, certified technicians, and a client experience designed for luxury vehicle owners.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.map((stat) => (
              <StatisticCard key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-carbon" aria-labelledby="testimonials-home">
        <div className="container-premium">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Client Voice</p>
            <h2 id="testimonials-home" className="section-heading mt-3">
              Testimonials
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-20 dark:bg-matte" aria-labelledby="packages-home">
        <div className="container-premium">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Care Plans</p>
            <h2 id="packages-home" className="section-heading mt-3">
              Featured Maintenance Packages
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredPackages.map((pkg) => (
              <MaintenanceCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
