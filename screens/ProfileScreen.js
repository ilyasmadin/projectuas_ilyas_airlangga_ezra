import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView,Button } from 'react-native';
import MenuButton from '../components/MenuButton';
import { Image } from 'react-native'
import { Card, ListItem, Icon } from 'react-native-elements'
import Ionicons from '@expo/vector-icons/Ionicons';

import firebase from "firebase";
const users = [
  {
     name: 'Ezra Eugene',
     avatar: '../assets/jerry.png'
  },
 ]


export default class ProfileScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation} />
        <Card
          title='Ezra Eugene H S'
          image={require('../assets/cool2.jpg')}
          >
          <Text style={{marginBottom: 10,textAlign: 'left'}}>
            NIM   : 173140714111006{"\n"}
            TTL   : Jakarta, 21 April 1999{"\n"}
            <Ionicons name ="logo-facebook" color ="#000" size={20} style={styles.menuIcon}/>
            Ezra Eugene{"\n"}
            <Ionicons name ="logo-whatsapp" color ="#27ae60" size={20} style={styles.menuIcon}/>
              085232016960{"\n"}
              <Ionicons name ="logo-instagram" color ="#6F1E51" size={20} style={styles.menuIcon}/>
              @ezraeugene{"\n"}
          </Text>
          {/* <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' /> */}
        </Card>
        <Card
          title='Ilyas Madin Akbar'
          image={require('../assets/cool3.jpg')}>
          <Text style={{marginBottom: 10}}>
            NIM   : 173140714111017{"\n"}
            TTL   : Jember, 10 Oktober 1999{"\n"}
            <Ionicons name ="logo-facebook" color ="#000" size={20} style={styles.menuIcon}/>
            Ilyas Madin Akbar{"\n"}
            <Ionicons name ="logo-whatsapp" color ="#27ae60" size={20} style={styles.menuIcon}/>
            081216064004{"\n"}
              <Ionicons name ="logo-instagram" color ="#6F1E51" size={20} style={styles.menuIcon}/>
              @ilyasmadin_a{"\n"}
          </Text>
          {/* <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' /> */}
        </Card>
        <Card
          title='Airlangga J'
          image={require('../assets/cool.jpg')}
          >
          <Text style={{marginBottom: 10}}>
            NIM   : 173140714111004{"\n"}
            TTL   : Lumajang, 20 Oktober 1999{"\n"}
            <Ionicons name ="logo-facebook" color ="#000" size={20} style={styles.menuIcon}/>
            Airlangga J{"\n"}
            <Ionicons name ="logo-whatsapp" color ="#27ae60" size={20} style={styles.menuIcon}/>
              085954588332{"\n"}
              <Ionicons name ="logo-instagram" color ="#6F1E51" size={20} style={styles.menuIcon}/>
              @airln99a{"\n"}
          </Text>
          {/* <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' /> */}
        </Card>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
      </ScrollView>
    );
  }

  _signOutAsync= () => {
    firebase.auth().signOut().then(function () {
        this.props.navigation.navigate('Auth');
    }).catch(function (error) {
        console.log(error)
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  },
  text:{
      fontSize: 30,
  },
  menuIcon:  {
    flex:1,
        zIndex: 9,
        marginTop: 100
    },
});
