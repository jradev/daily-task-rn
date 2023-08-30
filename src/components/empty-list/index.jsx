import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, useColorScheme } from 'react-native';
import {darkStyles, lightStyles} from './styles';


const EmptyList = (props) => {

    const theme = useColorScheme();

    const styles = theme === 'dark' ? darkStyles : lightStyles;

    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="file-find-outline" color={'rgba(0,0,0,0.7)'} size={72} />
            <Text style={styles.title}>No task found.</Text>
        </View>
    )
}

export default EmptyList;