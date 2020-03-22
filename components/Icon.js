import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export const KoroIcon = (props) =>{

    let { icon = 'none', size = 'medium', onPress } = props
    let iconSize = {}
    let icons = {
        alert: {
            source: require('../assets/koro_alert_medium.png')
        },
        none: {
            source: {}
        }
    }

    if(!icons[icon]){
        icon = "none"
    }
    if (icon === 'none'){
        iconSize = null
    } else if(size === 'small'){
        iconSize = {
            width: 1,
            height: 1
        }
    } else if(size === 'medium'){
        iconSize = {
            width: 40,
            height: 40
        }
    } else if(size === 'large'){
        iconSize = {
            width: 3,
            height: 3
        }
    } else {
        iconSize = {
            width: 40,
            height: 40
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Image 
                style={{...iconSize}}
                source={icons[icon].source}
            />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
})