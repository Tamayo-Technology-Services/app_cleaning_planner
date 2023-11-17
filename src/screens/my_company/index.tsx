import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextInputComponent from '../../components/TextInputComponent';

interface MyCompanyProps {
  onContinue: (data: MyCompanyFields) => void;
}

interface MyCompanyFields {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  state: string;
  city: string;
  zipCode: string;
}

const MyCompanyScreen: React.FC<MyCompanyProps> = ({ onContinue }) => {
  const [myCompany, setMyCompany] = useState<MyCompanyFields>({
    companyName: '',
    phone: '',
    email: '',
    address: '',
    state: '',
    city: '',
    zipCode: '',
  });

  const handleContinue = () => {
    // You can perform any validation or processing here before continuing
    onContinue(myCompany);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>My Company</Text>

      <View>
        <Text style={styles.label}>Company Name</Text>
        <TextInputComponent
          placeholder="Company Name"
          value={myCompany.companyName}
          onChangeText={(text) => setMyCompany({ ...myCompany, companyName: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>Phone</Text>
        <TextInputComponent
          placeholder="Phone"
          value={myCompany.phone}
          onChangeText={(text) => setMyCompany({ ...myCompany, phone: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>E-mail</Text>
        <TextInputComponent
          placeholder="E-mail"
          keyboardType="email-address"
          value={myCompany.email}
          onChangeText={(text) => setMyCompany({ ...myCompany, email: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>Address</Text>
        <TextInputComponent
          placeholder="Address"
          value={myCompany.address}
          onChangeText={(text) => setMyCompany({ ...myCompany, address: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>State</Text>
        <TextInputComponent
          placeholder="State"
          value={myCompany.state}
          onChangeText={(text) => setMyCompany({ ...myCompany, state: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>City</Text>
        <TextInputComponent
          placeholder="City"
          value={myCompany.city}
          onChangeText={(text) => setMyCompany({ ...myCompany, city: text })}
          image_type=''
        />
      </View>

      <View>
        <Text style={styles.label}>Zip Code</Text>
        <TextInputComponent
          placeholder="Zip Code"
          value={myCompany.zipCode}
          onChangeText={(text) => setMyCompany({ ...myCompany, zipCode: text })}
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

export default MyCompanyScreen;
