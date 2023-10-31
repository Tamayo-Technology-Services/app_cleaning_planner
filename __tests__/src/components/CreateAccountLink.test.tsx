import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CreateAccountLink from '../../../src/components/CreateAccountLink';

describe('CreateAccountLink component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<CreateAccountLink onPress={() => {}} />);
    
    // Ensure the component renders the text correctly
    expect(getByText("Don't have an account? Create an account")).toBeTruthy();
  });

  test('onPress event is triggered', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CreateAccountLink onPress={onPressMock} />);
    
    // Simulate a press event on the TouchableOpacity component
    fireEvent.press(getByText("Create an account"));

    // Ensure the onPress function is called when TouchableOpacity is pressed
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});