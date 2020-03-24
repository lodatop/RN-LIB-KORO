import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Animated, View } from 'react-native';

export const KoroInput = (props) => {

    const [value, setValue] = useState();
    const [focused, setFocused] = useState(false);

    handleOnSelect = (value) => {
        setValue( value )
    }

    const { onChange, style, label, disabled, placeholderTextColor } = props;
    

    handleChange = (text) => {
        setValue(text)
        onChange(text)
    }

    handleBlur = () => {
      setFocused(false)
    }

    handleFocus = () => {
      setFocused(true)
    }

    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !focused ? 18 : 0,
      fontSize: !focused ? 20 : 14,
      color: !focused ? (value == undefined || value == "")? '#000' : 'transparent' : '#000',
    };

    return(
      <View style={[{ paddingTop: 18 }, styles.input, style]}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          editable={!disabled}
          style={{ height: 26, fontSize: 20, color: '#000' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChange}
          
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholderTextColor={
            placeholderTextColor
                ? placeholderTextColor
                : 'gray'
            }
          blurOnSubmit
        />
      </View>
    )
    
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    textAlign: 'center',
    textAlign: "center",
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:9.5,
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  }
});