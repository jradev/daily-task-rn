import COLORS from "@utils/colors";
import { SIZE, FAMILY } from "@utils/fonts";

import { StyleSheet } from 'react-native';


export const lightStyles = StyleSheet.create({
    empty: {
        height: 12, 
        width: 12, 
        backgroundColor: 'transparent'
    },
    textContainer: {
        flex: 1
    },
    container: {
        minHeight: 72,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.lightgray
    },
    title: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular,
        color: COLORS.black,
        maxWidth: '95%'
    },
    separator: {
        width: 4,
        borderRadius: 6,
        backgroundColor: COLORS.lightblue,
        marginRight: 10
    },
    date: {
        fontSize: SIZE.small,
        fontFamily: FAMILY.light,
        color: COLORS.black
    },
    time: {
        fontSize: SIZE.small,
        fontFamily: FAMILY.light,
        color: COLORS.black
    },
    icon: {
        alignItems: 'center',
    }
});


export const darkStyles = StyleSheet.create({
    textContainer: {
        flex: 1
    },
    container: {
        minHeight: 72,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.white
    },
    title: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular,
        color: COLORS.white
    },
    separator: {
        width: 4,
        borderRadius: 6,
        backgroundColor: COLORS.lightblue,
        marginRight: 10
    },
    date: {
        fontSize: SIZE.small,
        fontFamily: FAMILY.light,
        color: COLORS.white
    },
    time: {
        fontSize: SIZE.small,
        fontFamily: FAMILY.light,
        color: COLORS.white
    }
});
