import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  socialButton: {
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
  
    borderColor: '#F1F1F1',
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  socialButtonImage: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
  }
})