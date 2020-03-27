import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { KoroIcon } from './Icon';

export const KoroChip = (props) => {

    let { 
        tags = [],
        pressable = false, 
        deletable = true,
        textStyle,
        chipStyle, 
        containerStyle, 
        clearStyle, 
        onDelete, 
        onPress, 
        iconColor = 'black'
    } = props

    let icon = iconColor === 'white' ? 'clearWhite' : 'clear'
    const [tagsArray, setTagsArray] = useState(tags)
    useEffect(()=>{setTagsArray(props.tags)},[props.tags])

    let chips = null;
    if(tagsArray.length > 0){
        if(deletable && !pressable){
            chips = (
                tagsArray.map(chip => {
                    return (
                        <View key={chip.id} style={{ ...styles.chip, ...chipStyle}}>
                            <Text style={{...styles.title, ...textStyle}}>{chip.title}</Text>
                            <TouchableOpacity onPress={() => onDelete(chip.id)}>
                                <View style={{...styles.clear, clearStyle}}>
                                    <KoroIcon icon={icon} size={'small'}/>
                                </View>
                            </TouchableOpacity>
                        </View> 
                    )
                })
            )
        } else if (pressable){
            chips = (
                tagsArray.map(chip => {
                    return (
                        <TouchableOpacity onPress={onPress}>
                            <View key={chip.id} style={{ ...styles.chip, ...chipStyle}}>
                                <Text style={styles.title}>{chip.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            )
        } else {
            chips = (
                tagsArray.map(chip => {
                    return (
                        <View key={chip.id} style={{ ...styles.chip, ...chipStyle}}>
                            <Text style={styles.title}>{chip.title}</Text>
                        </View>
                    )
                })
            )
        }
    }

    return (
            <View style={{...styles.container, ...containerStyle}}>
               {chips} 
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    chip: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        height: 35,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center'
    },
    title: {
        paddingHorizontal: 5
    },
    clear: {
        backgroundColor: 'white',
        borderRadius: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    }
});