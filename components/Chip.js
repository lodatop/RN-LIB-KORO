import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { KoroIcon } from './Icon';

export const KoroChip = (props) => {

    let { tagsArray, deletable, chipStyle, containerStyle, clearStyle, onDelete } = props

    let tags = [{title: 'Chip component', id: 1}, {title: 'Chip component 2', id: 2},
    {title: 'Chip 3', id: 3}, {title: 'Francheesssscoooooo fiauuuuu', id: 4 }]

    let chips = (
        tags.map(chip => {
            return (
                <View key={chip.id} style={styles.chip}>
                    <Text style={styles.title}>{chip.title}</Text>
                    <TouchableOpacity onPress={() => onDelete(chip.id)}>
                        <View style={styles.clear}>
                            <KoroIcon icon="clear" size={'small'}/>
                        </View>
                    </TouchableOpacity>
                </View> 
            )
        })
    )

    return (
            <View style={styles.container}>
               {chips} 
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'scroll',
        height: 100,
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
        justifyContent: 'center'
    }
});