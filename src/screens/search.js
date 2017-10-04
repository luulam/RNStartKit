import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, StyleSheet, Keyboard } from 'react-native'
import { Header, Icon, InputText, TabSearch } from '../components'
import { constants } from '../configs'
import { icon } from '../assets'

class Search extends Component {
    constructor(props) {
        super(props)
        this._inputSearch = null
        this.state = {
            isSearch: false,
            textSearch: ''
        }
    }

    _renderHeader = () => {
        const { isSearch } = this.state;
        return (
            <Header
                left={[
                    <Icon
                        key={'icon'}
                        name={isSearch ? icon.back : icon.search}
                        onPress={() => this.setState({ isSearch: !isSearch })} />,
                    <InputText
                        onChangeText={text => this.setState({ textSearch: text })}
                        onFocus={() => this.setState({ isSearch: true })}
                        hint='Search'
                        key={'haha'}
                        ref={(com) => this._inputSearch = com} />
                ]}
            />
        )
    }

    _renderContentSearch = () => {
        const { isSearch, textSearch } = this.state
        return isSearch ? <TabSearch textSearch={textSearch} /> : null
    }

    _renderContent = () => {
        return (
            <View></View>
        )
    }

    render() {
        return (
            <View
                style={styles.containers}
            >
                {this._renderHeader()}
                {this._renderContentSearch()}
            </View>
        )
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isSearch) {
            this._inputSearch.focus()
        } else {
            Keyboard.dismiss()
        }
    }
}

const styles = StyleSheet.create({
    containers: {
        paddingTop: constants.statusBarHeight,
        flex: 1
    }
})

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Search)