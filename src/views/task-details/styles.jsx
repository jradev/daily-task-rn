import { SIZE, FAMILY } from "@utils/fonts";

import { StyleSheet } from 'react-native';


export const lightStyles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        paddingVertical: 8,
        paddingLeft: 16,
        borderRadius: 6,
    },
    title: {
        // paddingVertical: 8,
        fontSize: SIZE.large,
        fontFamily: FAMILY.regular
    },
    description: {
        paddingVertical: 8,
        paddingRight: 8,
        verticalAlign: 'top',
        fontSize: SIZE.small,
        fontFamily: FAMILY.regular
    },
    lastItem: {
        borderBottomWidth: 0,      
    },
    date: {
        fontSize: SIZE.small,
        fontFamily: FAMILY.regular,
    },
    status: {
        marginTop: 16,
        marginHorizontal: 8,
        alignItems: 'center',
    },
    action: {
        marginTop: 16,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    deleteTask: {
        alignItems: 'center',
        marginTop: 8
    },
});
