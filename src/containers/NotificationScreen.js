import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { } from '../components';
import { BaseStyles } from '../theme';

class Notification extends Component {
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            />
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
