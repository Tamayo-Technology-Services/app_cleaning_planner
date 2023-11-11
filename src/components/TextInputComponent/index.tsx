import React from 'react';
import { Image, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface TextInputComponentProps extends TextInputProps {
  placeholder: string;
  showIcon?: boolean;
  iconType?: string; // Specify the type of icon, e.g., 'inbox' or 'eye'
  onIconPress?: () => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ placeholder, keyboardType, secureTextEntry, showIcon, iconType, onIconPress, ...rest }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        {...rest}
      />
      <Image source={require('./../../assets/images/bw.png')} style={{position: 'absolute', width: 15, height: 15, right: 20}} />
    </View>
  );
};

export default TextInputComponent;