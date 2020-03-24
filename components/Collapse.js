import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Animated} from 'react-native';
import { KoroIcon } from './Icon'

export const KoroCollapse = (props) => {

    const [title, setTitle] = useState(props.title);   
    const [expanded, setExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);   
    const [minHeight, setMinHeight] = useState(0);
    const [animation, setAnimation] = useState(new Animated.Value(50))

    useEffect(() => setTitle(props.title), [props.title])

    const getIcon = (icon) => {
        return(
            <KoroIcon icon={icon} size={25} />
        )
    }

    const icons = { 
        'down'    :  getIcon('downArrow'),
        'left'  :  getIcon('leftArrow')
    };

    const toggle = () => {
        let initialValue    = expanded? maxHeight + minHeight : minHeight,
            finalValue      = expanded? minHeight : maxHeight + minHeight;

        // console.log(animation)
        setExpanded(!expanded)
        icon = expanded? icons['down'] : icons['left'];

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

    let icon = expanded? icons['down'] : icons['left'];

    return(
        <Animated.View style={{...styles.container, height: animation}} >
            <TouchableHighlight style={{}} 
                onPress={toggle}
                underlayColor="#f1f1f1">
                <View style={styles.titleContainer} onLayout={_setMinHeight}>
                    <Text style={styles.title}>{title}</Text>    
                    <View>{icon}</View>
                </View>
            </TouchableHighlight>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#e8e8e8",
        paddingHorizontal: 10

    },
    title       : {
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0,
        borderWidth: 1,
        borderColor: '#f5f5f5'
    }
});