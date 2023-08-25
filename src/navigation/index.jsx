import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/home';
import { HOME_SCREEN } from '@utils/constant';

const Stack = createNativeStackNavigator();

export default AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitle: ''
      }}
      initialRouteName={HOME_SCREEN}
      >
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};