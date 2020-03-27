import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { KoroInput } from './Input';

export const KoroForm = (props) => {

    const {onChanges, inputStyle} = props;

    const [content, setContent] = useState([]);
    
    const updateItem = (key, label, text) => {
        let newArr = [...content];
        newArr[key] = {id: key, label: label, value: text};

        setContent(newArr);
        onChanges(newArr)
      };

    const renderInputs = () => {

        const { inputList } = props;

        return inputList ? (
            <View style={{...styles.input}}>
                {inputList.map((item, i) => {
                    return(
                            <KoroInput style={{...inputStyle}} key={i} label={item} onChange={(text) => { updateItem(i, item, text) }}/>
                    )
                })}
            </View>
        ) : null;
    }

    return (<View style={props.style} {...props}>
            {renderInputs()}
        </ View>);
    
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 5,
    }
  });