import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from '../components';
import { Constants } from '../configs';
import { Icons } from '../assets';

class Message extends Component {
    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={styles.containers}
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

const styles = StyleSheet.create({
    containers: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
});

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

Message.propTypes = {
    navigation: PropTypes.any
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
