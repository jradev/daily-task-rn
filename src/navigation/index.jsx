import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../views/home';
import { HOME_SCREEN } from '@utils/constant';
import COLORS from '../utils/colors';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export default AppNavigation = () => {
    const theme = useColorScheme();

    return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.light,
              },
              headerTintColor: '#fff',
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