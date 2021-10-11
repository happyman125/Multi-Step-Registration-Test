import { screen } from '@testing-library/dom';
import SecondStep from './SecondStep';

test('Test for First Step', () => {
  render(<SecondStep />);

  expect(screen.getByRole('option', { name: 'country' }).selected).toBe(true);
  expect(screen.getByRole('option', { name: 'state' }).selected).toBe(true);
  expect(screen.getByRole('option', { name: 'city' }).selected).toBe(true);
});
