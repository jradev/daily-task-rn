import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { formatDate } from '@utils/helper';
import { TASK_TYPE } from '@utils/constant';
import COLORS from "@utils/colors";


const PressableItem = (props) => {
    const { label, value, onPress = () => {}, type = 'date' } = props;

    const formattedValue = formatDate(value);

    const valueIndicatorStyle = type === 'task' ? {
        backgroundColor: value === TASK_TYPE.home ? 
        COLORS.lightblue : 
        COLORS.red } : {};

    return(
        <React.Fragment>
            <Pressable onPress={onPress} style={styles.dateRow}>
                <Text style={styles.labelText}>{label}</Text>
                {
                type == 'task' 
                ?
                <View style={[styles.valueContainer, styles.typeContainer]}>
                    <Text style={[styles.value, { textTransform: 'capitalize' }]}>{value}</Text>
                    <View style={[styles.valueIndicator, valueIndicatorStyle ]} />
                </View>
                :
                <View style={[styles.valueContainer, !value && {backgroundColor: 'transparent'}]}>
                    {value && <Text style={styles.value}>{formattedValue}</Text>}
                </View>
                }

            </Pressable>
        </React.Fragment>
    )
}

export default PressableItem;