
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Container from "@components/container";
import { Animated, Button, Pressable, Text, TextInput, View, useColorScheme } from "react-native";
import { lightStyles } from "./styles";
import COLORS from "@utils/colors";
import DatePicker from "react-native-date-picker";
import { formatDate } from "@utils/helper";
import { Picker } from "@react-native-picker/picker";
import { TASK_TYPE } from "../../utils/constant";

export default function(props){
    
    const navigation = useNavigation();

    const [isStartDateOpen, setIsStartDateOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [taskType, setTaskType] = useState('home');

    const [isEndDateOpen, setIsEndDateOpen] = useState(false);
    const [isTaskTypeOpen, setIsTaskTypeOpen] = useState(false);
    const [endDate, setEndDate] = useState(null);

    const theme = useColorScheme();

    const styles = lightStyles;

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button 
            title="Add"
            disabled={true}
            />
          ),
        });
      }, [navigation]);

    const _onToggleStartDate = useCallback(() => {
      if(!startDate) setStartDate(new Date())
      setIsStartDateOpen(date => !date);
    }, [isStartDateOpen]);

    const _onToggleEndDate = useCallback(() => {
      if(!endDate) setEndDate(new Date(new Date().setHours((new Date()).getHours() + 1)));
      setIsEndDateOpen(date => !date);
    }, [isEndDateOpen]);

    const _onToggleTaskTask = useCallback(() => {
      setIsTaskTypeOpen(open => !open);
    }, []);

    const _onSelectStartDate = useCallback((date) => {
      setStartDate(date);
    }, []);

    const _onSelectEndDate = useCallback((date) => {
      setEndDate(date);
    }, [])

    return (
        <Container>
            <View style={styles.container}>
              <TextInput 
              placeholderTextColor={theme === 'dark' ? COLORS.lightgray : COLORS.placeholder}
              placeholder="Task Title"
              style={styles.title}
              />
              <TextInput 
              placeholderTextColor={theme === 'dark' ? COLORS.lightgray : COLORS.placeholder}
              placeholder="Description"
              style={styles.description}
              multiline={true}
              />
            </View>

            <View style={styles.container}>
              <View style={styles.dateItem}>
                <Pressable onPress={_onToggleStartDate} style={styles.dateRow}>
                  <Text style={styles.labelText}>Start</Text>
                  <View style={[styles.valueContainer, !startDate && {backgroundColor: 'transparent'}]}>
                    <Text style={styles.value}>{startDate && formatDate(startDate)}</Text>
                  </View>
                </Pressable>
                {isStartDateOpen && <Animated.View style={styles.picker}>
                  <DatePicker
                    mode='datetime'
                    date={startDate}
                    onDateChange={_onSelectStartDate}

                  />
                </Animated.View>}
              </View> 
              <View style={[styles.dateItem, styles.lastItem]}>
                <Pressable onPress={_onToggleEndDate} style={styles.dateRow}>
                  <Text style={styles.labelText}>End</Text>
                  <View style={[styles.valueContainer, !endDate && {backgroundColor: 'transparent'}]}>
                    <Text style={styles.value}>{endDate && formatDate(endDate)}</Text>
                  </View>
                </Pressable>
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
                <Pressable onPress={_onToggleTaskTask} style={styles.dateRow}>
                  <Text style={styles.labelText}>Type</Text>
                  <View style={[styles.valueContainer, styles.typeContainer]}>
                    <Text style={[styles.value, { textTransform: 'capitalize' }]}>{taskType || ''}</Text>
                    <View style={[styles.valueIndicator, {backgroundColor: taskType === TASK_TYPE.home ? COLORS.lightblue : COLORS.red }]} />
                  </View>
                </Pressable>
                {isTaskTypeOpen && <View style={styles.typePicker}>
                  <Picker
                    selectedValue={taskType}
                    onValueChange={(itemValue, itemIndex) =>
                  setTaskType(itemValue)
                    }>
                    <Picker.Item label="Home" value="home" />
                    <Picker.Item label="Work" value="work" />
                  </Picker>
                </View>}
              </View> 
            
            </View>
            
        </Container>
    )
}