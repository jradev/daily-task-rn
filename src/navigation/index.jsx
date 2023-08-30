import * as React from 'react';
import { Button, Pressable, useColorScheme } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { HOME_SCREEN, ADD_EDIT_TASK_SCREEN, VIEW_TASK_SCREEN } from '@utils/constant';
import COLORS from '../utils/colors';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// VIEWS
import AddEditTaskScreen from '../views/add-edit-task';
import HomeScreen from '../views/home';
import TaskDetailsScreen from '../views/task-details';


const Stack = createNativeStackNavigator();

export default AppNavigation = (props) => {
    const theme = useColorScheme();

    const renderHomeRight = (navigation) => {
        return (
            <Pressable
                onPress={() => navigation.push(ADD_EDIT_TASK_SCREEN)}
            >
            <MaterialCommunityIcons name="note-plus-outline" color={theme === 'dark' ? COLORS.white : COLORS.black } size={24} />
            </Pressable>

        );
    }

    const renderCreateTaskLeftHeader = () => (
        <Button
        color={COLORS.red}
        onPress={() => navigation.goBack()}
        title='Cancel'
        />
    );

    return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: theme === 'dark' ? COLORS.dark : COLORS.light,
            },
            headerTitleAlign: 'center',
        }}
        initialRouteName={HOME_SCREEN}
        >
            <Stack.Screen
            name={HOME_SCREEN}
            options={({route, navigation}) => ({
            headerTitle: '',
            headerRight: () => renderHomeRight(navigation),
            })}
            
            component={HomeScreen}
            />

            <Stack.Screen
            name={ADD_EDIT_TASK_SCREEN}
            options={({route, navigation}) => ({
                presentation: 'modal',
                headerTitle: 'Create Task',
                headerStyle: {
                    color: theme === 'dark' ? COLORS.white : COLORS.black
                },
                headerLeft: () => renderCreateTaskLeftHeader(),
                }
            )}
            component={AddEditTaskScreen}
            />

            <Stack.Screen
            name={VIEW_TASK_SCREEN}
            options={({route, navigation}) => ({
                presentation: 'card',
                headerTitle: 'Task Details',
                headerStyle: {
                    color: theme === 'dark' ? COLORS.white : COLORS.black
                },

                }
            )}
            component={TaskDetailsScreen}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
};