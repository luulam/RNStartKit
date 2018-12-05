import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from '../Components'
import { BaseStyles, Colors, Metrics, } from '../Theme';
import { Icons } from '../Assets'
//all screen
import Splash from '../Containers/SplashContainer';
import Home from '../Containers/HomeContainer';
import Camera from '../Containers/CameraContainer';
import Message from '../Containers/MessageContainer';
import NewPost from '../Containers/NewPostContainer';
import Notification from '../Containers/NotificationContainer';
import Search from '../Containers/SearchContainer';
import Profile from '../Containers/ProfileContainer';

const getIconTab = (name) => ({ tintColor }) => (
    <Icon name={name} color={tintColor} disable />
);

const AppNavigator = createStackNavigator(
    {
        Splash: {
            screen: Splash
        },
        TabMain: {
            screen: createMaterialTopTabNavigator({
                TabHome: {
                    screen: createMaterialTopTabNavigator({
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
                    swipeEnabled: true,
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
const AppContainer = createAppContainer(AppNavigator);
const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(AppContainer);