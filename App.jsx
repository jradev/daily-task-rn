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

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

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


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          {/* <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            /> */}
            <AppNavigation />
          {/* </SafeAreaView> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
