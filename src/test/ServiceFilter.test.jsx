import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ServicesPage from '../pages/ServicesPage';

describe('Service filtering', () => {
  it('filters services by category', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ServicesPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/showing 15 services/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /^performance$/i }));
    expect(screen.getByText(/showing 1 service in performance/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /performance tuning/i })).toBeInTheDocument();
  });
});
