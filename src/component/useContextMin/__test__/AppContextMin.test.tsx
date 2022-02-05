import { render, screen } from '@testing-library/react';
import AppContext from '../AppContextMin';

test.skip('renders learn react link', () => {
  render(<AppContext />);
  const linkElement = screen.getByText(/与えた値/i);
  expect(linkElement).toBeInTheDocument();
});
