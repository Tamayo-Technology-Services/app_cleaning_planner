import React from 'react';
import { TouchableOpacity, Text, View, StyleProp, TextStyle } from 'react-native';
import { styles } from './styles';

interface CreateAccountLinkProps {
  onPress: () => void;
}

const CreateAccountLink: React.FC<CreateAccountLinkProps> = ({ onPress }) => {
  return (
      <View style={{ flexDirection: 'row', left: 15, }}>
        <Text style={styles.text}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.createAccountText}>Create an account</Text>
          </TouchableOpacity>
        </Text>
      </View>
  );
};

export default CreateAccountLink;