import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect'; 
import { act } from 'react-test-renderer';
import TextInputComponent from '../../../src/components/TextInputComponent';
import { styles } from '../../../src/components/TextInputComponent/styles';

describe('TextInputComponent', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInputComponent placeholder="Enter text" keyboardType="default" secureTextEntry={false} />
    );
    const input = getByPlaceholderText('Enter text');
    expect(input).toBeTruthy();
  });

  test('renders with secureTextEntry', () => {
    const { getByPlaceholderText } = render(
      <TextInputComponent placeholder="Password" keyboardType="default" secureTextEntry={true} />
    );
    const input = getByPlaceholderText('Password');
    expect(input).toHaveProp('secureTextEntry', true);
  });

  test('handles input change correctly', async () => {
    let inputText = '';

    const { getByPlaceholderText } = render(
      <TextInputComponent
        placeholder="Enter text"
        keyboardType="default"
        secureTextEntry={false}
        onChangeText={(text) => {
          inputText = text;
        }}
      />
    );
    const input = getByPlaceholderText('Enter text');

    await act(async () => {
      fireEvent.changeText(input, 'Test Input after 500ms');
      await new Promise(resolve => setTimeout(resolve, 500));
    });

    expect(inputText).toEqual('Test Input after 500ms');
  });

  test('applies styles correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInputComponent placeholder="Enter text" keyboardType="default" secureTextEntry={false} />
    );
    const input = getByPlaceholderText('Enter text');
    expect(input).toHaveStyle(styles.input);
  });
});