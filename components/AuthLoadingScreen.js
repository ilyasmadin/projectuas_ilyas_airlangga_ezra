import React, { Component } from 'react';
import { View, ActivityIndicator,StatusBar,AsyncStorage } from 'react-native';
import firebase from 'firebase';

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        //ngecek login lewat firebase
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.props.navigation.navigate('App')
            }else{
                this.props.navigation.navigate('Auth')
            }
        })
        
        //ngecek login lewat state
        //const userToken = await AsyncStorage.getItem('userToken');
        //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}