import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export default class ViewApp extends Component {
    static propTypes = {
        disable: PropTypes.bool,
        disTouch: PropTypes.bool
    }
    static defaultProps = {
        disable: false,
        disTouch: true,
    }

    render() {
        return <View {...this.props} />
    }
}