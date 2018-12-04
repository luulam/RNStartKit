import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer,TabBarTop } from 'react-navigation';
import { View } from '../Components';
import { Colors, BaseStyles, Metrics } from '../Theme'

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

const ViewContent = createMaterialTopTabNavigator({
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
            activeTintColor: Colors.text,
            inactiveTintColor: Colors.border,
            showLabel: true,
            indicatorStyle: {
                backgroundColor: Colors.black
            },
            style: {
                ...BaseStyles.shadow,
                backgroundColor: Colors.header,
                height: Metrics.navBarHeight
            }
        }


    });

const ViewContentContainer = createAppContainer(ViewContent);
export default class TabSearch extends Component {
    render() {
        const { textSearch } = this.props;
        return (
            <ViewContentContainer screenProps={{ textSearch }} />
        );
    }
}
