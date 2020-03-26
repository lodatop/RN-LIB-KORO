import React, { useState, useEffect } from 'react';
import { StyleSheet, Picker, View } from 'react-native';

export const KoroDropdown = (props) => {

    const { onSelect, options, defaultValue = props.options[0] } = props;

    const [value, setValue] = useState(defaultValue);
    const [style, setStyle] = useState(props.style);
    useEffect(()=>{setStyle(props.style)},[props.style])

    const handleOnSelect = (value) => {
        setValue( value )
        onSelect(value)
    }


    return(
        <View style={{...styles.option, ...style}}>
            <Picker
                style={{width: '100%', height: '100%'}}
                selectedValue={value}
                onValueChange={handleOnSelect}
                mode="dropdown"
                >
                    {options.map((value, index) => {
                        return <Picker.Item key={index} label={value.toString()} value={value}/>
                    })}
            </Picker>
        </View>
    )
    
}

const styles = StyleSheet.create({
  option: {
    width: 200,
    height: 50,
    overflow: 'visible',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  }
});