import React, { Component } from 'react';
import { TabNavigator, TabBarTop } from 'react-navigation';
import { View } from 'react-native';
import { Colors, Constants, Style } from '../configs';

class Top extends Component {
    render() {
        // text của input thay đổi this.props.screenProps.textSearchv
        return (
            <View />
        );
    }
}

class People extends Component {
    render() {
        return (
            <View />
        );
    }
}

class Tags extends Component {
    render() {
        return (
            <View />
        );
    }
}

class Places extends Component {
    render() {
        return (
            <View />
        );
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
            activeTintColor: Colors.black,
            inactiveTintColor: Colors.border,
            showLabel: true,
            indicatorStyle: {
                backgroundColor: Colors.black
            },
            style: {
                ...Style.shadow,
                backgroundColor: Colors.white,
                height: Constants.navBarHeight
            }
        }


    });


export default class TabSearch extends Component {
    render() {
        const { textSearch } = this.props;
        return (
            <ViewContent screenProps={{ textSearch }} />
        );
    }
}
