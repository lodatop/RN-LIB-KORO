import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import {KoroIcon} from './Icon'

export const KoroButton = (props) =>{

    let disabledStyle = null
    let { onPress, 
        onPressIn, 
        onPressOut, 
        onLongPress, 
        title = '', 
        disabled = false, 
        buttonStyle = {...styles.container}, 
        textStyle, 
        touchColor = 'rgba(0,0,0,0.2)', 
        disabledBackgroundColor, 
        disabledColor, 
        icon
    } = props;

    const [pressedStyle, setPressedStyle] = useState({});

    if (disabled) {
        disabledStyle = {
            backgroundColor: disabledBackgroundColor  || 'grey',
        }
        textStyle.color = disabledColor || 'black'
    }else{
        disabledStyle = null
    }

    const onPressInHandler = () =>{
        setPressedStyle(
            {width: 500, height: 500, position: 'absolute', top: 0, left: 0, backgroundColor: touchColor, zIndex: 200}
            );
        if (onPressIn){
            onPressIn();
        }
    }

    const onPressOutHandler = () =>{
        setPressedStyle({});
        if (onPressOut){
            onPressOut();
        }
    }

    return (
        <TouchableWithoutFeedback {...props} onPressIn={onPressInHandler} onPressOut={onPressOutHandler} 
            onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
            <View style={{...styles.container, ...buttonStyle, ...disabledStyle}}>
                <View style={{...pressedStyle}}></View>
                <KoroIcon icon={icon}/>
                <Text style={{ ...styles.text, ...textStyle }}>{ title }</Text>
            </View >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'blue',
        minWidth: 100,
        padding: 10,
        overflow: 'hidden'
    },
    text: {
        fontSize: 15,
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'normal'
    }
})