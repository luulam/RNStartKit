import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from './';
import { Constants, Style } from '../configs';
import { Icons } from '../assets';

/**
 * 
 * @param 
 * @return <View/>
 */

let HeaderApp = ({
    style,
    title,
    children,
    left,
    backPress,
    center
}) => {
    return (
        <View
            style={style}
        >
            <View
                style={styles.containerRow}
            >
                {backPress
                    ? <Icon
                        name={Icons.back}
                    />
                    : null}
                {left}
            </View>

            <View
                style={styles.containerRow}
            >
                {children}
            </View>

            {title ?
                <Text
                    style={styles.containerCenter}
                    align={'center'}
                    text={title}
                    fontSize={Constants.font.header}
                    bold
                />
                : null}

        </View>
    );
};

let styles = StyleSheet.create({
    containers: {
        paddingHorizontal: Constants.padHor,
        height: Constants.navBarHeight,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...Style.shadow
    },
    containerRow: {
        flexDirection: 'row'
    },
    containerCenter: {
        zIndex: -1,
        position: 'absolute',
        left: 0,
        right: 0
    }
});

HeaderApp.propTypes = {
    style: PropTypes.any,
    title: PropTypes.string,
    children: PropTypes.any,
    left: PropTypes.any,
    backPress: PropTypes.func,
    center: PropTypes.string
};

HeaderApp.defaultProps = {
    style: styles.containers
};


export default HeaderApp;
