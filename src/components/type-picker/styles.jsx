import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    typePicker: {
        flex: 1
    },
    pickerItem: {
        marginLeft: Platform.select({
            android: -12,
            ios: 0
        }),
    },
});
