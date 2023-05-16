import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" Mayoristas categorias limpieza art  varios" component={Home} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
