import React, { useState, useEffect } from 'react';
import { StyleSheet, Picker, View } from 'react-native';

export const KoroSelect = (props) => {

    const { onSelect, options, defaultValue = props.options[0] } = props;
    const [value, setValue] = useState(defaultValue);
    const [style, setStyle] = useState(props.style);
    useEffect(()=>{setStyle(props.style)},[props.style])

    const handleOnSelect = (value) => {
        onSelect( value );
        setValue( value );
    }

    return(
        <View style={{...styles.option, ...style}}>
            <Picker
                style={{color: 'black', width: '100%', height: '100%'}}
                selectedValue={value}
                onValueChange={handleOnSelect}
                prompt='Options'
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
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  }
});