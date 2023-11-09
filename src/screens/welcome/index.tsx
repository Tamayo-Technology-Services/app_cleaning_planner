import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const WelcomePage: React.FC = () => {
  return (
    <View style={styles.container}>
        {/* TODO: here should go the LOGO */}
      {/* <Image source={require('./welcome-page.png')} style={styles.image} /> */}
      <Text style={styles.title}>Welcome Belky!</Text>
      <Text style={styles.text}>Now let's register your data</Text>
      <Button title="Continue" onPress={() => {
        // TODO: Navigate to the next screen
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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