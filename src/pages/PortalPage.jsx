import { Link } from 'react-router-dom';
import { PageHero } from './AboutPage';
import { FadeIn } from '../components/common/Badge';
import Badge from '../components/common/Badge';
import { usePageTitle } from '../hooks';

const history = [
  { date: '2026-06-12', service: 'Oil & Maintenance Service', vehicle: 'BMW M340i', status: 'Completed', cost: '$189' },
  { date: '2026-03-02', service: 'Brake Fluid Flush', vehicle: 'BMW M340i', status: 'Completed', cost: '$220' },
  { date: '2025-11-18', service: 'Annual Major Service', vehicle: 'BMW M340i', status: 'Completed', cost: '$1,149' },
  { date: '2025-07-09', service: 'Alignment', vehicle: 'BMW M340i', status: 'Completed', cost: '$179' },
];

const inspectionPreview = [
  { area: 'Brakes', result: 'Good', note: 'Pads at 7mm front / 8mm rear' },
  { area: 'Tires', result: 'Monitor', note: 'Inner shoulder wear — alignment recommended' },
  { area: 'Fluids', result: 'Good', note: 'Oil clean; coolant at -35°C' },
  { area: 'Electronics', result: 'Pass', note: 'No stored fault codes' },
  { area: 'Suspension', result: 'Good', note: 'Bushings within tolerance' },
];

export default function PortalPage() {
  usePageTitle('Client Portal');

  return (
    <>
      <PageHero
        title="Client Portal"
        subtitle="Placeholder dashboard for service history, inspection reports, and upcoming care."
      />
      <section className="bg-offwhite py-16 dark:bg-matte">
        <div className="container-premium space-y-12">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Badge>Demo Account</Badge>
                <h2 className="mt-3 font-display text-3xl text-ink dark:text-offwhite">
                  Welcome back, Alexander
                </h2>
                <p className="mt-2 text-sm text-ink/60 dark:text-silver/70">
                  2022 BMW M340i · VIN ACCT-000019
                </p>
              </div>
              <Link to="/booking" className="btn-primary">
                Book Next Service
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-silver/40 bg-white p-6 dark:border-carbon dark:bg-carbon">
              <h3 className="font-display text-2xl text-ink dark:text-offwhite">Service History</h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-silver/40 text-xs uppercase tracking-wider text-ink/50 dark:border-carbon dark:text-silver/50">
                      <th className="py-2 pr-3">Date</th>
                      <th className="py-2 pr-3">Service</th>
                      <th className="py-2 pr-3">Status</th>
                      <th className="py-2">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((row) => (
                      <tr key={row.date + row.service} className="border-b border-silver/20 dark:border-carbon">
                        <td className="py-3 pr-3">{row.date}</td>
                        <td className="py-3 pr-3">{row.service}</td>
                        <td className="py-3 pr-3 text-gold">{row.status}</td>
                        <td className="py-3">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border border-silver/40 bg-white p-6 dark:border-carbon dark:bg-carbon">
              <h3 className="font-display text-2xl text-ink dark:text-offwhite">
                Digital Inspection Report
              </h3>
              <p className="mt-2 text-sm text-ink/60 dark:text-silver/70">
                Preview of the last multi-point inspection (demo).
              </p>
              <ul className="mt-5 space-y-3">
                {inspectionPreview.map((item) => (
                  <li
                    key={item.area}
                    className="flex items-start justify-between gap-4 border-b border-silver/20 pb-3 dark:border-carbon"
                  >
                    <div>
                      <p className="font-semibold text-ink dark:text-offwhite">{item.area}</p>
                      <p className="text-sm text-ink/60 dark:text-silver/70">{item.note}</p>
                    </div>
                    <Badge variant={item.result === 'Monitor' ? 'gold' : 'silver'}>{item.result}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
