import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../components/Home';

test('Renders Title on Home Page', () => {
  const { getByText } = render(<Home />);
  const Text = getByText(/Welcome to Tech Explorer/i);
  expect(Text).toBeInTheDocument();
});
