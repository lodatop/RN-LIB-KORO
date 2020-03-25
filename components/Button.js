import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
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
        disabledBackgroundColor = 'lightgrey', 
        disabledColor = 'black', 
        icon,
        iconPosition = 'end',
        iconSize
    } = props;

    const [pressedStyle, setPressedStyle] = useState({});

    if (disabled) {
        disabledStyle = {
            backgroundColor: disabledBackgroundColor,
        }
        textStyle = {...textStyle, color: disabledColor}  
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
    let button = null;
    if(icon){
        if(iconPosition === 'start') {
            button = (
                <TouchableWithoutFeedback {...props} onPressIn={onPressInHandler} onPressOut={onPressOutHandler} 
                    onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
                    <View style={{...styles.container, ...buttonStyle, ...disabledStyle}}>
                        <View style={{...pressedStyle}}></View>
                        <KoroIcon icon={icon} size={iconSize}/>
                        <Text style={{ ...styles.text, ...textStyle }}>{ title }</Text>
                    </View >
                </TouchableWithoutFeedback>
            )
        } else if(iconPosition === 'end') {
            button = (
                <TouchableWithoutFeedback {...props} onPressIn={onPressInHandler} onPressOut={onPressOutHandler} 
                    onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
                    <View style={{...styles.container, ...buttonStyle, ...disabledStyle}}>
                        <View style={{...pressedStyle}}></View>
                        <Text style={{ ...styles.text, ...textStyle }}>{ title }</Text>
                        <KoroIcon icon={icon} size={iconSize}/>
                    </View >
                </TouchableWithoutFeedback>
            )
        }
    } else {
        button = (
            <TouchableWithoutFeedback {...props} onPressIn={onPressInHandler} onPressOut={onPressOutHandler} 
                onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
                <View style={{...styles.container, ...buttonStyle, ...disabledStyle}}>
                    <View style={{...pressedStyle}}></View>
                    <Text style={{ ...styles.text, ...textStyle }}>{ title }</Text>
                </View >
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View>
            {button}
        </View> 
        )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: '#6897e3',
        minWidth: 100,
        padding: 10,
        margin: 5,
        overflow: 'hidden'
    },
    text: {
        fontSize: 15,
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'normal'
    }
})