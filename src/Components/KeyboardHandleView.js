import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import View from './View'
import { Utils } from '../Helper';
import Consts from '../Configs/Consts'

export default class KeyboardHandleView extends Component {
    static propTypes = {
        hasTab: PropTypes.bool
    };
    static defaultProps = {
        hasTab: false
    };

    constructor(props) {
        super(props);
        this.state = {
            heightKeyBoard: 0
        };
    }

    componentWillMount() {
        const updateListener = Utils.isIos() ? 'keyboardDidShow' : 'keyboardWillShow';
        const resetListener = Utils.isIos() ? 'keyboardDidHide' : 'keyboardWillHide';

        this._listeners = [
            Keyboard.addListener(updateListener, this._keyboardDidShow),
            Keyboard.addListener(resetListener, this._keyboardDidHide)
        ];
    }

    render() {
        let { heightKeyBoard, style } = this.state;
        return (
            <View
                style={[{
                    height: platform ? heightKeyBoard : 0,
                }, style]}
            />
        );
    }

    componentWillUnmount = () => {
        this._listeners.forEach(listener => listener.remove());
    }

    _keyboardDidShow = (event) => {
        const { hasTab } = this.props;
        this.setState({
            heightKeyBoard: hasTab
                ? event.endCoordinates.height - Consts.navBarHeight
                : event.endCoordinates.height
        });
    }

    _keyboardDidHide = (event) => {
        this.setState({ heightKeyBoard: 0 });
    }
}