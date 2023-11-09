import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';

interface PasswordResetFormState {
  email: string;
}

const PasswordResetForm: React.FC = () => {
  const [state, setState] = useState<PasswordResetFormState>({
    email: '',
  });

  const handleEmailChange = (text: string) => {
    setState((prev) => ({
      ...prev,
      email: text,
    }));
  };

  const handleSendEmail = () => {
    // TODO: Send an email to reset the password
  };

  return (
    <View style={{ paddingTop: 200 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Enter your email address and we will send you a link to reset your password.</Text>
      <TextInputComponent placeholder="Email" keyboardType="email-address" />
      <Button
        title="Send email"
        onPress={handleSendEmail}
      />
    </View>
  );
};

export default PasswordResetForm;