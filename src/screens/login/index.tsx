import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LogoComponent from '../../components/LogoComponent';
import TextInputComponent from '../../components/TextInputComponent';
import SocialButtons from '../../components/SocialButtons';
import CreateAccountLink from '../../components/CreateAccountLink';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const LoginScreen: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here, e.g., call an API to validate credentials
    // For simplicity, always consider it successful for this example
    onLogin(username, password);
  };
  const handleCreateAccountPress = () => {
    // Handle the action when "Create an account" link is pressed
    // For example, navigate to the registration screen
    // You can implement your own navigation logic here
  };

  const handleSocialMediaLogin = (socialMedia: string) => {
    // Handle social media login based on the selected platform
    // For example, you can implement OAuth authentication for each platform
  };

  return (
    <View style={styles.container}>
        <LogoComponent />
        <Text style={styles.loginText}>Login</Text>
        <TextInputComponent placeholder="Email" keyboardType="email-address" showIcon={true} image_type="email" />
        <TextInputComponent placeholder="Password" secureTextEntry image_type="password" />

        <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        {/* <Button title="Login" onPress={handleLogin} /> */}
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>Or Login with:</Text>
        <SocialButtons
            onPressFacebook={() => handleSocialMediaLogin('facebook')}
            onPressGoogle={() => handleSocialMediaLogin('google')}
            onPressApple={() => handleSocialMediaLogin('apple')}
        />
        <CreateAccountLink onPress={handleCreateAccountPress} />
    </View>
  );
};

export default LoginScreen;