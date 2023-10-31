import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from './styles';

interface HomeScreenProps {
    onLogout: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onLogout }) => {
    return(
        <View style={styles.content}>
          <Text>Welcome to the Home Screen!</Text>
          <Button title="Logout" onPress={onLogout} />
        </View>
    )
}

export default HomeScreen;