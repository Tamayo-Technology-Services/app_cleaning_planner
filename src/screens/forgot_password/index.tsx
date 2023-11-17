import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';
import Modal from 'react-native-modal';
import LogoComponent from '../../components/LogoComponent';

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
    <View style={styles.container}>
      <LogoComponent />
      <Text style={styles.forgotPasswordText}>Enter your email address and we will send you a link to reset your password.</Text>
      <TextInputComponent placeholder="Email" keyboardType="email-address" image_type='email' />

      <View style={styles.containerButton}>
          <TouchableOpacity style={styles.loginButton} onPress={handleSendEmail}>
              <Text style={styles.loginButtonText}>Send email</Text>
          </TouchableOpacity>
        </View>
      <Modal isVisible={isModalVisible} style={{alignItems: 'center'}}>
        <View style={styles.modalContent}>
            <Text>Email sent!</Text>
            <Button title="X" onPress={handleHideModal} />
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  loginButtonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500'
  },
  containerButton: {
    marginTop: 15,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  loginButton: {
    width: '35%',
    backgroundColor: '#0070F4',
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    width: '35%',
    backgroundColor: '#0070F4',
    paddingVertical: 10,
    borderRadius: 7,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  forgotPasswordText: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 15,
    textAlign: 'center',
    alignItems: 'center',
    color: '#000000',
    fontSize: 15,
    fontWeight: '400'
  },
  modalContent: {
    textAlign: 'center',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
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

