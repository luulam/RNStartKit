import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../Components'
import { Colors, Metrics, BaseStyles } from '../../Theme';

class Notify extends Component {
    static propTypes = {
        notifys: PropTypes.array,
    }

    static defaultProps = {
        notifys: []
    }

    _renderNotify = (v, i) => {
        return (
            <View
                style={styles.border}
                key={i}>
                <Text
                    color={Colors.text_light}
                    text={v.title} />
            </View>
        );
    }

    render() {
        let { notifys } = this.props;
        return (
            <View style={styles.containers}>
                {notifys.map(this._renderNotify)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containers: {
        bottom: Metrics.padVer * 2,
        left: 0,
        right: 0,
        justifyContent: 'center',
        position: 'absolute',
    },
    border: {
        backgroundColor: Colors.access,
        padding: Metrics.pad,
        marginBottom: Metrics.padVer,
        marginHorizontal: Metrics.padHor * 2,
        height: Metrics.btnHeight,
        borderRadius: Metrics.btnHeight / 2,
        alignItems: 'center',
        justifyContent: 'center',
        ...BaseStyles.shadow
    },
    text: {
        color: Colors.text_light
    }
});

const mapStateToProps = (state) => {
    return {
        notifys: state.app.notifys,
    };
};

export default connect(mapStateToProps)(Notify);
