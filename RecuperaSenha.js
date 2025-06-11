import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RecuperaSenha = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.headerTitle}>
        <Text style={{ color: '#CF1111' }}>Fla</Text>
        <Text style={{ color: 'white' }}>App</Text>
      </Text>
    </TouchableOpacity>
    <Text style={styles.infoText}>
      Enviamos para o seu endereço de email um link{'\n'}
      para você alterar sua senha !
    </Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.buttonText}>Tentar entrar novamente</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 48,
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#CF1111',
    width: 270,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});

export default RecuperaSenha;