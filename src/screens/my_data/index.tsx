import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';

interface MyDataProps {
  onContinue: (data: MyDataFields) => void;
}

interface MyDataFields {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  state: string;
  zipCode: string;
}

const MyDataScreen: React.FC<MyDataProps> = ({ onContinue }) => {
  const [myData, setMyData] = useState<MyDataFields>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    zipCode: '',
  });

  const handleContinue = () => {
    // You can perform any validation or processing here before continuing
    onContinue(myData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>My Data</Text>

      <View>
        <Text style={styles.label}>First Name</Text>
        <TextInputComponent
          placeholder="First Name"
          value={myData.firstName}
          onChangeText={(text) => setMyData({ ...myData, firstName: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>Last Name</Text>
        <TextInputComponent
          placeholder="Last Name"
          value={myData.lastName}
          onChangeText={(text) => setMyData({ ...myData, lastName: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>Phone</Text>
        <TextInputComponent
          placeholder="Phone"
          value={myData.phone}
          onChangeText={(text) => setMyData({ ...myData, phone: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInputComponent
          placeholder="E-mail"
          keyboardType="email-address"
          value={myData.email}
          onChangeText={(text) => setMyData({ ...myData, email: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>Address</Text>
        <TextInputComponent
          placeholder="Address"
          value={myData.address}
          onChangeText={(text) => setMyData({ ...myData, address: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>State</Text>
        <TextInputComponent
          placeholder="State"
          value={myData.state}
          onChangeText={(text) => setMyData({ ...myData, state: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>Zip Code</Text>
        <TextInputComponent
          placeholder="Zip Code"
          value={myData.zipCode}
          onChangeText={(text) => setMyData({ ...myData, zipCode: text })}
          image_type=''
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
  },
  screenTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  continueButton: {
    backgroundColor: '#0070F4',
    paddingVertical: 15,
    borderRadius: 7,
    marginTop: 20,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
  },
};

export default MyDataScreen;