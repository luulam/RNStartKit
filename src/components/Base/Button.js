import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Metrics, Colors, BaseStyles, Fonts } from '../../Theme'
import { Text } from '../';

let ButtonApp = ({
    style,
    title,
    border,
    backgroundColor,
    onPress,
    disable,
    children,
    width
}) => {
    return (
        <TouchableOpacity
            disabled={disable}
            activeOpacity={Metrics.opacity}
            onPress={onPress}
            style={[
                styles.containers,
                {
                    borderRadius: border ? Metrics.btnHeight / 2 : undefined,
                    borderWidth: border ? backgroundColor !== Colors.white ? 0 : Metrics.border : 0,
                    borderColor: Colors.border,
                    backgroundColor,
                    width
                },
                style]}>
            <Text
                color={backgroundColor !== Colors.white ? Colors.white : Colors.text}
                text={title}
                fontSize={Fonts.size.medium} />
            {children}
        </TouchableOpacity>
    );
};

let styles = StyleSheet.create({
    containers: {
        paddingHorizontal: Metrics.padHor,
        height: Metrics.btnHeight,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        ...BaseStyles.shadow
    },
    containersLeft: {
        flexDirection: 'row'
    }
});

ButtonApp.propTypes = {
    title: PropTypes.string,
    style: PropTypes.any,
    border: PropTypes.bool,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
    disable: PropTypes.bool,
    children: PropTypes.any,
    width: PropTypes.number
};

ButtonApp.defaultProps = {
    border: true,
    backgroundColor: Colors.access
};

export default ButtonApp;
