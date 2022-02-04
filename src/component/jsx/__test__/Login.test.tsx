import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe.skip('Login', () => {
  test('renders App component', async () => {
    render(<Login />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug()
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  });
});