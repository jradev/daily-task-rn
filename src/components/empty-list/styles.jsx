import COLORS from "@utils/colors";
import { SIZE, FAMILY } from "@utils/fonts";

import { StyleSheet, Appearance, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;


export const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: Math.floor(screenWidth * 0.5)
    },
    title: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular,
        color: 'rgba(0,0,0,0.7)',
        alignSelf: 'center',
        marginTop: 12,
    }
});


export const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.dark,
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular 
    }
});
