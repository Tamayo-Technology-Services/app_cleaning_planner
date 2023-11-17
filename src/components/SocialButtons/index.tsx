import React from 'react';
import { View, TouchableOpacity, Image, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

interface SocialButtonsProps {
  onPressFacebook: () => void;
  onPressGoogle: () => void;
  onPressApple: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ onPressFacebook, onPressGoogle, onPressApple, containerStyle }) => {
  const facebookImage = require('./../../assets/images/facebook.png');
  const googleImage = require('./../../assets/images/google.png');
  const appleImage = require('./../../assets/images/apple.png');
  return (
    <View style={[styles.socialButtonContainer, containerStyle]}>
      <TouchableOpacity style={styles.socialButton} onPress={onPressFacebook}>
        <Image source={facebookImage} style={styles.socialButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={onPressGoogle}>
        <Image source={googleImage} style={styles.socialButtonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={onPressApple}>
        <Image source={appleImage} style={styles.socialButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtons;