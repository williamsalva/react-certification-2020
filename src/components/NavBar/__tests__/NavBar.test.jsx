import React from 'react';
import { render, screen } from '@testing-library/react';

import Navbar from '../Navbar';

test('renders NavBar', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<Navbar />);
});

test('checks if navbar has search box with placeholder text', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<Navbar />);
  const searchInputElement = screen.queryByPlaceholderText(/search/i);
  expect(searchInputElement).toBeInTheDocument();
});
