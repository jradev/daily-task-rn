
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Container from "@components/container";
import { Animated, Button, Text, View, useColorScheme } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { lightStyles } from "./styles";
import COLORS from "@utils/colors";
import { formatDate } from "@utils/helper";

export default function(props){
    
    const navigation = useNavigation();

    const theme = useColorScheme();

    const isDone = true;

    const styles = lightStyles;

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button 
            title="Edit"
            disabled={false}
            />
          ),
        });
    }, [navigation]);

    return (
        <Container>
            <View style={styles.container}>
                <Text style={styles.title}>Water Bill Payment</Text>
                <Text style={styles.description}>Paying of water bill for the month of August 2023.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.date}>{formatDate(new Date(), 'LLLL')}</Text>
            </View>

            {
            isDone 
            ? 
            <View style={styles.status}>
                <MaterialCommunityIcons name="checkbox-marked-circle-outline" color={COLORS.green} size={48} />
            </View>
            :
            <View style={styles.action}>
                <Button 
                title="Mark as done"
                />

                <Button 
                color={COLORS.red}
                title="Delete task"
                />
            </View>
            }
        </Container>
    )
}