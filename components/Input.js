import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Animated, View } from 'react-native';

export const KoroInput = (props) => {

    const { onChange, style, label, disabled, placeholderTextColor, value = '' } = props;
    
    
    const [inputValue, setInputValue] = useState(value);
    const [focused, setFocused] = useState(false);


    

    const handleChange = (text) => {
        setInputValue(text)
        onChange(text)
    }

    const handleBlur = () => {
      setFocused(false)
    }

    const handleFocus = () => {
      setFocused(true)
    }

    const labelStyle = {
      position: 'absolute',
      left: 10,
      top: (!focused && inputValue == '') ? '30%' : 0,
      fontSize: (!focused && inputValue == '') ? 20 : 12,
      color: 'rgba(0,0,0,0.6)',
    };

    return(
      <View style={{ paddingTop: 18, ...styles.input, ...style}}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          editable={!disabled}
          style={{ height: 40, fontSize: 18, color: '#000' }}
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
    marginVertical: 5,
    alignSelf: 'stretch',
    // alignItems: 'center',
    textAlign: 'center',
    textAlign: "center",
    paddingHorizontal: 16,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:9.5,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "gray",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  }
});