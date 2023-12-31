import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import PasswordResetForm from './src/screens/forgot_password';
import RegisterScreen from './src/screens/register';
import WelcomePage from './src/screens/welcome';
import MyDataScreen from './src/screens/my_data';
import MyCompanyScreen from './src/screens/my_company';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Perform authentication logic here
    // For simplicity, always consider it successful for this example
    setIsAuthenticated(true);
  };

  const handleRegister = (email: string, password: string, confirm_password: string) => {

  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <HomeScreen onLogout={handleLogout} />
      ) : (
        // <LoginScreen onLogin={handleLogin} />
        // <HomeScreen onLogout={handleLogout} />
        // <PasswordResetForm />
        // <RegisterScreen onRegister={handleRegister} />
        // <WelcomePage />
        // <MyDataScreen onContinue={() => {}} />
        <MyCompanyScreen onContinue={() => {}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;