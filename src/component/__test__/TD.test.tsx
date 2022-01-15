import React from 'react';
import { render, screen } from '@testing-library/react';
import TD from '../TD';

const mockData: string = "John Smith"

test('renders learn TD text', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TD data={mockData} />
        </tr>
      </tbody>
    </table>
  );

  const linkElement = screen.getByText("John Smith");
  expect(linkElement).toBeInTheDocument();

  //eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
