
import React, { useCallback, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Container from "@components/container";
import { Alert, Button, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { lightStyles } from "./styles";
import COLORS from "@utils/colors";
import { formatDate } from "@utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { STATUS, ADD_EDIT_TASK_SCREEN, TASK_TYPE } from "@utils/constant";
import { doneTask, deleteTask } from "@app-redux/action";

export default function TaskDetailsScreen(props){
    
    const navigation = useNavigation();

    const selectedTask = useSelector(store => store.task);

    const dispatch = useDispatch();
    const { task } = selectedTask;
    const styles = lightStyles;

    useLayoutEffect(() => {
       initHeader();
    }, [navigation]);

    const initHeader = useCallback(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button 
                title="Edit"
                onPress={_onEditTask}
                />
            ),
        });
    }, [navigation]);

    const _onEditTask = useCallback(() => {
        navigation.navigate(ADD_EDIT_TASK_SCREEN, {
            isEditing: true
        });
    }, []);

    const _onDeleteTask = useCallback(() => {

        Alert.alert('Confirmation', 'Are you sure you want to delete this task?', [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {
                dispatch(deleteTask(selectedTask?.id));
                navigation?.goBack();
            }},
        ]);

    }, [selectedTask]);

    const _onMarkAsDone = useCallback(() => {

        Alert.alert('Confirmation', 'Are you sure you want to mark this task as done?', [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {
                dispatch(doneTask(selectedTask?.id));
            }},
        ]);
    }, [selectedTask]);

    return (
        <Container>
            <View style={{backgroundColor: task?.type === TASK_TYPE.home ? COLORS.lightblue: COLORS.red, height: 2}} />
            <View style={styles.container}>
                <Text style={styles.title}>{task?.title}</Text>
                {task?.description && task?.description?.trim() !== '' && <Text style={styles.description}>{task?.description}</Text>}
            </View>
            <View style={styles.container}>
                <Text style={styles.date}>{formatDate(new Date(), 'LLLL')}</Text>
            </View>

            {
            task?.status === STATUS.done 
            ? 
            <View style={styles.status}>
                <MaterialCommunityIcons name="checkbox-marked-circle-outline" color={COLORS.green} size={48} />
            </View>
            :
            <View style={styles.action}>
                <Button 
                title="Mark as done"
                onPress={_onMarkAsDone}
                />
            </View>
            }
            <View style={styles.deleteTask}>
            <Button 
            color={COLORS.red}
            onPress={_onDeleteTask}
            title="Delete task"
            />
            </View>
        </Container>
    )
}