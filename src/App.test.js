import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Hola desde aws Jeru :D");
  expect(linkElement).toBeInTheDocument();
});


test('renders tqm muchito', () => {
  render(<App />);
  const linkElement = screen.getByText("tqm muchitoooooooooo");
  expect(linkElement).toBeInTheDocument();
});
