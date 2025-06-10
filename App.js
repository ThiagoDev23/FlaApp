import React from 'react';
import { FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Cadastro from './Cadastro';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider style={styles.fundo}>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.headerTitle}>Fla</Text>
              <Text style={styles.headerTitle2}>App</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cadastroLink}
                  onPress={() => navigation.navigate('Cadastro')}
                >
                  <Text style={styles.cadastroLinkText}>Cadastra-se</Text>
                </TouchableOpacity>
              </View>
            </>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 2,
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
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  loginButton: {
    backgroundColor: '#CF1111',
    width: 197,
    height: 45,
    borderRadius: 16,
    marginTop: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
    cadastroLink: {
    width: 88,
    height: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cadastroLinkText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});