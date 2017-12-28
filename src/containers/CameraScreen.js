import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from '../components';
import { Constants } from '../configs';
import { Icons } from '../assets';
class Camera extends Component {

    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={styles.containers}
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

const styles = StyleSheet.create({
    containers: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
});

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Camera);
