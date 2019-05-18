import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from "./components/AuthLoadingScreen";
import SignInScreen from "./components/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import OtherScreen from "./screens/OtherScreen";
import DrawerNavigation from './Navigation/DrawerNavigation';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: DrawerNavigation }, { headerMode: 'none' });
const AuthStack = createStackNavigator({ SignIn: SignInScreen }, { headerMode: 'none' });

const AppContaner =  createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
export default class App extends React.Component {
//sesuaikan dengan project firebase masing-masing
  componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyCLAl7jydzDXBcDVDMsr5LMb7z_amb9yqQ",
    authDomain: "uas-mobile-terapan.firebaseapp.com",
    databaseURL: "https://uas-mobile-terapan.firebaseio.com",
    projectId: "uas-mobile-terapan",
    storageBucket: "uas-mobile-terapan.appspot.com",
    messagingSenderId: "118091416886",
    appId: "1:118091416886:web:cf7dd6c2558ce4f8"

      });
  }
  
  render() {
    return (
      <AppContaner />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});