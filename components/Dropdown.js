import React, { useState } from 'react';
import { StyleSheet, Picker, View } from 'react-native';

export const KoroDropdown = (props) => {

    const [value, setValue] = useState();

    const handleOnSelect = (value) => {
        setValue( value )
        onSelect(value)
    }

    const { onSelect, style, options } = props;

    return(
        <View style={{...styles.option, ...style}}>
            <Picker
                style={{width: '100%', height: '100%'}}
                selectedValue={value}
                onValueChange={handleOnSelect}
                mode="dropdown"
                itemStyle={{backgroundColor: 'pink'}}
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
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
    // elevation: 5,
    paddingLeft: 10,
    // textAlign: "red",
    backgroundColor: '#e3e3e3',
    // paddingHorizontal: 16,
    // paddingTop: 10,
    // paddingBottom:9.5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    // shadowColor: "rgba(0, 0, 0, 0.1)",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
    // shadowOpacity: 1,
  }
});