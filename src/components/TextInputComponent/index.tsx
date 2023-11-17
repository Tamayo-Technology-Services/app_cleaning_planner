import React from 'react';
import { Image, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface TextInputComponentProps extends TextInputProps {
  image_type: string;
  placeholder: string;
  showIcon?: boolean;
  iconType?: string; // Specify the type of icon, e.g., 'inbox' or 'eye'
  onIconPress?: () => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({ placeholder, keyboardType, secureTextEntry, showIcon, iconType, onIconPress, image_type, ...rest }) => {
  let image = require('./../../assets/images/bw.png');
  switch (image_type) {
    case 'email':
      image = require('./../../assets/images/icon-email.png');
      break;
    case 'password':
      image = require('./../../assets/images/icon-password.png');
      break;
    default:
      image = require('./../../assets/images/bw.png');
      break;
  }

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
      <Image source={image} style={{position: 'absolute', right: 30, top: 19}} />
    </View>
  );
};

export default TextInputComponent;