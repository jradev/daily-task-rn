import React from 'react';
import { Pressable, Text, View, useColorScheme } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {darkStyles , lightStyles} from './styles';
import COLORS from '@utils/colors';
import { STATUS, TASK_TYPE, VIEW_TASK_SCREEN } from '@utils/constant';
import { useNavigation } from '@react-navigation/native';
import { isSameDay, formatDate } from '@utils/helper';
import { useDispatch } from 'react-redux';
import { viewTask } from '../../redux/action';


const Item = (props) => {
    
    const { task, id } = props;

    const { type, title, status, startDate, endDate } =  task;

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const theme = useColorScheme();

    const styles = theme === 'dark' ? darkStyles : lightStyles;

    const sameDay = isSameDay(startDate, endDate);

    const _onViewTaskDetails = React.useCallback(() => {
        dispatch(viewTask(id));
        navigation.navigate(VIEW_TASK_SCREEN);
    },[task]);

    return(
        <Pressable  onPress={_onViewTaskDetails}>
        <View style={styles.container}>
            <View style={[ styles.separator, {backgroundColor: type === TASK_TYPE.home ? COLORS.lightblue : COLORS.red } ]} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>{title || ''}</Text>
                {
                sameDay 
                ?
                <React.Fragment>
                    <Text style={styles.date}>{formatDate(startDate, 'll')}</Text>
                    <Text style={styles.time}>{formatDate(startDate, 'LT')} - {formatDate(endDate, 'LT')}</Text>
                </React.Fragment>
                :
                <React.Fragment>
                    <Text style={styles.date}>{formatDate(startDate, 'MMM D')} - {formatDate(endDate, 'D YYYY')}</Text>
                    <Text style={styles.time}>{formatDate(startDate, 'LT')} - {formatDate(endDate, 'LT')}</Text>
                </React.Fragment>
                }
            </View>
            <View style={styles.icon}>
                {
                    status === STATUS.done ?
                    <MaterialCommunityIcons name="checkbox-marked-circle-outline" color={COLORS.green} size={32} />
                    : 
                    <View style={lightStyles.empty} />
                }
            </View>
        </View>
        </Pressable>
    )
}

export default React.memo(Item);