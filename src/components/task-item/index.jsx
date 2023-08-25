import React from 'react';
import { Text } from 'react-native';


const Item = (props) => {

    return(
        <React.Fragment>
            <Text>Task Item</Text>
        </React.Fragment>
    )
}

export default React.memo(Item);