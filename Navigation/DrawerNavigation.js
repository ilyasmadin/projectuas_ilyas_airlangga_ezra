import React from 'react';
import { Dimensions,Platform } from 'react-native';
import { createAppContainer, createDrawerNavigator, createBottomTabNavigator,createStackNavigator   } from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import CameraScreen from '../screens/CameraScreen'

import HomeScreen from '../screens/HomeScreen';

import SettingScreen from '../screens/SettingScreen';

import MenuDrawer from '../components/MenuDrawer';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OtherScreen from '../screens/OtherScreen';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth:WIDTH*0.75 ,
    contentComponent:({navigation}) =>{
        return (<MenuDrawer navigation={navigation} />)
    }
}

const Tabs = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon color='#fff' name="ios-home" size={25}  />
            )
        }
    },
    Info:{
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: "Info",
            tabBarIcon: ({ tintColor }) => (
                <Icon color='#fff' name="ios-contacts" size={25}  />
            )
        }
    },
	Contact: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: "Contact",
            tabBarIcon: ({ logotintColor }) => (
                <Icon color='#fff' name="logo-tumblr" size={25}  />
            )
        }
    },
}, {
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#ed8a63',
        style: {
            backgroundColor: '#2C3A47',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Tabs
        },
        ToDo: {
            screen: OtherScreen
        },
        Map: {
            screen: MapScreen
        },
    },
    DrawerConfig
);

_signOutAsync= () => {
    firebase.auth().signOut().then(function () {
        this.props.navigation.navigate('Auth');
    }).catch(function (error) {
        console.log(error)
    });
};

const StackNavigator = createStackNavigator({
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null,
        }
    }
});
export default createAppContainer(StackNavigator);