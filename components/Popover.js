import React from 'react';
import { View, StyleSheet, Modal, Dimensions, ScrollView } from 'react-native';

export const KoroPopover = (props) =>{

    let { onRequestClose, animationType, visible, borderStyle, contentStyle, transparent = true } = props;
    if (!animationType) animationType = 'slide';

    const onRequestCloseHandler = () => {
        if (onRequestClose) onRequestClose()
    }

    var fullWidth = Dimensions.get('window').width;
    var fullHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.backdrop], {width: fullWidth, height: fullHeight}} visible={visible}>
            <ScrollView>
                <Modal {...props} transparent={transparent} animationType={animationType} visible={visible} onRequestClose={onRequestCloseHandler} animationType={animationType}>
                    <View style={{...styles.borderStyle, ...borderStyle}}>
                        <View style={{...styles.contentStyle, ...contentStyle}}>
                            {props.children}
                        </View>
                    </View>
                </Modal>
            </ScrollView>
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