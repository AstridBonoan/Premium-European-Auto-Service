export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
