import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quiz header', () => {
  render(<App />);
  const header = screen.getByText(/My Questions/i);
  expect(header).toBeInTheDocument();
});
