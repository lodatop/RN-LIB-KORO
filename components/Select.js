import React, { useState } from 'react';
import { StyleSheet, Picker } from 'react-native';

export const KoroSelect = (props) => {

    const [value, setValue] = useState();

    handleOnSelect = (value) => {
        setValue( value )
    }

    const { onSelect, style, options } = props;

    return(
        <Picker
            selectedValue={value}
            style={[styles.option, style]}
            onValueChange={handleOnSelect}
            >
                {options.map((value, index) => {
                    return <Picker.Item key={index} label={value.toString()} value={value}/>
                })}
        </Picker>
    )
    
}

const styles = StyleSheet.create({
  option: {
    width: 100,
    height: 50,
    textAlign: "center",
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom:9.5,
    borderRadius: 3,
    borderWidth: 10,
    borderColor: "black",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  }
});