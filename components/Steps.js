import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { KoroButton } from './Button';
import { KoroAlert } from './Alert';

export class KoroSteps extends Component {
    state = {
        steps: null,
        error: false,
        actualStep: null,
        backDisabled: true,
        continueDisabled: false,
        doneDisabled: true,
        stepsLength: null,
        selectedStyle: null,
        error: false
    }

    shouldComponentUpdate(nextProps, nextState) {
          if (nextProps.steps != this.state.steps || 
            nextState.actualStep != this.state.actualStep ||
            nextState.backDisabled != this.state.backDisabled ||
            nextState.continueDisabled != this.state.continueDisabled
            ) {
            return true;
          } else {
            return false;
          }
    }

    componentDidMount(){
        if(this.props.steps)
        this.setState((prevState) => ({
                steps: this.props.steps, 
                stepsLength: this.props.steps.length,
                actualStep: 1
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.steps)
        this.setState((prevState) => ({
            steps: this.props.steps, 
            stepsSize: this.props.steps.length
        }))   
    }

    goFoward = () =>{
        if(this.state.actualStep + 1 <= this.state.stepsLength) {
            this.setState((prevState) => ({ actualStep: prevState.actualStep + 1, backDisabled: false }))
            if(this.state.actualStep + 1 === 4){
                this.setState((prevState) => ({ continueDisabled: true}))

            }
        }
    }

    goBack = () =>{
        if(this.state.actualStep - 1 > 0){
            this.setState((prevState) => ({ actualStep: prevState.actualStep - 1, continueDisabled: false }))
            if(this.state.actualStep - 1 === 1){
                this.setState((prevState) => ({ backDisabled: true}))
            }
        }
    }

    render(){
        let stepsArray = null

        let foregroundStyle = null
        let content = null
        let stepsComponent = null
        
        if(this.state.steps){
            content = this.state.steps[this.state.actualStep - 1]
            foregroundStyle = {
                width: `${90/(this.state.steps.length - 1)*(this.state.actualStep - 1)}%`,
            }
        }

        if(this.state.steps) {
            if(this.state.steps.length > 1){
                stepsArray = (
                    this.state.steps.map((step, index) => {
                        if (index + 1  <= this.state.actualStep){
                            return (
                                <View key={index} style={{...styles.step, ...styles.actual, ...this.state.selectedStyle}}>
                                    <Text>{index + 1}</Text>
                                </View>
                            )
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
                visible={this.state.error}
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

        if(this.state.steps){
            stepsComponent = (
                <View style={styles.container}>
                <View style={styles.top}>
                    <View style={{...styles.barBackground}}></View>
                    <View style={{...styles.barForeground, ...foregroundStyle, ...this.state.selectedStyle}}></View>
                    {stepsArray}
                </View>
                <View style={styles.middle}>
                    <Text>{content}</Text>
                </View>
                <View style={styles.bottom}>
                    {/* <Text>Im the bottom</Text> */}
                    <KoroButton disabled={this.state.backDisabled} title='Go Back' icon="leftArrow" iconPosition="start" iconSize={25} 
                        onPress={() => this.goBack()}
                        buttonStyle={{...styles.buttons, paddingLeft: 0}}/>
                    <KoroButton disabled={this.state.continueDisabled} title='Continue' icon="rightArrow" iconSize={25}
                        onPress={() => this.goFoward()}
                        buttonStyle={{...styles.buttons, paddingRight: 0}}/>
                    <KoroButton disabled={!this.state.continueDisabled} title='Done' buttonStyle={{...styles.buttons, paddingVertical: 11.5}}/>
                </View>
            </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={{...styles.barBackground}}></View>
                    <View style={{...styles.barForeground, ...foregroundStyle, ...this.state.selectedStyle}}></View>
                    {stepsArray}
                </View>
                <View style={styles.middle}>
                    <Text>{content}</Text>
                </View>
                <View style={styles.bottom}>
                    {/* <Text>Im the bottom</Text> */}
                    <KoroButton disabled={this.state.backDisabled} title='Go Back' icon="leftArrow" iconPosition="start" iconSize={25} 
                        onPress={() => this.goBack()}
                        buttonStyle={{...styles.buttons, paddingLeft: 0}}/>
                    <KoroButton disabled={this.state.continueDisabled} title='Continue' icon="rightArrow" iconSize={25}
                        onPress={() => this.goFoward()}
                        buttonStyle={{...styles.buttons, paddingRight: 0}}/>
                    <KoroButton disabled={!this.state.continueDisabled} title='Done' buttonStyle={{...styles.buttons, paddingVertical: 11.5}}/>
                </View>
            </View>
        )
    }
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
        backgroundColor: 'lightgrey',
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
        backgroundColor: "lightgrey"
    },
    barForeground: {
        position: 'absolute',
        top: '45%',
        width: '0%',
        height: 5,
        marginHorizontal: 15,
        zIndex: 105,
        backgroundColor: "#8b8996"
    },
    buttons: {
        backgroundColor: 'transparent'
    },
    actual: {
        backgroundColor: '#8b8996'
    }
})