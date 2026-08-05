import { PageHero } from './AboutPage';
import BookingForm from '../components/booking/BookingForm';
import CostEstimator from '../components/booking/CostEstimator';
import { usePageTitle } from '../hooks';

export default function BookingPage() {
  usePageTitle('Book Service');

  return (
    <>
      <PageHero
        title="Book Service"
        subtitle="Request an appointment — our advisors confirm within one business hour."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="border border-silver/40 bg-white p-6 sm:p-8 dark:border-carbon dark:bg-carbon">
            <BookingForm />
          </div>
          <div className="space-y-8">
            <CostEstimator />
            <aside className="border border-gold/30 bg-gold/5 p-6">
              <h2 className="font-display text-xl text-ink dark:text-offwhite">What to expect</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink/70 dark:text-silver/80">
                <li>• Confirmation call or email within one business hour</li>
                <li>• Digital inspection report during service</li>
                <li>• Transparent estimate before work begins</li>
                <li>• Optional concierge pickup for executive clients</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
