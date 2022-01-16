import { render, screen } from '@testing-library/react';
import App from './App';

describe("ページ全体の構成チェック", () => {
  test('ページに「HEADER」文字が存在する', () => {
    render(<App />);
    const linkElement = screen.getByText(/HEADER/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('ページに「FOOTER」文字が存在する', () => {
    render(<App />);
    const linkElement = screen.getByText(/FOOTER/i);
    expect(linkElement).toBeInTheDocument();
  });
})

