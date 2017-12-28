import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Icons } from '../../assets';

/**
 * 
 * @return <Text/>
 */

let IconApp = ({
    style,
    name,
    size,
    color,
    onPress,
    disable
}) => {
    return (
        <TouchableOpacity
            disabled={disable}
            activeOpacity={Metrics.opacity}
            onPress={onPress}
            style={[style, styles.containers]}>
            <Icon
                style={styles.icon}
                name={name}
                size={size}
                color={color} />
        </TouchableOpacity>
    );
};

let styles = StyleSheet.create({
    containers: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: Metrics.icons.medium,
        width: Metrics.icons.medium
    },
    icon: {
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
});

IconApp.propTypes = {
    style: PropTypes.any,
    name: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    onPress: PropTypes.func,
    disable: PropTypes.bool
};

IconApp.defaultProps = {
    name: Icons.error,
    size: Metrics.icons.medium,
    color: Colors.text,
    disable: false
};

export default IconApp;
