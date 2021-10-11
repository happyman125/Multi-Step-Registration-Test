import { screen } from '@testing-library/dom';
import ThirdStep from './ThirdStep';

test('Test for First Step', () => {
  render(<ThirdStep />);

  expect(screen.queryByPlaceholderText('Enter your birthday')).toBeNull();
  expect(screen.queryByPlaceholderText('Enter your mobile number')).toBeNull();
});
