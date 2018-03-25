import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { Header, Icon, InputText, TabSearch, View } from '../../Components'
import { Icons } from '../../Assets';
import { BaseStyles } from '../../Theme'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this._inputSearch = null;
        this.state = {
            isSearch: false,
            textSearch: ''
        };
    }

    _renderHeader = () => {
        const { isSearch } = this.state;
        return (
            <Header
                left={[
                    <Icon
                        key={'icon'}
                        name={isSearch ? Icons.back : Icons.search}
                        onPress={() => this.setState({ isSearch: !isSearch })} />,
                    <InputText
                        onChangeText={text => this.setState({ textSearch: text })}
                        onFocus={() => this.setState({ isSearch: true })}
                        hint="Search"
                        key={'haha'}
                        ref={(com) => { this._inputSearch = com; }} />
                ]}
            />
        );
    }

    _renderContentSearch = () => {
        const { isSearch, textSearch } = this.state;
        return isSearch ? <TabSearch textSearch={textSearch} /> : null;
    }

    _renderContent = () => {
        return (
            <View />
        );
    }

    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                {this._renderHeader()}
                {this._renderContentSearch()}
            </View>
        );
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isSearch) {
            this._inputSearch.focus();
        } else {
            Keyboard.dismiss();
        }
    }
}