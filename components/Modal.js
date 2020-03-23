import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';

export const KoroModal = (props) =>{

    let { onRequestClose, animationType = 'slide', visible = false, borderStyle } = props;
    if (!animationType) animationType = 'slide';

    const onRequestCloseHandler = () => {
        if (onRequestClose) onRequestClose()
    }

    return (
       <Modal {...props} visible={visible} animationType={animationType} onRequestClose={onRequestCloseHandler} animationType={animationType}>
            <View style={{...styles.borderStyle, ...borderStyle}}>
                {props.children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    borderStyle: {
        width:'100%',
        height:'100%',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentStyle: {
        backgroundColor: 'white', 
        flex: 1,
        padding: 15
    }
})