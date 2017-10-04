import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { } from '../components';
import { constants } from '../configs';

class NewPost extends Component {
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
        paddingTop: constants.statusBarHeight,
        flex: 1
    }
});

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
