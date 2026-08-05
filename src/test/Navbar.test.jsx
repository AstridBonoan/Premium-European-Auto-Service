import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/layout/Navbar';
import { ThemeProvider } from '../hooks/ThemeContext';

function renderNavbar() {
  return render(
    <ThemeProvider>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('Navbar', () => {
  it('renders the company brand name', () => {
    renderNavbar();
    expect(screen.getByText('Apex European Motors')).toBeInTheDocument();
  });

  it('includes primary navigation links', () => {
    renderNavbar();
    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /services/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /booking/i }).length).toBeGreaterThan(0);
  });

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const openBtn = screen.getByRole('button', { name: /open menu/i });
    await user.click(openBtn);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
  });
});
