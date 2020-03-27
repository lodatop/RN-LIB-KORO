import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { KoroButton } from './Button';
import { KoroAlert } from './Alert';
import { KoroIcon } from './Icon'
import { Wrapper } from './Wrapper'

export const KoroSteps = (props) => {
    let { type = 'circles', onDone, selectedStyle = null, barStyle = null} = props
    // const [type, setType] = useState(stepsType)
    const [steps, setSteps] = useState(null)
    const [error, setError] = useState(false)
    const [actualStep, setActualStep] = useState(1)
    const [backDisabled, setBackDisabled] = useState(true)
    const [continueDisabled, setContinueDisabled] = useState(false)

    useEffect(()=>{setSteps(props.steps)}, [props.steps])
    useEffect(()=>{setActualStep(actualStep)}, [actualStep])
    // useEffect(()=>{setType(props.stepsType)}, [props.stepsType])

    const goFoward = () =>{
        if(actualStep + 1 <= steps.length) {
            setActualStep(actualStep + 1)
            setBackDisabled(false)
            if(actualStep + 1  === steps.length){
                setContinueDisabled(true)
            }
        }
    }

    const goBack = () =>{
        if(actualStep - 1 > 0){
            setActualStep(actualStep - 1)
            setContinueDisabled(false)
            if(actualStep - 1 === 1){
                setBackDisabled(true)
            }
        }
    }

    let foregroundStyle = null;
    let stepsArray = null;
    let content = null;
    let stepsComponent = null;

    if(type === 'circles'){
        if(steps){
            content = steps[actualStep - 1]
            foregroundStyle = {
                width: `${90/(steps.length - 1)*(actualStep - 1)}%`,
            }
        }
    
        if(steps) {
            if(steps.length > 1){
                stepsArray = (
                    steps.map((step, index) => {
                        if (index + 1  <= actualStep){
                            if(index + 1 < actualStep){
                                return (
                                    <View key={index} style={{...styles.step, ...styles.actual, ...selectedStyle}}>
                                        <KoroIcon icon='checkWhite'/>
                                    </View>
                                )
                            }else{
                                return (
                                    <View key={index} style={{...styles.step, ...styles.actual, ...selectedStyle}}>
                                        <Text>{index + 1}</Text>
                                    </View>
                                )
                            }
                        } else {
                            return (
                                <View key={index} style={{...styles.step}}>
                                    <Text>{index + 1}</Text>
                                </View>
                            )
                        }
                    })
                )
            }
        } else {
            stepsArray = (
                <KoroAlert
                    visible={error}
                    confirmButton={{
                        onPress: () => setError(false)
                        ,
                        textStyle: {
                        color: 'black'
                        }
                    }}
                />
            )
        }
        let stepContent = null;
        if( steps ){
            if(typeof(content) === "object"){
                stepContent = (
                    content
                )
            } else if (typeof(content) === "string"){
                stepContent = (
                    <Text>{content}</Text>
                )
            }
            stepsComponent = (
                <Wrapper>
                    <View style={styles.top}>
                        <View style={{...styles.barBackground}}></View>
                        <View style={{...styles.barForeground, ...foregroundStyle, ...barStyle}}></View>
                        {stepsArray}
                    </View>
                    <View style={styles.middle}>
                        {stepContent}
                    </View>
                    <View style={styles.bottom}>
                        <KoroButton disabled={backDisabled} title='Go Back' icon="leftArrow" iconPosition="start" iconSize={25} 
                            onPress={() => goBack()}
                            buttonStyle={{...styles.buttons, paddingLeft: 0}}/>
                        <KoroButton disabled={continueDisabled} title='Continue' icon="rightArrow" iconSize={25}
                            onPress={() => goFoward()}
                            buttonStyle={{...styles.buttons, paddingRight: 0}}/>
                        <KoroButton disabled={!continueDisabled} title='Done' buttonStyle={{...styles.buttons, paddingVertical: 11.5}} onPress={onDone}/>
                    </View>
                </Wrapper>
            )
        }
    }

    return (
        <View style={styles.container}>
            {stepsComponent}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    top: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    middle: {
        width: '100%',
        minHeight: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'center'
    },
    bottom: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    step: {
        zIndex: 150,
        borderWidth: 1,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
        borderRadius: 50
    },
    barBackground: {
        position: 'absolute',
        top: '45%',
        width: '90%',
        height: 5,
        marginHorizontal: 15,
        zIndex: 100,
        backgroundColor: "#dbdbdb"
    },
    barForeground: {
        position: 'absolute',
        top: '45%',
        width: '0%',
        height: 5,
        marginHorizontal: 15,
        zIndex: 105,
        backgroundColor: "#9ec2ff"
    },
    buttons: {
        backgroundColor: 'transparent'
    },
    actual: {
        backgroundColor: '#75a8ff'
    }
})