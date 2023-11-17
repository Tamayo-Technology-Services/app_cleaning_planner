import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import LogoComponent from '../../components/LogoComponent';

const WelcomePage: React.FC = () => {
  const handleContinue = () => {
    // Perform authentication logic here, e.g., call an API to validate credentials
    // For simplicity, always consider it successful for this example
    // onLogin(username, password);
  };

  return (
    <View style={styles.container}>
      <LogoComponent />
      <Text style={styles.title}>Welcome Belky!</Text>
      <Text style={styles.text}>Now let's register your data</Text>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.loginButton} onPress={handleContinue}>
            <Text style={styles.loginButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  loginButton: {
    width: '35%',
    backgroundColor: '#0070F4',
    paddingVertical: 10,
    borderRadius: 7,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#000000',
    width: 200,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default WelcomePage;