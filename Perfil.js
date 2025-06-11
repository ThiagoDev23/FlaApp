import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import fotouser from './assets/fotouser.jpg'; 

const Perfil = ({ navigation, route }) => {

  const usuario = {
    nome: route?.params?.nome || 'Nome do Usuário',
    email: route?.params?.email || 'email@exemplo.com',
    nascimento: route?.params?.nascimento || '01/01/2000',
    socio: route?.params?.socio || 'Sim',
  };

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Perfil</Text>

      <View style={styles.profileRow}>
        <Image source={fotouser} style={styles.profileImg} />
        <View>
          <Text style={styles.profileName}>{usuario.nome}</Text>
          <Text style={styles.profileEmail}>{usuario.email}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>SOBRE</Text>
      <Text style={styles.sectionText}>Socio Torcedor - {usuario.socio}</Text>
      <Text style={styles.sectionText}>Data de Nascimento - {usuario.nascimento}</Text>

      <View style={styles.divider} />

      <TouchableOpacity onPress={() => navigation.navigate('RecuperaSenha')}>
        <Text style={styles.link}>Alterar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sairRow} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.sair}>Sair</Text>
        <Text style={styles.sairIcon}>⤴</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.footerLogo}>
          <Text style={{ color: '#CF1111' }}>Fla</Text>
          <Text style={{ color: 'white' }}>App</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
    backgroundColor: '#222',
  },
  profileName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },
  profileEmail: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 15,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginVertical: 12,
  },
  sectionTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 20,
  },
  sectionText: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
  link: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  sairRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  sair: {
    color: '#CF1111',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  sairIcon: {
    color: '#CF1111',
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 16,
  },
  footerLogo: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    padding: 30,
  },
});

export default Perfil;