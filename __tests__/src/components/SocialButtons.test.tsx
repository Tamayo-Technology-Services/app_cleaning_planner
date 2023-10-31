import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import SocialButtons from '../../../src/components/SocialButtons';
import { styles } from '../../../src/components/SocialButtons/styles';

describe('SocialButtons', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <SocialButtons onPressFacebook={() => {}} onPressGoogle={() => {}} onPressApple={() => {}} />
    );
    expect(getByText('Facebook')).toBeTruthy();
    expect(getByText('Google')).toBeTruthy();
    expect(getByText('Apple')).toBeTruthy();
  });

  test('matches snapshot', () => {
    const { toJSON } = render(
      <SocialButtons onPressFacebook={() => {}} onPressGoogle={() => {}} onPressApple={() => {}} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('calls onPress functions correctly', () => {
    const onPressFacebookMock = jest.fn();
    const onPressGoogleMock = jest.fn();
    const onPressAppleMock = jest.fn();

    const { getByText } = render(
      <SocialButtons
        onPressFacebook={onPressFacebookMock}
        onPressGoogle={onPressGoogleMock}
        onPressApple={onPressAppleMock}
      />
    );

    fireEvent.press(getByText('Facebook'));
    fireEvent.press(getByText('Google'));
    fireEvent.press(getByText('Apple'));

    expect(onPressFacebookMock).toHaveBeenCalled();
    expect(onPressGoogleMock).toHaveBeenCalled();
    expect(onPressAppleMock).toHaveBeenCalled();
  });
});