import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import store from './store';

import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#171717" />
          <Routes />
        </NavigationContainer>
      </>
    </Provider>
  );
};

export default App;
