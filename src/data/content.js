export const statistics = [
  { id: 1, label: 'Vehicles Serviced', value: 12500, suffix: '+', prefix: '' },
  { id: 2, label: 'Years of Expertise', value: 18, suffix: '', prefix: '' },
  { id: 3, label: 'Certified Technicians', value: 24, suffix: '', prefix: '' },
  { id: 4, label: 'Client Satisfaction', value: 98, suffix: '%', prefix: '' },
  { id: 5, label: 'European Marques', value: 12, suffix: '+', prefix: '' },
  { id: 6, label: 'Same-Day Services', value: 40, suffix: '%', prefix: '' },
  { id: 7, label: 'Avg. Diagnostic Accuracy', value: 99, suffix: '%', prefix: '' },
  { id: 8, label: 'OEM Tool Platforms', value: 8, suffix: '', prefix: '' },
  { id: 9, label: 'Service Bays', value: 14, suffix: '', prefix: '' },
  { id: 10, label: '5-Star Reviews', value: 2100, suffix: '+', prefix: '' },
  { id: 11, label: 'Track Days Supported', value: 85, suffix: '+', prefix: '' },
  { id: 12, label: 'Fleet Clients', value: 60, suffix: '+', prefix: '' },
];

export const faqs = [
  {
    id: 1,
    question: 'Do you use genuine OEM parts?',
    answer:
      'We primarily install genuine OEM or OE-supplier parts. When a premium aftermarket option is appropriate, we discuss it with you first and document the choice in your digital report.',
  },
  {
    id: 2,
    question: 'How does pricing compare to the dealership?',
    answer:
      'Most clients save 20–40% versus dealer rates while receiving equivalent or superior diagnostic depth, OEM tooling, and a more personalized experience.',
  },
  {
    id: 3,
    question: 'Can you service my vehicle under warranty?',
    answer:
      'Independent service does not void your manufacturer warranty under the Magnuson-Moss Warranty Act. We follow OEM procedures and can provide documentation for warranty-sensitive work.',
  },
  {
    id: 4,
    question: 'Do you offer loaner vehicles or rideshares?',
    answer:
      'Complimentary rideshare credit is available for many services. Executive and fleet clients may request concierge pickup and delivery.',
  },
  {
    id: 5,
    question: 'How long does a pre-purchase inspection take?',
    answer:
      'A standard PPI takes 2–3 hours. Rush appointments are often available same-day with advance notice.',
  },
  {
    id: 6,
    question: 'What diagnostic systems do you use?',
    answer:
      'We maintain BMW ISTA, Mercedes STAR, Porsche PIWIS-compatible workflows, VCDS/ODIS for VAG, and multi-brand ADAS calibration equipment.',
  },
  {
    id: 7,
    question: 'Is the maintenance planner accurate for my car?',
    answer:
      'The planner is a demonstration tool based on typical European intervals. Always confirm with your owner’s manual and our advisors for model-specific guidance.',
  },
  {
    id: 8,
    question: 'Do you handle performance modifications?',
    answer:
      'Yes. From bolt-ons to ECU calibration, we support street and track builds with dyno verification and warranty-conscious options.',
  },
  {
    id: 9,
    question: 'Can I watch my vehicle being serviced?',
    answer:
      'Our atelier viewing corridor and lounge overlook selected bays. For safety, floor access is limited, but advisors provide live photo updates.',
  },
  {
    id: 10,
    question: 'How do I book an appointment?',
    answer:
      'Use our online booking form, call +1 (555) 010-2890, or tap the floating Book Service button. We confirm within one business hour during operating hours.',
  },
];

export const primaryNavLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/brands', label: 'Brands' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export const secondaryNavLinks = [
  { to: '/timeline', label: 'Planner' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/portal', label: 'Client Portal' },
];

/** Full set for mobile drawer and footer */
export const navLinks = [
  { to: '/', label: 'Home' },
  ...primaryNavLinks,
  ...secondaryNavLinks,
  { to: '/booking', label: 'Booking' },
];
