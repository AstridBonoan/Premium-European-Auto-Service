import { PageHero } from './AboutPage';
import Timeline from '../components/common/Timeline';
import CTASection from '../components/common/CTASection';
import { usePageTitle } from '../hooks';

export default function TimelinePage() {
  usePageTitle('Maintenance Planner');

  return (
    <>
      <PageHero
        title="Vehicle Maintenance Timeline"
        subtitle="Interactive planner for recommended European service intervals. Demo feature only."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium">
          <Timeline />
        </div>
      </section>
      <CTASection title="Ready to schedule recommended service?" />
    </>
  );
}
