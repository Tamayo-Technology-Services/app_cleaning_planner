import React from 'react';
import { TouchableOpacity, Text, StyleProp, TextStyle } from 'react-native';
import { styles } from './styles';

interface CreateAccountLinkProps {
  onPress: () => void;
}

const CreateAccountLink: React.FC<CreateAccountLinkProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.createAccountText}>
        Don't have an account? <Text style={styles.createAccountText}>Create an account</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default CreateAccountLink;