import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Metrics } from '../Theme';
import { Icons } from '../Assets'

export default class IconApp extends Component {
    static defaultProps = {
        name: Icons.error,
        size: Metrics.icons.medium,
        color: Colors.text,
        disable: false
    };

    static propTypes = {
        style: PropTypes.any,
        name: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        onPress: PropTypes.func,
        disable: PropTypes.bool
    }
    render() {
        const { style, name, size, color, onPress, disable } = this.props
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
    }
}

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

