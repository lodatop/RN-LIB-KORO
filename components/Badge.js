import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export const KoroBadge = (props) => {
    let { value, 
        position = 'topRight', 
        badgeSize = 30, 
        showValue = true, 
        fontSize = 10, 
        backgroundColor = styles.badge.backgroundColor, 
        color = 'white' } = props

    let textStyle = {
        color,
        fontSize
    }

    let badgeStyle = {
        minWidth: badgeSize,
        minHeight: badgeSize,
        backgroundColor,
    }

    let positionStyle = {
        topRight: {
            top: (-1*badgeSize/2),
            right: (-1*badgeSize/2)
        },
        bottomRight: {
            bottom: (-1*badgeSize/2),
            right: (-1*badgeSize/2)
        },
        topLeft: {
            top: (-1*badgeSize/2),
            left: (-1*badgeSize/2)
        },
        bottomLeft: {
            bottom: -15,
            left: -15
        }
    }

    if(!positionStyle[position]) position = 'topRight'
    if(parseInt(value) > 999) value = '+999'
    if(!showValue) value = ' ';
    let badge = null;
    if(value){
        badge = (
            <View style={{...styles.badge, ...badgeStyle, ...positionStyle[position]}}>
                <Text style={{...textStyle}}>{value}</Text>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
                {props.children}
                {badge}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20,
        borderWidth:1,
        overflow: 'visible'
    },
    badge: {
        elevation: 15,
        overflow: 'visible',
        position: 'absolute',
        padding: 4,
        zIndex: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 50
    }
})

