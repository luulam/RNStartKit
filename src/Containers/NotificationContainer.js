import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from '../Components'
import { BaseStyles } from '../Theme'

class Notification extends Component {
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            />
        );
    }
}

const mapStateToProps = (state) => { return {} };

const mapDispatchToProps = (dispatch) => { return {} };

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
