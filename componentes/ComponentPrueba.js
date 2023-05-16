import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuHamburguesa = () => {
  const opcionesMenu = [
    { id: 1, nombre: 'Inicio' },
    { id: 2, nombre: 'Menú' },
    { id: 3, nombre: 'Promociones' },
    { id: 4, nombre: 'Contacto' },
    { id: 5, nombre: 'Cerrar sesión' }
  ];

  const handleOpcionSeleccionada = (opcion) => {
    // Lógica para manejar la selección de la opción del menú
    console.log('Opción seleccionada:', opcion);
  };

  return (
    <View style={styles.container}>
      {opcionesMenu.map((opcion) => (
        <TouchableOpacity
          key={opcion.id}
          style={styles.opcion}
          onPress={() => handleOpcionSeleccionada(opcion)}
        >
          <Text style={styles.textoOpcion}>{opcion.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opcion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textoOpcion: {
    fontSize: 18,
  },
});

export default MenuHamburguesa;
