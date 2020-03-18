import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#191920',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
