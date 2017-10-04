import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from '../components';
//all screen
import Splash from '../screens/splash';
import Home from '../screens/home';
import Camera from '../screens/camera';
import Message from '../screens/message';
import NewPost from '../screens/newPost';
import Notification from '../screens/notification';
import Search from '../screens/search';
import Profile from '../screens/profile';
import { colors, styleApp, constants } from '../configs';
import { icon } from '../assets';

const getIconTab = (name) => ({ tintColor }) => (
    <Icon name={name} color={tintColor} disable />
);

const Navigation = StackNavigator(
    {
        Splash: {
            screen: Splash
        },
        TabMain: {
            screen: TabNavigator({
                TabHome: {
                    screen: TabNavigator({
                        Camera: {
                            screen: Camera,
                            navigationOptions: {
                                tabBarLabel: 'Camera'
                            }
                        },
                        Home: {
                            screen: Home,
                            navigationOptions: {
                                tabBarLabel: 'InstaDuck'
                            }
                        },
                        Message: {
                            screen: Message,
                            navigationOptions: {
                                tabBarLabel: 'Message'
                            }
                        }
                    }, {
                            initialRouteName: 'Home',
                            swipeEnabled: false,
                            animationEnabled: false,
                            lazy: true,
                            tabBarComponent: TabBarBottom,
                            tabBarOptions: {
                                style: {
                                    width: 0,
                                    height: 0
                                }
                            },
                        }
                    ),
                    navigationOptions: {
                        tabBarLabel: 'TabHome',
                        tabBarIcon: getIconTab(icon.home)

                    }
                },
                Search: {
                    screen: Search,
                    navigationOptions: {
                        tabBarLabel: 'Search',
                        tabBarIcon: getIconTab(icon.search)
                    }
                },
                NewPost: {
                    screen: NewPost,
                    navigationOptions: {
                        tabBarLabel: 'NewPost',
                        tabBarIcon: getIconTab(icon.add)
                    }
                },
                Notification: {
                    screen: Notification,
                    navigationOptions: {
                        tabBarLabel: 'Notification',
                        tabBarIcon: getIconTab(icon.noti)
                    }
                },
                Profile: {
                    screen: Profile,
                    navigationOptions: {
                        tabBarLabel: 'Profile',
                        tabBarIcon: getIconTab(icon.profile)
                    }
                },
            }, {
                    tabBarComponent: TabBarBottom,
                    tabBarPosition: 'bottom',
                    swipeEnabled: false,
                    lazy: true,
                    tabBarOptions: {
                        activeTintColor: 'black',
                        inactiveTintColor: colors.border,
                        showLabel: false,
                        showIcon: true,
                        style: {
                            ...styleApp.disable_shadow,
                            backgroundColor: colors.white,
                            height: constants.navBarHeight
                        }
                    },

                }
            )
        }

    },
    {
        initialRouteName: 'TabMain',
        headerMode: 'none',
        cardStyle: {
            ...styleApp.disable_shadow,
            backgroundColor: colors.bg_app,
        },

    }
);

const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(Navigation);
