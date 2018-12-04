import React, { Component } from 'react';
import { View } from '../../Components'
import { BaseStyles } from '../../Theme'

export default class Splash extends Component {
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            />
        );
    }
}