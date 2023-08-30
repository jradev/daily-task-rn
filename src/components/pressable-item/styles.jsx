import COLORS from "@utils/colors";
import { SIZE, FAMILY } from "@utils/fonts";

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    value: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular,
    },
    valueContainer: {
        marginRight: 16,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: COLORS.lightgray,
    },
    labelText: {
        fontSize: SIZE.regular,
        fontFamily: FAMILY.regular,
    },
    typeContainer: {
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    valueIndicator: {
        height: 12,
        width: 12,
        borderRadius: 12,
        backgroundColor: COLORS.lightblue,
        marginLeft: 8,
    }
});
