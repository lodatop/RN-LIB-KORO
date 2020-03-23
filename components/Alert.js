import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import {KoroIcon} from './Icon'

export const KoroAlert = (props) =>{

    let {
        title = 'My default title', 
        message = 'My default message', 
        buttons, 
        confirmText = 'OK', 
        cancelText = 'CANCEL', 
        icon = 'alert'
    } = props

    let Buttons = (
        <View style={{...styles.bottomPart}}>
            <TouchableOpacity style={styles.alertMessageButtonStyle}>
                <Text style={styles.alertMessageButtonTextStyle} >
                    {cancelText}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.alertMessageButtonStyle}>
                <Text style={styles.alertMessageButtonTextStyle} >
                    {confirmText}
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{...styles.mainContainer}}>
            {/*Top*/}
            <View style={{...styles.topPart}}>
                <KoroIcon style={styles.alertIconStyle} icon={icon} resizeMode='contain'/>                
                <Text style={styles.alertTitleStyle}>
                    {title}
                </Text>
            </View>
            {/*middle*/}
            <View style={{...styles.middlePart}}>
                <Text style={styles.alertMessageTextStyle}>
                    {message}
                </Text>
            </View>
            {/*Bottom*/}
            {Buttons}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        height: '25%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#404040',
        borderWidth: 2,
        borderColor: '#FF0000',
        borderRadius: 10,
        padding: 4
    },
    alertIconStyle: {
        // borderWidth: 1,
        borderColor: '#cc00cc'
    },
    alertTitleStyle: {
        flex: 1,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#660066',
        padding: 2,
        marginHorizontal: 2
    },
    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00FF00',
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    middlePart: {
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FF6600',
        alignItems: 'center',
        textAlignVertical: 'center',
        padding: 4,
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 2
    },
    alertMessageTextStyle: {
        color: '#FFFFFF',
        textAlign: 'justify',
        fontSize: 16,
        padding: 2,
    },
    bottomPart: {
        flex: 0.5,
        width: '100%',
        borderWidth: 1,
        borderColor: '#0066FF',
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-evenly'
    },
    alertMessageButtonStyle: {
        width: '40%',
        paddingHorizontal: 6,
        marginVertical: 4,
        borderRadius: 10,
        backgroundColor: '#80bfff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alertMessageButtonTextStyle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})