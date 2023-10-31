import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

interface TextInputComponentProps extends TextInputProps {
  placeholder: string;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ placeholder, keyboardType, secureTextEntry, ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      {...rest}
    />
  );
};

export default TextInputComponent;