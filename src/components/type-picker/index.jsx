import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';


const TypePicker = (props) => {
    const { open, value, setTaskType } = props;

    const setType = (itemValue, itemIndex) => {
        setTaskType(itemValue);
    }

    return(
        <React.Fragment>
            {open && 
            <View style={styles.typePicker}>
                <Picker
                selectedValue={value}
                style={styles.pickerItem}
                onValueChange={setType}>
                    <Picker.Item label="Home" value="home" />
                    <Picker.Item label="Work" value="work" />
                </Picker>
            </View>
            }
        </React.Fragment>
    )
}

export default TypePicker;