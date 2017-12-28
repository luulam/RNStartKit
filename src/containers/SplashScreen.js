import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { } from '../components';
import { Metrics } from '../theme';

class Splash extends Component {
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('TabMain');
        },1000);
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

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
