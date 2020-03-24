import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const KoroTable = (props) => {

    const { borderStyle } = props;
    const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
    const borderBottomWidth = borderLeftWidth;
    const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

    const renderCol = () => {
        const { tableTitle, colStyle, heightArr, width, textStyle, borderStyle } = props;
        const height = (heightArr && heightArr[i]) || 'auto';
        const cellWidth = (width) || 'auto';
        const cellTextStyle = (textStyle) || {};
        const cellBorderStyle = (borderStyle) || {};

        return tableTitle ? (
        <View style={[(colStyle && colStyle.width) ? { width: colStyle.width } : { flex: 1 }, colStyle]}>
            {tableTitle.map((item, i) => {
                return(
                    <View key={i}>
                        {renderCell(item,cellWidth,height,cellTextStyle,cellBorderStyle)}
                    </View>
                )
            //return <Cell key={i} data={item} width={width} height={height} textStyle={textStyle} {...props} />;
            //<Text key={i} style={[{backgroundColor: 'black', width: 100}]}>{item}</Text>
            })}
        </View>
        ) : null;
    }

    const renderRow = () => {
        const { tableHead, headStyle, widthArr, textStyle, borderStyle } = props;
        let width = widthArr ? sum(widthArr) : 'auto';
        const height = 'auto';
        const wth = (widthArr && widthArr[i]) || 'auto';
        const cellTextStyle = (textStyle) || {};
        const cellBorderStyle = (borderStyle) || {};

        return tableHead ? (
        <View style={[{ height: 'auto' }, width && { width }, styles.row, headStyle]}>
            {tableHead.map((item, i) => {
                return(
                    <View key={i}>
                        {renderCell(item,wth,height,cellTextStyle,cellBorderStyle)}
                    </View>
                )
            //return <Cell key={i} data={item} width={wth} height={height} flex={flex} textStyle={textStyle} {...props} />;
            })}
        </View>
        ) : null;

    }

    const renderCell = (data, width, height, textStyle, borderStyle) => {

        const textDom = React.isValidElement(data) ? (
        data
        ) : (
        <Text style={[textStyle, styles.text]}>
            {data}
        </Text>
        );
        const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
        const borderRightWidth = borderTopWidth;
        const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

        return (
        <View
            style={[
            {
                borderTopWidth,
                borderRightWidth,
                borderColor
            },
            styles.cell,
            width && { width },
            height && { height },
            { flex: 1 }
            ]}
        >
            {textDom}
        </View>
        );
  }

    
    const  cols  = renderCol()
    const row = renderRow()
    console.log(renderRow())
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
        {row}
    </View>
    );


}


const styles = StyleSheet.create({
    cell: { justifyContent: 'center' },
    text: { backgroundColor: 'transparent' },
    row: {
        flexDirection: 'row',
        overflow: 'hidden'
      }
  });