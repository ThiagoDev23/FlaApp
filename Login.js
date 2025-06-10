import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Tela de Login</Text>
    <Text style={styles.headerTitle}>Fla</Text>
    <Text style={styles.headerTitle2}>App</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 24
  },
  headerTitle: {
    color: '#CF1111',
    fontSize: 40,
    fontWeight: 'bold', 
    marginTop: 120,
    marginLeft: 150,
    width: 83,
    height: 48,
  },
  headerTitle2: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold', 
    marginLeft: 204,
    marginTop: -46,
    width: 83,
    height: 48,
  },
});

export default Login;