import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated} from 'react-native';
import { KoroIcon } from './Icon'

export const KoroCollapse = (props) => {

    const getIcon = (icon) => {
        return(
            <KoroIcon icon={icon} />
        )
    }

    const icons = { 
        'right'    :  getIcon('rightArrow'),
        'left'  :  getIcon('leftArrow')
    };

     
    const [title, setTitle] = useState(props.title);   
    const [expanded, setExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);   
    const [minHeight, setMinHeight] = useState(0);
    const [animation, setAnimation] = useState(new Animated.Value(50))

    const toggle = () => {
        let initialValue    = expanded? maxHeight + minHeight : minHeight,
            finalValue      = expanded? minHeight : maxHeight + minHeight;

        console.log(animation)
        setExpanded(!expanded)
        icon = expanded? icons['left'] : icons['right'];

        animation.setValue(initialValue);
        Animated.spring( 
            animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    const _setMaxHeight = (event) => {
        setMaxHeight( event.nativeEvent.layout.height )
        animation.setValue(minHeight)
    }
    
    const _setMinHeight =(event) => {
        setMinHeight(event.nativeEvent.layout.height)
    }

    let icon = expanded? icons['left'] : icons['right'];

    return(
        <Animated.View style={[styles.container, {height: animation}]} >
            <View style={styles.titleContainer} onLayout={_setMinHeight}>
                <Text style={styles.title}>{title}</Text>
                <TouchableHighlight 
                    style={styles.button} 
                    onPress={toggle}
                    underlayColor="#f1f1f1">
                    <View>{icon}</View>
                </TouchableHighlight>
            </View>
            <View style={styles.body} onLayout={_setMaxHeight}>
                {props.children}
            </View>

        </Animated.View>
    )
}

var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});