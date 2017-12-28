import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { BaseStyles, Colors, Metrics } from '../theme';
import { Icon } from '../components';
//all screen
import Splash from '../containers/SplashScreen';
import Home from '../containers/HomeScreen';
import Camera from '../containers/CameraScreen';
import Message from '../containers/MessageScreen';
import NewPost from '../containers/NewPostScreen';
import Notification from '../containers/NotificationScreen';
import Search from '../containers/SearchScreen';
import Profile from '../containers/ProfileScreen';
import { Icons } from '../assets';

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
                            swipeEnabled: true,
                            animationEnabled: true,
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
                        tabBarIcon: getIconTab(Icons.home)

                    }
                },
                Search: {
                    screen: Search,
                    navigationOptions: {
                        tabBarLabel: 'Search',
                        tabBarIcon: getIconTab(Icons.search)
                    }
                },
                NewPost: {
                    screen: NewPost,
                    navigationOptions: {
                        tabBarLabel: 'NewPost',
                        tabBarIcon: getIconTab(Icons.add)
                    }
                },
                Notification: {
                    screen: Notification,
                    navigationOptions: {
                        tabBarLabel: 'Notification',
                        tabBarIcon: getIconTab(Icons.noti)
                    }
                },
                Profile: {
                    screen: Profile,
                    navigationOptions: {
                        tabBarLabel: 'Profile',
                        tabBarIcon: getIconTab(Icons.profile)
                    }
                },
            }, {
                    tabBarComponent: TabBarBottom,
                    tabBarPosition: 'bottom',
                    swipeEnabled: false,
                    lazy: true,
                    tabBarOptions: {
                        activeTintColor: 'black',
                        inactiveTintColor: Colors.border,
                        showLabel: false,
                        showIcon: true,
                        style: {
                            ...BaseStyles.disable_shadow,
                            backgroundColor: Colors.white,
                            height: Metrics.navBarHeight
                        }
                    },

                }
            )
        }

    },
    {
        initialRouteName: 'Splash',
        headerMode: 'none',
        cardStyle: {
            ...BaseStyles.disable_shadow,
            backgroundColor: Colors.background,
        },

    }
);
const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(Navigation);
