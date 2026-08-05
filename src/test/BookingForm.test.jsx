import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BookingForm from '../components/booking/BookingForm';

function renderForm() {
  return render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
}

describe('Booking form validation', () => {
  it('shows validation errors when submitted empty', async () => {
    const user = userEvent.setup();
    renderForm();
    await user.click(screen.getByRole('button', { name: /submit appointment request/i }));
    expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a service/i)).toBeInTheDocument();
  });

  it('shows confirmation after valid submission', async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText(/first name/i), 'Alex');
    await user.type(screen.getByLabelText(/last name/i), 'Chen');
    await user.type(screen.getByLabelText(/^email/i), 'alex@example.com');
    await user.type(screen.getByLabelText(/phone/i), '5551234567');
    await user.selectOptions(screen.getByLabelText(/^brand/i), 'bmw');
    await user.type(screen.getByLabelText(/^model/i), 'M4');
    await user.type(screen.getByLabelText(/^year/i), '2022');
    await user.selectOptions(screen.getByLabelText(/^service/i), 'oil-maintenance');

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const iso = tomorrow.toISOString().slice(0, 10);
    await user.type(screen.getByLabelText(/preferred date/i), iso);

    await user.click(screen.getByRole('button', { name: /submit appointment request/i }));
    expect(await screen.findByText(/request received/i)).toBeInTheDocument();
  });
});
