const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+-]{10,}$/;

export function validateBooking(values) {
  const errors = {};

  if (!values.firstName?.trim()) errors.firstName = 'First name is required';
  if (!values.lastName?.trim()) errors.lastName = 'Last name is required';
  if (!values.email?.trim()) errors.email = 'Email is required';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Enter a valid email';
  if (!values.phone?.trim()) errors.phone = 'Phone is required';
  else if (!PHONE_RE.test(values.phone)) errors.phone = 'Enter a valid phone number';
  if (!values.brand?.trim()) errors.brand = 'Vehicle brand is required';
  if (!values.model?.trim()) errors.model = 'Vehicle model is required';
  if (!values.year?.trim()) errors.year = 'Vehicle year is required';
  else {
    const year = Number(values.year);
    const current = new Date().getFullYear() + 1;
    if (Number.isNaN(year) || year < 1980 || year > current) {
      errors.year = `Enter a year between 1980 and ${current}`;
    }
  }
  if (!values.service?.trim()) errors.service = 'Please select a service';
  if (!values.preferredDate?.trim()) errors.preferredDate = 'Preferred date is required';
  else {
    const selected = new Date(values.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) errors.preferredDate = 'Date must be today or later';
  }

  return errors;
}

export function validateContact(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'Name is required';
  if (!values.email?.trim()) errors.email = 'Email is required';
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Enter a valid email';
  if (!values.message?.trim()) errors.message = 'Message is required';
  else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a bit more detail (10+ characters)';
  }
  return errors;
}

export function estimateServiceCost({ serviceId, brandId, mileage, packages }) {
  const baseRates = {
    'european-diagnostics': 189,
    'oil-maintenance': 149,
    'brake-repair': 420,
    'engine-repair': 890,
    'transmission-service': 480,
    'suspension-repair': 650,
    'electrical-diagnostics': 220,
    'performance-tuning': 1200,
    'preventative-maintenance': 299,
    'pre-purchase-inspection': 349,
  };

  let base = baseRates[serviceId] || 250;
  const luxuryBrands = ['porsche', 'mercedes-benz', 'bmw', 'audi'];
  if (luxuryBrands.includes(brandId)) base *= 1.15;
  if (mileage > 80000) base *= 1.1;
  if (packages === 'executive') base *= 1.05;

  return {
    low: Math.round(base * 0.9),
    high: Math.round(base * 1.35),
    note: 'Demo estimate only — final pricing follows inspection.',
  };
}
