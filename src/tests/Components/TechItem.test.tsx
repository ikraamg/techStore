import React from 'react';
import { render } from '@testing-library/react';
import TechItem from '../../components/TechItem';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const dummyFunc = () => 'called';

const techItem = {
  category: 'Laptops',
  cost: 8000,
  created_at: '2020-10-19T07:54:49.510Z',
  description: '17-inch, Intel i5, 8gb Ram, 256Gb SSD',
  favourite: false,
  id: 5,
  price: 10000,
  title: 'MacBook Pro',
  updated_at: '2020-10-19T07:54:49.510Z',
  user_id: 1,
};

test('renders a techItem', () => {
  const { getByText } = render(
    <TechItem tech={techItem} handleFavourite={dummyFunc} name={false} />,
  );
  const Text = getByText(/Laptops/i);
  expect(Text).toBeInTheDocument();
});
