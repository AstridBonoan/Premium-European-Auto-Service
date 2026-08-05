/** Interval templates in miles for demo maintenance planner */
export const maintenanceIntervals = {
  default: [
    { miles: 5000, service: 'Oil & filter service', priority: 'upcoming' },
    { miles: 10000, service: 'Cabin filter & multi-point inspection', priority: 'upcoming' },
    { miles: 15000, service: 'Brake fluid test & tire rotation', priority: 'scheduled' },
    { miles: 30000, service: 'Spark plugs & transmission inspection', priority: 'scheduled' },
    { miles: 40000, service: 'Coolant system service', priority: 'future' },
    { miles: 60000, service: 'Major service & drive belt inspection', priority: 'future' },
  ],
  bmw: [
    { miles: 5000, service: 'CBS oil service & inspection', priority: 'upcoming' },
    { miles: 15000, service: 'Microfilter & brake check', priority: 'upcoming' },
    { miles: 30000, service: 'Spark plugs & vehicle check', priority: 'scheduled' },
    { miles: 60000, service: 'Air filter & cooling inspection', priority: 'scheduled' },
    { miles: 80000, service: 'Transmission fluid (ZF)', priority: 'future' },
    { miles: 100000, service: 'VANOS & timing review', priority: 'future' },
  ],
  'mercedes-benz': [
    { miles: 10000, service: 'A Service – oil & filters', priority: 'upcoming' },
    { miles: 20000, service: 'B Service – cabin & brake fluid', priority: 'upcoming' },
    { miles: 40000, service: 'Air filter & spark plugs', priority: 'scheduled' },
    { miles: 60000, service: 'Transmission service', priority: 'scheduled' },
    { miles: 80000, service: 'Coolant & suspension check', priority: 'future' },
  ],
  audi: [
    { miles: 5000, service: 'Oil service', priority: 'upcoming' },
    { miles: 10000, service: 'Inspection service', priority: 'upcoming' },
    { miles: 30000, service: 'DSG / S tronic service window', priority: 'scheduled' },
    { miles: 40000, service: 'Spark plugs & carbon clean review', priority: 'scheduled' },
    { miles: 60000, service: 'Haldex / differential service', priority: 'future' },
  ],
  porsche: [
    { miles: 5000, service: 'Oil service (track-aware)', priority: 'upcoming' },
    { miles: 15000, service: 'Maintenance check', priority: 'upcoming' },
    { miles: 30000, service: 'PDK fluid & filter', priority: 'scheduled' },
    { miles: 40000, service: 'Spark plugs & filters', priority: 'scheduled' },
    { miles: 60000, service: 'Major service & PASM check', priority: 'future' },
  ],
};

export const drivingHabitModifiers = {
  mostly_highway: { label: 'Mostly highway', factor: 1.1 },
  mixed: { label: 'Mixed driving', factor: 1 },
  city: { label: 'City / short trips', factor: 0.85 },
  spirited: { label: 'Spirited / track', factor: 0.7 },
};

/**
 * Build a maintenance schedule relative to current mileage.
 */
export function buildMaintenancePlan({ brandId, mileage, habit = 'mixed' }) {
  const key = brandId?.toLowerCase?.() || 'default';
  const template = maintenanceIntervals[key] || maintenanceIntervals.default;
  const modifier = drivingHabitModifiers[habit] || drivingHabitModifiers.mixed;
  const current = Number(mileage) || 0;

  return template.map((item) => {
    const adjustedMiles = Math.round(item.miles * modifier.factor);
    const dueAt = adjustedMiles;
    const milesUntil =
      current === 0
        ? dueAt
        : dueAt > current
          ? dueAt - current
          : (() => {
              let next = dueAt;
              while (next <= current) next += dueAt;
              return next - current;
            })();

    let status = 'future';
    if (milesUntil <= 500) status = 'due_soon';
    else if (milesUntil <= 2000) status = 'upcoming';
    else status = 'scheduled';

    return {
      ...item,
      dueAt: current + milesUntil,
      milesUntil,
      status,
      reminder: milesUntil <= 1000 ? 'Schedule within 2 weeks' : 'Monitor at next visit',
    };
  });
}
