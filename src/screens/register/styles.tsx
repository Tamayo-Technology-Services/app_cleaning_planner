import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  forgotPasswordText: {
    textAlign: 'right',
    marginBottom: 20,
    color: 'blue',
  },
  containerButton: {
    marginTop: 15,
    marginBottom: 30,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  loginButton: {
    width: '35%',
    backgroundColor: '#0070F4',
    paddingVertical: 10,
    borderRadius: 7,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    color: 'black',
    left: 30,
    marginBottom: 15,
    fontSize: 12,
    fontWeight: '300'
  },
  loginText:{
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 30,
    paddingBottom: 10,

  }
})