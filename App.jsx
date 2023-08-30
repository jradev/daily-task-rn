/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  useColorScheme,
} from 'react-native';

import BootSplash from "react-native-bootsplash";


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@app-redux/store';

import AppNavigation from '@navigation/index';

function App(props) {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = setTimeout(() => {BootSplash?.hide({ fade: true })}, 1000);
    return () => clearTimeout(init);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
            <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
