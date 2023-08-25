import * as React from 'react';
import { Button, Pressable, useColorScheme } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { HOME_SCREEN, ADD_TASK_SCREEN } from '@utils/constant';
import COLORS from '../utils/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// VIEWS
import AddTaskScreen from '../views/add-task';
import HomeScreen from '../views/home';


const Stack = createNativeStackNavigator();

export default AppNavigation = (props) => {
    const theme = useColorScheme();

    return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.light,
              },
            //   headerTintColor: '#fff',
        }}
        initialRouteName={HOME_SCREEN}
        >
            <Stack.Screen
            name={HOME_SCREEN}
            options={({route, navigation}) => ({
            headerTitle: '',
            headerRight: () => (
                <Pressable
                    onPress={() => navigation.push(ADD_TASK_SCREEN)}
                >
                <MaterialCommunityIcons name="note-plus-outline" color={theme === 'dark' ? COLORS.white : COLORS.black } size={24} />
                </Pressable>
                ),
            })}
            
            component={HomeScreen}
            />

            <Stack.Screen
            name={ADD_TASK_SCREEN}
            options={({route, navigation}) => ({
                presentation: 'modal',
                headerTitle: 'Create Task',
                headerStyle: {
                    color: theme === 'dark' ? COLORS.white : COLORS.black
                },
                headerLeft: () => (
                    <Button
                    color={COLORS.red}
                    onPress={() => navigation.goBack()}
                    title='Cancel'
                    />
                    
                    ),
                }
            )}
            component={AddTaskScreen}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
};