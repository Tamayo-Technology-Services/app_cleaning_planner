import React from 'react';
import { View, Text } from 'react-native';
import { loginStyles } from './styles';

const LogoComponent: React.FC = () => {
  return (
    <View style={loginStyles.logoContainer}>
      <Text style={loginStyles.logoText}>Logo</Text>
    </View>
  );
};

export default LogoComponent;