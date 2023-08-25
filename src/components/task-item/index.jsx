import React, { useEffect } from 'react';
import { Text, View, useColorScheme } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {darkStyles , lightStyles} from './styles';
import COLORS from '@utils/colors';
import { STATUS } from '@utils/constant';


const Item = (props) => {
    
    const { title, status } =  props;
    const theme = useColorScheme();

    const styles = theme === 'dark' ? darkStyles : lightStyles;

    return(
        <View style={styles.container}>
            <View style={styles.separator} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>{title || 'Meralco Bill Payment - July 2023 Billing'}</Text>
                <Text style={styles.date}>Aug 25, 2023</Text>
                <Text style={styles.time}>10:00 AM - 9:00 PM</Text>
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
    )
}

export default React.memo(Item);