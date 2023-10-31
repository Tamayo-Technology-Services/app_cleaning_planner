import React from 'react';
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

interface SocialButtonsProps {
  onPressFacebook: () => void;
  onPressGoogle: () => void;
  onPressApple: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ onPressFacebook, onPressGoogle, onPressApple, containerStyle }) => {
  return (
    <View style={[styles.socialButtonContainer, containerStyle]}>
      <TouchableOpacity style={styles.socialButton} onPress={onPressFacebook}>
        <Text style={styles.socialButtonText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={onPressGoogle}>
        <Text style={styles.socialButtonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton} onPress={onPressApple}>
        <Text style={styles.socialButtonText}>Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtons;