import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQAccordion from '../components/common/FAQAccordion';

const items = [
  { id: 1, question: 'Do you use OEM parts?', answer: 'Yes, primarily OEM or OE-supplier parts.' },
  { id: 2, question: 'Do you offer loaners?', answer: 'Rideshare credit is available.' },
];

describe('FAQ accordion', () => {
  it('expands and collapses answers', async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={items} />);

    expect(screen.getByText(/primarily oem/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /do you offer loaners/i }));
    expect(screen.getByText(/rideshare credit/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /do you offer loaners/i }));
    await waitFor(() => {
      expect(screen.queryByText(/rideshare credit/i)).not.toBeInTheDocument();
    });
  });
});
