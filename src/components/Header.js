import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, Icon, View } from '../Components';
import { Fonts, BaseStyles, Colors, Metrics } from '../Theme'
import { Icons } from '../Assets'

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
            style={[styles.containers, style]}
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
                    fontSize={Fonts.size.h3}
                    bold
                />
                : null}

        </View>
    );
};

let styles = StyleSheet.create({
    containers: {
        paddingHorizontal: Metrics.padHor,
        height: Metrics.navBarHeight,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.header,
        ...BaseStyles.shadow
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

};

export default HeaderApp;
