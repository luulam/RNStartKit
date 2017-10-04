import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabNavigator, TabBarTop } from 'react-navigation'
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { colors, constants, styleApp } from '../configs'
import { Text, Icon } from './'

class Top extends Component {
    render() {
        // text của input thay đổi this.props.screenProps.textSearchv
        return (
            <View>
            </View>
        )
    }
}

class People extends Component {
    render() {
        return (
            <View>
            </View>
        )
    }
}

class Tags extends Component {
    render() {
        return (
            <View>
            </View>
        )
    }
}

class Places extends Component {
    render() {
        return (
            <View>
            </View>
        )
    }
}

const ViewContent = TabNavigator({
    Top: {
        screen: Top
    },
    People: {
        screen: People
    },
    Tags: {
        screen: Tags
    },
    Places: {
        screen: Places
    },
}, {
        lazy: true,
        swipeEnabled: true,
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: colors.black,
            inactiveTintColor: colors.border,
            showLabel: true,
            indicatorStyle: {
                backgroundColor: colors.black
            },
            style: {
                ...styleApp.shadow,
                backgroundColor: colors.white,
                height: constants.navBarHeight
            }
        }


    })


export default class TabSearch extends Component {
    render() {
        const { textSearch } = this.props
        return (
            <ViewContent screenProps={{ textSearch }} />
        )
    }
}