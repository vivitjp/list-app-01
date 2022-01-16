import React from 'react';
import { render, screen } from '@testing-library/react';
import TR from '../TR';
import { ISamplePersonA } from '../dataTypes/sampleData'

const mockData: ISamplePersonA = { last_name: "John", first_name: "Smith" }

test('renders learn TR text', () => {
  render(
    <table>
      <tbody>
        <TR data={mockData} />
      </tbody>
    </table>
  );
  const linkElement = screen.getByText(/John/i);
  expect(linkElement).toBeInTheDocument();

  //eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();
});
