import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


import flamengo from './assets/flamengo.png';
import fortaleza from './assets/fortaleza.png';
import botafogo from './assets/botafogo.png';
import tachira from './assets/tachira.png';
import brasileirao from './assets/brasileirao.jpg';
import libertadores from './assets/libertadores.png';
import copadobrasil from './assets/copadobrasil.png';
import fotouser from './assets/fotouser.jpg';



const nomeUsuario = "Thiago"; 

function ConteudoHome({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>

      <View style={styles.header}>
        <Text style={styles.logo}>
          <Text style={{ color: '#CF1111' }}>Fla</Text>
          <Text style={{ color: 'white' }}>App</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

 
      <Text style={styles.sectionTitle}>Últimos Jogos</Text>
      <Text style={styles.sectionSubtitle}>Brasileirão Série A <Text style={styles.trophy}>🏆</Text></Text>
      <View style={styles.scoreRow}>
        <Image source={flamengo} style={styles.teamLogo} />
        <Text style={styles.score}>5 x 0</Text>
        <Image source={fortaleza} style={styles.teamLogo} />
      </View>
      <Image source={brasileirao} style={styles.tabelaImg} />

      <Text style={styles.sectionSubtitle}>Libertadores <Text style={styles.trophy}>🏆</Text></Text>
      <View style={styles.scoreRow}>
        <Image source={flamengo} style={styles.teamLogo} />
        <Text style={styles.score}>4 x 2</Text>
        <Image source={tachira} style={styles.teamLogo} />
      </View>
      <Image source={libertadores} style={styles.tabelaImgL} />
    
      <Text style={styles.sectionSubtitle}>Copa do Brasil <Text style={styles.trophy}>🏆</Text></Text>
      <View style={styles.scoreRow}>
        <Image source={flamengo} style={styles.teamLogo} />
        <Text style={styles.score}>1 x 0</Text>
        <Image source={botafogo} style={styles.teamLogo} />
      </View>
      <Image source={copadobrasil} style={styles.tabelaImg} />

      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('ConteudoHome')}>
        <Text style={styles.footerLogo}>
          <Text style={{ color: '#CF1111' }}>Fla</Text>
          <Text style={{ color: 'white' }}>App</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: '#CF1111' }} style={styles.drawer}>
      <View style={styles.drawerHeaderRow}>
        <Image source={fotouser} style={styles.drawerUserImg} />
        <Text style={styles.drawerUserText}>Olá {nomeUsuario}</Text>
      </View>
      <DrawerItem
        label="Home"
        labelStyle={styles.drawerItemLabel}
        onPress={() => props.navigation.navigate('ConteudoHome')}
      />
      <DrawerItem
        label="Artilharia"
        labelStyle={styles.drawerItemLabel}
        onPress={() => props.navigation.navigate('Artilharia')}
      />
      <DrawerItem
        label="Perfil"
        labelStyle={styles.drawerItemLabel}
        onPress={() => props.navigation.navigate('Perfil')}
      />
      <DrawerItem
        label="Sair   ⤴"
        labelStyle={styles.drawerItemLabel}
        onPress={() => props.navigation.navigate('Home')}
      />
      <View style={styles.drawerFooter}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ConteudoHome')}>
          <Text style={styles.footerLogo}>
            <Text style={{ color: 'black' }}>Fla</Text>
            <Text style={{ color: 'white' }}>App</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function HomePage() {
  return (
    <Drawer.Navigator
      initialRouteName="ConteudoHome"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerType: 'front' }}
    >
      <Drawer.Screen name="ConteudoHome" component={ConteudoHome} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 16,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  menuIcon: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,

  },
  sectionSubtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 60,
  },
  trophy: {
    fontSize: 16,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  teamLogo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },
  score: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  footer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  footerLogo: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    margin: 30,
  },
  drawer: {
    borderRadius: 16,
  },
  drawerHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 32,
    backgroundColor: '#CF1111',
    marginBottom: 16,
  },
  drawerUserImg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
    backgroundColor: '#333',
  },
  drawerUserText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  drawerItemLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  drawerFooter: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
   tabelaImg: {
    width: '90%',
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 8,
  },
   tabelaImgL: {
    width: '60%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 8,
  },
});