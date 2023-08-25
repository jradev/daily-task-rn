import COLORS from "@utils/colors";

import { StyleSheet, Appearance } from 'react-native';


export const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    }
});


export const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.dark
    }
});
