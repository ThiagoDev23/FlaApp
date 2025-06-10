import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  // Função para aceitar apenas números e formatar como DD/MM/AAAA
  const handleDataNascimento = (text) => {
    // Remove tudo que não for número
    let onlyNumbers = text.replace(/[^0-9]/g, '');
    // Limita a 8 dígitos
    onlyNumbers = onlyNumbers.slice(0, 8);

    // Formata como DD/MM/AAAA
    let formatted = onlyNumbers;
    if (onlyNumbers.length > 4) {
      formatted = onlyNumbers.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    } else if (onlyNumbers.length > 2) {
      formatted = onlyNumbers.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    }
    setDataNascimento(formatted);
  };

// Função para validar se a data é real (DD/MM/AAAA)
function dataValida(data) {
  // data no formato DD/MM/AAAA
  const partes = data.split('/');
  if (partes.length !== 3) return false;
  const [dia, mes, ano] = partes.map(Number);
  if (
    !dia || !mes || !ano ||
    dia < 1 || mes < 1 || mes > 12 || ano < 1900 || ano > 2025
  ) return false;
  // Verifica dias do mês
  const diasNoMes = new Date(ano, mes, 0).getDate();
  return dia <= diasNoMes;
}

  // Validação simples dos campos
const camposPreenchidos = () => {
  const dataNum = dataNascimento.replace(/[^0-9]/g, '');
  return (
    nome.trim() &&
    email.trim() &&
    senha &&
    confirmaSenha &&
    dataNum.length === 8 &&
    senha === confirmaSenha &&
    dataValida(dataNascimento)
  );
};

  const handleCadastro = () => {
    if (!camposPreenchidos()) {
      Alert.alert('Erro', 'Preencha todos os campos corretamente!');
      return;
    }
    // Aqui você pode adicionar a lógica de cadastro com Firebase futuramente
    navigation.navigate('Home');
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
        <Text style={styles.cadastroTitle}>Cadastro</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#ccc"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
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

          <Text style={styles.label}>Confirme a senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme a senha"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={confirmaSenha}
            onChangeText={setConfirmaSenha}
          />

          <Text style={styles.label}>Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#ccc"
            value={dataNascimento}
            onChangeText={handleDataNascimento}
            maxLength={10}
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={[
              styles.cadastrarButton,
              { opacity: camposPreenchidos() ? 1 : 0.5 }
            ]}
            onPress={handleCadastro}
            disabled={!camposPreenchidos()}
          >
            <Text style={styles.cadastrarButtonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginText}>Possui cadastro? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Faça Login</Text>
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
  cadastroTitle: {
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
  cadastrarButton: {
    backgroundColor: '#CF1111',
    width: '100%',
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  cadastrarButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  loginLink: {
    color: '#B0B0B0',
    fontSize: 15,
    fontFamily: 'Roboto',
    textDecorationLine: 'underline',
  },
});

export default Cadastro;