import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main header', () => {
  render(<App />);
  expect(screen.getByText(/react crud operations/i)).toBeInTheDocument();
});
