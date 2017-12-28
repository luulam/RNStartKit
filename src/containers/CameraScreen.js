import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Header, Icon } from '../components';
import { BaseStyles } from '../theme';
import { Icons } from '../assets';

class Camera extends Component {

    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <Header
                    title={routeName}
                >
                    <Icon
                        name={Icons.back_right}
                        onPress={() => this.props.navigation.navigate('Home')} />
                </Header>

            </View>
        );
    }
}

Camera.propTypes = {
    navigation: PropTypes.any
};

export default connect(null, null)(Camera);
