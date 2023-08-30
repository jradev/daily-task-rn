
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Container from "@components/container";
import { Animated, Button, ScrollView, TextInput, View, useColorScheme } from "react-native";
import { lightStyles } from "./styles";
import COLORS from "@utils/colors";
import DatePicker from "react-native-date-picker";
import { STATUS } from "@utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "@app-redux/action";
import TypePicker from "../../components/type-picker";
import PressableItem from "../../components/pressable-item";

export default function AddEditTaskScreen(props){
    
    const navigation = useNavigation();

    const { route } = props;
    
    const isEditing = route?.params?.isEditing || false;

    const selectedTask = useSelector(store => store.task);

    const [isStartDateOpen, setIsStartDateOpen] = useState(false);
    const [startDate, setStartDate] = useState(isEditing ? selectedTask?.task?.startDate :  new Date());
    const [taskType, setTaskType] = useState(isEditing ? selectedTask?.task?.type : 'home');

    const [taskTitle, setTaskTitle] = useState(isEditing ? selectedTask?.task?.title : null);
    const [taskDescription, setTaskDescription] = useState(isEditing ? selectedTask?.task?.description : '');

    const [isEndDateOpen, setIsEndDateOpen] = useState(false);
    const [isTaskTypeOpen, setIsTaskTypeOpen] = useState(false);
    const [endDate, setEndDate] = useState(isEditing ? new Date(selectedTask?.task?.endDate) : new Date(new Date().setHours((new Date()).getHours() + 1)));

    const dispatch = useDispatch();

    const theme = useColorScheme();

    const styles = lightStyles;

    useLayoutEffect(() => {
        initHeader();
    }, [navigation, startDate, endDate, taskTitle, taskDescription, taskType, isEditing]);


    const initHeader = useCallback(() => {
      navigation.setOptions({
        headerTitle: `${isEditing ? 'Update' : 'Create'} Task`,
        headerRight: () => (
          <Button 
          title={isEditing ? 'Update' : 'Add'}
          disabled={!taskTitle || !startDate}
          onPress={() => _onTaskAction()}
          />
        ),
      });
    }, [navigation, startDate, endDate, taskTitle, taskDescription, taskType, isEditing]);


    const _onToggleStartDate = useCallback(() => {
      if(!startDate) setStartDate(new Date())
      setIsStartDateOpen(date => !date);
    }, [isStartDateOpen]);

    const _onToggleEndDate = useCallback(() => {
      if(!endDate) setEndDate(new Date(new Date(startDate).setHours((new Date(startDate)).getHours() + 1)));
      setIsEndDateOpen(date => !date);
    }, [isEndDateOpen, startDate]);

    const _onToggleTaskTask = useCallback(() => {
      setIsTaskTypeOpen(open => !open);
    }, []);

    const _onSelectStartDate = useCallback((date) => {
      setStartDate(date);
    }, []);

    const _onSelectEndDate = useCallback((date) => {
      setEndDate(date);
    }, []);

    const _onTaskAction = useCallback(() => {
      if(isEditing){
        dispatch(updateTask(selectedTask?.id, {
          title: taskTitle,
          description: taskDescription,
          startDate: startDate,
          endDate: endDate ? endDate : new Date(new Date(startDate).setHours((new Date(startDate)).getHours() + 1)),
          type: taskType,
          status: selectedTask.status,
        }));
        navigation.pop(2);
      }else{
        dispatch(addTask({
          title: taskTitle,
          description: taskDescription,
          startDate: startDate,
          endDate: endDate ? endDate : new Date(new Date(startDate).setHours((new Date(startDate)).getHours() + 1)),
          type: taskType,
          status: STATUS.upcoming,
        }));
        navigation.goBack();
      }

    }, [startDate, endDate, taskTitle, taskDescription, taskType, isEditing]);

    const _onChangeTitle = useCallback((value) => setTaskTitle(value),[taskTitle]);

    const _onChangeDescription = (value) => setTaskDescription(value);

    return (
        <Container>
          <ScrollView style={styles.scroll}>
            <View style={styles.container}>
              <TextInput 
              defaultValue={taskTitle}
              onChangeText={_onChangeTitle}
              placeholderTextColor={theme === 'dark' ? COLORS.lightgray : COLORS.placeholder}
              placeholder="Task Title"
              style={styles.title}
              />
              <TextInput 
              defaultValue={taskDescription}
              onChangeText={_onChangeDescription}
              placeholderTextColor={theme === 'dark' ? COLORS.lightgray : COLORS.placeholder}
              placeholder="Description"
              style={styles.description}
              multiline={true}
              numberOfLines={6}
              />
            </View>

            <View style={styles.container}>
              <View style={styles.dateItem}>
                <PressableItem 
                label={'Start'}
                value={startDate}
                onPress={_onToggleStartDate}
                />
                {isStartDateOpen && <Animated.View style={styles.picker}>
                  <DatePicker
                    mode='datetime'
                    date={startDate}
                    onDateChange={_onSelectStartDate}

                  />
                </Animated.View>}
              </View> 
              <View style={[styles.dateItem, styles.lastItem]}>
                <PressableItem 
                label={'End'}
                value={endDate}
                onPress={_onToggleEndDate}
                />
                {isEndDateOpen && <Animated.View style={styles.picker}>
                  <DatePicker
                    mode='datetime'
                    date={endDate}
                    onDateChange={_onSelectEndDate}

                  />
                </Animated.View>}
              </View>              
            </View>

            <View style={styles.container}>
            <View style={styles.typeItem}>
              <PressableItem 
                label={'Type'}
                value={taskType}
                type='task'
                onPress={_onToggleTaskTask}
                />
              <TypePicker 
              open={isTaskTypeOpen}
              value={taskType}
              setTaskType={setTaskType}
              />
  
              </View> 
            
            </View>

            </ScrollView>
            
        </Container>
    )
}