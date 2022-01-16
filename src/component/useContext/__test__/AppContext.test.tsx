import { render, screen } from '@testing-library/react';
import AppContext from '../AppContext';

test('renders learn react link', () => {
  render(<AppContext />);
  const linkElement = screen.getByText(/User: John/i);
  expect(linkElement).toBeInTheDocument();
});
