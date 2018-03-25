import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Header, Icon } from '../../Components'
import { BaseStyles } from '../../Theme'
import { Icons } from '../../Assets'

export default class Message extends Component {
    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <Header
                    title={routeName}
                    left={
                        <Icon
                            name={Icons.back}
                            onPress={() => this.props.navigation.navigate('Home')} />
                    }
                />
            </View>
        );
    }
}