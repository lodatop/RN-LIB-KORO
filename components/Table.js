import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const KoroTable = (props) => {

    const { borderStyle, height, widthArr } = props;
    const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
    const borderBottomWidth = borderLeftWidth;
    const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

    const sum = (arr) => {
        return arr.reduce((acc, n) => acc + n, 0)
    }

    const renderHead = () => {
        const { tableHead, headStyle, textStyle, borderStyle } = props;
        let width = widthArr ? sum(widthArr) : 0;
        const cellHeight = height || 'auto';
        const cellTextStyle = (textStyle) || {};
        const cellBorderStyle = (borderStyle) || {};

        return tableHead ? (
        <View style={[{ height: 'auto' }, width && { width }, styles.row, headStyle]}>
            {tableHead.map((item, i) => {
                const wth = (widthArr && widthArr[i]);
                return(
                    <View key={i}>
                        {renderCell(item,wth,cellHeight,cellTextStyle,cellBorderStyle)}
                    </View>
                )
            })}
        </View>
        ) : null;

    }

    const renderRow = (row) => {
        const { textStyle, borderStyle } = props;
        const cellHeight = height || 'auto';
        const width = widthArr ? sum(widthArr) : 0;
        const cellTextStyle = (textStyle) || {};
        const cellBorderStyle = (borderStyle) || {};
        return row ? (
        <View style={[{ height: 'auto' }, width && { width }, styles.row]}>
            {row.map((item, i) => {
                const wth = (widthArr && widthArr[i]);
                return(
                    <View key={i}>
                        {renderCell(item,wth,cellHeight,cellTextStyle,cellBorderStyle)}
                    </View>
                )
            })}
        </View>
        ) : null;
    }

    const renderTableData = () => {
        const { tableData } = props;
       

        return tableData ? (
        <View style={[{ height: 'auto'}]}>
            {tableData.map((item, i) => {
                return(
                    <View key={i}>
                        {renderRow(item)}
                    </View>
                )
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
                widthArr?
            {
                borderTopWidth,
                borderRightWidth,
                borderColor
            } : {},
            styles.cell,
            width && { width },
            height && { height },
            !width && { flex: 1 }
            ]}
        >
            {textDom}
        </View>
        );
  }

    
    const  head  = renderHead()
    const rows = renderTableData()
    return (
    <View
        style={[
        props.style, widthArr ?
        {
            borderLeftWidth,
            borderBottomWidth,
            borderColor
        } : {},
        styles.table
        ]}
    >
        {head}
        {rows}
    </View>
    );


}


const styles = StyleSheet.create({
    table: {
        marginVertical: 10,
        marginHorizontal: 'auto',
        justifyContent: 'center',
        flex: 1,
    },
    cell: { justifyContent: 'center' },
    text: { backgroundColor: 'transparent' },
    row: {
        flexDirection: 'row',
        overflow: 'hidden',
        justifyContent: 'space-around',
      }
  });