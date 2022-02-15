import { render, screen } from '@testing-library/react';
import HSEProject from '../components/HSEProject'

test('renders learn react link', () => {
  render(<HSEProject />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
