import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#171717" />
        <Routes />
      </>
    </NavigationContainer>
  );
};

export default App;
