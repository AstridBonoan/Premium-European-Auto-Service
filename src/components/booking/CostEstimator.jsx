import { useState } from 'react';
import { services } from '../../data/services';
import { brands } from '../../data/brands';
import { estimateServiceCost } from '../../utils/validation';
import { formatCurrency } from '../../utils/helpers';

export default function CostEstimator() {
  const [serviceId, setServiceId] = useState(services[0].id);
  const [brandId, setBrandId] = useState('bmw');
  const [mileage, setMileage] = useState(35000);

  const estimate = estimateServiceCost({ serviceId, brandId, mileage });

  return (
    <div className="border border-silver/40 bg-white p-6 dark:border-carbon dark:bg-carbon">
      <h2 className="font-display text-2xl text-ink dark:text-offwhite">Service Cost Estimator</h2>
      <p className="mt-2 text-sm text-ink/60 dark:text-silver/70">
        Demo calculator for planning conversations — not a formal quote.
      </p>
      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="est-service" className="label-field">
            Service
          </label>
          <select
            id="est-service"
            className="input-field"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="est-brand" className="label-field">
            Brand
          </label>
          <select
            id="est-brand"
            className="input-field"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
          >
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="est-mileage" className="label-field">
            Mileage
          </label>
          <input
            id="est-mileage"
            type="number"
            className="input-field"
            value={mileage}
            onChange={(e) => setMileage(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-6 border border-gold/30 bg-gold/10 p-4 text-center" aria-live="polite">
        <p className="text-xs uppercase tracking-wider text-ink/50 dark:text-silver/50">Estimated Range</p>
        <p className="mt-2 font-display text-3xl text-gold">
          {formatCurrency(estimate.low)} – {formatCurrency(estimate.high)}
        </p>
        <p className="mt-2 text-xs text-ink/60 dark:text-silver/60">{estimate.note}</p>
      </div>
    </div>
  );
}
