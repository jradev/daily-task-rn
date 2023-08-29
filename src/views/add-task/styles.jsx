import COLORS from "@utils/colors";
import { SIZE, FAMILY } from "@utils/fonts";

import { StyleSheet } from 'react-native';


export const lightStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightergray,
        margin: 16,
        paddingVertical: 8,
        paddingLeft: 16,
        borderRadius: 6,
    },
    title: {
        paddingVertical: 8,
        borderBottomColor: COLORS.lightgray,
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular
    },
    description: {
        paddingVertical: 8,
        minHeight: 120,
        verticalAlign: 'top',
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular
    },
    dateTimeContainer: {
      backgroundColor: COLORS.lightergray,
      borderWidth: 1
    },
    picker: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    date: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular,
    },
    dateValueContainer: {
        marginRight: 16,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: COLORS.lightgray,
    },
    dateLabelText: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular,
    },
    dateTime: {
        flex: 1,
        alignItems: 'center',
    },
    dateItem: {
        paddingBottom: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.lightergray,
    },
    lastItem: {
        borderBottomWidth: 0,      
    },
});
