import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  const goToPage2 = () => {
    navigation.navigate('Page2');
  };

  const goToPage3 = () => {
    navigation.navigate('Page3');
  };

  return (
    <View>
      <Text>Página 1 - Home</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          borderRadius: 10,
          overflow: 'hidden',
          marginTop: 10,
          width: 200,
        }}
        onPress={goToPage2}
      >
        <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>
          mayorista 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          borderRadius: 20,
          overflow: 'hidden',
          marginTop: 10,
          width: 150,
        }}
        onPress={goToPage3}
      >
        <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>
          mayorista 2
        </Text>
      </TouchableOpacity>
    </View>
  );
}
