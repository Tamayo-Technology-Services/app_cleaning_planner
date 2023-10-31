import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#3b5998', // Facebook color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})