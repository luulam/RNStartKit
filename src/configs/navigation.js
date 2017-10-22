import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from '../components';
//all screen
import Splash from '../screens/SplashScreen';
import Home from '../screens/HomeScreen';
import Camera from '../screens/CameraScreen';
import Message from '../screens/MessageScreen';
import NewPost from '../screens/NewPostScreen';
import Notification from '../screens/NotificationScreen';
import Search from '../screens/SearchScreen';
import Profile from '../screens/ProfileScreen';
import { Colors, Constants, Style } from '../configs';
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
                            ...Style.disable_shadow,
                            backgroundColor: Colors.white,
                            height: Constants.navBarHeight
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
            ...Style.disable_shadow,
            backgroundColor: Colors.bg_app,
        },

    }
);

const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(Navigation);
