import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const KoroIcon = (props) =>{

    let { icon = 'none', size = 'small', onPress, style, resizeMode } = props
    let iconSize = {}
    let icons = {
        alert: {
            source: require('../assets/koro_alert.png')
        },
        clear: {
            source: require('../assets/koro_clear.png')
        }
    }

    let finalIcon = null;

    if(!icons[icon]){
        icon = "none"
    }
    if (icon === 'none'){
        iconSize = null
    } else if(size === 'small'){
        iconSize = {
            width: 20,
            height: 20
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
    } else if(typeof size == 'number') {
        iconSize = {
            width: size,
            height: size
        }
    } else if(typeof size == 'object') {
        iconSize = {
            ...size
        }
    } else {
        iconSize = {
            width: 20,
            height: 20
        }
    }
    

    if(icons[icon]){
        finalIcon = (
            <View style={{...styles.container ,...style}}>
                <Image 
                    resizeMode={resizeMode}
                    style={{...iconSize}}
                    source={icons[icon].source}
                />
            </View>
        )
    }

    return (
        <View>
            {finalIcon}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 3
    }
})