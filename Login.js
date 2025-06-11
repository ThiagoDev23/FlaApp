import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const camposPreenchidos = () => email.trim() && senha;

  const handleLogin = () => {
    if (!camposPreenchidos()) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }
    // Firebase 
    navigation.navigate('HomePage');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'black' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerTitle}>
            <Text style={{ color: '#CF1111' }}>Fla</Text>
            <Text style={{ color: 'white' }}>App</Text>
          </Text>
        </TouchableOpacity>
        <Text style={styles.loginTitle}>Login</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={[
              styles.entrarButton,
              { opacity: camposPreenchidos() ? 1 : 0.5 }
            ]}
            onPress={handleLogin}
            disabled={!camposPreenchidos()}
          >
            <Text style={styles.entrarButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('RecuperaSenha')}>
          <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.cadastroLinkContainer}>
          <Text style={styles.cadastroText}>Não tem Cadastro? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.cadastroLink}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  loginTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 16,
    fontFamily: 'Roboto',
  },
  form: {
    width: '100%',
    marginTop: 8,
    marginBottom: 16,
  },
  label: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto',
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: 'black',
  },
  entrarButton: {
    backgroundColor: '#CF1111',
    width: '100%',
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  entrarButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  esqueceuSenha: {
    color: '#B0B0B0',
    fontSize: 15,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: 24,
    fontWeight: 'bold',
  },
  cadastroLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  cadastroText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  cadastroLink: {
    color: '#B0B0B0',
    fontSize: 15,
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

export default Login;