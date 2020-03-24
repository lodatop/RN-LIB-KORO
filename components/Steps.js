import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { KoroButton } from './Button';

export const KoroSteps = (props) => {
    let { steps = null } = props;

    let stepsArray = null;

    let foregroundStyle = {}

    

    if(Array.isArray(steps)){
        stepsArray = steps;
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{...styles.barBackground}}></View>
                <View style={{...styles.barForeground}}></View>
                <View style={styles.step}>
                    <Text>1</Text>
                </View>
                <View style={styles.step}>
                    <Text>2</Text>
                </View>
                <View style={styles.step}>
                    <Text>3</Text>
                </View>
                <View style={styles.step}>
                    <Text>4</Text>
                </View>
            </View>
            <View style={styles.middle}>
                <Text>Im the content</Text>
            </View>
            <View style={styles.bottom}>
                <Text>Im the bottom</Text>
                <KoroButton title='continue'/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    top: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    middle: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    step: {
        zIndex: 150,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'lightgrey',
        margin: 5,
        padding: 5,
        borderRadius: 50
    },
    barBackground: {
        position: 'absolute',
        top: '50%',
        width: '90%',
        height: 5,
        marginHorizontal: 10,
        zIndex: 100,
        backgroundColor: "black"
    },
    barForeground: {
        position: 'absolute',
        top: '50%',
        width: '0%',
        height: 5,
        marginHorizontal: 10,
        zIndex: 105,
        backgroundColor: "grey"
    }
})