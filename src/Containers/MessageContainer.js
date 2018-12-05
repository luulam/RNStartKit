import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Header, Icon } from '../Components'
import { BaseStyles } from '../Theme'
import { Icons } from '../Assets'

class Message extends Component {
    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
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

const mapStateToProps = (state) => { return {} };

const mapDispatchToProps = (dispatch) => { return {} };

export default connect(mapStateToProps, mapDispatchToProps)(Message);
