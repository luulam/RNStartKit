import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native'
import { Header, Icon } from '../components'
import { constants } from '../configs'
import { icon } from '../assets'
class Home extends Component {
    componentDidMount() {

    }

    render() {
        const { routeName } = this.props.navigation.state
        return (
            <View
                style={styles.containers}
            >
                <Header
                    title={routeName}
                    left={<Icon name={icon.camera}
                        onPress={() => this.props.navigation.navigate('Camera')} />}
                >
                    <Icon
                        name={icon.message}
                        onPress={() => this.props.navigation.navigate('Message')} />
                </Header>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containers: {
        paddingTop: constants.statusBarHeight,
        flex: 1
    }
})

Home.propTypes = {
    navigation: PropTypes.any
}

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Home)