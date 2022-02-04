import { render, screen, fireEvent } from '@testing-library/react';
import SearchText, { Search } from '../SearchText';
import userEvent from '@testing-library/user-event';

describe.skip('SearchText', () => {
  test('renders App Textbox', () => {
    render(<SearchText />);

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
  });

  test('calls the onChange callback MOCK handler', () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>Search:</Search>
    );

    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'JavaScript' },
    // });
    userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    expect(onChange).toHaveBeenCalledTimes(10);
  });

});