import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import LogoComponent from '../../../src/components/LogoComponent';
import { loginStyles } from '../../../src/components/LogoComponent/styles';

describe('LogoComponent', () => {
  test('renders correctly', () => {
    const { getByText } = render(<LogoComponent />);
    const logoText = getByText('Logo');
    expect(logoText).toBeTruthy();
  });

  test('matches snapshot', () => {
    const { toJSON } = render(<LogoComponent />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('applies styles correctly', () => {
    const { getByText } = render(<LogoComponent />);
    const logoText = getByText('Logo');
    expect(logoText).toHaveStyle(loginStyles.logoText);
  });
});