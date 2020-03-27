import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, Dimensions, ScrollView, Text } from 'react-native';

export const KoroPopover = (props) =>{

    let { onRequestClose, animationType, borderStyle, contentStyle, transparent = true } = props;
    if (!animationType) animationType = 'slide';
    let {position = 'topCenter'} = props;
    const [visible, setVisible] = useState(props.visible);
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    let popover = null
    // const [popover, setPopover] = useState(null);


    useEffect(()=>{setVisible(props.visible)},[props.visible])
    useEffect(()=>{setTitle(props.title)},[props.title])
    useEffect(()=>{setContent(props.content)},[props.content])

    const positions = {
        topCenter: {
            containerStyle:{
                position: 'absolute',
                bottom: '110%'
            },
            arrowStyle: {
                position: 'absolute',
                bottom: -7,
                alignSelf: 'center',
            }
        },
        bottomCenter: {
            containerStyle:{
                position: 'absolute',
                top: '110%'
            },
            arrowStyle: {
                position: 'absolute',
                top: -7,
                alignSelf: 'center',
            }
        }
    }

    if(visible){
       popover = (
            <View 
            style={{...styles.container, ...positions[position].containerStyle}}>
                <View style={{...styles.arrow, ...positions[position].arrowStyle}}></View>
                <View style={{...styles.popover}}>
                    <Text style={{paddingBottom: 5, margin: 0, marginBottom: 5, borderBottomColor: 'lightgrey', borderBottomWidth: 1}}>
                        {title}
                    </Text>
                    <Text>
                        {content} 
                    </Text>
                </View>
            </View>
        )
    }

    const onRequestCloseHandler = () => {
        if (onRequestClose) onRequestClose()
    }

    return (
        <View style={{...styles.contentStyle}}>
            {popover}
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    contentStyle: {
        zIndex: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    popover: {
        zIndex: 200,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderColor: '#adadad',
        borderWidth: 1,
        position: 'relative',
        bottom: 0,
        alignSelf: 'center',
        elevation: 10
    },
    arrow: {
        transform: [
            { rotate: "45deg" }
          ],
        zIndex: 199,
        
        height: 16,
        width: 16,
        backgroundColor: '#adadad',
        borderColor: 'black',
        borderWidth: 1,
    },
    container: {
        zIndex: 200,
        maxWidth: 250,
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        padding: 0
    }
})