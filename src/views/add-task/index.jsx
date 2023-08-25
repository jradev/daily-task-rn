
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Container from "@components/container";
import { Button } from "react-native";


export default function(props){
    
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button 
            title="Add"
            disabled={true}
            />
          ),
        });
      }, [navigation]);
    return (
        <Container>
            
        </Container>
    )
}