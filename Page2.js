import React from 'react';
import { View, Text, Button , StyleSheet } from 'react-native';
import MenuHamburguesa from './componentes/ComponentPrueba';


export default function Page2({ navigation }) {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <MenuHamburguesa style={styles.menu}/>

     
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 9999,
  },
})
