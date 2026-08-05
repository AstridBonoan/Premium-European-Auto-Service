import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import GalleryPage from '../pages/GalleryPage';

describe('Gallery filtering', () => {
  it('filters gallery items by category', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <GalleryPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/20 images/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /^facility$/i }));
    expect(screen.getByText(/5 images/i)).toBeInTheDocument();
    expect(screen.getByText(/atelier service bay/i)).toBeInTheDocument();
  });
});
