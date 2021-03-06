import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppCreators } from '../Redux/AppRedux'
import PropTypes from 'prop-types';
import { View, Header, Icon } from '../Components'
import { BaseStyles } from '../Theme'
import { Icons } from '../Assets'


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

const mapStateToProps = (state) => { return {} };

const mapDispatchToProps = (dispatch) => {
    return {
        putNotify: () => dispatch(AppCreators.putNotify('title')),
        showDialog: () => dispatch(AppCreators.showDialog('title', 'message')),
        hideDialog: () => dispatch(AppCreators.hideDialog())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
