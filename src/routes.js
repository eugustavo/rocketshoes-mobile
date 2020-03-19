import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171717',
        },
        headerLeft: null,
        gestureDirection: 'horizontal-inverted',
        header: props => <Header {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
