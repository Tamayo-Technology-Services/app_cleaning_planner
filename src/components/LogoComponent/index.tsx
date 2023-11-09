import React from 'react';
import { View, Text } from 'react-native';
import { loginStyles } from './styles';

const LogoComponent: React.FC = () => {
  return (
    <View style={loginStyles.logoContainer}>
      {/* <View style={styles.logoContainer}>
        <Image source={require('./logo.png')} style={styles.logo} />
      </View> */}
      <Text style={loginStyles.logoText}>Logo</Text>
    </View>
  );
};

export default LogoComponent;