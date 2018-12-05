import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Header, Icon } from '../Components'
import { BaseStyles } from '../Theme'
import { Icons } from '../Assets'

class Camera extends Component {
    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View
                style={BaseStyles.screen.mainContainer}
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

const mapStateToProps = (state) => { return {} };

const mapDispatchToProps = (dispatch) => { return {} };

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
