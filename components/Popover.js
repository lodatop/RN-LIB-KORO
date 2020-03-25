import React from 'react';
import { View, StyleSheet, Modal, Dimensions, ScrollView, Text } from 'react-native';

export const KoroPopover = (props) =>{

    let { onRequestClose, animationType, visible, borderStyle, contentStyle, transparent = true, message } = props;
    if (!animationType) animationType = 'slide';

    const onRequestCloseHandler = () => {
        if (onRequestClose) onRequestClose()
    }

    return (
        <View style={[styles.backdrop]} visible={visible}>
            <Modal {...props} transparent={transparent} animationType={animationType} visible={visible} onRequestClose={onRequestCloseHandler} animationType={animationType}>
                <View style={{...styles.borderStyle, ...borderStyle}}>
                    <View style={{...styles.contentStyle, ...contentStyle}}>
                        <Text>{message}</Text>
                        {props.children}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    borderStyle: {
        width:'100%',
        height:'100%',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    contentStyle: {
        backgroundColor: 'white', 
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})