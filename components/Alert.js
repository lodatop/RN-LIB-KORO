import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

import { KoroIcon } from './Icon'
import { KoroButton } from './Button'
import { KoroModal } from './Modal'


const KoroAlert = (props) =>{

    let {
        title = 'My default title', 
        message = 'My default message', 
        confirmButton = {},
        cancelButton = null, 
        icon = 'alert',
        visible = false,
        onClose,
        onAccept
    } = props

    let { confirmText = 'OK' } = props.confirmButton;

    const closeAlert = () => {
        visible = false
    }

    let buttons = null;

    if(!cancelButton) {
        buttons = (
        <View style={{...styles.bottomPart}}>
            <KoroButton
                {...confirmButton} 
                buttonStyle={{...styles.alertMessageButtonStyle, ...confirmButton.style}}
                title={confirmText}
                />
        </View>
        )
    }else{
        let { cancelText = 'DISMISS' } = props.cancelButton;
        buttons = (
        <View style={{...styles.bottomPart}}>
            <KoroButton
                {...cancelButton}
                title={cancelText}
                buttonStyle={{...styles.alertMessageButtonStyle, ...cancelButton.style}}
                />
            <KoroButton
                {...confirmButton} 
                buttonStyle={{...styles.alertMessageButtonStyle, ...confirmButton.style}}
                title={confirmText}
                />
        </View>
        )
    }

    return (
        <KoroModal visible={visible} contentStyle={{backgroundColor: "transparent"}}>
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
                {buttons}
            </View>
        </KoroModal>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        height: '25%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 10,
        padding: 4
    },
    alertTitleStyle: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 2,
        marginHorizontal: 2
    },
    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    middlePart: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        textAlignVertical: 'center',
        padding: 4,
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 2
    },
    alertMessageTextStyle: {
        color: 'black',
        textAlign: 'justify',
        fontSize: 16,
        padding: 2,
    },
    bottomPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        padding: 0,
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    alertMessageButtonStyle: {
        width: '20%',
        paddingHorizontal: 6,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alertMessageButtonTextStyle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    }
})

KoroAlert.show = () => {
    Alert.alert('Hello my friend')
    console.log('it works')
}

export {KoroAlert};