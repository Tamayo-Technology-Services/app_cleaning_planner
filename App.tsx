import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/login';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Perform authentication logic here
    // For simplicity, always consider it successful for this example
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <View style={styles.content}>
          <Text>Welcome to the Home Screen!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;