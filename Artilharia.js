import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import artilharia from './assets/artilharia.jpeg';
import fotouser from './assets/fotouser.jpg';

const nomeUsuario = "Thiago"; 

function ConteudoArtilharia({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>

      <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.logo}>
          <Text style={{ color: '#CF1111' }}>Fla</Text>
          <Text style={{ color: 'white' }}>App</Text>
        </Text>
    </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Artilharia<Text style={styles.ball}>⚽</Text></Text>
      <Text style={styles.sectionSubtitle}>Brasileirão Série A </Text>
        <Image source={artilharia} style={styles.tabelaImg} />

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
        onPress={() => props.navigation.navigate('HomePage')}
      />
      <DrawerItem
        label="Artilharia"
        labelStyle={styles.drawerItemLabel}
        onPress={() => props.navigation.navigate('ConteudoArtilharia')}
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
        <TouchableOpacity onPress={() => props.navigation.navigate('HomePage')}>
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

export default function Artilharia() {
  return (
    <Drawer.Navigator
      initialRouteName="ConteudoArtilharia"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerType: 'front' }}
    >
      <Drawer.Screen name="ConteudoArtilharia" component={ConteudoArtilharia} />
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
    marginTop: 100,

  },
  sectionSubtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 3,
  },
  ball: {
    fontSize: 25,
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
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 8,
    marginTop: 40,
  },
});
