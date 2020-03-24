import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const KoroTable = (props) => {

    const { borderStyle } = props;
    const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
    const borderBottomWidth = borderLeftWidth;
    const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

    const renderCol = () => {
        const { tableTitle, colStyle, heightArr, width, textStyle, borderStyle } = props;
        
        return tableTitle ? (
        <View style={[(colStyle && colStyle.width) ? { width: colStyle.width } : { flex: 1 }, colStyle]}>
            {tableTitle.map((item, i) => {
            /*const height = (heightArr && heightArr[i]) || 'auto';
            const cellWidth = (width) || 'auto';
            const cellTextStyle = (textStyle) || {};
            const cellBorderStyle = (borderStyle) || {};*/
            //renderCell(i,item,cellWidth,height,cellTextStyle,cellBorderStyle)
            //return <Cell key={i} data={item} width={width} height={height} textStyle={textStyle} {...props} />;
            <Text key={i} style={[{backgroundColor: 'black', width: 100}]}>{item}</Text>
            })}
        </View>
        ) : null;
    }

    const renderCell = (key, data, width, height, textStyle, borderStyle) => {

        const textDom = React.isValidElement(data) ? (
        data
        ) : (
        <Text style={[textStyle, styles.text]} {...props}>
            {data}
        </Text>
        );
        const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
        const borderRightWidth = borderTopWidth;
        const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

        return (
        <View
            key={key}
            style={[
            {
                borderTopWidth,
                borderRightWidth,
                borderColor
            },
            styles.cell,
            width && { width },
            height && { height },
            !width && !height && { flex: 1 }
            ]}
        >
            {textDom}
        </View>
        );
  }

    
    const  cols  = renderCol()
    return (
    <View
        style={[
        props.style,
        {
            borderLeftWidth,
            borderBottomWidth,
            borderColor
        }
        ]}
    >
        {cols}
    </View>
    );


}


const styles = StyleSheet.create({
    cell: { justifyContent: 'center' },
    text: { backgroundColor: 'red' }
  });