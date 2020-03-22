import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let video = this.props.video;
    console.log(video)
    return (
      <View style={styles.container}>
        <Image
          style={{height: 200, borderRadius: 5}}
          source={{uri: video.snippet.thumbnails.medium.url}}></Image>
      <View style={styles.textContainer}>
          <Image style={styles.profilePic} source={{uri:video.snippet.thumbnails.default.url}}></Image>
    
    <View style={styles.innerContainer}>
    <Text style={styles.videoTitle}>{video.snippet.title}</Text>
    <Text style={styles.videoStats}>{video.snippet.channelTitle} - 140K Views</Text>
    

    </View>
      </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding:15,
    backgroundColor:'black'
  },
  textContainer:{

    flexDirection:'row',
    paddingTop:15,
    marginLeft:9,
    padding:5,
    
  },
  videoTitle:{
    fontSize:14,
    fontWeight:'bold',
    color:'#fff',
    marginRight:4,
    marginLeft:4,
    justifyContent:'center',
    
  },
  profilePic:{
      width:50,
      height:50,
      borderRadius:25,
      borderWidth:2,
      borderColor:'#fff'
  },
  innerContainer:{
      marginLeft:10,
      padding:5
  },
  videoStats:{
      fontSize:12,
      color:'#fff',
      marginTop:5
  }
});
