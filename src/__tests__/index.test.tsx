import { render, screen, waitFor } from '@testing-library/react';

import HomePage from '../pages/index';

import products from '../../data/products.json';
import { Store } from '../state/store';

import '@testing-library/jest-dom';

// Create an render app wrapped with store.
const App = () => {
  return (
    <Store>
      <HomePage products={products} />
    </Store>
  );
};

test('renders a heading', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /Qogita's Collection/i,
  });

  expect(heading).toBeInTheDocument();
});

test('have add button in product card', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.queryAllByTestId('add-button')[0]).toBeInTheDocument();
  });
});

test('have 100 products', async () => {
  render(<App />);

  await waitFor(() => {
    expect(screen.queryAllByTestId('add-button').length).toEqual(100);
  });
});
