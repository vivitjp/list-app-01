import { render, screen } from '@testing-library/react';
import Child from '../Child';

test('renders learn react link', () => {
  render(<Child data={"テスト文字列"} />);
  const linkElement = screen.getByText(/テスト文字列/i);
  expect(linkElement).toBeInTheDocument();
});