import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Timeline from '../components/common/Timeline';

describe('Maintenance planner', () => {
  it('prompts for vehicle details before generating a schedule', () => {
    render(<Timeline />);
    expect(
      screen.getByText(/enter your vehicle details to view a recommended maintenance timeline/i)
    ).toBeInTheDocument();
  });

  it('generates a maintenance schedule on submit', async () => {
    const user = userEvent.setup();
    render(<Timeline />);
    await user.clear(screen.getByLabelText(/model/i));
    await user.type(screen.getByLabelText(/model/i), 'M4');
    await user.click(screen.getByRole('button', { name: /generate schedule/i }));
    expect(screen.getByText(/recommended schedule/i)).toBeInTheDocument();
    expect(screen.getByText(/cbs oil service/i)).toBeInTheDocument();
  });
});
