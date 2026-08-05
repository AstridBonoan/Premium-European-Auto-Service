import { PageHero } from './AboutPage';
import MaintenanceCard from '../components/common/MaintenanceCard';
import CTASection from '../components/common/CTASection';
import { FadeIn } from '../components/common/Badge';
import { packages } from '../data/packages';
import { usePageTitle } from '../hooks';

export default function PackagesPage() {
  usePageTitle('Maintenance Packages');

  return (
    <>
      <PageHero
        title="Maintenance Packages"
        subtitle="Curated care plans from essential intervals to track preparation."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.id} delay={(i % 3) * 0.05}>
              <MaintenanceCard pkg={pkg} />
            </FadeIn>
          ))}
        </div>
      </section>
      <CTASection title="Build a custom care plan" primaryTo="/booking" />
    </>
  );
}
