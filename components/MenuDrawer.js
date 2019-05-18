import React, { Component } from 'react'
import { Text, View,Platform, ScrollView,Dimensions,StyleSheet,TouchableOpacity,Image } from 'react-native'
import { ImagePicker,Permissions } from 'expo'
import Ionicons from '@expo/vector-icons/Ionicons';

const WIDTH=Dimensions.get('window').width
const WEIGHT=Dimensions.get('window').height
export default class MenuDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            hasCameraRollPermission: null,
            image:'http://bit.ly/gbr-tugas',
        };
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
        const { statusCameraRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraRollPermission: statusCameraRoll === 'granted' });
    }
    
    navLink(nav,text){
        return(
            <TouchableOpacity style={{height:50}} onPress={()=> this.props.navigation.navigate(nav)}>
            <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1]
        });
        if(!result.cancelled) {
            this.setState({ image: result.uri});
        }
    };
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scroller}> 
      <View style={styles.topLink}>
      <View style={styles.profile}>
      <TouchableOpacity style={styles.imgView} onPress={this._pickImage}>
        <Image style={styles.img} source={{ uri: this.state.image}} />
        
       </TouchableOpacity>
       <Text style={styles.name}>Ilyas Madin</Text>
       <View style={styles.profileText}>
      </View>
      </View>
       </View>
        <View style={styles.buttomLink}>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
 <Ionicons
      name ="md-home" color ="#ed8a63" size={25} style={styles.menuIcon}/>
   {this.navLink('Home', 'Home')}
      </View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
 <Ionicons
      name ="logo-tumblr" color ="#ed8a63" size={25} style={styles.menuIcon}/>
      {this.navLink('ToDo', 'ToDo')}
      </View>
<View style={{flexDirection: 'row', alignItems: 'center'}}>
 <Ionicons
      name ="md-map" color= '#ed8a63' size={25} style={styles.menuIcon}/>
      {this.navLink('Map', 'Map')}
      </View>
        </View>
        </ScrollView>
        <View style={styles.footer}>
     <Text style={styles.description}>UAS Mobile Terapan</Text>
     <Text style={styles.version}>v2.7</Text>
    </View>
   </View>
    )
  }
}
const styles = StyleSheet.create({
    menuIcon:  {
        zIndex: 9,
        paddingLeft:10,
    },
    container:{
        flex:1,
        backgroundColor:'lightgrey'
    },
    link:{
        flex: 1,
        fontSize:20,
        color:'black',
        padding: 6,
        paddingLeft:14,
        margin:5,
        textAlign:'left',
    },
    topLink: {
        height: 160,
        backgroundColor: '#2C3A47',
    },
    buttomLink:{
        flex:1,
        backgroundColor: '#CAD3C8',
        paddingTop:30,
        paddingBottom:450
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
       },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
       },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
       },
    img: {
        height: 80,
        width: 80,
        borderRadius: 50
       },
    name: {
        fontSize: 20,
        paddingLeft: 50,
        color: '#ed8a63',
        textAlign: 'left',
       },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2C3A47',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
       },
    version: {
        flex: 1, 
        textAlign: 'right',
        marginRight: 20,
        color: 'gray'
       },
    description: {
        color: '#ed8a63',
        flex: 1, 
        marginLeft: 20,
        fontSize: 13,
       }
})