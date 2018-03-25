import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../Components';
import { Metrics } from '../../Theme'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('TabMain');
        }, 1000);
    }
    render() {
        return (
            <View
                style={styles.containers}
            />
        );
    }
}

const styles = StyleSheet.create({
    containers: {
        paddingTop: Metrics.statusBarHeight,
        flex: 1
    }
});