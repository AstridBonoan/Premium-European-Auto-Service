import { useMemo, useState } from 'react';
import { brands } from '../../data/brands';
import { buildMaintenancePlan, drivingHabitModifiers } from '../../data/maintenance';
import Badge from './Badge';

const currentYear = new Date().getFullYear();

export default function Timeline() {
  const [form, setForm] = useState({
    brand: 'bmw',
    model: 'M340i',
    year: String(currentYear - 2),
    mileage: '32000',
    habit: 'mixed',
  });
  const [submitted, setSubmitted] = useState(false);

  const plan = useMemo(() => {
    if (!submitted) return [];
    return buildMaintenancePlan({
      brandId: form.brand,
      mileage: Number(form.mileage),
      habit: form.habit,
    });
  }, [form, submitted]);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSubmitted(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const statusStyles = {
    due_soon: 'border-gold bg-gold/10',
    upcoming: 'border-gold/40',
    scheduled: 'border-silver/50',
    future: 'border-silver/30 opacity-80',
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
      <form onSubmit={onSubmit} className="space-y-4 border border-silver/40 bg-white p-6 dark:border-carbon dark:bg-carbon" noValidate>
        <h3 className="font-display text-2xl font-semibold text-ink dark:text-offwhite">
          Vehicle Details
        </h3>
        <p className="text-sm text-ink/60 dark:text-silver/70">
          Demonstration planner only — recommendations are illustrative.
        </p>

        <div>
          <label htmlFor="brand" className="label-field">
            Vehicle Brand
          </label>
          <select id="brand" name="brand" className="input-field" value={form.brand} onChange={onChange}>
            {brands.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="model" className="label-field">
            Model
          </label>
          <input
            id="model"
            name="model"
            className="input-field"
            value={form.model}
            onChange={onChange}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="year" className="label-field">
              Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              min="1980"
              max={currentYear + 1}
              className="input-field"
              value={form.year}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="mileage" className="label-field">
              Current Mileage
            </label>
            <input
              id="mileage"
              name="mileage"
              type="number"
              min="0"
              className="input-field"
              value={form.mileage}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="habit" className="label-field">
            Driving Habits
          </label>
          <select id="habit" name="habit" className="input-field" value={form.habit} onChange={onChange}>
            {Object.entries(drivingHabitModifiers).map(([key, meta]) => (
              <option key={key} value={key}>
                {meta.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-primary w-full">
          Generate Schedule
        </button>
      </form>

      <div aria-live="polite">
        {!submitted && (
          <div className="flex h-full min-h-[280px] items-center justify-center border border-dashed border-silver/60 p-8 text-center text-ink/50 dark:border-carbon dark:text-silver/50">
            Enter your vehicle details to view a recommended maintenance timeline.
          </div>
        )}
        {submitted && (
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl font-semibold text-ink dark:text-offwhite">
                Recommended Schedule
              </h3>
              <Badge>
                {form.year} {brands.find((b) => b.id === form.brand)?.name} {form.model}
              </Badge>
            </div>
            <ol className="relative space-y-4 border-l-2 border-gold/40 pl-6">
              {plan.map((item, index) => (
                <li key={`${item.service}-${index}`} className={`border bg-white p-4 dark:bg-matte ${statusStyles[item.status]}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-body text-sm font-semibold text-ink dark:text-offwhite">
                      {item.service}
                    </p>
                    <Badge variant={item.status === 'due_soon' ? 'gold' : 'silver'}>
                      {item.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-ink/70 dark:text-silver/70">
                    Due around {item.dueAt.toLocaleString()} miles ({item.milesUntil.toLocaleString()}{' '}
                    miles remaining)
                  </p>
                  <p className="mt-1 text-xs text-gold">{item.reminder}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
