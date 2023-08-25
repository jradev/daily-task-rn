import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import {darkStyles, lightStyles} from './styles';


export default Container = (props) => {

    const { style, children } = props;

    const theme = useColorScheme();

    const styles = theme === 'dark' ? darkStyles : lightStyles;

    return(
        <View style={[styles.container, style && style]}>
            {children}
        </View>
    )
}
