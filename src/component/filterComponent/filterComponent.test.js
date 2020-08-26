import React from 'react';
import { render } from '@testing-library/react';
import { FilterComponent } from "./filterComponent";

test('renders filter component', () => {
const mockFn = jest.fn();
  const { getByText } = render(<FilterComponent handleFilter={mockFn} />);
  const linkElement = getByText(/Launch Year/i);
  expect(linkElement).toBeInTheDocument();
});
