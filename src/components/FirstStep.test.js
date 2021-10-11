import { screen } from '@testing-library/dom';
import FirstStep from './FirstStep';

test('Test for First Step', () => {
  render(<FirstStep />);

  expect(screen.queryByPlaceholderText('Enter your first name')).toBeNull();
  expect(screen.queryByPlaceholderText('Enter your last name')).toBeNull();
  expect(screen.queryByPlaceholderText('Enter your email address')).toBeNull();
});
