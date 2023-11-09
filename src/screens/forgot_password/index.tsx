import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';
import Modal from 'react-native-modal';

interface PasswordResetFormState {
  email: string;
}

const PasswordResetForm: React.FC = () => {
const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };


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
    handleShowModal();
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
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
            <Text>Email sent!</Text>
            <Button title="X" onPress={handleHideModal} />
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  forgotPasswordText: {
    color: '#000000',
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default PasswordResetForm;

