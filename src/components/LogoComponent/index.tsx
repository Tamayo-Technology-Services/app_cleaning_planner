import React from 'react';
import { View, Text, Image } from 'react-native';
import { loginStyles } from './styles';

const LogoComponent: React.FC = () => {
  return (
    <View style={loginStyles.logoContainer}>
      {/* <View style={styles.logoContainer}>
      </View> */}
      <Image source={require('./../../assets/images/bw.png')} style={loginStyles.logo} />
    </View>
  );
};

export default LogoComponent;