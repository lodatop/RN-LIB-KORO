import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export const KoroCard = (props) => {

    const renderHeader = () => {
        const header = props.header();
    
        return React.cloneElement(header, {
          style: [styles.header, header.props.style ]
        });
    };
    
      const renderFooter = (style) => {
        const footer = props.footer();
    
        return React.cloneElement(footer, {
          style: [style, styles.footer, footer.props.style],
        });
      };

    const renderBody = (style) => {
        return (
          <View style={[styles.body, style]}>
            {props.children}
          </View>
        );
      };

      const renderDivider = () => {
        return (
          <View style={ styles.divider }/>
        );
      };

      const renderComponentChildren = () => {
        const { header, footer } = props;
    
        return [
          header && renderHeader(),
          renderBody(),
          footer && renderFooter(),
        ];
      };

      const { style,  ...restProps } = props;
      const [header, body, footer] = renderComponentChildren();
  
      return (
        <TouchableOpacity
          activeOpacity={1.0}
          {...restProps}
          style={[styles.container, style]}>
          {header}
          {header && renderDivider()}
          {body}
          {footer && renderDivider()}
          {footer}
        </TouchableOpacity>
      );
    
}


const styles = StyleSheet.create({
    divider: {
        alignSelf: 'stretch',
        backgroundColor: 'black',
        height: 1,
    },
    container: {
        alignSelf: 'stretch',
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    header: {
        padding: 12,
        backgroundColor: 'transparent',
        fontSize: 50,
        fontWeight: 'bold'
    },
    body: {
        padding: 15,
        backgroundColor: 'transparent',
    },
    footer: {
        padding: 15,
        backgroundColor: 'transparent',
    },
    headerText: {
        marginHorizontal: 24,
        marginVertical: 16,
    },
    headerImage: {
        flex: 1,
        height: 192,
    },
  });