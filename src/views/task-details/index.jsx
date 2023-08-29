
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Container from "@components/container";
import { Animated, Button, Pressable, Text, TextInput, View, useColorScheme } from "react-native";
import { lightStyles } from "./styles";
import COLORS from "@utils/colors";
import DatePicker from "react-native-date-picker";
import { formatDate } from "@utils/helper";

export default function(props){
    
    const navigation = useNavigation();

    const [isStartDateOpen, setIsStartDateOpen] = useState(false)
    const [startDate, setStartDate] = useState(null)

    const [isEndDateOpen, setIsEndDateOpen] = useState(false)
    const [endDate, setEndDate] = useState(null)

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

    const _onSelectStartDate = useCallback((date) => {
      setStartDate(date);
    }, [])

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
                  <Text style={styles.dateLabelText}>Start</Text>
                  <View style={[styles.dateValueContainer, !startDate && {backgroundColor: 'transparent'}]}>
                    <Text style={styles.date}>{startDate && formatDate(startDate)}</Text>
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
                <Pressable onPress={_onToggleStartDate} style={styles.dateRow}>
                  <Text style={styles.dateLabelText}>End</Text>
                  <View style={[styles.dateValueContainer, !endDate && {backgroundColor: 'transparent'}]}>
                    <Text style={styles.date}>{endDate && formatDate(endDate)}</Text>
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
            
        </Container>
    )
}