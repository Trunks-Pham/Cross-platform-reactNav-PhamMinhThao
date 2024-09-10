import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, CheckBox } from 'react-native';

const LoginBTVN = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subHeaderText}>Again!</Text>
      <Text style={styles.subtitle}>Welcome back you've been missed</Text>
      <TextInput style={styles.input} placeholder="Username*" />
      <TextInput style={styles.input} placeholder="Password*" secureTextEntry />
      <View style={styles.options}>
        <CheckBox />
        <Text style={styles.optionText}>Remember me</Text>
        <TouchableOpacity>
          <Text style={styles.optionText}>Forgot the password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or continue with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>don't have an account?</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subHeaderText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2979FF',
    marginBottom: 10,
    width: '100%',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    padding: 10,
    borderRadius: 5,
  },
  googleButton: {
    backgroundColor: '#db4437',
    padding: 10,
    borderRadius: 5,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    width: 100,
  },
  footerText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default LoginBTVN;