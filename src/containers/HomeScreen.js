import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Header, Icon } from '../components';
import { BaseStyles } from '../theme';
import { Icons } from '../assets';

class Home extends Component {
    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                <Header
                    title={routeName}
                    left={<Icon name={Icons.camera}
                        onPress={() => this.props.navigation.navigate('Camera')} />}
                >
                    <Icon
                        name={Icons.message}
                        onPress={() => this.props.navigation.navigate('Message')} />
                </Header>
            </View>
        );
    }
}

Home.propTypes = {
    navigation: PropTypes.any
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
