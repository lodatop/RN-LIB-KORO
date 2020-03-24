import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const KoroSteps = (props) => {
    let { steps = null } = props;

    let stepsArray = null;

    if(Array.isArray(steps)){
        stepsArray = steps;
    }

    return (
        <View style={styles.container}>
            <View style={styles.bar}></View>
            <View style={styles.step}>
                <Text>Step 1</Text>
            </View>
            <View style={styles.step}>
                <Text>Step 2</Text>
            </View>
            <View style={styles.step}>
                <Text>Step 3</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    step: {
        backgroundColor: 'grey',
        margin: 5,
        padding: 5,
        borderRadius: 50
    },
    bar: {
        backgroundColor: "black",
        width: 10,
        height: 10
    }
})