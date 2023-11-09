import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LogoComponent from '../../components/LogoComponent';
import TextInputComponent from '../../components/TextInputComponent';
import SocialButtons from '../../components/SocialButtons';
import CreateAccountLink from '../../components/CreateAccountLink';

interface RegisterProps {
  onRegister: (email: string, password: string, confirm_password: string) => void;
}

const RegisterScreen: React.FC<RegisterProps> = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Perform authentication logic here, e.g., call an API to validate credentials
    // For simplicity, always consider it successful for this example
    onRegister(email, password, confirm_password);
  };

  const handleSocialMediaLogin = (socialMedia: string) => {
    // Handle social media login based on the selected platform
    // For example, you can implement OAuth authentication for each platform
  };

  return (
    <View style={styles.container}>
        <LogoComponent />
        <Text>Register</Text>
        <TextInputComponent placeholder="Email" keyboardType="email-address" />
        <TextInputComponent placeholder="Password" secureTextEntry />
        <TextInputComponent placeholder="Confirm Password" secureTextEntry />

        {/* <Button title="Login" onPress={handleLogin} /> */}
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or Register with:</Text>
        <SocialButtons
            onPressFacebook={() => handleSocialMediaLogin('facebook')}
            onPressGoogle={() => handleSocialMediaLogin('google')}
            onPressApple={() => handleSocialMediaLogin('apple')}
        />
    </View>
  );
};

export default RegisterScreen;