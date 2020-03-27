import React from 'react';
import { ActivityIndicator, StyleSheet} from 'react-native';
import { KoroModal } from './Modal'

export const KoroProgress = (props) => {

    let {size = 100, color = 'blue', visible = false, borderStyle = {}, contentStyle = {}, animationType= 'fade'} = props
    return (
        <KoroModal {...props} animationType={animationType} visible={visible} borderStyle={{...styles.borderStyle, ...borderStyle}} contentStyle={{...styles.contentStyle, ...contentStyle}}>
            <ActivityIndicator animating={visible} color={color} size = {size}/>
        </KoroModal>
    );
}

const styles = StyleSheet.create({
    borderStyle: {
        width:'100%',
        height:'100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentStyle: {
        // backgroundColor: 'transparent',
        flex: 0,
        minHeight: '20%',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})